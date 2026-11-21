// Boot splash: shown until the first location has been built.
export function bootSplash() {
  const el = document.createElement('div');
  el.id = 'boot';
  el.style.cssText = 'position:fixed;inset:0;z-index:50;display:grid;place-items:center;background:linear-gradient(#bcdcfb,#eaf4ff 60%,#d9efc9);transition:opacity 1.2s;font:300 1.1rem Georgia,serif;font-style:italic;color:#fff;text-shadow:0 1px 10px rgba(60,90,140,.5);letter-spacing:.1em';
  el.textContent = 'falling asleep…';
  document.body.appendChild(el);
  return {
    done() { el.style.opacity = '0'; setTimeout(() => el.remove(), 1300); },
    error(msg) { el.textContent = msg; el.style.fontStyle = 'normal'; el.style.fontSize = '.9rem'; el.style.padding = '2rem'; el.style.textAlign = 'center'; el.style.color = '#334'; el.style.textShadow = 'none'; },
  };
}
