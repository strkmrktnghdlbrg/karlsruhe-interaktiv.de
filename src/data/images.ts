/**
 * Central Image Registry — Karlsruhe.
 * Bilder via astro:assets aus src/assets/images/{sights,districts}/.
 * Quelle: Wikimedia Commons (CC) — Autor + Lizenz + Backlink in der Caption.
 * Generiert aus Commons-Metadaten; bei fehlendem Key faellt ContentImage auf HueGradient zurueck.
 */
import type { ImageMetadata } from "astro";

export type ImageSource = "wikimedia" | "unsplash" | "pexels" | "own" | "manufacturer";

export type Credit = {
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
};

export type ImageEntry = {
  src: ImageMetadata;
  alt: string;
  source: ImageSource;
  credit?: Credit;
};

const sightModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/sights/*.{jpg,JPG,jpeg,png,webp}",
  { eager: true }
);
const districtModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/districts/*.{jpg,JPG,jpeg,png,webp}",
  { eager: true }
);

function asset(folder: "sights" | "districts", slug: string): ImageMetadata {
  const modules = folder === "sights" ? sightModules : districtModules;
  const match = Object.entries(modules).find(([path]) =>
    path.match(new RegExp(`/${slug}\\.(jpg|JPG|jpeg|png|webp)$`))
  );
  if (!match) {
    throw new Error(`Image asset not found: src/assets/images/${folder}/${slug}.*`);
  }
  return match[1].default;
}

export const images: Record<string, ImageEntry> = {
  "sight:badisches-staatstheater": {
    src: asset("sights", "badisches-staatstheater"),
    alt: "Badisches Staatstheater in Karlsruhe",
    source: "wikimedia",
    credit: { author: "KAffee76133", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Badisches_Staatstheater_Geb%C3%A4ude_2022_-_Gesamtansicht_2.jpg" },
  },
  "sight:botanischer-garten": {
    src: asset("sights", "botanischer-garten"),
    alt: "Botanischer Garten Karlsruhe in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Michael Wittwer", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Karlsruhe_2021_-_Botanischer_Garten.jpg" },
  },
  "sight:bundesverfassungsgericht": {
    src: asset("sights", "bundesverfassungsgericht"),
    alt: "Bundesverfassungsgericht in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Rainer Lück 1RL.de", license: "CC BY-SA 3.0 de", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en", sourceUrl: "https://commons.wikimedia.org/wiki/File:Bundesverfassungsgericht_IMGP1634.jpg" },
  },
  "sight:hardtwald": {
    src: asset("sights", "hardtwald"),
    alt: "Hardtwald in Karlsruhe",
    source: "wikimedia",
    credit: { author: "H. Zell", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Anas_platyrhynchos_-_Weiherwald_-_Karlsruhe_05.jpg" },
  },
  "sight:karlsburg": {
    src: asset("sights", "karlsburg"),
    alt: "Karlsburg Durlach in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Michael Kauffmann", license: "CC BY 2.0 de", licenseUrl: "https://creativecommons.org/licenses/by/2.0/de/deed.en", sourceUrl: "https://commons.wikimedia.org/wiki/File:Karlsruhe_Durlach_Karlsburg.jpg" },
  },
  "sight:karlsruher-schloss": {
    src: asset("sights", "karlsruher-schloss"),
    alt: "Karlsruher Schloss in Karlsruhe",
    source: "wikimedia",
    credit: { author: "A.Savin", license: "FAL", licenseUrl: "http://artlibre.org/licence/lal/en", sourceUrl: "https://commons.wikimedia.org/wiki/File:Karlsruhe_asv2022-10_img07_Schloss_Karlsruhe.jpg" },
  },
  "sight:karlsruher-zoo": {
    src: asset("sights", "karlsruher-zoo"),
    alt: "Zoologischer Stadtgarten Karlsruhe in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Vinto", license: "CC BY-SA 3.0", licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Polarb%C3%A4r.jpg" },
  },
  "sight:majolika-manufaktur": {
    src: asset("sights", "majolika-manufaktur"),
    alt: "Majolika-Manufaktur in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Kasperlein", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Majolika_Karlsruhe.JPG" },
  },
  "sight:marktplatz-pyramide": {
    src: asset("sights", "marktplatz-pyramide"),
    alt: "Marktplatz mit Pyramide in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Gerd Eichmann", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Karlsruhe-U-Bahnhof_Marktplatz-02-2022-gje.jpg" },
  },
  "sight:naturkundemuseum": {
    src: asset("sights", "naturkundemuseum"),
    alt: "Staatliches Museum fuer Naturkunde in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Sitacuisses", license: "CC BY-SA 3.0 de", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en", sourceUrl: "https://commons.wikimedia.org/wiki/File:Staatliches_Museum_f%C3%BCr_Naturkunde_Karlsruhe_20220831_162304.jpg" },
  },
  "sight:pfinzgaumuseum": {
    src: asset("sights", "pfinzgaumuseum"),
    alt: "Pfinzgaumuseum in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Michael Kauffmann", license: "CC BY 2.0 de", licenseUrl: "https://creativecommons.org/licenses/by/2.0/de/deed.en", sourceUrl: "https://commons.wikimedia.org/wiki/File:Karlsruhe_Durlach_Karlsburg.jpg" },
  },
  "sight:rheinhafen": {
    src: asset("sights", "rheinhafen"),
    alt: "Rheinhafen Karlsruhe in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Dg-505", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Harbour_-_panoramio_(10).jpg" },
  },
  "sight:schloss-gottesaue": {
    src: asset("sights", "schloss-gottesaue"),
    alt: "Schloss Gottesaue in Karlsruhe",
    source: "wikimedia",
    credit: { author: "H. Zell", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Schloss_Gottesaue_Karlsruhe_02.jpg" },
  },
  "sight:schlossgarten": {
    src: asset("sights", "schlossgarten"),
    alt: "Schlossgarten in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Carsten Steger", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Aerial_image_of_the_Karlsruhe_Schlossgarten_(view_from_the_northeast).jpg" },
  },
  "sight:staatliche-kunsthalle": {
    src: asset("sights", "staatliche-kunsthalle"),
    alt: "Staatliche Kunsthalle Karlsruhe in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Armerdietrich", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/File:KarlsruherKunsthalle.jpg", sourceUrl: "https://commons.wikimedia.org/wiki/File:KarlsruherKunsthalle.jpg" },
  },
  "sight:stadtgarten": {
    src: asset("sights", "stadtgarten"),
    alt: "Stadtgarten in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Vinto", license: "CC BY-SA 3.0", licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Polarb%C3%A4r.jpg" },
  },
  "sight:stadtkirche": {
    src: asset("sights", "stadtkirche"),
    alt: "Evangelische Stadtkirche in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Photo: Andreas Praefcke", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Karlsruhe_Stadtkirche_02.jpg" },
  },
  "sight:stephanskirche": {
    src: asset("sights", "stephanskirche"),
    alt: "St. Stephan in Karlsruhe",
    source: "wikimedia",
    credit: { author: "S. Finner at German Wikipedia (Original text: Siddhartha Finner (Autor von www.badischewanderungen.de))", license: "CC BY-SA 3.0", licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Karlsruhe_-_Sankt_Stephan_-_Bild_2.jpg" },
  },
  "sight:tollhaus": {
    src: asset("sights", "tollhaus"),
    alt: "Tollhaus in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Gerd Eichmann", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Karlsruhe-Alter_Schlachthof-04-Gasthaus-2021-gje.jpg" },
  },
  "sight:turmberg": {
    src: asset("sights", "turmberg"),
    alt: "Turmberg Durlach in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Robb at German Wikipedia", license: "CC BY-SA 3.0", licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Turmberg-Durlach.jpg" },
  },
  "sight:verkehrsmuseum": {
    src: asset("sights", "verkehrsmuseum"),
    alt: "Verkehrsmuseum Karlsruhe in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Klaus Nahr from Germany", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Verkehrsmuseum_Karlsruhe_02_Karmann-Ghia_-_BMW_700_-_Flickr_-_KlausNahr.jpg" },
  },
  "sight:zkm": {
    src: asset("sights", "zkm"),
    alt: "ZKM Zentrum fuer Kunst und Medien in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Zkmkarlsruhe", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:ZKM-Karlsruhe-Au%C3%9Fenansicht-Achim-Mende.jpg" },
  },
  "district:daxlanden": {
    src: asset("districts", "daxlanden"),
    alt: "Daxlanden in Karlsruhe",
    source: "wikimedia",
    credit: { author: "H. Zell", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Wetland_-_Daxlanden_-_Karlsruhe_02.jpg" },
  },
  "district:durlach": {
    src: asset("districts", "durlach"),
    alt: "Durlach in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Ikar.us (talk)", license: "CC BY 2.0 de", licenseUrl: "https://creativecommons.org/licenses/by/2.0/de/deed.en", sourceUrl: "https://commons.wikimedia.org/wiki/File:Karlsruhe_Durlach_Mitte.jpg" },
  },
  "district:innenstadt-ost": {
    src: asset("districts", "innenstadt-ost"),
    alt: "Innenstadt-Ost in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Sitacuisses", license: "CC BY-SA 3.0 de", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en", sourceUrl: "https://commons.wikimedia.org/wiki/File:Staatliches_Museum_f%C3%BCr_Naturkunde_Karlsruhe_20220831_162304.jpg" },
  },
  "district:innenstadt-west": {
    src: asset("districts", "innenstadt-west"),
    alt: "Innenstadt-West in Karlsruhe",
    source: "wikimedia",
    credit: { author: "A.Savin", license: "FAL", licenseUrl: "http://artlibre.org/licence/lal/en", sourceUrl: "https://commons.wikimedia.org/wiki/File:Karlsruhe_asv2022-10_img07_Schloss_Karlsruhe.jpg" },
  },
  "district:knielingen": {
    src: asset("districts", "knielingen"),
    alt: "Knielingen in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Achim Lammerts (Syntaxys)", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:2025-12-09_Z5-1172_Achim-Lammerts_Knielinger-See-Morgennebel.jpg" },
  },
  "district:muehlburg": {
    src: asset("districts", "muehlburg"),
    alt: "Muehlburg in Karlsruhe",
    source: "wikimedia",
    credit: { author: "2AgentSmith2", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Entenfang_-_panoramio.jpg" },
  },
  "district:neureut": {
    src: asset("districts", "neureut"),
    alt: "Neureut in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Entbert", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Karlsruhe-Neureut_Adolf-Ehrmann-Bad_railway_station_2024-09-18_01.jpg" },
  },
  "district:nordstadt": {
    src: asset("districts", "nordstadt"),
    alt: "Nordstadt in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Ikar.us", license: "CC BY 2.0 de", licenseUrl: "https://creativecommons.org/licenses/by/2.0/de/deed.en", sourceUrl: "https://commons.wikimedia.org/wiki/File:Karlsruhe_PaulRevereVillage.jpg" },
  },
  "district:oststadt": {
    src: asset("districts", "oststadt"),
    alt: "Oststadt in Karlsruhe",
    source: "wikimedia",
    credit: { author: "H. Zell", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Schloss_Gottesaue_Karlsruhe_01.jpg" },
  },
  "district:rueppurr": {
    src: asset("districts", "rueppurr"),
    alt: "Rueppurr in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Entbert", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Karlsruhe_Schloss_R%C3%BCppurr_railway_station_2025-02-08_01.jpg" },
  },
  "district:suedstadt": {
    src: asset("districts", "suedstadt"),
    alt: "Suedstadt in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Foto: Bernd Schwabe in Hannover", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Indianerbrunnen_Werderplatz_Karlsruhe_Wir_wollen_nicht_Streit_-_Randale_-_Chaos,_Schl%C3%A4gereien_-_Gewalt,_Dealer,_Schnapsleichen,_Scherben_-_M%C3%BCll._Wir_vom_Brunnen.jpg" },
  },
  "district:suedweststadt": {
    src: asset("districts", "suedweststadt"),
    alt: "Suedweststadt in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Killarnee", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Karlsruhe_at_night_%E2%80%93_Karlstra%C3%9Fe,_Karlsruhe-S%C3%BCdweststadt_-_2.jpg" },
  },
  "district:waldstadt": {
    src: asset("districts", "waldstadt"),
    alt: "Waldstadt in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Killarnee", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Waldstadt,_Karlsruhe_-_2.jpg" },
  },
  "district:weststadt": {
    src: asset("districts", "weststadt"),
    alt: "Weststadt in Karlsruhe",
    source: "wikimedia",
    credit: { author: "Achim Lammerts (Syntaxys)", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:2026-03-01_D500-1961_Achim-Lammerts_Karlsruhe-M%C3%BChlburger-Tor.jpg" },
  },
};

export function getImage(key: string): ImageEntry | undefined {
  return images[key];
}
