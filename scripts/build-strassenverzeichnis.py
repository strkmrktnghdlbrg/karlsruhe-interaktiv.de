#!/usr/bin/env python3
"""
Karlsruher Straßenverzeichnis -> normalisiertes JSON.

Anders als Köln (offizielles XLSX mit Stadtteil/PLZ pro Straße) hat Karlsruhe
kein offenes Straßenverzeichnis mit amtlicher Stadtteil-Zuordnung. Wir bauen es
daher aus zwei offenen Geodaten-Quellen zusammen:

  - ka-streetnames.geojson : Straßennamen + Geometrie (OK Lab Karlsruhe /
        Code for Karlsruhe; Geometrie © OpenStreetMap-Mitwirkende, ODbL).
        1 Feature = 1 Straße (LineString/MultiLineString bzw. Platz = Polygon).
  - ka-stadtteile.geojson  : Die 27 amtlichen Karlsruher Stadtteile als
        Grenz-Polygone (Stadtteilnummer + Stadtteilname).

Die Stadtteil-Zuordnung erfolgt über einen Point-in-Polygon-Join: für jede
Straße werden ihre Stützpunkte gegen die Stadtteil-Polygone getestet, der
Stadtteil mit den meisten Treffern wird zum Haupt-Stadtteil, alle berührten
Stadtteile werden gespeichert (crossesDistricts, wenn mehr als einer).

Karlsruhe kennt KEINE Stadtbezirke über den Stadtteilen (anders als Köln),
daher gibt es hier nur die Ebene Stadtteil.
"""
import json, re, os, unicodedata
from collections import OrderedDict, Counter

HERE = os.path.dirname(os.path.abspath(__file__))
SRC_STREETS = os.path.join(HERE, "ka-streetnames.geojson")
SRC_STADTTEILE = os.path.join(HERE, "ka-stadtteile.geojson")
DATA = os.path.join(HERE, "..", "src", "data")
OUT_STREETS = os.path.join(DATA, "strassen-karlsruhe.json")
OUT_STADTTEILE = os.path.join(DATA, "stadtteile-karlsruhe.json")


def slugify(s: str) -> str:
    s = s.lower()
    s = s.replace("ä", "ae").replace("ö", "oe").replace("ü", "ue").replace("ß", "ss")
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return re.sub(r"-{2,}", "-", s)


# --- Point-in-Polygon (Ray-Casting) mit Bounding-Box-Vorfilter ---------------

def _ring_in(x, y, ring):
    inside = False
    n = len(ring)
    j = n - 1
    for i in range(n):
        xi, yi = ring[i][0], ring[i][1]
        xj, yj = ring[j][0], ring[j][1]
        if ((yi > y) != (yj > y)) and (x < (xj - xi) * (y - yi) / (yj - yi + 1e-18) + xi):
            inside = not inside
        j = i
    return inside


def _poly_in(x, y, polygon):
    # polygon = [outer_ring, hole1, hole2, ...]
    if not polygon or not _ring_in(x, y, polygon[0]):
        return False
    for hole in polygon[1:]:
        if _ring_in(x, y, hole):
            return False
    return True


def _rings_of(geom):
    t, c = geom["type"], geom["coordinates"]
    if t == "Polygon":
        return [c]
    if t == "MultiPolygon":
        return c
    return []


def _bbox(polygons):
    xs, ys = [], []
    for pg in polygons:
        for pt in pg[0]:
            xs.append(pt[0]); ys.append(pt[1])
    return (min(xs), min(ys), max(xs), max(ys))


def _street_points(geom, cap=16):
    """Repräsentative Stützpunkte einer Straßengeometrie (max. cap Stück)."""
    t, c = geom["type"], geom["coordinates"]
    pts = []
    if t == "LineString":
        pts = c
    elif t == "MultiLineString":
        for line in c:
            pts.extend(line)
    elif t == "Polygon":
        pts = c[0]
    elif t == "MultiPolygon":
        for poly in c:
            pts.extend(poly[0])
    if not pts:
        return []
    if len(pts) <= cap:
        return pts
    step = len(pts) / cap
    return [pts[int(i * step)] for i in range(cap)]


def load_stadtteile():
    fc = json.load(open(SRC_STADTTEILE, encoding="utf-8"))
    out = []
    for f in fc["features"]:
        p = f["properties"]
        polys = _rings_of(f["geometry"])
        out.append({
            "num": int(p["Stadtteilnummer"]),
            "name": p["Stadtteilname"],
            "polys": polys,
            "bbox": _bbox(polys),
        })
    out.sort(key=lambda s: s["num"])
    return out


def assign_stadtteil(geom, stadtteile):
    """Gibt (primary_name, primary_num, [alle_beruehrten_(name,num)]) zurück."""
    hits = Counter()
    for pt in _street_points(geom):
        x, y = pt[0], pt[1]
        for st in stadtteile:
            bx0, by0, bx1, by1 = st["bbox"]
            if x < bx0 or x > bx1 or y < by0 or y > by1:
                continue
            if any(_poly_in(x, y, pg) for pg in st["polys"]):
                hits[(st["name"], st["num"])] += 1
                break
    if not hits:
        return None, None, []
    ordered = hits.most_common()
    (pname, pnum), _ = ordered[0]
    touched = sorted({k for k, _ in ordered}, key=lambda k: k[1])
    return pname, pnum, touched


def main():
    stadtteile = load_stadtteile()
    streets_fc = json.load(open(SRC_STREETS, encoding="utf-8"))["features"]

    seen_slugs = {}
    out = []
    unassigned = []
    for f in streets_fc:
        name = (f.get("id") or "").strip()
        if not name:
            continue
        pname, pnum, touched = assign_stadtteil(f["geometry"], stadtteile)
        if pname is None:
            unassigned.append(name)

        base = slugify(name)
        if base in seen_slugs:
            seen_slugs[base] += 1
            slug = f"{base}-{seen_slugs[base]}"
        else:
            seen_slugs[base] = 1
            slug = base

        st_list = [{"name": n, "num": num} for (n, num) in touched]
        out.append({
            "name": name,
            "slug": slug,
            "stadtteile": st_list,
            "crossesDistricts": len(st_list) > 1,
        })

    out.sort(key=lambda s: s["name"].lower())
    os.makedirs(DATA, exist_ok=True)
    with open(OUT_STREETS, "w", encoding="utf-8") as fp:
        json.dump(out, fp, ensure_ascii=False, indent=1)

    # Stadtteil-Übersicht (für Hub-Seiten): Name, Slug, Nummer, Straßenanzahl
    counts = Counter()
    for s in out:
        for t in s["stadtteile"]:
            counts[(t["name"], t["num"])] += 1
    stt_out = []
    for st in stadtteile:
        key = (st["name"], st["num"])
        stt_out.append({
            "num": st["num"],
            "name": st["name"],
            "slug": slugify(st["name"]),
            "streetCount": counts.get(key, 0),
        })
    stt_out.sort(key=lambda x: x["num"])
    with open(OUT_STADTTEILE, "w", encoding="utf-8") as fp:
        json.dump(stt_out, fp, ensure_ascii=False, indent=1)

    # Stats
    n = len(out)
    multi = sum(1 for s in out if s["crossesDistricts"])
    print(f"Straßen (unique):            {n}")
    print(f"ohne Stadtteil-Zuordnung:    {len(unassigned)} ({100*len(unassigned)/n:.1f}%)")
    print(f"über mehrere Stadtteile:     {multi}")
    print(f"Stadtteile:                  {len(stt_out)}")
    print(f"strassen-karlsruhe.json:     {os.path.getsize(OUT_STREETS)/1024:.0f} KB")
    if unassigned:
        print("Beispiele ohne Zuordnung:", unassigned[:12])
    print("\nBeispiel-Straße:")
    print(json.dumps(out[0], ensure_ascii=False, indent=1))


if __name__ == "__main__":
    main()
