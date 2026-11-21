// Tiny DOM helpers shared by the menus.
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function h(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

// Modal panel with header + scrollable body. Returns {el, body, close}.
export function panel(game, title, sub, onClose) {
  const root = document.getElementById('menu-root');
  const el = h(`<div class="screen dim"><div class="panel">
    <div class="panel-head"><div><h2>${esc(title)}</h2>${sub ? `<div class="sub">${esc(sub)}</div>` : ''}</div><button class="close-btn" aria-label="Close">✕</button></div>
    <div class="panel-body"></div></div></div>`);
  root.appendChild(el);
  game.audio.ui('open');
  const body = el.querySelector('.panel-body');
  let closed = false;
  const close = () => {
    if (closed) return;
    closed = true;
    game.audio.ui('close');
    el.remove();
    game.ui.popEsc(close);
    onClose?.();
  };
  el.querySelector('.close-btn').onclick = close;
  el.addEventListener('pointerdown', (e) => { if (e.target === el) close(); });
  game.ui.pushEsc(close);
  return { el, body, close };
}
