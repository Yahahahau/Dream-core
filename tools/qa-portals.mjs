import { chromium } from 'playwright';
const levels = (process.argv[2] || 'starting,almond,school,pool,hotel,apartments,mall,maze,hallways,edge,broken,frozen,anemoia').split(',');
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await (await browser.newContext({ viewport: { width: 320, height: 200 } })).newPage();
const logs = []; page.on('pageerror', (e) => logs.push(e.message)); page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text()); });
await page.goto('http://localhost:4173/', { waitUntil: 'load' });
await page.waitForFunction(() => window.__dream && window.__dream.state === 'menu', null, { timeout: 90000 });
await page.evaluate(() => window.__dream.enterPlay('starting'));
await page.waitForTimeout(1500);
const idle = () => page.waitForFunction(() => !window.__dream.world.busy, null, { timeout: 120000 });
await idle();
let pass = 0, fail = 0;
for (const id of levels) {
  await page.evaluate((id) => window.__dream.world.goTo(id, 'default', { instant: true, silent: true }), id); await idle();
  const n = await page.evaluate(() => window.__dream.world.level.interactables.filter((i) => i.target && i.door).length);
  for (let k = 0; k < n; k++) {
    // stand 1.7 m in front of door k, look at it, check the prompt, then use it
    const r = await page.evaluate(async (k) => {
      const g = window.__dream, lv = g.world.level;
      const it = lv.interactables.filter((i) => i.target && i.door)[k];
      const p = it.doorPose, dx = Math.sin(p.rotY), dz = Math.cos(p.rotY);
      g.player.teleport([p.x + dx * 1.7, p.y + 0.05, p.z + dz * 1.7], Math.atan2(dx, dz));
      g.cam.setPitch(-0.12);
      for (let i = 0; i < 20 && g.interaction.focus !== it; i++) await new Promise((r) => setTimeout(r, 100));
      const focused = g.interaction.focus === it;
      const label = typeof it.prompt === 'function' ? it.prompt() : it.prompt;
      g.input.edges.add('interact');
      return { focused, label, target: it.target.level, from: lv.id };
    }, k);
    await page.waitForTimeout(1200); await idle(); await page.waitForTimeout(300);
    const now = await page.evaluate(() => ({ lvl: window.__dream.world.level.id, frozen: window.__dream.player.frozen, input: window.__dream.input.enabled }));
    const ok = r.focused && now.lvl === r.target && !now.frozen;
    ok ? pass++ : fail++;
    console.log(ok ? 'PASS' : 'FAIL', `${r.from} "${r.label}" -> ${r.target}`, r.focused ? '' : '(no focus)', now.lvl !== r.target ? `(ended in ${now.lvl})` : '', now.frozen ? '(frozen)' : '');
    if (now.lvl !== id) { await page.evaluate((id) => window.__dream.world.goTo(id, 'default', { instant: true, silent: true }), id); await idle(); }
  }
}
console.log(`portals: ${pass} passed, ${fail} failed`);
console.log(logs.join('\n') || 'no errors');
await browser.close();
