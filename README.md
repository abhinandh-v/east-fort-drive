# East Fort Drive — 10 km Explorer

[Play the public browser game](https://abhinandh-v.github.io/east-fort-drive/)

Drive a Defender-inspired SUV on real OpenStreetMap roads within a **10 km radius of East Fort**, Thiruvananthapuram. The region contains 19,987 road sections and 165,687 building footprints. Nearby scenery is loaded into the scene as you travel. Google Maps imagery and data are not embedded.

## Play

WASD or arrows drive; Space brakes. F enters/exits your Defender, C cycles five driving cameras, including a driver’s-seat view, Shift runs on foot, R recovers to the nearest road and repairs the car. M enables/mutes sound, H honks, The circular radar sits at the lower-left edge; click it or press Tab to expand the map and Esc pauses. Touch movement and brake controls are included.

Choose one of eight journeys: Chalai courier, Museum taxi, NH 66 northbound, Coastal evening, Medical supplies, Southern highway ride, City explorer, and Across town express. Routes run from approximately 2 to 16 km of driving. Follow the mint route to amber checkpoints; stop for deliveries or drive through highway checkpoints. Timed tasks have a countdown. Completed journeys award money and a vehicle-condition bonus. Progress stays in this browser.

Use **Ride NH 66** to start on the highway or **East Fort** to return home. Graphics & world contains Low/High/Ultra settings and four vehicle paint choices. Features include HDR reflections, a detailed SUV cabin and wheels, animated suspension/steering, scanned human faces, building windows at night, monsoon rain, vehicle damage, traffic and a road route map. Click Enable sound once for recorded engine, footsteps and rain, with synthesized horn/skid/impact/door effects.

Use **Driver’s view** for the driving position inside the cabin. Cabin glass is hidden in this camera to provide an unobstructed road view and restored for outside cameras. Instructions automatically hide after four seconds; **Clear instructions** or the close button dismisses them immediately. **Instructions / journeys** reopens the controls and journey selector. Trees are checked against all nearby roads, intersections and carriageways with a six-metre clearance beyond the road edge.

## Geographic and visual scope

The map uses OSM road geometry and building footprints projected into metre coordinates around 8.48275 N, 76.94765 E. The source database is supplied as [region.json](./region.json) under ODbL 1.0. Buildings have estimated heights and generated facades. Landmark architecture is interpreted, vegetation is generated, and terrain, bridges and junctions are flattened. Routing permits both directions for gameplay. This is a browser driving game, not a complete digital twin, a navigation service, or GTA V-quality photorealism. No building interiors, police or multiplayer are included. Google Maps cannot be exported into this standalone game under its standard terms, so the reusable map source is OpenStreetMap.

See [world and lighting credits](./WORLD-CREDITS.txt), [human asset credits](./HUMAN-ASSET-CREDITS.txt), and [audio credits](./AUDIO-CREDITS.txt). The generic engine recording is not Defender-specific. The vehicle interpretation is unofficial. Lighting uses a CC0 Poly Haven HDR image for reflections; it is not a photograph of Kerala.

## Source and validation

The root hosts the compiled game; source.zip contains the editable project. Preserve its pnpm lockfile, install dependencies with pnpm, then run `./build.ps1` in PowerShell on Windows. `node serve.mjs` serves dist at the printed local address. The app uses Three.js and React and has no server-side gameplay component.

`node check-region.mjs` validates the 10 km boundary, graph connectivity, highway access and all eight mission routes against the actual data. `node check-expansion.mjs` checks initialization, driving, quick travel, recovery, walking, mission starts, map, weather, quality, pause and cleanup with a mocked renderer. `node check-audio.mjs` validates audio behavior with a mocked AudioContext. Browser integration status checks confirm the dataset and model/HDR loading; these are not a visual review or an audible listening test.

`prepare-map.mjs` rebuilds assets/region.json from the JSON downloaded by fetch-map.mjs. Map data is ODbL; human and audio licenses are in their credit files. React and Three.js license notices accompany the distribution.


## Street life and OCTA-inspired cabin update
Detailed cabin trim, working speed display, steering wheel and jointed hands, a seated scanned-face driver, fabric detail on people, feathered palm leaves, roadside tea/fruit/flower stalls with sellers. The cabin is an original interpretation informed by https://www.landrover.com/defender/defender-octa/index.html , not an exact factory model.
F enters/exits any nearby car (12 traffic cars plus the Defender). Cars retain damage and stay parked after you leave them. Q equips/holsters a sidearm on foot; mouse aims, click/J fires, G reloads. Recorded gunshot audio, muzzle flashes, tracers, collision-aware ray hits, vehicle condition loss, and non-graphic pedestrian damage/fleeing. Sound requires M or the sound button.
Humans still use generated bodies and a reused scanned head; they are not full-body photogrammetry. The OCTA-inspired V8 layer is synthesized over a generic engine recording, not an authentic OCTA recording. Map architecture and terrain limitations remain.


Traffic and village update: car-shaped collision footprints, overlap separation, reversing escape and forward-only yielding. Three fictional Kerala-inspired villages (Coconut Grove, Garden Village and Southern Hamlet), each with 20 homes, gardens and village quick travel. The online indicator uses a separate anonymous presence service when configured; it reports unavailable when no service is connected. It counts active browsers, not multiplayer avatars.


Clear roads and instant travel: complete building footprints are checked against every nearby road segment and road width, including crossing roads and road endpoints. Overlapping buildings are omitted from both rendering and collisions; the source map database stays intact. Go to location opens a persistent selector with 15 destinations and a Go instantly button. Travel retains the current car, uses a free road arrival point and ends the active journey.


Handling and suspension update: progressive speed-sensitive steering with automatic centring, wheelbase-based turning and a lateral-grip limit, smoother acceleration and coasting, service braking before reverse, separate handbrake, and reduced wet/loose-surface grip. Defender suspension uses independent damped wheel movement with body heave, braking dive, acceleration pitch and cornering roll. Road roughness is simulated over the existing flat terrain. S brakes/reverses; Space is the handbrake.

## Sport handling and surface effects

Direct, speed-sensitive steering, stronger dry-road grip and firm, damped suspension reduce float. Loose ground adds gradual rolling resistance without an abrupt speed cap. Grass and gravel have different synthesized tyre and footstep sounds, with a bounded spray of gravel and grass behind moving tyres. This is sport-inspired game tuning, not a factory BMW physics model. Press M to enable sound.

## Detailed character and new outfit

The player and driver wear an olive field shirt, dark denim, a belt, wristwatch and layered shoes, with sewn seams, pockets, cuffs and fabric microtextures. Pedestrians receive the same detailed construction in different colours. Anatomical five-finger hands and forearms are adapted from the CC0 MakeHuman mesh; the existing scanned head is retained with adjusted proportions. Steering grips are shaped around the wheel. This combines generated clothing, anatomical arm meshes and a scanned face; it is not a cinematic full-body scan.
