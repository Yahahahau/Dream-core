# DREAMSCAPE v1.2 — QA checklist (architecture, lighting, SFX)

Automated: `node tools/qa-nav.mjs` (collision-aware reachability), `node tools/qa-portals.mjs`,
`node tools/qa-validate.mjs` (geometry audit). The hotel's own plan check
(`Blueprint.validate()`) runs on every load and is stored in `level.blueprintReport`.

| Check | Method | Result |
|---|---|---|
| Hotel interior = exterior | One `Blueprint` generates both wall faces from the same rooms, doors and windows | Every window is a single opening with glass on the wall centre: the street is visible from the rooms and the lit rooms from the street. |
| Plan consistency | `Blueprint.validate()`: doors on real walls, windows only on exterior walls, no door into a corner, head-room, stairs meet floor levels, riser 14–20 cm, every room reachable | 0 issues (4 floors, 106 spaces, 24 guest rooms). |
| Stairs | Switchback flights generated from floor heights | G→2→3→4 connected; risers 17.1 / 17.5 cm; landings are part of each floor; stairwell walls continuous through slabs. |
| Navigation | Flood fill from spawn with player radius / step / height; doors opened, elevators and portals followed | All exits reachable on all 13 levels. Hotel floors 2–4 are reachable by stairs alone (elevators disabled in the test). |
| Doors kept clear | NavValidator door-clearance (0.65 m / 1.0 m) | 0 blocked doors. Fixed: classroom desks, apartment kitchen counters, Anemoia TV, Starting Zone fence gate. |
| Z-fighting | `GeometryValidator` | 0 between different materials on every level. Window casings now sit 2 mm clear of the wall face; elevator car floor sits 1.5 cm below the landing. |
| Portal doors | `qa-portals` | 26 / 26 pass. |
| Baked lighting | Bake log + screenshots | School 0.38 s, Hotel 1.8 s, Mall 0.46 s, Pool 0.47 s, Apartments 0.36 s, Hallways 0.16 s on LOW (desktop CPU). Repeated vertices reuse results (≈ 80 % fewer rays). |
| Darker areas | Screenshots | Hotel 4th floor (emergency lights, one failing tube), stairwell, service corridor and kitchen are dim; lobby and guest rooms warm. |
| Footsteps | Listening test | 3–4 samples per surface, never the same sample twice in a row, fired on the stride; left/right alternate; volume follows walk/run. |
| Door sounds | Listening test | Open sound when the door starts to swing, close sound when it meets the frame. |
| Loading errors | Console capture | None. |

---

# DREAMSCAPE v1.1 — QA checklist

Run against a production build (`npm run build && npm run preview`).
Automated checks: `node tools/qa-validate.mjs` (geometry audit, opens `?validate=1`)
and `node tools/qa-portals.mjs` (walks up to every portal door and uses it).
Visual checks were made from the player's first-person viewpoint in portrait (430×870)
and landscape (870×430) on every level.

| Check | Method | Result |
|---|---|---|
| Overlapping / coplanar surfaces (z-fighting) | `GeometryValidator` on every level | v1.0: ~1,700 findings → v1.1: 0 between different materials. 17 remaining are same-material faces hidden on building exteriors. |
| Duplicate geometry | Duplicate-placement guard in `LevelBuilder` | Exact duplicates are skipped at build time (only shared railing corner posts trigger it). |
| Floors through walls / walls into floors | Validator + visual | Fixed: white-house foundation, raised pool base, school stairwell filler, mall upper floor, cabin base. |
| Roofs clipping buildings | Visual | Houses rebuilt with the architecture kit: slabs, gable ends, fascia, ridge cap. Chimneys pass through the roof on purpose. |
| Doors intersecting frames | Validator + visual | Door module: 3 mm slab clearance, stops, threshold inside the jambs, openings ≥ door + 5 cm. |
| Furniture in walls | Validator `prop-in-wall` | 0 remaining (sconces, lamp posts, maze lamps and signs, slide support, apartment street lamps moved). |
| Floating objects | Visual | Only intentional dream objects float (Edge of the World, Broken Reality). |
| Broken UVs | Visual | Roof slabs, extruded arcades, gables and vaults use meter-based UVs. |
| Water planes | Visual | Round fountains use round water; no water plane overlaps another. |
| Glass sorting | Code + visual | Transparent materials no longer write depth; railings use inset glass panels. |
| Lighting depth | Visual on all levels | Interior key light + lower ambient; outdoor architecture casts shadows. |
| Shadow quality | Visual + settings test | Texel-snapped frustum (no shimmer), tier-specific bias/normal bias, contact-shading strips at wall bases, blob shadows under props. |
| Door interactions | `qa-portals` | 24 / 24 portal doors pass: prompt, transition, spawn, controls restored. |
| Level 11 exit door | Scripted walk-up + E pressed 3× | Fixed. Prompt appears, Anemoia loads once, spawn correct, controls restored. |
| Player collision | Scripted walking + stairs | Rotated objects now use oriented colliders instead of oversized boxes. |
| Loading errors | Console capture on all levels | None. |
| Graphics presets | Settings test | LOW default (also migrates v1.0 auto-picked tiers), MEDIUM/HIGH switch live and persist. |
| Mobile performance | Draw calls / triangles per level | ≤ 175 draw calls, ≤ 185k triangles per frame on LOW. Dynamic resolution still active. |

## Root cause: Level 11 (and Broken Reality) door
The door on the far hill is rotated 0.12π. Its closed-door collider was the axis-aligned
box around the rotated slab, which sticks out ~18 cm in front of the door. The
interaction line-of-sight test found that box between the camera and the hit point and
treated the door as hidden behind a wall, so the prompt never appeared and the door could
not be used. Fixes:
1. Rotated objects now get oriented colliders (thin slices along the real footprint).
2. Line-of-sight ignores the target's own colliders and stops 30 cm short of the hit point.
3. Transitions lock the door until loading finishes, cannot fire twice, and always restore
   player control (also on a failed load).
