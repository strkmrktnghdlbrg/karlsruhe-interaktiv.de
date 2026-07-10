import type { NewsItem } from "../../data/news";

/**
 * Englische Inhalts-Overrides fuer News-Artikel.
 * Gekeyt nach dem DEUTSCHEN slug. Enthaelt den neuen englischen slug
 * sowie alle uebersetzten Textfelder. Nicht uebersetzt werden
 * publishedAt, source.url, imageHue, imageKey, district (kommen aus dem Basis-Eintrag).
 */
export type NewsEn = {
  slug: string;
  title: string;
  lead: string;
  summary: string;
  category: string;
  source: { name: string };
};

export const newsEn: Record<string, NewsEn> = {
  "kit-quantum-computing-fortschritt": {
    slug: "kit-quantum-computing-breakthrough",
    title: "KIT reports progress towards scalable quantum computers",
    lead:
      "Researchers at the Karlsruhe Institute of Technology have, for the first time, demonstrated an ion-based quantum chip with more than 100 error-corrected qubits.",
    summary:
      "A team at the KIT Institute for Quantum Materials and Technologies has published a major step towards practical quantum computers. Working with the Karlsruhe Research Centre, the group ran an ion-based chip with more than 100 error-corrected qubits in stable operation for the first time. The work is due to appear in Nature Quantum Computing later this month. With it, Karlsruhe once again positions itself as one of Europe's most important quantum hubs.",
    category: "Tech",
    source: { name: "KIT Press Release" },
  },
  "zkm-immersive-ki-ausstellung": {
    slug: "zkm-immersive-ai-exhibition",
    title: "ZKM opens immersive AI exhibition 'Generative Worlds'",
    lead:
      "The new temporary exhibition at the ZKM presents 30 international positions on generative AI in art and science.",
    summary:
      "The ZKM Center for Art and Media Karlsruhe opens its new temporary exhibition 'Generative Worlds' on 14 June. Thirty international artists present works on generative AI - from AI architecture to interactive sound worlds. Among the contributors are Refik Anadol, Anna Ridler and the Karlsruhe studio ZKM Labor. Admission is free during the opening weekend.",
    category: "Culture",
    source: { name: "BNN Badische Neueste Nachrichten" },
  },
  "cyberforum-rekord-startups": {
    slug: "cyberforum-record-startups",
    title: "CyberForum reports record number of Karlsruhe startup arrivals",
    lead:
      "With 87 new member companies, the CyberForum is having the most active year in its history in 2026.",
    summary:
      "The CyberForum, one of the largest IT clusters in Europe, reports a record number of startup arrivals. In the first half of 2026 alone, 87 new member companies from the fields of AI, cyber security and industrial tech have joined. Karlsruhe thus remains the most important tech cluster in southern Germany outside Munich. Spin-offs from the FZI and the KIT incubator have been particularly successful.",
    category: "Tech",
    source: { name: "CyberForum" },
  },
  "schlosslichtspiele-programm-2026": {
    slug: "schlosslichtspiele-programme-2026",
    title: "Schlosslichtspiele 2026: line-up confirmed - 13 August to 14 September",
    lead:
      "Karlsruhe's open-air projection-mapping festival at the palace returns in 2026 with twelve show premieres and international contributions.",
    summary:
      "The Schlosslichtspiele will once again be projected onto the palace facade free of charge every evening in 2026. From 13 August to 14 September, audiences can look forward to twelve premieres - including contributions from Japan, Poland and Brazil. The highlight is the opening show by Maxin10sity, 'Genesis 2.0'. Admission is free, with each show starting after dark.",
    category: "Culture",
    source: { name: "City of Karlsruhe" },
  },
  "bverfg-urteil-digitale-grundrechte": {
    slug: "constitutional-court-digital-rights-ruling",
    title: "Federal Constitutional Court rules on digital fundamental rights",
    lead:
      "In a closely watched judgment, the First Senate has placed limits on the transfer of data to US cloud providers.",
    summary:
      "The Federal Constitutional Court in Karlsruhe has ruled in a closely watched judgment that the transfer of data by German public authorities to US cloud providers must meet stricter requirements. The First Senate found that the previous practice breached the fundamental right to informational self-determination. Data protection advocates welcomed the ruling - the authorities had to adapt their cloud strategies within 18 months.",
    category: "Law",
    source: { name: "Federal Constitutional Court" },
  },
  "das-fest-2026-line-up": {
    slug: "das-fest-2026-line-up",
    title: "Das Fest 2026: headliners confirmed - Deichkind and K.I.Z.",
    lead:
      "Das Fest on Mount Klotz has revealed its 2026 line-up. Deichkind and K.I.Z. headline the weekend of 23–26 July.",
    summary:
      "Karlsruhe's biggest open-air festival, Das Fest, has unveiled its 2026 line-up. From 23 to 26 July, more than 60 bands will perform across the three stages on Mount Klotz, among them Deichkind, K.I.Z., AnnenMayKantereit and international top acts. Admission remains free. With 250,000 visitors expected, Das Fest is one of the largest free festivals in Europe.",
    category: "Culture",
    source: { name: "Das Fest" },
  },
  "kvv-stadtbahn-erweiterung": {
    slug: "kvv-light-rail-extension-wolfartsweier",
    title: "KVV approves light-rail extension to Wolfartsweier",
    lead:
      "The Karlsruhe Transport Authority is extending tram-train line S2 by 2029. A new 1.8-kilometre stretch heading south.",
    summary:
      "The Karlsruhe Transport Authority has approved the extension of light-rail line S2 to Wolfartsweier. By 2029, a new 1.8-kilometre stretch with four new stops will be built, at an investment of 78 million euros. The Karlsruhe Model - its tram-train hybrid - thus remains a blueprint for public transport expansion in mid-sized cities.",
    category: "Transport",
    source: { name: "KVV Press Release" },
  },
  "fzi-it-sicherheit-eu-foerderung": {
    slug: "fzi-it-security-eu-funding",
    title: "FZI receives 12 million euros in EU funding for IT security",
    lead:
      "The FZI Research Center for Information Technology in Karlsruhe is the lead partner of a new Horizon Europe consortium on quantum cryptography.",
    summary:
      "The FZI Research Center for Information Technology in Karlsruhe is leading a new Horizon Europe consortium on quantum cryptography. A total of 12 million euros in funding will flow over three years into the QSAFE-EU project, which brings together seven European partners. With it, Karlsruhe positions itself as a key player in post-quantum-secure IT infrastructure.",
    category: "Science",
    source: { name: "FZI Press Office" },
  },
  "tollhaus-zeltival-line-up": {
    slug: "tollhaus-zeltival-line-up",
    title: "Zeltival 2026 at the Tollhaus: world-music programme confirmed",
    lead:
      "The Zeltival, Karlsruhe's summer world-music festival in the Tollhaus courtyard, opens on 12 July with Tinariwen.",
    summary:
      "The Karlsruhe Tollhaus has announced the programme for Zeltival 2026. Seven weeks of world music in the courtyard of the former slaughterhouse open with the desert-blues band Tinariwen from Mali. Further acts include Lila Downs, Asaf Avidan, Mariza and the Karlsruhe-based Pochontas Orchestra.",
    category: "Culture",
    source: { name: "Tollhaus" },
  },
};

export const getNewsEn = (slug: string) => newsEn[slug];
