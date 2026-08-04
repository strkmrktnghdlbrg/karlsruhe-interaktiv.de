export const city = {
  name: "Karlsruhe",
  nameEn: "Karlsruhe",
  slug: "karlsruhe",
  country: "Deutschland",
  countryCode: "DE",
  population: 308_000,
  coordinates: [49.0094, 8.4044] as [number, number],
  languages: ["de"] as const,
  defaultLocale: "de",
  domain: "https://www.karlsruhe-interaktiv.de",
  description: {
    short:
      "Karlsruhe interaktiv. Faecherstadt, KIT, ZKM und Bundesverfassungsgericht. Sehenswürdigkeiten, Hotels, Bezirke, Tech-News auf einem Portal.",
    long:
      "Karlsruhe-Interaktiv ist das Stadtportal für die Faecherstadt. Vom Schloss bis zum ZKM, vom KIT bis zum Bundesverfassungsgericht, vom Schlosslichtspiele-Sommer bis zur Tech-Startup-Szene rund um das CyberForum.",
    // Englische Fassung fuer /en/ - vorher erbte die englische Startseite
    // Titel und Description auf Deutsch.
    longEn:
      "Karlsruhe-Interaktiv is the city guide to the fan-shaped city. From the palace to the ZKM, from the KIT to the Federal Constitutional Court, from the Schlosslichtspiele projection summer to the tech startup scene around the CyberForum.",
  },
  stats: {
    sights: 25,
    hotels: 18,
    restaurants: 30,
    districts: 14,
  },
};
