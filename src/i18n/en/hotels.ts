import type { Hotel } from "../../data/hotels";

/**
 * Englische Inhalte der Hotels, gekeyt nach DEUTSCHEM slug.
 * Enthaelt den neuen englischen slug sowie alle uebersetzten Felder.
 * Nicht uebersetzt (aus dem Basis-Eintrag): coordinates, priceFrom, stars,
 * rating, reviews, guestFavorite, imageHue, bookingUrl, district.
 */
export type HotelEn = {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  amenities: string[];
};

export const hotelsEn: Record<string, HotelEn> = {
  "schlosshotel-karlsruhe": {
    slug: "schlosshotel-karlsruhe",
    name: "Schlosshotel Karlsruhe",
    shortDesc:
      "Classic 4-star hotel right by the main station. Comfortable and upscale, with its own restaurant and bar.",
    longDesc:
      "The Schlosshotel Karlsruhe has been the leading address by the main station for decades. Set directly on Bahnhofplatz next to the Stadtgarten, it offers spacious rooms, the Schloss Restaurant and the Schloss Bar.",
    amenities: ["Main station", "Restaurant", "Bar", "Classic"],
  },
  "hotel-santo": {
    slug: "hotel-santo",
    name: "Hotel Santo Karlsruhe",
    shortDesc:
      "Design hotel with minimalist architecture and richly coloured interiors. Close to the convention centre.",
    longDesc:
      "The Hotel Santo is Karlsruhe's design statement: minimalist architecture, vividly coloured interiors and Mediterranean cuisine in its restaurant. It sits right next to the convention centre and just a few minutes from the palace.",
    amenities: ["Design", "Restaurant", "Convention centre", "Boutique"],
  },
  "novum-hotel-imperial": {
    slug: "novum-hotel-imperial",
    name: "Novum Hotel Imperial Karlsruhe",
    shortDesc:
      "Modern city hotel on Kaiserstrasse with classic furnishings and the most central location possible.",
    longDesc:
      "The Novum Hotel Imperial lies in the heart of Karlsruhe's pedestrian zone on Kaiserstrasse. Classic furnishings, a good breakfast buffet and an ideal base for exploring the city on foot.",
    amenities: ["Central", "Kaiserstrasse", "Breakfast"],
  },
  "achat-hotel-city": {
    slug: "achat-hotel-city",
    name: "ACHAT Hotel Karlsruhe City",
    shortDesc:
      "Comfortable business hotel in a central location with modern rooms and reliable service.",
    longDesc:
      "The ACHAT Hotel Karlsruhe City is centrally located between the city centre and the main station. Solid business amenities, free Wi-Fi, its own car park and excellent value for money.",
    amenities: ["Business", "Central", "Car park"],
  },
  "hotel-am-markt": {
    slug: "hotel-am-markt",
    name: "Hotel am Markt",
    shortDesc:
      "Privately run city hotel right on the market square with a view of the Pyramid.",
    longDesc:
      "The Hotel am Markt enjoys a wonderful spot directly on the market square overlooking the Pyramid. Family-run, with a homemade breakfast, cosy rooms and a personal atmosphere.",
    amenities: ["Market square", "Family-run", "Boutique"],
  },
  "hotel-kuebler": {
    slug: "hotel-kuebler",
    name: "Hotel Kuebler",
    shortDesc:
      "Long-established city hotel with classic rooms, a bar and a restaurant.",
    longDesc:
      "The Hotel Kuebler is a classic city hotel with a long tradition. Simple, spotless rooms, a well-stocked breakfast room and a cosy bar.",
    amenities: ["Traditional", "Restaurant", "Bar"],
  },
  "premier-inn-karlsruhe-city": {
    slug: "premier-inn-karlsruhe-city",
    name: "Premier Inn Karlsruhe City",
    shortDesc:
      "Modern budget-comfort hotel centrally located on Erbprinzenstrasse. A favourite for city breaks.",
    longDesc:
      "The Premier Inn Karlsruhe City is one of the most modern budget-comfort hotels in town. A central location, a consistently high standard and very good value for money.",
    amenities: ["Budget", "Modern", "Central"],
  },
  "holiday-inn-karlsruhe": {
    slug: "holiday-inn-karlsruhe",
    name: "Holiday Inn Karlsruhe",
    shortDesc:
      "International 4-star hotel with gym, sauna and restaurant. Close to the convention centre.",
    longDesc:
      "The Holiday Inn Karlsruhe offers an international 4-star standard with a fitness area, sauna, restaurant and a quiet location towards the edge of the Suedstadt. Popular with business travellers.",
    amenities: ["Gym", "Sauna", "Restaurant"],
  },
  "hotel-eden": {
    slug: "hotel-eden",
    name: "Hotel Eden",
    shortDesc:
      "Family-run city hotel with cosy rooms, set on a quiet side street in a central location.",
    longDesc:
      "The Hotel Eden has been family-run for decades. A quiet city-centre side street, cosy rooms and a good breakfast. A favourite tip for returning guests.",
    amenities: ["Family-run", "Quiet", "Central"],
  },
  "bb-hotel-karlsruhe": {
    slug: "bb-hotel-karlsruhe",
    name: "B&B Hotel Karlsruhe",
    shortDesc:
      "Budget hotel with a high standard for the price. 24-hour check-in and free Wi-Fi.",
    longDesc:
      "The B&B Hotel Karlsruhe is the budget option with a dependable standard. Simply furnished rooms, 24-hour check-in, free Wi-Fi and a good breakfast buffet for a small surcharge.",
    amenities: ["Budget", "24h check-in"],
  },
  "ibis-karlsruhe-hauptbahnhof": {
    slug: "ibis-karlsruhe-central-station",
    name: "Ibis Karlsruhe Hauptbahnhof",
    shortDesc:
      "Dependable budget hotel right by the main station. Consistent, clean and fairly priced.",
    longDesc:
      "The Ibis Karlsruhe Hauptbahnhof delivers reliable budget quality directly at the main station. Standardised rooms, fair value for money and an ideal choice for short stays.",
    amenities: ["Main station", "Budget", "Modern"],
  },
  "hotel-berliner-hof": {
    slug: "hotel-berliner-hof",
    name: "Hotel Berliner Hof",
    shortDesc:
      "Cosy city hotel near the main station with a garden and a restaurant.",
    longDesc:
      "The Hotel Berliner Hof lies right by the southern side of the main station. A family-run property with a lovely courtyard garden and a restaurant serving Baden cuisine.",
    amenities: ["Garden", "Restaurant", "Family-run"],
  },
  "hotel-der-blaue-reiter": {
    slug: "hotel-der-blaue-reiter",
    name: "Hotel Der Blaue Reiter",
    shortDesc:
      "Art-themed hotel with works inspired by the Blue Rider movement. Quietly located in Durlach.",
    longDesc:
      "The Hotel Der Blaue Reiter is a lovingly designed art-themed hotel in historic Durlach. Each room is dedicated to an artist of the Blue Rider movement, and the Klauprecht 1 restaurant is an insider tip.",
    amenities: ["Art", "Restaurant", "Durlach"],
  },
  "hotel-rio-karlsruhe": {
    slug: "hotel-rio-karlsruhe",
    name: "Hotel Rio",
    shortDesc:
      "Privately run hotel with a garden and pool, close to the trade fair grounds.",
    longDesc:
      "The Hotel Rio lies south of Karlsruhe towards the trade fair grounds. A garden, a pool and cosy rooms make it a favourite with fair visitors and short-stay guests arriving by car.",
    amenities: ["Garden", "Pool", "Near trade fair"],
  },
  "best-western-queens-hotel": {
    slug: "best-western-queens-hotel",
    name: "Best Western Queens Hotel Karlsruhe-Ettlingen",
    shortDesc:
      "International 4-star hotel on the Karlsruhe-Ettlingen city border. Gym, sauna and restaurant.",
    longDesc:
      "The Best Western Queens Hotel is conveniently located between Karlsruhe and Ettlingen. Comfortable rooms, a fitness area with sauna and a restaurant. Popular for conferences and trade fair guests.",
    amenities: ["Gym", "Sauna", "Conferences"],
  },
  "erbprinz-ettlingen": {
    slug: "erbprinz-ettlingen",
    name: "Hotel Erbprinz Ettlingen",
    shortDesc:
      "5-star hotel with the Michelin-starred Erbprinz restaurant in neighbouring Ettlingen. Spa and fine dining.",
    longDesc:
      "The Hotel Erbprinz in Ettlingen, just outside the gates of Karlsruhe, is a top-class 5-star property. Its Michelin-starred Erbprinz restaurant, an extensive spa and the historic atmosphere make it a destination for Karlsruhe's food lovers.",
    amenities: ["Michelin-starred restaurant", "Spa", "Upscale"],
  },
  "ramada-by-wyndham": {
    slug: "ramada-by-wyndham",
    name: "Ramada by Wyndham Karlsruhe",
    shortDesc:
      "Comfortable mid-range hotel in the west of Karlsruhe. Good links to the city centre and motorway.",
    longDesc:
      "The Ramada by Wyndham Karlsruhe lies in Muehlburg with good connections to the motorway and the city-centre tram. Standardised comfort rooms, free parking and a restaurant.",
    amenities: ["Free parking", "Restaurant"],
  },
};

/** Liefert das EN-Override fuer ein deutsches Hotel-slug. */
export const getHotelEn = (slug: string): HotelEn | undefined => hotelsEn[slug];

/** Sicherheitsnetz: stellt sicher, dass der Basis-Typ kompatibel referenziert wird. */
export type HotelWithEn = { base: Hotel; en: HotelEn };
