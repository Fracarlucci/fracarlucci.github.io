# fracarlucci.github.io

Personal website of Francesco Carlucci, software engineer. Static HTML and CSS in English, Italian and Spanish, served by GitHub Pages.

## Editing

All copy lives in `src/content.mjs`. After changing it, regenerate the three pages:

    node build.mjs

This writes `index.html`, `it/index.html`, `es/index.html` and `map.css`. Styles are in `site.css` (theme tokens in `tokens.css`).

The boxes in the hero map have a fixed width, so after changing a project's short fact (`mapFacts`), check that every language still fits, with the preview server running:

    node scripts/check-map.mjs

## Search and link previews

`build.mjs` also writes `sitemap.xml` and `robots.txt`, and puts canonical and hreflang links, Open Graph tags and a schema.org `ProfilePage` in every page. After a change to the hero, re-render the preview images with the preview server running:

    node scripts/og.mjs

## Screenshots

The project screenshots are taken from the live sites with the scripts in `scripts/` (they need `npm install` for `puppeteer-core` and a local Chrome), then converted to WebP:

    node scripts/webp.mjs

## Preview

    python -m http.server 4321
