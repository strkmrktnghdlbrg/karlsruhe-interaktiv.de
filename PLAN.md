# karlsruhe-interaktiv.de — Master-Plan

> **Stadtportal Karlsruhe mit Tech-/Innovation-Profil** (Fächerstadt, KIT, ZKM, BVerfG)
> Design: Linear (Dark Command-Center)
> Domain: karlsruhe-interaktiv.de
> Stand: 2026-05-26

## 1. Strategische Positionierung

**Hook:** "interaktiv" passt zu Karlsruhes Tech-DNA. Dark-Mode-Portal hebt sich visuell stark vom üblichen Tourismus-Look ab.

### 3-Layer-Strategie

1. **Tourist-Layer** — Schloss, ZKM, Pyramide, Durlach/Turmberg. Hotel-Affiliate.
2. **Tech-/Innovation-Layer (UNIKAT)** — KIT-Forschungs-News, ZKM-Ausstellungen, Startup-Szene, CyberForum. **Tech-News als Differenzierung.**
3. **Local-Authority-Layer** — Bezirks-Hubs (Innenstadt-Ost/West, Durlach prominent), Kategorien.
4. **Business-Layer (Phase 2)** — IT-Dienstleister/Agenturen als Premium-Branche.

### Monetarisierung

- **Affiliate**: Stay22, GetYourGuide (Schlosslichtspiele, Stadtführungen)
- **AdSense**: ca-pub-3946820918041547
- **Phase 2**: Premium-Listings + IT-/Tech-Branchen-Spezialisierung

## 2. Design-Entscheidung

**Refero-Style: Linear** → siehe `DESIGN-linear.md`
- Dark Theme: Pitch Black `#08090a` BG, Porcelain Text `#f7f8f8`
- Accent: Neon Lime `#e4f222` (SINGLE Focal Point — sparsam!)
- Secondary: Cyan Spark `#02b8cc`
- Display + Body: Inter Variable
- **Karlsruhe-Twist**: Radiales Fächer-Pattern als Hero-CSS-Gradient (Strahlen vom Schloss-Punkt); Card-Layouts mit geometrischer Präzision

## 3. Stadt-Recherche

Siehe `STADT-RECHERCHE.md` (MVP-v0).

## 4. Datenmodell

```
src/data/
├── city.ts              # Karlsruhe-Metadaten (Lat 49.01 Lng 8.40)
├── districts.ts         # 14 Bezirke (Innenstadt-W/O, Süd, Durlach, Mühlburg, etc.)
├── sights.ts            # ~25 Sights (ZKM, Schloss, Turmberg, BVerfG, Pyramide)
├── hotels.ts            # ~18 Hotels
├── restaurants.ts       # ~28 Restaurants (Badisch + International)
├── categories.ts        # ~11 Kategorien (tech, kunst-medien, wissenschaft, recht, etc.)
├── events.ts            # ~9 Events (Das Fest, Schlosslichtspiele!)
├── news.ts              # ~15 Seed-News (Tech-/KIT-Fokus, Phase 2 via Cron)
└── features.ts          # news: true, branchen: false
```

## 5. Seitenstruktur

Standard + Tech-Schwerpunkt:
- `/` mit radialem Fächer-Hero
- `/news/` (Tech-/Innovations-Fokus)
- `/sehenswuerdigkeiten/`, `/hotels/`, `/restaurants/`
- `/bezirke/durlach/` (mit Turmberg-Detail), `/bezirke/oststadt/` (KIT-Nähe)
- `/kategorien/tech-innovation/` als prominente Kategorie
- `/reiseplaner/3-tage-karlsruhe/`, `/reiseplaner/karlsruhe-mit-kindern/`
- `/events/das-fest/`, `/events/schlosslichtspiele/`
- `/praktisches/oepnv/` (KVV, Stadtbahn-Tram-Hybrid — bekanntes Karlsruher Modell)

## 6. Logo-Konzept

- **Bildmarke**: Fächer aus 7 dünnen Linien in Neon Lime, ausgehend von einem Schloss-Punkt (geometrisch, abstrakt).
- **Wordmark**: "karlsruhe" in Inter 510 + "interaktiv" 70% Opacity Inter 400.
- **Favicon**: Reduzierter 5-Linien-Fächer in Neon Lime.

## 7. Hosting / Deployment

**Default**: Cloudflare Pages.
- Repo: `strkmrktng/karlsruhe-interaktiv.de`

## 8. 12-Step-Workflow-Status

| # | Step | Status |
|---|---|---|
| 1 | Strategische Positionierung | ✅ |
| 2 | Design + brand.css | ✅ |
| 3 | Logo + Favicon | ✅ |
| 4 | Stadt-Recherche | ✅ MVP |
| 5 | Datenmodell | ✅ |
| 6 | Astro-Bootstrap | ✅ (static, Build gruen) |
| 7 | Templates (Dark-Mode-Cards!) | ✅ |
| 8 | Bilder (Schloss, ZKM, Pyramide, Turmberg) | ⏳ HueGradient-Fallback aktiv |
| 9 | News-Seed (KIT-/Tech-Fokus) | ✅ 9 Artikel |
| 10 | SEO + Schema | ✅ Schema.org + Sitemap |
| 11 | DEPLOYMENT-PLAN.md | ⏳ |
| 12 | Domain + Go-Live | ⏳ |

## 9. Nächste 5 Aktionen

1. Astro-Bootstrap (Dark-Mode-First)
2. brand.css Dark Theme
3. Hero mit radialem Fächer-Gradient (CSS)
4. Wikimedia-Bilder
5. KIT-News-Seed (5-10 Artikel)
