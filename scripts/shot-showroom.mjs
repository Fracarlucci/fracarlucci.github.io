// Captures the car showroom on a phone with the lil-gui controls panel collapsed, so the car is visible.
import puppeteer from 'puppeteer-core';
const [out, w, h, mob] = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage();
await p.setViewport({ width: +w, height: +h, deviceScaleFactor: 2, isMobile: !!mob, hasTouch: !!mob });
await p.goto('https://fracarlucci.github.io/car-showroom/', { waitUntil: 'networkidle2', timeout: 90000 });
await new Promise(r => setTimeout(r, 4000));
await p.click('.lil-gui.root > .title').catch((e) => console.log('click failed', e.message));
await new Promise(r => setTimeout(r, 1000));
const closed = await p.evaluate(() => { const root = document.querySelector('.lil-gui.root'); return root ? root.className + ' h=' + Math.round(root.getBoundingClientRect().height) : 'no gui'; });
console.log(closed);
await new Promise(r => setTimeout(r, 1500));
await p.screenshot({ path: out });
await b.close();
