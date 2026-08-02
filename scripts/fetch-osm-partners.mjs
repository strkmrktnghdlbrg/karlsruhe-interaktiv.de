/**
 * fetch-osm-partners.mjs - echte Karlsruher Betriebe aus OpenStreetMap.
 * Quelle: Overpass API (ODbL, Namensnennung ist Pflicht). Ergaenzt das
 * Branchenbuch um kostenlose Listings (premium:false, verified:false), die ein
 * Betrieb spaeter beanspruchen kann.
 *
 *   node scripts/fetch-osm-partners.mjs            # DRY: nur Statistik
 *   node scripts/fetch-osm-partners.mjs --write    # schreibt src/data/partners.osm.json
 *   node scripts/fetch-osm-partners.mjs --refresh  # Cache ignorieren, neu laden
 *   node scripts/fetch-osm-partners.mjs --level=8  # Overpass-Area-Ebene erzwingen
 *
 * Portiert von koeln-interaktiv.de (Blueprint: heidelberg-guide.com).
 * Unterschiede zu Koeln:
 *  - Area "Karlsruhe" als Stadtkreis (admin_level 6, per --level umstellbar).
 *  - Dieses Repo hat eine feste Branchen-Taxonomie (branchenverzeichnis.ts),
 *    deshalb wird jeder OSM-Tag auf einen der vorhandenen Kategorie-Slugs
 *    abgebildet; das feinere OSM-Label wandert als "subcategory" mit.
 *  - Dedup gegen restaurants.ts, hotels.ts und die kuratierten Eintraege.
 */
import { writeFileSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const WRITE = process.argv.includes("--write");
const OUT = "src/data/partners.osm.json";
const CACHE = join(process.env.TEMP || "/tmp", "osm-raw-karlsruhe.json");

const levelArg = process.argv.find((a) => a.startsWith("--level="));
const ADMIN_LEVEL = levelArg ? levelArg.split("=")[1] : "6";

/** Ab dieser Menge wird zusaetzlich Telefon ODER Website verlangt. */
const SCALE_LIMIT = 10000;

const UA =
  "karlsruhe-interaktiv.de business-directory builder (city portal, one-off import; contact: https://karlsruhe-interaktiv.de/kontakt/)";

const ENDPOINTS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.private.coffee/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
  "https://maps.mail.ru/osm/tools/overpass/api/interpreter",
];

const queryFor = (level) => `[out:json][timeout:180];
area["name"="Karlsruhe"]["boundary"="administrative"]["admin_level"="${level}"]->.a;
(
  nwr["shop"]["name"](area.a);
  nwr["amenity"~"^(restaurant|cafe|bar|pub|fast_food|ice_cream|biergarten|pharmacy|dentist|doctors|clinic|veterinary|driving_school|fuel|car_wash|car_rental|bank|nightclub|cinema|theatre)$"]["name"](area.a);
  nwr["craft"]["name"](area.a);
  nwr["office"]["name"](area.a);
  nwr["healthcare"]["name"](area.a);
  nwr["leisure"~"^(fitness_centre|sports_centre|dance)$"]["name"](area.a);
  nwr["tourism"~"^(hotel|guest_house|hostel|apartment)$"]["name"](area.a);
);
out center tags;`;

// --- OSM-Tag -> [Feinlabel, Kategorie-Slug aus branchenverzeichnis.ts] -------
const CAT = {
  GASTRO: "gastronomie",
  HOTEL: "hotels",
  HEALTH: "apotheken",
  FINANCE: "banken",
  CRAFT: "handwerk",
  SERVICE: "dienstleistung",
  IT: "it-tech",
  RETAIL: "einzelhandel",
  LEISURE: "freizeit",
};

function classify(tags) {
  const s = tags.shop,
    a = tags.amenity,
    c = tags.craft,
    o = tags.office,
    h = tags.healthcare,
    l = tags.leisure,
    tm = tags.tourism;

  // Gastronomie
  if (a === "restaurant") return ["Restaurant", CAT.GASTRO];
  if (a === "cafe") return ["Café", CAT.GASTRO];
  if (a === "fast_food") return ["Imbiss", CAT.GASTRO];
  if (a === "bar" || a === "pub" || a === "biergarten") return ["Bar & Kneipe", CAT.GASTRO];
  if (a === "ice_cream") return ["Eisdiele", CAT.GASTRO];
  if (s === "bakery") return ["Bäckerei", CAT.GASTRO];
  if (s === "butcher") return ["Metzgerei", CAT.GASTRO];
  if (s === "confectionery" || s === "pastry") return ["Konditorei", CAT.GASTRO];
  if (s === "beverages" || s === "wine") return ["Getränke & Wein", CAT.GASTRO];
  if (s === "greengrocer" || s === "deli" || s === "cheese") return ["Feinkost", CAT.GASTRO];
  if (c === "caterer") return ["Catering", CAT.GASTRO];
  if (c === "brewery") return ["Brauerei", CAT.GASTRO];

  // Uebernachtung
  if (tm) {
    const tmMap = { hotel: "Hotel", guest_house: "Pension", hostel: "Hostel", apartment: "Ferienwohnung" };
    return [tmMap[tm] || "Unterkunft", CAT.HOTEL];
  }

  // Gesundheit
  if (a === "pharmacy") return ["Apotheke", CAT.HEALTH];
  if (a === "dentist" || h === "dentist") return ["Zahnarzt", CAT.HEALTH];
  if (a === "doctors" || a === "clinic" || h === "doctor" || h === "clinic" || h === "centre")
    return ["Arztpraxis", CAT.HEALTH];
  if (a === "veterinary" || h === "veterinary") return ["Tierarzt", CAT.HEALTH];
  if (s === "massage" || h === "physiotherapist") return ["Physio & Massage", CAT.HEALTH];
  if (h === "psychotherapist") return ["Psychotherapie", CAT.HEALTH];
  if (h === "alternative") return ["Heilpraktiker", CAT.HEALTH];
  if (h === "laboratory") return ["Labor", CAT.HEALTH];
  if (h === "nurse" || h === "nursing_home") return ["Pflegedienst", CAT.HEALTH];
  if (s === "optician") return ["Optiker", CAT.HEALTH];
  if (s === "hearing_aids") return ["Hörakustiker", CAT.HEALTH];
  if (s === "medical_supply") return ["Sanitätshaus", CAT.HEALTH];
  if (h) return ["Gesundheit & Therapie", CAT.HEALTH];

  // Behoerden, Parteien, Vereine und andere Nicht-Betriebe verwerfen
  const dropOffice = new Set([
    "government", "administrative", "diplomatic", "political_party", "ngo", "association",
    "research", "educational_institution", "foundation", "religion", "guild", "quango",
    "charity", "water_utility",
  ]);
  if (a === "government" || (o && dropOffice.has(o))) return ["", ""];

  // Banken, Finanzen, Versicherungen
  if (a === "bank") return ["Bank", CAT.FINANCE];
  if (o === "insurance") return ["Versicherung", CAT.FINANCE];
  if (o === "financial" || o === "financial_advisor") return ["Finanzberatung", CAT.FINANCE];
  if (o === "accountant" || o === "tax_advisor") return ["Steuerberatung", CAT.FINANCE];

  // IT und Technologie
  if (o === "it" || o === "telecommunication") return ["IT-Dienstleister", CAT.IT];
  if (o === "engineer") return ["Ingenieurbüro", CAT.IT];
  if (c === "electronics_repair") return ["Elektronik-Reparatur", CAT.IT];

  // Handwerk und Bau
  if (c) {
    const craftMap = {
      electrician: "Elektriker", plumber: "Sanitär & Heizung", hvac: "Heizung & Klima",
      carpenter: "Zimmerei", cabinet_maker: "Schreinerei", joiner: "Schreinerei",
      painter: "Maler & Lackierer", gardener: "Garten & Landschaftsbau", roofer: "Dachdecker",
      tiler: "Fliesenleger", locksmith: "Schlosserei", metal_construction: "Metallbau",
      stonemason: "Steinmetz", plasterer: "Stuckateur", glaziery: "Glaserei",
      window_construction: "Fensterbau", scaffolder: "Gerüstbau", chimney_sweeper: "Schornsteinfeger",
      sweep: "Schornsteinfeger", insulation: "Dämmtechnik", floorer: "Bodenleger",
      builder: "Bauunternehmen", sawmill: "Sägewerk", blacksmith: "Schmiede",
    };
    if (craftMap[c]) return [craftMap[c], CAT.CRAFT];
    const serviceCraft = {
      photographer: "Fotograf", shoemaker: "Schuhmacher", tailor: "Schneiderei",
      dressmaker: "Schneiderei", upholsterer: "Polsterei", jeweller: "Goldschmiede",
      key_cutter: "Schlüsseldienst", optician: "Optiker", signmaker: "Werbetechnik",
      printer: "Druckerei", bookbinder: "Buchbinderei", watchmaker: "Uhrmacher",
    };
    if (serviceCraft[c]) return [serviceCraft[c], CAT.SERVICE];
    return ["Handwerksbetrieb", CAT.CRAFT];
  }
  if (s === "hardware" || s === "doityourself" || s === "trade" || s === "building_materials")
    return ["Baustoffe & Baumarkt", CAT.CRAFT];
  if (s === "car_repair") return ["Kfz-Werkstatt", CAT.CRAFT];

  // Freizeit, Sport, Kultur
  if (a === "nightclub") return ["Club & Nightlife", CAT.LEISURE];
  if (a === "cinema") return ["Kino", CAT.LEISURE];
  if (a === "theatre") return ["Theater & Bühne", CAT.LEISURE];
  if (l === "dance") return ["Tanzschule", CAT.LEISURE];
  if (l === "fitness_centre") return ["Fitnessstudio", CAT.LEISURE];
  if (l === "sports_centre") return ["Sportanlage", CAT.LEISURE];

  // Dienstleistung und Beratung
  if (s === "hairdresser") return ["Friseur", CAT.SERVICE];
  if (s === "beauty" || s === "cosmetics" || s === "tattoo") return ["Kosmetik & Beauty", CAT.SERVICE];
  if (s === "laundry" || s === "dry_cleaning") return ["Reinigung & Wäscherei", CAT.SERVICE];
  if (s === "funeral_directors") return ["Bestattung", CAT.SERVICE];
  if (s === "travel_agency") return ["Reisebüro", CAT.SERVICE];
  if (a === "car_wash") return ["Autowäsche", CAT.SERVICE];
  if (a === "car_rental") return ["Autovermietung", CAT.SERVICE];
  if (a === "fuel") return ["Tankstelle", CAT.SERVICE];
  if (a === "driving_school") return ["Fahrschule", CAT.SERVICE];
  if (o) {
    const offMap = {
      lawyer: "Rechtsanwalt", notary: "Notar", estate_agent: "Immobilien",
      employment_agency: "Personalvermittlung", advertising_agency: "Werbeagentur",
      travel_agent: "Reisebüro", architect: "Architekturbüro", coworking: "Coworking",
      logistics: "Logistik", energy_supplier: "Energieversorger", moving_company: "Umzugsservice",
      newspaper: "Medien & Verlag", publisher: "Medien & Verlag", surveyor: "Vermessungsbüro",
      consulting: "Unternehmensberatung", therapist: "Therapie & Beratung",
      company: "Unternehmen", yes: "Unternehmen",
    };
    return [offMap[o] || "Büro & Dienstleistung", CAT.SERVICE];
  }

  // Einzelhandel
  if (s) {
    const shopMap = {
      supermarket: "Supermarkt", clothes: "Mode & Bekleidung", shoes: "Schuhe",
      jewelry: "Schmuck & Uhren", books: "Buchhandlung", furniture: "Möbel",
      bicycle: "Fahrrad", mobile_phone: "Handy & Telekom", computer: "Computer & Elektronik",
      electronics: "Computer & Elektronik", kiosk: "Kiosk", convenience: "Kiosk",
      tobacco: "Tabakwaren", toys: "Spielwaren", sports: "Sportgeschäft",
      car_parts: "Kfz-Teile", car: "Autohaus", pet: "Zoohandlung",
      stationery: "Schreibwaren", gift: "Geschenke", second_hand: "Secondhand",
      variety_store: "Kaufhaus", department_store: "Kaufhaus", chemist: "Drogerie",
      florist: "Blumen & Floristik", garden_centre: "Gartencenter", art: "Kunst & Galerie",
      frame: "Rahmen & Kunst", antiques: "Antiquitäten", music: "Musikgeschäft",
      musical_instrument: "Musikinstrumente", photo: "Fotogeschäft", copyshop: "Copyshop",
      newsagent: "Zeitschriften", bag: "Taschen & Koffer", fabric: "Stoffe & Kurzwaren",
      hifi: "HiFi & Audio", houseware: "Haushaltswaren", interior_decoration: "Wohnaccessoires",
      lighting: "Leuchten", paint: "Farben & Lacke", outdoor: "Outdoor-Ausrüstung",
      erotic: "Erotikfachgeschäft", organic: "Bioladen", health_food: "Naturkost",
    };
    return [shopMap[s] || "Einzelhandel", CAT.RETAIL];
  }
  return ["Einzelhandel", CAT.RETAIL];
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function fetchOverpass() {
  if (existsSync(CACHE) && !process.argv.includes("--refresh")) {
    console.error("(nutze Cache " + CACHE + ", --refresh laedt neu)");
    return JSON.parse(readFileSync(CACHE, "utf8"));
  }
  const body = "data=" + encodeURIComponent(queryFor(ADMIN_LEVEL));
  for (const ep of ENDPOINTS) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        console.error(`Overpass: ${ep} (Versuch ${attempt}, admin_level=${ADMIN_LEVEL})`);
        const res = await fetch(ep, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": UA },
          body,
        });
        if (!res.ok) {
          // 429 = Rate-Limit, 504 = Gateway-Timeout: kurz warten, dann Endpunkt wechseln
          console.error("  HTTP " + res.status + (res.status === 429 || res.status === 504 ? " (Rate-Limit/Timeout)" : ""));
          if (res.status === 429 || res.status === 504) {
            await new Promise((r) => setTimeout(r, 5000 * attempt));
            continue;
          }
          break;
        }
        const json = await res.json();
        writeFileSync(CACHE, JSON.stringify(json), "utf8");
        console.error("  OK, Rohdaten im Cache: " + CACHE);
        return json;
      } catch (e) {
        console.error("  Fehler: " + e.message);
      }
    }
  }
  throw new Error(
    "Kein Overpass-Endpunkt erreichbar. Spaeter erneut versuchen oder anderen Endpunkt in ENDPOINTS ergaenzen.",
  );
}

const data = await fetchOverpass();
console.log("Overpass-Rohelemente: " + data.elements.length);
if (data.elements.length < 200) {
  console.log("!!! Auffaellig wenige Treffer - stimmt die Area (admin_level=" + ADMIN_LEVEL + ")?");
}

const seen = new Map();
const partners = [];
const catCount = {}, subCount = {};
let dropped = 0, withStreet = 0, withPhone = 0, withWeb = 0, withEmail = 0;

for (const el of data.elements) {
  const t = el.tags || {};
  const name = (t.name || "").trim();
  if (!name || name.length > 90) continue;

  const street = [t["addr:street"], t["addr:housenumber"]].filter(Boolean).join(" ");
  const zip = t["addr:postcode"] || "";
  const city = t["addr:city"] || "Karlsruhe";
  const suburb = (t["addr:suburb"] || "").trim();
  const phone = (t.phone || t["contact:phone"] || "").trim();
  const website = (t.website || t["contact:website"] || "").trim();
  const email = (t.email || t["contact:email"] || "").trim();

  const [subcategory, category] = classify(t);
  if (!category) { dropped++; continue; } // Behoerden und Nicht-Betriebe

  const key = name.toLowerCase() + "|" + (street || zip || el.id);
  if (seen.has(key)) continue;
  seen.set(key, true);

  if (street) withStreet++;
  if (phone) withPhone++;
  if (website) withWeb++;
  if (email) withEmail++;
  catCount[category] = (catCount[category] || 0) + 1;
  subCount[subcategory] = (subCount[subcategory] || 0) + 1;

  partners.push({
    name,
    slug: "osm-" + slugify(name) + "-" + el.id,
    category,
    subcategory,
    street,
    zip,
    city,
    suburb,
    phone,
    email,
    website,
    osmId: `${el.type}/${el.id}`,
  });
}

console.log("");
console.log("-- OSM-Betriebe Karlsruhe (roh, nach Dedup innerhalb OSM) --");
console.log("Gesamt (mit Name):        " + partners.length);
console.log("  verworfen (Behoerden):  " + dropped);
console.log("  mit Strasse:            " + withStreet);
console.log("  mit Telefon:            " + withPhone);
console.log("  mit Website:            " + withWeb);
console.log("  mit E-Mail:             " + withEmail);
console.log("");
console.log("Nach Kategorie:", catCount);
console.log("");
console.log("Top-Feinkategorien:");
Object.entries(subCount)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 25)
  .forEach(([k, v]) => console.log("  " + String(v).padStart(5) + "  " + k));

// ---------------------------------------------------------------------------
// Verzeichnis-Qualitaet: Name + Strasse, dedupliziert gegen die bereits im
// Portal gefuehrten Eintraege (restaurants.ts, hotels.ts, kuratierte Liste).
// ---------------------------------------------------------------------------
const norm = (x) => (x || "").toLowerCase().replace(/[^a-z0-9äöüß]/g, "");
const existingKeys = new Set();
for (const file of ["src/data/restaurants.ts", "src/data/hotels.ts", "src/data/branchenverzeichnis.ts"]) {
  if (!existsSync(file)) continue;
  const src = readFileSync(file, "utf8");
  for (const m of src.matchAll(/name:\s*"([^"]+)"/g)) existingKeys.add(norm(m[1]));
}
console.log("");
console.log("Dedup-Basis (vorhandene Portal-Eintraege): " + existingKeys.size);

let quality = partners.filter((p) => p.street).filter((p) => !existingKeys.has(norm(p.name)));
const qualityBase = quality.length;
console.log("Verzeichnis-Qualitaet (Name + Strasse, dedupliziert): " + qualityBase);

// SCALE CONTROL: ab SCALE_LIMIT zusaetzlich Telefon ODER Website verlangen.
let applied = false;
if (qualityBase > SCALE_LIMIT) {
  const stricter = quality.filter((p) => p.phone || p.website);
  console.log("");
  console.log("!!! Ueber der Schwelle von " + SCALE_LIMIT + " Eintraegen.");
  console.log("!!! Zusatzfilter (Telefon ODER Website) greift: " + stricter.length + " Eintraege.");
  quality = stricter;
  applied = true;
} else {
  const wouldBe = quality.filter((p) => p.phone || p.website).length;
  console.log(
    "Unter der Schwelle von " + SCALE_LIMIT + " - kein Zusatzfilter. " +
    "(Mit Telefon ODER Website waeren es " + wouldBe + ".)",
  );
}
console.log("Ergebnis: " + quality.length + " Eintraege" + (applied ? " (Zusatzfilter aktiv)" : "") + ".");

const finalCat = {};
for (const p of quality) finalCat[p.category] = (finalCat[p.category] || 0) + 1;
console.log("Ergebnis nach Kategorie:", finalCat);

if (WRITE) {
  quality.sort((a, b) => a.name.localeCompare(b.name, "de"));
  writeFileSync(OUT, JSON.stringify(quality, null, 2) + "\n", "utf8");
  console.log(`Geschrieben: ${quality.length} Betriebe -> ${OUT}`);
} else {
  console.log("(DRY RUN - nichts geschrieben. --write zum Schreiben.)");
}
