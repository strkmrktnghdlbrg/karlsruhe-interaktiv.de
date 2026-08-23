/**
 * Englische Besucher-Guides, Gegenstueck zu src/data/sight-guides.ts.
 *
 * Hintergrund: "zkm center for art and media" und "zkm center for art and media
 * karlsruhe" wurden mal von der deutschen, mal von der englischen URL
 * beantwortet - beide um Position 43 bis 46. Die hreflang-Paarung stimmt, es
 * fehlte der englischen Seite schlicht der Inhalt, um die bessere Antwort auf
 * die englische Query zu sein. Deshalb liegt der Guide hier auf Englisch vor
 * und nicht als Uebersetzungshuelle.
 *
 * Gekeyt nach dem DEUTSCHEN Sight-Slug, wie alle anderen i18n/en-Dateien.
 */
import type { SightGuide } from "../../data/sight-guides";

export const sightGuidesEn: Record<string, SightGuide> = {
  zkm: {
    intro:
      "ZKM Center for Art and Media Karlsruhe is the only museum in the world dedicated systematically to electronic and digital art. It occupies a listed industrial hall in Karlsruhe's Suedweststadt district, a former munitions factory, and brings together the Media Museum, the Museum of Contemporary Art, research institutes and a cinema under one roof. This page collects the practical visitor information: opening hours, admission prices, the free Friday afternoon and how to get there.",
    facts: [
      {
        title: "Opening hours",
        note: "The exhibitions are closed on Mondays and Tuesdays. Hours may differ on public holidays.",
        rows: [
          { label: "Exhibitions, Wed to Fri", value: "10am to 6pm" },
          { label: "Exhibitions, Sat and Sun", value: "11am to 6pm" },
          { label: "Exhibitions, Mon and Tue", value: "closed" },
          { label: "Info desk, Wed to Fri", value: "9am to 6pm" },
          { label: "Media library, Wed to Fri", value: "10am to 6pm" },
          { label: "Media library, Sat and Sun", value: "1pm to 6pm" },
          { label: "Shop", value: "Wed to Sun 11am to 6pm" },
        ],
      },
      {
        title: "Admission",
        rows: [
          { label: "Standard", value: "14.00 EUR" },
          { label: "Reduced", value: "10.00 EUR" },
          { label: "Family ticket, two adults with children under 18", value: "26.00 EUR" },
          { label: "Children and young people under 18", value: "free" },
          { label: "Evening rate from 4:30pm", value: "8.00 EUR for everyone aged 18 and over" },
          { label: "Fridays from 2pm", value: "free admission to the exhibitions" },
        ],
      },
    ],
    sections: [
      {
        heading: "What you will see",
        body:
          "The ZKM is a museum built for trying things out rather than walking past them. The collection ranges from early computer art through interactive installations to virtual-reality works, and a large share of it invites you to take part. On top of that come the temporary exhibitions, which frequently fill an entire floor.\n\nThe building is part of the attraction. The hall was completed in 1918 as a munitions factory, and its concrete structure was deliberately left visible during the conversion. Together with the neighbouring University of Arts and Design it forms an area that feels more like a campus than a classical museum.",
      },
      {
        heading: "When to go",
        body:
          "Admission to the exhibitions is free every Friday from 2pm. If your schedule allows it, that is the slot to aim for; the hall is large enough that the crowd spreads out. From 4:30pm on any opening day the evening rate of 8 EUR applies.\n\nPlan around three hours for the Media Museum and the current temporary exhibitions. Children and young people under 18 always enter free of charge, which makes the ZKM one of the cheapest family destinations in the city.",
      },
      {
        heading: "Getting there",
        body:
          "The ZKM is at Lorenzstrasse 19, 76135 Karlsruhe, with the main entrance facing Platz der Menschenrechte. It is a few minutes by tram from Karlsruhe main station and from the city centre. Reduced admission is granted with the Deutschland-Ticket, the JugendticketBW and the bwtarif, which is one more reason to arrive on public transport.",
      },
    ],
    faqs: [
      {
        q: "How much does it cost to visit the ZKM in Karlsruhe?",
        a: "Standard admission is 14.00 EUR and the reduced rate is 10.00 EUR; the family ticket costs 26.00 EUR. Children and young people under 18 enter free. From 4:30pm an evening rate of 8.00 EUR applies (source: zkm.de).",
      },
      {
        q: "When is admission to the ZKM free?",
        a: "Every Friday from 2pm admission to the ZKM exhibitions is free. Children and young people under 18 always enter free of charge.",
      },
      {
        q: "What are the ZKM opening hours?",
        a: "Wednesday to Friday from 10am to 6pm and Saturday and Sunday from 11am to 6pm. The exhibitions are closed on Mondays and Tuesdays.",
      },
      {
        q: "Where is the ZKM Center for Art and Media?",
        a: "At Lorenzstrasse 19 in 76135 Karlsruhe, in the Suedweststadt district. The main entrance is on Platz der Menschenrechte, next to the University of Arts and Design.",
      },
      {
        q: "How long do you need at the ZKM?",
        a: "Allow around three hours for the Media Museum and the current temporary exhibitions. Because many works are interactive, a visit takes longer than in a classical art museum.",
      },
    ],
    sources: [
      { label: "ZKM Karlsruhe, admission prices", url: "https://zkm.de/en/admission-prices", retrieved: "23.08.2026" },
      { label: "ZKM Karlsruhe, opening hours", url: "https://zkm.de/en/opening-hours", retrieved: "23.08.2026" },
    ],
  },
};

export const getSightGuideEn = (slug: string): SightGuide | undefined => sightGuidesEn[slug];
