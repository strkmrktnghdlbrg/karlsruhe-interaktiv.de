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
  "footer.about": { de: "Über uns", en: "About" },
  "footer.techHub": { de: "Tech-Hub", en: "Tech hub" },
  "footer.homeAria": { de: "Zur Startseite", en: "Back to home" },
  "footer.brandDesc": {
    de: "Karlsruhe interaktiv. Faecherstadt, KIT, ZKM und Bundesverfassungsgericht. Sehenswuerdigkeiten, Hotels, Bezirke, Tech-News auf einem Portal.",
    en: "Karlsruhe interactive. Fan-shaped city, KIT, ZKM and the Federal Constitutional Court. Attractions, hotels, districts and tech news on one portal.",
  },

  // Header
  "header.werbenAria": { de: "Werben", en: "Advertise" },
  "header.mobileNav": { de: "Mobile Navigation", en: "Mobile navigation" },

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
  "hotels.topLive.title": { de: "Aktuell bestbewertete Hotels in Karlsruhe", en: "Currently top-rated hotels in Karlsruhe" },
  "hotels.topLive.lead": {
    de: "Live von Booking.com — aktuelle Bewertungen und Preise, aktualisiert beim letzten Build.",
    en: "Live from Booking.com — current ratings and prices, updated at the last build.",
  },
  "restaurants.count": { de: "{n} Lokale", en: "{n} venues" },
  "restaurants.heading": { de: "Restaurants in Karlsruhe", en: "Restaurants in Karlsruhe" },
  "restaurants.intro": {
    de: "Badische Klassiker, Sternekueche und internationale Vielfalt — eine kuratierte Auswahl der besten Lokale in Karlsruhe.",
    en: "Baden classics, Michelin-starred kitchens and international variety — a curated selection of the best places to eat in Karlsruhe.",
  },
  "restaurants.listLead": {
    de: "Von der legendaeren Oberlaender Weinstube bis zum Stern-Restaurant Sein, von badischen Brauhaeusern bis zur Suedstadt-Pho-Adresse — Karlsruhes Gastronomie in einer Uebersicht.",
    en: "From the legendary Oberlaender Weinstube to the Michelin-starred Sein, from Baden brewpubs to the Suedstadt's pho address — Karlsruhe's dining scene at a glance.",
  },
  "restaurants.metaDescription": {
    de: "Restaurants in Karlsruhe: Badisch, Stern-Kueche, Italienisch, Asiatisch — geprueft, sortiert nach Bezirk und Kueche.",
    en: "Restaurants in Karlsruhe: Baden cuisine, Michelin-starred kitchens, Italian, Asian — curated and sorted by district and cuisine.",
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

  // Categories detail / index
  "categories.eyebrow": { de: "Kategorie", en: "Category" },
  "categories.sightsHeading": { de: "Sehenswuerdigkeiten", en: "Attractions" },
  "categories.restaurantsHeading": { de: "Restaurants", en: "Restaurants" },
  "categories.cardSights": { de: "Sights", en: "Sights" },
  "categories.cardRestaurants": { de: "Restaurants", en: "Restaurants" },
  "categories.detailHeading": { de: "{name} in Karlsruhe", en: "{name} in Karlsruhe" },
  "categories.metaDescription": { de: "{name} in Karlsruhe: {desc}", en: "{name} in Karlsruhe: {desc}" },
  "categories.indexTitle": { de: "Kategorien", en: "Categories" },
  "categories.indexDescription": {
    de: "Karlsruhe nach Kategorien: Tech, Kunst & Medien, Wissenschaft, Recht, Museen, Parks und mehr.",
    en: "Karlsruhe by category: tech, art & media, science, law, museums, parks and more.",
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

  // News
  "news.source": { de: "Quelle: {name}", en: "Source: {name}" },
  "news.title": { de: "Karlsruhe-News", en: "Karlsruhe news" },
  "news.metaDescription": {
    de: "Aktuelle News aus Karlsruhe — Tech-Hub-Schwerpunkt: KIT, ZKM, CyberForum, Bundesverfassungsgericht.",
    en: "Latest news from Karlsruhe — with a tech-hub focus: KIT, ZKM, CyberForum and the Federal Constitutional Court.",
  },
  "news.eyebrow": { de: "Tech · Wissenschaft · Kultur", en: "Tech · Science · Culture" },
  "news.heading": { de: "Karlsruhe-News", en: "Karlsruhe news" },
  "news.intro": {
    de: "Kuratierte News mit Schwerpunkt auf Tech, KIT-Forschung, ZKM und Bundesverfassungsgericht. Kurze Zusammenfassungen mit Verweis zur Originalquelle.",
    en: "Curated news with a focus on tech, KIT research, the ZKM and the Federal Constitutional Court. Concise summaries with a link to the original source.",
  },
  "news.related": { de: "Weitere News", en: "More news" },
  "news.attributionEyebrow": { de: "Quelle", en: "Source" },
  "news.attributionText": {
    de: "Diese Zusammenfassung basiert auf einem Bericht von {name} vom {date}. Den vollstaendigen Originalartikel mit allen Details findest du hier:",
    en: "This summary is based on a report by {name} from {date}. You can find the full original article with all the details here:",
  },
  "news.attributionLink": { de: "Originalartikel auf {name} lesen →", en: "Read the original article on {name} →" },

  // Guides / travel planner
  "guides.routes": { de: "{n} Routen", en: "{n} routes" },
  "guides.heading": { de: "Karlsruhe-Reiseplaner", en: "Karlsruhe Travel Planner" },
  "guides.intro": {
    de: "Fertige Tagesplaene fuer Karlsruhe — Erstbesucher, Familien, Regen. Jeder Plan verweist auf konkrete Sehenswuerdigkeiten, Restaurants und Hotels.",
    en: "Ready-made day plans for Karlsruhe — first-time visitors, families, rainy days. Every plan links to specific attractions, restaurants and hotels.",
  },
  "guides.indexTitle": { de: "Reiseplaner", en: "Travel Planner" },
  "guides.indexDesc": {
    de: "Reise-Guides fuer Karlsruhe: 3 Tage, mit Kindern, bei Regen — Tag-fuer-Tag-Routen mit Hotel- und Restaurant-Empfehlungen.",
    en: "Travel guides for Karlsruhe: 3 days, with kids, in the rain — day-by-day itineraries with hotel and restaurant recommendations.",
  },
  "guides.day": { de: "Tag {n}", en: "Day {n}" },
  "guides.bestSeason": { de: "Beste Reisezeit:", en: "Best time to visit:" },
  "guides.tip": { de: "Tipp:", en: "Tip:" },

  // Events
  "events.indexTitle": { de: "Events & Termine in Karlsruhe", en: "Events & dates in Karlsruhe" },
  "events.indexDescription": {
    de: "Karlsruher Events 2026: Das Fest, Schlosslichtspiele, Christkindlesmarkt, art Karlsruhe. Mit aktuellen Hotelpreisen fuer jeden Termin.",
    en: "Karlsruhe events 2026: Das Fest, Schlosslichtspiele, the Christmas market, art Karlsruhe — with current hotel prices for every date.",
  },
  "events.eyebrow": { de: "Termine mit Hotelpreisen", en: "Dates with hotel prices" },
  "events.heading": { de: "Events in Karlsruhe", en: "Events in Karlsruhe" },
  "events.intro": {
    de: "Die wichtigsten Karlsruher Anlaesse — vom kostenlosen Open-Air-Festival Das Fest ueber die Schlosslichtspiele bis zur Kunstmesse art Karlsruhe. Zu jedem Termin zeigen wir aktuelle Hotelpreise fuer genau den Zeitraum.",
    en: "Karlsruhe's most important occasions — from the free open-air festival Das Fest and the Schlosslichtspiele to the art Karlsruhe fair. For every date we show current hotel prices for exactly that period.",
  },
  "events.past": { de: "vorbei", en: "past" },
  "events.hotelsForDate": { de: "Hotels fuer diesen Termin →", en: "Hotels for these dates →" },
  "events.range": { de: "{from} bis {to}", en: "{from} to {to}" },
  "events.checkin": { de: "Anreise: {date}", en: "Check-in: {date}" },
  "events.checkout": { de: "Abreise: {date}", en: "Check-out: {date}" },
  "events.nights": { de: "{n} Naechte", en: "{n} nights" },
  "events.night": { de: "{n} Nacht", en: "{n} night" },
  "events.otherHeading": { de: "Weitere Anlaesse in Karlsruhe", en: "More occasions in Karlsruhe" },
  "events.pastNotice": {
    de: "Dieses Event liegt in der Vergangenheit. Sobald der Termin fuer die naechste Saison feststeht, aktualisieren wir die Preise hier. Schau dir solange unseren {link} an.",
    en: "This event has already taken place. As soon as the date for the next season is confirmed, we will update the prices here. In the meantime, take a look at our {link}.",
  },
  "events.notBookableNotice": {
    de: "Der Termin steht bereits fest, liegt aber noch zu weit in der Zukunft fuer eine Hotelbuchung. Sobald der Zeitraum buchbar ist (etwa zwei Jahre vorher), zeigen wir hier aktuelle Preise. Schau dir solange unseren {link} an.",
    en: "The date is already set but is still too far in the future for a hotel booking. As soon as the period becomes bookable (around two years in advance) we will show current prices here. In the meantime, take a look at our {link}.",
  },
  "events.noHotelsNotice": {
    de: "Aktuell zeigt Stay22 keine verfuegbaren Hotels fuer diesen Zeitraum. Probier unseren {link}.",
    en: "Stay22 currently shows no available hotels for this period. Try our {link}.",
  },
  "events.hotelIndexLink": { de: "Hotel-Index", en: "hotel index" },
  "events.fullHotelIndexLink": { de: "vollstaendigen Hotel-Index", en: "complete hotel index" },
  "events.priceNote": {
    de: "* Preise und Verfuegbarkeit live via Stay22 → Booking.com. Bei Buchung ueber diese Links erhalten wir eine Provision — fuer dich entstehen keine Mehrkosten. Preise gelten fuer {from} bis {to}, {nights}.",
    en: "* Prices and availability live via Stay22 → Booking.com. If you book through these links we earn a commission — at no extra cost to you. Prices apply for {from} to {to}, {nights}.",
  },

  // About page
  "about.title": { de: "Über uns", en: "About us" },
  "about.metaDescription": {
    de: "Wie {site}-Interaktiv entsteht: redaktioneller Anspruch, Auswahl der Inhalte, Quellen und Transparenz zu Affiliate-Links.",
    en: "How {site}-Interaktiv is made: our editorial standards, how we select content, our sources and transparency about affiliate links.",
  },
  "about.heading": { de: "Über {site}-Interaktiv", en: "About {site}-Interaktiv" },
  "about.lead": {
    de: "{site}-Interaktiv ist ein unabhängiges Stadtportal für die Fächerstadt. Wir bündeln an einem Ort, was Besucher und Einheimische über {site} wirklich wissen wollen: Sehenswürdigkeiten, Hotels, Restaurants, Bezirke, Veranstaltungen und die Tech-Szene rund um KIT, ZKM und CyberForum. Ziel ist ein schneller, werblich klar gekennzeichneter Überblick statt unübersichtlicher Linklisten.",
    en: "{site}-Interaktiv is an independent city portal for the fan-shaped city. We bring together in one place what visitors and locals really want to know about {site}: attractions, hotels, restaurants, districts, events and the tech scene around KIT, ZKM and CyberForum. Our goal is a fast, clearly labelled overview instead of confusing link lists.",
  },
  "about.standardsHeading": { de: "Unser redaktioneller Anspruch", en: "Our editorial standards" },
  "about.standardsBody": {
    de: "Jede Sehenswürdigkeit, jedes Hotel und jedes Restaurant wird redaktionell ausgewählt und mit eigenem einordnendem Text beschrieben — nicht automatisch aus Verzeichnissen zusammengezogen. Wir achten auf nachvollziehbare Kriterien: Relevanz für {site}, Lage im jeweiligen Bezirk, Preis-Orientierung und eine ehrliche Einschätzung, für wen sich ein Ort lohnt. Öffnungszeiten, Preisanker und ähnliche Angaben prüfen wir nach bestem Wissen, können für ihre Aktualität aber keine Gewähr übernehmen — im Zweifel gilt immer die offizielle Quelle des jeweiligen Anbieters.",
    en: "Every attraction, hotel and restaurant is selected editorially and described with our own contextual text — not pulled automatically from directories. We apply transparent criteria: relevance to {site}, location within its district, price orientation and an honest assessment of who a place is worth it for. We check opening hours, price anchors and similar details to the best of our knowledge, but cannot guarantee they are up to date — in case of doubt, the official source of the respective provider always applies.",
  },
  "about.selectionHeading": { de: "Wie wir Inhalte auswählen", en: "How we select content" },
  "about.selectionBody": {
    de: "Die Auswahl folgt einem kuratierten Ansatz: Wir nehmen Orte auf, die {site} charakterisieren oder für einen Aufenthalt praktisch relevant sind — vom Schloss über die Bezirke bis zu den großen Anlässen wie Das Fest oder den Schlosslichtspielen. Die Reihenfolge und Hervorhebung von Einträgen richtet sich nach redaktioneller Einschätzung, nicht nach bezahlter Platzierung.",
    en: "Our selection follows a curated approach: we include places that characterise {site} or are practically relevant for a stay — from the palace and the districts to the major occasions such as Das Fest or the Schlosslichtspiele. The order and prominence of entries is based on editorial judgement, not on paid placement.",
  },
  "about.sourcesHeading": { de: "Quellen und Bildmaterial", en: "Sources and imagery" },
  "about.sourcesBody": {
    de: "Bilder stammen, sofern nicht anders ausgewiesen, von Wikimedia Commons unter Creative-Commons-Lizenzen. Der jeweilige Autor und die Lizenz werden unter jedem Bild ausgewiesen. Faktische Angaben recherchieren wir aus öffentlich zugänglichen, möglichst offiziellen Quellen.",
    en: "Unless otherwise stated, images are sourced from Wikimedia Commons under Creative Commons licences. The respective author and licence are credited beneath each image. We research factual information from publicly available, preferably official sources.",
  },
  "about.affiliateHeading": { de: "Transparenz bei Affiliate-Links", en: "Transparency about affiliate links" },
  "about.affiliateBody": {
    de: "Dieses Portal finanziert sich unter anderem über Affiliate-Partnerschaften — insbesondere Stay22 (Hotel-Buchungen via Booking.com) und GetYourGuide (Touren und Tickets). Wenn du über einen solchen Link buchst, erhalten wir eine Provision; für dich ändert sich am Preis nichts. Die redaktionelle Auswahl erfolgt unabhängig von diesen Provisionen. Hinweise dazu findest du jeweils direkt an den entsprechenden Buchungs-Widgets sowie im {link}.",
    en: "This portal is financed in part through affiliate partnerships — in particular Stay22 (hotel bookings via Booking.com) and GetYourGuide (tours and tickets). If you book through such a link, we earn a commission; the price stays the same for you. Our editorial selection is independent of these commissions. You will find notes about this directly on the relevant booking widgets as well as in our {link}.",
  },
  "about.privacyLinkLabel": { de: "Datenschutz", en: "privacy policy" },
  "about.contactHeading": { de: "Kontakt", en: "Contact" },
  "about.contactBody": {
    de: "Anbieter, verantwortliche Stelle und Kontaktmöglichkeiten findest du im {link}. Hinweise auf Fehler, veraltete Angaben oder fehlende Orte nehmen wir dort gerne entgegen.",
    en: "You will find the provider, the responsible entity and contact options in our {link}. We are happy to receive there any notes about errors, outdated information or missing places.",
  },
  "about.imprintLinkLabel": { de: "Impressum", en: "imprint" },

  // Imprint page
  "imprint.title": { de: "Impressum", en: "Imprint" },
  "imprint.metaDescription": {
    de: "Impressum und Anbieterkennzeichnung gemaess Paragraph 5 TMG.",
    en: "Imprint and provider identification pursuant to Section 5 of the German Telemedia Act (TMG).",
  },
  "imprint.heading": { de: "Impressum", en: "Imprint" },
  "imprint.infoHeading": { de: "Informationen nach Paragraph 5 TMG", en: "Information pursuant to Section 5 TMG" },
  "imprint.contactHeading": { de: "Kontakt", en: "Contact" },
  "imprint.emailLabel": { de: "E-Mail:", en: "Email:" },
  "imprint.responsibleHeading": {
    de: "Verantwortlich fuer den Inhalt nach Paragraph 18 Abs. 2 MStV",
    en: "Responsible for content pursuant to Section 18 (2) MStV",
  },
  "imprint.odrHeading": { de: "EU-Streitschlichtung", en: "EU dispute resolution" },
  "imprint.odrBody": {
    de: "Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: {link}. Wir sind nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    en: "The European Commission provides a platform for online dispute resolution (ODR): {link}. We are not obliged to take part in dispute resolution proceedings before a consumer arbitration board.",
  },
  "imprint.liabilityContentHeading": { de: "Haftung fuer Inhalte", en: "Liability for content" },
  "imprint.liabilityContentBody": {
    de: "Die Inhalte dieser Website wurden mit groesster Sorgfalt erstellt. Fuer die Richtigkeit, Vollstaendigkeit und Aktualitaet der Inhalte koennen wir jedoch keine Gewaehr uebernehmen.",
    en: "The content of this website has been created with the greatest care. However, we cannot guarantee the accuracy, completeness or topicality of the content.",
  },
  "imprint.liabilityLinksHeading": { de: "Haftung fuer Links", en: "Liability for links" },
  "imprint.liabilityLinksBody": {
    de: "Unser Angebot enthaelt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Fuer die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.",
    en: "Our offering contains links to external third-party websites over whose content we have no influence. The respective provider is always responsible for the content of the linked pages.",
  },
  "imprint.copyrightHeading": { de: "Urheberrecht & Bilder", en: "Copyright & images" },
  "imprint.copyrightBody": {
    de: "Bilder auf {site}-Interaktiv stammen, sofern nicht anders ausgewiesen, von Wikimedia Commons unter Creative-Commons-Lizenzen. Der jeweilige Autor und die Lizenz werden unter jedem Bild ausgewiesen.",
    en: "Unless otherwise stated, images on {site}-Interaktiv are sourced from Wikimedia Commons under Creative Commons licences. The respective author and licence are credited beneath each image.",
  },
  "imprint.affiliateHeading": { de: "Affiliate-Hinweis", en: "Affiliate disclosure" },
  "imprint.affiliateBody": {
    de: "Diese Website enthaelt Affiliate-Links, insbesondere zu Stay22 (Hotel-Buchungen via Booking.com) und GetYourGuide (Touren und Tickets). Wenn du ueber einen solchen Link buchst, erhalten wir eine Provision. Fuer dich aendert sich am Preis nichts. Die redaktionelle Auswahl erfolgt unabhaengig von Provisionen.",
    en: "This website contains affiliate links, in particular to Stay22 (hotel bookings via Booking.com) and GetYourGuide (tours and tickets). If you book through such a link, we earn a commission. The price stays the same for you. Our editorial selection is made independently of commissions.",
  },
  "imprint.lastUpdated": { de: "Stand: Mai 2026", en: "Last updated: May 2026" },

  // Privacy page
  "privacy.title": { de: "Datenschutzerklaerung", en: "Privacy Policy" },
  "privacy.metaDescription": {
    de: "Datenschutzerklaerung — wie {site}-Interaktiv personenbezogene Daten verarbeitet.",
    en: "Privacy policy — how {site}-Interaktiv processes personal data.",
  },
  "privacy.heading": { de: "Datenschutzerklaerung", en: "Privacy Policy" },
  "privacy.controllerHeading": { de: "Verantwortlicher", en: "Controller" },
  "privacy.controllerIntro": {
    de: "Verantwortlich fuer die Datenverarbeitung auf dieser Website nach Art. 4 Abs. 7 DSGVO ist:",
    en: "The controller for data processing on this website pursuant to Art. 4 (7) GDPR is:",
  },
  "privacy.emailLabel": { de: "E-Mail:", en: "Email:" },
  "privacy.generalHeading": { de: "Erhebung allgemeiner Informationen beim Besuch der Website", en: "Collection of general information when visiting the website" },
  "privacy.generalBody": {
    de: "Beim Aufrufen unserer Website werden durch unseren Hosting-Provider automatisch Informationen allgemeiner Natur erfasst: Browsertyp, Betriebssystem, Datum und Uhrzeit des Zugriffs sowie die IP-Adresse in gekuerzter Form. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).",
    en: "When you access our website, our hosting provider automatically collects information of a general nature: browser type, operating system, date and time of access and the IP address in shortened form. The legal basis is Art. 6 (1) (f) GDPR (legitimate interest).",
  },
  "privacy.gtmHeading": { de: "Google Tag Manager / Analytics", en: "Google Tag Manager / Analytics" },
  "privacy.gtmBody": {
    de: "Sofern aktiviert, verwenden wir den Google Tag Manager zur Verwaltung von Analyse- und Marketing-Tags. Rechtsgrundlage ist deine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, eingeholt ueber unser Cookie-Banner. Du kannst deine Einwilligung jederzeit widerrufen.",
    en: "Where activated, we use Google Tag Manager to manage analytics and marketing tags. The legal basis is your consent pursuant to Art. 6 (1) (a) GDPR, obtained via our cookie banner. You can withdraw your consent at any time.",
  },
  "privacy.adsenseHeading": { de: "Google AdSense", en: "Google AdSense" },
  "privacy.adsenseBody": {
    de: "Diese Website kann Google AdSense zur Auslieferung kontextbezogener Werbung nutzen. AdSense kann Cookies verwenden. Mehr Informationen in der {link}.",
    en: "This website may use Google AdSense to deliver contextual advertising. AdSense may use cookies. More information in the {link}.",
  },
  "privacy.googlePrivacyLinkLabel": { de: "Google Datenschutzerklaerung", en: "Google privacy policy" },
  "privacy.affiliateHeading": { de: "Affiliate-Anbieter: Stay22 und GetYourGuide", en: "Affiliate providers: Stay22 and GetYourGuide" },
  "privacy.affiliateBody": {
    de: "Wenn du auf einen Hotel-Buchungs-Link klickst oder ein Tour-Widget nutzt, werden Cookies dieser Anbieter gesetzt (Affiliate-Tracking). Fuer dich entstehen keine Mehrkosten. Die Datenschutzhinweise:",
    en: "When you click a hotel booking link or use a tour widget, cookies from these providers are set (affiliate tracking). There are no additional costs for you. The privacy notices:",
  },
  "privacy.affiliateStay22": { de: "Stay22 Datenschutz", en: "Stay22 privacy policy" },
  "privacy.affiliateGyg": { de: "GetYourGuide Datenschutz", en: "GetYourGuide privacy policy" },
  "privacy.affiliateBooking": { de: "Booking.com Datenschutz", en: "Booking.com privacy policy" },
  "privacy.cookiesHeading": { de: "Cookies", en: "Cookies" },
  "privacy.cookiesBody": {
    de: "Es kommen technisch notwendige sowie optionale Cookies (Analyse, Werbung, Affiliate) zum Einsatz. Beim ersten Besuch erhaeltst du ein Cookie-Banner, in dem du selektiv entscheiden kannst.",
    en: "We use technically necessary as well as optional cookies (analytics, advertising, affiliate). On your first visit you receive a cookie banner in which you can decide selectively.",
  },
  "privacy.rightsHeading": { de: "Deine Rechte", en: "Your rights" },
  "privacy.rightsAccess": { de: "Auskunft ueber deine gespeicherten Daten (Art. 15 DSGVO)", en: "Access to your stored data (Art. 15 GDPR)" },
  "privacy.rightsRectification": { de: "Berichtigung unrichtiger Daten (Art. 16)", en: "Rectification of inaccurate data (Art. 16)" },
  "privacy.rightsErasure": { de: "Loeschung deiner Daten (Art. 17)", en: "Erasure of your data (Art. 17)" },
  "privacy.rightsRestriction": { de: "Einschraenkung der Verarbeitung (Art. 18)", en: "Restriction of processing (Art. 18)" },
  "privacy.rightsPortability": { de: "Datenuebertragbarkeit (Art. 20)", en: "Data portability (Art. 20)" },
  "privacy.rightsObjection": { de: "Widerspruch gegen die Verarbeitung (Art. 21)", en: "Objection to processing (Art. 21)" },
  "privacy.rightsWithdraw": { de: "Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3)", en: "Withdrawal of a granted consent (Art. 7 (3))" },
  "privacy.rightsContact": {
    de: "Zur Ausuebung genuegt eine formlose Nachricht an {email}.",
    en: "To exercise these rights, an informal message to {email} is sufficient.",
  },
  "privacy.lastUpdatedHeading": { de: "Stand", en: "Last updated" },
  "privacy.lastUpdatedBody": {
    de: "Diese Datenschutzerklaerung wurde zuletzt im Mai 2026 ueberarbeitet.",
    en: "This privacy policy was last revised in May 2026.",
  },

  // Terms page
  "terms.title": { de: "AGB / Nutzungsbedingungen", en: "Terms & Conditions" },
  "terms.metaDescription": {
    de: "Nutzungsbedingungen fuer das Stadtportal {site}-Interaktiv.",
    en: "Terms of use for the {site}-Interaktiv city portal.",
  },
  "terms.heading": { de: "Nutzungsbedingungen", en: "Terms of Use" },
  "terms.scopeHeading": { de: "1. Geltungsbereich", en: "1. Scope" },
  "terms.scopeBody": {
    de: "Diese Nutzungsbedingungen gelten fuer die Nutzung des Stadtportals {site}-Interaktiv, betrieben von {company}. Mit dem Aufrufen der Website erklaerst du dich mit diesen Bedingungen einverstanden.",
    en: "These terms of use apply to the use of the {site}-Interaktiv city portal, operated by {company}. By accessing the website you agree to these terms.",
  },
  "terms.servicesHeading": { de: "2. Leistungen", en: "2. Services" },
  "terms.servicesBody": {
    de: "{site}-Interaktiv ist ein redaktionelles Informationsportal. Wir stellen Informationen zu Sehenswuerdigkeiten, Hotels, Restaurants, Bezirken und Veranstaltungen bereit. Es besteht kein Anspruch auf Vollstaendigkeit oder Aktualitaet. {nature}",
    en: "{site}-Interaktiv is an editorial information portal. We provide information about attractions, hotels, restaurants, districts and events. There is no claim to completeness or topicality. {nature}",
  },
  "terms.affiliateHeading": { de: "3. Affiliate-Links und Buchungen", en: "3. Affiliate links and bookings" },
  "terms.affiliateBody": {
    de: "Buchungen von Hotels, Touren oder Tickets erfolgen ausschliesslich beim jeweiligen Drittanbieter (z.B. Booking.com, GetYourGuide). Es kommt kein Vertrag mit {site}-Interaktiv zustande. Es gelten die Bedingungen des jeweiligen Anbieters.",
    en: "Bookings of hotels, tours or tickets are made exclusively with the respective third-party provider (e.g. Booking.com, GetYourGuide). No contract is concluded with {site}-Interaktiv. The terms of the respective provider apply.",
  },
  "terms.liabilityHeading": { de: "4. Haftung", en: "4. Liability" },
  "terms.liabilityBody": {
    de: "Wir haften nicht fuer Schaeden, die aus der Nutzung der bereitgestellten Informationen oder aus Buchungen bei Drittanbietern entstehen. Fuer externe Links uebernehmen wir keine Haftung.",
    en: "We are not liable for damages arising from the use of the information provided or from bookings with third-party providers. We assume no liability for external links.",
  },
  "terms.copyrightHeading": { de: "5. Urheberrecht", en: "5. Copyright" },
  "terms.copyrightBody": {
    de: "Alle Inhalte unterliegen dem Urheberrecht. Bilder werden, sofern nicht anders ausgewiesen, unter Creative-Commons-Lizenzen von Wikimedia Commons verwendet und entsprechend gekennzeichnet.",
    en: "All content is subject to copyright. Unless otherwise stated, images are used under Creative Commons licences from Wikimedia Commons and credited accordingly.",
  },
  "terms.finalHeading": { de: "6. Schlussbestimmungen", en: "6. Final provisions" },
  "terms.finalBody": {
    de: "Es gilt deutsches Recht. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der uebrigen Bedingungen unberuehrt.",
    en: "German law applies. Should individual provisions be invalid, the validity of the remaining terms shall remain unaffected.",
  },
  "terms.lastUpdated": { de: "Stand: Mai 2026", en: "Last updated: May 2026" },

  // Tech hub page
  "tech.metaTitle": { de: "Tech-Hub Karlsruhe", en: "Karlsruhe Tech Hub" },
  "tech.metaDescription": {
    de: "Karlsruhe ist eines der wichtigsten Tech-Cluster Europas: KIT, FZI, CyberForum, ZKM und Fraunhofer. Der Tech-Hub der Faecherstadt.",
    en: "Karlsruhe is one of Europe's most important tech clusters: KIT, FZI, CyberForum, ZKM and Fraunhofer. The tech hub of the fan-shaped city.",
  },
  "tech.breadcrumb": { de: "Tech-Hub", en: "Tech Hub" },
  "tech.eyebrow": { de: "Karlsruhes USP", en: "Karlsruhe's USP" },
  "tech.heroLead": {
    de: "Karlsruhe ist nicht nur Faecherstadt und Residenz des Rechts — es ist eines der dichtesten Tech-Cluster Europas. KIT, FZI, CyberForum, ZKM und Fraunhofer machen die Stadt zum Innovations-Magnet.",
    en: "Karlsruhe is not only a fan-shaped city and the seat of law — it is one of Europe's densest tech clusters. KIT, FZI, CyberForum, ZKM and Fraunhofer make the city a magnet for innovation.",
  },
  "tech.institutionsHeading": { de: "Institutionen & Cluster", en: "Institutions & clusters" },
  "tech.experienceHeading": { de: "Tech & Wissenschaft erleben", en: "Experience tech & science" },
  "tech.newsHeading": { de: "Tech-News aus Karlsruhe", en: "Tech news from Karlsruhe" },
  "tech.allNews": { de: "Alle News →", en: "All news →" },
  "tech.website": { de: "Website →", en: "Website →" },
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
