// Checks that every text in the hero map fits inside its box, in every language.
// Serve the site first (python -m http.server 4321), then: node scripts/check-map.mjs [base-url]
import puppeteer from 'puppeteer-core';
const base = process.argv[2] || 'http://localhost:4321';
const MIN = 18; // px of space required between a text and the right edge of its box
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 900 });
let bad = 0;
for (const path of ['/', '/it/', '/es/']) {
  await p.goto(base + path, { waitUntil: 'networkidle0' });
  const rows = await p.evaluate(async (MIN) => {
    await document.fonts.ready;
    return [...document.querySelectorAll('svg.map .node')].flatMap((g) => {
      const r = g.querySelector('rect'), edge = +r.getAttribute('x') + +r.getAttribute('width');
      return [...g.querySelectorAll('text')].map((t) => ({ text: t.textContent, room: edge - (+t.getAttribute('x') + t.getComputedTextLength()) }))
        .filter((x) => x.room < MIN);
    });
  }, MIN);
  for (const r of rows) { bad++; console.log(`${path}  "${r.text}" has ${r.room.toFixed(1)}px to the box edge (needs ${MIN})`); }
}
await b.close();
console.log(bad ? `${bad} text(s) do not fit` : 'map: every text fits its box');
process.exit(bad ? 1 : 0);
