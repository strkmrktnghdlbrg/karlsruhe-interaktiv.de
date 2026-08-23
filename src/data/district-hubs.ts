/**
 * Redaktionelle Stadtteil-Hubs.
 *
 * Die Bezirksseiten listeten bisher nur, was ohnehin in den Daten steht:
 * Sehenswuerdigkeiten, Hotels, Restaurants des Bezirks. Damit rankt eine
 * Stadtteilseite nicht - der Wettbewerb gewinnt diese Queries mit echten
 * Viertel-Portraets. Hier liegt der redaktionelle Teil: Charakter, Geschichte,
 * Alltag, Verkehr, dazu Zahlen und FAQ.
 *
 * Prototypen sind Weststadt und Durlach. Die uebrigen Bezirke laufen weiter
 * ueber die Basisdaten, bis ihr Hub geschrieben ist - `hub` ist optional.
 *
 * REDAKTIONSREGEL wie ueberall: Zahlen nur mit Quelle unter `sources`.
 */
import type { GuideSection, FactTable, GuideSource } from "./sight-guides";

export type DistrictHub = {
  /** Ersetzt den kurzen longDesc-Absatz auf der Bezirksseite. */
  intro: string;
  facts?: FactTable[];
  sections?: GuideSection[];
  faqs?: { q: string; a: string }[];
  sources?: GuideSource[];
};

export const districtHubs: Record<string, DistrictHub> = {
  // ==========================================================================
  // WESTSTADT - Prototyp. Rankt bereits fuer Strassen-Queries, aber zu duenn.
  // ==========================================================================
  weststadt: {
    intro:
      "Die Weststadt ist Karlsruhes dichtestes Wohnviertel und für viele das, was sie sich unter Karlsruher Stadtleben vorstellen: Gründerzeitblöcke, Bäume in den Straßen, kleine Läden im Erdgeschoss und mit dem Gutenbergplatz ein Zentrum, das an Markttagen die halbe Stadt anzieht. Sie liegt direkt westlich der Innenstadt, zwischen Mühlburger Tor und Yorckstraße, und ist von dort in wenigen Minuten zu Fuß erreichbar. Auf nur 173 Hektar leben über 21.000 Menschen.",
    facts: [
      {
        title: "Die Weststadt in Zahlen",
        rows: [
          { label: "Fläche", value: "173 Hektar" },
          { label: "Einwohner", value: "über 21.000" },
          { label: "Straßen im Stadtteil", value: "83" },
          { label: "Entstanden", value: "ab den 1870er Jahren" },
          { label: "Zentraler Platz", value: "Gutenbergplatz, angelegt 1900 bis 1904" },
          { label: "Wochenmarkt", value: "dienstags, donnerstags und samstags" },
        ],
      },
    ],
    sections: [
      {
        heading: "Vom Militärviertel zum Wohnquartier",
        body:
          "Die Weststadt entstand ab den 1870er Jahren, zunächst als Industrie- und Militärviertel in unmittelbarer Nachbarschaft zur Innenstadt. Diese Herkunft erklärt den Zuschnitt: gerade, breite Achsen und ein dichtes, gleichmäßiges Raster, das sich deutlich vom barocken Fächer östlich davon unterscheidet.\n\nAus dem Arbeits- wurde ein Wohnviertel. Der Gebäudebestand aus der Gründerzeit ist weitgehend erhalten und prägt heute den Ruf der Weststadt als eines der begehrtesten Karlsruher Wohnquartiere.",
      },
      {
        heading: "Gutenbergplatz und der älteste Markt der Stadt",
        body:
          "Der Gutenbergplatz wurde zwischen 1900 und 1904 angelegt und steht zusammen mit den umliegenden Straßenzügen als Gesamtanlage unter Denkmalschutz. Er ist das Zentrum des Viertels und gilt als einer der schönsten Plätze der Stadt.\n\nDreimal in der Woche, dienstags, donnerstags und samstags, findet hier der Wochenmarkt statt, der älteste Markt Karlsruhes. Er zieht Händler und Kundschaft aus der ganzen Region an und ist der Grund, warum auch Nicht-Weststädter regelmäßig in dieses Viertel kommen.",
      },
      {
        heading: "Essen, Einkaufen und Alltag",
        body:
          "Das Viertel funktioniert kleinteilig: Bäckereien, Metzgereien, Cafés und Restaurants liegen in den Erdgeschossen der Wohnhäuser statt in einem Zentrum. Rund um den Gutenbergplatz und entlang der Kaiserallee ist die Dichte am höchsten. Wer in Karlsruhe ohne Auto leben will, ist hier gut aufgehoben, weil sich fast alles zu Fuß erledigen lässt.",
      },
      {
        heading: "Verkehr und Anbindung",
        body:
          "Die Kaiserallee ist die Hauptachse der Weststadt und zugleich ihre Straßenbahnverbindung nach Westen Richtung Mühlburg und nach Osten in die Innenstadt. Das Mühlburger Tor am östlichen Rand ist einer der wichtigsten Umsteigepunkte im Karlsruher Netz.\n\nZur Fußgängerzone und zum Europaplatz sind es von den meisten Adressen der Weststadt keine 15 Gehminuten, zum Schloss und zum Botanischen Garten ähnlich weit.",
      },
    ],
    faqs: [
      {
        q: "Wo liegt die Weststadt in Karlsruhe?",
        a: "Direkt westlich der Innenstadt, zwischen Mühlburger Tor und Yorckstraße. Von der Fußgängerzone sind es zu Fuß meist keine 15 Minuten.",
      },
      {
        q: "Wann ist Wochenmarkt am Gutenbergplatz?",
        a: "Dreimal wöchentlich: dienstags, donnerstags und samstags. Es ist der älteste Markt Karlsruhes und zieht Händler aus der gesamten Region an.",
      },
      {
        q: "Ist die Weststadt eine gute Wohngegend?",
        a: "Die Weststadt gilt als eines der begehrtesten Karlsruher Wohnviertel: erhaltene Gründerzeitbebauung, kurze Wege in die Innenstadt, dichte Nahversorgung und mit dem Gutenbergplatz ein echtes Viertelzentrum. Auf 173 Hektar leben über 21.000 Menschen, entsprechend dicht ist es bebaut.",
      },
      {
        q: "Wie viele Straßen hat die Weststadt?",
        a: "83 Straßen laut dem amtlichen Straßenbestand. Zu jeder einzelnen findet sich im Karlsruher Straßenverzeichnis die Herkunft des Namens.",
      },
    ],
    sources: [
      { label: "Stadtwiki Karlsruhe, Gutenbergplatz", url: "https://ka.stadtwiki.net/Gutenbergplatz", retrieved: "23.08.2026" },
      { label: "Wochenmarkt Gutenbergplatz, karlsruhe-erleben.de", url: "https://www.karlsruhe-erleben.de/veranstaltung/wochenmarkt-gutenbergplatz-6b2cbe4aeb", retrieved: "23.08.2026" },
    ],
  },

  // ==========================================================================
  // DURLACH - offenste Stadtteil-SERP im Wettbewerbsvergleich (40.500 SV)
  // ==========================================================================
  durlach: {
    intro:
      "Durlach ist älter als Karlsruhe. Bis 1715 residierten hier die Markgrafen von Baden, dann zog der Hof in die neu gegründete Fächerstadt einige Kilometer weiter westlich, und Durlach blieb zurück, was sich bis heute anfühlen lässt: eine eigenständige Altstadt mit Marktplatz, Fachwerk und Schloss, die 1938 eingemeindet wurde und trotzdem nie zum Stadtteil im üblichen Sinn geworden ist. Über allem liegt der Turmberg mit dem ältesten Aussichtsturm Deutschlands. Für Besucher ist Durlach das lohnendste Ziel außerhalb des Karlsruher Zentrums.",
    facts: [
      {
        title: "Durlach in Zahlen",
        rows: [
          { label: "Erste Residenz", value: "bis 1715 Sitz der Markgrafen von Baden" },
          { label: "Eingemeindung", value: "1938" },
          { label: "Straßen im Stadtteil", value: "258, der größte Straßenbestand aller Karlsruher Stadtteile" },
          { label: "Wahrzeichen", value: "Turmberg mit dem ältesten Aussichtsturm Deutschlands" },
          { label: "Turmbergbahn", value: "seit März 2026 außer Betrieb, Neubau geplant bis Ende 2027" },
          { label: "Anbindung", value: "Stadtbahn ab Karlsruhe Hauptbahnhof und Innenstadt" },
        ],
      },
    ],
    sections: [
      {
        heading: "Die Altstadt und die Karlsburg",
        body:
          "Der Durlacher Marktplatz mit dem Rathaus und den umliegenden Gassen ist der historische Kern. Wenige Schritte entfernt steht die Karlsburg, die Renaissance-Residenz der Markgrafen, aus der Karlsruhe hervorging. In ihr sitzt heute das Pfinzgaumuseum mit der Stadtgeschichte Durlachs.\n\nZur Altstadt gehören außerdem die Mehlwaage, das historische Waagegebäude am Marktplatz, und das Basler Tor als letzter erhaltener Teil der alten Stadtbefestigung. Der Rundgang durch den Kern dauert keine Stunde und ist der Grund, warum Durlach als Ausflugsziel funktioniert.",
      },
      {
        heading: "Turmberg: Aussicht über die Rheinebene",
        body:
          "Der Turmberg ist Karlsruhes Hausberg. Der quadratische Bergfried der ehemaligen Burg ist der älteste Aussichtsturm Deutschlands, von oben reicht der Blick bei klarer Sicht bis zum Pfälzerwald.\n\nWichtig für die Planung: Die Turmbergbahn von 1888, jahrzehntelang Deutschlands älteste noch betriebene Standseilbahn, ist seit März 2026 außer Betrieb. Sie wird barrierefrei neu gebaut und bis zur B3 verlängert, die Wiederinbetriebnahme ist für Ende 2027 vorgesehen. Bis dahin führt der Weg nach oben über die Turmbergtreppe, was Kondition verlangt, aber machbar ist.",
      },
      {
        heading: "Essen, Feste und Alltag",
        body:
          "Die Pfinztalstraße ist Durlachs Einkaufsstraße, rund um den Marktplatz liegen die Gastronomie und die Cafés. Der Charakter ist ausgesprochen lokal: Durlach versorgt sich selbst und ist nicht auf Laufkundschaft aus der Karlsruher Innenstadt angewiesen.\n\nEinmal im Jahr wird die Altstadt zum Festgelände: Das Brigande-Feschd ist das größte Durlacher Straßenfest, drei Tage Live-Musik und badische Küche in den Gassen. Wer den Ort in seiner besten Verfassung sehen will, kommt zu diesem Termin.",
      },
      {
        heading: "Verkehr und Anbindung",
        body:
          "Durlach ist über die Stadtbahn direkt an Hauptbahnhof und Innenstadt angebunden, dazu kommt der Bahnhof Karlsruhe-Durlach als Halt im Regionalverkehr. Mit dem Auto führt die Durlacher Allee stadteinwärts.\n\nWeil die Wege innerhalb Durlachs kurz sind, lässt sich ein Besuch gut kombinieren: Altstadt und Karlsburg zu Fuß, danach der Aufstieg zum Turmberg, im Sommer das Turmbergbad am Fuß des Bergs.",
      },
    ],
    faqs: [
      {
        q: "Was kann man in Durlach machen?",
        a: "Die Altstadt mit Marktplatz, Karlsburg, Pfinzgaumuseum, Mehlwaage und Basler Tor erkunden und anschließend auf den Turmberg steigen, den Aussichtspunkt über der Rheinebene. Im Sommer kommt das Turmbergbad dazu, einmal jährlich das Brigande-Feschd.",
      },
      {
        q: "Fährt die Turmbergbahn?",
        a: "Nein. Die Turmbergbahn ist seit März 2026 außer Betrieb und wird barrierefrei neu gebaut und bis zur B3 verlängert. Der Betrieb soll Ende 2027 wieder aufgenommen werden. Bis dahin führt der Weg nach oben über die Turmbergtreppe.",
      },
      {
        q: "Warum ist Durlach älter als Karlsruhe?",
        a: "Weil Durlach bis 1715 die Residenz der Markgrafen von Baden war. Erst dann ließ Markgraf Karl Wilhelm einige Kilometer weiter westlich das Schloss Karlsruhe bauen und verlegte den Hof dorthin. Durlach wurde 1938 nach Karlsruhe eingemeindet.",
      },
      {
        q: "Wie kommt man von Karlsruhe nach Durlach?",
        a: "Mit der Stadtbahn direkt vom Hauptbahnhof oder aus der Innenstadt. Zusätzlich hält der Regionalverkehr am Bahnhof Karlsruhe-Durlach. Mit dem Auto führt die Durlacher Allee hin.",
      },
      {
        q: "Was ist die Karlsburg in Durlach?",
        a: "Die Renaissance-Residenz der Markgrafen von Baden und damit der Vorgängerbau des Karlsruher Schlosses. Heute beherbergt sie das Pfinzgaumuseum zur Geschichte Durlachs und des Pfinzgaus.",
      },
    ],
    sources: [
      { label: "VBK, Turmbergbahn", url: "https://www.vbk.info/fahrzeuge/turmbergbahn.html", retrieved: "23.08.2026" },
      { label: "Durlacher.de, Baumaßnahmen an der Turmbergbahn", url: "https://www.durlacher.de/", retrieved: "23.08.2026" },
    ],
  },
};

export const getDistrictHub = (slug: string): DistrictHub | undefined => districtHubs[slug];
