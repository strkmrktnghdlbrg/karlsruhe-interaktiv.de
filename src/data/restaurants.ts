export type Restaurant = {
  slug: string;
  name: string;
  district: string;
  cuisine: string;
  priceLevel: "€" | "€€" | "€€€" | "€€€€";
  shortDesc: string;
  longDesc: string;
  imageHue: number;
  imageKey?: string;
  openingHours?: string;
  websiteUrl?: string;
  reservation?: boolean;
  categories: string[];
};

export const restaurants: Restaurant[] = [
  // === BADISCH ===
  {
    slug: "oberlaender-weinstube",
    name: "Oberlaender Weinstube",
    district: "innenstadt-west",
    cuisine: "Badisch",
    priceLevel: "€€€",
    categories: ["historische-architektur"],
    shortDesc:
      "Karlsruhes legendaere Top-Badisch-Adresse seit 1824. Klassische badische Kueche auf hohem Niveau.",
    longDesc:
      "Die Oberlaender Weinstube an der Akademiestrasse ist eine Karlsruher Institution seit 1824. Klassische badische Kueche, badische Weine, Innenhof-Garten im Sommer. Gilt als beste Badisch-Adresse der Stadt.",
    imageHue: 1,
    openingHours: "Di-Sa 12:00-14:30 + 18:00-23:00",
    websiteUrl: "https://www.oberlaender-weinstube.de",
    reservation: true,
  },
  {
    slug: "badisch-brauhaus",
    name: "Badisch Brauhaus",
    district: "innenstadt-west",
    cuisine: "Badisch",
    priceLevel: "€€",
    categories: ["familie"],
    shortDesc:
      "Brauhaus mit eigener Brauerei im Herzen Karlsruhes. Badische Klassiker und Hausgebraeu.",
    longDesc:
      "Das Badisch Brauhaus ist Karlsruhes klassisches Brauhaus mit eigener Brauerei direkt am Stephanienbrunnen. Badische Spezialitaeten, Schaeufele, Maultaschen, dazu hausgebrautes Pils und Hefeweizen. Beliebt bei Einheimischen und Besuchern.",
    imageHue: 2,
    openingHours: "Mo-So 11:00-0:00",
    websiteUrl: "https://www.badisch-brauhaus.de",
    reservation: true,
  },
  {
    slug: "vogelbraeu",
    name: "Vogelbraeu",
    district: "innenstadt-west",
    cuisine: "Badisch",
    priceLevel: "€€",
    categories: ["familie"],
    shortDesc:
      "Brauhaus in der Kapellenstrasse mit hauseigenem Bier und solider badisch-deutscher Kueche.",
    longDesc:
      "Das Vogelbraeu in der Kapellenstrasse ist Karlsruhes zweitwichtigstes Brauhaus. Eigene Hausbrauerei, klassische Brauhaus-Karte mit Schweinshaxe, Spaetzle, Maultaschen. Groesse Aussenterrasse im Sommer.",
    imageHue: 3,
    openingHours: "Mo-So 11:00-0:00",
    websiteUrl: "https://www.vogelbraeu.de",
    reservation: true,
  },
  {
    slug: "brauhaus-kuehler-krug",
    name: "Brauhaus Kuehler Krug",
    district: "innenstadt-ost",
    cuisine: "Badisch",
    priceLevel: "€€",
    categories: ["familie", "parks"],
    shortDesc:
      "Brauhaus im Stadtgarten mit Biergarten unter alten Baeumen. Sommer-Klassiker fuer Karlsruher.",
    longDesc:
      "Das Brauhaus Kuehler Krug liegt mitten im Stadtgarten direkt am Hauptbahnhof. Im Sommer einer der schoensten Biergaerten der Stadt unter alten Kastanien. Klassische badische Wirtshauskueche, hauseigenes Bier.",
    imageHue: 4,
    openingHours: "Mo-So 11:00-23:00",
    websiteUrl: "https://www.kuehler-krug.de",
    reservation: false,
  },

  // === STERNEKUECHE / GEHOBEN ===
  {
    slug: "sein",
    name: "Sein",
    district: "innenstadt-west",
    cuisine: "Modern",
    priceLevel: "€€€€",
    categories: ["historische-architektur"],
    shortDesc:
      "Karlsruhes erstes Stern-Restaurant. Modern-kreative Kueche, Tasting-Menues, klare Architektur.",
    longDesc:
      "Das Sein ist Karlsruhes erstes mit einem Michelin-Stern ausgezeichnetes Restaurant. Modern-kreative Kueche, ausschliesslich Tasting-Menues, intime Atmosphaere mit klarer Architektur. Reservierung Wochen im Voraus empfohlen.",
    imageHue: 5,
    openingHours: "Mi-Sa ab 19:00",
    websiteUrl: "https://www.restaurant-sein.de",
    reservation: true,
  },
  {
    slug: "erasmus",
    name: "Erasmus",
    district: "innenstadt-west",
    cuisine: "Bistro",
    priceLevel: "€€€",
    categories: [],
    shortDesc:
      "Bistro-Stern in entspannter Atmosphaere. Saisonal-mediterrane Kueche auf gehobenem Niveau.",
    longDesc:
      "Das Erasmus ist Karlsruhes Bistro-Stern: gehobene saisonal-mediterrane Kueche in entspannter Atmosphaere. Wechselnde Tageskarte, weniger formell als das Sein, beliebt fuer Genuss-Mittagessen.",
    imageHue: 1,
    openingHours: "Di-Sa 12:00-14:00 + 18:30-22:00",
    websiteUrl: "https://www.restaurant-erasmus.de",
    reservation: true,
  },
  {
    slug: "restaurant-anders",
    name: "Restaurant Anders",
    district: "innenstadt-ost",
    cuisine: "Modern",
    priceLevel: "€€€",
    categories: [],
    shortDesc:
      "Gehobene moderne Kueche mit Karlsruher Bezug. Saisonal, regional, kreativ.",
    longDesc:
      "Das Restaurant Anders setzt auf moderne Kueche mit klarem regionalem Bezug. Saisonale Produkte aus Baden, Elsass und Pfalz, Wein-Begleitung mit Schwerpunkt auf Naturweinen aus der Region.",
    imageHue: 2,
    openingHours: "Mi-Sa 18:00-23:00",
    reservation: true,
  },
  {
    slug: "kesselhaus",
    name: "Kesselhaus",
    district: "suedstadt",
    cuisine: "Modern",
    priceLevel: "€€€",
    categories: ["historische-architektur"],
    shortDesc:
      "Modern-saisonale Kueche im ehemaligen Kesselhaus des alten Schlachthofs. Industriechic-Ambiente.",
    longDesc:
      "Das Kesselhaus liegt im sanierten alten Schlachthof-Areal der Suedstadt. Modern-saisonale Kueche, Industriechic-Architektur mit Sichtbeton und Stahltraegern. Beliebt bei jungen Karlsruher Genusssuchenden.",
    imageHue: 3,
    openingHours: "Di-Sa 18:00-23:00",
    websiteUrl: "https://www.kesselhaus-karlsruhe.de",
    reservation: true,
  },

  // === ITALIENISCH ===
  {
    slug: "ristorante-lehners",
    name: "Ristorante Lehners",
    district: "innenstadt-ost",
    cuisine: "Italienisch",
    priceLevel: "€€",
    categories: ["familie"],
    shortDesc:
      "Klassischer Italiener mit Holzofen-Pizza und handgemachten Pastagerichten.",
    longDesc:
      "Das Ristorante Lehners ist Karlsruhes klassischer Italiener mit Holzofen-Pizza, hausgemachter Pasta und freundlichem Service. Beliebt fuer Familien-Essen und gemuetliche Abende mit Freunden.",
    imageHue: 1,
    openingHours: "Mo-So 11:30-23:00",
    reservation: true,
  },
  {
    slug: "la-forchetta",
    name: "Ristorante La Forchetta",
    district: "suedweststadt",
    cuisine: "Italienisch",
    priceLevel: "€€€",
    categories: [],
    shortDesc:
      "Anspruchsvolle italienische Kueche mit saisonalem Schwerpunkt. Kleine Karte, sehr gute Weinauswahl.",
    longDesc:
      "Die La Forchetta liegt in der Suedweststadt und bietet anspruchsvolle italienische Kueche jenseits der Standard-Italo-Karte. Kleine Karte mit saisonalem Fokus, sehr gute italienische Weinauswahl, schoene Atmosphaere.",
    imageHue: 4,
    openingHours: "Di-Sa 18:00-23:00",
    reservation: true,
  },
  {
    slug: "lo-stivale",
    name: "Pizzeria Lo Stivale",
    district: "innenstadt-west",
    cuisine: "Italienisch",
    priceLevel: "€€",
    categories: ["familie"],
    shortDesc:
      "Kultige Pizzeria im Karlsruher Westen mit knuspriger Pizza und Trattoria-Atmosphaere.",
    longDesc:
      "Die Pizzeria Lo Stivale ist seit Jahrzehnten Karlsruhes Familien-Italiener. Knusprige Pizza, klassische Pasta, freundliche Trattoria-Atmosphaere. Reservierung am Wochenende empfohlen.",
    imageHue: 5,
    openingHours: "Mo-So 12:00-23:00",
    reservation: true,
  },
  {
    slug: "tre-sorelle",
    name: "Tre Sorelle",
    district: "suedstadt",
    cuisine: "Italienisch",
    priceLevel: "€€",
    categories: [],
    shortDesc:
      "Familiengefuehrter Italiener in der Suedstadt mit grosser Karte und entspannter Atmosphaere.",
    longDesc:
      "Das Tre Sorelle ist ein klassischer suedstaedtischer Italiener mit grosser Speisekarte, freundlicher Bedienung und entspannter Atmosphaere. Beliebt bei Stammgaesten aus dem Viertel.",
    imageHue: 2,
    openingHours: "Mo-So 12:00-23:00",
    reservation: true,
  },

  // === ASIATISCH ===
  {
    slug: "sakai-sushi",
    name: "Sakai Sushi",
    district: "innenstadt-ost",
    cuisine: "Japanisch",
    priceLevel: "€€€",
    categories: [],
    shortDesc:
      "Premium-Sushi in Karlsruhe mit frischem Fisch und klassischer japanischer Praesentation.",
    longDesc:
      "Das Sakai Sushi ist Karlsruhes Premium-Sushi-Adresse. Klassisch japanische Sushi-Kultur, frischer Fisch, kleines Restaurant mit Theke und Tischen. Tasting-Menues moeglich.",
    imageHue: 3,
    openingHours: "Mo-Sa 18:00-22:30",
    reservation: true,
  },
  {
    slug: "hanami",
    name: "Hanami",
    district: "innenstadt-west",
    cuisine: "Japanisch",
    priceLevel: "€€",
    categories: ["familie"],
    shortDesc:
      "Lebendiges Sushi-Restaurant mit Foerderband und grosser Karte. Beliebt fuer Mittag und Familien.",
    longDesc:
      "Das Hanami ist Karlsruhes lebendigstes Sushi-Restaurant. Sushi-Foerderband, grosse Karte mit japanischen und asiatischen Klassikern, faire Preise. Beliebt fuer Mittagessen und Familien.",
    imageHue: 4,
    openingHours: "Mo-So 11:30-22:30",
    reservation: false,
  },
  {
    slug: "pho-sai-gon",
    name: "Pho Sai Gon",
    district: "suedstadt",
    cuisine: "Vietnamesisch",
    priceLevel: "€€",
    categories: [],
    shortDesc:
      "Authentisch vietnamesisch in der Suedstadt. Pho-Bo und Banh-Mi als Karlsruher Geheimtipps.",
    longDesc:
      "Das Pho Sai Gon ist Karlsruhes authentischste Pho-Adresse. Vietnamesische Familienkueche, kraeftige Bruehen, frische Kraeuter. Klein, einfach, aber kulinarisch top.",
    imageHue: 5,
    openingHours: "Di-So 12:00-22:00",
    reservation: false,
  },
  {
    slug: "thai-express",
    name: "Thai-Express",
    district: "innenstadt-west",
    cuisine: "Thai",
    priceLevel: "€",
    categories: [],
    shortDesc:
      "Authentisch thailaendisches Streetfood mitten in der Innenstadt. Schnell, gut, gunstig.",
    longDesc:
      "Das Thai-Express bietet authentisches thailaendisches Streetfood-Essen. Wokgerichte, Curries, Suppen, schnell zubereitet und gunstig. Beliebte Mittagspause-Adresse.",
    imageHue: 1,
    openingHours: "Mo-Sa 11:00-21:00",
    reservation: false,
  },

  // === TUERKISCH / LEVANTE ===
  {
    slug: "mezzo-mezzo",
    name: "Mezzo Mezzo",
    district: "innenstadt-ost",
    cuisine: "Mediterran",
    priceLevel: "€€",
    categories: [],
    shortDesc:
      "Mediterran-tuerkische Kueche mit Mezze-Platten und gegrilltem Fisch. Lebendige Atmosphaere.",
    longDesc:
      "Das Mezzo Mezzo bietet mediterran-tuerkische Kueche mit grossartigen Mezze-Platten, gegrilltem Fisch und Lamm. Lebendige Atmosphaere, beliebt fuer Gruppen.",
    imageHue: 2,
    openingHours: "Di-So 18:00-23:00",
    reservation: true,
  },
  {
    slug: "kebap-house",
    name: "Kebap House",
    district: "suedstadt",
    cuisine: "Tuerkisch",
    priceLevel: "€",
    categories: [],
    shortDesc:
      "Karlsruhes klassische Doener-Adresse. Frische Zutaten, Holzfeuer-Lavash, immer Schlange.",
    longDesc:
      "Das Kebap House ist Karlsruhes klassische Doener-Adresse seit Jahrzehnten. Frische Zutaten, Holzfeuer-Lavash, Tagesgerichte. Immer Schlange, immer gut.",
    imageHue: 3,
    openingHours: "Mo-Sa 11:00-23:00",
    reservation: false,
  },
  {
    slug: "bashar",
    name: "Bashar",
    district: "innenstadt-west",
    cuisine: "Levante",
    priceLevel: "€€",
    categories: [],
    shortDesc:
      "Authentisch syrisch-libanesische Kueche mit Hummus, Falafel und Lamm-Klassikern.",
    longDesc:
      "Das Bashar bietet authentische syrisch-libanesische Kueche: hausgemachter Hummus, Falafel, gegrilltes Lamm, frische Salate. Familiengefuehrt, freundliche Atmosphaere.",
    imageHue: 4,
    openingHours: "Mo-So 12:00-22:00",
    reservation: false,
  },

  // === CASUAL / MODERN ===
  {
    slug: "vapiano-karlsruhe",
    name: "Vapiano Karlsruhe",
    district: "innenstadt-west",
    cuisine: "Italienisch",
    priceLevel: "€€",
    categories: ["familie"],
    shortDesc:
      "Front-Cooking-Italiener am Europaplatz. Pasta und Pizza frisch zubereitet.",
    longDesc:
      "Das Vapiano am Europaplatz ist Karlsruhes Casual-Italiener mit Front-Cooking-Konzept. Pasta und Pizza werden vor den Gaesten zubereitet, kein Reservieren noetig, beliebt fuer schnelle Mittagsessen.",
    imageHue: 5,
    openingHours: "Mo-So 11:00-23:00",
    reservation: false,
  },
  {
    slug: "losteria-karlsruhe",
    name: "L'Osteria Karlsruhe",
    district: "innenstadt-west",
    cuisine: "Italienisch",
    priceLevel: "€€",
    categories: ["familie"],
    shortDesc:
      "Die XXL-Pizza-Kette in der Karlsruher Innenstadt. Familienfreundlich und gunstig.",
    longDesc:
      "Die L'Osteria Karlsruhe steht fuer die mit 30 cm Durchmesser ueberdimensionierten Pizzen und solide italienische Pasta. Familienfreundlich, beliebt fuer Gruppen.",
    imageHue: 1,
    openingHours: "Mo-So 11:30-23:00",
    reservation: true,
  },
  {
    slug: "hans-im-glueck",
    name: "Hans im Glueck",
    district: "innenstadt-west",
    cuisine: "Burger",
    priceLevel: "€€",
    categories: ["familie"],
    shortDesc:
      "Burger-Kette mit nordischem Birken-Interieur. Maerchen-Atmosphaere und solide Burger.",
    longDesc:
      "Hans im Glueck am Europaplatz bietet die markanten Maerchen-Burger in nordischem Birken-Ambiente. Vegetarische Optionen, gute Burger-Auswahl, beliebt bei Studierenden.",
    imageHue: 2,
    openingHours: "Mo-So 11:30-23:00",
    reservation: true,
  },
  {
    slug: "cafe-kreuzberg",
    name: "Cafe Kreuzberg",
    district: "suedstadt",
    cuisine: "Cafe",
    priceLevel: "€€",
    categories: [],
    shortDesc:
      "Lebendiges Suedstadt-Cafe mit guter Kueche, Tageskarte und veganen Optionen.",
    longDesc:
      "Das Cafe Kreuzberg ist Karlsruhes Suedstadt-Klassiker fuer entspannte Cafe-Stunden, guten Lunch und vegane Optionen. Wechselnde Tageskarte, schoener Innenhof im Sommer.",
    imageHue: 3,
    openingHours: "Mo-So 9:00-0:00",
    reservation: false,
  },
  {
    slug: "cafe-bleu",
    name: "Cafe Bleu",
    district: "innenstadt-ost",
    cuisine: "Cafe",
    priceLevel: "€€",
    categories: [],
    shortDesc:
      "Klassisches Cafe mit Fruehstueckskarte, Bistro-Lunch und gemuetlicher Atmosphaere.",
    longDesc:
      "Das Cafe Bleu bietet klassische Cafe-Atmosphaere mit langer Fruehstueckskarte, Bistro-Lunch und Kuchen. Beliebt fuer Wochenend-Brunch.",
    imageHue: 4,
    openingHours: "Mo-So 8:00-23:00",
    reservation: false,
  },

  // === VEGETARISCH ===
  {
    slug: "goldene-krone",
    name: "Goldene Krone",
    district: "suedstadt",
    cuisine: "Vegetarisch",
    priceLevel: "€€",
    categories: [],
    shortDesc:
      "Vegetarisch-veganes Restaurant mit wechselnder Karte und saisonalen Zutaten.",
    longDesc:
      "Die Goldene Krone ist Karlsruhes Pionier-Adresse fuer vegetarisch-vegane Kueche. Wechselnde Karte, saisonale Zutaten, regional und bio-orientiert. Beliebt bei jungen Suedstaedtern.",
    imageHue: 5,
    openingHours: "Di-So 12:00-22:00",
    reservation: true,
  },
  {
    slug: "suppdiwupp",
    name: "Suppdiwupp",
    district: "innenstadt-west",
    cuisine: "Vegetarisch",
    priceLevel: "€",
    categories: [],
    shortDesc:
      "Suppen-Lokal in der Innenstadt. Taeglich wechselnde Suppen, Curries, Eintoepfe.",
    longDesc:
      "Das Suppdiwupp ist Karlsruhes Suppen-Klassiker. Taeglich wechselnde Suppen, Curries und Eintoepfe, gegen den Strich der grossen Restaurant-Kueche. Schnell, gut, vegan-vegetarisch-freundlich.",
    imageHue: 1,
    openingHours: "Mo-Sa 11:00-15:00",
    reservation: false,
  },
  {
    slug: "eigelb",
    name: "Eigelb",
    district: "innenstadt-ost",
    cuisine: "Bistro",
    priceLevel: "€€",
    categories: [],
    shortDesc:
      "Bistro mit kreativer Lunch-Karte, Bio-Zutaten und vegetarisch-veganem Schwerpunkt.",
    longDesc:
      "Das Eigelb ist ein modernes Bistro mit kreativer Lunch-Karte, Bio-Zutaten und Schwerpunkt auf vegetarisch-veganen Optionen. Beliebt fuer Mittagessen.",
    imageHue: 2,
    openingHours: "Mo-Fr 11:30-15:00, Sa 10:00-15:00",
    reservation: false,
  },

  // === DURLACH ===
  {
    slug: "klauprecht-1",
    name: "Klauprecht 1",
    district: "durlach",
    cuisine: "Modern",
    priceLevel: "€€€",
    categories: ["historische-architektur"],
    shortDesc:
      "Modernes Restaurant im Hotel Der Blaue Reiter. Saisonale Kueche, sehr gute Weinauswahl.",
    longDesc:
      "Das Klauprecht 1 im Hotel Der Blaue Reiter ist Durlachs gehobene Adresse. Modern-saisonale Kueche, sehr gute Weinauswahl mit Schwerpunkt auf badischen und elsaessischen Weinen, ruhige Atmosphaere.",
    imageHue: 3,
    openingHours: "Mi-Sa 18:00-22:30",
    reservation: true,
  },
];

export const getRestaurant = (slug: string) =>
  restaurants.find((r) => r.slug === slug);
export const restaurantsByDistrict = (district: string) =>
  restaurants.filter((r) => r.district === district);
export const restaurantsByCategory = (category: string) =>
  restaurants.filter((r) => r.categories.includes(category));
export const restaurantsByCuisine = (cuisine: string) =>
  restaurants.filter((r) => r.cuisine === cuisine);
