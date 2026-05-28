# karlsruhe-interaktiv.de — STATUS

**Letzter Stand:** 2026-05-29
**Phase:** 1 — Statisches Portal FERTIG (Build gruen, 119 Seiten)
**Design:** Linear (Dark Command-Center)

## Erledigt (Phase 1)
- Astro-5-Bootstrap (static), Tailwind 4, TS strict
- global.css (Dark-Base) + brand.css (Linear, Faecher-Hero-Pattern)
- Logo + Logo-Mark + Favicon (Faecher in Neon Lime)
- Datenmodell: city, 14 Bezirke, 25 Sights, 18 Hotels, 30 Restaurants, 11 Kategorien, 6 Events, 9 News, 3 Reiseplaner
- Komponenten: Header (Mobile-Drawer Pattern B), Footer, SightCard, HotelCard, RestaurantCard, DistrictCard, NewsCard, ContentImage, HueGradient, BookingCTA, Breadcrumbs, RelatedItems, AttributionFooter
- Pages: Home (Faecher-Hero), Sights +Detail, Hotels +Detail, Restaurants +Detail, Bezirke +Hub, Kategorien +Hub, News +Detail, Reiseplaner +Detail, /tech/ (USP-Hub), Impressum/Datenschutz/AGB, 404
- SEO: Schema.org (TouristAttraction, Hotel, Restaurant), Sitemap mit Filter, robots.txt, ads.txt
- Build: npm run build => 119 Seiten, 0 Fehler

## Erledigt (Nachtrag)
- 36 Wikimedia-Bilder (22 Sights + 14 Bezirke), 4:3 1600x1200, WebP via astro:assets, CC-Attribution in images.ts
- Tracking-IDs verdrahtet + aktiviert
- GitHub-Repo: github.com/strkmrktng/karlsruhe-interaktiv.de (privat, gepusht)

## Offen (vor Go-Live / Phase 2)
- Cloudflare-Pages-Deploy (Repo verbinden, Custom Domain)
- DEPLOYMENT-PLAN.md erstellen
- Restaurant-/Hotel-Bilder bleiben HueGradient (kein Repo-Bild noetig)
- Stay22-Map-Embed-ID optional nachtragen

## Tracking-IDs (LIVE)
- AdSense: ca-pub-7432388986384363 (ads.txt + enabled)
- GTM: GTM-KXB7ZP9W (enabled)
- Stay22 lmaID: 68793f7a3fef65b9bc1ce7b5 (enabled)
- GYG Partner-ID: 1UPZQQB (enabled)

## Lokal testen
```
npm install
npm run dev   # Port 4327
npm run build # static export nach dist/
```
