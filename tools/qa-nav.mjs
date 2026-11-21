// Collision-aware progression check: every exit must be walkable from the spawn.
import { chromium } from 'playwright';
const list = (process.argv[2] || 'starting,almond,school,pool,hotel,apartments,mall,maze,hallways,edge,broken,frozen,anemoia').split(',');
const url = process.env.URL || 'http://localhost:4173/';
const browser = await chromium.launch({ executablePath: process.env.CHROME, args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await (await browser.newContext({ viewport: { width: 320, height: 200 } })).newPage();
const logs = []; page.on('pageerror', (e) => logs.push(e.message));
await page.goto(url, { waitUntil: 'load' });
await page.waitForFunction(() => window.__dream && window.__dream.state === 'menu', null, { timeout: 90000 });
let bad = 0;
for (const id of list) {
  await page.evaluate((id) => window.__dream.world.goTo(id, 'default', { instant: true, silent: true }), id);
  await page.waitForFunction((id) => !window.__dream.world.busy && window.__dream.world.level.id === id, id, { timeout: 120000 });
  const r = await page.evaluate(() => { const r = window.__dream.nav(); delete r.visited; return r; });
  for (const e of r.exits) { if (!e.reachable) bad++; console.log(e.reachable ? '  ok ' : '  BLOCKED', id, `"${e.label}" -> ${e.to}`, e.reachable ? '' : JSON.stringify(e.at)); }
  for (const d of r.doorsClear) if (!d.ok) { bad++; console.log('  DOOR BLOCKED', id, d.door, JSON.stringify(d.at)); }
  for (const s of r.spawnsOnGround) if (!s.ok) { bad++; console.log('  BAD SPAWN', id, s.spawn); }
  console.log(id, 'nodes', r.nodes, r.truncated ? '(truncated)' : '');
}
console.log(bad ? `${bad} problems` : 'all exits reachable');
console.log(logs.join('\n') || 'no errors');
await browser.close();
