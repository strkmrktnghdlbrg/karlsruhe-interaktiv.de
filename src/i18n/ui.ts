/**
 * UI-Wortschatz (Oberflaechen-Strings) de/en.
 * Zugriff via t(locale, "key"). Platzhalter {x} via tf(locale, key, {x: ...}).
 */
import type { Locale } from "./config";

export const ui = {
  // Navigation / global
  "nav.sights": { de: "Sehenswuerdigkeiten", en: "Attractions" },
  "nav.hotels": { de: "Hotels", en: "Hotels" },
  "nav.restaurants": { de: "Restaurants", en: "Restaurants" },
  "nav.districts": { de: "Bezirke", en: "Districts" },
  "nav.events": { de: "Events", en: "Events" },
  "nav.tech": { de: "Tech", en: "Tech" },
  "nav.guides": { de: "Reiseplaner", en: "Travel Planner" },
  "nav.news": { de: "News", en: "News" },
  "nav.categories": { de: "Kategorien", en: "Categories" },
  "nav.about": { de: "Ueber uns", en: "About" },
  "nav.imprint": { de: "Impressum", en: "Imprint" },
  "nav.privacy": { de: "Datenschutz", en: "Privacy" },
  "nav.terms": { de: "AGB", en: "Terms" },
  "nav.advertise": { de: "Werben", en: "Advertise" },
  "nav.home": { de: "Start", en: "Home" },

  "aria.homepage": { de: "{site} Startseite", en: "{site} home" },
  "aria.mainNav": { de: "Hauptnavigation", en: "Main navigation" },
  "aria.mainNavMobile": { de: "Hauptnavigation mobil", en: "Mobile main navigation" },
  "aria.openMenu": { de: "Menue oeffnen", en: "Open menu" },
  "aria.closeMenu": { de: "Menue schliessen", en: "Close menu" },
  "aria.langSwitch": { de: "Sprache wechseln", en: "Switch language" },

  // Footer
  "footer.districts": { de: "Bezirke", en: "Districts" },
  "footer.categories": { de: "Kategorien", en: "Categories" },
  "footer.service": { de: "Service", en: "Service" },
  "footer.allCategories": { de: "Alle Kategorien", en: "All categories" },
  "footer.eventsDates": { de: "Events & Termine", en: "Events & dates" },
  "footer.copyright": { de: "{year} {site}. Inhalte unter Quellenangabe.", en: "{year} {site}. Content with source attribution." },

  // Home
  "home.eyebrow": { de: "Stadtportal · Faecherstadt · Tech-Hub", en: "City guide · Fan-shaped city · Tech hub" },
  "home.heroTitle": { de: "Karlsruhe interaktiv.", en: "Karlsruhe interactive." },
  "home.heroTagline": {
    de: "Schloss, ZKM, KIT, Bundesverfassungsgericht und Turmberg. Das Stadtportal fuer die Faecherstadt — Sehenswuerdigkeiten, Hotels, Bezirke und Tech-News.",
    en: "Palace, ZKM, KIT, the Federal Constitutional Court and the Turmberg. The city guide for Karlsruhe — attractions, hotels, districts and tech news.",
  },
  "home.ctaSights": { de: "Sehenswuerdigkeiten entdecken", en: "Discover attractions" },
  "home.ctaTech": { de: "Tech-Hub Karlsruhe", en: "Karlsruhe tech hub" },
  "home.statSights": { de: "Sehenswuerdigkeiten", en: "Attractions" },
  "home.statHotels": { de: "Hotels", en: "Hotels" },
  "home.statRestaurants": { de: "Restaurants", en: "Restaurants" },
  "home.statDistricts": { de: "Bezirke", en: "Districts" },
  "home.highlights": { de: "Highlights", en: "Highlights" },
  "home.sightsHeading": { de: "Sehenswuerdigkeiten in Karlsruhe", en: "Attractions in Karlsruhe" },
  "home.seeAll": { de: "Alle ansehen →", en: "See all →" },
  "home.faecherEyebrow": { de: "Faecher entlang", en: "Along the fan" },
  "home.districtsHeading": { de: "Karlsruher Bezirke", en: "Karlsruhe districts" },
  "home.allDistricts": { de: "Alle Bezirke →", en: "All districts →" },
  "home.stayEyebrow": { de: "Uebernachten", en: "Where to stay" },
  "home.hotelsHeading": { de: "Top-Hotels in Karlsruhe", en: "Top hotels in Karlsruhe" },
  "home.allHotels": { de: "Alle Hotels →", en: "All hotels →" },
  "home.hotelsLead": {
    de: "Live von Booking.com — aktuelle Preise und Verfuegbarkeit, taeglich aktualisiert.",
    en: "Live from Booking.com — current prices and availability, updated daily.",
  },
  "home.newsEyebrow": { de: "Tech · Wissenschaft · Kultur", en: "Tech · Science · Culture" },
  "home.newsHeading": { de: "Karlsruhe-News", en: "Karlsruhe news" },
  "home.allNews": { de: "Alle News →", en: "All news →" },

  // Listing pages
  "sights.entries": { de: "{n} Eintraege", en: "{n} entries" },
  "sights.heading": { de: "Sehenswuerdigkeiten in Karlsruhe", en: "Attractions in Karlsruhe" },
  "sights.intro": {
    de: "Vom barocken Schloss bis zum weltweit einzigartigen ZKM, vom Turmberg in Durlach bis zum Bundesverfassungsgericht — alle ikonischen Orte der Faecherstadt.",
    en: "From the baroque palace to the globally unique ZKM, from the Turmberg in Durlach to the Federal Constitutional Court — all the iconic places of Karlsruhe.",
  },
  "hotels.count": { de: "{n} Haeuser", en: "{n} properties" },
  "hotels.heading": { de: "Hotels in Karlsruhe", en: "Hotels in Karlsruhe" },
  "hotels.intro": {
    de: "Vom Design-Hotel Santo bis zum Schlosshotel am Hauptbahnhof, vom Erbprinz Ettlingen bis zur Karlsburg-Naehe in Durlach — geprueft, sortiert nach Gaeste-Bewertung.",
    en: "From the design hotel Santo to the Schlosshotel by the main station, from the Erbprinz in Ettlingen to the Karlsburg in Durlach — curated, sorted by guest rating.",
  },
  "hotels.editorial": { de: "Unsere redaktionelle Hotel-Auswahl", en: "Our editorial hotel selection" },
  "restaurants.count": { de: "{n} Lokale", en: "{n} venues" },
  "restaurants.heading": { de: "Restaurants in Karlsruhe", en: "Restaurants in Karlsruhe" },
  "restaurants.intro": {
    de: "Badische Klassiker, Sternekueche und internationale Vielfalt — eine kuratierte Auswahl der besten Lokale in Karlsruhe.",
    en: "Baden classics, Michelin-starred kitchens and international variety — a curated selection of the best places to eat in Karlsruhe.",
  },
  "districts.count": { de: "{n} Bezirke", en: "{n} districts" },
  "districts.heading": { de: "Karlsruher Bezirke", en: "Karlsruhe districts" },
  "districts.intro": {
    de: "Historische Altstadt, moderne Wissenschaftsviertel, alternative Suedstadt oder wohlhabender Villenvorort — jeder Karlsruher Bezirk hat sein Gesicht.",
    en: "Historic old town, modern science quarters, the alternative Suedstadt or affluent villa suburbs — every Karlsruhe district has its own character.",
  },
  "categories.count": { de: "{n} Themen", en: "{n} topics" },
  "categories.heading": { de: "Karlsruhe nach Kategorien", en: "Karlsruhe by category" },
  "categories.intro": {
    de: "Karlsruhe quer gelesen: Tech & Innovation als USP der Faecherstadt, Kunst & Medien rund ums ZKM, Recht rund ums Bundesverfassungsgericht.",
    en: "Karlsruhe across the board: tech & innovation as the city's USP, art & media around the ZKM, law around the Federal Constitutional Court.",
  },

  // Detail pages
  "detail.freeEntry": { de: "Eintritt frei", en: "Free entry" },
  "detail.priceFrom": { de: "ab {n} EUR", en: "from {n} EUR" },
  "detail.officialWebsite": { de: "Offizielle Website →", en: "Official website →" },
  "detail.website": { de: "Website →", en: "Website →" },
  "detail.inDistrict": { de: "Im Bezirk", en: "In the district" },
  "detail.district": { de: "Bezirk", en: "District" },
  "detail.category": { de: "Kategorie", en: "Category" },
  "detail.districtHub": { de: "Bezirks-Hub ansehen →", en: "View district hub →" },
  "detail.guestReviews": { de: "{n} Gaeste-Bewertungen", en: "{n} guest reviews" },
  "detail.guestFavorite": { de: "Gaesteliebling", en: "Guest favorite" },
  "detail.reservationRecommended": { de: "Reservierung empfohlen", en: "Reservation recommended" },
  "detail.walkIn": { de: "Walk-In", en: "Walk-in" },
  "detail.sightsIn": { de: "Sehenswuerdigkeiten in {name}", en: "Attractions in {name}" },
  "detail.hotelsIn": { de: "Hotels in {name}", en: "Hotels in {name}" },
  "detail.restaurantsIn": { de: "Restaurants in {name}", en: "Restaurants in {name}" },
  "detail.categoryHeading": { de: "{name} in Karlsruhe", en: "{name} in Karlsruhe" },

  // Related
  "related.sights": { de: "Weitere Sehenswuerdigkeiten im Bezirk", en: "More attractions in the district" },
  "related.hotels": { de: "Hotels im Bezirk", en: "Hotels in the district" },
  "related.restaurants": { de: "Restaurants im Bezirk", en: "Restaurants in the district" },
} as const;

export type UiKey = keyof typeof ui;

export function t(locale: Locale, key: UiKey): string {
  return ui[key]?.[locale] ?? ui[key]?.de ?? String(key);
}

export function tf(locale: Locale, key: UiKey, vars: Record<string, string | number>): string {
  let s = t(locale, key);
  for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
  return s;
}
