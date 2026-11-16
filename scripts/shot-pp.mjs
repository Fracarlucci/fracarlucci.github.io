// Captures the PingoPongo leaderboard without real people: keeps the first four rows, renames them
// Player A to D, blanks every avatar, drops the rest. Works by position, so no names live in this file.
// node scripts/shot-pp.mjs <out.png> <width> <height> [mobile]
import puppeteer from 'puppeteer-core';
const [out, w, h, mob] = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
const p = await b.newPage();
await p.setViewport({ width: +w, height: +h, deviceScaleFactor: 2, isMobile: !!mob, hasTouch: !!mob });
await p.goto('https://pingo-pongo-memo.vercel.app/', { waitUntil: 'domcontentloaded', timeout: 60000 });
await new Promise((r) => setTimeout(r, 6000));
const n = await p.evaluate(() => {
  // A leaderboard row: climb from each rating's "±" until the next parent would hold a second rating.
  const count = (e) => (e.textContent.match(/±/g) || []).length;
  const rows = [...document.querySelectorAll('*')].filter((e) => e.children.length === 0 && e.textContent.includes('±')).map((leaf) => {
    let row = leaf; while (row.parentElement && count(row.parentElement) === 1) row = row.parentElement; return row;
  });
  rows.forEach((row, i) => {
    if (i >= 4) { row.remove(); return; }
    // The name is the first leaf text that is not a rank, a number or a stat line.
    const name = [...row.querySelectorAll('*')].find((e) => e.children.length === 0 && /[A-Za-z]{2,}/.test(e.textContent) && !/\d/.test(e.textContent));
    if (name) name.textContent = 'Player ' + 'ABCD'[i];
    row.querySelectorAll('img').forEach((img) => {
      const r = img.getBoundingClientRect(), box = document.createElement('span');
      box.style.cssText = `display:inline-block;width:${r.width}px;height:${r.height}px;background:#2a2a2a`;
      img.replaceWith(box);
    });
  });
  // Initial-letter avatars (no image) would still hint at names: blank any single capital letter left in a row.
  rows.slice(0, 4).forEach((row) => row.querySelectorAll('*').forEach((e) => { if (e.children.length === 0 && /^[A-Z]$/.test(e.textContent.trim())) e.textContent = ''; }));
  return rows.length;
});
console.log('rows found', n);
await p.screenshot({ path: out });
await b.close();
