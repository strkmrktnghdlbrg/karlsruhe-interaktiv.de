# Visual-Semantics-Umbau — karlsruhe-interaktiv.de

Datum: 24.08.2026 · Framework: Skill `visual-semantics`

## Warum dieses Template

GSC 25.07.–21.08.2026, Portal gesamt 24.117 Impressionen / 62 Klicks /
CTR 0,26 % / Ø-Pos 59,8.

Die Branchenbuch-Lander (`/[branche]/`, 57 URLs) sind mit **14.782
Impressionen, 30 Klicks und Ø-Position 73,7** die mit Abstand größte
Template-Familie — und die schwächste. Einzelbeispiele:
`/marketingagenturen-karlsruhe/` 2.317 Impr. / 0 Klicks / Pos 85,0;
`/it-dienstleister-karlsruhe/` 1.553 / 0 / 77,3;
`/webdesigner-karlsruhe/` 1.204 / 0 / 88,0.

Das ist eine Local-Service-Query. Soll-Layout laut Matrix: Anbieterliste.
Ist-Layout: Artikel.

## Befund (375 px, `/marketingagenturen-karlsruhe/`)

| Element | y (px) |
|---|---:|
| h1 (3 Zeilen, 120 px) | 181 |
| `description` — Rohabzug des Textanfangs, 263 px hoch | 317 |
| erster Anbieter (H2) | 620 |

Über dem Falz stand **ein** Anbietername. Die Seite las sich für Google wie ein
Aufsatz, nicht wie ein Verzeichnis.

## Umbau

- `src/components/EntityBrief.astro` (portabel über Token-Fallback-Ketten,
  funktioniert im hellen wie im dunklen Portal-Set).
- `src/pages/[branche].astro`: Die H2 im `bodyHtml` bekommen beim Rendern
  stabile Anker (`slugifyHeading`, Dubletten werden entschärft), daraus
  entsteht die Sprungliste „Anbieter auf dieser Seite" (bis zu 10 Einträge).
  Es wird keine Aussage erzeugt — nur Struktur.
- h1 auf Mobile `1,75rem` statt `text-4xl`, `description` als `.branche-lede`
  mit `line-clamp: 4`.

| | vorher | nachher |
|---|---:|---:|
| Lead-Höhe | 263 | 96 |
| Anbieternamen über dem Falz | 1 | 10 |
| erster Anbieter-H2 | 620 | 812 |

## Nachmessen

Ab **21.09.2026**, Vergleich 25.07.–21.08.2026, die 57 Branchen-Slugs.
Position 73,7 ist der Ausgangswert.
