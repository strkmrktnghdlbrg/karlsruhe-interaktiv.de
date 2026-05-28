export type Hotel = {
  slug: string;
  name: string;
  district: string;
  stars: 2 | 3 | 4 | 5;
  priceFrom: number;
  rating: number;
  reviews: number;
  guestFavorite?: boolean;
  shortDesc: string;
  longDesc: string;
  imageHue: number;
  bookingUrl: string;
  amenities: string[];
};

export const hotels: Hotel[] = [
  // === INNENSTADT-WEST ===
  {
    slug: "schlosshotel-karlsruhe",
    name: "Schlosshotel Karlsruhe",
    district: "innenstadt-west",
    stars: 4,
    priceFrom: 145,
    rating: 8.5,
    reviews: 1820,
    guestFavorite: true,
    shortDesc:
      "Klassisches 4-Sterne-Haus direkt am Hauptbahnhof. Komfortabel, gehoben, mit Restaurant und Bar.",
    longDesc:
      "Das Schlosshotel Karlsruhe ist seit Jahrzehnten erste Adresse am Hauptbahnhof. Direkt am Bahnhofplatz und am Stadtgarten gelegen, mit grosszuegigen Zimmern, dem Schloss-Restaurant und der Schloss-Bar.",
    imageHue: 1,
    bookingUrl: "https://www.booking.com/hotel/de/schlosshotel-karlsruhe.de.html",
    amenities: ["Hauptbahnhof", "Restaurant", "Bar", "Klassisch"],
  },
  {
    slug: "hotel-santo",
    name: "Hotel Santo Karlsruhe",
    district: "innenstadt-west",
    stars: 4,
    priceFrom: 125,
    rating: 8.8,
    reviews: 1240,
    guestFavorite: true,
    shortDesc:
      "Design-Hotel mit minimalistischer Architektur und farbintensivem Innenraum. Naehe Kongresszentrum.",
    longDesc:
      "Das Hotel Santo ist Karlsruhes Designstatement: minimalistische Architektur, farbintensive Innenwelten, mediterrane Kueche im Restaurant. Direkt neben dem Kongresszentrum und nur wenige Minuten vom Schloss entfernt.",
    imageHue: 3,
    bookingUrl: "https://www.booking.com/hotel/de/hotel-santo-karlsruhe.de.html",
    amenities: ["Design", "Restaurant", "Kongresszentrum", "Boutique"],
  },
  {
    slug: "novum-hotel-imperial",
    name: "Novum Hotel Imperial Karlsruhe",
    district: "innenstadt-west",
    stars: 4,
    priceFrom: 95,
    rating: 7.9,
    reviews: 980,
    shortDesc:
      "Modernes Stadthotel an der Kaiserstrasse mit klassischer Ausstattung und zentralster Lage.",
    longDesc:
      "Das Novum Hotel Imperial liegt mitten in der Karlsruher Fussgaengerzone an der Kaiserstrasse. Klassische Ausstattung, gutes Fruehstuecksbuffet, ideal fuer Stadt-Erkundungen zu Fuss.",
    imageHue: 2,
    bookingUrl: "https://www.booking.com/hotel/de/novum-hotel-imperial-karlsruhe.de.html",
    amenities: ["Zentral", "Kaiserstrasse", "Fruehstueck"],
  },
  {
    slug: "achat-hotel-city",
    name: "ACHAT Hotel Karlsruhe City",
    district: "innenstadt-west",
    stars: 4,
    priceFrom: 105,
    rating: 8.2,
    reviews: 1450,
    shortDesc:
      "Komfortables Business-Hotel in zentraler Lage mit modernen Zimmern und gutem Service.",
    longDesc:
      "Das ACHAT Hotel Karlsruhe City liegt zentral zwischen Innenstadt und Hauptbahnhof. Solide Business-Ausstattung, freies WLAN, eigenes Parkhaus, gutes Preis-Leistungs-Verhaeltnis.",
    imageHue: 4,
    bookingUrl: "https://www.booking.com/hotel/de/achat-comfort-karlsruhe-city.de.html",
    amenities: ["Business", "Zentral", "Parkhaus"],
  },
  {
    slug: "hotel-am-markt",
    name: "Hotel am Markt",
    district: "innenstadt-west",
    stars: 3,
    priceFrom: 85,
    rating: 8.4,
    reviews: 720,
    shortDesc:
      "Privat gefuehrtes Stadthotel direkt am Marktplatz mit Pyramide-Blick.",
    longDesc:
      "Das Hotel am Markt liegt traumhaft direkt am Marktplatz mit Blick auf die Pyramide. Familiengefuehrt, mit hausgemachtem Fruehstueck, gemuetlichen Zimmern und persoenlicher Atmosphaere.",
    imageHue: 5,
    bookingUrl: "https://www.booking.com/hotel/de/hotel-am-markt-karlsruhe.de.html",
    amenities: ["Marktplatz", "Familiengefuehrt", "Boutique"],
  },
  {
    slug: "hotel-kuebler",
    name: "Hotel Kuebler",
    district: "innenstadt-west",
    stars: 3,
    priceFrom: 75,
    rating: 7.8,
    reviews: 640,
    shortDesc:
      "Traditionsreiches Stadthotel mit klassischen Zimmern, Bar und Restaurant.",
    longDesc:
      "Das Hotel Kuebler ist ein klassisches Stadthotel mit langer Tradition. Schlichte, saubere Zimmer, ein gut sortierter Fruehstuecksraum und eine gemuetliche Bar.",
    imageHue: 1,
    bookingUrl: "https://www.booking.com/hotel/de/kuebler.de.html",
    amenities: ["Traditionell", "Restaurant", "Bar"],
  },
  {
    slug: "premier-inn-karlsruhe-city",
    name: "Premier Inn Karlsruhe City",
    district: "innenstadt-west",
    stars: 3,
    priceFrom: 70,
    rating: 8.6,
    reviews: 1380,
    shortDesc:
      "Modernes Budget-Komfort-Hotel zentral an der Erbprinzenstrasse. Beliebt fuer Staedtetrips.",
    longDesc:
      "Das Premier Inn Karlsruhe City ist eines der modernsten Budget-Komfort-Hotels der Stadt. Zentrale Lage, einheitlich hoher Standard, sehr gutes Preis-Leistungs-Verhaeltnis.",
    imageHue: 3,
    bookingUrl: "https://www.booking.com/hotel/de/premier-inn-karlsruhe-city.de.html",
    amenities: ["Budget", "Modern", "Zentral"],
  },
  {
    slug: "holiday-inn-karlsruhe",
    name: "Holiday Inn Karlsruhe",
    district: "innenstadt-west",
    stars: 4,
    priceFrom: 110,
    rating: 8.3,
    reviews: 1820,
    shortDesc:
      "Internationales 4-Sterne-Haus mit Fitness, Sauna und Restaurant. Nah am Kongresszentrum.",
    longDesc:
      "Das Holiday Inn Karlsruhe bietet internationalen 4-Sterne-Standard mit Fitnessbereich, Sauna, Restaurant und einer ruhigen Lage Richtung Suedstadt-Rand. Beliebt bei Geschaeftsreisenden.",
    imageHue: 4,
    bookingUrl: "https://www.booking.com/hotel/de/holiday-inn-karlsruhe.de.html",
    amenities: ["Fitness", "Sauna", "Restaurant"],
  },
  {
    slug: "hotel-eden",
    name: "Hotel Eden",
    district: "innenstadt-west",
    stars: 3,
    priceFrom: 80,
    rating: 8.1,
    reviews: 510,
    shortDesc:
      "Familiengefuehrtes Stadthotel mit gemuetlichen Zimmern, in ruhiger Seitenstrasse zentral gelegen.",
    longDesc:
      "Das Hotel Eden wird seit Jahrzehnten familiengefuehrt. Ruhige Innenstadt-Seitenstrasse, gemuetliche Zimmer, gutes Fruehstueck. Beliebter Tipp fuer Wiederkehrer.",
    imageHue: 2,
    bookingUrl: "https://www.booking.com/hotel/de/hotel-eden-karlsruhe.de.html",
    amenities: ["Familiengefuehrt", "Ruhig", "Zentral"],
  },
  {
    slug: "bb-hotel-karlsruhe",
    name: "B&B Hotel Karlsruhe",
    district: "innenstadt-west",
    stars: 2,
    priceFrom: 65,
    rating: 8.0,
    reviews: 940,
    shortDesc:
      "Budget-Hotel mit hohem Standard fuer den Preis. 24h Check-In, freies WLAN.",
    longDesc:
      "Das B&B Hotel Karlsruhe ist die Budget-Option mit zuverlaessigem Standard. Schlicht eingerichtete Zimmer, 24-Stunden-Check-In, freies WLAN, gutes Fruehstuecksbuffet zum Aufpreis.",
    imageHue: 5,
    bookingUrl: "https://www.booking.com/hotel/de/b-b-karlsruhe.de.html",
    amenities: ["Budget", "24h Check-In"],
  },

  // === HAUPTBAHNHOF / SUEDSTADT-RAND ===
  {
    slug: "ibis-karlsruhe-hauptbahnhof",
    name: "Ibis Karlsruhe Hauptbahnhof",
    district: "suedweststadt",
    stars: 3,
    priceFrom: 75,
    rating: 8.2,
    reviews: 2100,
    shortDesc:
      "Verlaessliches Budget-Hotel direkt am Hauptbahnhof. Einheitlich, sauber, fair.",
    longDesc:
      "Das Ibis Karlsruhe Hauptbahnhof bietet zuverlaessige Budget-Qualitaet direkt am Hauptbahnhof. Standardisierte Zimmer, faires Preis-Leistungs-Verhaeltnis, ideal fuer Kurzaufenthalte.",
    imageHue: 1,
    bookingUrl: "https://www.booking.com/hotel/de/ibis-karlsruhe-hauptbahnhof.de.html",
    amenities: ["Hauptbahnhof", "Budget", "Modern"],
  },
  {
    slug: "hotel-berliner-hof",
    name: "Hotel Berliner Hof",
    district: "suedweststadt",
    stars: 3,
    priceFrom: 85,
    rating: 8.0,
    reviews: 690,
    shortDesc:
      "Gemuetliches Stadthotel in Hauptbahnhof-Naehe mit Garten und Restaurant.",
    longDesc:
      "Das Hotel Berliner Hof liegt direkt am Hauptbahnhof Sued. Familiengefuehrtes Haus, schoener Innenhof-Garten, Restaurant mit badischer Kueche.",
    imageHue: 3,
    bookingUrl: "https://www.booking.com/hotel/de/berliner-hof-karlsruhe.de.html",
    amenities: ["Garten", "Restaurant", "Familiengefuehrt"],
  },

  // === DURLACH ===
  {
    slug: "hotel-der-blaue-reiter",
    name: "Hotel Der Blaue Reiter",
    district: "durlach",
    stars: 4,
    priceFrom: 130,
    rating: 8.9,
    reviews: 1180,
    guestFavorite: true,
    shortDesc:
      "Kunst-Themenhotel mit Werken inspiriert vom Blauen Reiter. Ruhig in Durlach gelegen.",
    longDesc:
      "Das Hotel Der Blaue Reiter ist ein liebevoll gestaltetes Kunst-Themenhotel im historischen Durlach. Jedes Zimmer ist einem Kuenstler des Blauen Reiter gewidmet, das Restaurant Klauprecht 1 ist Geheimtipp.",
    imageHue: 4,
    bookingUrl: "https://www.booking.com/hotel/de/blaue-reiter.de.html",
    amenities: ["Kunst", "Restaurant", "Durlach"],
  },

  // === RAND / MESSE ===
  {
    slug: "hotel-rio-karlsruhe",
    name: "Hotel Rio",
    district: "rueppurr",
    stars: 3,
    priceFrom: 80,
    rating: 7.8,
    reviews: 590,
    shortDesc:
      "Privat gefuehrtes Hotel mit Garten und Pool, Messe-Naehe.",
    longDesc:
      "Das Hotel Rio liegt suedlich von Karlsruhe Richtung Messe. Garten, Pool, gemuetliche Zimmer. Beliebt bei Messegaesten und Kurzaufenthaltern mit dem Auto.",
    imageHue: 2,
    bookingUrl: "https://www.booking.com/hotel/de/rio-karlsruhe.de.html",
    amenities: ["Garten", "Pool", "Messe-Naehe"],
  },
  {
    slug: "best-western-queens-hotel",
    name: "Best Western Queens Hotel Karlsruhe-Ettlingen",
    district: "rueppurr",
    stars: 4,
    priceFrom: 120,
    rating: 8.4,
    reviews: 1320,
    shortDesc:
      "Internationales 4-Sterne-Haus an der Stadtgrenze Karlsruhe-Ettlingen. Fitness, Sauna, Restaurant.",
    longDesc:
      "Das Best Western Queens Hotel liegt verkehrsguenstig zwischen Karlsruhe und Ettlingen. Komfortable Zimmer, Fitnessbereich mit Sauna, Restaurant. Beliebt fuer Tagungen und Messegaeste.",
    imageHue: 5,
    bookingUrl: "https://www.booking.com/hotel/de/best-western-queens.de.html",
    amenities: ["Fitness", "Sauna", "Tagungen"],
  },

  // === STERNEKOECHE-HOTEL VOR DEN TOREN ===
  {
    slug: "erbprinz-ettlingen",
    name: "Hotel Erbprinz Ettlingen",
    district: "rueppurr",
    stars: 5,
    priceFrom: 220,
    rating: 9.2,
    reviews: 980,
    guestFavorite: true,
    shortDesc:
      "5-Sterne-Hotel mit Stern-Restaurant Erbprinz in der Nachbarstadt Ettlingen. Spa, gehobene Kueche.",
    longDesc:
      "Das Hotel Erbprinz in Ettlingen vor den Toren Karlsruhes ist ein 5-Sterne-Haus der Spitzenklasse. Das Sterne-Restaurant Erbprinz, ein umfangreicher Spa-Bereich und die historische Atmosphaere machen ihn zum Ausflugsziel fuer Karlsruher Kulinariker.",
    imageHue: 1,
    bookingUrl: "https://www.booking.com/hotel/de/erbprinz.de.html",
    amenities: ["Sternerestaurant", "Spa", "Gehoben"],
  },

  // === RAND-WEST ===
  {
    slug: "ramada-by-wyndham",
    name: "Ramada by Wyndham Karlsruhe",
    district: "muehlburg",
    stars: 3,
    priceFrom: 85,
    rating: 7.9,
    reviews: 760,
    shortDesc:
      "Komfortables Mittelklasse-Hotel im Westen Karlsruhes. Gute Anbindung an Innenstadt und Autobahn.",
    longDesc:
      "Das Ramada by Wyndham Karlsruhe liegt in Muehlburg mit guter Anbindung an Autobahn und Innenstadt-Tram. Standardisierte Komfortzimmer, freies Parken, Restaurant.",
    imageHue: 4,
    bookingUrl: "https://www.booking.com/hotel/de/ramada-karlsruhe.de.html",
    amenities: ["Parken frei", "Restaurant"],
  },
];

export const getHotel = (slug: string) => hotels.find((h) => h.slug === slug);
export const hotelsByDistrict = (district: string) =>
  hotels.filter((h) => h.district === district);
export const topHotelsByDistrict = (district: string, limit = 5) =>
  hotelsByDistrict(district).sort((a, b) => b.rating - a.rating).slice(0, limit);
export const topHotels = (limit = 6) =>
  [...hotels].sort((a, b) => b.rating - a.rating).slice(0, limit);
