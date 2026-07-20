#!/usr/bin/env python3
"""
Baut die Herkunfts-Map für das Karlsruher Straßenverzeichnis.

Quelle: ka-streetnames.geojson (OK Lab Karlsruhe / Code for Karlsruhe). Die
Freitext-Erläuterung (`info`) stammt aus dem Straßennamenbuch der Stadt
Karlsruhe und ist urheberrechtlich geschützt -> sie wird NICHT übernommen.
Übernommen werden ausschließlich nicht schützbare FAKTEN:

  - person / gender / birth / death  (bei nach Personen benannten Straßen)
  - year      : Jahr der offiziellen Benennung
  - previous  : frühere Straßennamen mit Jahr  [[jahr, name], ...]
  - kategorie : aus den Fakten abgeleitete Klassifikation
                (Person / Flurbezeichnung / dokumentiert)

Die eigentlichen Herkunftstexte auf den Seiten werden in src/data/strassen.ts
aus diesen Fakten neu generiert (kein Fremdtext, kein Fabrizieren).
"""
import json, re, os, unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "ka-streetnames.geojson")
OUT = os.path.join(HERE, "..", "src", "data", "strassen-herkunft-karlsruhe.json")


def norm(s):
    s = (s or "").lower().strip()
    s = re.sub(r"\s*\(.*?\)\s*$", "", s)
    s = s.replace("ä", "ae").replace("ö", "oe").replace("ü", "ue").replace("ß", "ss")
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()
    s = re.sub(r"[^a-z0-9]+", "", s)
    return s


def keep(v):
    if v is None:
        return None
    v = str(v).strip()
    return v if v else None


def kategorie(p, info):
    if p.get("person"):
        return "Person"
    low = (info or "").lstrip().lower()
    if low.startswith("flurname"):
        return "Flurbezeichnung"
    return "dokumentiert"


def clean_previous(prev):
    """[[jahr|None, name], ...] -> nur valide Einträge, Jahr als int oder None."""
    out = []
    for entry in prev or []:
        if not isinstance(entry, (list, tuple)) or len(entry) != 2:
            continue
        yr, nm = entry
        nm = keep(nm)
        if not nm:
            continue
        yr = int(yr) if isinstance(yr, (int, float)) else None
        out.append([yr, nm])
    return out


def main():
    feats = json.load(open(SRC, encoding="utf-8"))["features"]
    herkunft = {}
    cat_counts = {}
    for f in feats:
        name = keep(f.get("id"))
        if not name:
            continue
        p = f.get("properties", {})
        info = p.get("info")
        kat = kategorie(p, info)
        cat_counts[kat] = cat_counts.get(kat, 0) + 1

        rec = {
            "name": name,
            "kategorie": kat,
            "person": keep(p.get("person")),
            "gender": keep(p.get("gender")),
            "birth": keep(p.get("birth")),
            "death": keep(p.get("death")),
            "year": int(p["year"]) if isinstance(p.get("year"), (int, float)) else None,
        }
        prev = clean_previous(p.get("previous"))
        if prev:
            rec["previous"] = prev
        rec = {k: v for k, v in rec.items() if v is not None}
        herkunft[norm(name)] = rec

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as fp:
        json.dump(herkunft, fp, ensure_ascii=False, indent=1)

    print("Herkunft-Einträge:", len(herkunft))
    print("Kategorien:", cat_counts)
    print(f"Dateigröße: {os.path.getsize(OUT)/1024:.0f} KB")
    print("\nBeispiele:")
    import itertools
    for k in itertools.islice(herkunft, 0, 4):
        print(" ", json.dumps(herkunft[k], ensure_ascii=False))


if __name__ == "__main__":
    main()
