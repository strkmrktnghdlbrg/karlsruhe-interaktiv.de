/**
 * i18n-Konfiguration karlsruhe-interaktiv.de
 * Deutsch (Default) auf Root, Englisch unter /en/ mit uebersetzten Slugs.
 */
export type Locale = "de" | "en";

export const locales: Locale[] = ["de", "en"];
export const defaultLocale: Locale = "de";

export const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
};

export const ogLocale: Record<Locale, string> = {
  de: "de_DE",
  en: "en_US",
};

export const htmlLang: Record<Locale, string> = {
  de: "de",
  en: "en",
};

export const schemaLang: Record<Locale, string> = {
  de: "de-DE",
  en: "en-US",
};

/**
 * Pfad-Segmente pro Sektion: Deutsch (Root) -> Englisch (/en/<seg>).
 * Key = interne Sektions-ID.
 */
export const sectionPath: Record<string, Record<Locale, string>> = {
  sights: { de: "sehenswuerdigkeiten", en: "attractions" },
  hotels: { de: "hotels", en: "hotels" },
  restaurants: { de: "restaurants", en: "restaurants" },
  districts: { de: "bezirke", en: "districts" },
  categories: { de: "kategorien", en: "categories" },
  events: { de: "events", en: "events" },
  guides: { de: "reiseplaner", en: "travel-planner" },
  news: { de: "news", en: "news" },
  about: { de: "ueber-uns", en: "about-us" },
  imprint: { de: "impressum", en: "imprint" },
  privacy: { de: "datenschutz", en: "privacy" },
  terms: { de: "agb", en: "terms" },
  tech: { de: "tech", en: "tech" },
};

/** Praefix fuer eine Locale ("" fuer Default, "/en" sonst). */
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

/** Baut den Sektions-Basispfad, z.B. ("sights","en") -> "/en/attractions". */
export function sectionBase(section: string, locale: Locale): string {
  const seg = sectionPath[section]?.[locale];
  return `${localePrefix(locale)}${seg ? `/${seg}` : ""}`;
}

/** Detail-URL, z.B. ("sights","karlsruhe-palace","en") -> "/en/attractions/karlsruhe-palace/". */
export function detailUrl(section: string, slug: string, locale: Locale): string {
  return `${sectionBase(section, locale)}/${slug}/`;
}

/** Index-URL einer Sektion, z.B. ("hotels","en") -> "/en/hotels/". */
export function indexUrl(section: string, locale: Locale): string {
  return `${sectionBase(section, locale)}/`;
}

/** Home-URL pro Locale. */
export function homeUrl(locale: Locale): string {
  return locale === defaultLocale ? "/" : `${localePrefix(locale)}/`;
}
