/**
 * Branchenverzeichnis Karlsruhe - Datenmodell fuer /branchenbuch/ und /werben/.
 *
 * Zwei Stufen:
 *   1. Kostenloser Eintrag  - aus vorhandenen redaktionellen Inhalten erzeugt
 *      (Restaurants, Hotels, Apotheken, Banken). Rein alphabetisch, ohne Logo,
 *      ohne Beschreibung, ohne Link. "Angaben ohne Gewaehr".
 *   2. Premium-Partner      - kostenpflichtig (199 EUR/Jahr netto, B2B).
 *      Steht in seiner Kategorie ganz oben, mit Logo-Initialen, Beschreibung,
 *      Website-/E-Mail-Button und DOFOLLOW-Backlink.
 *
 * Redaktionsregeln:
 *   - Nur reale, bereits im Portal belegte Betriebe. Keine erfundenen Firmen.
 *   - Keine erfundenen Bewertungen, keine Test-/Testsieger-Claims (§ 5a UWG).
 *   - Restaurants und Hotels bekommen KEINE zweite Detailseite, sondern
 *     verlinken auf ihre bestehende Seite (kein Duplicate Content).
 */
import { restaurants } from "./restaurants";
import { hotels } from "./hotels";
import { getDistrict } from "./districts";
import { branchen } from "./branchen";

export type BranchenCategory = {
  slug: string;
  name: string;
  /** Kurzbeschreibung fuer Hub + Kategorieseite */
  description: string;
  /** Stichworte, ueber die passende Branchenbuch-Beitraege verlinkt werden */
  keywords?: string[];
};

export type Listing = {
  slug: string;
  name: string;
  category: string;
  /** Strasse + Hausnummer, ggf. mit PLZ */
  address?: string;
  /** Stadtteil-Slug aus districts.ts, sonst Klartext */
  district?: string;
  districtLabel?: string;
  phone?: string;
  /** Externe Website. Frei = kein Link. Premium = dofollow. */
  website?: string;
  email?: string;
  description?: string;
  /** Interne Detailseite, falls der Betrieb bereits eine hat */
  href?: string;
  premium?: boolean;
  /** Quellenhinweis fuer den kostenlosen Eintrag */
  source?: string;
};

export const branchenCategories: BranchenCategory[] = [
  {
    slug: "gastronomie",
    name: "Gastronomie",
    description:
      "Restaurants, Brauhäuser und Cafés in Karlsruhe - von der badischen Weinstube bis zur internationalen Küche in der Oststadt.",
    keywords: ["gastronom", "catering", "baecker", "metzger"],
  },
  {
    slug: "hotels",
    name: "Hotels & Übernachtung",
    description:
      "Hotels, Boutique-Häuser und Apartments in Karlsruhe, von der Innenstadt bis Durlach und zur Messe.",
    keywords: ["hotel", "pension"],
  },
  {
    slug: "apotheken",
    name: "Apotheken & Gesundheit",
    description:
      "Apotheken, Praxen und Gesundheitsdienstleister in den Karlsruher Stadtteilen.",
    keywords: ["arzt", "zahnarzt", "physio", "apothek", "heilprakt", "pflege", "therap"],
  },
  {
    slug: "banken",
    name: "Banken & Finanzen",
    description:
      "Filialbanken, Sparkassen, Finanz- und Versicherungsdienstleister zwischen Kaiserstraße und Marktplatz.",
    keywords: ["bank", "finanz", "versicher", "anlage", "steuer", "baugeld"],
  },
  {
    slug: "handwerk",
    name: "Handwerk & Bau",
    description:
      "Handwerksbetriebe aus Karlsruhe: Elektro, Sanitär, Heizung, Maler, Fliesenleger, Dachdecker und Bauunternehmen.",
    keywords: [
      "bau", "elektr", "sanitaer", "heiz", "maler", "fliesen", "dach", "schreiner",
      "tischler", "stuckat", "garten", "schloss", "fenster", "zimmer", "installat",
    ],
  },
  {
    slug: "dienstleistung",
    name: "Dienstleistung & Beratung",
    description:
      "Agenturen, Kanzleien, Personalberatung und Beratungsunternehmen mit Sitz in Karlsruhe und der Region.",
    keywords: ["berat", "anwalt", "kanzlei", "notar", "agentur", "werbe", "personal", "umzug", "reinig"],
  },
  {
    slug: "it-tech",
    name: "IT & Technologie",
    description:
      "Software, IT-Dienstleistung und Technologie - die Branche, die Karlsruhe zwischen KIT, FZI und CyberForum prägt.",
    keywords: ["it-", "software", "edv", "web", "digital", "medien"],
  },
  {
    slug: "einzelhandel",
    name: "Einzelhandel & Shopping",
    description:
      "Inhabergeführte Geschäfte, Fachhandel und Boutiquen in der Innenstadt und den Stadtteilen.",
    keywords: ["handel", "shop", "laden", "moebel", "optik", "juwel"],
  },
];

export const getBranchenCategory = (slug: string) =>
  branchenCategories.find((c) => c.slug === slug);

/**
 * Premium-Partner. Kostenpflichtige Eintraege stehen in ihrer Kategorie oben.
 * Neue Partner hier eintragen (premium: true, website = dofollow).
 * Bewusst leer, solange kein Partner gebucht hat - es werden keine
 * Beispiel-Firmen als echte Eintraege ausgegeben.
 */
export const premiumPartners: Listing[] = [];

/**
 * Kuratierte kostenlose Eintraege aus vorhandenen Ratgeber-Artikeln dieses
 * Portals. Adressen wortgleich aus dem jeweiligen Beitrag, Angaben ohne Gewaehr.
 */
const kuratiert: Listing[] = [
  // === Apotheken (Quelle: /apotheken-karlsruhe/) ===
  { slug: "zentral-apotheke", name: "Zentral-Apotheke", category: "apotheken", address: "Kaiserstraße 122, 76133 Karlsruhe", districtLabel: "Innenstadt", source: "/apotheken-karlsruhe/" },
  { slug: "schloss-apotheke", name: "Schloss-Apotheke", category: "apotheken", address: "Markgrafenstraße 27a, 76131 Karlsruhe", districtLabel: "Innenstadt", source: "/apotheken-karlsruhe/" },
  { slug: "apotheke-am-durlacher-tor", name: "Apotheke am Durlacher Tor", category: "apotheken", address: "Durlacher Allee 10, 76131 Karlsruhe", districtLabel: "Oststadt", source: "/apotheken-karlsruhe/" },
  { slug: "bahnhof-apotheke-durlach", name: "Bahnhof-Apotheke Durlach", category: "apotheken", address: "Pfinztalstraße 92a, 76227 Karlsruhe", districtLabel: "Durlach", source: "/apotheken-karlsruhe/" },
  { slug: "loewen-apotheke-durlach", name: "Löwen-Apotheke", category: "apotheken", address: "Pfinztalstraße 32, 76227 Karlsruhe", districtLabel: "Durlach", source: "/apotheken-karlsruhe/" },

  // === Banken (Quelle: /banken-in-karlsruhe/) ===
  { slug: "sparkasse-karlsruhe", name: "Sparkasse Karlsruhe", category: "banken", address: "Kaiserstraße 223, 76133 Karlsruhe", districtLabel: "Innenstadt-West", source: "/banken-in-karlsruhe/" },
  { slug: "volksbank-pur", name: "Volksbank pur", category: "banken", address: "Am Entenfang 6, 76185 Karlsruhe", districtLabel: "Mühlburg", source: "/banken-in-karlsruhe/" },
  { slug: "deutsche-bank-karlsruhe", name: "Deutsche Bank", category: "banken", address: "Kaiserstraße 90, 76133 Karlsruhe", districtLabel: "Innenstadt", source: "/banken-in-karlsruhe/" },
  { slug: "commerzbank-karlsruhe", name: "Commerzbank", category: "banken", address: "Karl-Friedrich-Straße 7, 76133 Karlsruhe", districtLabel: "Innenstadt", source: "/banken-in-karlsruhe/" },
  { slug: "postbank-karlsruhe", name: "Postbank", category: "banken", address: "Kaiserstraße 217, 76133 Karlsruhe", districtLabel: "Innenstadt-West", source: "/banken-in-karlsruhe/" },
  { slug: "targobank-karlsruhe", name: "Targobank", category: "banken", address: "Kaiserstraße 121, 76133 Karlsruhe", districtLabel: "Innenstadt", source: "/banken-in-karlsruhe/" },
  { slug: "hypovereinsbank-karlsruhe", name: "HypoVereinsbank", category: "banken", address: "Waldstraße 67, 76133 Karlsruhe", districtLabel: "Innenstadt-West", source: "/banken-in-karlsruhe/" },
  { slug: "santander-karlsruhe", name: "Santander", category: "banken", address: "Karlstraße 3-5, 76133 Karlsruhe", districtLabel: "Innenstadt", source: "/banken-in-karlsruhe/" },
];

/** Restaurants aus dem Portal als kostenlose Eintraege (verlinken intern). */
const ausRestaurants = (): Listing[] =>
  restaurants.map((r) => ({
    slug: `restaurant-${r.slug}`,
    name: r.name,
    category: "gastronomie",
    district: r.district,
    districtLabel: getDistrict(r.district)?.name,
    href: `/restaurants/${r.slug}/`,
    source: "/restaurants/",
  }));

/** Hotels aus dem Portal als kostenlose Eintraege (verlinken intern). */
const ausHotels = (): Listing[] =>
  hotels.map((h) => ({
    slug: `hotel-${h.slug}`,
    name: h.name,
    category: "hotels",
    district: h.district,
    districtLabel: getDistrict(h.district)?.name,
    href: `/hotels/${h.slug}/`,
    source: "/hotels/",
  }));

const collator = new Intl.Collator("de", { sensitivity: "base" });

/** Alle Eintraege: Premium zuerst, danach kostenlose alphabetisch. */
export const allListings = (): Listing[] => {
  const frei = [...kuratiert, ...ausRestaurants(), ...ausHotels()].sort((a, b) =>
    collator.compare(a.name, b.name)
  );
  return [...premiumPartners, ...frei];
};

export const listingsByCategory = (category: string): Listing[] => {
  const alle = allListings().filter((l) => l.category === category);
  return [...alle.filter((l) => l.premium), ...alle.filter((l) => !l.premium)];
};

export const categoryCount = (category: string) =>
  allListings().filter((l) => l.category === category).length;

export const totalListings = () => allListings().length;

/**
 * Passende Beitraege aus dem bestehenden Branchenbuch (/[branche]/).
 * Rein ueber Stichworte zugeordnet - die Beitraege selbst bleiben unveraendert.
 */
export const branchenArticles = (category: string) => {
  const cat = getBranchenCategory(category);
  if (!cat?.keywords?.length) return [];
  return branchen
    .filter((b) => cat.keywords!.some((k) => b.slug.toLowerCase().includes(k) || b.label.toLowerCase().includes(k)))
    .sort((a, b) => collator.compare(a.label, b.label));
};
