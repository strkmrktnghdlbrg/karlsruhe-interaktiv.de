/**
 * GetYourGuide-Platzierungen fuer karlsruhe-interaktiv.de
 *
 * Pro Seite recherchierte Widget-Konfiguration (deutsche Such-Query, Ueberschrift,
 * Anzahl, Show/Hide). Erzeugt vom GYG-Recherche-Workflow (gyg-research-karlsruhe):
 * je Sehenswuerdigkeit, Reiseplaner, Event, Kategorie, Bezirk und Index-Seite
 * wurde geprueft, ob GetYourGuide relevantes Inventar hat und welche Query am
 * besten passt. show:false bedeutet: kein Widget (untouristisch / kein Inventar).
 *
 * Schluessel-Schema:
 *   sight:<slug> | guide:<slug> | event:<slug> | category:<slug> | district:<slug> | page:<name>
 *
 * Das Partner-Script wird global im BaseLayout geladen (Partner-ID via affiliate.ts).
 */
export type GygPlacement = {
  key: string;
  show: boolean;
  query: string;
  title: string;
  lead: string;
  count: number;
};

export const gygPlacements: Record<string, GygPlacement> = {
  // === Sehenswuerdigkeiten ===
  "sight:karlsruher-schloss": { key: "sight:karlsruher-schloss", show: true, query: "Karlsruhe Schloss", title: "Touren & Tickets für das Karlsruher Schloss", lead: "Entdecke das Barockschloss Karlsruhe mit geführten Touren, Eintrittskarten zum Badischen Landesmuseum und Stadtführungen rund um das Wahrzeichen der Fächerstadt.", count: 4 },
  "sight:schlossgarten": { key: "sight:schlossgarten", show: true, query: "Karlsruhe Schloss", title: "Touren & Aktivitäten rund ums Karlsruher Schloss", lead: "Entdecke den Schlossgarten und das Karlsruher Schloss bei einer geführten Tour oder erkunde die Region mit spannenden Ausflügen.", count: 4 },
  "sight:zkm": { key: "sight:zkm", show: true, query: "ZKM Karlsruhe", title: "Touren & Tickets rund ums ZKM", lead: "Entdecke Führungen und Erlebnisse rund um das ZKM und die Karlsruher Kulturszene.", count: 3 },
  "sight:staatliche-kunsthalle": { key: "sight:staatliche-kunsthalle", show: true, query: "Karlsruhe Kunsthalle", title: "Touren & Tickets rund um die Staatliche Kunsthalle", lead: "Entdecke Karlsruhe mit geführten Touren, Museumstickets und Kulturerlebnissen in der Fächerstadt.", count: 3 },
  "sight:marktplatz-pyramide": { key: "sight:marktplatz-pyramide", show: true, query: "Karlsruhe Marktplatz", title: "Touren & Tickets rund um den Marktplatz", lead: "Entdecke den historischen Marktplatz mit der berühmten Pyramide auf einer geführten Stadttour oder erkunde Karlsruhe mit einem lokalen Guide.", count: 3 },
  "sight:stephanskirche": { key: "sight:stephanskirche", show: true, query: "Karlsruhe", title: "Touren & Aktivitäten in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Touren, Schloss-Besuchen und spannenden Ausflügen in die Region.", count: 3 },
  "sight:stadtkirche": { key: "sight:stadtkirche", show: true, query: "Karlsruhe", title: "Touren & Aktivitäten in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Stadttouren, Schlossbesichtigungen und spannenden Ausflügen in die Region.", count: 3 },
  "sight:botanischer-garten": { key: "sight:botanischer-garten", show: true, query: "Karlsruhe", title: "Touren & Aktivitäten in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Touren, Schlossbesichtigungen und Ausflügen in die Region – ideal als Ergänzung zu einem Besuch im Botanischen Garten.", count: 3 },
  "sight:naturkundemuseum": { key: "sight:naturkundemuseum", show: true, query: "Karlsruhe", title: "Touren & Aktivitäten in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Touren, Schlossbesichtigungen und spannenden Ausflügen in die Region.", count: 3 },
  "sight:badisches-staatstheater": { key: "sight:badisches-staatstheater", show: true, query: "Karlsruhe", title: "Touren & Erlebnisse in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Stadttouren, Schlossbesichtigungen und spannenden Tagesausflügen in die Region.", count: 3 },
  "sight:karlsruher-zoo": { key: "sight:karlsruher-zoo", show: true, query: "Karlsruhe Zoo", title: "Touren & Aktivitäten rund um den Karlsruher Zoo", lead: "Erlebe Karlsruhe von seiner schönsten Seite – mit geführten Stadttouren, Ausflügen in den Schwarzwald und weiteren Erlebnissen direkt in der Fächerstadt.", count: 4 },
  "sight:stadtgarten": { key: "sight:stadtgarten", show: true, query: "Karlsruhe", title: "Touren & Aktivitäten in Karlsruhe", lead: "Entdecke Karlsruhe und die Region mit geführten Touren, Tagesausflügen in den Schwarzwald oder zum Europa-Park.", count: 3 },
  "sight:bundesverfassungsgericht": { key: "sight:bundesverfassungsgericht", show: true, query: "Karlsruhe", title: "Touren & Erlebnisse in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Touren – vom Schloss über die Innenstadt bis zu Tagesausflügen in den Schwarzwald oder nach Straßburg.", count: 3 },
  "sight:kit-campus-sued": { key: "sight:kit-campus-sued", show: true, query: "Karlsruhe", title: "Touren & Aktivitäten in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Touren, Schloss-Besuchen und spannenden Ausflügen in die Region.", count: 3 },
  "sight:schloss-gottesaue": { key: "sight:schloss-gottesaue", show: true, query: "Karlsruhe", title: "Touren & Erlebnisse in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Touren, Schlossbesuchen und spannenden Stadtführungen – ideal rund um einen Besuch von Schloss Gottesaue.", count: 3 },
  "sight:turmberg": { key: "sight:turmberg", show: true, query: "Karlsruhe Turmberg", title: "Touren & Aktivitäten rund um den Turmberg", lead: "Entdecke Karlsruhe und die Region von oben – mit geführten Touren, Ausflügen in den Schwarzwald und mehr.", count: 3 },
  "sight:karlsburg": { key: "sight:karlsburg", show: true, query: "Karlsruhe Durlach", title: "Touren & Ausflüge rund um die Karlsburg Durlach", lead: "Entdecke Durlach und das Karlsruher Umland mit geführten Touren, Stadtführungen und Tagesausflügen.", count: 3 },
  "sight:pfinzgaumuseum": { key: "sight:pfinzgaumuseum", show: true, query: "Karlsruhe Durlach", title: "Touren & Aktivitäten rund um Durlach", lead: "Entdecke Durlach und die Karlsruher Region mit geführten Touren, Stadtführungen und spannenden Ausflugsangeboten.", count: 3 },
  "sight:mehlwaage-durlach": { key: "sight:mehlwaage-durlach", show: true, query: "Durlach Karlsruhe", title: "Touren & Aktivitäten in Durlach", lead: "Entdecke das historische Durlach und seine mittelalterlichen Sehenswürdigkeiten mit geführten Touren und Erlebnissen.", count: 3 },
  "sight:tollhaus": { key: "sight:tollhaus", show: true, query: "Karlsruhe", title: "Touren & Erlebnisse in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Touren, Tagesausflügen in den Schwarzwald und weiteren Erlebnissen rund um die Fächerstadt.", count: 3 },
  "sight:substage": { key: "sight:substage", show: true, query: "Karlsruhe", title: "Touren & Erlebnisse in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Touren, Schloss-Besuchen und spannenden Ausflügen in die Region.", count: 3 },
  "sight:hardtwald": { key: "sight:hardtwald", show: true, query: "Karlsruhe", title: "Touren & Aktivitäten rund um den Hardtwald", lead: "Entdecke Karlsruhe und die Umgebung mit geführten Touren, Ausflügen in den Schwarzwald und weiteren Erlebnissen.", count: 3 },
  "sight:majolika-manufaktur": { key: "sight:majolika-manufaktur", show: true, query: "Karlsruhe", title: "Touren & Erlebnisse in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Touren, Schlossbesichtigungen und spannenden Tagesausflügen in die Region.", count: 3 },
  "sight:verkehrsmuseum": { key: "sight:verkehrsmuseum", show: true, query: "Karlsruhe", title: "Touren & Aktivitäten in Karlsruhe", lead: "Entdecke Karlsruhe und die Region mit geführten Touren, Tagesausflügen und besonderen Erlebnissen – direkt buchbar.", count: 3 },
  "sight:rheinhafen": { key: "sight:rheinhafen", show: true, query: "Karlsruhe Rheinhafen", title: "Touren & Erlebnisse am Rheinhafen", lead: "Entdecke den Karlsruher Rheinhafen bei einer Hafenrundfahrt oder erkunde die Region mit geführten Touren.", count: 3 },

  // === Reiseplaner ===
  "guide:3-tage-karlsruhe": { key: "guide:3-tage-karlsruhe", show: true, query: "Karlsruhe Stadtführung", title: "Touren & Tickets für deinen Karlsruhe-Aufenthalt", lead: "Entdecke Karlsruhe mit geführten Touren, Schloss-Besuchen und Ausflügen in die Region – perfekt für deinen 3-Tage-Trip.", count: 4 },
  "guide:karlsruhe-mit-kindern": { key: "guide:karlsruhe-mit-kindern", show: true, query: "Karlsruhe Kinder", title: "Touren & Aktivitäten für Familien in Karlsruhe", lead: "Macht euren Familienausflug nach Karlsruhe noch unvergesslicher – mit geführten Touren, Tickets und Erlebnissen für Kinder.", count: 4 },
  "guide:karlsruhe-bei-regen": { key: "guide:karlsruhe-bei-regen", show: true, query: "Karlsruhe Museen", title: "Touren & Tickets für Karlsruhes Museumswelt", lead: "Entdecke geführte Touren durch Karlsruhes Kulturlandschaft – ideal für Regentage mit Kunsthalle, ZKM und Co.", count: 4 },

  // === Events (Hotel-Landingpages) ===
  "event:das-fest": { key: "event:das-fest", show: true, query: "Karlsruhe", title: "Touren & Erlebnisse rund ums Fest", lead: "Nutze deinen Festival-Aufenthalt für Stadtführungen, Schlossbesichtigungen und Ausflüge in die Region – passende Aktivitäten für jeden freien Moment.", count: 4 },
  "event:schlosslichtspiele": { key: "event:schlosslichtspiele", show: true, query: "Karlsruhe Schloss", title: "Touren & Erlebnisse rund um die Schlosslichtspiele", lead: "Mach deinen Besuch der Schlosslichtspiele zum unvergesslichen Erlebnis – mit Führungen, Tickets und Ausflügen rund um Karlsruhe.", count: 4 },
  "event:christkindlesmarkt": { key: "event:christkindlesmarkt", show: true, query: "Karlsruhe Weihnachten", title: "Touren & Erlebnisse rund um den Weihnachtsmarkt", lead: "Erlebe die Adventszeit in Karlsruhe: vom Christkindlesmarkt am Marktplatz bis zu winterlichen Stadtführungen und Ausflügen in die Region.", count: 4 },
  "event:art-karlsruhe": { key: "event:art-karlsruhe", show: true, query: "Karlsruhe", title: "Touren & Erlebnisse rund um die art Karlsruhe", lead: "Nutze deinen Aufenthalt zur Kunstmesse für Stadtführungen, Schlossbesuche und Ausflüge in die Region.", count: 4 },
  "event:brigande-feschd": { key: "event:brigande-feschd", show: true, query: "Karlsruhe", title: "Touren & Erlebnisse rund ums Brigande-Feschd", lead: "Nutze deinen Aufenthalt zum Brigande-Feschd in Durlach für Stadtführungen, Schlossbesuche und Ausflüge rund um Karlsruhe.", count: 4 },
  "event:stadtgeburtstag": { key: "event:stadtgeburtstag", show: true, query: "Karlsruhe Schloss", title: "Touren & Erlebnisse rund um den Stadtgeburtstag", lead: "Nutze deinen Aufenthalt beim Karlsruher Stadtgeburtstag für unvergessliche Erlebnisse rund um Schloss und Innenstadt.", count: 4 },

  // === Kategorien === (untouristische Themen: show:false → kein Widget)
  "category:tech-innovation": { key: "category:tech-innovation", show: false, query: "Karlsruhe", title: "Erlebnisse in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Touren durch die Stadt.", count: 3 },
  "category:kunst-medien": { key: "category:kunst-medien", show: true, query: "ZKM Karlsruhe", title: "Touren & Tickets für ZKM und Kunsthalle", lead: "Erlebe Karlsruhes weltberühmte Medienkunst im ZKM und entdecke die Kunsthalle – jetzt Tickets und Führungen buchen.", count: 4 },
  "category:wissenschaft": { key: "category:wissenschaft", show: false, query: "Karlsruhe", title: "Karlsruhe entdecken", lead: "Touren und Aktivitäten rund um die Wissenschaftsstadt Karlsruhe.", count: 3 },
  "category:wahrzeichen": { key: "category:wahrzeichen", show: true, query: "Karlsruhe Schloss", title: "Touren & Tickets für Schloss Karlsruhe", lead: "Besuche das Barockschloss Karlsruhe, die Pyramide am Marktplatz und den Turmberg – hier findest du die besten Führungen und Tickets.", count: 4 },
  "category:museen": { key: "category:museen", show: true, query: "Karlsruhe Museen", title: "Museumstickets & Führungen in Karlsruhe", lead: "Von Kunstmuseen bis zum Naturkundemuseum – buche Tickets und geführte Touren durch Karlsruhes vielfältige Museumslandschaft.", count: 4 },
  "category:parks": { key: "category:parks", show: true, query: "Karlsruhe", title: "Outdoor-Erlebnisse & Parks in Karlsruhe", lead: "Erkunde Schlossgarten, Stadtgarten und Hardtwald – geführte Spaziergänge und Outdoor-Aktivitäten rund um Karlsruhes grüne Oasen.", count: 3 },
  "category:familie": { key: "category:familie", show: true, query: "Karlsruhe Kinder", title: "Familienausflüge & Aktivitäten in Karlsruhe", lead: "Unvergessliche Erlebnisse für die ganze Familie: Touren, Ausflüge und Aktivitäten für Kinder und Erwachsene in und um Karlsruhe.", count: 4 },
  "category:recht": { key: "category:recht", show: false, query: "Karlsruhe", title: "Karlsruhe entdecken", lead: "Touren und Aktivitäten in Karlsruhe.", count: 3 },
  "category:historische-architektur": { key: "category:historische-architektur", show: true, query: "Karlsruhe Stadtführung", title: "Historische Architektur & Stadtführungen", lead: "Entdecke Karlsruhes barockes Stadtbild und klassizistische Architektur bei geführten Touren durch die Fächerstadt.", count: 4 },
  "category:nightlife": { key: "category:nightlife", show: false, query: "Karlsruhe", title: "Karlsruhe bei Nacht", lead: "Entdecke Karlsruhes Abendangebote und Veranstaltungen.", count: 3 },
  "category:shopping": { key: "category:shopping", show: false, query: "Karlsruhe", title: "Karlsruhe entdecken", lead: "Touren und Aktivitäten in Karlsruhe.", count: 3 },

  // === Bezirke === (reine Wohnbezirke: show:false → kein Widget)
  "district:innenstadt-west": { key: "district:innenstadt-west", show: true, query: "Karlsruhe Schloss", title: "Touren & Tickets rund ums Karlsruher Schloss", lead: "Im Herzen der Fächerstadt warten Barockschloss, Marktplatz und Kunsthalle – buche passende Führungen und Tickets direkt hier.", count: 4 },
  "district:innenstadt-ost": { key: "district:innenstadt-ost", show: true, query: "Karlsruhe", title: "Erlebnisse in der Karlsruher Innenstadt-Ost", lead: "Staatstheater, Naturkundemuseum und die Nähe zum Zoo machen die Innenstadt-Ost zu einem kulturreichen Bezirk – entdecke passende Touren und Aktivitäten.", count: 3 },
  "district:durlach": { key: "district:durlach", show: true, query: "Karlsruhe Durlach", title: "Touren & Ausflüge rund um Durlach & Turmberg", lead: "Durlach mit Turmberg, historischer Altstadt und Karlsburg gehört zu den reizvollsten Stadtteilen Karlsruhes – perfekt für Stadtführungen und Ausflüge.", count: 4 },
  "district:suedweststadt": { key: "district:suedweststadt", show: true, query: "ZKM Karlsruhe", title: "Touren & Tickets rund ums ZKM", lead: "Das ZKM macht die Südweststadt zu einem international bekannten Kulturziel – entdecke Führungen und Erlebnisse rund um dieses besondere Museum.", count: 3 },
  "district:oststadt": { key: "district:oststadt", show: true, query: "Karlsruhe", title: "Karlsruhe entdecken – Touren & Aktivitäten", lead: "Die Oststadt mit KIT-Campus und Schloss Gottesaue ist ein Anlaufpunkt für Kultur- und Technikinteressierte – ergänzt durch das breite Erlebnisangebot Karlsruhes.", count: 3 },
  "district:suedstadt": { key: "district:suedstadt", show: true, query: "Karlsruhe", title: "Erlebnisse & Veranstaltungen in Karlsruhe", lead: "Die Südstadt beherbergt Kultspielstätten wie Tollhaus und Substage – für alle, die das lebendige Kulturleben Karlsruhes erkunden möchten.", count: 3 },
  "district:weststadt": { key: "district:weststadt", show: false, query: "Karlsruhe", title: "Touren & Aktivitäten in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Touren, Ausflügen und spannenden Erlebnissen.", count: 3 },
  "district:muehlburg": { key: "district:muehlburg", show: false, query: "Karlsruhe", title: "Touren & Aktivitäten in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Touren, Ausflügen und spannenden Erlebnissen.", count: 3 },
  "district:rueppurr": { key: "district:rueppurr", show: false, query: "Karlsruhe", title: "Touren & Aktivitäten in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Touren, Ausflügen und spannenden Erlebnissen.", count: 3 },
  "district:daxlanden": { key: "district:daxlanden", show: false, query: "Karlsruhe", title: "Touren & Aktivitäten in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Touren, Ausflügen und spannenden Erlebnissen.", count: 3 },
  "district:knielingen": { key: "district:knielingen", show: false, query: "Karlsruhe", title: "Touren & Aktivitäten in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Touren, Ausflügen und spannenden Erlebnissen.", count: 3 },
  "district:nordstadt": { key: "district:nordstadt", show: false, query: "Karlsruhe", title: "Touren & Aktivitäten in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Touren, Ausflügen und spannenden Erlebnissen.", count: 3 },
  "district:waldstadt": { key: "district:waldstadt", show: false, query: "Karlsruhe", title: "Touren & Aktivitäten in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Touren, Ausflügen und spannenden Erlebnissen.", count: 3 },
  "district:neureut": { key: "district:neureut", show: false, query: "Karlsruhe", title: "Touren & Aktivitäten in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Touren, Ausflügen und spannenden Erlebnissen.", count: 3 },

  // === Index- / Uebersichtsseiten ===
  "page:home": { key: "page:home", show: true, query: "Karlsruhe", title: "Touren & Erlebnisse in Karlsruhe", lead: "Entdecke Karlsruhe mit geführten Touren, Hop-on-Hop-off-Bus, Schlossbesuchen und vielem mehr.", count: 4 },
  "page:sights-index": { key: "page:sights-index", show: true, query: "Karlsruhe Sehenswürdigkeiten", title: "Sehenswürdigkeiten & Tickets in Karlsruhe buchen", lead: "Buche Tickets und geführte Touren zu den schönsten Sehenswürdigkeiten Karlsruhes direkt online.", count: 4 },
  "page:guides-index": { key: "page:guides-index", show: true, query: "Karlsruhe Stadtführung", title: "Geführte Touren & Stadtführungen in Karlsruhe", lead: "Lerne Karlsruhe mit erfahrenen Stadtführern kennen – Walking Tours, private Führungen und mehr.", count: 3 },
  "page:events-index": { key: "page:events-index", show: true, query: "Karlsruhe", title: "Aktivitäten & Erlebnisse rund um Karlsruhe", lead: "Neben Events warten geführte Touren, Ausflüge und besondere Erlebnisse auf dich in und um Karlsruhe.", count: 3 },
  "page:categories-index": { key: "page:categories-index", show: true, query: "Karlsruhe", title: "Touren & Tickets für jeden Geschmack", lead: "Von Kunst über Natur bis Stadtgeschichte – finde die passende Karlsruhe-Tour für deine Interessen.", count: 3 },
  "page:districts-index": { key: "page:districts-index", show: true, query: "Karlsruhe", title: "Karlsruhe entdecken – Touren & Ausflüge", lead: "Erkunde die Stadtteile Karlsruhes und buche passende Touren und Aktivitäten für deinen Besuch.", count: 3 },
};

/** Liefert eine Platzierung nur, wenn sie existiert und show:true ist. Sonst undefined → Widget rendert nichts. */
export const getGygPlacement = (key: string): GygPlacement | undefined => {
  const p = gygPlacements[key];
  return p && p.show ? p : undefined;
};
