/**
 * Karlsruher Event-Kalender fuer Hotel-Landing-Pages.
 * Live-Stay22-Daten fuer konkrete Event-Termine.
 */
export interface CityEvent {
  slug: string;
  title: string;
  intro: string;
  eyebrow: string;
  checkin: string;
  checkout: string;
  description: string;
  address: string;
  lat?: number;
  lng?: number;
  radius?: number;
  maxPricePerNight?: number;
  limit?: number;
  /** Tatsaechliche Event-Daten (nicht das Hotel-Buchungsfenster) fuer Event-Schema. */
  eventStart?: string;
  eventEnd?: string;
}

export const events: CityEvent[] = [
  {
    slug: "das-fest",
    title: "Hotels in Karlsruhe zu Das Fest",
    eyebrow: "Das Fest 2026",
    intro:
      "Das Fest auf dem Mount Klotz ist eines der groessten Open-Air-Festivals Suedwestdeutschlands. Hotels in der Innenstadt buchen ueber das Fest-Wochenende fruehzeitig aus.",
    description:
      "Hotels in Karlsruhe zu Das Fest 2026 - Live-Preise fuer das groesste regionale Open-Air-Festival auf dem Mount Klotz.",
    checkin: "2026-07-23",
    checkout: "2026-07-27",
    address: "Karlsruhe, Deutschland",
    lat: 49.0094,
    lng: 8.4044,
    radius: 3000,
    maxPricePerNight: 400,
    limit: 12,
    eventStart: "2026-07-23",
    eventEnd: "2026-07-26",
  },
  {
    slug: "schlosslichtspiele",
    title: "Hotels in Karlsruhe zu den Schlosslichtspielen",
    eyebrow: "Schlosslichtspiele 2026",
    intro:
      "Die Schlosslichtspiele projizieren jeden Sommer-Abend auf die Schlossfassade. Eines der spektakulaersten Open-Air-Kunstevents Deutschlands, kostenlos.",
    description:
      "Hotels in Karlsruhe zu den Schlosslichtspielen 2026 - Live-Preise fuer den Open-Air-Kunstevent am Schloss.",
    checkin: "2026-08-13",
    checkout: "2026-08-16",
    address: "Karlsruhe Schloss, Deutschland",
    lat: 49.0139,
    lng: 8.4044,
    radius: 2000,
    maxPricePerNight: 350,
    limit: 12,
    eventStart: "2026-08-13",
    eventEnd: "2026-09-13",
  },
  {
    slug: "christkindlesmarkt",
    title: "Hotels in Karlsruhe zum Christkindlesmarkt",
    eyebrow: "Christkindlesmarkt 2026",
    intro:
      "Der Karlsruher Christkindlesmarkt am Marktplatz und Friedrichsplatz ist einer der schoensten Weihnachtsmaerkte Sueddeutschlands. Adventszeit-Hotelnaechte im Zentrum.",
    description:
      "Hotels in Karlsruhe zum Christkindlesmarkt 2026 - Live-Preise fuer die Adventszeit am Marktplatz und Friedrichsplatz.",
    checkin: "2026-12-04",
    checkout: "2026-12-06",
    address: "Karlsruhe Marktplatz, Deutschland",
    lat: 49.0093,
    lng: 8.4046,
    radius: 2000,
    maxPricePerNight: 350,
    limit: 12,
    eventStart: "2026-11-23",
    eventEnd: "2026-12-23",
  },
  {
    slug: "art-karlsruhe",
    title: "Hotels in Karlsruhe zur art Karlsruhe",
    eyebrow: "art Karlsruhe 2027",
    intro:
      "Die art Karlsruhe ist eine der wichtigsten Kunstmessen Deutschlands. Ueber 200 Galerien zeigen Klassische Moderne, Gegenwartskunst und Editionen in den Messehallen.",
    description:
      "Hotels in Karlsruhe zur art Karlsruhe 2027 - Live-Preise und Verfuegbarkeit fuer die Kunstmesse Ende Februar.",
    checkin: "2027-02-18",
    checkout: "2027-02-22",
    address: "Messe Karlsruhe, Rheinstetten",
    lat: 48.9628,
    lng: 8.3411,
    radius: 5000,
    maxPricePerNight: 450,
    limit: 12,
    eventStart: "2027-02-18",
    eventEnd: "2027-02-21",
  },
  {
    slug: "brigande-feschd",
    title: "Hotels in Karlsruhe zum Brigande-Feschd",
    eyebrow: "Brigande-Feschd 2026",
    intro:
      "Das Brigande-Feschd ist das groesste Strassenfest Durlachs. Drei Tage Live-Musik, badische Spezialitaeten und Stadtfest-Atmosphaere in der historischen Altstadt.",
    description:
      "Hotels in Karlsruhe-Durlach zum Brigande-Feschd 2026 - Live-Preise fuer das groesste Durlacher Strassenfest.",
    checkin: "2026-07-03",
    checkout: "2026-07-06",
    address: "Karlsruhe-Durlach, Deutschland",
    lat: 48.9989,
    lng: 8.4747,
    radius: 2500,
    maxPricePerNight: 300,
    limit: 12,
    eventStart: "2026-07-03",
    eventEnd: "2026-07-05",
  },
  {
    slug: "stadtgeburtstag",
    title: "Hotels in Karlsruhe zum Stadtgeburtstag",
    eyebrow: "Stadtgeburtstag",
    intro:
      "Karlsruhe feiert alle fuenf Jahre seinen Stadtgeburtstag mit grossem Buehnenfest am Schlossplatz. 1715 wurde die Faecherstadt gegruendet.",
    description:
      "Hotels in Karlsruhe zum Stadtgeburtstag - Live-Preise fuer das grosse Buehnenfest an Schloss und Marktplatz.",
    checkin: "2030-06-14",
    checkout: "2030-06-17",
    address: "Karlsruhe Innenstadt, Deutschland",
    lat: 49.0094,
    lng: 8.4044,
    radius: 2500,
    maxPricePerNight: 400,
    limit: 12,
    eventStart: "2030-06-14",
    eventEnd: "2030-06-16",
  },
];

export function isUpcoming(event: CityEvent, now = new Date()): boolean {
  return new Date(event.checkin) >= now;
}

export function getEvent(slug: string): CityEvent | undefined {
  return events.find((e) => e.slug === slug);
}
