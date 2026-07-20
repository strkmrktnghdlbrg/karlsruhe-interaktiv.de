/**
 * Straßenverzeichnis Karlsruhe – Datenmodell + Helfer.
 *
 * Quellen:
 *   - strassen-karlsruhe.json          → Straßenliste + Stadtteil-Zuordnung.
 *     Erzeugt via scripts/build-strassenverzeichnis.py aus der Straßen-Geometrie
 *     (OK Lab Karlsruhe / Code for Karlsruhe; Geometrie © OpenStreetMap-Mitwirkende,
 *     ODbL) und den amtlichen Stadtteilgrenzen (Point-in-Polygon-Join).
 *   - strassen-herkunft-karlsruhe.json → nicht schützbare FAKTEN zur Namensherkunft
 *     (Person, Lebensdaten, Benennungsjahr, frühere Namen, Kategorie).
 *     Erzeugt via scripts/fetch-strassen-herkunft.py. Der urheberrechtlich
 *     geschützte Erläuterungstext aus dem Straßennamenbuch der Stadt Karlsruhe
 *     wird bewusst NICHT übernommen; die Herkunftstexte hier werden aus den
 *     Fakten neu generiert (herkunftView).
 *   - stadtteile-karlsruhe.json        → die 27 amtlichen Stadtteile mit Straßenzahl.
 *
 * Karlsruhe kennt keine Stadtbezirke über den Stadtteilen (anders als Köln),
 * daher gibt es nur die Ebene Stadtteil. Wo ein Stadtteil einen redaktionellen
 * Bezirks-Guide unter /bezirke/<slug>/ hat, wird darauf verlinkt.
 */
import streetsRaw from "./strassen-karlsruhe.json";
import herkunftRaw from "./strassen-herkunft-karlsruhe.json";
import stadtteileRaw from "./stadtteile-karlsruhe.json";
import { districts } from "./districts";

export type StreetStadtteil = { name: string; num: number };

export type Street = {
  name: string;
  slug: string;
  stadtteile: StreetStadtteil[];
  crossesDistricts: boolean;
};

export type Herkunft = {
  name: string;
  kategorie: "Person" | "Flurbezeichnung" | "dokumentiert";
  person?: string;
  gender?: string;
  birth?: string;
  death?: string;
  year?: number;
  previous?: [number | null, string][];
};

export type Stadtteil = {
  num: number;
  name: string;
  slug: string;
  streetCount: number;
};

export const streets = streetsRaw as Street[];
export const stadtteile = stadtteileRaw as Stadtteil[];
const herkunftMap = herkunftRaw as Record<string, Herkunft>;

const normKey = (s: string) =>
  s
    .replace(/\s*\(.*?\)\s*$/, "")
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "");

const bySlug = new Map(streets.map((s) => [s.slug, s]));
export const getStreet = (slug: string): Street | undefined => bySlug.get(slug);

export const getHerkunft = (s: Street): Herkunft | undefined =>
  herkunftMap[normKey(s.name)];

const sttBySlug = new Map(stadtteile.map((t) => [t.slug, t]));
export const getStadtteil = (slug: string): Stadtteil | undefined =>
  sttBySlug.get(slug);

const sttSlugByName = new Map(stadtteile.map((t) => [t.name, t.slug]));
export const stadtteilSlugByName = (name: string): string =>
  sttSlugByName.get(name) ?? name;

// Straßen je Stadtteil vorab gruppieren (ein Durchlauf statt 27x filtern).
const streetsPerStt = new Map<number, Street[]>();
for (const s of streets) {
  for (const t of s.stadtteile) {
    const arr = streetsPerStt.get(t.num);
    if (arr) arr.push(s);
    else streetsPerStt.set(t.num, [s]);
  }
}
const sortedSttCache = new Map<number, Street[]>();
export const streetsByStadtteilNum = (num: number): Street[] => {
  const cached = sortedSttCache.get(num);
  if (cached) return cached;
  const sorted = (streetsPerStt.get(num) ?? [])
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, "de"));
  sortedSttCache.set(num, sorted);
  return sorted;
};

/** Verlinkt einen Stadtteil auf den redaktionellen /bezirke/-Guide, falls vorhanden. */
const editorialSlugs = new Set(districts.map((d) => d.slug));
export const editorialDistrict = (sttSlug: string): string | undefined =>
  editorialSlugs.has(sttSlug) ? `/bezirke/${sttSlug}/` : undefined;

// ---------------------------------------------------------------------------
// Namensherkunft → einzigartige, faktenbasierte Darstellung pro Straße.
// Wir generieren einen Einleitungssatz aus den belegten Fakten (keine
// Fremdtext-Kopie) und zeigen die Fakten strukturiert. Grundlage sind die
// nicht schützbaren Angaben aus dem Straßennamenbuch der Stadt Karlsruhe.
// ---------------------------------------------------------------------------

const KAT_LABEL: Record<Herkunft["kategorie"], string> = {
  Person: "Benannt nach einer Person",
  Flurbezeichnung: "Historische Flurbezeichnung",
  dokumentiert: "Dokumentierte Herkunft",
};

const lebensdaten = (h: Herkunft): string | undefined => {
  const g = h.birth;
  const t = h.death;
  if (g && t) return `${g}–${t}`;
  if (g) return `geboren ${g}`;
  if (t) return `gestorben ${t}`;
  return undefined;
};

/** Frühere Namen als lesbare Fakten-Zeile, z. B. "Schulstraße (1878)". */
const fruehereNamen = (h: Herkunft): string | undefined => {
  if (!h.previous || !h.previous.length) return undefined;
  const parts = h.previous.map(([yr, nm]) => (yr ? `${nm} (${yr})` : nm));
  return parts.join(", ");
};

export type HerkunftView = {
  lead: string;
  katLabel: string;
  person?: string;
  lebensdaten?: string;
  benennung?: number;
  fruehereNamen?: string;
};

export const herkunftView = (
  s: Street,
  h: Herkunft | undefined,
): HerkunftView | undefined => {
  if (!h) return undefined;
  const jahrSatz = h.year ? ` Die offizielle Benennung erfolgte ${h.year}.` : "";

  let lead: string;
  if (h.kategorie === "Person" && h.person) {
    const ld = lebensdaten(h);
    lead =
      `Die ${s.name} ist nach ${h.person}` +
      (ld ? ` (${ld})` : "") +
      ` benannt.` +
      jahrSatz;
  } else if (h.kategorie === "Flurbezeichnung") {
    lead =
      `Der Name der ${s.name} geht auf eine historische Flurbezeichnung zurück.` +
      (h.year ? ` Die Straße wurde ${h.year} amtlich benannt.` : "");
  } else if (h.year) {
    lead =
      `Die ${s.name} wurde ${h.year} amtlich benannt. Die Herkunft des Namens ` +
      `ist im Straßennamenbuch der Stadt Karlsruhe dokumentiert.`;
  } else {
    lead =
      `Die Herkunft des Namens der ${s.name} ist im Straßennamenbuch der ` +
      `Stadt Karlsruhe dokumentiert.`;
  }

  return {
    lead,
    katLabel: KAT_LABEL[h.kategorie],
    person: h.person,
    lebensdaten: lebensdaten(h),
    benennung: h.year,
    fruehereNamen: fruehereNamen(h),
  };
};

/** Datenstand-Hinweis für die Quellenzeile. */
export const STAND = "OpenStreetMap und Straßennamenbuch der Stadt Karlsruhe";
