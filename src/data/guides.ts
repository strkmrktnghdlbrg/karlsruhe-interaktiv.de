/**
 * Reiseplaner-Guides fuer karlsruhe-interaktiv.de
 */
export type SlotType =
  | "morgens"
  | "mittagessen"
  | "nachmittag"
  | "abendessen"
  | "abends"
  | "uebernachten";

export type GuideSlot = {
  time: string;
  type: SlotType;
  title: string;
  description: string;
  sightSlug?: string;
  restaurantSlug?: string;
  hotelSlug?: string;
  districtSlug?: string;
  tip?: string;
};

export type GuideDay = {
  number: number;
  title: string;
  intro: string;
  slots: GuideSlot[];
};

export type Guide = {
  slug: string;
  title: string;
  shortDesc: string;
  lead: string;
  duration: number;
  audience: string;
  bestSeason?: string;
  imageKey?: string;
  imageHue: number;
  days: GuideDay[];
};

export const guides: Guide[] = [
  {
    slug: "3-tage-karlsruhe",
    title: "3 Tage in Karlsruhe",
    shortDesc:
      "Faecherstadt-Klassiker an drei Tagen: Schloss, ZKM, Turmberg-Durlach, KIT-Atmosphaere und badische Kueche.",
    lead:
      "Drei Tage genuegen, um Karlsruhe wirklich kennenzulernen. Wir verbinden die ikonische Faecher-Architektur rund um Schloss und Pyramide mit dem weltweit einzigartigen ZKM, dem historischen Durlach mit Turmberg-Bahn und der Karlsruher Tech-Atmosphaere im KIT-Umfeld. Eingebaut: badische Brauhaus-Klassiker, Stern-Restaurant Sein und ein Spaziergang im Hardtwald.",
    duration: 3,
    audience: "Erstbesucher",
    bestSeason: "April bis Oktober — Schlosslichtspiele im August/September als Bonus",
    imageHue: 1,
    days: [
      {
        number: 1,
        title: "Tag 1 — Faecherstadt vom Zentrum aus",
        intro:
          "Der erste Tag gehoert dem Faecher-Ursprung: Schloss, Marktplatz, klassizistische Innenstadt. Wir starten im Schloss, gehen die Strahlen-Strassen nach Sueden und enden in einem badischen Klassiker.",
        slots: [
          {
            time: "10:00 - 12:30",
            type: "morgens",
            title: "Karlsruher Schloss und Badisches Landesmuseum",
            description:
              "Der barocke Schlossbau ist das geometrische Zentrum der Stadt. Schlossturm besteigen, Badisches Landesmuseum mit archaeologischen Sammlungen, dann Spaziergang durch den Schlossgarten.",
            sightSlug: "karlsruher-schloss",
            tip: "Schlossturm ist im Museumsticket inklusive.",
          },
          {
            time: "12:45 - 14:00",
            type: "mittagessen",
            title: "Badisch im Vogelbraeu",
            description:
              "Klassisches Karlsruher Brauhaus mit Spaetzle, Maultaschen und hauseigenem Bier. Solide Mittagskarte, faire Preise.",
            restaurantSlug: "vogelbraeu",
          },
          {
            time: "14:30 - 16:30",
            type: "nachmittag",
            title: "Marktplatz, Pyramide und Stadtkirchen",
            description:
              "Die rote Sandsteinpyramide als Grabmal des Stadtgruenders ist Karlsruhes ungewoehnlichstes Wahrzeichen. Rundgang am Marktplatz mit Stadtkirche, Stephanskirche, Rathaus.",
            sightSlug: "marktplatz-pyramide",
          },
          {
            time: "17:00 - 18:30",
            type: "nachmittag",
            title: "Staatliche Kunsthalle",
            description:
              "Eine der bedeutendsten Gemaeldegalerien Deutschlands. Cranach, Gruenewald, Caspar David Friedrich. Kompakt in zwei Stunden machbar.",
            sightSlug: "staatliche-kunsthalle",
          },
          {
            time: "20:00 - 22:30",
            type: "abendessen",
            title: "Top-Badisch in der Oberlaender Weinstube",
            description:
              "Karlsruher Institution seit 1824. Klassische badische Kueche auf hohem Niveau, badische Weinauswahl. Reservierung Wochen im Voraus empfohlen.",
            restaurantSlug: "oberlaender-weinstube",
            tip: "Wer es unkomplizierter mag, geht ins Badisch Brauhaus.",
          },
          {
            time: "Uebernachtung",
            type: "uebernachten",
            title: "Hotel Santo Karlsruhe",
            description:
              "Designhotel mit minimalistischer Architektur, direkt am Kongresszentrum. Gute Lage fuer alle Innenstadt-Wege.",
            hotelSlug: "hotel-santo",
          },
        ],
      },
      {
        number: 2,
        title: "Tag 2 — ZKM, KIT und Suedstadt",
        intro:
          "Der zweite Tag steht im Zeichen von Kunst, Medien und Tech. Das ZKM als weltweit einzigartiges Museum, anschliessend KIT-Atmosphaere und am Abend Suedstadt-Lebendigkeit.",
        slots: [
          {
            time: "10:00 - 13:00",
            type: "morgens",
            title: "ZKM Zentrum fuer Kunst und Medien",
            description:
              "Das ZKM ist weltweit das einzige Museum, das sich systematisch der elektronischen und digitalen Kunst widmet. Medienmuseum, Museum fuer Neue Kunst, interaktive Installationen — drei Stunden Minimum.",
            sightSlug: "zkm",
            tip: "Mittwoch Eintritt frei. Sonst Kombi-Ticket fuer alle ZKM-Bereiche kaufen.",
          },
          {
            time: "13:30 - 14:30",
            type: "mittagessen",
            title: "Lunch im Cafe Kreuzberg (Suedstadt)",
            description:
              "Suedstadt-Cafe mit guter Tageskarte und veganen Optionen. Entspannte Atmosphaere, gute Mittagspause.",
            restaurantSlug: "cafe-kreuzberg",
          },
          {
            time: "15:00 - 17:00",
            type: "nachmittag",
            title: "KIT Campus Sued und Schloss Gottesaue",
            description:
              "Spaziergang ueber den KIT-Campus mit historischen Bauten und Schloss Gottesaue (Hochschule fuer Musik). Akademisches Karlsruhe in zwei Stunden.",
            sightSlug: "kit-campus-sued",
            districtSlug: "oststadt",
          },
          {
            time: "17:30 - 18:30",
            type: "nachmittag",
            title: "Naturkundemuseum",
            description:
              "Eines der groessten Naturkundemuseen Deutschlands mit lebenden Tieren im Vivarium. Auch fuer Erwachsene sehenswert.",
            sightSlug: "naturkundemuseum",
          },
          {
            time: "19:30 - 22:00",
            type: "abendessen",
            title: "Sterne-Kueche im Sein",
            description:
              "Karlsruhes erstes Stern-Restaurant. Modern-kreative Tasting-Menues. Reservierung sehr fruehzeitig.",
            restaurantSlug: "sein",
          },
          {
            time: "22:30",
            type: "abends",
            title: "Tollhaus oder Substage Konzert",
            description:
              "Bei Konzert-Programm im Tollhaus (World-Music) oder Substage (Rock/Indie) lohnt der Abendabschluss in der Suedstadt.",
            districtSlug: "suedstadt",
          },
        ],
      },
      {
        number: 3,
        title: "Tag 3 — Durlach, Turmberg und Hardtwald",
        intro:
          "Der dritte Tag fuehrt aus dem Zentrum hinaus. Vormittags Durlach mit Karlsburg und Turmbergbahn, am Nachmittag der Hardtwald als gruene Lunge der Stadt.",
        slots: [
          {
            time: "9:30 - 11:00",
            type: "morgens",
            title: "Durlacher Altstadt und Karlsburg",
            description:
              "Durlach ist Karlsruhes aelteste Stadt — bis 1715 Residenz der Markgrafen. Karlsburg, Mehlwaage, Pfinzgaumuseum. Mit der S-Bahn 20 Minuten vom Zentrum.",
            sightSlug: "karlsburg",
            districtSlug: "durlach",
          },
          {
            time: "11:30 - 13:00",
            type: "morgens",
            title: "Turmberg mit Standseilbahn",
            description:
              "Karlsruhes Hausberg mit dem aeltesten Aussichtsturm Deutschlands. Hochfahrt mit der historischen Turmbergbahn (Deutschlands aelteste Standseilbahn von 1888).",
            sightSlug: "turmberg",
            tip: "Bei klarer Sicht reicht der Blick bis zum Pfaelzerwald.",
          },
          {
            time: "13:30 - 15:00",
            type: "mittagessen",
            title: "Mittag im Klauprecht 1 (Durlach)",
            description:
              "Modernes Restaurant im Hotel Der Blaue Reiter. Saisonale Kueche, sehr gute Weinauswahl. Anspruchsvolles Mittag.",
            restaurantSlug: "klauprecht-1",
          },
          {
            time: "15:30 - 17:30",
            type: "nachmittag",
            title: "Hardtwald-Spaziergang",
            description:
              "Karlsruhes wichtigstes Naherholungsgebiet. Kiefernwald noerdlich der Stadt, mit Wanderwegen und Wildgehegen. Mit der Tram in 20 Minuten erreichbar.",
            sightSlug: "hardtwald",
          },
          {
            time: "18:30 - 20:00",
            type: "abendessen",
            title: "Brauhaus Kuehler Krug im Stadtgarten",
            description:
              "Klassisches Karlsruher Brauhaus mit Biergarten unter alten Kastanien im Stadtgarten. Wettertauglich, lebendig.",
            restaurantSlug: "brauhaus-kuehler-krug",
          },
        ],
      },
    ],
  },
  {
    slug: "karlsruhe-mit-kindern",
    title: "Karlsruhe mit Kindern",
    shortDesc:
      "Familien-Tag in Karlsruhe: Zoo, Naturkundemuseum, Turmbergbahn und Schlossgarten — alles kurze Wege.",
    lead:
      "Karlsruhe ist eine ueberraschend familienfreundliche Stadt. Zoo direkt am Hauptbahnhof, Naturkundemuseum mit lebenden Tieren, Turmbergbahn fuer Eisenbahn-Fans und gemuetliche Brauhaus-Kueche. Ein Tag reicht, um die Familien-Highlights zu schaffen.",
    duration: 1,
    audience: "Familien",
    bestSeason: "April bis Oktober",
    imageHue: 4,
    days: [
      {
        number: 1,
        title: "Familien-Highlights an einem Tag",
        intro:
          "Wir starten am Hauptbahnhof mit Zoo und Stadtgarten, gehen ueber Naturkundemuseum und Schlossgarten und enden auf dem Turmberg.",
        slots: [
          {
            time: "9:30 - 12:00",
            type: "morgens",
            title: "Karlsruher Zoo und Stadtgarten",
            description:
              "Eine der schoensten Zoo-Park-Anlagen Deutschlands. 4.000 Tiere, Gondoletta-Fahrten auf dem Stadtgartensee, kombinierter Eintritt. Direkt am Hauptbahnhof, ideal als Start.",
            sightSlug: "karlsruher-zoo",
          },
          {
            time: "12:30 - 13:30",
            type: "mittagessen",
            title: "Brauhaus Kuehler Krug",
            description:
              "Direkt im Stadtgarten gelegen, klassische Wirtshauskueche mit Kinderkarte. Schoener Biergarten unter Kastanien.",
            restaurantSlug: "brauhaus-kuehler-krug",
          },
          {
            time: "14:00 - 16:00",
            type: "nachmittag",
            title: "Naturkundemuseum mit Vivarium",
            description:
              "Vivarium mit lebenden Reptilien und Fischen mitten im Museum. Saurier-Skelette, Mineraliensaal. Kinder-Highlight fuer Regenwetter und Sonnenschein.",
            sightSlug: "naturkundemuseum",
          },
          {
            time: "16:30 - 18:30",
            type: "nachmittag",
            title: "Turmberg mit Standseilbahn",
            description:
              "Mit der historischen Turmbergbahn (Deutschlands aelteste Standseilbahn) hochfahren, oben den aeltesten Aussichtsturm Deutschlands besteigen. Eisenbahn + Aussicht = Kinder-Highlight.",
            sightSlug: "turmberg",
            tip: "Mit der S1/S11 nach Durlach Turmberg, dann zur Talstation laufen.",
          },
          {
            time: "19:00",
            type: "abendessen",
            title: "Pizzeria Lo Stivale",
            description:
              "Karlsruhes klassischer Familien-Italiener. Knusprige Pizza, freundliche Trattoria-Atmosphaere, Reservierung empfohlen.",
            restaurantSlug: "lo-stivale",
          },
        ],
      },
    ],
  },
  {
    slug: "karlsruhe-bei-regen",
    title: "Karlsruhe bei Regen",
    shortDesc:
      "Indoor-Tag in Karlsruhe: ZKM, Kunsthalle, Naturkundemuseum, Schloss-Landesmuseum, Cafes und Brauhaus.",
    lead:
      "Karlsruhe hat einige der besten Indoor-Museen Deutschlands — perfekt fuer Regentage. ZKM, Staatliche Kunsthalle, Badisches Landesmuseum im Schloss und das Naturkundemuseum sind alle bei jedem Wetter sehenswert.",
    duration: 1,
    audience: "Schlechtwetter",
    imageHue: 3,
    days: [
      {
        number: 1,
        title: "Museen, Cafes und Brauhaus",
        intro:
          "Vier Top-Museen an einem Tag — geht knapp, aber wir setzen Prioritaeten und planen Pausen mit ein.",
        slots: [
          {
            time: "10:00 - 12:30",
            type: "morgens",
            title: "ZKM Zentrum fuer Kunst und Medien",
            description:
              "Pflichttermin. Interaktive Installationen, Medienkunst, immersive Erlebnisse — bei Regen erst recht die richtige Welt.",
            sightSlug: "zkm",
          },
          {
            time: "13:00 - 14:00",
            type: "mittagessen",
            title: "Suppdiwupp",
            description:
              "Suppen-Lokal mit wechselnder Karte. Warme Suppen, Curries, Eintoepfe — wettertauglich.",
            restaurantSlug: "suppdiwupp",
          },
          {
            time: "14:30 - 16:00",
            type: "nachmittag",
            title: "Staatliche Kunsthalle",
            description:
              "Cranach, Gruenewald, Caspar David Friedrich. Eine der bedeutendsten Sammlungen alter Meister in Deutschland.",
            sightSlug: "staatliche-kunsthalle",
          },
          {
            time: "16:30 - 18:30",
            type: "nachmittag",
            title: "Karlsruher Schloss und Badisches Landesmuseum",
            description:
              "Im Schloss zeigt das Badische Landesmuseum archaeologische und kulturhistorische Sammlungen. Auch der Schlossturm ist bei Regen einen Besuch wert (innen).",
            sightSlug: "karlsruher-schloss",
          },
          {
            time: "19:00 - 21:30",
            type: "abendessen",
            title: "Badisch Brauhaus",
            description:
              "Klassisches Brauhaus mit hauseigener Brauerei. Schaeufele, Maultaschen, Hausbier — ideale Regen-Therapie.",
            restaurantSlug: "badisch-brauhaus",
          },
        ],
      },
    ],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
