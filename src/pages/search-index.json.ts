/**
 * Statischer Search-Index. Astro generiert daraus beim Build:
 * /search-index.json
 *
 * Wird von der /suche-Page clientseitig gefetcht und durchsucht.
 */
import type { APIRoute } from "astro";
import { sights } from "../data/sights";
import { hotels } from "../data/hotels";
import { restaurants } from "../data/restaurants";
import { districts } from "../data/districts";
import { categories } from "../data/categories";
import { guides } from "../data/guides";
import { news } from "../data/news";
import { events } from "../data/events";
import { branchen } from "../data/branchen";
import { features } from "../data/features";
import { stadtteile as strassenStadtteile } from "../data/strassen";

export const prerender = true;

type SearchType =
  | "Sehenswuerdigkeit"
  | "Hotel"
  | "Restaurant"
  | "Bezirk"
  | "Kategorie"
  | "Reiseplaner"
  | "News"
  | "Event"
  | "Branche"
  | "Straßenverzeichnis";

type SearchEntry = {
  url: string;
  title: string;
  type: SearchType;
  district?: string;
  lead: string; // 1-2 Saetze fuer die Suchergebnis-Card
  keywords: string; // Tokens fuer die Suche (alles lowercased, raum-separiert)
};

const norm = (s: string) =>
  (s || "")
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const districtName = (slug?: string) =>
  slug ? districts.find((d) => d.slug === slug)?.name ?? slug : undefined;

const stripHtml = (s: string) =>
  (s || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const truncate = (s: string, n = 180) =>
  s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s;

const entries: SearchEntry[] = [
  ...sights.map((s) => ({
    url: `/sehenswuerdigkeiten/${s.slug}/`,
    title: s.name,
    type: "Sehenswuerdigkeit" as const,
    district: districtName(s.district),
    lead: s.shortDesc,
    keywords: norm(
      [s.name, s.type, districtName(s.district), s.shortDesc, ...s.categories]
        .filter(Boolean)
        .join(" "),
    ),
  })),
  ...hotels.map((h) => ({
    url: `/hotels/${h.slug}/`,
    title: h.name,
    type: "Hotel" as const,
    district: districtName(h.district),
    lead: h.shortDesc,
    keywords: norm(
      [
        h.name,
        `${h.stars} sterne`,
        districtName(h.district),
        h.shortDesc,
        ...(h.amenities ?? []),
      ]
        .filter(Boolean)
        .join(" "),
    ),
  })),
  ...restaurants.map((r) => ({
    url: `/restaurants/${r.slug}/`,
    title: r.name,
    type: "Restaurant" as const,
    district: districtName(r.district),
    lead: r.shortDesc,
    keywords: norm(
      [r.name, r.cuisine, r.priceLevel, districtName(r.district), r.shortDesc, ...r.categories]
        .filter(Boolean)
        .join(" "),
    ),
  })),
  ...districts.map((d) => ({
    url: `/bezirke/${d.slug}/`,
    title: d.name,
    type: "Bezirk" as const,
    lead: d.shortDesc,
    keywords: norm([d.name, d.shortDesc, ...d.characterTags].join(" ")),
  })),
  ...categories.map((c) => ({
    url: `/kategorien/${c.slug}/`,
    title: c.name,
    type: "Kategorie" as const,
    lead: c.shortDesc,
    keywords: norm([c.name, c.shortDesc, c.slug].join(" ")),
  })),
  ...(features.reiseplaner.enabled
    ? guides.map((g) => ({
        url: `/reiseplaner/${g.slug}/`,
        title: g.title,
        type: "Reiseplaner" as const,
        lead: g.shortDesc,
        keywords: norm([g.title, g.shortDesc, g.lead, g.audience, `${g.duration} tage`].join(" ")),
      }))
    : []),
  ...(features.news.enabled
    ? news.map((n) => ({
        url: `/news/${n.slug}/`,
        title: n.title,
        type: "News" as const,
        district: districtName(n.district),
        lead: n.lead,
        keywords: norm([n.title, n.lead, n.category, districtName(n.district)].filter(Boolean).join(" ")),
      }))
    : []),
  ...events.map((e) => ({
    url: `/hotels-karlsruhe-${e.slug}/`,
    title: e.title,
    type: "Event" as const,
    lead: e.intro,
    keywords: norm([e.title, e.eyebrow, e.intro, e.description].filter(Boolean).join(" ")),
  })),
  ...(features.branchen.enabled
    ? branchen.map((b) => ({
        url: `/${b.slug}/`,
        title: b.title,
        type: "Branche" as const,
        lead: truncate(stripHtml(b.description)),
        keywords: norm([b.title, b.label, b.description].filter(Boolean).join(" ")),
      }))
    : []),
  {
    url: "/strassenverzeichnis/",
    title: "Straßenverzeichnis Karlsruhe",
    type: "Straßenverzeichnis" as const,
    lead: "Alle Karlsruher Straßen mit Stadtteil und Herkunft des Straßennamens.",
    keywords: norm("strassenverzeichnis strassen strasse adresse plz stadtteil herkunft namen"),
  },
  ...strassenStadtteile.map((t) => ({
    url: `/strassenverzeichnis/stadtteil/${t.slug}/`,
    title: `Straßen in ${t.name}`,
    type: "Straßenverzeichnis" as const,
    district: t.name,
    lead: `Alle ${t.streetCount} Straßen im Stadtteil ${t.name} mit Herkunft der Straßennamen.`,
    keywords: norm(`strassen ${t.name} stadtteil strassenverzeichnis`),
  })),
];

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(entries), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  });
};
