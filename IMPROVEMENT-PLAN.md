# Improvement-Plan: karlsruhe-interaktiv.de

> Automatisches Audit vom 2026-07-04. Abarbeitbar von jeder Claude-Session. Vor Deploy: Hosting laut ClickUp-Task prüfen.

## 1. Status (Live?, Hosting/Deploy, Build-Stand)

- **Live:** JA. `https://www.karlsruhe-interaktiv.de/` antwortet 200, Apex 301 -> www (www-kanonisch auf Server-Ebene korrekt).
- **Hosting/Deploy:** Apache/cPanel (StackCDN davor). GitHub-Actions-Workflow `.github/workflows/deploy.yml` ("Build & Deploy to cPanel"), Push auf `main` = Deploy, zusätzlich täglicher Cron 05:00 UTC (Stay22-Preis-Refresh). `.cpanel.yml` vorhanden. Achtung: STATUS.md/README nennen noch "Cloudflare Pages" als Plan - veraltet, tatsächliches Hosting ist cPanel.
- **Build-Stand:** Astro 5 static, Build grün, `dist/` mit 317 HTML-Seiten (DE + EN via i18n). Letzte Commits: Parken-und-Fliegen-Affiliate (Awin 14793) und Apotheken-Seiten (2026-07-03), tägliche Auto-Builds laufen.
- **Tracking-IDs (verdrahtet + enabled):** AdSense `ca-pub-7432388986384363`, GTM `GTM-KXB7ZP9W`, Stay22 lmaID `68793f7a3fef65b9bc1ce7b5`, GYG Partner-ID `1UPZQQB`.
- **Secrets:** `STAY22_API_KEY` in `.env` (gitignored, korrekt) + GitHub-Secret. Build-Time-Fetch in `src/lib/stay22.ts` mit Retry/Backoff.

## 2. Kritische Findings (Sicherheit, kaputte Links, Canonical)

1. **Canonical-Mismatch (KRITISCH, SEO):** Server leitet Apex -> www (301), aber `astro.config.mjs` hat `site: "https://karlsruhe-interaktiv.de"` (Apex). Folge:
   - Jeder `<link rel="canonical">` auf der Live-Site zeigt auf die Apex-URL, die per 301 weiterleitet (live verifiziert auf der Homepage: `href="https://karlsruhe-interaktiv.de/"`).
   - `sitemap-index.xml` und `sitemap-0.xml` listen ausschließlich Apex-URLs (alle 301).
   - `public/robots.txt` verweist auf `https://karlsruhe-interaktiv.de/sitemap-index.xml` (Apex).
   - Fix: `site` auf `https://www.karlsruhe-interaktiv.de` ändern + robots.txt-Sitemap-Zeile anpassen, rebuild, deploy. Danach GSC-Property prüfen.
2. **Orphan-Money-Pages (kaputte interne Verlinkung):** `/parken-flughafen-karlsruhe/`, `/apotheken-karlsruhe/` und `/online-apotheke-karlsruhe/` sind von KEINER anderen Seite intern verlinkt (grep über `src/` und Stichprobe in `dist/`: die Parken-Seite wird nur in ihrer eigenen HTML referenziert). Sie hängen nur in der Sitemap - kein Linkjuice, kaum Crawl-Frequenz, kein Nutzer-Traffic aus der Site selbst.
3. **Sicherheit: kein Fund.** Keine hartkodierten API-Keys/Secrets in `src/` oder `public/`, `.env` ist gitignored und nicht im Git-Index, keine `http://`-Links in src, keine Debug-Dateien. Awin-IDs in `public/.htaccess` sind öffentliche Affiliate-Parameter (ok).
4. **Affiliate-Redirects funktionieren:** `/r/parken-fliegen/`, `/r/docmorris/`, `/r/shop-apotheke/` liefern live 302 auf awin1.com mit korrektem `clickref=karlsruhe-interaktiv.de`.

## 3. Vollendung (was zum Fertigstellen fehlt)

- **Stay22-Map fehlt:** `mapEmbedId: ""` in `src/data/affiliate.ts` und wird nirgends gerendert. Laut Playbook: Map-Iframe MUSS `/embed/gm` nutzen (`/embed/widget` ist kaputt/leer). Map auf `/hotels/` und ggf. Bezirks-Hubs einbauen.
- **Kein Kontakt-/Werben-Formular:** Kein Web3Forms im Projekt (grep leer). Sitemap-Filter erwähnt `/werben`, aber die Seite existiert nicht. Für Premium-Phase-2 (Branchenbuch-Upsell) wird eine `/werben/`-Seite mit Web3Forms-Key `b65f4e95-6ac7-4003-a46a-fe4e08b120e2` gebraucht.
- **Doku veraltet:** STATUS.md (Stand 2026-05-29) und README nennen Cloudflare Pages als Deploy-Ziel und "lmaID noch nicht final" (Kommentar in `src/data/affiliate.ts` Zeile 3), obwohl cPanel-Deploy läuft und die lmaID gesetzt ist. Aktualisieren, damit frische Sessions nicht falsch abbiegen.
- **EN-Pendants der Money-Pages fehlen:** Parken-/Apotheken-Seiten existieren nur auf DE. Optional (geringe Prio), aber hreflang-Konsistenz prüfen.

## 4. Monetarisierung (vorhanden / fehlend / kaputt)

**Vorhanden:**
- Stay22 Direct Travel API (Build-Time-Preise) mit eigener lmaID `68793f7a3fef65b9bc1ce7b5`: Homepage, Hotels-Index/-Detail, Sight-Detail, Bezirks-Hubs, 6 Event-Landingpages `/hotels-karlsruhe-<event>/` mit Datums-Preisen. Täglicher Rebuild via Cron.
- GetYourGuide Widget (Partner `1UPZQQB`), global in `src/layouts/BaseLayout.astro` + `GetYourGuideWidget.astro` auf Sight-/Kategorie-Seiten.
- AdSense `ca-pub-7432388986384363` (ads.txt vorhanden) + GTM `GTM-KXB7ZP9W`.
- Apotheken-Duo nach Frankfurt/Köln-Vorbild: `/apotheken-karlsruhe/` (lokal) + `/online-apotheke-karlsruhe/` (Awin-Vergleich medpex/DocMorris/Shop-Apotheke/Fliegende Pillen/mediherz via `/r/`-Redirects in `public/.htaccess`).
- Parken-und-Fliegen FKB: `/parken-flughafen-karlsruhe/` + `/r/parken-fliegen/` (Awin mid 14793), live getestet 302 ok.

**Fehlend:**
- Interne Verlinkung ALLER drei Money-Pages (siehe Finding 2) - ohne Links keine Conversions. Footer-Block "Services" + kontextuelle Links (z.B. Reiseplaner -> Parken, Bezirke -> Apotheken).
- Stay22-Map (`/embed/gm`) - Umsatz-Baustein aus dem Playbook fehlt komplett.
- Eventbrite (bei Köln im Einsatz) - `/events/` ist reine Stay22-Hotellandschaft, keine Ticket-Monetarisierung.
- `/werben/`-Seite für Branchenbuch-/Premium-Einträge (Lead-Kanal).

**Kaputt:** nichts Gefundenes. Alle getesteten `/r/`-Redirects und Einbindungen funktionieren.

## 5. SEO & Traffic (Struktur, interne Links, GEO/AI-Search)

- **Sitemap/Canonical:** siehe Finding 1 (Apex/www-Mismatch) - wichtigster SEO-Fix.
- **Schema.org gut ausgebaut:** TouristAttraction, Hotel, Restaurant, Event, FAQPage (Question/Answer), CollectionPage, PostalAddress/GeoCoordinates, BreadcrumbList (`src/components/Breadcrumbs.astro`). FAQ-Schema bereits auf Money-Pages (Apotheken, Parken, Stadtrallye, Branchenbuch).
- **Interne Verlinkung:** Kern-Content (Sights/Hotels/Restaurants/Bezirke/Kategorien) über RelatedItems + Hubs gut vernetzt. Schwachstellen: Orphan-Money-Pages (Finding 2) und `/tech/`-USP-Hub, dessen Querverlinkung stichprobenartig dünn wirkt.
- **News-Seiten sind per Sitemap-Filter ausgeschlossen** (`astro.config.mjs`) - bewusste Entscheidung, aber prüfen ob einzelne News mit Suchvolumen (z.B. Schlosslichtspiele-Termine) besser indexierbar wären.
- **GEO/AI-Search-Readiness (Pflicht ab 2026):** FAQ-Strukturen vorhanden (gut für LLM-Extraktion). Ausbaufähig: frage-basierte H2s auf Hub-Seiten ("Wo übernachtet man in Karlsruhe am besten?"), Kontext-Attribute (Preisspannen, Entfernungen, Öffnungszeiten als klare Fakten-Sätze), konsistente Entity-Nennung "Karlsruhe/Baden-Airpark FKB". Kein Autoren-Fake einbauen ("kuratiert und aufbereitet" verwenden).
- **robots.txt:** Disallow auf Impressum/Datenschutz/AGB ok, aber Sitemap-URL auf www umstellen.

## 6. Neue Buyer-Intent-Seiten (Tabelle: URL | Keyword-Idee | Monetarisierung)

| URL | Keyword-Idee | Monetarisierung |
|---|---|---|
| `/hotels-karlsruhe-messe/` | hotel messe karlsruhe, offerta karlsruhe hotel | Stay22 (Datums-/Geo-Preise Rheinstetten) |
| `/ferienwohnung-karlsruhe/` | ferienwohnung karlsruhe zentrum | Stay22 (Apartment-Filter) |
| `/wellness-hotel-karlsruhe/` | wellnesshotel karlsruhe umgebung, hotel mit sauna | Stay22 |
| `/hotel-mit-parkplatz-karlsruhe/` | hotel karlsruhe parkplatz kostenlos innenstadt | Stay22 + interner Link auf Parken-Seite |
| `/zoo-karlsruhe-tickets/` | zoo karlsruhe tickets preise eintritt | GYG + AdSense, FAQ-Schema |
| `/stadtfuehrung-karlsruhe/` | stadtführung karlsruhe, schloss führung | GYG (Tours-Widget) |
| `/europa-park-tagesausflug-karlsruhe/` | europa park von karlsruhe, anfahrt tickets | GYG + Stay22 (Hotels Rust) |
| `/schwarzwald-ausfluege-ab-karlsruhe/` | tagesausflug schwarzwald ab karlsruhe | GYG + Stay22 |
| `/silvester-karlsruhe/` | silvester karlsruhe 2026 hotel party | Stay22 Event-Pattern (checkin 31.12.) + GYG |
| `/mietwagen-karlsruhe/` | mietwagen karlsruhe hbf günstig | Awin (Mietwagen-Advertiser aus AWIN-PARTNER-MATCHING.md prüfen), sonst zurückstellen |

## 7. Priorisierte Tasks (nummerierte [ ]-Checkliste, konkret für eine frische Session, mit Dateipfaden)

1. [x] **Canonical-Fix:** In `astro.config.mjs` `site` auf `"https://www.karlsruhe-interaktiv.de"` ändern. In `public/robots.txt` Sitemap-Zeile auf `https://www.karlsruhe-interaktiv.de/sitemap-index.xml` umstellen. `npm run build`, stichprobenartig `dist/index.html` auf www-Canonical prüfen, commit + push (Push = Deploy via GitHub Action). Danach live verifizieren: `curl -s https://www.karlsruhe-interaktiv.de/ | grep canonical`.
2. [ ] **Money-Pages intern verlinken:** In `src/components/Footer.astro` einen Service-Block mit Links auf `/parken-flughafen-karlsruhe/`, `/apotheken-karlsruhe/` und `/stadtrallye-karlsruhe/` ergänzen (DE-Footer reicht). Zusätzlich kontextuelle Links: in `src/pages/reiseplaner/[slug].astro` Hinweisbox auf Flughafen-Parken; in `src/pages/bezirke/[slug].astro` oder Kategorie "Gesundheit" Link auf `/apotheken-karlsruhe/`. Prüfen, dass `/apotheken-karlsruhe/` und `/online-apotheke-karlsruhe/` sich gegenseitig verlinken (Vorbild Frankfurt/Köln).
3. [ ] **Stay22-Map einbauen:** lmaID-Map-Embed mit Endpoint `/embed/gm` (NICHT `/embed/widget`) auf `src/pages/hotels/index.astro` ergänzen; `mapEmbedId` in `src/data/affiliate.ts` setzen bzw. lmaID `68793f7a3fef65b9bc1ce7b5` verwenden. Vorher beim User bestätigen, falls separate Map-ID nötig.
4. [ ] **2-3 Buyer-Intent-Seiten aus Abschnitt 6 bauen** (Start: `/zoo-karlsruhe-tickets/`, `/stadtfuehrung-karlsruhe/`, `/hotels-karlsruhe-messe/`). Pattern: bestehende Event-Landingpage `src/pages/hotels-karlsruhe-[event].astro` bzw. `src/pages/stadtrallye-karlsruhe.astro` als Vorlage, FAQ-Schema + frage-basierte H2s (GEO), interne Links aus passenden Hubs setzen.
5. [ ] **`/werben/`-Seite anlegen** (`src/pages/werben.astro`) mit Web3Forms (Key `b65f4e95-6ac7-4003-a46a-fe4e08b120e2`), verlinkt aus `src/pages/branchenbuch/index.astro` und Footer. Sitemap-Filter in `astro.config.mjs` schließt `/werben` bereits aus (ok so).
6. [ ] **Doku aktualisieren:** `STATUS.md` und `README.md` auf cPanel-Deploy (GitHub Action `deploy.yml`) korrigieren, veralteten Kommentar "lmaID ist noch nicht final" in `src/data/affiliate.ts` entfernen.
7. [ ] **GEO/AI-Search-Pass:** Auf `src/pages/hotels/index.astro`, `src/pages/sehenswuerdigkeiten/index.astro` und Bezirks-Hubs je 2-3 frage-basierte H2-Abschnitte mit prägnanten Fakten-Antworten ergänzen (LLM-extrahierbar), FAQPage-Schema wo sinnvoll.
8. [ ] **Eventbrite prüfen** (optional, Vorbild koeln-interaktiv.de): Ticket-Widget auf `src/pages/events/index.astro` ergänzen, falls Karlsruhe-Inventar vorhanden.
9. [ ] **Nach Deploy:** Google Search Console auf www-Property prüfen, neue Sitemap einreichen, neue Money-Pages via RalfyIndex indexieren lassen (User fragen).
