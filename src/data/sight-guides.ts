/**
 * Ausführliche Besucher-Guides für einzelne Sehenswürdigkeiten.
 *
 * Warum getrennt von sights.ts: Die Basisdaten dort beschreiben jeden Ort in
 * zwei Absätzen und tragen die Übersichtsseiten. Für die Money-POIs
 * (Europabad, Zoo, Schloss, ZKM, Ettlinger Tor) reicht das nicht - dort
 * entscheidet die Tiefe der Besucherinfo über das Ranking. Diese Datei
 * ergänzt sie um Preise, Zeiten, Anfahrt, Kapitel und FAQ.
 *
 * REDAKTIONSREGEL: Jede Zahl in `facts` und in den Kapiteln stammt aus einer
 * belegten Quelle, die unter `sources` mit Abrufdatum steht. Preise und Zeiten
 * ändern sich - deshalb steht auf der Seite immer der Stand und der Hinweis,
 * dass die Angaben des Betreibers verbindlich sind. Nichts schätzen, nichts
 * aus dem Gedächtnis ergänzen: lieber eine Zeile weniger.
 */

export type FactRow = {
  label: string;
  value: string;
};

export type FactTable = {
  title: string;
  /** Kurzer Kontext über der Tabelle, z. B. Tarifsystem in einem Satz. */
  note?: string;
  rows: FactRow[];
};

export type GuideSection = {
  heading: string;
  /** Ein bis drei Absätze, mit \n\n getrennt. */
  body: string;
  bullets?: string[];
};

export type GuideSource = {
  label: string;
  url: string;
  /** Abrufdatum im Format TT.MM.JJJJ. */
  retrieved: string;
};

export type SightGuide = {
  /** Ersetzt den kurzen longDesc-Absatz als Einstieg. */
  intro: string;
  facts?: FactTable[];
  sections?: GuideSection[];
  faqs?: { q: string; a: string }[];
  /** Interne Weiterfuehrung, z. B. von der POI-Seite in die passende Liste. */
  related?: { label: string; href: string }[];
  sources?: GuideSource[];
};

export const sightGuides: Record<string, SightGuide> = {
  // ==========================================================================
  // EUROPABAD - größtes unbespieltes Suchvolumen im Portfolio (49.500/Monat)
  // ==========================================================================
  europabad: {
    intro:
      "Das Europabad Karlsruhe ist das große Erlebnis- und Familienbad der Stadt: acht Rutschen, ein 32 Grad warmes Erlebnisbecken, ein Außenbereich und eine weitläufige Saunalandschaft mit karelischem Saunadorf. Es liegt an der Hermann-Veit-Straße neben der Europahalle, rund zwei Kilometer südwestlich der Innenstadt. Diese Seite fasst zusammen, was du vor dem Besuch wissen willst: Öffnungszeiten der einzelnen Bereiche, das Tarifsystem mit seinen Zeitfenstern, alle Rutschen mit Mindestalter und Länge sowie die günstigen Tage.",
    facts: [
      {
        title: "Öffnungszeiten",
        note: "Kassenschluss ist 60 Minuten, Bade- und Saunaschluss 30 Minuten vor Badschließung.",
        rows: [
          { label: "Erlebnisbad und Sauna, Mo bis Sa", value: "10:00 bis 23:00 Uhr" },
          { label: "Erlebnisbad und Sauna, So", value: "10:00 bis 21:00 Uhr" },
          { label: "Feiertage", value: "wie an Werktagen geöffnet" },
          { label: "Rutschenturm, Mo bis Do", value: "12:00 bis 21:00 Uhr" },
          { label: "Wildwasserfluss, Mo bis Do", value: "13:00 bis 21:00 Uhr" },
          { label: "Rutschen in den Karlsruher Schulferien, Mo bis Sa", value: "10:00 bis 22:20 Uhr" },
          { label: "Excalibur- und Druiden-Sauna, Mo bis Fr", value: "13:00 bis 23:00 Uhr" },
          { label: "Kalevala Sauna, Mo bis Fr", value: "16:00 bis 23:00 Uhr" },
          { label: "Karelisches Saunadorf, Mo bis Sa", value: "11:00 bis 23:00 Uhr" },
        ],
      },
      {
        title: "Eintrittspreise Erlebnisbad ohne Sauna",
        note: "Das Europabad rechnet nach Zeitfenstern ab. Wochenende, Feiertage, Brückentage und Karlsruher Schulferien kosten durchgehend mehr als ein Werktag außerhalb der Ferien. Ermäßigt gilt, wer unter 18 Jahre alt ist.",
        rows: [
          { label: "Tageskarte Erwachsene, Sa/So/Feiertag/Ferien", value: "26,00 EUR" },
          { label: "Tageskarte Erwachsene, Mo bis Fr außerhalb der Ferien", value: "22,00 EUR" },
          { label: "Tageskarte Ermäßigte, Sa/So/Feiertag/Ferien", value: "21,00 EUR" },
          { label: "Tageskarte Ermäßigte, Mo bis Fr außerhalb der Ferien", value: "17,00 EUR" },
          { label: "Tageskarte Familie, Sa/So/Feiertag/Ferien", value: "60,00 EUR" },
          { label: "Tageskarte Familie, Mo bis Fr außerhalb der Ferien", value: "56,00 EUR" },
          { label: "4 Stunden Erwachsene, Sa/So/Feiertag/Ferien", value: "23,00 EUR" },
          { label: "4 Stunden Erwachsene, Mo bis Fr außerhalb der Ferien", value: "19,00 EUR" },
          { label: "2 Stunden Erwachsene, Sa/So/Feiertag/Ferien", value: "20,00 EUR" },
          { label: "2 Stunden Erwachsene, Mo bis Fr außerhalb der Ferien", value: "16,00 EUR" },
          { label: "Kinder unter 1 Meter Körpergröße", value: "pauschal 4,50 EUR" },
          { label: "Nachzahlung je angefangene halbe Stunde", value: "1,00 EUR, höchstens bis zum Tageskartenpreis" },
        ],
      },
      {
        title: "Eintrittspreise Erlebnisbad inklusive Sauna",
        note: "Im Saunatarif gilt für Erwachsene und Ermäßigte derselbe Preis.",
        rows: [
          { label: "Tageskarte, Sa/So/Feiertag/Ferien", value: "34,00 EUR" },
          { label: "Tageskarte, Mo bis Fr außerhalb der Ferien", value: "30,00 EUR" },
          { label: "4 Stunden, Sa/So/Feiertag/Ferien", value: "31,00 EUR" },
          { label: "4 Stunden, Mo bis Fr außerhalb der Ferien", value: "27,00 EUR" },
          { label: "2 Stunden, Sa/So/Feiertag/Ferien", value: "28,00 EUR" },
          { label: "2 Stunden, Mo bis Fr außerhalb der Ferien", value: "24,00 EUR" },
          { label: "Sauna nachträglich dazubuchen", value: "Erwachsene 8,00 EUR, Ermäßigte 13,00 EUR" },
          { label: "Einlassgarantie an starken Tagen", value: "3,00 EUR zusätzlich" },
        ],
      },
    ],
    sections: [
      {
        heading: "Die acht Rutschen im Überblick",
        body:
          "Der Rutschenturm ist der Grund, warum das Europabad über Karlsruhe hinaus bekannt ist. Acht Bahnen decken jede Altersgruppe ab, vom 13 Meter kurzen Kinderrutschchen bis zum freien Fall. Wichtig für die Planung mit Kindern: Mindestalter und Körpergröße werden am Einstieg kontrolliert, und der Rutschenturm öffnet werktags später als das Bad selbst.",
        bullets: [
          "Aqua Rocket: 14 Meter freier Fall, ab 12 Jahren",
          "Green Viper: 120 Meter, ab 8 Jahren",
          "Tarantula: 111 Meter mit Wasserstrudel, ab 8 Jahren",
          "Reifenrutsche: 170 Meter, unter 6 Jahren nur in Begleitung",
          "Wildwasserfluss: 100 Meter, ab 10 Jahren und ab 1,35 Meter",
          "Sky Surfer: 61 Meter Stehrutsche, ab 12 Jahren und ab 1,40 Meter",
          "Breitrutsche: 10 Meter, unter 6 Jahren nur in Begleitung",
          "KAi der Hai: 13 Meter, 4 bis 12 Jahre, bis 1,60 Meter",
        ],
      },
      {
        heading: "Becken, Außenbereich und Sauna",
        body:
          "Das Erlebnisbecken hält 32 Grad und verbindet Strömungskanal, Massageliegen und die Goldgrotte. Dazu kommen der Außenbereich und ein Sportbecken mit eigenem Belegungsplan, den die Karlsruher Bäder veröffentlichen: Vereins- und Kurszeiten schneiden dort Bahnen heraus, ein Blick vorab lohnt sich, wenn du Bahnen schwimmen willst.\n\nDie Saunalandschaft ist in mehrere Welten geteilt. Excalibur- und Druiden-Sauna öffnen werktags ab 13 Uhr, das karelische Saunadorf ab 11 Uhr, die Kalevala Sauna erst ab 16 Uhr. Wer am frühen Nachmittag kommt und die große Runde drehen will, sollte das einplanen. Das EuropaSpa mit Massage- und Wellnessanwendungen läuft nur an ausgewählten Tagen von 12 bis 20 Uhr, Termine stehen im Webshop der Karlsruher Bäder.",
      },
      {
        heading: "Günstiger ins Europabad",
        body:
          "Das Preissystem belohnt Werktage außerhalb der Ferien deutlich. Zwischen Montag und Freitag sind die regulären Bade- und Saunatarife um vier Euro reduziert, nicht an Wochenenden, Feiertagen und während der Karlsruher Schulferien. Am Montag kommt der Happy-Monday-Tarif dazu: zwei Stunden zahlen und vier bleiben, oder vier Stunden zahlen und den ganzen Tag bleiben. Auch dieser Tarif gilt nicht an Brückentagen, Feiertagen und in den Karlsruher Schulferien.\n\nGeburtstagskinder bis zum 17. Geburtstag kommen an ihrem Geburtstag gegen Vorlage eines Ausweises kostenlos ins Erlebnisbad. Tarife werden grundsätzlich nicht doppelt rabattiert.",
      },
      {
        heading: "Anfahrt und Parken",
        body:
          "Das Europabad liegt an der Hermann-Veit-Straße 5 in 76135 Karlsruhe, direkt neben der Europahalle im Südwesten der Stadt. Vom Hauptbahnhof sind es rund zwei Kilometer. Wer mit dem Auto kommt, fährt die Europahalle an; wer mit dem KVV kommt, steigt an den Haltestellen im Umfeld der Europahalle aus. Die aktuellen Linien und Anfahrtswege stehen auf der offiziellen Seite des Bades.",
      },
    ],
    faqs: [
      {
        q: "Was kostet der Eintritt ins Europabad Karlsruhe?",
        a: "Die Tageskarte für Erwachsene kostet am Wochenende, an Feiertagen und in den Karlsruher Schulferien 26,00 EUR, montags bis freitags außerhalb der Ferien 22,00 EUR. Mit Sauna sind es 34,00 EUR beziehungsweise 30,00 EUR. Kürzere Zeitfenster über zwei oder vier Stunden sind günstiger (Stand 19.05.2026, Quelle ka-europabad.de).",
      },
      {
        q: "Wann hat das Europabad geöffnet?",
        a: "Montag bis Samstag von 10:00 bis 23:00 Uhr, sonntags von 10:00 bis 21:00 Uhr, auch an Feiertagen. Kassenschluss ist 60 Minuten vor Badschließung. Der Rutschenturm und die einzelnen Saunen öffnen später als das Bad selbst.",
      },
      {
        q: "Wie viele Rutschen hat das Europabad?",
        a: "Acht: Aqua Rocket, Green Viper, Tarantula, Reifenrutsche, Wildwasserfluss, Sky Surfer, Breitrutsche und die Kinderrutsche KAi der Hai. Die längste ist die Reifenrutsche mit 170 Metern, die spektakulärste die Aqua Rocket mit 14 Metern freiem Fall.",
      },
      {
        q: "An welchem Tag ist das Europabad am günstigsten?",
        a: "Montag bis Freitag außerhalb der Karlsruher Schulferien und außerhalb von Feiertagen und Brückentagen. Dann sind die regulären Tarife um vier Euro reduziert. Montags gilt zusätzlich der Happy-Monday-Tarif mit verlängerter Aufenthaltsdauer.",
      },
      {
        q: "Gibt es im Europabad eine Sauna?",
        a: "Ja, eine mehrteilige Saunalandschaft mit Excalibur-Sauna, Druiden-Sauna, Kalevala Sauna und karelischem Saunadorf. Sie kann direkt im Saunatarif oder nachträglich dazugebucht werden.",
      },
    ],
    related: [
      { label: "Alle Bäder und Thermen in Karlsruhe im Überblick", href: "/erlebnisbaeder-karlsruhe/" },
      { label: "Fitnessstudios in Karlsruhe im Vergleich", href: "/fitnessstudios-karlsruhe/" },
      { label: "Sehenswürdigkeiten in Karlsruhe", href: "/sehenswuerdigkeiten/" },
    ],
    sources: [
      { label: "Europabad Karlsruhe, Öffnungszeiten und Preise", url: "https://www.ka-europabad.de/für-den-besuch/öffnungszeiten-preise", retrieved: "19.05.2026" },
      { label: "Europabad Karlsruhe, Attraktionen im Erlebnisbad", url: "https://www.ka-europabad.de/erlebnis", retrieved: "19.05.2026" },
    ],
  },

  // ==========================================================================
  // ZOO / ZOOLOGISCHER STADTGARTEN - zwei Entitäten, eine Seite
  // ==========================================================================
  "karlsruher-zoo": {
    intro:
      "Zoo und Stadtgarten sind in Karlsruhe eine einzige Anlage mit zwei Namen und einem gemeinsamen Ticket. Der Zoologische Stadtgarten liegt direkt hinter dem Hauptbahnhof: vorn der historische Landschaftspark mit See, Gondoletta und Themengärten, dahinter die Tieranlagen mit Exotenhaus, Afrikasavanne und dem Elefantengehege. Wer nach Zoo Karlsruhe sucht und wer nach Zoologischem Stadtgarten sucht, landet am selben Eingang. Diese Seite erklärt beides getrennt, dazu Preise, Zeiten und die günstigste Art, Tickets zu kaufen.",
    facts: [
      {
        title: "Eintrittspreise Tageskarten",
        note: "Online gekaufte Tickets sind günstiger als an der Kasse, an den Kassen kommt außerdem 1 EUR Servicegebühr je Ticket dazu. In den Preisen steckt der freiwillige Artenschutz-Euro, der beim Kauf abgewählt werden kann.",
        rows: [
          { label: "Erwachsene, Tageskasse", value: "16,00 EUR" },
          { label: "Erwachsene, online", value: "15,00 EUR" },
          { label: "Ermäßigt, Tageskasse", value: "14,00 EUR" },
          { label: "Ermäßigt, online", value: "13,00 EUR" },
          { label: "Kinder von 6 bis 14 Jahren, Tageskasse", value: "7,50 EUR" },
          { label: "Kinder von 6 bis 14 Jahren, online", value: "6,50 EUR" },
          { label: "Kinder unter 6 Jahren", value: "Eintritt frei" },
          { label: "Abendticket ab einer Stunde vor Schließung", value: "50 Prozent Ermäßigung auf Erwachsenen-, Senioren- und Kindertarif" },
          { label: "Gruppen ab 25 Erwachsenen", value: "14,00 EUR pro Person an der Kasse" },
          { label: "Schulklassen", value: "5,00 EUR je Schülerin oder Schüler, je 10 Kinder eine Begleitperson frei" },
        ],
      },
      {
        title: "Jahreskarten",
        rows: [
          { label: "Jahreskarte Standard", value: "57,00 bis 61,00 EUR je nach Kategorie und Kaufort" },
          { label: "Jahreskarte Premium inklusive Gondoletta-Fahrt", value: "82,00 bis 87,00 EUR" },
        ],
      },
    ],
    sections: [
      {
        heading: "Zoo und Stadtgarten: was der Unterschied ist",
        body:
          "Der Stadtgarten ist der ältere Teil. Er entstand als Landschaftspark und ist bis heute der grüne, ruhige Bereich der Anlage: Stadtgartensee, Japangarten, Rosengarten, Duft- und Tastgarten, Spielplätze und die Seebühne. Der Zoo im engeren Sinn sind die Tieranlagen, die über das Gelände verteilt liegen.\n\nBeides ist heute ein Betrieb und ein Ticket. Für die Planung heisst das: Wer nur spazieren gehen will, zahlt denselben Eintritt wie für den Zoobesuch. Wer beides verbinden will, sollte einen halben Tag einplanen, denn das Gelände zieht sich vom Hauptbahnhof bis fast an den Ettlinger Tor Platz.",
      },
      {
        heading: "Die großen Tieranlagen",
        body:
          "Das Exotenhaus in der früheren Schwimmhalle beherbergt eine Tropenlandschaft mit Faultieren, Fledermäusen und Reptilien und ist bei schlechtem Wetter der beste Anlaufpunkt. Die Asiatischen Elefanten haben eine Außenanlage von rund 3.000 Quadratmetern, in der Afrikasavanne stehen die Giraffen. Dazu kommen die Robbenanlage, das Streichelgehege und mehrere Volieren.",
        bullets: [
          "Exotenhaus mit Tropenhalle",
          "Asiatische Elefanten auf rund 3.000 Quadratmetern Außenanlage",
          "Afrikasavanne mit Giraffen",
          "Seebühne am Stadtgartensee",
          "Japangarten, Rosengarten sowie Duft- und Tastgarten",
        ],
      },
      {
        heading: "Gondoletta und Familienbesuch",
        body:
          "Die Gondoletta ist die Karlsruher Institution schlechthin: eine Bootsfahrt über die Seenkette des Stadtgartens, seit Jahrzehnten fester Teil des Familienprogramms. Sie wird separat bezahlt und ist in der Premium-Jahreskarte enthalten.\n\nFür Familien lohnt der Blick auf die Kombinationen: Kinder unter sechs Jahren zahlen nichts, für größere Gruppen gibt es gestaffelte Familientarife, und wer erst am späten Nachmittag kommt, bekommt mit dem Abendticket die Hälfte des regulären Preises. Kinder unter 14 Jahren brauchen ohne Begleitung eine Einverständniserklärung der Eltern.",
      },
      {
        heading: "Anfahrt",
        body:
          "Der Haupteingang liegt am Hauptbahnhof, das macht den Zoologischen Stadtgarten zu einem der am einfachsten erreichbaren Zoos Deutschlands: aus dem Zug aussteigen, Straße überqueren, drin. Ein zweiter Eingang liegt am nördlichen Ende in Richtung Innenstadt. Alle Fernzüge und ein Großteil der KVV-Linien halten am Hauptbahnhof.",
      },
    ],
    faqs: [
      {
        q: "Was kostet der Eintritt in den Zoo Karlsruhe?",
        a: "Erwachsene zahlen 16,00 EUR an der Tageskasse und 15,00 EUR online, Kinder von 6 bis 14 Jahren 7,50 EUR beziehungsweise 6,50 EUR. Kinder unter 6 Jahren kommen kostenlos hinein. An den Kassen kommt 1 EUR Servicegebühr je Ticket dazu (Quelle zoo-karlsruhe.de).",
      },
      {
        q: "Sind Zoo Karlsruhe und Zoologischer Stadtgarten dasselbe?",
        a: "Ja. Der Zoologische Stadtgarten ist die Gesamtanlage aus historischem Landschaftspark und Tieranlagen, Zoo Karlsruhe der gebräuchliche Kurzname. Es gibt einen Betrieb, ein Ticket und dieselben Eingänge.",
      },
      {
        q: "Was ist die Gondoletta?",
        a: "Eine Bootsfahrt über die Seenkette des Stadtgartens und seit Jahrzehnten Teil des Karlsruher Familienprogramms. Sie wird zusätzlich zum Zooeintritt bezahlt und ist in der Premium-Jahreskarte enthalten.",
      },
      {
        q: "Gibt es ein günstigeres Ticket am Abend?",
        a: "Ja. Ab einer Stunde vor Schließung gilt das Abendticket mit 50 Prozent Ermäßigung auf den Erwachsenen-, Senioren- und Kindertarif.",
      },
      {
        q: "Wie kommt man zum Zoo Karlsruhe?",
        a: "Der Haupteingang liegt direkt gegenüber dem Karlsruher Hauptbahnhof. Fern- und Regionalzüge sowie ein Großteil der KVV-Linien halten dort, ein Fußweg von wenigen Minuten reicht.",
      },
    ],
    related: [
      { label: "Sehenswürdigkeiten in Karlsruhe", href: "/sehenswuerdigkeiten/" },
      { label: "Hotels in Karlsruhe", href: "/hotels/" },
      { label: "Bäder und Thermen in Karlsruhe", href: "/erlebnisbaeder-karlsruhe/" },
    ],
    sources: [
      { label: "Zoologischer Stadtgarten Karlsruhe, Eintrittspreise", url: "https://zoo-karlsruhe.de/eintrittspreise/", retrieved: "23.08.2026" },
      { label: "Zoologischer Stadtgarten Karlsruhe, offizielle Website", url: "https://www.zoo-karlsruhe.de/", retrieved: "23.08.2026" },
    ],
  },

  // ==========================================================================
  // KARLSRUHER SCHLOSS - 27.100 SV, bestehende Seite auf Pos 99
  // ==========================================================================
  "karlsruher-schloss": {
    intro:
      "Das Karlsruher Schloss ist der Punkt, an dem die Stadt beginnt. Markgraf Karl Wilhelm ließ es ab 1715 errichten und legte 32 Straßen und Alleen strahlenförmig um den Schlossturm, woraus der Name Fächerstadt entstand. Heute ist das Schloss Museum, Aussichtspunkt und im Spätsommer Projektionsfläche der Schlosslichtspiele. Diese Seite fasst zusammen, was ein Besuch umfasst: Badisches Landesmuseum, Schlossturm, Schlossgarten und die Termine der Lichtshow.",
    sections: [
      {
        heading: "Badisches Landesmuseum im Schloss",
        body:
          "Das Schloss beherbergt das Badische Landesmuseum mit den kulturhistorischen und archäologischen Sammlungen des Landes: von der Antike über die Türkenbeute der Markgrafen bis zur Landesgeschichte Badens. Für den Rundgang durch die Dauerausstellung sollte man zwei bis drei Stunden einplanen.\n\nÖffnungszeiten und Eintrittspreise legt das Museum fest und ändert sie regelmäßig, auch wegen Sonderausstellungen und Umbauphasen im Schloss. Verbindlich sind darum ausschließlich die Angaben auf landesmuseum.de. Ein Blick dorthin vor der Anreise erspart Enttäuschungen, gerade bei Anfahrt von außerhalb.",
      },
      {
        heading: "Schlossturm und Aussicht über den Fächer",
        body:
          "Der Schlossturm ist der Grund, warum sich der Besuch auch für Karlsruher lohnt, die das Museum kennen. Von oben ist die Fächerstruktur der Stadt tatsächlich sichtbar: die Strahlen laufen sternförmig nach Süden auseinander, im Norden schließt der Hardtwald an. Es ist der einzige Ort in Karlsruhe, an dem der Stadtgrundriss als Ganzes lesbar wird.\n\nDer Turmzugang hängt am Museumsbetrieb. Ob er geöffnet ist und ob er im Ticket enthalten ist, steht tagesaktuell auf der Museumsseite.",
      },
      {
        heading: "Schlossgarten und Botanischer Garten",
        body:
          "Hinter dem Schloss liegt der Schlossgarten, ein englischer Landschaftspark mit altem Baumbestand, der ohne Eintritt zugänglich ist. Er geht im Westen in den Botanischen Garten mit seinen historischen Gewächshäusern über. Wer das Schloss besucht, sollte den Rundgang hinten herum einplanen: Der Blick von der Gartenseite auf die Schlossfassade ist der bessere.",
        bullets: [
          "Schlossgarten: englischer Landschaftspark, frei zugänglich",
          "Botanischer Garten mit historischer Gewächshausanlage",
          "Schlossplatz mit dem Bundesverfassungsgericht als Nachbarn",
        ],
      },
      {
        heading: "Schlosslichtspiele",
        body:
          "Jeden Spätsommer wird die Schlossfassade zur Projektionsfläche eines internationalen Medienkunst-Festivals. 2026 laufen die Schlosslichtspiele vom 13. August bis 13. September, der Eintritt ist frei. Die Shows starten mit der Dämmerung und rücken im Lauf des Festivals nach vorn: von 21:15 Uhr Mitte August auf 20:15 Uhr Mitte September. Veranstaltungsende ist sonntags bis donnerstags um 23:15 Uhr, freitags und samstags um 23:30 Uhr.\n\nIn diesen Wochen ist der Schlossplatz abends voll und die Hotelpreise in der Innenstadt ziehen an. Wer anreist, sollte früh buchen.",
      },
    ],
    faqs: [
      {
        q: "Kann man das Karlsruher Schloss besichtigen?",
        a: "Ja. Im Schloss befindet sich das Badische Landesmuseum, dessen Dauer- und Sonderausstellungen besichtigt werden können. Öffnungszeiten und Preise stehen auf landesmuseum.de und ändern sich regelmäßig.",
      },
      {
        q: "Kann man auf den Schlossturm steigen?",
        a: "Der Schlossturm mit dem Rundblick über den Karlsruher Fächer gehört zum Museumsbetrieb. Ob er aktuell geöffnet ist und ob der Zugang im Ticket enthalten ist, steht tagesaktuell auf der Seite des Badischen Landesmuseums.",
      },
      {
        q: "Wann sind die Schlosslichtspiele 2026?",
        a: "Vom 13. August bis 13. September 2026, jeden Abend ab Einbruch der Dämmerung und bei freiem Eintritt. Der Beginn wandert im Lauf des Festivals von 21:15 Uhr auf 20:15 Uhr nach vorn.",
      },
      {
        q: "Kostet der Schlossgarten Eintritt?",
        a: "Nein. Der Schlossgarten hinter dem Schloss ist ein öffentlicher Landschaftspark und frei zugänglich. Eintritt fällt nur für das Museum im Schloss an.",
      },
      {
        q: "Warum heisst Karlsruhe Fächerstadt?",
        a: "Weil Markgraf Karl Wilhelm ab 1715 vom Schlossturm aus 32 Straßen und Alleen strahlenförmig nach Süden anlegen ließ. Der Grundriss ergibt einen aufgespannten Fächer, dessen Angelpunkt das Schloss ist.",
      },
    ],
    related: [
      { label: "Weihnachtsmarkt Karlsruhe und Eisbahn am Schlossplatz", href: "/weihnachtsmarkt-karlsruhe/" },
      { label: "Schlossgarten Karlsruhe", href: "/sehenswuerdigkeiten/schlossgarten/" },
      { label: "Alle Sehenswürdigkeiten in Karlsruhe", href: "/sehenswuerdigkeiten/" },
    ],
    sources: [
      { label: "Badisches Landesmuseum Karlsruhe", url: "https://www.landesmuseum.de/", retrieved: "23.08.2026" },
      { label: "Schlosslichtspiele Karlsruhe, Termine 2026", url: "https://www.schlosslichtspiele.info/", retrieved: "23.08.2026" },
    ],
  },

  // ==========================================================================
  // ZKM - Striking Distance Pos 43, DE-Seite der DE/EN-Trennung
  // ==========================================================================
  zkm: {
    intro:
      "Das ZKM Zentrum für Kunst und Medien ist das weltweit einzige Museum, das sich systematisch der elektronischen und digitalen Kunst widmet. Es sitzt in einer denkmalgeschützten Industriehalle in der Südweststadt, der früheren Munitionsfabrik, und verbindet Medienmuseum, Museum für Neue Kunst, Forschungsinstitute und ein Programmkino unter einem Dach. Diese Seite sammelt die Besucherinformationen: Öffnungszeiten, Eintrittspreise, den kostenfreien Freitagnachmittag und die Anfahrt.",
    facts: [
      {
        title: "Öffnungszeiten",
        note: "Montag und Dienstag bleiben die Ausstellungen geschlossen. An Feiertagen können abweichende Zeiten gelten.",
        rows: [
          { label: "Ausstellungen, Mi bis Fr", value: "10:00 bis 18:00 Uhr" },
          { label: "Ausstellungen, Sa und So", value: "11:00 bis 18:00 Uhr" },
          { label: "Ausstellungen, Mo und Di", value: "geschlossen" },
          { label: "Infotheke, Mi bis Fr", value: "9:00 bis 18:00 Uhr" },
          { label: "Mediathek, Mi bis Fr", value: "10:00 bis 18:00 Uhr" },
          { label: "Mediathek, Sa und So", value: "13:00 bis 18:00 Uhr" },
          { label: "Shop", value: "Mi bis So 11:00 bis 18:00 Uhr" },
        ],
      },
      {
        title: "Eintrittspreise",
        rows: [
          { label: "Eintritt regulär", value: "14,00 EUR" },
          { label: "Eintritt ermäßigt", value: "10,00 EUR" },
          { label: "Familienticket, zwei Erwachsene mit Kindern unter 18", value: "26,00 EUR" },
          { label: "Kinder und Jugendliche unter 18 Jahren", value: "Eintritt frei" },
          { label: "Abendtarif ab 16:30 Uhr", value: "8,00 EUR für alle ab 18 Jahren" },
          { label: "Freitag ab 14:00 Uhr", value: "Eintritt in die Ausstellungen frei" },
        ],
      },
    ],
    sections: [
      {
        heading: "Was im ZKM zu sehen ist",
        body:
          "Das ZKM ist kein Museum zum Durchgehen, sondern eines zum Ausprobieren. Die Sammlung reicht von frühen Computerkunstwerken über interaktive Installationen bis zu Virtual-Reality-Arbeiten, viele davon zum Anfassen und Mitspielen. Dazu kommen wechselnde Großausstellungen, die häufig ein ganzes Stockwerk füllen.\n\nDie Halle selbst gehört zur Attraktion. Der Lichthof-Bau von 1918 war eine Munitionsfabrik, seine Betonstruktur ist bewusst sichtbar geblieben. Zusammen mit der benachbarten Hochschule für Gestaltung entsteht ein Areal, das eher an einen Campus erinnert als an ein klassisches Museum.",
      },
      {
        heading: "Wann sich der Besuch am meisten lohnt",
        body:
          "Freitags ab 14 Uhr ist der Eintritt in die Ausstellungen frei. Wer flexibel ist, plant den Besuch dorthin: Die Halle ist groß genug, dass sich der Andrang verteilt. Ab 16:30 Uhr gilt an allen Öffnungstagen der Abendtarif von 8 EUR.\n\nFür den kompletten Rundgang durch Medienmuseum und Sonderausstellungen sollten drei Stunden eingeplant werden. Kinder und Jugendliche unter 18 zahlen nichts, was das ZKM zu einem der günstigsten Familienziele der Stadt macht.",
      },
      {
        heading: "Anfahrt",
        body:
          "Das ZKM liegt in der Lorenzstraße 19 in 76135 Karlsruhe, der Haupteingang öffnet sich zum Platz der Menschenrechte. Vom Hauptbahnhof sind es wenige Minuten mit der Straßenbahn, von der Innenstadt aus ebenfalls. Ermäßigten Eintritt gibt es unter anderem mit dem Deutschland-Ticket, dem JugendticketBW und dem bwtarif, ein Argument mehr für die Anreise mit dem KVV.",
      },
    ],
    faqs: [
      {
        q: "Was kostet der Eintritt ins ZKM Karlsruhe?",
        a: "Regulär 14,00 EUR, ermäßigt 10,00 EUR, das Familienticket 26,00 EUR. Kinder und Jugendliche unter 18 Jahren zahlen nichts. Ab 16:30 Uhr gilt ein Abendtarif von 8,00 EUR (Quelle zkm.de).",
      },
      {
        q: "Wann ist der Eintritt ins ZKM kostenlos?",
        a: "Jeden Freitag ab 14 Uhr ist der Eintritt in die Ausstellungen des ZKM kostenfrei. Kinder und Jugendliche unter 18 Jahren haben immer freien Eintritt.",
      },
      {
        q: "Wann hat das ZKM geöffnet?",
        a: "Mittwoch bis Freitag von 10:00 bis 18:00 Uhr, Samstag und Sonntag von 11:00 bis 18:00 Uhr. Montag und Dienstag sind die Ausstellungen geschlossen.",
      },
      {
        q: "Wo liegt das ZKM Karlsruhe?",
        a: "In der Lorenzstraße 19 in 76135 Karlsruhe, in der Südweststadt. Der Haupteingang liegt am Platz der Menschenrechte, direkt neben der Hochschule für Gestaltung.",
      },
      {
        q: "Wie lange braucht man für das ZKM?",
        a: "Für Medienmuseum und laufende Sonderausstellungen sollten etwa drei Stunden eingeplant werden. Weil viele Arbeiten interaktiv sind, dauert der Rundgang länger als in einem klassischen Kunstmuseum.",
      },
    ],
    related: [
      { label: "Sehenswürdigkeiten in Karlsruhe", href: "/sehenswuerdigkeiten/" },
      { label: "Staatliche Kunsthalle Karlsruhe", href: "/sehenswuerdigkeiten/staatliche-kunsthalle/" },
      { label: "Hotels in Karlsruhe", href: "/hotels/" },
    ],
    sources: [
      { label: "ZKM Karlsruhe, Eintrittspreise", url: "https://zkm.de/de/eintrittspreise", retrieved: "23.08.2026" },
      { label: "ZKM Karlsruhe, Öffnungszeiten", url: "https://zkm.de/de/öffnungszeiten", retrieved: "23.08.2026" },
    ],
  },

  // ==========================================================================
  // ETTLINGER TOR - 60.500 SV, bisher kein eigenes Ranking
  // ==========================================================================
  "ettlinger-tor": {
    intro:
      "Das Ettlinger Tor Center ist das größte Einkaufszentrum der Karlsruher Innenstadt: rund 130 Fachgeschäfte auf etwa 37.000 Quadratmetern Verkaufsfläche, verteilt auf drei Ebenen. Es liegt am Ettlinger-Tor-Platz zwischen Kriegsstraße und Innenstadt, direkt über einem der wichtigsten Umsteigeknoten des KVV. Der Name bezeichnet zugleich den Platz und die Haltestelle, was die Orientierung erleichtert: Wer Ettlinger Tor sagt, meint in Karlsruhe fast immer diesen Punkt.",
    facts: [
      {
        title: "Öffnungszeiten und Eckdaten",
        rows: [
          { label: "Center, Mo bis Sa", value: "10:00 bis 20:00 Uhr" },
          { label: "Sonntag", value: "geschlossen, außer an verkaufsoffenen Sonntagen" },
          { label: "Fachgeschäfte", value: "rund 130" },
          { label: "Verkaufsfläche", value: "rund 37.000 Quadratmeter" },
          { label: "Ebenen", value: "drei" },
          { label: "Adresse", value: "Karl-Friedrich-Straße 26, 76133 Karlsruhe" },
        ],
      },
      {
        title: "Parkhaus",
        rows: [
          { label: "Stellplätze", value: "rund 900" },
          { label: "Frauenparkplätze", value: "72" },
          { label: "Behindertenparkplätze", value: "21" },
          { label: "Durchfahrtshöhe", value: "2,10 Meter" },
          { label: "Öffnung Mo bis Sa", value: "8:00 bis 20:00 Uhr, Ausfahrt bis 20:30 Uhr" },
          { label: "Verkaufsoffene Sonntage", value: "12:00 bis 18:00 Uhr, Ausfahrt bis 18:30 Uhr" },
          { label: "Einfahrten", value: "Kriegsstraße 122 und Lammstraße 21" },
        ],
      },
    ],
    sections: [
      {
        heading: "Anfahrt mit Bahn und Straßenbahn",
        body:
          "Das Ettlinger Tor ist einer der zentralen Knoten der Karlsruher Kombilösung. Unterirdisch halten die Linie 2 sowie die Stadtbahnlinien S1, S4, S7, S8, S11 und S52 an der Haltestelle Ettlinger Tor. Oberirdisch fahren die Linien 4 und 5 den Ettlinger-Tor-Platz an.\n\nWer aus der Region kommt, fährt praktisch immer ohne Umsteigen bis vor die Tür, denn die Stadtbahnen aus dem Albtal, aus Pforzheim, Bretten, Baden-Baden und Rastatt laufen hier zusammen. Das macht das Center zum bequemsten Startpunkt für einen Innenstadtbummel.",
      },
      {
        heading: "Anfahrt mit dem Auto",
        body:
          "Aus Richtung Osten führt der Autotunnel unter der Kriegsstraße direkt zur Tiefgarageneinfahrt, die Beschilderung weist den Weg. Alternativ fährt man die Kriegsstraße an und nutzt die Einfahrt an der Seite des Centers. Für das Navi eignen sich Kriegsstraße 122 oder Lammstraße 21, wo die zweite Einfahrt liegt.\n\nDas Parkhaus hat rund 900 Stellplätze und ist mit dem Center direkt verbunden. Die Belegung veröffentlicht die Stadt Karlsruhe in ihrem Parkleitsystem, ein Blick darauf lohnt sich an Samstagen und in der Vorweihnachtszeit.",
      },
      {
        heading: "Was es im Center gibt",
        body:
          "Der Branchenmix ist auf Mode und Lifestyle ausgerichtet. Zu den bekannten Häusern gehören unter anderem H&M, Zara, Hollister, Tommy Hilfiger, Levi's, Hunkemöller, Camp David und Soccx, Intersport Voswinkel, Christ Juweliere und Apollo-Optik. Gastronomisch sind unter anderem Haiky, KFC und Payidar vertreten.\n\nDie vollständige und aktuelle Shopliste führt das Center selbst; Mieterwechsel sind in einem Haus dieser Größe normal.",
      },
      {
        heading: "In der Umgebung",
        body:
          "Vom Ettlinger Tor aus ist die gesamte Innenstadt zu Fuß erreichbar. Nach Norden führt die Karl-Friedrich-Straße in wenigen Minuten zum Marktplatz mit der Pyramide und weiter zum Schloss. Gegenüber liegt das Badische Staatstheater, östlich der Friedrichsplatz mit dem Naturkundemuseum. Wer Shopping und Sightseeing verbinden will, hat hier den kürzesten Weg.",
      },
    ],
    faqs: [
      {
        q: "Wann hat das Ettlinger Tor Center geöffnet?",
        a: "Montag bis Samstag von 10:00 bis 20:00 Uhr. Sonntags ist geschlossen, ausgenommen die verkaufsoffenen Sonntage in Karlsruhe.",
      },
      {
        q: "Wie viele Geschäfte hat das Ettlinger Tor?",
        a: "Rund 130 Fachgeschäfte auf etwa 37.000 Quadratmetern Verkaufsfläche, verteilt auf drei Ebenen.",
      },
      {
        q: "Wie kommt man mit der Bahn zum Ettlinger Tor?",
        a: "Unterirdisch halten die Linie 2 und die Stadtbahnlinien S1, S4, S7, S8, S11 und S52 an der Haltestelle Ettlinger Tor, oberirdisch die Linien 4 und 5 am Ettlinger-Tor-Platz.",
      },
      {
        q: "Wo kann man am Ettlinger Tor parken?",
        a: "Im angeschlossenen Parkhaus mit rund 900 Stellplätzen, davon 72 Frauen- und 21 Behindertenparkplätze. Die Einfahrten liegen an der Kriegsstraße 122 und in der Lammstraße 21, die Durchfahrtshöhe beträgt 2,10 Meter.",
      },
      {
        q: "Was ist das Ettlinger Tor in Karlsruhe?",
        a: "Ursprünglich der südliche Stadtausgang Richtung Ettlingen, heute vor allem der Name des Platzes, der Haltestelle und des dortigen Einkaufszentrums am Südrand der Innenstadt.",
      },
    ],
    related: [
      { label: "Parkhäuser in Karlsruhe mit Tarifen", href: "/parken-in-karlsruhe/" },
      { label: "Weihnachtsmarkt Karlsruhe", href: "/weihnachtsmarkt-karlsruhe/" },
      { label: "Alle Sehenswürdigkeiten in Karlsruhe", href: "/sehenswuerdigkeiten/" },
    ],
    sources: [
      { label: "Ettlinger Tor Karlsruhe, Center und Über uns", url: "https://www.ettlinger-tor.de/center/über-uns/", retrieved: "23.08.2026" },
      { label: "Ettlinger Tor Karlsruhe, Anfahrt und Parken", url: "https://www.ettlinger-tor.de/service/anfahrt/parken/anfahrt/", retrieved: "23.08.2026" },
      { label: "Stadt Karlsruhe, Parkhausbelegung Ettlinger Tor", url: "https://web1.karlsruhe.de/service/Parken/detail.php?id=69", retrieved: "23.08.2026" },
    ],
  },
};

export const getSightGuide = (slug: string): SightGuide | undefined => sightGuides[slug];
