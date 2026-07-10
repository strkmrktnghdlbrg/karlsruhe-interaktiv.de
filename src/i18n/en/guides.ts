/**
 * English content overrides for the travel-planner (guides) section.
 * Keyed by the German slug. Contains the new English slug plus all
 * translated prose fields, mirroring the nested days[].slots[] structure.
 *
 * Not translated: number, *Slug references, imageHue/imageKey, duration.
 */
import type { SlotType } from "../../data/guides";

export type GuideSlotEn = {
  time: string;
  type: SlotType;
  title: string;
  description: string;
  tip?: string;
};

export type GuideDayEn = {
  number: number;
  title: string;
  intro: string;
  slots: GuideSlotEn[];
};

export type GuideEn = {
  slug: string;
  title: string;
  shortDesc: string;
  lead: string;
  audience: string;
  bestSeason?: string;
  days: GuideDayEn[];
};

export const guidesEn: Record<string, GuideEn> = {
  "3-tage-karlsruhe": {
    slug: "3-days-in-karlsruhe",
    title: "3 Days in Karlsruhe",
    shortDesc:
      "The fan-shaped city in three days: the palace, the ZKM, the Turmberg in Durlach, the KIT atmosphere and Baden cuisine.",
    lead:
      "Three days are enough to really get to know Karlsruhe. We combine the iconic fan-shaped architecture around the palace and the pyramid with the globally unique ZKM, historic Durlach with its funicular railway and Karlsruhe's tech atmosphere around KIT. Built in along the way: Baden brewpub classics, the Michelin-starred Sein and a stroll through the Hardtwald forest.",
    audience: "First-time visitors",
    bestSeason: "April to October - the Schlosslichtspiele projection show in August/September as a bonus",
    days: [
      {
        number: 1,
        title: "Day 1 - The fan-shaped city from its centre",
        intro:
          "The first day belongs to the origin of the fan: the palace, the market square and the neoclassical city centre. We start at the palace, walk the radial streets southward and finish at a Baden classic.",
        slots: [
          {
            time: "10:00 - 12:30",
            type: "morgens",
            title: "Karlsruhe Palace and the Baden State Museum",
            description:
              "The baroque palace is the geometric centre of the city. Climb the palace tower, explore the Baden State Museum with its archaeological collections, then take a stroll through the palace gardens.",
            tip: "The palace tower is included in the museum ticket.",
          },
          {
            time: "12:45 - 14:00",
            type: "mittagessen",
            title: "Baden fare at Vogelbraeu",
            description:
              "A classic Karlsruhe brewpub serving Spaetzle, Maultaschen and house-brewed beer. A solid lunch menu at fair prices.",
          },
          {
            time: "14:30 - 16:30",
            type: "nachmittag",
            title: "Market Square, the Pyramid and the town churches",
            description:
              "The red sandstone pyramid marking the tomb of the city's founder is Karlsruhe's most unusual landmark. A walk around the market square takes in the town church, St Stephen's Church and the city hall.",
          },
          {
            time: "17:00 - 18:30",
            type: "nachmittag",
            title: "State Art Gallery",
            description:
              "One of the most important painting galleries in Germany. Cranach, Gruenewald, Caspar David Friedrich. Comfortably manageable in two hours.",
          },
          {
            time: "20:00 - 22:30",
            type: "abendessen",
            title: "Refined Baden cuisine at the Oberlaender Weinstube",
            description:
              "A Karlsruhe institution since 1824. Classic Baden cuisine at a high level with a fine Baden wine list. Reservations weeks in advance are recommended.",
            tip: "If you prefer something more relaxed, head to the Badisch Brauhaus instead.",
          },
          {
            time: "Overnight",
            type: "uebernachten",
            title: "Hotel Santo Karlsruhe",
            description:
              "A design hotel with minimalist architecture, right by the convention centre. A good base for everything in the city centre.",
          },
        ],
      },
      {
        number: 2,
        title: "Day 2 - ZKM, KIT and the Suedstadt",
        intro:
          "The second day is all about art, media and tech. The ZKM as a museum unique in the world, followed by the KIT atmosphere and the lively Suedstadt in the evening.",
        slots: [
          {
            time: "10:00 - 13:00",
            type: "morgens",
            title: "ZKM Center for Art and Media",
            description:
              "The ZKM is the only museum in the world that systematically devotes itself to electronic and digital art. The Media Museum, the Museum of Contemporary Art, interactive installations - allow three hours minimum.",
            tip: "Admission is free on Wednesdays. Otherwise buy the combined ticket for all ZKM areas.",
          },
          {
            time: "13:30 - 14:30",
            type: "mittagessen",
            title: "Lunch at Cafe Kreuzberg (Suedstadt)",
            description:
              "A Suedstadt cafe with a good daily menu and vegan options. A relaxed atmosphere and a good spot for a lunch break.",
          },
          {
            time: "15:00 - 17:00",
            type: "nachmittag",
            title: "KIT Campus South and Gottesaue Palace",
            description:
              "A walk across the KIT campus with its historic buildings and Gottesaue Palace (the University of Music). Academic Karlsruhe in two hours.",
          },
          {
            time: "17:30 - 18:30",
            type: "nachmittag",
            title: "Natural History Museum",
            description:
              "One of the largest natural history museums in Germany, with live animals in its vivarium. Well worth seeing for adults too.",
          },
          {
            time: "19:30 - 22:00",
            type: "abendessen",
            title: "Michelin-starred cuisine at Sein",
            description:
              "Karlsruhe's first Michelin-starred restaurant. Modern, creative tasting menus. Book very far in advance.",
          },
          {
            time: "22:30",
            type: "abends",
            title: "A concert at the Tollhaus or Substage",
            description:
              "If there is a concert at the Tollhaus (world music) or the Substage (rock/indie), it is well worth rounding off the evening in the Suedstadt.",
          },
        ],
      },
      {
        number: 3,
        title: "Day 3 - Durlach, the Turmberg and the Hardtwald",
        intro:
          "The third day leads out of the centre. In the morning, Durlach with the Karlsburg and the funicular railway; in the afternoon, the Hardtwald as the city's green lung.",
        slots: [
          {
            time: "9:30 - 11:00",
            type: "morgens",
            title: "Durlach old town and the Karlsburg",
            description:
              "Durlach is Karlsruhe's oldest town - the residence of the margraves until 1715. The Karlsburg, the Mehlwaage and the Pfinzgau Museum. Just 20 minutes from the centre by suburban train.",
          },
          {
            time: "11:30 - 13:00",
            type: "morgens",
            title: "The Turmberg with its funicular railway",
            description:
              "Karlsruhe's local mountain, home to the oldest observation tower in Germany. Ride up on the historic Turmberg railway (Germany's oldest funicular, dating from 1888).",
            tip: "On a clear day the view reaches as far as the Palatinate Forest.",
          },
          {
            time: "13:30 - 15:00",
            type: "mittagessen",
            title: "Lunch at Klauprecht 1 (Durlach)",
            description:
              "A modern restaurant in the Hotel Der Blaue Reiter. Seasonal cuisine and an excellent wine list. A refined lunch.",
          },
          {
            time: "15:30 - 17:30",
            type: "nachmittag",
            title: "A walk in the Hardtwald",
            description:
              "Karlsruhe's most important local recreation area. A pine forest north of the city, with hiking trails and game enclosures. Reachable in 20 minutes by tram.",
          },
          {
            time: "18:30 - 20:00",
            type: "abendessen",
            title: "Brauhaus Kuehler Krug in the Stadtgarten",
            description:
              "A classic Karlsruhe brewpub with a beer garden under old chestnut trees in the Stadtgarten. All-weather and lively.",
          },
        ],
      },
    ],
  },
  "karlsruhe-mit-kindern": {
    slug: "karlsruhe-with-kids",
    title: "Karlsruhe with Kids",
    shortDesc:
      "A family day in Karlsruhe: the zoo, the Natural History Museum, the Turmberg railway and the palace gardens - all within short distances.",
    lead:
      "Karlsruhe is a surprisingly family-friendly city. The zoo right by the main station, the Natural History Museum with live animals, the Turmberg railway for train fans and cosy brewpub fare. One day is enough to take in the family highlights.",
    audience: "Families",
    bestSeason: "April to October",
    days: [
      {
        number: 1,
        title: "Family highlights in a single day",
        intro:
          "We start at the main station with the zoo and the Stadtgarten, move on via the Natural History Museum and the palace gardens, and finish on the Turmberg.",
        slots: [
          {
            time: "9:30 - 12:00",
            type: "morgens",
            title: "Karlsruhe Zoo and Stadtgarten",
            description:
              "One of the most beautiful combined zoo and park grounds in Germany. 4,000 animals, Gondoletta boat rides on the Stadtgarten lake, combined admission. Right by the main station, ideal as a starting point.",
          },
          {
            time: "12:30 - 13:30",
            type: "mittagessen",
            title: "Brauhaus Kuehler Krug",
            description:
              "Right in the Stadtgarten, serving classic tavern fare with a children's menu. A lovely beer garden under chestnut trees.",
          },
          {
            time: "14:00 - 16:00",
            type: "nachmittag",
            title: "Natural History Museum with vivarium",
            description:
              "A vivarium with live reptiles and fish in the heart of the museum. Dinosaur skeletons and a hall of minerals. A children's highlight for rain or shine.",
          },
          {
            time: "16:30 - 18:30",
            type: "nachmittag",
            title: "The Turmberg with its funicular railway",
            description:
              "Ride up on the historic Turmberg railway (Germany's oldest funicular) and climb the oldest observation tower in Germany at the top. Train plus a view equals a children's highlight.",
            tip: "Take the S1/S11 to Durlach Turmberg, then walk to the valley station.",
          },
          {
            time: "19:00",
            type: "abendessen",
            title: "Pizzeria Lo Stivale",
            description:
              "Karlsruhe's classic family Italian. Crispy pizza, a friendly trattoria atmosphere; reservations recommended.",
          },
        ],
      },
    ],
  },
  "karlsruhe-bei-regen": {
    slug: "karlsruhe-in-the-rain",
    title: "Karlsruhe in the Rain",
    shortDesc:
      "An indoor day in Karlsruhe: the ZKM, the Art Gallery, the Natural History Museum, the palace museum, cafes and a brewpub.",
    lead:
      "Karlsruhe has some of the best indoor museums in Germany - perfect for rainy days. The ZKM, the State Art Gallery, the Baden State Museum in the palace and the Natural History Museum are all worth seeing in any weather.",
    audience: "Bad weather",
    days: [
      {
        number: 1,
        title: "Museums, cafes and a brewpub",
        intro:
          "Four top museums in a single day - it's tight, but we set priorities and build in breaks.",
        slots: [
          {
            time: "10:00 - 12:30",
            type: "morgens",
            title: "ZKM Center for Art and Media",
            description:
              "A must. Interactive installations, media art, immersive experiences - exactly the right world to be in when it's raining.",
          },
          {
            time: "13:00 - 14:00",
            type: "mittagessen",
            title: "Suppdiwupp",
            description:
              "A soup spot with a changing menu. Hot soups, curries and stews - all-weather food.",
          },
          {
            time: "14:30 - 16:00",
            type: "nachmittag",
            title: "State Art Gallery",
            description:
              "Cranach, Gruenewald, Caspar David Friedrich. One of the most important collections of Old Masters in Germany.",
          },
          {
            time: "16:30 - 18:30",
            type: "nachmittag",
            title: "Karlsruhe Palace and the Baden State Museum",
            description:
              "Inside the palace, the Baden State Museum presents archaeological and cultural-history collections. The palace tower is also worth a visit in the rain (it's indoors).",
          },
          {
            time: "19:00 - 21:30",
            type: "abendessen",
            title: "Badisch Brauhaus",
            description:
              "A classic brewpub with its own brewery. Schaeufele, Maultaschen and house beer - the ideal rainy-day therapy.",
          },
        ],
      },
    ],
  },
};

export const getGuideEn = (slug: string) => guidesEn[slug];
