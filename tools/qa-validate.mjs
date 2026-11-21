import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
const list = (process.argv[2] || 'starting,almond,school,pool,hotel,apartments,mall,maze,hallways,edge,broken,frozen,anemoia').split(',');
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await (await browser.newContext({ viewport: { width: 320, height: 200 } })).newPage();
const logs = []; page.on('pageerror', (e) => logs.push(e.message));
await page.goto('http://localhost:4173/?validate=1', { waitUntil: 'load' });
await page.waitForFunction(() => window.__dream && window.__dream.state === 'menu', null, { timeout: 90000 });
const all = {};
for (const id of list) {
  await page.evaluate((id) => window.__dream.world.goTo(id, 'default', { instant: true, silent: true }), id);
  await page.waitForFunction((id) => !window.__dream.world.busy && window.__dream.world.level.id === id, id, { timeout: 120000 });
  const rep = await page.evaluate(() => window.__dream.world.level.report);
  all[id] = rep;
  const by = {};
  for (const i of rep.issues) { const k = i.type + '/' + i.severity; by[k] = (by[k] || 0) + 1; }
  console.log(id, JSON.stringify(by), 'warnings', rep.warnings.length);
}
writeFileSync('qa-validate.json', JSON.stringify(all, null, 1));
console.log(logs.join('\n') || 'no errors');
await browser.close();
