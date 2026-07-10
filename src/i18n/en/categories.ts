import type { Category } from "../../data/categories";

/**
 * Englische Uebersetzungen der Kategorien, gekeyt nach deutschem slug.
 * Enthaelt den englischen slug + uebersetzte Felder (name, shortDesc).
 * Nicht uebersetzt: icon (bleibt aus dem Basis-Eintrag).
 */
export const categoriesEn: Record<string, { slug: string; name: string; shortDesc: string }> = {
  "tech-innovation": {
    slug: "tech-innovation",
    name: "Tech & Innovation",
    shortDesc: "KIT, FZI, CyberForum - Karlsruhe's tech DNA",
  },
  "kunst-medien": {
    slug: "art-media",
    name: "Art & Media",
    shortDesc: "ZKM, the Kunsthalle and media art with a global reach",
  },
  "wissenschaft": {
    slug: "science",
    name: "Science",
    shortDesc: "KIT, research centres and universities",
  },
  "wahrzeichen": {
    slug: "landmarks",
    name: "Landmarks",
    shortDesc: "The Palace, the Pyramid, the Turmberg and more",
  },
  "museen": {
    slug: "museums",
    name: "Museums",
    shortDesc: "From fine art to natural history",
  },
  "parks": {
    slug: "parks-green-spaces",
    name: "Parks & Green Spaces",
    shortDesc: "Palace Gardens, Stadtgarten and the Hardtwald forest",
  },
  "familie": {
    slug: "family",
    name: "Family",
    shortDesc: "Out and about with children in Karlsruhe",
  },
  "recht": {
    slug: "law",
    name: "Law",
    shortDesc: "The Federal Constitutional Court & the Federal Court of Justice",
  },
  "historische-architektur": {
    slug: "history",
    name: "History",
    shortDesc: "Baroque, Neoclassicism and the Margraves",
  },
  "nightlife": {
    slug: "nightlife",
    name: "Nightlife",
    shortDesc: "Bars, clubs and concert halls",
  },
  "shopping": {
    slug: "shopping",
    name: "Shopping",
    shortDesc: "Kaiserstrasse, Ettlinger Tor and the Postgalerie",
  },
};

/** Aufloesung englischer Kategorie-Override per deutschem slug. */
export const getCategoryEn = (slug: string) => categoriesEn[slug];
