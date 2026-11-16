// node scripts/shot.mjs <url> <out.png> <w> <h> [mobile]
import puppeteer from 'puppeteer-core';
const [url, out, w, h, mob] = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
const p = await b.newPage();
await p.setViewport({ width: +w, height: +h, deviceScaleFactor: 2, isMobile: !!mob, hasTouch: !!mob });
await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
await new Promise(r => setTimeout(r, 6000));
console.log(await p.evaluate(() => [...document.querySelectorAll('h1,h2,h3,section,[class*=activity],[aria-label]')].slice(0,40).map(e => e.tagName + ' ' + (e.getAttribute('aria-label')||e.textContent.trim().slice(0,40))).join('\n')));
await p.screenshot({ path: out });
await b.close();
