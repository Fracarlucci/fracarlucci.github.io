// Renders the link-preview images (images/og-en.png, og-it.png, og-es.png, 1200 x 630) from each page's hero.
// Serve the site first (python -m http.server 4321), then: node scripts/og.mjs [base-url]
import puppeteer from 'puppeteer-core';
const base = process.argv[2] || 'http://localhost:4321';
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
const p = await b.newPage();
await p.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
for (const [code, path] of [['en', '/'], ['it', '/it/'], ['es', '/es/']]) {
  await p.goto(base + path, { waitUntil: 'networkidle0' });
  await p.evaluate(() => document.fonts.ready);
  // Only the hero: no banner, no bar, no buttons or caption; the hero fills the card.
  await p.addStyleTag({ content: `.banner, .bar, .actions, .hero__map figcaption, .skip { display: none !important; }
    .hero { min-height: 630px !important; height: 630px; border: 0 !important; }
    .hero__grid { padding-block: 0 !important; gap: 48px !important; }
    .hero__text { align-self: center !important; padding-bottom: 0 !important; }
    .map { max-height: 560px; }` });
  await new Promise((r) => setTimeout(r, 300));
  await p.screenshot({ path: `images/og-${code}.png`, clip: { x: 0, y: 0, width: 1200, height: 630 } });
  console.log(`images/og-${code}.png`);
}
await b.close();
