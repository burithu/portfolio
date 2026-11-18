# Showreel proposal (60-90 s) — DRAFT for owner approval

Status: proposal only. Nothing rendered, nothing built. Source folders were read only; scratch frames and sheets are in `C:\Users\Prithu\AppData\Local\Temp\showreel-plan`.

## 1. The arithmetic, and what follows

V1 17.0 s + V2 31.4 s + V3 45.25 s = **93.65 s** of finished material in total.
A 60 s reel uses 60 / 93.65 = 64% of it; a 90 s reel uses 90 / 93.65 = 96%.

What follows: a 60-90 s reel cannot be a selection. It would be the three edits again, trimmed, in a different order. Every second of it also appears in the three full videos that will be shown directly below it on the same page. The reel adds sequencing and a single link, not new material. A shorter reel (Option B, about 36 s, 38% of the material) is the smallest cut that still shows a spread across all three videos; Option C removes the reel entirely.

## 2. Options

| Option | Length | Material used | One-line rationale |
|---|---|---|---|
| A "Full reel" | 62.408 s | 67% of 93.65 s | Meets the 60-90 s brief, but is mostly the full videos again, with V3 at 76% of its own length. |
| B "Tight reel" | 35.942 s | 38% of 93.65 s | 15 clips of 1.75-3.0 s, one or more from each video, picked for visible editing technique. |
| C "No reel" | 0 s | none | Page shows V1, V2, V3 individually; no new asset, no duplication. |

Option C, what the site loses and gains. Loses: a single 30-60 s asset a visitor can watch without choosing among three videos; a shareable "one link" piece. Gains: no repetition; no extra file to host or clear; each video keeps its own aspect ratio (V3 stays 4:3, no bars or crop); no third unlisted-YouTube upload, so no third copyright-claim exposure.

**Recommendation: Option B** (the owner may prefer C). Reasons, as observable properties:
- Unique material: all three videos total 93.65 s, so a reel in the 60-90 s range repeats 64-96% of what is on the page. B repeats 38%.
- Repetition: the three full videos sit directly below the reel on the same page, so a long reel makes a visitor watch the same shots twice within one scroll.
- V3 is 1440x1080 (4:3), and all 7 of its rows in B are 2.1-3.0 s clips, so black side bars are visible for a short time only. In A, V3 is 34.583 s of a 62.408 s reel (55%), so bars would be on screen for more than half of it.
- B contains all of V1 end card and the clips ranked highest in section 6.
A is possible but is the weaker choice by these three measures. If the owner insists on 60-90 s, A at 62.4 s is the shortest honest version.

## 3. Method and what was measured

- Scene detection: `ffmpeg -vf "select='gt(scene,T)',showinfo"`, threshold 0.3 first; thresholds 0.2 and 0.4 also run (V1: 16/13/10 raw detections at 0.2/0.3/0.4; V2: 28/21/10; V3: 5/4/4). Detections less than 0.3 s apart were merged into one cut (one transition can fire on several consecutive frames).
- V3 produced only 4 cuts at 0.3. Its text and dissolve changes score lower, so a second pass at 0.1 was used for V3 clip boundaries (15 segments listed below). Many V3 "cuts" at 0.1 are lyric text appearing, not a picture change.
- Frames: one per shot at 640 px, contact sheets, plus a 1 fps sheet for V2 and V3. I looked at every sheet. Technique notes marked (inferred) are from cut timing or frame appearance, not from project files (none exist).
- Timecode format `mm:ss.ff`: `ff` is the frame number within that second at the SOURCE frame rate (V1 and V3: 00-23; V2: 00-59). All in/out points were snapped to a source frame boundary.

### Shots found

| Video | Shots at 0.3 (merged) | Start times (s) |
|---|---|---|
| V1 (24 fps) | 10 | 0.000, 2.583, 4.292, 6.000, 7.750, 9.042, 9.458, 11.167, 12.875, 15.042 |
| V2 (60 fps) | 13 | 0.000, 0.333, 3.833, 8.667, 11.567, 11.933, 12.567, 13.100, 13.750, 14.317, 16.300, 16.633, 21.117 |
| V3 (24 fps) | 5 (0.3) / 15 (0.1) | 0.3: 0.000, 9.333, 13.042, 14.375, 14.833. 0.1: 0.000, 9.333, 10.875, 13.042, 13.458, 13.917, 14.375, 14.833, 23.667, 25.208, 27.375, 32.375, 37.625, 39.375, 41.458 |

Notes: V2 has no detected cut between 21.117 s and the end (31.4 s); on the 1 s sheet this stretch shows continuous action in an orange room and, from about 29 s, a "TO BE CONTINUED" text card on black. V2's 8.667 s flash fires three times in 0.15 s. V3 has a black frame at about t = 14 s (1 s sheet), between "IN ANOTHER" and "LIFE".

### What each video visibly shows

**V1** (client collaboration; the owner's role is not stated in curation.md, not assumed here)
- 0.000-2.583: motion-blurred pan of a car on track. Technique: heavy motion blur (visible).
- 2.583-4.292: green car 228 side view with sponsor decals.
- 4.292-6.000: paddock, two green cars, people standing.
- 6.000-7.750: wheel gun at a tyre, mechanic.
- 7.750-9.042: driver in red helmet inside a car.
- 9.042-9.458: door 227 with offset sliced strips. Technique: sliced-strip glitch transition (visible). 9.458-11.167: same door, clean.
- 11.167-12.875: person on ground by a jacked-up car.
- 12.875-15.042: car 228 again.
- 15.042-17.000: white logo mark on black. Technique: end card.
- Cut spacing: 1.708, 1.708, 1.750, 1.292, 2.125, 1.708, 2.167 s. Most gaps are about 1.71 s (inference: cutting to a fixed grid; whether it follows the music beat was not checked against the audio).

**V2** (character edit; third-party animation)
- 0.000-3.833: forest scene, two characters; white caption text appears phrase by phrase ("YOU", "YOU WERE TOSSING ME AROUND", "LIKE A RAGDOLL ALL DAY LONG"). Technique: kinetic captions.
- 3.833-8.667: wide forest shot, captions "I KNOW", "AND I'M AN OLD LADY" in two sizes; a white bar appears at top right near 7 s.
- 8.667-11.567: "IMAGINE ME IN", then "PRIME" over a dark red corridor.
- 11.567-14.317: fire, armoured figure, group jump; cuts every 0.13-0.6 s. Technique: rapid cutting (visible).
- 14.317-16.300: dark smoke shots.
- 16.300-21.117: Toph close-up, door slab, dim green corridor, archer figure.
- 21.117-about 29: orange room, no detected cuts. About 29-31.4: "TO BE CONTINUED" on black.

**V3** (aircraft edit; third-party footage; 4:3)
- 0-9.333: aircraft nose, hangar views. No text.
- 9.333-13.042: "I'D", "BE LOSING", then large "YOU" over a hangar scene.
- 13.042-14.375: "IN ANOTHER" over a climbing jet, then black.
- 14.375-27.375: "LIFE" (jet visibly passes over/through the letters), desert flybys, banking jet, "US AGAINST THE WORLD" with jets crossing the letters.
- 27.375-37.625: two jets in a turn; "I WOULD MAKE YOU STAY" with gradient letter fill.
- 37.625-45.25: jets falling, "THE ONE THAT GOT AWAY" with "AWAY" in sky-filled letters, jet lifting off, purple fade.
- Visible throughout: soft purple/sepia colour tint and video-tape look. Text-over-subject layering (letters and aircraft overlapping) is visible; how it was made (mask, clipping, layer order) cannot be seen and is not stated.

## 4. Audio check

- All three files have an audio stream (V1 AAC 48 kHz stereo; V2 AAC; V3 24-bit PCM).
- Rough loudness (mono 8 kHz decode, 0.5 s RMS windows, dBFS): V1 mean -8.2, range -23.5 to -5.3 (loud and continuous); V2 mean -24.6, range -90.3 (near silence) to -10.8; V3 mean -11.4, range -29.0 to -9.1.
- Loudest 0.5 s windows: V1 at 2.0, 4.0, 6.5, 7.5, 10.0, 11.0 s; V2 at 9.5-11.5 and 15.5 s (the dense cut burst starts at 11.567 s); V3 at 18.5, 22.0, 29.5, 32.5-33.0, 39.0 s. V2 had +6 dB rises at 0.5, 9.0, 17.5, 21.5 s; V1 and V3 had none (continuous music).
- Not done: tempo or beat detection. The V1 cut spacing suggests a grid but is not confirmed against the audio.
- The three tracks differ in level by up to about 16 dB (mean -24.6 vs -8.2 dBFS), so mixing them as they are would need level matching.

## 5. Option A table (Full reel, 62.408 s)

Sources: V1 `F:\Work\Edmonson Racing\videos\victory lap 5 x edmonson\victory lap 5 x edmonson .mp4` (note the space before .mp4); V2 `F:\Video Editing\toph\toph.mp4`; V3 `F:\Video Editing\mortal reminder\runnderban\plane edit\yf23_theonethatgotaway\yf23 x the one that got away.mov`.
Dropped from A: V1 2.583-4.292 and 4.292-6.000 and 11.167-12.875; V2 3.833-8.667, 21.117-end; V3 0-9.333, 13.042-14.375 (black dip). Blocks are in source order (V1, V2, V3), no interleaving.

| # | Src | In | Out | Dur (s) | On screen | Why included |
|---|---|---|---|---|---|---|
| 1 | V1 | 00:00.00 | 00:02.14 | 2.583 | Motion-blurred side pan of a car on track, autumn trees streaking | Opening hook: heavy horizontal blur, strongest first impression in V1 |
| 2 | V1 | 00:06.00 | 00:11.04 | 5.167 | Wheel gun at a tyre, driver in red helmet, then door 227 with offset-strip glitch (about 0.4 s) before it settles | Four shots with a visible sliced-strip transition; shows pacing on a roughly 1.7 s grid |
| 3 | V1 | 00:12.21 | 00:17.00 | 4.125 | Car 228 side view, then white logo mark on black | Clean brand end card; closes the V1 block |
| 4 | V2 | 00:00.20 | 00:03.50 | 3.500 | Close-up of a cartoon character; words stack on screen one phrase at a time ("YOU", "YOU WERE TOSSING ME AROUND", "LIKE A RAGDOLL ALL DAY LONG") | Text animation timed to speech or lyric (inferred), reads without sound |
| 5 | V2 | 00:08.40 | 00:16.18 | 7.633 | "IMAGINE ME IN PRIME" caption, then fast cuts of fire, armour and a group jump (cuts at 11.57, 11.93, 12.57, 13.10, 13.75, 14.32) | Densest cutting in the file: 6 shots (5 cuts) in 2.75 s, coinciding with the loudest audio windows (9.5 to 11.5 s) |
| 6 | V2 | 00:16.18 | 00:21.07 | 4.817 | Close face of Toph, a door slab sliding in, dim green corridor | Slower shots after the burst: shows contrast in pace |
| 7 | V3 | 00:09.08 | 00:13.01 | 3.708 | Aircraft in a hangar; "I'D BE LOSING YOU" builds word by word, "YOU" large over the aircraft | Introduces the lyric-text style on top of footage |
| 8 | V3 | 00:14.09 | 00:27.09 | 13.000 | "LIFE" with the jet passing over the letters, desert flyby, banking jet, "US AGAINST THE WORLD" with jets crossing the letters | Text-in-scene layering (letters and aircraft overlap) plus purple/sepia grade |
| 9 | V3 | 00:27.09 | 00:45.06 | 17.875 | Two jets in a turn, "I WOULD MAKE YOU STAY", jets falling away, "THE ONE THAT GOT AWAY", jet lifting off, fade | Closes the reel on the title lyric |

Totals: V1 = 2.583 + 5.167 + 4.125 = 11.875 s (70% of V1's 17.0 s); V2 = 3.500 + 7.633 + 4.817 = 15.950 s (51% of V2's 31.4 s); V3 = 3.708 + 13.000 + 17.875 = 34.583 s (76% of V3's 45.25 s)

Overall: 11.875 + 15.950 + 34.583 = **62.408 s** (67% of the 93.65 s available).


V3 in-points (14.375, 27.375, 9.333) are on detected changes; the other V3 boundaries come from the 0.1-threshold list. V2 21.117 out-point leaves out the closing text card.

## 6. Option B table (Tight reel, 35.942 s)

Interleaved order (V1, V3, V2, V1, ...) so no source plays more than twice in a row. Each clip is 3.0 s or shorter.

| # | Src | In | Out | Dur (s) | On screen | Why included |
|---|---|---|---|---|---|---|
| 1 | V1 | 00:00.00 | 00:02.14 | 2.583 | Motion-blurred side pan of a car on track | Opening hook; heavy horizontal motion blur visible in frame |
| 2 | V3 | 00:10.21 | 00:13.01 | 2.167 | "YOU" in large letters over aircraft in a hangar, after "I'D BE LOSING" | Large text overlapping footage |
| 3 | V2 | 00:11.34 | 00:14.19 | 2.750 | Fire burst, armoured figure, group jump | 6 shots (5 cuts) in 2.75 s, fastest cutting of the three files |
| 4 | V1 | 00:09.01 | 00:11.04 | 2.125 | Door 227 with offset strips, then settling | Visible sliced-strip glitch transition |
| 5 | V3 | 00:14.09 | 00:16.12 | 2.125 | "LIFE" with the jet passing through the letters | Text and subject overlap |
| 6 | V2 | 00:00.20 | 00:03.05 | 2.750 | Caption stack "YOU WERE TOSSING ME AROUND LIKE A RAGDOLL" | Kinetic caption build |
| 7 | V3 | 00:16.12 | 00:19.12 | 3.000 | Desert flyby, jet low over ground, soft purple and sepia grade | Colour treatment on a text-free shot; gives the reel a breath |
| 8 | V1 | 00:06.00 | 00:07.18 | 1.750 | Wheel gun at a tyre, mechanic in close-up | Close-up detail, 1.75 s shot |
| 9 | V3 | 00:23.16 | 00:26.16 | 3.000 | "US AGAINST THE WORLD", jets crossing behind and over "WORLD" | Strongest text and subject overlap |
| 10 | V2 | 00:08.40 | 00:11.34 | 2.900 | "IMAGINE ME IN" then "PRIME" over a dark red corridor with a figure in armour | Single large caption word on a graded dark shot |
| 11 | V3 | 00:27.09 | 00:30.00 | 2.625 | Two pale jets in a turn over desert | Text-free motion shot, shows grade |
| 12 | V2 | 00:16.18 | 00:18.18 | 2.000 | Toph close-up, door slab sliding across frame | Shot change inside the frame, 2.0 s |
| 13 | V3 | 00:32.09 | 00:34.12 | 2.125 | "I WOULD MAKE YOU STAY" with sky-filled "STAY" | Letter fill taken from the sky (inferred: texture or clipping mask) |
| 14 | V3 | 00:39.09 | 00:41.11 | 2.083 | "THE ONE THAT GOT AWAY", sky-filled "AWAY" | Title lockup |
| 15 | V1 | 00:15.01 | 00:17.00 | 1.958 | White logo mark on black | Brand end card |

Totals: V1 = 2.583 + 2.125 + 1.750 + 1.958 = 8.417 s (50% of V1's 17.0 s); V2 = 2.750 + 2.750 + 2.900 + 2.000 = 10.400 s (33% of V2's 31.4 s); V3 = 2.167 + 2.125 + 3.000 + 3.000 + 2.625 + 2.125 + 2.083 = 17.125 s (38% of V3's 45.25 s)

Overall: 8.417 + 10.400 + 17.125 = **35.942 s** (38% of the 93.65 s available).


### Ranking: skill shown in under 3 s, with the observable reason

1. V2 11.567-14.317: 6 shots (5 cuts at 11.933, 12.567, 13.100, 13.750, 14.317) in 2.75 s. Highest cut density in the three files.
2. V3 23.667-26.667 "US AGAINST THE WORLD": jets visibly cross the letters, text is readable at thumbnail size.
3. V1 9.042-11.167: sliced-strip glitch on a branded door, then resolves in about 0.4 s.
4. V1 0.000-2.583: strongest motion blur in V1; works as an opener.
5. V3 14.375-16.500 "LIFE": jet outline overlaps the letters.
6. V2 0.333-3.083: caption words appear in sequence, readable without sound.
7. V3 39.375-41.458 and 32.375-34.500: letters filled with sky texture.
8. V1 15.042-17.000: logo end card, 1.958 s, plain and legible.
Lower: V1 paddock and V1 car 228 repeats (the same car appears at 2.583 and 12.875), V3 hangar intro (no text, no motion of note), V2 dark smoke shots.

## 7. Technical plan, only if approved

- Output: 1920x1080, H.264 MP4 (YouTube accepts it; the owner uploads it unlisted). The curation file says videos are supplied as unlisted YouTube links by the owner, never uploaded by the build.
- Frame rate: sources are 24 (V1), 60 (V2), 24 (V3) fps. Recommend **24 fps**: two of three sources are 24, and converting 24 to 60 would repeat frames unevenly (60/24 = 2.5) across both of them. V2 at 60 to 24 also divides unevenly (2.5), which gives a small uneven stutter in motion; frame blending could soften it. Whether V2 was made from 24 fps animation is not known (inference: animated series are often 24 or 12 drawings per second). The alternative is 30 fps for everything; it is not recommended because it also is not a multiple of 24.
- V3 at 4:3 in a 16:9 frame:
  - Pillarbox: 1440x1080 placed in the centre of 1920x1080, bars of (1920 - 1440) / 2 = 240 px each side, 100% of the picture kept.
  - Crop to 16:9: keeps 1440x810, i.e. 75% of the height (270 px removed, 135 top and bottom), then scales up by 1920/1440 = 1.33x, softening already soft footage. V3's lyric text sits at the top ("I'D BE LOSING", "US AGAINST") and the bottom ("AWAY", "WORLD") of the frame, so cropping would cut letters.
  - **Recommend pillarbox** with plain black bars. (Option: a blurred copy of V3 behind it; this adds an effect and is the owner's choice.)
- Audio: options for the owner, not chosen here. (a) Keep each clip's own track with short crossfades; the three tracks differ in loudness by up to about 16 dB and in tempo, so the result would sound like three songs. (b) One source's track under the whole reel. (c) The owner supplies one track. (d) No audio. For B, (a) is the least workable (clips of 2-3 s).
- Titles and credits: none on the clips. One neutral end card, 2 s: "Name — Graphic design and video editing" (PLACEHOLDER; name and wording to be given by the owner). No client or brief text is invented.
- Deliverable: one MP4 for the owner to upload to YouTube as unlisted; embedded behind the site's facade.

## 8. Risks

- V2 and V3 are built from third-party footage and commercial music (curation.md, Notes for V2 and V3: animation footage and `R.I.P..mp3`; aircraft footage and a Katy Perry track named in the file list). V1's music is unconfirmed (`Victory Lap Four.mp3` may not belong to V1).
- A reel reuses the same audio and footage a second time as a new upload. Automated copyright matching on YouTube can mute, block, or monetise a video; unlisted does not exempt it. Whether to accept that, or to use only V1 (or owner-supplied audio) is the owner's decision. This note is not legal advice.
- A reel dominated by V3 and V2 (A: 81% of its length from those two) carries more of this risk than one dominated by V1.
- V3 is 4:3, and the tape-like look is part of the edit, so quality will look lower next to V1 and V2 in the same reel.

## 9. Questions for the owner

1. A, B, or C?
2. If a reel: is the audio the owner's own track, a source track, or none?
3. May V2 and V3 (third-party footage and music) appear in a reel, given the claim risk above?
4. Is V3 pillarboxed (recommended) or cropped?
5. Is a 2 s end card acceptable, and what are the name and wording ("Graphic design and video editing" is a placeholder)?
6. Are there other finished edits that could add unique material?
7. Is it fine to use `.mov` for V3 (or `yf23.mp4`, 30 fps)?
