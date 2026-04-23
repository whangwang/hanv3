# Portfolio Project — Developer Reference

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Vue 3.2.13, Options API (no Composition API / `<script setup>`) |
| Router | Vue Router 4, hash-based history (`createWebHashHistory`) |
| Bundler | Vue CLI 5 (Webpack under the hood) |
| Styling | SCSS / Sass 1.32.7 — no CSS custom properties; SCSS variables only |
| Meta | vue-meta 3.0.0-alpha.7 |

---

## Project Structure

```
src/
├── App.vue                  # Root: nav + router-view + footer
├── main.js
├── router/index.js          # All route definitions + page transition logic
├── components/
│   └── ContactSection.vue   # Shared contact section (used by most pages)
├── mixins/
│   └── renderImage.js       # Responsive image helpers (1x/2x/3x srcset)
├── views/
│   ├── Home.vue
│   ├── Work.vue
│   ├── Resume.vue
│   ├── Enquiry.vue
│   └── work/
│       ├── clip/            # Custom page — Clip.vue + index.scss
│       ├── avianlens/       # Custom page — Avianlens.vue + index.scss
│       ├── cloudmatrix/
│       ├── coc/
│       ├── milelync/
│       └── template/        # Generic template reused by nubila, tiago, stickerhd (old)
└── assets/
    ├── styles/
    │   ├── global.scss      # Buttons, page transitions, body defaults
    │   ├── nav.scss         # Sticky nav + footer
    │   ├── font.scss        # Font defaults (* and headings)
    │   └── config/
    │       ├── all.scss     # Barrel import of all config partials
    │       └── scss/
    │           ├── _color.scss      # All SCSS color variables
    │           ├── _typography.scss # Typography extend placeholders
    │           ├── _grid.scss       # Container + column helpers
    │           └── _rwd.scss        # Breakpoint mixins
    └── images/
        └── projects/stickerhd/      # StickerHD project images (already exists)
```

---

## Routing Conventions

Each route in `router/index.js`. Key meta fields used by App.vue:

| Meta field | Effect |
|------------|--------|
| `hideNav: true` | Adds `.detach` class to body → hides global nav |
| `indvidual: true` | Used by Avianlens-type pages |
| `backgroundColor: "#hex"` | Adds `.custom-color` class; sets `body { background-color }` |

**Custom work pages** (Clip, Avianlens) use `hideNav: true` and implement their own nav inside the component.

**To add a new custom work page:**
1. Create `src/views/work/[name]/[Name].vue` + `index.scss`
2. Add route in `router/index.js` with `hideNav: true`
3. Lazy-load: `component: () => import('../views/work/[name]/[Name].vue')`

---

## SCSS Config — Key Values

### Colors (`_color.scss`)
```scss
$primary-green: #6CFFB0
$primary-green-dark: #00D81E
$primary-yellow: #FFF96C
$primary-yellow-dark: #D6CF27
$primary-gradient: linear-gradient(to right bottom, $primary-green 0%, $primary-yellow 100%)

$light:    #FFFFFF
$light-80: #CED2D9
$light-60: #9DA5B2
$light-40: #6D778C
$light-20: #3C4A65
$light-0:  #0B1D3F

$bg:       #0B1D3F   // Default dark navy background
$bg-dark:  #03112B
$bg-light: #E0E8F9
```

### Typography (`_typography.scss`) — use `@extend`
```scss
%h1         // 64px / 900 / italic (48px mobile)
%h2         // 48px / 900 / italic (24px mobile)
%h3         // 32px / 900 / italic (18px mobile)
%h4         // 24px / 600 (18px mobile)
%h5         // 18px / 600 (16px mobile)
%h6         // 16px / 600
%content    // 16px / 400 (14px mobile)
%content-bold  // 16px / 600 (14px mobile)
%content-big   // 18px / 400
%content-hint  // 12px / 600

%clash-text    // Gradient green text with SVG mask overlay
%use-headline  // Switches font-family to Montserrat
```

### Grid (`_grid.scss`)
```scss
$gutter:    16px
$columns:   12   // desktop
$columns-l: 6    // large-pad
$columns-m: 4    // mobile

%container       // max-width 1920px, padding 64px (desktop) / 32px (tablet) / 16px (mobile)
%container-small // max-width 1489px

// Column helper
@function col($i) → (100% - ($columns - 1) * $gutter) / $columns * $i + $gutter * $i
```

### Breakpoints (`_rwd.scss`)
```scss
$desk:        1280px
$small-desk:  1024px
$large-pad:   834px
$small-pad:   600px

@mixin desk()         // ≥ 1280px
@mixin smallDesk()    // ≤ 1279px
@mixin smallDeskOnly()// 1024px–1279px
@mixin largePad()     // ≤ 1023px
@mixin largePadOnly() // 834px–1023px
@mixin smallPad()     // ≤ 833px
@mixin smallPadOnly() // 600px–833px
@mixin mobile()       // ≤ 599px
```

---

## Global Fonts

```scss
// Google Fonts (loaded in font.scss)
'Montserrat'  wght 600, 900; ital — used for headings by default
'Open Sans'   wght 400, 600; ital — used for body by default

// Project-specific pages can import their own fonts (see Clip, Avianlens)
```

---

## Component Patterns

**Options API — standard structure:**
```vue
<template>...</template>

<script>
export default {
  data() { return { ... } },
  mounted() { ... },
  methods: { ... }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
```

**No `scoped` on `<style>`** — isolation via root class naming (e.g. `.work-clip-view`, `.work-al-view`).

**SCSS companion file** — always `index.scss` in the same directory. Start with:
```scss
@import '../../../assets/styles/config/all.scss';

.work-[name]-view {
  // all page styles nested here
}
```

---

## Shared Components

### Global Nav (App.vue)
- Hidden when route has `hideNav: true` (body gets `.detach` class)
- Custom work pages handle their own minimal nav (see Clip, Avianlens)

### ContactSection.vue
```vue
<ContactSection :small="true" :dark="false" :bg="'#hex'" />
```
- `small` → uses `%container-small` width
- `dark` → switches text to dark mode
- `bg` → custom background color

### Responsive Image Mixin (`renderImage.js`)
```javascript
// In components that need responsive images, import the mixin:
mixins: [renderImage],

// Then use:
this.renderCoverImage('stickerhd')   // background-image with dpr-aware URL
this.renderImage(url)                // srcset with @2x/@3x
this.renderBackgroundImage(url)      // background-image with dpr-aware URL
```

---

## Existing Custom Work Pages — Reference

### Clip (`/work/clip`)
- `hideNav: true`, `backgroundColor: "#232B3E"`
- Fonts: Syncopate, Red Hat Display, Red Hat Text
- Colors: dark blue + cyan/teal accents
- Features: scroll-triggered `.inverted` class (dark→light sections), animated card, video bg

### Avianlens (`/work/avianlens`)
- `hideNav: true`, `indvidual: true`, `backgroundColor: "#13140D"`
- Fonts: Yeseva One (serif headlines), Rubik (sans-serif body)
- Colors: dark green + vibrant accents
- Features: parallax bird card, hackathon badge, complex multi-section layout

Both are the canonical patterns to follow for a new dedicated work page.

---

## Page Transitions

Defined in `global.scss`, triggered by router `beforeEach` guard:
- `.next-enter-from` → slides in from right
- `.pre-enter-from` → slides in from left
- Work sub-pages always use `"next"` transition on enter, `"pre"` on leave

---

## Image Assets

Project images in `src/assets/images/projects/[name]/` with `@1x`, `@2x`, `@3x` variants.
StickerHD images already present at `src/assets/images/projects/stickerhd/`.
