import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  site: "https://karlsruhe-interaktiv.de",
  output: "static",
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/impressum") &&
        !page.includes("/datenschutz") &&
        !page.includes("/agb") &&
        !page.includes("/404") &&
        !page.includes("/werben") &&
        !page.includes("/news/"),
    }),
  ],
  vite: {
    plugins: [tailwind()],
  },
});
