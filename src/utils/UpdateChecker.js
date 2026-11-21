// Live updates: polls version.json (written at build time). When a newer build
// is deployed, the player's place in the dream is saved and the page reloads
// itself with a cache-busting URL, then resumes exactly where they were.
const RESUME_KEY = 'dreamscape.resume';

export class UpdateChecker {
  constructor(game, current) {
    this.game = game;
    this.current = current;
    this.url = new URL('version.json', document.baseURI);
    this.interval = 30000;
    this.pending = false;
  }

  start() {
    if (import.meta.env.DEV) return;
    const tick = () => this.check().finally(() => { this._t = setTimeout(tick, this.interval); });
    this._t = setTimeout(tick, 8000);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) this.check(); });
    addEventListener('focus', () => this.check());
  }

  async check() {
    if (this.pending) return;
    try {
      this.url.searchParams.set('t', Date.now());
      const res = await fetch(this.url, { cache: 'no-store' });
      if (!res.ok) return;
      const v = await res.json();
      if (v.build && v.build !== this.current) this.apply(v);
    } catch (e) { /* offline or embedded without access: ignore */ }
  }

  apply(v) {
    this.pending = true;
    const g = this.game;
    g.persistPose();
    try { sessionStorage.setItem(RESUME_KEY, JSON.stringify({ state: g.state, at: Date.now() })); } catch (e) { /* */ }
    g.ui.toast(`A new version of the dream arrived (v${v.version}) — updating…`, 4000);
    setTimeout(() => {
      const u = new URL(location.href);
      u.searchParams.set('v', v.build);
      location.replace(u.toString());
    }, 1800);
  }

  static takeResume() {
    try {
      const r = JSON.parse(sessionStorage.getItem(RESUME_KEY));
      sessionStorage.removeItem(RESUME_KEY);
      if (r && Date.now() - r.at < 60000) return r;
    } catch (e) { /* */ }
    return null;
  }
}
