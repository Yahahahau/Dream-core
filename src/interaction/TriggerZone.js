// Axis-aligned trigger volumes evaluated against the player's feet position.
export function updateTriggers(level, pos, game) {
  for (const t of level.triggers) {
    if (t.once && t.fired) continue;
    const inside = pos.x >= t.min[0] && pos.x <= t.max[0] && pos.y >= t.min[1] - 0.1 && pos.y <= t.max[1] && pos.z >= t.min[2] && pos.z <= t.max[2];
    if (inside && !t.inside) { t.inside = true; t.fired = true; t.onEnter?.(game, t); }
    else if (!inside && t.inside) { t.inside = false; t.onExit?.(game, t); }
    if (inside) t.onStay?.(game, t);
  }
}

// Convenience: trigger box from center/size.
export function zone(level, x, y, z, w, h, d, handlers) {
  level.addTrigger({ min: [x - w / 2, y, z - d / 2], max: [x + w / 2, y + h, z + d / 2], ...handlers });
}
