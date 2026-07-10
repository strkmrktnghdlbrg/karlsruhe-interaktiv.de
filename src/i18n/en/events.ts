/**
 * Englische Inhaltsdaten fuer die Event-Sektion.
 * Gekeyt nach dem DEUTSCHEN slug; enthaelt den (beibehaltenen) englischen slug
 * plus alle uebersetzten Textfelder. Nicht-uebersetzte Felder (Koordinaten,
 * Daten, Limits, Schema-IDs) kommen aus dem deutschen Basis-Eintrag.
 */
import type { CityEvent } from "../../data/events";

export interface EventEn {
  /** Englischer Slug (bleibt fuer Event-Landingpages nah am Original). */
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  description: string;
  address: string;
}

export const eventsEn: Record<string, EventEn> = {
  "das-fest": {
    slug: "das-fest",
    title: "Hotels in Karlsruhe for Das Fest",
    eyebrow: "Das Fest 2026",
    intro:
      "Das Fest on the Mount Klotz is one of the largest open-air festivals in south-west Germany. Hotels in the city centre book up early for the festival weekend.",
    description:
      "Hotels in Karlsruhe for Das Fest 2026 - live prices for the biggest regional open-air festival on the Mount Klotz.",
    address: "Karlsruhe, Germany",
  },
  "schlosslichtspiele": {
    slug: "schlosslichtspiele",
    title: "Hotels in Karlsruhe for the Schlosslichtspiele",
    eyebrow: "Schlosslichtspiele 2026",
    intro:
      "Every summer evening the Schlosslichtspiele light up the palace facade with projections. It is one of Germany's most spectacular open-air art events - and admission is free.",
    description:
      "Hotels in Karlsruhe for the Schlosslichtspiele 2026 - live prices for the open-air art event at the palace.",
    address: "Karlsruhe Palace, Germany",
  },
  "christkindlesmarkt": {
    slug: "christkindlesmarkt",
    title: "Hotels in Karlsruhe for the Christmas Market",
    eyebrow: "Christmas Market 2026",
    intro:
      "Karlsruhe's Christkindlesmarkt on Marktplatz and Friedrichsplatz is one of the loveliest Christmas markets in southern Germany. Spend an Advent night right in the centre.",
    description:
      "Hotels in Karlsruhe for the Christmas Market 2026 - live prices for the Advent season on Marktplatz and Friedrichsplatz.",
    address: "Karlsruhe Marktplatz, Germany",
  },
  "art-karlsruhe": {
    slug: "art-karlsruhe",
    title: "Hotels in Karlsruhe for art Karlsruhe",
    eyebrow: "art Karlsruhe 2027",
    intro:
      "art Karlsruhe is one of Germany's most important art fairs. More than 200 galleries present classic modern, contemporary art and editions across the exhibition halls.",
    description:
      "Hotels in Karlsruhe for art Karlsruhe 2027 - live prices and availability for the art fair at the end of February.",
    address: "Messe Karlsruhe, Rheinstetten",
  },
  "brigande-feschd": {
    slug: "brigande-feschd",
    title: "Hotels in Karlsruhe for the Brigande-Feschd",
    eyebrow: "Brigande-Feschd 2026",
    intro:
      "The Brigande-Feschd is Durlach's biggest street festival. Three days of live music, Baden specialities and a buzzing city-festival atmosphere in the historic old town.",
    description:
      "Hotels in Karlsruhe-Durlach for the Brigande-Feschd 2026 - live prices for Durlach's largest street festival.",
    address: "Karlsruhe-Durlach, Germany",
  },
  "stadtgeburtstag": {
    slug: "stadtgeburtstag",
    title: "Hotels in Karlsruhe for the City Anniversary",
    eyebrow: "City Anniversary",
    intro:
      "Every five years Karlsruhe celebrates its founding anniversary with a grand stage festival on Schlossplatz. The fan-shaped city was founded back in 1715.",
    description:
      "Hotels in Karlsruhe for the City Anniversary - live prices for the grand stage festival at the palace and Marktplatz.",
    address: "Karlsruhe city centre, Germany",
  },
};

/** Liefert den EN-Eintrag zu einem deutschen Event (typsicher). */
export function eventEn(event: CityEvent): EventEn {
  return eventsEn[event.slug];
}
