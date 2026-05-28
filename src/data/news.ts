export type NewsItem = {
  slug: string;
  title: string;
  lead: string;
  summary: string;
  district?: string;
  category: "Tech" | "Wissenschaft" | "Kultur" | "Stadtleben" | "Gastro" | "Verkehr" | "Recht";
  publishedAt: string;
  source: {
    name: string;
    url: string;
    publishedAt: string;
  };
  imageHue: number;
  imageKey?: string;
};

export const news: NewsItem[] = [
  {
    slug: "kit-quantum-computing-fortschritt",
    title: "KIT meldet Fortschritt bei skalierbaren Quantencomputern",
    lead:
      "Forscher des Karlsruher Instituts fuer Technologie demonstrieren erstmals einen ionenbasierten Quantenchip mit ueber 100 fehlerkorrigierten Qubits.",
    summary:
      "Ein Team am KIT-Institut fuer Quantenmaterialien und -technologien hat einen wichtigen Schritt in Richtung praxistauglicher Quantencomputer veroeffentlicht. In Zusammenarbeit mit dem Forschungszentrum Karlsruhe konnte erstmals ein ionenbasierter Chip mit ueber 100 fehlerkorrigierten Qubits stabil betrieben werden. Die Arbeit soll Ende des Monats in Nature Quantum Computing erscheinen. Karlsruhe positioniert sich damit erneut als eines der wichtigsten Quanten-Zentren Europas.",
    district: "oststadt",
    category: "Tech",
    publishedAt: "2026-05-22T09:00:00+02:00",
    source: {
      name: "KIT Pressemitteilung",
      url: "https://www.kit.edu/kit/pi_2026_quantum.php",
      publishedAt: "2026-05-22T08:30:00+02:00",
    },
    imageHue: 3,
  },
  {
    slug: "zkm-immersive-ki-ausstellung",
    title: "ZKM eroeffnet immersive KI-Ausstellung 'Generative Welten'",
    lead:
      "Die neue Wechselausstellung am ZKM zeigt 30 internationale Positionen zu generativer KI in Kunst und Wissenschaft.",
    summary:
      "Das Zentrum fuer Kunst und Medien Karlsruhe eroeffnet am 14. Juni die neue Wechselausstellung 'Generative Welten'. 30 internationale Kuenstlerinnen und Kuenstler zeigen Arbeiten zu generativer KI — von KI-Architektur bis zu interaktiven Klang-Welten. Mit dabei sind Refik Anadol, Anna Ridler und das Karlsruher Atelier ZKM Labor. Eintritt frei am Eroeffnungswochenende.",
    district: "suedweststadt",
    category: "Kultur",
    publishedAt: "2026-05-20T11:00:00+02:00",
    source: {
      name: "BNN Badische Neueste Nachrichten",
      url: "https://www.bnn.de/karlsruhe/zkm-generative-welten",
      publishedAt: "2026-05-20T10:00:00+02:00",
    },
    imageHue: 4,
  },
  {
    slug: "cyberforum-rekord-startups",
    title: "CyberForum meldet Rekord bei Karlsruher Startup-Ansiedlungen",
    lead:
      "Mit 87 neuen Mitgliedsunternehmen hat das CyberForum 2026 das aktivste Jahr seiner Geschichte.",
    summary:
      "Das CyberForum, eines der groessten IT-Cluster Europas, meldet einen Rekord an Startup-Ansiedlungen. Im ersten Halbjahr 2026 sind bereits 87 neue Mitgliedsunternehmen aus den Bereichen KI, Cyber-Security und Industrial-Tech beigetreten. Karlsruhe gilt damit weiterhin als das wichtigste Tech-Cluster Sueddeutschlands jenseits von Muenchen. Besonders erfolgreich seien Ausgruendungen aus dem FZI und dem KIT-Inkubator.",
    district: "oststadt",
    category: "Tech",
    publishedAt: "2026-05-18T14:00:00+02:00",
    source: {
      name: "CyberForum",
      url: "https://www.cyberforum.de/news/2026-mai-rekord",
      publishedAt: "2026-05-18T13:00:00+02:00",
    },
    imageHue: 2,
  },
  {
    slug: "schlosslichtspiele-programm-2026",
    title: "Schlosslichtspiele 2026: Programm steht — vom 13. August bis 14. September",
    lead:
      "Karlsruhes Open-Air-Projection-Mapping-Festival am Schloss laeuft 2026 mit zwoelf Show-Premieren und internationalen Beitraegen.",
    summary:
      "Die Schlosslichtspiele projizieren auch 2026 wieder jeden Abend kostenlos auf die Schlossfassade. Vom 13. August bis 14. September erwartet das Publikum zwoelf Premieren — darunter Beitraege aus Japan, Polen und Brasilien. Highlight ist die Eroeffnungsshow von Maxin10sity 'Genesis 2.0'. Eintritt frei, Beginn jeweils nach Einbruch der Dunkelheit.",
    district: "innenstadt-west",
    category: "Kultur",
    publishedAt: "2026-05-15T10:00:00+02:00",
    source: {
      name: "Stadt Karlsruhe",
      url: "https://www.karlsruhe.de/schlosslichtspiele",
      publishedAt: "2026-05-15T09:30:00+02:00",
    },
    imageHue: 1,
  },
  {
    slug: "bverfg-urteil-digitale-grundrechte",
    title: "Bundesverfassungsgericht entscheidet zu digitalen Grundrechten",
    lead:
      "Der Erste Senat hat in einem viel beachteten Urteil die Datenuebermittlung an US-Cloudanbieter eingeschraenkt.",
    summary:
      "Das Bundesverfassungsgericht Karlsruhe hat in einem viel beachteten Urteil entschieden, dass die Datenuebermittlung deutscher Behoerden an US-Cloudanbieter strengere Voraussetzungen erfuellen muss. Der Erste Senat sah in der bisherigen Praxis einen Verstoss gegen das Grundrecht auf informationelle Selbstbestimmung. Datenschuetzer begruessen das Urteil — die Behoerden mussten innerhalb von 18 Monaten ihre Cloud-Strategien anpassen.",
    district: "innenstadt-west",
    category: "Recht",
    publishedAt: "2026-05-12T16:00:00+02:00",
    source: {
      name: "Bundesverfassungsgericht",
      url: "https://www.bundesverfassungsgericht.de/SharedDocs/Pressemitteilungen/DE/2026/bvg26-018.html",
      publishedAt: "2026-05-12T15:30:00+02:00",
    },
    imageHue: 5,
  },
  {
    slug: "das-fest-2026-line-up",
    title: "Das Fest 2026: Headliner steht fest — Deichkind und K.I.Z.",
    lead:
      "Das Fest auf dem Mount Klotz hat das Line-Up fuer 2026 veroeffentlicht. Deichkind und K.I.Z. headlinen am Wochenende vom 23.-26. Juli.",
    summary:
      "Karlsruhes groesstes Open-Air-Festival Das Fest hat das Line-Up 2026 veroeffentlicht. Vom 23. bis 26. Juli stehen ueber 60 Bands auf den drei Buehnen am Mount Klotz, darunter Deichkind, K.I.Z., AnnenMayKantereit und internationale Top-Acts. Eintritt bleibt kostenlos. Mit 250.000 erwarteten Besuchern ist Das Fest eines der groessten kostenlosen Festivals Europas.",
    district: "suedstadt",
    category: "Kultur",
    publishedAt: "2026-05-10T12:00:00+02:00",
    source: {
      name: "Das Fest",
      url: "https://dasfest.de/news/line-up-2026",
      publishedAt: "2026-05-10T11:00:00+02:00",
    },
    imageHue: 3,
  },
  {
    slug: "kvv-stadtbahn-erweiterung",
    title: "KVV beschliesst Stadtbahn-Erweiterung nach Wolfartsweier",
    lead:
      "Der Karlsruher Verkehrsverbund baut die Tram-Bahn-Linie S2 bis 2029 weiter. 1,8 Kilometer Neutrasse Richtung Sueden.",
    summary:
      "Der Karlsruher Verkehrsverbund hat die Erweiterung der Stadtbahnlinie S2 nach Wolfartsweier beschlossen. Bis 2029 entstehen 1,8 Kilometer Neutrasse mit vier neuen Haltestellen. Investitionsvolumen: 78 Millionen Euro. Das Karlsruher Modell — Stadtbahn-Tram-Hybrid — bleibt damit Vorbild fuer den OePNV-Ausbau in mittleren Grossstaedten.",
    district: "durlach",
    category: "Verkehr",
    publishedAt: "2026-05-08T09:00:00+02:00",
    source: {
      name: "KVV Pressemitteilung",
      url: "https://www.kvv.de/aktuelles/2026-05-s2-wolfartsweier",
      publishedAt: "2026-05-08T08:00:00+02:00",
    },
    imageHue: 4,
  },
  {
    slug: "fzi-it-sicherheit-eu-foerderung",
    title: "FZI erhaelt 12 Millionen Euro EU-Foerderung fuer IT-Sicherheit",
    lead:
      "Das Forschungszentrum Informatik Karlsruhe ist Lead-Partner eines neuen Horizon-Europe-Konsortiums zur Quanten-Kryptographie.",
    summary:
      "Das FZI Forschungszentrum Informatik Karlsruhe leitet ein neues Horizon-Europe-Konsortium zur Quanten-Kryptographie. Insgesamt 12 Millionen Euro Foerdermittel fliessen ueber drei Jahre in das Projekt QSAFE-EU, an dem sieben europaeische Partner beteiligt sind. Karlsruhe positioniert sich damit als zentraler Akteur fuer post-quantum-sichere IT-Infrastrukturen.",
    district: "oststadt",
    category: "Wissenschaft",
    publishedAt: "2026-05-05T11:30:00+02:00",
    source: {
      name: "FZI Pressestelle",
      url: "https://www.fzi.de/news/qsafe-eu-2026",
      publishedAt: "2026-05-05T10:45:00+02:00",
    },
    imageHue: 2,
  },
  {
    slug: "tollhaus-zeltival-line-up",
    title: "Zeltival 2026 im Tollhaus: World-Music-Programm steht",
    lead:
      "Das Zeltival, Karlsruhes Sommer-World-Music-Festival im Tollhaus-Innenhof, eroeffnet am 12. Juli mit Tinariwen.",
    summary:
      "Das Karlsruher Tollhaus hat das Programm fuer das Zeltival 2026 veroeffentlicht. Sieben Wochen World-Music im Innenhof des alten Schlachthofs, eroeffnet wird mit der Wuestenblues-Band Tinariwen aus Mali. Weitere Acts: Lila Downs, Asaf Avidan, Mariza und das Karlsruher Pochontas Orchestra.",
    district: "suedstadt",
    category: "Kultur",
    publishedAt: "2026-05-02T14:00:00+02:00",
    source: {
      name: "Tollhaus",
      url: "https://www.tollhaus.de/zeltival/2026",
      publishedAt: "2026-05-02T13:30:00+02:00",
    },
    imageHue: 5,
  },
];

export const getNewsItem = (slug: string) => news.find((n) => n.slug === slug);
export const recentNews = (limit = 6) =>
  [...news]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
