// Captures Teseo with the consent banner removed from the headless page (no choice is made) and a Latin line in the input.
import puppeteer from 'puppeteer-core';
const [out, w, h, mob] = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
const p = await b.newPage();
await p.setViewport({ width: +w, height: +h, deviceScaleFactor: 2, isMobile: !!mob, hasTouch: !!mob });
await p.goto('https://teseo.memoraiz.com', { waitUntil: 'networkidle2', timeout: 60000 });
await new Promise(r => setTimeout(r, 2500));
await p.evaluate(() => document.querySelectorAll('[id*="iubenda"], [class*="iubenda"], [class*="iub-"], [id^="iub"]').forEach(e => e.remove()));
const ta = await p.$('textarea');
if (ta) await ta.type('Gallia est omnis divisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani, tertiam qui ipsorum lingua Celtae, nostra Galli appellantur.', { delay: 0 });
await p.evaluate(() => document.activeElement && document.activeElement.blur());
await new Promise(r => setTimeout(r, 500));
await p.screenshot({ path: out });
await b.close();
