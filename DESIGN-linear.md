# Linear Design System – Stadtportal Karlsruhe

> Dark Command-Center. Precision through Tight Tracking. Tech-Hub Karlsruhe (KIT, Fächerstadt).
> Quelle: https://styles.refero.design/style/90ce5883-bb24-4466-93f7-801cd617b0d1

## 1. Farb-Palette

### Brand-Akzente
- **Neon Lime** `#e4f222` — Primary CTA (rar einsetzen!)
- **Aether Blue** `#5e6ad2` — Decorative Highlight
- **Cyan Spark** `#02b8cc` — Info, Icon-Fills
- Deep Violet `#6366f1` / Amethyst `#8b5cf6` — Background-Accents

### Dark-Theme Neutrals
- **Pitch Black** `#08090a` — Primary Page-BG
- **Graphite** `#0f1011` — Card-BG
- Deep Slate `#161718` — Elevated Surfaces
- Charcoal `#23252a` — Borders/Shadowed
- Muted Ash `#323334` — Subtle Borders
- Gunmetal `#383b3f` — Tertiary BG, Input-Borders
- Fog Grey `#62666d` — Muted Text, Metadata
- Storm Cloud `#8a8f98` — Tertiary Text
- Light Steel `#d0d6e0` — Secondary Text
- Alabaster `#e5e5e6` — Info-Borders
- **Porcelain** `#f7f8f8` — Primary Text auf Dark

### Semantik
- Forest Green `#008d2c` / Emerald `#27a644` (Success) / Warning Red `#eb5757`

**Karlsruhe-Akzent-Entscheidung:** Neon Lime `#e4f222` als CTA (futuristic Tech-Vibe), Cyan Spark als Sekundär-Info. Fächerstadt-Geometrie → Karten-Layouts mit radialen Linien (Schloss als Zentrum).

## 2. Typografie

- **Primary**: Inter Variable (Google Fonts) — Weights 300/400/510/590
- **Mono**: Berkeley Mono → Fallback **IBM Plex Mono 400**
- OpenType: `cv01`, `ss03`

Type Scale (Minor Third 1.2 ab 16px):
| Role | Size | Weight | LH | Tracking |
|---|---|---|---|---|
| caption | 10 | 400 | 1.40 | -0.10px |
| body | 14 | 400 | 1.40 | -0.13px |
| heading | 24 | 510 | 1.33 | -0.22px |
| heading-lg | 48 | 510 | 1.20 | -0.22px |
| display | 72 | 510 | 1.00 | -0.22px |

Extended: 11/12/13/15/16/17/20/32/64px verfügbar.

## 3. Spacing & Radius

- Base 4px, **Compact Density**
- Section-Gap 24, Card-Padding 12, Element-Gap 8
- Radius: Tags 2 / Badges 4 / Cards 6 / Inputs 6 / Buttons 6 / Pill 9999

## 4. Shadows (Layered Dark)

```css
--shadow-sm: rgba(0,0,0,0.4) 0px 2px 4px 0px;
--shadow-md: rgba(0,0,0,0.2) 0px 0px 12px 0px inset;
--shadow-subtle: rgb(35,37,42) 0px 0px 0px 1px inset;
--shadow-xl: rgba(8,9,10,0.6) 0px 4px 32px 0px;
```

## 5. Buttons

### Primary Action
- BG `#e4f222` (Neon Lime), Text `#08090a`, Inter 590/15, Radius 6, Padding `12 24`
- **Regel: Single Focal Point pro Viewport**

### Ghost Nav
- Transparent, Text `#f7f8f8`, Radius 0

### Subtle Link
- Transparent, Text `#d0d6e0`, Radius 6, Padding `0 6`

### Nav-Item (Sidebar)
- Transparent, Text `#8a8f98`, Radius 2

## 6. Cards

- **Default**: BG `#0f1011`, Radius 6, Shadow-sm, Padding 8
- **Elevated**: BG `#161718`, Radius `12 12 0 0`, Inset-Border `#23252a`, Padding `24 0`
- **Nested**: BG `#08090a`, Radius 12, kein Shadow, Padding 8

## 7. Hero-Pattern (Homepage)

- Full-bleed `#08090a`, zentrierte Display-Headline
- Porcelain `#f7f8f8` für Max-Kontrast
- Containerized Max-Width
- Minimal-Deko, Typo dominiert
- Karlsruhe-Twist: **radiales Fächer-Pattern** als CSS-Gradient hinter Headline (Strahlen aus dem Zentrum, Schloss-Geometrie)

## 8. Navigation

- Sticky Top Bar, Full-Width
- Optional: Sidebar Left (Application-Style) für Bezirks-Hub
- Items: Ghost-Buttons, Storm-Cloud Text, 2px Radius, Compact

## 9. Inputs

- BG transparent oder `#383b3f`
- Text `#f7f8f8`
- Border `1px #23252a`, Radius 6, Padding `12 14`
- Focus: Border-Enhance

## 10. Tone & Voice

- **"Serious, immersive Canvas"** — keine harten Kontraste
- Single Neon-Lime-Akzent als Aufmerksamkeits-Anker
- Karlsruhe = Tech-Stadt (KIT, FZI, CyberForum) → Linear-Sprache passt perfekt
- Dichte Layouts, technische Klarheit, kein Lifestyle-Fluff
- Geo-Twist: Fächerstadt = radiale Geometrie als wiederkehrendes Motiv

## 11. brand.css (Skeleton)

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;590;700&family=IBM+Plex+Mono:wght@400&display=swap");

@theme {
  --color-accent: #e4f222;          /* Neon Lime — Primary CTA, rar */
  --color-accent-hover: #c8d61a;
  --color-accent-tint: rgba(228, 242, 34, 0.12);
  --color-accent-contrast: #08090a;

  --color-secondary: #02b8cc;       /* Cyan Spark — Info */
  --color-decorative: #5e6ad2;      /* Aether Blue — Background Accent */

  --color-text: #f7f8f8;
  --color-text-body: #d0d6e0;
  --color-text-muted: #8a8f98;
  --color-bg: #08090a;
  --color-surface: #0f1011;
  --color-surface-elevated: #161718;
  --color-border: #23252a;

  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;

  /* Stadtteil-Hues (Karlsruhe Dark-Akzent-Palette) */
  --hue-1: linear-gradient(135deg, #1e1f24 0%, #5e6ad2 50%, #e4f222 100%);
  --hue-2: linear-gradient(135deg, #0a1b1d 0%, #02b8cc 50%, #5eead4 100%);
  --hue-3: linear-gradient(135deg, #1a1a1f 0%, #6366f1 50%, #8b5cf6 100%);
  --hue-4: linear-gradient(135deg, #0f1a0f 0%, #008d2c 50%, #27a644 100%);
  --hue-5: linear-gradient(135deg, #1a0e0e 0%, #7c2d12 50%, #ea580c 100%);
}
```
