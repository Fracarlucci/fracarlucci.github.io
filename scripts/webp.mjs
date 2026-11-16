// Converts images/screens/*.png into web-sized WebP files in images/ (desktop 1600px wide, phone 780px).
import puppeteer from 'puppeteer-core';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
const p = await b.newPage();
for (const f of readdirSync('images/screens').filter((f) => f.endsWith('.png'))) {
  const src = 'data:image/png;base64,' + readFileSync('images/screens/' + f).toString('base64');
  const max = f.includes('phone') ? 780 : 1600;
  const out = await p.evaluate(async (src, max) => {
    const im = new Image(); im.src = src; await im.decode();
    const s = Math.min(1, max / im.naturalWidth), c = document.createElement('canvas');
    c.width = Math.round(im.naturalWidth * s); c.height = Math.round(im.naturalHeight * s);
    c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
    return { url: c.toDataURL('image/webp', 0.82), w: c.width, h: c.height };
  }, src, max);
  const name = f.replace('-home', '').replace('.png', '.webp');
  writeFileSync('images/' + name, Buffer.from(out.url.split(',')[1], 'base64'));
  console.log(name, out.w, 'x', out.h);
}
await b.close();
