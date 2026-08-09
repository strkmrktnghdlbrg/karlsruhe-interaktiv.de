# Offene Punkte — Karlsruhe-Interaktiv (Audit 2026-07-29)

Audit gegen die Familien-Checkliste. **Nichts umgesetzt.**
Repo-Stand: **0 uncommitted, aber 2 Commits noch nicht gepusht.** Dev-Server: Port 4411.
Astro 5.18.2, Boot 899 ms, keine Errors, keine 500er über 38 Routen.

**Datenlage:** sights 25 · hotels 17 · restaurants 28 · districts 14 · news 9 ·
events 6 · guides 3 · **streets 1.827** · stadtteile 27.
Kein `src/content/`, kein `content.config.ts` — alles plain TS in `src/data/*`.

---

## ❌ P1 — Die großen Brocken

### 1. 🔥 Cascade-Bug: JEDER `.btn-primary`-LINK ist unlesbar (1,16:1)
- `src/styles/global.css:47` hat ein **ungelayertes** `a { color: inherit; }`,
  während `.btn-primary` in `@layer components` liegt
  (`global.css:76`, `brand.css:86`).
- **Ungelayertes CSS schlägt gelayertes** → jedes `<a class="btn-primary">` verwirft
  `color: var(--color-accent-contrast)` (`#08090a`) und erbt Body-Weiß `#f7f8f8`
  auf Lime `#e4f222` = **1,16:1**. Praktisch unsichtbar.
- 🔑 **Beweis über den Cascade als Ursache** (gleiche Seite, gleiche Klasse):
  - `<button class="btn-primary">Suchen</button>` → **16,15:1** ✅ korrekt
  - `<a class="btn-primary">Sehenswürdigkeiten entdecken</a>` → **1,16:1** ❌
- Betrifft **jeden primären CTA-Link site-weit**. Schlimmer als Berlins 3,36:1.
- ✅ Andere Paarungen sind okay: `.btn-outline` 18,73 · `.eyebrow` 16,15 · `.pill` 13,64.
  Keine textlosen Buttons.
- 🚨 **WICHTIGSTER FIX.** Und: **das ist wahrscheinlich derselbe Bug, den der User auf
  Frankfurt gemeldet hat** ("Text im Button nicht sichtbar, orange auf orange").
  → **Auf Frankfurt (und allen anderen) nach einem ungelayerten `a { color: inherit }`
  suchen**, bevor dort an Farben geschraubt wird.

### 2. Der Webfont lädt nicht — 4. bestätigter Fall in der Familie
- `src/styles/brand.css:8` lädt **Inter + IBM Plex Mono** per CSS-`@import` von
  `fonts.googleapis.com`; `brand.css` wird selbst in `global.css:2` **nach**
  `@import "tailwindcss"` importiert.
- Build-Warning 3×: `[vite:css][postcss] @import must precede all other statements`
  (konkatenierte Zeile 1133).
- Live-Beweis: `document.fonts.size === 0`, geladene Familien `[]`, **null Requests** an
  fonts.googleapis/gstatic, **kein `<link>` im `<head>`**.
- `--font-sans` löst zu `"Inter", ui-sans-serif, system-ui` auf → Inter kommt nie an.
  **Die ganze Site rendert heimlich in system-ui, beide Familien verworfen.**
- → Self-Host nach Frankfurt-Muster. **Verändert das Aussehen** (Inter erstmals sichtbar).

### 3. 4 Bezirks-Hubs mit NULL Inhalt — 2 davon auf der Startseite
- Von 14 Bezirken: **6 mit 0 Sights** (weststadt, muehlburg, rueppurr, knielingen,
  waldstadt, neureut), **9 mit 0 Hotels**, **9 mit 0 Restaurants**.
- **4 haben gar nichts** → **0 `<h2>`-Sektionen**: `weststadt`, `knielingen`,
  `waldstadt`, `neureut`. Je ~**317 Zeichen** (H1 + ein Absatz), **kein noindex**.
- ❗ **`weststadt` und `muehlburg` stehen auf der Startseite**
  (`index.astro:19`, `districts.slice(0,6)`) → die Startseite verlinkt auf eine
  317-Zeichen-Seite.

### 4. ⚖️ § 5a UWG: "Testsieger" ~12× auf einer Affiliate-Seite
- `src/pages/online-apotheke-karlsruhe.astro`: "Testsieger" ~**12×**, u. a. im
  **`<title>`**, in der **H1**, als absolut positioniertes **`TESTSIEGER`-Badge** (:32)
  und im CTA **"Zum Testsieger DocMorris"** (:126).
- Es ist ein **hauseigener Vergleich**, monetarisiert über `rel="sponsored"`-Affiliate-Links.
  **Kein echter Test.** → Memory `no-test-claims`: umformulieren auf
  "Vergleich"/"Kaufberatung".
- ⚠️ Zusätzlich `banken-in-karlsruhe.astro:33` behauptet **präzise Google-Sterne-
  Durchschnitte** → belegen oder entschärfen.
- ✅ Keine veraltete Jahreszahl ("2026" / "Stand: Juli 2026" ist aktuell).

### 5. Falsche Zahlen in der Startseiten-Hero-Statistik
- `src/data/city.ts:18-23`: **hotels: 18** (tatsächlich **17**),
  **restaurants: 30** (tatsächlich **28**).
- Diese Zahlen rendern direkt in der Hero-Stat-Reihe (`index.astro:63-76`).
- ✅ sights 25 und districts 14 stimmen.

### 6. 1.827 ungeregelte indexierbare Straßenseiten
- `strassenverzeichnis/[strasse].astro:17` mappt **alle** Straßen, alle indexierbar,
  je ~1.140–1.350 Zeichen — über 800, aber formelhaft.
- ✅ Mildernd: `strassen-herkunft-karlsruhe.json` hat **1.827 gefüllte** Einträge, die
  meisten Straßen bekommen echte Etymologie (Person, Lebensdaten, Benennungsjahr,
  frühere Namen). Inhaltlich also besser als Frankfurt.
- ❌ Aber **keine Indexierungs-Policy** — nichts wie Kölns `strassen-policy.mjs`.
  `noindex` steht nur auf 404/Suche/Legal/`r`.
- → Kölns `strassen-policy.mjs` portieren (siehe Köln-Notiz).

---

## ⚠️ P2 — Mittel

### 7. Hotels & Restaurants haben KEINE Bilder (aber sie borgen auch keine)
- `src/data/images.ts` hat nur **2 Namespaces**: `sight:` (22) und `district:` (14).
- **17/17 Hotels und 28/28 Restaurants haben keinen `imageKey`**; 3 Sights fehlen
  ebenfalls (`kit-campus-sued`, `mehlwaage-durlach`, `substage`).
- → **48 DE-Detailseiten ohne echtes Foto** (+ EN-Äquivalente), Fallback `HueGradient`
  (CSS-Gradient — **graceful, nicht kaputt**).
- ✅ **Kein Borrowing** wie Heidelberg/Köln — hier fehlen sie einfach.
- ✅ Und: echte `<img>` via `astro:assets` (Startseite 15 imgs, 12 mit srcset,
  15 lazy) → **nicht** Berlins Zero-`<img>`-Problem.

### 8. Tote & TLS-kaputte Outbound-Links (5 von 25 Hosts)
- ❌ **NXDOMAIN:**
  - `src/data/sights.ts:180` → `www.staatstheater.karlsruhe.de`
    🔑 **Tippfehler: Punkt statt Bindestrich** — `www.staatstheater-karlsruhe.de`
    liefert 200.
  - `src/data/restaurants.ts:80` → `www.kuehler-krug.de`
  - `src/data/restaurants.ts:114` → `www.restaurant-erasmus.de`
- ❌ **TLS kaputt** (Host lebt, aber Browser warnt):
  - `src/data/restaurants.ts:145` → `www.kesselhaus-karlsruhe.de` — **Zertifikat abgelaufen**
  - `src/data/sights.ts:389` → `www.majolika-karlsruhe.com` — **Hostname-Mismatch**
- ✅ Die übrigen 20 liefern 200, keine Bot-Block-Fehlalarme.
- 💡 Merke: reines 404-Checking hätte die TLS-Fälle **nicht** gefunden.

### 9. Sidebar hat die Heidelberg-*Form*, aber nicht den Bug
- `sehenswuerdigkeiten/[slug].astro:68`, `restaurants/[slug].astro:60`,
  `en/attractions/[slug].astro:81`, `en/restaurants/[slug].astro:77`:
  `<aside>` in `lg:grid-cols-[2fr_1fr]` enthält **nur** `<ContentImage>`.
- ⚠️ Gleiche Form wie der Heidelberg-Bug, **aber nicht der Bug**: kein Duplikat, und die
  Widgets rendern absichtlich full-width darunter.
- ✅ Echt gefüllte Asides gibt es: `hotels/[slug].astro:60` und
  `strassenverzeichnis/[strasse].astro:150` (`space-y-5`/`space-y-8`,
  ContentImage + BookingCTA).
- → Entscheidung: die dünnen Asides mit echten Widgets füllen (Vorbild = `hotels/[slug]`).

### 10. Kein TOC — nie gebaut
- **Keine** `ArticleToc`-artige Komponente in `src/components/` (17 Komponenten, keine
  TOC-bezogen); 0 Treffer für `toc`/`Inhaltsverzeichnis`.
- Anders als die Schwestern, die immerhin eine `ArticleToc` haben (nur falsch verdrahtet).

### 11. `city.ts` untertreibt bei den Sprachen
- `src/data/city.ts:9` → `languages: ["de"] as const`, obwohl ein **vollständiger
  EN-Baum** ausgeliefert wird.
- ✅ EN ist **echt komplett**, keine Stubs: sights 25/25, hotels 17/17,
  restaurants 28/28, districts 14/14, events 6/6, guides 3/3
  (`src/i18n/en/*.ts`, 1.464 Zeilen). Alle 10 EN-Routen → 200.
  hreflang korrekt inkl. `x-default` (`BaseLayout.astro:57-74`).
- 🔑 **Umgekehrter Fehler als Köln/Heidelberg**: dort behauptet `city.ts` zu viel,
  hier zu wenig. Aktuell harmlos, weil `city.languages` **nirgends** konsumiert wird —
  aber der nächste Generator-Lauf wird darauf reinfallen.
- ⚠️ Kein EN-Äquivalent für `strassenverzeichnis`, `branchenbuch` und die Money-Pages.

### 12. Consent / Tracking
- GTM `GTM-KXB7ZP9W` (`analytics.ts`) + AdSense `ca-pub-7432388986384363`
  (`adsense.ts`) beide `enabled: true`, feuern **unbedingt beim Load**
  (`BaseLayout.astro:107-123`), kein Consent-Gate im Code.
- ℓ AdSense-Site → Googles CMP erwartet → **nur in PROD verifizieren**, kein Code-Bug
  (Memory `no-custom-cookie-banner`).
- ✅ **Kein** Policy-Widerspruch: `datenschutz.astro` dokumentiert AdSense, Google Ads
  und Tag Manager (alle wirklich installiert) und verspricht **keine** Cookie-
  Einstellungs-UI → **beide Berlin-Inkonsistenzen fehlen hier.**
- ⚠️ `adsense.slots` sind 3 leere Strings, aber nirgends referenziert → toter Config.

### 13. Kleinigkeiten
- ⚠️ `[router]`-Warning wiederholt: `/favicon.ico` hat keinen statischen Pfad und wird
  vom Root-Catch-all `src/pages/[branche].astro` geschluckt; `public/` hat nur
  `favicon.svg`, kein `.ico`.
- ⚠️ `src/data/affiliate.ts:9` `mapEmbedId: ""` — **leerer committeter Wert**, aber
  **nirgends in `src/` referenziert** → toter Config, kein Live-Bug.
- ⚠️ 2 TODOs, nur Code-Kommentare (`affiliate.ts:3`,
  `branchenbuch/eintrag-beanspruchen.astro:16`) — **nicht** user-sichtbar.

---

## 📋 Fakten-Check nötig (nur Liste)

`apotheken-karlsruhe.astro`, `online-apotheke-karlsruhe.astro` ⚠️ (Testsieger, siehe #4),
`banken-in-karlsruhe.astro` ⚠️ (Sterne-Durchschnitte), `parken-in-karlsruhe.astro`,
`parken-flughafen-karlsruhe.astro`, `hoerakustiker-karlsruhe.astro`,
`promis-in-karlsruhe.astro`, `stadtrallye-karlsruhe.astro`, `tech.astro`,
`thema/inka-online.astro`

---

## ✅ Schwester-Defekte, die Karlsruhe NICHT hat — nicht anfassen

1. ✅ **Nicht** der `.card-hover`-ohne-`.card`-Bug — Startseiten-Kacheln nutzen `.card`
   (definiert `global.css:137`, `:hover` :143). 19 Kacheln computed:
   `background rgb(15,16,17)`, `border 1px rgb(35,37,42)`, `radius 6px` → **sichtbar**.
2. ✅ **Kein doppeltes Hero-Bild** — `/sehenswuerdigkeiten/karlsruher-schloss/` rendert
   genau 1 Bild above-fold, keine wiederholte src.
3. ✅ **Kein Bild-Borrowing** (Hotels/Restaurants borgen keine `sight:`/`district:`-Keys).
4. ✅ **Kein Berlin-Zero-`<img>`** — echte `astro:assets`-`<img>` mit srcset + lazy.
5. ✅ **Nicht** der Berlin-`imageCreditData`-zod-Bug — `src/data/images.ts` trägt einen
   vollen `Credit {author, license, licenseUrl, sourceUrl}`-Typ auf **36 von 37**
   Einträgen, und weil alles plain TS ist (**kein zod, keine Collections**) wird
   **nichts gestrippt**. `ContentImage.astro:49-53` rendert beides als echte Links —
   live verifiziert: "Foto: A.Savin" → commons.wikimedia.org + verlinkte CC-Lizenz.
   **Karlsruhe ist hier das Vorbild für Berlin.**
6. ✅ **Kein** user-sichtbarer Dev-Platzhalter (kein `ausstehend|STAY22|lmaID|.ts|TODO`
   im gerenderten Text) — anders als Berlin.
7. ✅ **Kein** `STAY22_API_TOKEN`-vs-`_KEY`-Mismatch: `deploy.yml:39` setzt
   `STAY22_API_KEY`, `src/lib/stay22.ts:94-95` liest `STAY22_API_KEY`. ✅
   `lmaId: "68793f7a3fef65b9bc1ce7b5"` ist ein **committeter echter Wert**.
   ✅ Degradiert sauber: `Stay22TopHotels.astro:41,45` gaten auf `visible.length > 0`
   → ohne lokalen Key rendert **nichts** (keine Hülle, kein Dev-Text).
   ✅ GYG rendert echt (iframe, partnerId `1UPZQQB`, 495px).
8. ✅ **Keine Schwester-Stadt-Reste** — 0 Treffer für Apfelwein/Dippemess/Kölsch/EZB/
   Buchmesse/Römerberg/Veedel/Sachsenhausen. `features.ts`/`guides.ts`/`news.ts` sind
   echt Karlsruhe-authored (KIT, ZKM, CyberForum). Der einzige "Heidelberg"-Treffer ist
   bewusste Copy in `videoproduktion-karlsruhe.astro:25`.
9. ✅ **0 kaputte interne Links** — 263 einzigartige interne hrefs über 15 Seiten
   gecrawlt, alle 200. Kein Slug-Mismatch. **Kein `public/_redirects`** vorhanden;
   `/r/[slug].astro` ist eine echte committete Seite (200, `noindex,nofollow` :34).
10. ✅ **Keine Router-Kollisions-Warnings** (Berlins 20 fehlen — kein `_redirects`).
11. ✅ **Keine leeren Collections / kein `[glob-loader]`-Warning** — es gibt keine
    Collections.
12. ✅ **Keine gestrandeten Blöcke** — Stay22/GYG/RelatedItems liegen im normalen Flow.
13. ✅ Startseite hat einen funktionierenden News-Block: `recentNews(3)` aus
    `src/data/news.ts`, `features.news.enabled = true`. 9 Posts, 3 auf der Startseite,
    alle 9 unter `/news/`, **keine Waisen**.
