# portfolio handoff archive

## 2026-11-18 (moved at click-to-play fix)
- 62138ae restyle details: page #0E0E0E; white only on small elements; no underlines; links are white boxes inverting on hover/focus; "View full size" labels hover/focus only. Local checks: no console errors at 1440/390, no overflow, loops muted, Lighthouse mobile local run 94/100/100/100, LCP 3.2 s, CLS 0.
- docs/design-rules.md: P-22..P-24 added; P-01, P-18, P-20, P-21, C-02, C-06, L-15, I-10, M-10 amended.
- Old Resume items: restyle verification list (contrast, Tab, reduced-motion, hover shots) folded into Known issues.

## 2026-11-18 (moved at restyle update)
- b8a43bb first commit: 127 files, 22,368,224 B; workflow run 44288061511 success (23 s).
- Old root-address live checks: 200s for /, styles.css, og.png (1200x630), img/p1-960.avif, video/v1.mp4; custom 404 works; OG tags present; Lighthouse mobile 3 runs 100/100/100/100, LCP 1.4-1.6 s (old white-section design); Playwright 390/1440 0 failed, 0 console errors.
- Superseded decisions: accent WHITE with underline/weight/inverted-block link marking (P-21); click-to-play video facade; page text #EEEEEE.
- /portfolio/ move: canonical/og:url/og:image/twitter:image and site/404.html use /portfolio/ paths.
## 2026-11-18 (moved at first deploy)
- Resume items finished: T-16 fix confirmed (docs/review-3.md pass 4); first commit; Pages source set to Actions; owner approved first push ("push everything").
- Recent changes moved: media sizes (site/img 3,232,285 B; site/video 18,418,709 B; og.png 151,761 B); 7 pieces: Racing schedule 2026 - Champ Car; Champ Car race hype post; Edmonson Motorsports logo; Eztec Games logo; Victory Lap 5 x Edmonson; Toph; YF23 x The One That Got Away. Masters in source/ SHA-256 verified (docs/media-manifest.md).
- Superseded risks: Pages source not set (fixed via API); T-16 open (closed).


## 2026-11-18 (moved at build/review update)
- Old Resume: owner answers 13 curation questions; copy exports to source/, convert images, make previews; Opus review; Pages source; push approval.
- Old status: shell 96 files 391,927 B with placeholders; builder-reported Lighthouse 100x4; curation had 10 pieces (L2-L4 and Edmonson variants, YouTube links, showreel A/B/C, P1/P2 Atlanta date mismatch) now resolved by owner decisions.
- Old decisions: YouTube lite facade (superseded: self-hosted MP4); role/brief/tools per piece (superseded: title, client, tools); rule readings accepted for demo stage I-01, X-13, W-01 (launch rules).

## 2026-11-18 (moved at Phase 2 update)
- Old Resume: sweep source folders inside F:\Work; draft docs/curation.md; ask owner about client name, outside access, YouTube links, showreel; set Pages source.
- Old Recent changes: recorded P-20, P-21 in docs/design-rules.md and direction lines in CLAUDE.md; screenshots in .shots/.
- Resolved: client name Edmonson Motorsports. Old demo-stage defects: D hover-only rules inside (hover: hover); opening runs ~30 px taller than spec; --line unused.

## 2026-11-18 round 2 details (moved from Recent changes)
- Round 2 built, nothing committed or pushed. Spec: docs/demo-directions-r2.md (378 lines, Opus). Placeholders only.
- demos/d "Pit Board": Saira; accent #D6C445 as full-width opening panel, section bars, fully yellow Logos and Contact. Hover: yellow panel slides up over posters. Builder: no defects known. Hover-only rules sit inside the (hover: hover) media query, so keyboard-focus reveals work only on devices matching it. Opening runs about 30 px taller than spec. --line declared, unused.
- demos/e "Plates": Bricolage Grotesque; accent #B5345C raspberry as alternating edge-to-edge plates. Hover: plate swaps colour, art scales. Builder: no defects known. Opus recommended E for the 5-second test. Weak point is contrast: off-white on raspberry 5.20:1, raspberry on background 3.22:1 (Opus's computation, not rechecked).
- demos/f "Timeline": Instrument Sans + JetBrains Mono (timecodes); accent #43B079 green; editing-software layout, slate plus full-width clip timeline, green block per section. Hover: green wipe across details. Builder defects: placeholder tags wrap to 2 lines on narrow facades (and the 9:16 tag at 1440); slate padding 24 px misaligned with 16/32 px page margins below 1024; mobile screenshot not checked closely. Builder used the optional showreel slot as the opening monitor, but the showreel is NOT approved: F needs a non-showreel lead if picked.
- All three builders report: scroll/effects/serif grep empty, one accent hue, no horizontal overflow 320-1920 px. Self-reports only; no independent Opus review yet.
- Screenshots: .shots/demo-{d,e,f}-{desktop,mobile,hover}.png (gitignored), sent to the owner.
- Round 1 (a, b, c) stays on disk for reference; per-demo details in the archive.

## 2026-11-18 round 1 details (moved from Recent changes)
- docs/demo-directions.md: three directions. Opus recommended B for the 5-second test.
- demos/a "Index": text-only index table, one row per piece; Archivo; accent #DE5F3A on links only. Deviation: h1 sets in 2 lines at 1440 px (spec about 3). Not checked: overflow at widths other than 390/1440.
- demos/b "Reel": condensed all-caps headline, full-width showreel frame, equal-height rows; Barlow Condensed + Barlow; accent #D69A48 on play buttons and one email button. Builder reports no overflow at 320/390/768/1440/1920. Nav wraps to 2 lines at 390 px; side caption 8 px from its image. Needs a showreel (not yet approved).
- demos/c "Broadsheet": serif statement beside lead poster, off-centre; Newsreader + Hanken Grotesk; accent #93ADDB on link text only. Not checked: 768 px. Spec conflict (caption min 4 columns vs explicit 3-column slot) resolved for the explicit slot.
- Builders report: scroll/effects grep empty per folder, one accent colour per stylesheet (self-reports, not independently verified).
- Screenshots: .shots/demo-{a,b,c}-{desktop,mobile}.png (gitignored). Method: `npx playwright screenshot --full-page --viewport-size=W,H` on the file:// URL.


## 2026-11-18, Phase 0 and Phase 1 start
Resume items (finished): 1. Opus writes three directions to docs/demo-directions.md. 2. Three Sonnet builders produce demos/a, b, c. 3. Screenshots, send to owner, stop.
Recent changes (Phase 0):
- Wrote docs/design-rules.md from pbakaus/impeccable (Apache-2.0, d41d9860) and ckryptickunal/OpenDesigner (MIT, c9ccc0c5), reference data. C-08 and C-10 are project-derived.
- Created GitHub repo burithu/burithu.github.io (owner approved), added remote origin.
- Created scaffold and pages.yml. Nothing committed.
Session log: 2026-11-18: Phase 0 done (scaffold, design-rules.md, GitHub repo created, remote added). Phase 1 starting.
