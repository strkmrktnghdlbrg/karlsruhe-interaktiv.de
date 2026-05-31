/**
 * Stay22 Direct Travel API — Helper (Karlsruhe)
 * ----------------------------------------------
 * Build-Time-Fetch von Live-Hotel-Daten via /v1/accommodations.
 *
 * - X-API-Key Header (STAY22_API_KEY env var)
 * - Wenn Key fehlt: gibt null zurueck (graceful degradation, statische
 *   Hotels bleiben sichtbar)
 * - Stay22 ToS: 60min Cache OK -> taeglicher Rebuild haelt Preise frisch
 *
 * Karlsruhe hat keine Umlaute im Namen, daher kein Sonder-Mapping noetig.
 * Die address-Umlaut-Ersetzung bleibt defensiv erhalten.
 */

export interface Stay22Accommodation {
  id?: string;
  name: string;
  type?: string;
  image?: string;
  link?: string;
  rating?: { score?: number; count?: number };
  starRating?: number;
  price?: {
    total?: number;
    perNight?: number;
    currency?: string;
    formattedTotal?: string;
    formattedPerNight?: string;
  };
  address?: { full?: string; cityName?: string; areaName?: string };
  distance?: number;
  geo?: { lat?: number; lng?: number };
  policies?: { freeCancellation?: boolean; instantBook?: boolean };
}

export interface Stay22SearchOptions {
  provider?: "booking" | "expedia" | "vrbo" | "hotelscom";
  address?: string;
  lat?: number;
  lng?: number;
  radius?: number;
  type?: string;
  minguestrating?: number;
  minstarrating?: number;
  min?: number;
  max?: number;
  limit?: number;
  currency?: string;
  lang?: string;
  checkin?: string;
  checkout?: string;
  adults?: number;
  children?: number;
  rooms?: number;
  campaign?: string;
  aid?: string;
}

const API_BASE = "https://api.stay22.com/v1";

/**
 * Build-Time Rate-Limit-Handling.
 * Die Stay22-API drosselt aggressiv (HTTP 429). Astro rendert Seiten
 * nebenlaeufig -> ohne Serialisierung feuern Dutzende Calls gleichzeitig.
 * Loesung: globale serielle Queue (ein Request gleichzeitig + Delay) +
 * Retry mit Backoff + In-Memory-Cache pro URL.
 */
const REQUEST_DELAY_MS = 400;
const MAX_RETRIES = 5;
const _cache = new Map<string, Stay22Accommodation[] | null>();
let _chain: Promise<unknown> = Promise.resolve();

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

/** Reiht eine Aufgabe in die globale serielle Queue ein. */
function enqueue<T>(task: () => Promise<T>): Promise<T> {
  const run = _chain.then(task, task);
  _chain = run.then(() => sleep(REQUEST_DELAY_MS), () => sleep(REQUEST_DELAY_MS));
  return run as Promise<T>;
}

/** Booking-Fenster der Stay22-API: checkin max. 2 Jahre in der Zukunft. */
export function isWithinBookingWindow(checkin: string, now = new Date()): boolean {
  const max = new Date(now);
  max.setFullYear(max.getFullYear() + 2);
  max.setDate(max.getDate() - 3); // Puffer
  return new Date(checkin) <= max;
}

function getApiKey(): string | null {
  // @ts-expect-error import.meta.env existiert in Astro/Vite
  const viteKey = typeof import.meta !== "undefined" ? import.meta.env?.STAY22_API_KEY : undefined;
  const nodeKey = typeof process !== "undefined" ? process.env?.STAY22_API_KEY : undefined;
  const key = viteKey || nodeKey;
  return typeof key === "string" && key.length > 0 ? key : null;
}

function formatPrice(amount: number | undefined, currency: string = "EUR"): string | undefined {
  if (amount === undefined || amount === null || Number.isNaN(amount)) return undefined;
  const symbol = currency === "EUR" ? "EUR" : currency === "USD" ? "$" : currency;
  const rounded = Math.round(amount);
  return `${rounded.toLocaleString("de-DE")} ${symbol}`;
}

function normalize(raw: any, meta: { nights?: number; currency?: string } = {}): Stay22Accommodation {
  const currency = meta.currency || raw?.price?.currency || "EUR";
  const total: number | undefined = raw?.price?.total;
  const perNight =
    total !== undefined && meta.nights && meta.nights > 0 ? total / meta.nights : undefined;

  return {
    id: raw?.id ? String(raw.id) : undefined,
    name: raw?.name ?? "",
    type: raw?.type,
    image: raw?.media?.thumbnail,
    link: raw?.links?.url,
    rating: raw?.rating ? { score: raw.rating.value, count: raw.rating.count } : undefined,
    starRating: raw?.rating?.hotelStars,
    price: {
      total,
      perNight,
      currency,
      formattedTotal: formatPrice(total, currency),
      formattedPerNight: formatPrice(perNight, currency),
    },
    address: raw?.location
      ? { full: raw.location.address, cityName: raw.location.cityName, areaName: raw.location.areaName }
      : undefined,
    distance: raw?.location?.distanceInMeters,
    geo: raw?.location?.coordinates
      ? { lat: raw.location.coordinates.lat, lng: raw.location.coordinates.lng }
      : undefined,
    policies: raw?.policies,
  };
}

export async function searchAccommodations(
  options: Stay22SearchOptions,
): Promise<Stay22Accommodation[] | null> {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn("[stay22] STAY22_API_KEY fehlt — Live-Hotels werden uebersprungen.");
    return null;
  }

  const minGuest = options.minguestrating;
  const minStar = options.minstarrating;
  const userLimit = options.limit ?? 10;

  const safeOptions: Stay22SearchOptions = { ...options };
  delete safeOptions.minguestrating;
  delete safeOptions.minstarrating;
  if (minGuest || minStar) {
    safeOptions.limit = Math.max(userLimit * 4, 40);
  }
  if (typeof safeOptions.address === "string") {
    safeOptions.address = safeOptions.address
      .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")
      .replace(/Ä/g, "Ae").replace(/Ö/g, "Oe").replace(/Ü/g, "Ue")
      .replace(/ß/g, "ss");
  }

  const params = new URLSearchParams();
  Object.entries(safeOptions).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== "") params.set(k, String(v));
  });

  const url = `${API_BASE}/accommodations?${params.toString()}`;

  // Cache-Hit: identische URL wird im selben Build nicht erneut gefetcht.
  if (_cache.has(url)) {
    return _cache.get(url) ?? null;
  }

  const result = await enqueue(async () => {
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        const res = await fetch(url, {
          headers: { "X-API-Key": apiKey, Accept: "application/json" },
        });

        if (res.status === 429) {
          const body = await res.text().catch(() => "");
          const m = body.match(/try again in (\d+) seconds/i);
          const waitS = m ? parseInt(m[1], 10) : Math.min(2 ** attempt, 12);
          if (attempt < MAX_RETRIES) {
            await sleep((waitS + 1) * 1000);
            continue;
          }
          console.error(`[stay22] 429 nach ${MAX_RETRIES} Retries — aufgegeben.`);
          return null;
        }

        if (!res.ok) {
          const body = await res.text().catch(() => "");
          console.error(`[stay22] API ${res.status}: ${body.slice(0, 160)}`);
          return null;
        }

        const data = (await res.json()) as
          | { results?: any[]; meta?: { nights?: number; currency?: string } }
          | any[];

        const results = Array.isArray(data) ? data : data.results ?? [];
        const meta = !Array.isArray(data) ? data.meta : undefined;
        return results.map((r) => normalize(r, meta || {}));
      } catch (err) {
        if (attempt < MAX_RETRIES) {
          await sleep((2 ** attempt) * 500);
          continue;
        }
        console.error("[stay22] Fetch fehlgeschlagen:", err);
        return null;
      }
    }
    return null;
  });

  if (result === null) {
    _cache.set(url, null);
    return null;
  }

  let normalized = result;
  if (minGuest !== undefined) {
    normalized = normalized.filter((h) => (h.rating?.score ?? 0) >= minGuest);
  }
  if (minStar !== undefined) {
    normalized = normalized.filter((h) => (h.starRating ?? 0) >= minStar);
  }

  const sliced = normalized.slice(0, userLimit);
  _cache.set(url, sliced);
  return sliced;
}

export async function getTopHotels(
  address: string,
  lmaId: string,
  opts: Partial<Stay22SearchOptions> = {},
): Promise<Stay22Accommodation[] | null> {
  return searchAccommodations({
    provider: "booking",
    address,
    type: "hotel",
    minguestrating: 8.0,
    minstarrating: 3,
    limit: 12,
    currency: "EUR",
    lang: "de",
    aid: lmaId,
    campaign: lmaId,
    ...opts,
  });
}
