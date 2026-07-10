import type { Restaurant } from "../../data/restaurants";

/**
 * Englische Inhalte fuer Restaurants, gekeyt nach deutschem slug.
 * Enthaelt den neuen englischen slug + alle uebersetzten Felder.
 * Nicht uebersetzt: priceLevel, imageHue, imageKey, websiteUrl, reservation,
 * district-/category-Referenz-Slugs (werden ueber die jeweiligen EN-Records aufgeloest).
 */
export type RestaurantEn = {
  slug: string;
  name: string;
  cuisine: string;
  shortDesc: string;
  longDesc: string;
  openingHours?: string;
};

export const restaurantsEn: Record<string, RestaurantEn> = {
  // === BADISCH ===
  "oberlaender-weinstube": {
    slug: "oberlaender-wine-tavern",
    name: "Oberlaender Weinstube",
    cuisine: "Baden cuisine",
    shortDesc:
      "Karlsruhe's legendary top address for Baden cuisine since 1824. Classic regional cooking at the highest level.",
    longDesc:
      "The Oberlaender Weinstube on Akademiestrasse has been a Karlsruhe institution since 1824. Classic Baden cuisine, regional wines and a courtyard garden in summer. Widely regarded as the city's finest Baden restaurant.",
    openingHours: "Tue–Sat 12pm–2:30pm + 6pm–11pm",
  },
  "badisch-brauhaus": {
    slug: "badisch-brauhaus",
    name: "Badisch Brauhaus",
    cuisine: "Baden cuisine",
    shortDesc:
      "Brewpub with its own brewery in the heart of Karlsruhe. Baden classics and house-brewed beer.",
    longDesc:
      "The Badisch Brauhaus is Karlsruhe's classic brewpub, with its own brewery right by the Stephanienbrunnen fountain. Baden specialities such as Schaeufele and Maultaschen, paired with house-brewed pils and wheat beer. Popular with locals and visitors alike.",
    openingHours: "Mon–Sun 11am–12am",
  },
  "vogelbraeu": {
    slug: "vogelbraeu",
    name: "Vogelbraeu",
    cuisine: "Baden cuisine",
    shortDesc:
      "Brewpub on Kapellenstrasse with its own beer and solid Baden-German cooking.",
    longDesc:
      "The Vogelbraeu on Kapellenstrasse is Karlsruhe's second most important brewpub. Its own house brewery and a classic brewpub menu featuring pork knuckle, Spaetzle and Maultaschen. Large outdoor terrace in summer.",
    openingHours: "Mon–Sun 11am–12am",
  },
  "brauhaus-kuehler-krug": {
    slug: "brauhaus-kuehler-krug",
    name: "Brauhaus Kuehler Krug",
    cuisine: "Baden cuisine",
    shortDesc:
      "Brewpub in the Stadtgarten with a beer garden under old trees. A summer classic for Karlsruhe.",
    longDesc:
      "The Brauhaus Kuehler Krug sits in the middle of the Stadtgarten, right by the main station. In summer it has one of the city's loveliest beer gardens, set beneath old chestnut trees. Classic Baden tavern cooking and house-brewed beer.",
    openingHours: "Mon–Sun 11am–11pm",
  },

  // === STERNEKUECHE / GEHOBEN ===
  "sein": {
    slug: "sein",
    name: "Sein",
    cuisine: "Modern",
    shortDesc:
      "Karlsruhe's first Michelin-starred restaurant. Modern, creative cuisine, tasting menus and clean architecture.",
    longDesc:
      "Sein is Karlsruhe's first restaurant to earn a Michelin star. Modern, creative cuisine, tasting menus only and an intimate atmosphere with clean architecture. Reservations weeks in advance are recommended.",
    openingHours: "Wed–Sat from 7pm",
  },
  "erasmus": {
    slug: "erasmus",
    name: "Erasmus",
    cuisine: "Bistro",
    shortDesc:
      "A bistro-style star in a relaxed setting. Seasonal Mediterranean cuisine at an elevated level.",
    longDesc:
      "Erasmus is Karlsruhe's bistro-style star: refined, seasonal Mediterranean cooking in a relaxed atmosphere. A changing daily menu, less formal than Sein, and a favourite for an indulgent lunch.",
    openingHours: "Tue–Sat 12pm–2pm + 6:30pm–10pm",
  },
  "restaurant-anders": {
    slug: "restaurant-anders",
    name: "Restaurant Anders",
    cuisine: "Modern",
    shortDesc:
      "Refined modern cuisine with a Karlsruhe connection. Seasonal, regional and creative.",
    longDesc:
      "Restaurant Anders focuses on modern cuisine with a clear regional identity. Seasonal produce from Baden, Alsace and the Palatinate, with a wine pairing built around natural wines from the region.",
    openingHours: "Wed–Sat 6pm–11pm",
  },
  "kesselhaus": {
    slug: "kesselhaus",
    name: "Kesselhaus",
    cuisine: "Modern",
    shortDesc:
      "Modern, seasonal cuisine in the former boiler house of the old slaughterhouse. Industrial-chic ambience.",
    longDesc:
      "The Kesselhaus is located in the restored old slaughterhouse quarter of the Suedstadt. Modern, seasonal cuisine in an industrial-chic setting of exposed concrete and steel beams. A favourite among young Karlsruhe food lovers.",
    openingHours: "Tue–Sat 6pm–11pm",
  },

  // === ITALIENISCH ===
  "ristorante-lehners": {
    slug: "ristorante-lehners",
    name: "Ristorante Lehners",
    cuisine: "Italian",
    shortDesc:
      "A classic Italian restaurant with wood-fired pizza and handmade pasta dishes.",
    longDesc:
      "Ristorante Lehners is Karlsruhe's classic Italian, with wood-fired pizza, homemade pasta and friendly service. A favourite for family meals and cosy evenings with friends.",
    openingHours: "Mon–Sun 11:30am–11pm",
  },
  "la-forchetta": {
    slug: "ristorante-la-forchetta",
    name: "Ristorante La Forchetta",
    cuisine: "Italian",
    shortDesc:
      "Ambitious Italian cuisine with a seasonal focus. A small menu and an excellent wine list.",
    longDesc:
      "La Forchetta in the Suedweststadt offers ambitious Italian cuisine that goes well beyond the standard trattoria menu. A small, seasonally focused menu, an excellent selection of Italian wines and a lovely atmosphere.",
    openingHours: "Tue–Sat 6pm–11pm",
  },
  "lo-stivale": {
    slug: "pizzeria-lo-stivale",
    name: "Pizzeria Lo Stivale",
    cuisine: "Italian",
    shortDesc:
      "A cult pizzeria in Karlsruhe's west end with crispy pizza and a trattoria atmosphere.",
    longDesc:
      "Pizzeria Lo Stivale has been Karlsruhe's family Italian for decades. Crispy pizza, classic pasta and a friendly trattoria atmosphere. Reservations are recommended at the weekend.",
    openingHours: "Mon–Sun 12pm–11pm",
  },
  "tre-sorelle": {
    slug: "tre-sorelle",
    name: "Tre Sorelle",
    cuisine: "Italian",
    shortDesc:
      "A family-run Italian in the Suedstadt with a large menu and a relaxed atmosphere.",
    longDesc:
      "Tre Sorelle is a classic Suedstadt Italian with a large menu, friendly service and a relaxed atmosphere. A favourite among regulars from the neighbourhood.",
    openingHours: "Mon–Sun 12pm–11pm",
  },

  // === ASIATISCH ===
  "sakai-sushi": {
    slug: "sakai-sushi",
    name: "Sakai Sushi",
    cuisine: "Japanese",
    shortDesc:
      "Premium sushi in Karlsruhe with fresh fish and classic Japanese presentation.",
    longDesc:
      "Sakai Sushi is Karlsruhe's premium sushi address. Classic Japanese sushi culture, fresh fish and a small restaurant with both counter and table seating. Tasting menus available.",
    openingHours: "Mon–Sat 6pm–10:30pm",
  },
  "hanami": {
    slug: "hanami",
    name: "Hanami",
    cuisine: "Japanese",
    shortDesc:
      "A lively sushi restaurant with a conveyor belt and a large menu. Popular for lunch and with families.",
    longDesc:
      "Hanami is Karlsruhe's liveliest sushi restaurant. A sushi conveyor belt, a large menu of Japanese and Asian classics and fair prices. A favourite for lunch and with families.",
    openingHours: "Mon–Sun 11:30am–10:30pm",
  },
  "pho-sai-gon": {
    slug: "pho-sai-gon",
    name: "Pho Sai Gon",
    cuisine: "Vietnamese",
    shortDesc:
      "Authentic Vietnamese in the Suedstadt. Pho bo and banh mi as Karlsruhe's insider tips.",
    longDesc:
      "Pho Sai Gon is Karlsruhe's most authentic pho address. Vietnamese home cooking, rich broths and fresh herbs. Small and unfussy, but a culinary standout.",
    openingHours: "Tue–Sun 12pm–10pm",
  },
  "thai-express": {
    slug: "thai-express",
    name: "Thai-Express",
    cuisine: "Thai",
    shortDesc:
      "Authentic Thai street food in the middle of the city centre. Fast, good and affordable.",
    longDesc:
      "Thai-Express serves authentic Thai street food. Wok dishes, curries and soups, freshly prepared and inexpensive. A popular spot for a quick lunch break.",
    openingHours: "Mon–Sat 11am–9pm",
  },

  // === TUERKISCH / LEVANTE ===
  "mezzo-mezzo": {
    slug: "mezzo-mezzo",
    name: "Mezzo Mezzo",
    cuisine: "Mediterranean",
    shortDesc:
      "Mediterranean-Turkish cuisine with mezze platters and grilled fish. A lively atmosphere.",
    longDesc:
      "Mezzo Mezzo offers Mediterranean-Turkish cuisine with superb mezze platters, grilled fish and lamb. A lively atmosphere and a favourite for groups.",
    openingHours: "Tue–Sun 6pm–11pm",
  },
  "kebap-house": {
    slug: "kebap-house",
    name: "Kebap House",
    cuisine: "Turkish",
    shortDesc:
      "Karlsruhe's classic doner address. Fresh ingredients, wood-fired lavash and always a queue.",
    longDesc:
      "Kebap House has been Karlsruhe's classic doner address for decades. Fresh ingredients, wood-fired lavash and daily specials. Always a queue, always good.",
    openingHours: "Mon–Sat 11am–11pm",
  },
  "bashar": {
    slug: "bashar",
    name: "Bashar",
    cuisine: "Levantine",
    shortDesc:
      "Authentic Syrian-Lebanese cuisine with hummus, falafel and lamb classics.",
    longDesc:
      "Bashar serves authentic Syrian-Lebanese cuisine: homemade hummus, falafel, grilled lamb and fresh salads. Family-run, with a friendly atmosphere.",
    openingHours: "Mon–Sun 12pm–10pm",
  },

  // === CASUAL / MODERN ===
  "vapiano-karlsruhe": {
    slug: "vapiano-karlsruhe",
    name: "Vapiano Karlsruhe",
    cuisine: "Italian",
    shortDesc:
      "A front-cooking Italian on Europaplatz. Pasta and pizza prepared fresh to order.",
    longDesc:
      "Vapiano on Europaplatz is Karlsruhe's casual Italian with a front-cooking concept. Pasta and pizza are prepared in front of guests, no reservation needed - a favourite for a quick lunch.",
    openingHours: "Mon–Sun 11am–11pm",
  },
  "losteria-karlsruhe": {
    slug: "losteria-karlsruhe",
    name: "L'Osteria Karlsruhe",
    cuisine: "Italian",
    shortDesc:
      "The XXL-pizza chain in Karlsruhe's city centre. Family-friendly and affordable.",
    longDesc:
      "L'Osteria Karlsruhe is known for its oversized pizzas, a full 30 cm across, alongside solid Italian pasta. Family-friendly and a favourite for groups.",
    openingHours: "Mon–Sun 11:30am–11pm",
  },
  "hans-im-glueck": {
    slug: "hans-im-glueck",
    name: "Hans im Glueck",
    cuisine: "Burger",
    shortDesc:
      "A burger chain with a Nordic birch-wood interior. A fairy-tale atmosphere and solid burgers.",
    longDesc:
      "Hans im Glueck on Europaplatz serves its distinctive fairy-tale burgers in a Nordic birch-wood setting. Vegetarian options, a good burger selection and a favourite among students.",
    openingHours: "Mon–Sun 11:30am–11pm",
  },
  "cafe-kreuzberg": {
    slug: "cafe-kreuzberg",
    name: "Cafe Kreuzberg",
    cuisine: "Cafe",
    shortDesc:
      "A lively Suedstadt cafe with good food, a daily menu and vegan options.",
    longDesc:
      "Cafe Kreuzberg is a Suedstadt classic for relaxed cafe hours, a good lunch and vegan options. A changing daily menu and a lovely courtyard in summer.",
    openingHours: "Mon–Sun 9am–12am",
  },
  "cafe-bleu": {
    slug: "cafe-bleu",
    name: "Cafe Bleu",
    cuisine: "Cafe",
    shortDesc:
      "A classic cafe with a breakfast menu, bistro lunch and a cosy atmosphere.",
    longDesc:
      "Cafe Bleu offers a classic cafe atmosphere with a long breakfast menu, bistro lunch and cakes. A favourite for weekend brunch.",
    openingHours: "Mon–Sun 8am–11pm",
  },

  // === VEGETARISCH ===
  "goldene-krone": {
    slug: "goldene-krone",
    name: "Goldene Krone",
    cuisine: "Vegetarian",
    shortDesc:
      "A vegetarian-vegan restaurant with a changing menu and seasonal ingredients.",
    longDesc:
      "The Goldene Krone is Karlsruhe's pioneering address for vegetarian-vegan cuisine. A changing menu, seasonal ingredients and a regional, organic focus. A favourite among young Suedstadt residents.",
    openingHours: "Tue–Sun 12pm–10pm",
  },
  "suppdiwupp": {
    slug: "suppdiwupp",
    name: "Suppdiwupp",
    cuisine: "Vegetarian",
    shortDesc:
      "A soup spot in the city centre. Daily-changing soups, curries and stews.",
    longDesc:
      "Suppdiwupp is Karlsruhe's soup classic. Daily-changing soups, curries and stews that go against the grain of the big restaurant kitchens. Fast, good and vegan- and vegetarian-friendly.",
    openingHours: "Mon–Sat 11am–3pm",
  },
  "eigelb": {
    slug: "eigelb",
    name: "Eigelb",
    cuisine: "Bistro",
    shortDesc:
      "A bistro with a creative lunch menu, organic ingredients and a vegetarian-vegan focus.",
    longDesc:
      "Eigelb is a modern bistro with a creative lunch menu, organic ingredients and a focus on vegetarian and vegan options. A favourite for lunch.",
    openingHours: "Mon–Fri 11:30am–3pm, Sat 10am–3pm",
  },

  // === DURLACH ===
  "klauprecht-1": {
    slug: "klauprecht-1",
    name: "Klauprecht 1",
    cuisine: "Modern",
    shortDesc:
      "A modern restaurant in the Hotel Der Blaue Reiter. Seasonal cuisine and an excellent wine list.",
    longDesc:
      "Klauprecht 1 in the Hotel Der Blaue Reiter is Durlach's upscale address. Modern, seasonal cuisine, an excellent wine list with a focus on Baden and Alsatian wines, and a quiet atmosphere.",
    openingHours: "Wed–Sat 6pm–10:30pm",
  },
};

export const getRestaurantEn = (slug: string): RestaurantEn | undefined =>
  restaurantsEn[slug];
