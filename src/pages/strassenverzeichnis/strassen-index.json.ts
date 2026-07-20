/**
 * Schlanker Such-Index für den Adress-Zoom auf /strassenverzeichnis/.
 * Astro erzeugt daraus beim Build /strassenverzeichnis/strassen-index.json
 * (clientseitig gefetcht und gefiltert). Nur die zum Suchen und Anzeigen
 * nötigen Felder.
 */
import type { APIRoute } from "astro";
import { streets } from "../../data/strassen";

export const prerender = true;

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFKD")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const entries = streets.map((s) => {
  const stt = s.stadtteile.map((t) => t.name).join(", ");
  return {
    n: s.name,
    s: s.slug,
    t: stt,
    k: norm([s.name, stt].join(" ")),
  };
});

export const GET: APIRoute = async () =>
  new Response(JSON.stringify(entries), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
