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

## Offen (vor Go-Live / Phase 2)
- Echte Wikimedia-Bilder (Step 8 — aktuell HueGradient-Fallback ueberall)
- Stay22-lmaID nachtragen (src/data/affiliate.ts) + enabled=true
- GTM-ID nachtragen (src/data/analytics.ts) + enabled=true
- AdSense enabled=true (nach Approval)
- GitHub-Repo + Cloudflare-Pages-Deploy
- DEPLOYMENT-PLAN.md erstellen

## Tracking-IDs
- AdSense: ca-pub-3946820918041547 (in ads.txt, disabled bis Live)
- GYG Partner-ID: 1UPZQQB (aktiv)
- Stay22 lmaID: noch zu setzen
- GTM: noch zu setzen

## Lokal testen
```
npm install
npm run dev   # Port 4327
npm run build # static export nach dist/
```
