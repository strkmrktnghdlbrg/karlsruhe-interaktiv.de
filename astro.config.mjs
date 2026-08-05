import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";

import outboundGate from './integrations/outbound-gate.mjs';
import { unverifiedRestaurantSlugs } from "./src/data/restaurants.ts";
import { restaurantsEn } from "./src/i18n/en/restaurants.ts";

/**
 * Zurueckgezogene Betriebe gehoeren nicht in die Sitemap. Die Detailseite
 * traegt bereits noindex; die Sitemap wuerde Google sonst weiter aktiv auf
 * sie hinweisen. Deutsche und englische URL beide raus.
 */
const withdrawnPaths = new Set(
  [...unverifiedRestaurantSlugs].flatMap((slug) => [
    `/restaurants/${slug}/`,
    ...(restaurantsEn[slug] ? [`/en/restaurants/${restaurantsEn[slug].slug}/`] : []),
  ]),
);

const isWithdrawn = (page) => withdrawnPaths.has(new URL(page).pathname);

export default defineConfig({
  site: "https://www.karlsruhe-interaktiv.de",
  output: "static",
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [outboundGate(), 
    sitemap({
      filter: (page) =>
        !isWithdrawn(page) &&
        !page.includes("/impressum") &&
        !page.includes("/datenschutz") &&
        !page.includes("/agb") &&
        !page.includes("/404") &&
        !page.includes("/r/") &&
        !page.includes("/werben") &&
        !page.includes("/news/") &&
        !page.includes("/en/imprint") &&
        !page.includes("/en/privacy") &&
        !page.includes("/en/terms") &&
        !page.includes("/en/news/"),
    }),
  ],
  vite: {
    plugins: [tailwind()],
  },
});
