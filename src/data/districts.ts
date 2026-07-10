export type District = {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  hue: number;
  imageKey?: string;
  coordinates: [number, number];
  characterTags: string[];
};

export const districts: District[] = [
  {
    slug: "innenstadt-west",
    imageKey: "district:innenstadt-west",
    name: "Innenstadt-West",
    shortDesc:
      "Schlossplatz, Marktplatz und westliche Fussgaengerzone. Karlsruhes barockes Zentrum mit dem Faecher-Ursprung.",
    longDesc:
      "Die Innenstadt-West ist der Faecher-Ursprung. Vom Karlsruher Schloss aus strahlen die 32 Strahlen der Stadt nach Sueden. Hier liegen Marktplatz, Pyramide, Stephanskirche, Staatliche Kunsthalle und der Botanische Garten.",
    hue: 1,
    coordinates: [49.0094, 8.4044],
    characterTags: ["Barock", "Faecher", "Schloss"],
  },
  {
    slug: "innenstadt-ost",
    imageKey: "district:innenstadt-ost",
    name: "Innenstadt-Ost",
    shortDesc:
      "Oestlich der Karl-Friedrich-Strasse: Friedrichsplatz, Staatstheater, urbane Innenstadt-Atmosphaere.",
    longDesc:
      "Die Innenstadt-Ost reicht vom Schlossplatz bis zum Hauptbahnhof. Friedrichsplatz, Naturkundemuseum, Badisches Staatstheater und die Cafekultur rund um die Karl-Friedrich-Strasse praegen den Bezirk.",
    hue: 2,
    coordinates: [49.0064, 8.4131],
    characterTags: ["Urban", "Theater", "Museen"],
  },
  {
    slug: "suedstadt",
    imageKey: "district:suedstadt",
    name: "Suedstadt",
    shortDesc:
      "Multikulturelles, alternatives Viertel rund um Werderplatz und Werderstrasse.",
    longDesc:
      "Die Suedstadt ist Karlsruhes lebendigster Bezirk. Werderplatz mit Wochenmarkt, Werderstrasse mit kleinen Laeden und Bars, Tollhaus-Kulturzentrum und Substage-Konzerthaus. Hier mischt sich Studierendenkultur mit alteingesessenen badischen Familien.",
    hue: 3,
    coordinates: [48.9989, 8.4022],
    characterTags: ["Multikulti", "Alternativ", "Nightlife"],
  },
  {
    slug: "suedweststadt",
    imageKey: "district:suedweststadt",
    name: "Suedweststadt",
    shortDesc:
      "Gruenderzeit-Wohnviertel mit Altbauten, Stadtgarten und Naehe zum Zoo.",
    longDesc:
      "Die Suedweststadt ist ein Wohlfuehl-Wohnbezirk mit Gruenderzeit-Bauten, ruhigen Strassen und dem Karlsruher Stadtgarten samt Zoo. Beliebt bei jungen Familien und Akademikern.",
    hue: 4,
    coordinates: [48.9985, 8.3902],
    characterTags: ["Gruenderzeit", "Wohnen", "Park"],
  },
  {
    slug: "weststadt",
    imageKey: "district:weststadt",
    name: "Weststadt",
    shortDesc:
      "Muehlburger Tor, Yorkstrasse, Hochschulen und Wohnen. Vorklassizismus trifft Studierendenleben.",
    longDesc:
      "Die Weststadt umfasst den Bereich zwischen Muehlburger Tor und Yorkstrasse. Hochschulen, Architektur aus mehreren Epochen, der Botanische Garten am Rand und ruhige Wohnstrassen pragen das Bild.",
    hue: 5,
    coordinates: [49.0091, 8.3825],
    characterTags: ["Hochschulen", "Wohnen", "Klassizismus"],
  },
  {
    slug: "muehlburg",
    imageKey: "district:muehlburg",
    name: "Muehlburg",
    shortDesc:
      "Ehemaliges Dorf im Westen, heute Stadtteil mit Entenfang-See und alter Dorfkern-Substanz.",
    longDesc:
      "Muehlburg war frueher selbststaendig und wurde 1886 eingemeindet. Der Entenfang als Naherholungsgebiet, das Rheinhafen-Industrieareal und ein lebendiges Lokalleben kennzeichnen den Bezirk.",
    hue: 2,
    coordinates: [49.0150, 8.3525],
    characterTags: ["Dorfkern", "See", "Lokal"],
  },
  {
    slug: "durlach",
    imageKey: "district:durlach",
    name: "Durlach",
    shortDesc:
      "Historischer Markgrafen-Vorort mit Karlsburg, Altstadt und dem Turmberg ueber der Stadt.",
    longDesc:
      "Durlach ist Karlsruhes aelteste Stadt - gegruendet vor Karlsruhe selbst, war es bis 1715 Residenz der Markgrafen von Baden. Karlsburg, Altstadt, Pfinzgaumuseum, Mehlwaage und die Turmberg-Bahn machen Durlach zum touristischen Highlight ausserhalb des Zentrums.",
    hue: 1,
    coordinates: [48.9989, 8.4747],
    characterTags: ["Historisch", "Markgrafen", "Aussicht"],
  },
  {
    slug: "oststadt",
    imageKey: "district:oststadt",
    name: "Oststadt",
    shortDesc:
      "KIT-Campus-Naehe, Wohnviertel mit Studierenden-Anteil und Naehe zu Schloss Gottesaue.",
    longDesc:
      "Die Oststadt ist Karlsruhes Wissenschaftsbezirk. Der KIT-Campus Sued liegt direkt am Rand, Schloss Gottesaue beherbergt die Hochschule fuer Musik. Das Viertel ist ruhig, durchgruent und akademisch gepraegt.",
    hue: 3,
    coordinates: [49.0094, 8.4244],
    characterTags: ["KIT", "Studierende", "Wissenschaft"],
  },
  {
    slug: "rueppurr",
    imageKey: "district:rueppurr",
    name: "Rueppurr",
    shortDesc:
      "Sued-Wohnbezirk mit Villen, Gartenstadt-Charakter und ruhigen Strassen.",
    longDesc:
      "Rueppurr ist ein wohlhabender Sued-Wohnbezirk mit Gartenstadt-Charakter. Villen, gepflegte Gaerten und gute Anbindung an Stadtmitte und Albtal.",
    hue: 4,
    coordinates: [48.9772, 8.4044],
    characterTags: ["Villen", "Wohnen", "Gartenstadt"],
  },
  {
    slug: "daxlanden",
    imageKey: "district:daxlanden",
    name: "Daxlanden",
    shortDesc:
      "Suedwestlich am Rheinhafen, mit Industriekultur und Naturschutzgebiet Burgau.",
    longDesc:
      "Daxlanden liegt am Rhein und beherbergt einen Teil des Karlsruher Rheinhafens - eines der groessten Binnenhaefen Deutschlands. Das Naturschutzgebiet Burgau bietet Naherholung am Wasser.",
    hue: 5,
    coordinates: [49.0019, 8.3192],
    characterTags: ["Rhein", "Industrie", "Natur"],
  },
  {
    slug: "knielingen",
    imageKey: "district:knielingen",
    name: "Knielingen",
    shortDesc:
      "Nordwestlich am Rheinhafen, junges Wohnen am Wasser plus Industriekultur.",
    longDesc:
      "Knielingen kombiniert junges Wohnen rund um die Knielinger See-Areale mit der industriellen Pragung des Rheinhafen-Nords. Beliebtes Naherholungsgebiet, der Knielinger See ist ein Badesee.",
    hue: 2,
    coordinates: [49.0413, 8.3408],
    characterTags: ["Hafen", "See", "Wohnen"],
  },
  {
    slug: "nordstadt",
    imageKey: "district:nordstadt",
    name: "Nordstadt",
    shortDesc:
      "Hardtwald-Naehe, Bundesbauten und ruhiges Wohnen im Norden.",
    longDesc:
      "Die Nordstadt grenzt an den Hardtwald als groesstes Naherholungsgebiet der Stadt. Bundesgerichtshof, Generalbundesanwaltschaft und Wohnquartiere praegen den Bezirk.",
    hue: 3,
    coordinates: [49.0250, 8.4022],
    characterTags: ["Wald", "Recht", "Ruhig"],
  },
  {
    slug: "waldstadt",
    imageKey: "district:waldstadt",
    name: "Waldstadt",
    shortDesc:
      "Plattenbauten der 1950er, mitten im Wald gelegen. Gruenes Wohnen mit ueberraschendem Flair.",
    longDesc:
      "Die Waldstadt entstand in den 1950er Jahren als Plattenbau-Viertel mitten im Hardtwald. Trotz der Architektur einer der gruensten Bezirke Karlsruhes mit hohem Wohnwert.",
    hue: 4,
    coordinates: [49.0353, 8.4392],
    characterTags: ["Wald", "Architektur", "Gruen"],
  },
  {
    slug: "neureut",
    imageKey: "district:neureut",
    name: "Neureut",
    shortDesc:
      "Groesster Stadtteil flaechenmaessig, doerflich nordoestlich gelegen.",
    longDesc:
      "Neureut wurde erst 1975 eingemeindet und ist flaechenmaessig der groesste Stadtteil. Doerflicher Charakter, gute Landwirtschaft, das Heimatmuseum und Naehe zum Hardtwald.",
    hue: 5,
    coordinates: [49.0567, 8.3925],
    characterTags: ["Doerflich", "Landwirtschaft", "Ruhig"],
  },
];

export const getDistrict = (slug: string) =>
  districts.find((d) => d.slug === slug);
