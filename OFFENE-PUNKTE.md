# Offene Punkte — karlsruhe-interaktiv.de

**Stand: 2026-08-06.** Teil der Bestandsdaten-Verifikation über alle 20 Stadtportale.
Gesamtüberblick: `../STATUS-Stadtportale.md` · Verfahren: `../City-Portal-Playbook.md` Part D.

| | |
|---|---|
| **D1 Belegfeld** | nur Restaurants |
| **D2 bookingUrl** | Property ok |
| **Einträge ohne OSM-Treffer** | 19 |
| **Nächster Schritt** | D1 fuer Hotels |

## Am 2026-08-06 erledigt

- Branchenverzeichnis (`/branchenbuch/`) in die Hauptnavigation aufgenommen — stand vorher nur im Footer.

## Prüfliste — Einträge ohne OSM-Treffer

> **Kein Urteil, ein Rechercheauftrag.** Der Abgleich akzeptiert nur harte Treffer.
> Ein Nicht-Treffer heißt oft nur, dass OSM den Betrieb nicht kennt — die Trefferquote
> misst OSM-Abdeckung, nicht Datenqualität. Vorgehen: Betreiber-Website oder
> Property-Seite suchen. Gefunden → `source` eintragen. Nichts gefunden → nach D4
> zurückziehen, **nicht** mit erfundenen Koordinaten reparieren.

**Restaurants** (12 von 25 offen · OSM-Referenz für Karlsruhe: 1150 POIs)

- [ ] Erasmus
- [ ] Ristorante La Forchetta
- [ ] Pizzeria Lo Stivale
- [ ] Tre Sorelle
- [ ] Sakai Sushi
- [ ] Hanami
- [ ] Pho Sai Gon
- [ ] Mezzo Mezzo
- [ ] Kebap House
- [ ] Bashar
- [ ] Cafe Kreuzberg
- [ ] Eigelb

**Hotels** (7 von 17 offen · OSM-Referenz: 110 POIs)

- [ ] Novum Hotel Imperial Karlsruhe
- [ ] ACHAT Hotel Karlsruhe City
- [ ] Premier Inn Karlsruhe City
- [ ] Holiday Inn Karlsruhe
- [ ] Hotel Rio
- [ ] Best Western Queens Hotel Karlsruhe-Ettlingen
- [ ] Ramada by Wyndham Karlsruhe

## Offene Entscheidung (gilt für alle Portale)

Wie hart der D1-Maßstab? **Streng** (`coordinates` + `source` + `checkedAt` sofort
Pflicht — hat ev-duisburg von 30 auf 10 veröffentlichte Einträge gekürzt) oder
**gestaffelt** (Koordinaten sofort, `source` mit Frist). Ohne diese Ansage nicht
mit der Umstellung anfangen.
