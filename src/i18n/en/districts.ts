import type { District } from "../../data/districts";

/**
 * Englische Inhalts-Overrides fuer Bezirke (districts).
 * Gekeyt nach dem DEUTSCHEN slug. Enthaelt den neuen englischen slug
 * sowie alle uebersetzten Textfelder. Nicht uebersetzt werden
 * coordinates, hue, imageKey (kommen aus dem Basis-Eintrag).
 */
export type DistrictEn = {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  characterTags: string[];
};

export const districtsEn: Record<string, DistrictEn> = {
  "innenstadt-west": {
    slug: "city-center-west",
    name: "City Center West",
    shortDesc:
      "Schlossplatz, market square and the western pedestrian zone. Karlsruhe's baroque heart and the origin of the fan layout.",
    longDesc:
      "City Center West is where Karlsruhe's fan begins. From Karlsruhe Palace, the city's 32 radiating streets fan out to the south. This is home to the market square, the Pyramid, St Stephen's Church, the Staatliche Kunsthalle art museum and the Botanical Garden.",
    characterTags: ["Baroque", "Fan layout", "Palace"],
  },
  "innenstadt-ost": {
    slug: "city-center-east",
    name: "City Center East",
    shortDesc:
      "East of Karl-Friedrich-Strasse: Friedrichsplatz, the state theater and a lively urban downtown atmosphere.",
    longDesc:
      "City Center East stretches from the Schlossplatz to the main station. Friedrichsplatz, the Natural History Museum, the Baden State Theater and the café culture along Karl-Friedrich-Strasse give this district its character.",
    characterTags: ["Urban", "Theater", "Museums"],
  },
  suedstadt: {
    slug: "suedstadt",
    name: "Suedstadt",
    shortDesc:
      "A multicultural, alternative neighborhood around Werderplatz and Werderstrasse.",
    longDesc:
      "Suedstadt is Karlsruhe's most vibrant district. Werderplatz with its weekly market, Werderstrasse with its small shops and bars, the Tollhaus cultural center and the Substage concert venue all sit here. Student life mingles with long-established Baden families.",
    characterTags: ["Multicultural", "Alternative", "Nightlife"],
  },
  suedweststadt: {
    slug: "suedweststadt",
    name: "Suedweststadt",
    shortDesc:
      "A Gründerzeit residential quarter with period buildings, the city park and the zoo close by.",
    longDesc:
      "Suedweststadt is a feel-good residential district with Gründerzeit architecture, quiet streets and Karlsruhe's city park including the zoo. It is popular with young families and academics.",
    characterTags: ["Gründerzeit", "Residential", "Park"],
  },
  weststadt: {
    slug: "weststadt",
    name: "Weststadt",
    shortDesc:
      "Mühlburger Tor, Yorkstrasse, colleges and residential living. Early classicism meets student life.",
    longDesc:
      "Weststadt covers the area between the Mühlburger Tor and Yorkstrasse. Colleges, architecture from several eras, the Botanical Garden on its edge and quiet residential streets shape the picture here.",
    characterTags: ["Colleges", "Residential", "Classicism"],
  },
  muehlburg: {
    slug: "muehlburg",
    name: "Mühlburg",
    shortDesc:
      "A former village in the west, today a city district with the Entenfang lake and an old village core.",
    longDesc:
      "Mühlburg was once independent and was incorporated into Karlsruhe in 1886. The Entenfang as a local recreation area, the Rhine harbour industrial zone and a lively local community define the district.",
    characterTags: ["Village core", "Lake", "Local life"],
  },
  durlach: {
    slug: "durlach",
    name: "Durlach",
    shortDesc:
      "A historic margravial town with the Karlsburg, an old town and the Turmberg rising above the city.",
    longDesc:
      "Durlach is Karlsruhe's oldest town - founded before Karlsruhe itself, it was the residence of the Margraves of Baden until 1715. The Karlsburg, the old town, the Pfinzgau Museum, the Mehlwaage and the Turmberg funicular make Durlach a tourist highlight beyond the city center.",
    characterTags: ["Historic", "Margraves", "Views"],
  },
  oststadt: {
    slug: "oststadt",
    name: "Oststadt",
    shortDesc:
      "Close to the KIT campus, a residential quarter with a large student presence near Gottesaue Palace.",
    longDesc:
      "Oststadt is Karlsruhe's science district. The KIT South Campus sits right on its edge, and Gottesaue Palace houses the University of Music. The quarter is quiet, leafy and academic in character.",
    characterTags: ["KIT", "Students", "Science"],
  },
  rueppurr: {
    slug: "rueppurr",
    name: "Rüppurr",
    shortDesc:
      "A southern residential district with villas, garden-city character and quiet streets.",
    longDesc:
      "Rüppurr is an affluent southern residential district with garden-city character. Villas, well-kept gardens and good connections to the city center and the Alb valley define the area.",
    characterTags: ["Villas", "Residential", "Garden city"],
  },
  daxlanden: {
    slug: "daxlanden",
    name: "Daxlanden",
    shortDesc:
      "To the south-west by the Rhine harbour, with industrial heritage and the Burgau nature reserve.",
    longDesc:
      "Daxlanden lies on the Rhine and is home to part of Karlsruhe's Rhine harbour - one of the largest inland ports in Germany. The Burgau nature reserve offers waterside recreation.",
    characterTags: ["Rhine", "Industry", "Nature"],
  },
  knielingen: {
    slug: "knielingen",
    name: "Knielingen",
    shortDesc:
      "To the north-west by the Rhine harbour: new waterside living alongside industrial heritage.",
    longDesc:
      "Knielingen combines new waterside living around the Knielingen lake areas with the industrial character of the northern Rhine harbour. A popular recreation area, the Knielinger See is a bathing lake.",
    characterTags: ["Harbour", "Lake", "Residential"],
  },
  nordstadt: {
    slug: "nordstadt",
    name: "Nordstadt",
    shortDesc:
      "Close to the Hardtwald forest, with federal institutions and quiet residential living in the north.",
    longDesc:
      "Nordstadt borders the Hardtwald, the city's largest recreation forest. The Federal Court of Justice, the Office of the Federal Prosecutor General and residential quarters shape the district.",
    characterTags: ["Forest", "Law", "Quiet"],
  },
  waldstadt: {
    slug: "waldstadt",
    name: "Waldstadt",
    shortDesc:
      "1950s prefab estates set in the middle of the forest. Green living with a surprising flair.",
    longDesc:
      "Waldstadt was built in the 1950s as a prefab-housing quarter in the heart of the Hardtwald forest. Despite its architecture it is one of Karlsruhe's greenest districts, offering a high quality of living.",
    characterTags: ["Forest", "Architecture", "Green"],
  },
  neureut: {
    slug: "neureut",
    name: "Neureut",
    shortDesc:
      "The largest city district by area, with a village feel to the north-east.",
    longDesc:
      "Neureut was not incorporated until 1975 and is the largest city district by area. It has a village character, productive farmland, a local heritage museum and proximity to the Hardtwald forest.",
    characterTags: ["Village", "Farming", "Quiet"],
  },
};

/** Liefert den EN-Override fuer einen deutschen District-Slug. */
export const getDistrictEn = (district: Pick<District, "slug">) =>
  districtsEn[district.slug];
