/**
 * Englische Inhaltsdaten fuer die Sektion "sights".
 * Gekeyt nach dem DEUTSCHEN slug (Sight.slug). Enthaelt den neuen englischen
 * Slug plus alle uebersetzten Felder. Nicht-uebersetzte Felder (Koordinaten,
 * Preise, imageKey, websiteUrl ...) kommen weiterhin aus dem Basis-Eintrag.
 */
import type { Sight } from "../../data/sights";

export type SightEn = {
  slug: string;
  name: string;
  type: string;
  shortDesc: string;
  longDesc: string;
  openingHours?: string;
};

export const sightsEn: Record<string, SightEn> = {
  "karlsruher-schloss": {
    slug: "karlsruhe-palace",
    name: "Karlsruhe Palace",
    type: "Landmark",
    shortDesc:
      "Baroque residential palace of the Margraves of Baden. The geometric heart of the fan-shaped city and Karlsruhe's defining landmark.",
    longDesc:
      "Karlsruhe Palace was built from 1715 by Margrave Karl Wilhelm as his residence and the geometric centre of the new fan-shaped city. From the 42-metre-high palace tower, 32 streets and avenues radiate outward to the south. Today the palace houses the Baden State Museum with extensive archaeological and cultural-history collections.",
    openingHours: "Tue–Sun 10am–6pm",
  },
  "schlossgarten": {
    slug: "palace-gardens",
    name: "Palace Gardens",
    type: "Park",
    shortDesc:
      "English landscape park behind the palace with a botanical garden and tree stands more than a hundred years old.",
    longDesc:
      "The Palace Gardens are the green lung of central Karlsruhe. Once the court garden, today a public English landscape park with mature trees, water features and the adjoining Botanical Garden. Located right behind the palace.",
  },
  "zkm": {
    slug: "zkm-art-and-media",
    name: "ZKM Center for Art and Media",
    type: "Museum",
    shortDesc:
      "A globally unique museum of media art in a former munitions factory. Interactive installations, virtual worlds and digital art.",
    longDesc:
      "The ZKM Center for Art and Media Karlsruhe is the only museum in the world dedicated systematically to electronic and digital art. Housed in a vast listed industrial hall (a former munitions factory), it is home to the Media Museum, the Museum of Contemporary Art, research institutes and an arthouse cinema. A must-see for everyone interested in technology and art.",
    openingHours: "Wed 10am–6pm, Thu–Sun 11am–6pm",
  },
  "staatliche-kunsthalle": {
    slug: "state-art-gallery",
    name: "State Art Gallery Karlsruhe",
    type: "Museum",
    shortDesc:
      "One of the oldest and most important picture galleries in Germany. Cranach, Grünewald, Rembrandt and Caspar David Friedrich.",
    longDesc:
      "The State Art Gallery Karlsruhe holds one of the most significant collections of Old Masters in Germany. Cranach, Hans Baldung Grien, Matthias Grünewald with his famous Isenheim Altarpiece panel, Rembrandt, Rubens, and an extensive collection of German Romanticism including Caspar David Friedrich.",
    openingHours: "Tue–Sun 10am–6pm",
  },
  "marktplatz-pyramide": {
    slug: "market-square-pyramid",
    name: "Market Square with the Pyramid",
    type: "Market Square",
    shortDesc:
      "A reddish sandstone pyramid serving as the tomb of city founder Karl Wilhelm. The neoclassical heart of the city.",
    longDesc:
      "The Market Square is the neoclassical heart of Karlsruhe, designed by Friedrich Weinbrenner from 1804. The red sandstone pyramid from 1825 is the tomb of city founder Margrave Karl Wilhelm and arguably Karlsruhe's most unusual landmark. It is framed by the Protestant City Church, the town hall and the Catholic City Church of St Stephen.",
  },
  "stephanskirche": {
    slug: "st-stephen-church",
    name: "St Stephen's Church",
    type: "Church",
    shortDesc:
      "A neoclassical rotunda by Friedrich Weinbrenner, modelled on the Pantheon in Rome.",
    longDesc:
      "St Stephen's is the principal Catholic church of Karlsruhe, built between 1808 and 1814 by Friedrich Weinbrenner as a grand neoclassical rotunda modelled on the Pantheon in Rome. Heavily damaged during the war, it was rebuilt in a simplified form.",
  },
  "stadtkirche": {
    slug: "protestant-city-church",
    name: "Protestant City Church",
    type: "Church",
    shortDesc:
      "Friedrich Weinbrenner's neoclassical main church on the Market Square, with a columned portico in the classical tradition.",
    longDesc:
      "The Protestant City Church on the Market Square was built in 1816 by Friedrich Weinbrenner and is one of the most important neoclassical buildings in Karlsruhe. Its columned portico follows classical models, while the interior is kept plain and neoclassical.",
  },
  "botanischer-garten": {
    slug: "botanical-garden",
    name: "Botanical Garden Karlsruhe",
    type: "Park",
    shortDesc:
      "A historic botanical garden next to the palace, with a complex of glasshouses and tropical plants.",
    longDesc:
      "The Botanical Garden Karlsruhe lies directly beside the palace and is part of the state property and building authority. Three historic glasshouses display tropical plants, cacti and exotic woody species. The outdoor area with its fountain and box-hedge ornaments is free to enter.",
    openingHours: "Tue–Sun 10am–4:45pm (glasshouses)",
  },
  "naturkundemuseum": {
    slug: "natural-history-museum",
    name: "State Museum of Natural History",
    type: "Museum",
    shortDesc:
      "One of the largest natural history museums in Germany. A vivarium with live animals, dinosaur skeletons and a hall of minerals.",
    longDesc:
      "The State Museum of Natural History Karlsruhe is among the most important natural history museums in Germany. The highlight is the vivarium with live reptiles, amphibians and fish in the heart of the museum. Zoological and geological collections, dinosaur skeletons and a mineral collection make a visit a family experience.",
    openingHours: "Tue–Fri 9:30am–5pm, Sat–Sun 10am–6pm",
  },
  "badisches-staatstheater": {
    slug: "baden-state-theatre",
    name: "Baden State Theatre",
    type: "Modern",
    shortDesc:
      "A three-division house with opera, drama and ballet on Hermann-Levi-Platz. One of the leading theatres in southern Germany.",
    longDesc:
      "The Baden State Theatre is a three-division house with opera, drama and ballet. Founded in 1717 as a court theatre, it occupies a modern building on Hermann-Levi-Platz today. It offers international guest performances and the Junges Staatstheater for children and young people.",
  },
  "karlsruher-zoo": {
    slug: "karlsruhe-zoo",
    name: "Karlsruhe Zoological City Garden",
    type: "Park",
    shortDesc:
      "A zoo right by the main station, merged with the city garden. One of the most beautiful zoo grounds in Germany.",
    longDesc:
      "Karlsruhe Zoo has merged with the neighbouring city garden into one of the most beautiful zoo-and-park complexes in Germany. Located right by the main station, it is home to around 4,000 animals across 240 species. Gondoletta boat rides on the city garden lake are a classic part of the Karlsruhe family programme.",
    openingHours: "Year-round, summer 8am–6pm",
  },
  "stadtgarten": {
    slug: "city-garden",
    name: "City Garden",
    type: "Park",
    shortDesc:
      "An English landscape park by the main station, combined with the zoo. Gondoletta boat rides and animal enclosures.",
    longDesc:
      "The Karlsruhe City Garden is a historic English landscape park by the main station, with mature trees, a lake and a small animal enclosure. Admission is only available together with the zoo (the same complex).",
  },
  "bundesverfassungsgericht": {
    slug: "federal-constitutional-court",
    name: "Federal Constitutional Court",
    type: "Landmark",
    shortDesc:
      "Guardian of the German constitution. A striking modernist building on Schlossplatz, freely accessible from the outside.",
    longDesc:
      "The Federal Constitutional Court is the guardian of Germany's Basic Law and a symbol of Karlsruhe's identity as the seat of justice. The understated modernist building was erected in 1969 to designs by Paul Baumgarten, right by Schlossplatz. Hearings are public; registration is required.",
  },
  "kit-campus-sued": {
    slug: "kit-south-campus",
    name: "KIT South Campus",
    type: "Modern",
    shortDesc:
      "The Karlsruhe Institute of Technology - one of Europe's major technical universities with around 25,000 students.",
    longDesc:
      "The South Campus of KIT, formerly the University of Karlsruhe (TH), is one of the most tradition-rich technology university sites in Europe. Today it is part of the Helmholtz Association as a combined university and research centre. Historic buildings such as the main lecture hall and the Mathematics Library are well worth a stroll.",
  },
  "schloss-gottesaue": {
    slug: "gottesaue-palace",
    name: "Gottesaue Palace",
    type: "Landmark",
    shortDesc:
      "A 16th-century Renaissance palace, today the University of Music with public concerts.",
    longDesc:
      "Gottesaue Palace was built in 1588 as a pleasure palace for the margraves, destroyed during the war and faithfully reconstructed in the 1980s. Today it is home to the Karlsruhe University of Music, with regular concerts and open days.",
  },
  "turmberg": {
    slug: "turmberg-durlach",
    name: "Turmberg Durlach",
    type: "Viewpoint",
    shortDesc:
      "Karlsruhe's local mountain, home to Germany's oldest observation tower and the historic Turmbergbahn funicular.",
    longDesc:
      "The Turmberg is Karlsruhe's classic vantage point. The square keep of the former castle is the oldest observation tower in Germany. It can be reached on foot or by the historic Turmbergbahn - Germany's oldest funicular still in operation (1888). On a clear day the view reaches all the way to the Palatinate Forest.",
  },
  "karlsburg": {
    slug: "karlsburg-durlach",
    name: "Karlsburg Durlach",
    type: "Landmark",
    shortDesc:
      "A 16th-century margravial precursor palace. Today home to the Pfinzgau Museum and the Carpathian German Museum.",
    longDesc:
      "Until Karlsruhe was founded, the Karlsburg was the residence of the Margraves of Baden. A Renaissance building from the 16th century with later Baroque alterations, it today houses the Pfinzgau Museum on the local history of Durlach.",
  },
  "pfinzgaumuseum": {
    slug: "pfinzgau-museum",
    name: "Pfinzgau Museum",
    type: "Museum",
    shortDesc:
      "A local history museum in the Karlsburg. The margraves' history, the town before 1715 and its industrial past.",
    longDesc:
      "The Pfinzgau Museum documents the history of Durlach as a margravial residence town before the founding of Karlsruhe, its incorporation in 1938 and the industrial history of the Pfinz valley. Admission is free.",
    openingHours: "Wed–Sat 10am–6pm, Sun 11am–6pm",
  },
  "mehlwaage-durlach": {
    slug: "old-flour-scales-durlach",
    name: "Old Flour Scales Durlach",
    type: "Landmark",
    shortDesc:
      "A medieval weights-and-measures building on the Saumarkt. One of the oldest surviving buildings in Durlach.",
    longDesc:
      "The Old Flour Scales on the Saumarkt served from the 14th century as the official weighing house for the grain and flour trade. It is one of the few medieval buildings that have survived in Durlach.",
  },
  "tollhaus": {
    slug: "tollhaus",
    name: "Tollhaus",
    type: "Modern",
    shortDesc:
      "A cultural centre on the old slaughterhouse site. Concerts, theatre and the Zeltival festival in summer.",
    longDesc:
      "The Tollhaus is Karlsruhe's most important socio-cultural centre, housed in the Old Slaughterhouse. It offers concerts, readings, cabaret and the annual Zeltival festival in summer with international world music.",
  },
  "substage": {
    slug: "substage",
    name: "Substage",
    type: "Modern",
    shortDesc:
      "A concert hall beneath the old slaughterhouse. Indie rock, metal and hip-hop. Karlsruhe's key venue for live music.",
    longDesc:
      "The Substage is Karlsruhe's most important live venue for indie rock, metal, hip-hop and alternative music. Located in the former cold-storage rooms of the slaughterhouse, it is considered one of the most atmospheric concert spots in the south-west.",
  },
  "hardtwald": {
    slug: "hardtwald-forest",
    name: "Hardtwald Forest",
    type: "Park",
    shortDesc:
      "A large forest area north of the city with hiking trails, game enclosures and picnic spots.",
    longDesc:
      "The Hardtwald is Karlsruhe's most important local recreation area - a continuous pine forest stretching north of the city as far as Eggenstein-Leopoldshafen. Hiking trails, game enclosures, fitness trails and, in summer, popular picnic spots.",
  },
  "majolika-manufaktur": {
    slug: "majolika-ceramics-manufactory",
    name: "Majolika Ceramics Manufactory",
    type: "Museum",
    shortDesc:
      "A ceramics manufactory founded in 1901 at the edge of the palace grounds. Workshop tours and an exhibition.",
    longDesc:
      "The Karlsruhe Majolika Manufactory was founded in 1901 and is one of the oldest still-producing art ceramics workshops in Germany. It offers workshop tours, exhibitions of contemporary artists and on-site sales straight from the manufactory.",
  },
  "verkehrsmuseum": {
    slug: "transport-museum",
    name: "Transport Museum Karlsruhe",
    type: "Museum",
    shortDesc:
      "A private museum on Karlsruhe's transport history. Trams, railways, model railways and Karl Drais's running machine.",
    longDesc:
      "The Transport Museum Karlsruhe is a private museum on transport history, focusing on the Karlsruhe tram, the city's famous Karlsruhe Model (the tram-train hybrid) and Karl Drais, inventor of the running machine - born in Karlsruhe.",
    openingHours: "Sat–Sun 2pm–6pm",
  },
  "rheinhafen": {
    slug: "rhine-harbour",
    name: "Karlsruhe Rhine Harbour",
    type: "Modern",
    shortDesc:
      "One of the largest inland ports in Germany. Industrial heritage, harbour cruises and Karlsruhe land-art spots.",
    longDesc:
      "The Karlsruhe Rhine Harbour is one of the most important inland ports in Germany. Harbour cruises, industrial-heritage walks and popular photo spots line the port. In summer it becomes a meeting point for urban photography and harbour festivals.",
  },
};
