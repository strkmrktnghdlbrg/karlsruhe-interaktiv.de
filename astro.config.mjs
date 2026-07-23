import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";

import outboundGate from './integrations/outbound-gate.mjs';
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
