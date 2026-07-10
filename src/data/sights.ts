export type Sight = {
  slug: string;
  name: string;
  district: string;
  type: "Wahrzeichen" | "Museum" | "Kirche" | "Park" | "Markt" | "Modern" | "Aussicht";
  priceFrom: number | null;
  shortDesc: string;
  longDesc: string;
  imageHue: number;
  imageKey?: string;
  categories: string[];
  coordinates: [number, number];
  openingHours?: string;
  websiteUrl?: string;
  gygActivityId?: string;
};

export const sights: Sight[] = [
  // === INNENSTADT-WEST ===
  {
    slug: "karlsruher-schloss",
    imageKey: "sight:karlsruher-schloss",
    name: "Karlsruher Schloss",
    district: "innenstadt-west",
    type: "Wahrzeichen",
    priceFrom: null,
    shortDesc:
      "Barockes Residenzschloss der Markgrafen von Baden. Geometrisches Zentrum der Faecherstadt und Wahrzeichen Karlsruhes.",
    longDesc:
      "Das Karlsruher Schloss wurde ab 1715 von Markgraf Karl Wilhelm als Residenz und geometrisches Zentrum der neuen Faecherstadt erbaut. Vom 42 m hohen Schlossturm strahlen die 32 Strassen und Alleen radial nach Sueden ab. Heute beherbergt das Schloss das Badische Landesmuseum mit umfangreichen archaeologischen und kulturhistorischen Sammlungen.",
    imageHue: 1,
    categories: ["wahrzeichen", "historische-architektur", "museen"],
    coordinates: [49.0139, 8.4044],
    openingHours: "Di-So 10:00-18:00",
    websiteUrl: "https://www.landesmuseum.de",
  },
  {
    slug: "schlossgarten",
    imageKey: "sight:schlossgarten",
    name: "Schlossgarten",
    district: "innenstadt-west",
    type: "Park",
    priceFrom: null,
    shortDesc:
      "Englischer Landschaftspark hinter dem Schloss mit Botanischem Garten und ueber 100 Jahre alten Baumbestaenden.",
    longDesc:
      "Der Schlossgarten ist die gruene Lunge der Karlsruher Innenstadt. Frueher Hofgarten, heute oeffentlicher englischer Landschaftspark mit altem Baumbestand, Wasserspielen und dem angrenzenden Botanischen Garten. Direkt am Schloss gelegen.",
    imageHue: 4,
    categories: ["parks", "familie"],
    coordinates: [49.0156, 8.4045],
  },
  {
    slug: "zkm",
    imageKey: "sight:zkm",
    name: "ZKM Zentrum fuer Kunst und Medien",
    district: "suedweststadt",
    type: "Museum",
    priceFrom: 9,
    shortDesc:
      "Weltweit einzigartiges Medienkunst-Museum in einer ehemaligen Waffenfabrik. Interaktive Installationen, virtuelle Welten, digitale Kunst.",
    longDesc:
      "Das ZKM Zentrum fuer Kunst und Medien Karlsruhe ist weltweit das einzige Museum, das sich systematisch der elektronischen und digitalen Kunst widmet. Untergebracht in einer riesigen denkmalgeschuetzten Industriehalle (ehemalige Waffenfabrik) beherbergt es das Medienmuseum, das Museum fuer Neue Kunst, Forschungsinstitute und ein Programmkino. Pflichttermin fuer alle Tech- und Kunstinteressierten.",
    imageHue: 3,
    categories: ["kunst-medien", "museen", "tech-innovation"],
    coordinates: [49.0017, 8.3853],
    openingHours: "Mi 10:00-18:00, Do-So 11:00-18:00",
    websiteUrl: "https://zkm.de",
  },
  {
    slug: "staatliche-kunsthalle",
    imageKey: "sight:staatliche-kunsthalle",
    name: "Staatliche Kunsthalle Karlsruhe",
    district: "innenstadt-west",
    type: "Museum",
    priceFrom: 8,
    shortDesc:
      "Eine der aeltesten und bedeutendsten Gemaeldegalerien Deutschlands. Cranach, Gruenewald, Rembrandt, Caspar David Friedrich.",
    longDesc:
      "Die Staatliche Kunsthalle Karlsruhe besitzt eine der bedeutendsten Sammlungen alter Meister in Deutschland. Cranach, Hans Baldung Grien, Matthias Gruenewald mit dem beruehmten Isenheimer-Altar-Tafelbild, Rembrandt, Rubens und eine umfangreiche Sammlung deutscher Romantik mit Caspar David Friedrich.",
    imageHue: 2,
    categories: ["museen", "kunst-medien"],
    coordinates: [49.0125, 8.4014],
    openingHours: "Di-So 10:00-18:00",
    websiteUrl: "https://www.kunsthalle-karlsruhe.de",
  },
  {
    slug: "marktplatz-pyramide",
    imageKey: "sight:marktplatz-pyramide",
    name: "Marktplatz mit Pyramide",
    district: "innenstadt-west",
    type: "Markt",
    priceFrom: null,
    shortDesc:
      "Roetlich-sandsteinerne Pyramide als Grabmal des Stadtgruenders Karl Wilhelm. Klassizistisches Herz der Stadt.",
    longDesc:
      "Der Marktplatz ist das klassizistische Herz Karlsruhes, entworfen von Friedrich Weinbrenner ab 1804. Die rote Sandsteinpyramide aus dem Jahr 1825 ist das Grabmal des Stadtgruenders Markgraf Karl Wilhelm und Karlsruhes wohl ungewoehnlichstes Wahrzeichen. Umgeben von der Evangelischen Stadtkirche, dem Rathaus und der Katholischen Stadtkirche St. Stephan.",
    imageHue: 1,
    categories: ["wahrzeichen", "historische-architektur"],
    coordinates: [49.0093, 8.4046],
  },
  {
    slug: "stephanskirche",
    imageKey: "sight:stephanskirche",
    name: "St. Stephan",
    district: "innenstadt-west",
    type: "Kirche",
    priceFrom: null,
    shortDesc:
      "Klassizistische Rotunde von Friedrich Weinbrenner, an das Pantheon in Rom angelehnt.",
    longDesc:
      "St. Stephan ist die katholische Hauptkirche Karlsruhes, 1808-1814 von Friedrich Weinbrenner als grosse klassizistische Rotunde nach dem Vorbild des Pantheon in Rom errichtet. Im Krieg stark beschaedigt und in vereinfachter Form wieder aufgebaut.",
    imageHue: 2,
    categories: ["historische-architektur"],
    coordinates: [49.0089, 8.4079],
  },
  {
    slug: "stadtkirche",
    imageKey: "sight:stadtkirche",
    name: "Evangelische Stadtkirche",
    district: "innenstadt-west",
    type: "Kirche",
    priceFrom: null,
    shortDesc:
      "Klassizistische Hauptkirche von Friedrich Weinbrenner am Marktplatz. Saeulenhalle nach antikem Vorbild.",
    longDesc:
      "Die Evangelische Stadtkirche am Marktplatz wurde 1816 von Friedrich Weinbrenner errichtet und ist eines der wichtigsten klassizistischen Bauwerke Karlsruhes. Saeulenhalle nach antikem Vorbild, im Inneren schlicht-klassizistisch gehalten.",
    imageHue: 3,
    categories: ["historische-architektur"],
    coordinates: [49.0093, 8.4034],
  },
  {
    slug: "botanischer-garten",
    imageKey: "sight:botanischer-garten",
    name: "Botanischer Garten Karlsruhe",
    district: "innenstadt-west",
    type: "Park",
    priceFrom: null,
    shortDesc:
      "Historischer Botanischer Garten neben dem Schloss mit Gewaechshaus-Anlage und tropischen Pflanzen.",
    longDesc:
      "Der Botanische Garten Karlsruhe liegt direkt neben dem Schloss und gehoert zum Landesbetrieb Vermoegen und Bau. Drei historische Gewaechshaeuser zeigen tropische Pflanzen, Kakteen und exotische Gehoelze. Der Aussenbereich mit Springbrunnen und Buchsbaumornamenten ist gratis zugaenglich.",
    imageHue: 4,
    categories: ["parks", "familie"],
    coordinates: [49.0142, 8.4014],
    openingHours: "Di-So 10:00-16:45 (Gewaechshaeuser)",
  },

  // === INNENSTADT-OST ===
  {
    slug: "naturkundemuseum",
    imageKey: "sight:naturkundemuseum",
    name: "Staatliches Museum fuer Naturkunde",
    district: "innenstadt-ost",
    type: "Museum",
    priceFrom: 6,
    shortDesc:
      "Eines der groessten Naturkundemuseen Deutschlands. Vivarium mit lebenden Tieren, Dinosaurier-Skelette, Mineraliensaal.",
    longDesc:
      "Das Staatliche Museum fuer Naturkunde Karlsruhe gehoert zu den bedeutendsten naturkundlichen Museen Deutschlands. Hightlight ist das Vivarium mit lebenden Reptilien, Amphibien und Fischen mitten im Museum. Zoologische und geologische Sammlungen, Saurier-Skelette und eine Mineraliensammlung machen den Besuch zum Familien-Erlebnis.",
    imageHue: 5,
    categories: ["museen", "wissenschaft", "familie"],
    coordinates: [49.0078, 8.4093],
    openingHours: "Di-Fr 9:30-17:00, Sa-So 10:00-18:00",
    websiteUrl: "https://www.smnk.de",
  },
  {
    slug: "badisches-staatstheater",
    imageKey: "sight:badisches-staatstheater",
    name: "Badisches Staatstheater",
    district: "innenstadt-ost",
    type: "Modern",
    priceFrom: null,
    shortDesc:
      "Dreispartenhaus mit Oper, Schauspiel und Ballett am Hermann-Levi-Platz. Eines der wichtigsten Theater Sueddeutschlands.",
    longDesc:
      "Das Badische Staatstheater ist Dreispartenhaus mit Oper, Schauspiel und Ballett. Gegruendet 1717 als Hoftheater, heute moderner Bau am Hermann-Levi-Platz. Internationale Gastspielreihen, Junges Staatstheater fuer Kinder und Jugendliche.",
    imageHue: 3,
    categories: ["nightlife", "kunst-medien"],
    coordinates: [48.9994, 8.4106],
    websiteUrl: "https://www.staatstheater.karlsruhe.de",
  },
  {
    slug: "karlsruher-zoo",
    imageKey: "sight:karlsruher-zoo",
    name: "Zoologischer Stadtgarten Karlsruhe",
    district: "innenstadt-ost",
    type: "Park",
    priceFrom: 12,
    shortDesc:
      "Zoo direkt am Hauptbahnhof, kombiniert mit dem Stadtgarten. Eine der schoensten Zooanlagen Deutschlands.",
    longDesc:
      "Der Karlsruher Zoo ist mit dem benachbarten Stadtgarten zu einer der schoensten Zoo-Park-Anlagen Deutschlands verschmolzen. Direkt am Hauptbahnhof gelegen, mit ca. 4.000 Tieren in 240 Arten. Gondoletta-Fahrten auf dem Stadtgartensee gehoeren zum klassischen Karlsruher Familienprogramm.",
    imageHue: 4,
    categories: ["familie", "parks"],
    coordinates: [48.9989, 8.4019],
    openingHours: "ganzjaehrig, Sommer 8:00-18:00",
    websiteUrl: "https://www.karlsruhe.de/zoo",
  },
  {
    slug: "stadtgarten",
    imageKey: "sight:stadtgarten",
    name: "Stadtgarten",
    district: "innenstadt-ost",
    type: "Park",
    priceFrom: null,
    shortDesc:
      "Englischer Landschaftspark am Hauptbahnhof, kombiniert mit dem Zoo. Gondoletta-Fahrten und Tiergehege.",
    longDesc:
      "Der Stadtgarten Karlsruhe ist ein historischer englischer Landschaftspark am Hauptbahnhof mit altem Baumbestand, See und kleinem Tiergehege. Eintritt nur im Verbund mit dem Zoo (gleicher Komplex).",
    imageHue: 5,
    categories: ["parks", "familie"],
    coordinates: [48.9989, 8.4019],
  },
  {
    slug: "bundesverfassungsgericht",
    imageKey: "sight:bundesverfassungsgericht",
    name: "Bundesverfassungsgericht",
    district: "innenstadt-west",
    type: "Wahrzeichen",
    priceFrom: null,
    shortDesc:
      "Hueter des Grundgesetzes. Markanter Modernebau am Schlossplatz, von aussen frei zugaenglich.",
    longDesc:
      "Das Bundesverfassungsgericht ist Hueter des Grundgesetzes und Symbol der Karlsruher Identitaet als Residenz des Rechts. Der schlichte Modernebau wurde 1969 nach Plaenen von Paul Baumgarten direkt am Schlossplatz errichtet. Verhandlungen sind oeffentlich, Anmeldung erforderlich.",
    imageHue: 2,
    categories: ["recht", "wahrzeichen", "historische-architektur"],
    coordinates: [49.0117, 8.4031],
    websiteUrl: "https://www.bundesverfassungsgericht.de",
  },

  // === OSTSTADT ===
  {
    slug: "kit-campus-sued",
    name: "KIT Campus Sued",
    district: "oststadt",
    type: "Modern",
    priceFrom: null,
    shortDesc:
      "Karlsruher Institut fuer Technologie - eine der grossen Technischen Universitaeten Europas, ca. 25.000 Studierende.",
    longDesc:
      "Der Campus Sued des KIT, ehemals Universitaet Karlsruhe (TH), ist eines der traditionsreichsten Technik-Universitaetsgelaende Europas. Heute Teil der Helmholtz-Gemeinschaft als kombinierte Universitaet + Forschungszentrum. Historische Bauten wie das Audimax und die Mathematische Bibliothek lohnen einen Spaziergang.",
    imageHue: 3,
    categories: ["wissenschaft", "tech-innovation"],
    coordinates: [49.0117, 8.4172],
    websiteUrl: "https://www.kit.edu",
  },
  {
    slug: "schloss-gottesaue",
    imageKey: "sight:schloss-gottesaue",
    name: "Schloss Gottesaue",
    district: "oststadt",
    type: "Wahrzeichen",
    priceFrom: null,
    shortDesc:
      "Renaissance-Schloss aus dem 16. Jahrhundert. Heute Hochschule fuer Musik mit oeffentlichen Konzerten.",
    longDesc:
      "Schloss Gottesaue wurde 1588 als Lustschloss der Markgrafen erbaut, im Krieg zerstoert und in den 1980er Jahren originalgetreu wieder aufgebaut. Heute Sitz der Hochschule fuer Musik Karlsruhe. Regelmaessige Konzerte und Tag der offenen Tuer.",
    imageHue: 5,
    categories: ["historische-architektur", "kunst-medien"],
    coordinates: [49.0078, 8.4231],
    websiteUrl: "https://www.hfm-karlsruhe.de",
  },

  // === DURLACH ===
  {
    slug: "turmberg",
    imageKey: "sight:turmberg",
    name: "Turmberg Durlach",
    district: "durlach",
    type: "Aussicht",
    priceFrom: null,
    shortDesc:
      "Karlsruhes Hausberg mit dem aeltesten Aussichtsturm Deutschlands und der historischen Turmbergbahn-Standseilbahn.",
    longDesc:
      "Der Turmberg ist Karlsruhes klassischer Aussichtspunkt. Der quadratische Bergfried der ehemaligen Burg ist der aelteste Aussichtsturm Deutschlands. Erreichbar zu Fuss oder mit der historischen Turmbergbahn - Deutschlands aeltester noch betriebener Standseilbahn (1888). Bei klarer Sicht reicht der Blick bis zum Pfaelzerwald.",
    imageHue: 1,
    categories: ["wahrzeichen", "familie", "parks"],
    coordinates: [48.9947, 8.5083],
  },
  {
    slug: "karlsburg",
    imageKey: "sight:karlsburg",
    name: "Karlsburg Durlach",
    district: "durlach",
    type: "Wahrzeichen",
    priceFrom: null,
    shortDesc:
      "Markgraefliches Vor-Schloss aus dem 16. Jahrhundert. Heute Pfinzgaumuseum und Karpatendeutsches Museum.",
    longDesc:
      "Die Karlsburg war bis zur Gruendung Karlsruhes Residenz der Markgrafen von Baden. Renaissance-Bau aus dem 16. Jahrhundert mit barocker Ueberformung. Heute beherbergt sie das Pfinzgaumuseum zur Stadtgeschichte Durlachs.",
    imageHue: 2,
    categories: ["historische-architektur", "museen"],
    coordinates: [48.9989, 8.4731],
  },
  {
    slug: "pfinzgaumuseum",
    imageKey: "sight:pfinzgaumuseum",
    name: "Pfinzgaumuseum",
    district: "durlach",
    type: "Museum",
    priceFrom: null,
    shortDesc:
      "Stadtgeschichtliches Museum in der Karlsburg. Markgrafen-Geschichte, Stadt vor 1715, Industriegeschichte.",
    longDesc:
      "Das Pfinzgaumuseum dokumentiert die Geschichte Durlachs als markgraefliche Residenzstadt vor der Gruendung Karlsruhes, die Eingemeindung 1938 und die Industriegeschichte der Pfinzaue. Eintritt kostenlos.",
    imageHue: 4,
    categories: ["museen", "historische-architektur"],
    coordinates: [48.9989, 8.4731],
    openingHours: "Mi-Sa 10:00-18:00, So 11:00-18:00",
  },
  {
    slug: "mehlwaage-durlach",
    name: "Mehlwaage Durlach",
    district: "durlach",
    type: "Wahrzeichen",
    priceFrom: null,
    shortDesc:
      "Mittelalterliches Eichgebaeude am Saumarkt. Eines der aeltesten erhaltenen Bauten Durlachs.",
    longDesc:
      "Die Mehlwaage am Saumarkt diente seit dem 14. Jahrhundert als amtliche Eichstelle fuer Getreide- und Mehlhandel. Eines der wenigen mittelalterlichen Gebaeude, die in Durlach erhalten geblieben sind.",
    imageHue: 5,
    categories: ["historische-architektur", "wahrzeichen"],
    coordinates: [49.0006, 8.4742],
  },

  // === SUEDSTADT ===
  {
    slug: "tollhaus",
    imageKey: "sight:tollhaus",
    name: "Tollhaus",
    district: "suedstadt",
    type: "Modern",
    priceFrom: null,
    shortDesc:
      "Kulturzentrum im alten Schlachthof-Areal. Konzerte, Theater, Festival Zeltival im Sommer.",
    longDesc:
      "Das Tollhaus ist Karlsruhes wichtigstes soziokulturelles Zentrum, untergebracht im Alten Schlachthof. Konzerte, Lesungen, Kabarett und das jaehrliche Zeltival-Festival im Sommer mit internationaler World-Music.",
    imageHue: 3,
    categories: ["nightlife", "kunst-medien"],
    coordinates: [48.9961, 8.4194],
    websiteUrl: "https://www.tollhaus.de",
  },
  {
    slug: "substage",
    name: "Substage",
    district: "suedstadt",
    type: "Modern",
    priceFrom: null,
    shortDesc:
      "Konzerthalle unter dem alten Schlachthof. Indie-Rock, Metal, Hip-Hop. Karlsruhes wichtigster Club fuer Live-Musik.",
    longDesc:
      "Das Substage ist Karlsruhes wichtigste Live-Halle fuer Indie-Rock, Metal, Hip-Hop und alternative Musik. Untergebracht in den ehemaligen Kuehlraeumen des Schlachthofs, gilt als einer der atmosphaerischsten Konzert-Spots im Suedwesten.",
    imageHue: 4,
    categories: ["nightlife"],
    coordinates: [48.9967, 8.4189],
    websiteUrl: "https://www.substage.de",
  },

  // === WEITERE BEZIRKE ===
  {
    slug: "hardtwald",
    imageKey: "sight:hardtwald",
    name: "Hardtwald",
    district: "nordstadt",
    type: "Park",
    priceFrom: null,
    shortDesc:
      "Grosses Waldgebiet noerdlich der Stadt mit Wanderwegen, Wildgehegen und Picknick-Plaetzen.",
    longDesc:
      "Der Hardtwald ist Karlsruhes wichtigstes Naherholungsgebiet - ein zusammenhaengender Kiefernwald, der sich noerdlich der Stadt bis Eggenstein-Leopoldshafen erstreckt. Wanderwege, Wildgehege, Trimm-dich-Pfade und im Sommer beliebte Picknick-Plaetze.",
    imageHue: 4,
    categories: ["parks", "familie"],
    coordinates: [49.0322, 8.4144],
  },
  {
    slug: "majolika-manufaktur",
    imageKey: "sight:majolika-manufaktur",
    name: "Majolika-Manufaktur",
    district: "nordstadt",
    type: "Museum",
    priceFrom: null,
    shortDesc:
      "1901 gegruendete Keramikmanufaktur am Schloss-Rand. Werkstatt-Besichtigung und Ausstellung.",
    longDesc:
      "Die Karlsruher Majolika-Manufaktur wurde 1901 gegruendet und ist einer der aeltesten noch produzierenden Kunst-Keramik-Betriebe Deutschlands. Werkstatt-Besichtigungen, Ausstellungen aktueller Kuenstler und Verkauf aus der Manufaktur direkt vor Ort.",
    imageHue: 2,
    categories: ["museen", "kunst-medien"],
    coordinates: [49.0153, 8.4067],
    websiteUrl: "https://www.majolika-karlsruhe.com",
  },
  {
    slug: "verkehrsmuseum",
    imageKey: "sight:verkehrsmuseum",
    name: "Verkehrsmuseum Karlsruhe",
    district: "suedstadt",
    type: "Museum",
    priceFrom: 4,
    shortDesc:
      "Privatmuseum zur Verkehrsgeschichte Karlsruhes. Trambahn, Eisenbahn, Modellbahn, Karl-Drais-Laufrad.",
    longDesc:
      "Das Verkehrsmuseum Karlsruhe ist ein Privatmuseum zur Verkehrsgeschichte mit Schwerpunkt auf der Karlsruher Strassenbahn, dem stadtbekannten Karlsruher Modell (Tram-Bahn-Hybrid) und Karl Drais, dem Erfinder des Laufrads - geboren in Karlsruhe.",
    imageHue: 5,
    categories: ["museen", "familie"],
    coordinates: [48.9967, 8.4144],
    openingHours: "Sa-So 14:00-18:00",
    websiteUrl: "https://www.verkehrsmuseum-karlsruhe.de",
  },
  {
    slug: "rheinhafen",
    imageKey: "sight:rheinhafen",
    name: "Rheinhafen Karlsruhe",
    district: "daxlanden",
    type: "Modern",
    priceFrom: null,
    shortDesc:
      "Einer der groessten Binnenhaefen Deutschlands. Industriekultur, Hafenrundfahrten, Karlsruher Land-Art-Spots.",
    longDesc:
      "Der Karlsruher Rheinhafen ist einer der bedeutendsten Binnenhaefen Deutschlands. Hafenrundfahrten, Industriekultur-Spaziergaenge und beliebte Foto-Spots an der Hafenanlage. Im Sommer Treffpunkt fuer Urban-Photography und Hafen-Festivals.",
    imageHue: 1,
    categories: ["historische-architektur", "wahrzeichen"],
    coordinates: [49.0181, 8.3303],
  },
];

export const getSight = (slug: string) => sights.find((s) => s.slug === slug);
export const sightsByDistrict = (district: string) =>
  sights.filter((s) => s.district === district);
export const sightsByCategory = (category: string) =>
  sights.filter((s) => s.categories.includes(category));
