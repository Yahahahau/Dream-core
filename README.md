# DREAMSCAPE

A first-person exploration game through dreamcore and weirdcore places — green hills, empty
school halls, poolrooms, a looping hotel, a mall with one floor too many, a hedge maze, a sky
of eyes, a frozen forest and a sunset neighbourhood you have never visited.

**Play:** https://yahahahau.github.io/Dream-core/

Built with three.js + Vite. Works on desktop, Android, iPad and portrait/landscape WebViews.

## Controls

| | Desktop | Touch |
|---|---|---|
| Walk | WASD / arrows | left thumb (virtual joystick) |
| Run | Shift | push the joystick all the way |
| Look | mouse (click to lock) | drag with right thumb |
| Interact | E / F / left click | round button, or tap |
| Journal | J | book button |
| Pause | Esc / P | pause button |

## Locations

00 Starting Zone · 01 Almond Fields · 02 School Hallways · 03 Average Waterpark ·
04 Hotel Halls · 05 Vintage Apartments · 06 Mall or No Mall? · 07 Hedge Maze ·
08 Hallways of Time · 09 The Edge of the World · 10 Broken Reality · 11 Frozen Dream ·
12 Anemoia. The full connection map is in `public/data/levels/levels.json`.

## Development

```bash
npm install
npm run dev      # local server
npm run build    # production build into dist/
```

## Live updates

Every build writes `dist/version.json` with a unique build id. The running game polls it
every 30 s (and when the tab regains focus). When a new build is deployed, the game saves the
player's position, shows a short notice and reloads itself, then resumes in the same place.
Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to the
`gh-pages` branch — so embedded copies (iframe / WebView) update by themselves.

## Project structure

```
src/core/         Game loop, renderer + post FX, world/level streaming, audio, input
src/player/       Player physics, camera (head bob + idle sway), collision, interaction
src/levels/       One file per location + LevelRegistry
src/environment/  Lighting presets, sky/fog, water, particles, grass & trees
src/interaction/  Doors, elevators, notes/examine/portals, trigger zones
src/audio/        Music list, procedural ambience recipes, footsteps
src/ui/           Menu, HUD, journal, pause, settings (responsive, scales with viewport)
src/utils/        Procedural textures, save system, perf monitor, update checker
```

Asset credits: see `ASSET_CREDITS.md`.
