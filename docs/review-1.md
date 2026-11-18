# Review 1: launch build, independent final review

Reviewer: independent (did not build the site). Date: 2026-11-18. Scope: `site/` (index.html, styles.css, script.js, 404.html, favicon.svg, og.png, fonts/, img/, video/). Rulebook: `docs/design-rules.md`. Local server `python -m http.server 8130`, Edge 1xx via Playwright 1.49.1 (channel msedge), Lighthouse 13.6.0 with CHROME_PATH set to Edge. Screenshots: `.shots/review-1/`. Scripts and raw output: scratchpad `review-1/` (shots.js, measure.js → measure.json, states.js → states.json, geo.js, lh.json, lh404.json).

## Verdict: PASS WITH FIXES

All 21 P-rules pass. Lighthouse mobile scores were 99/100/100/100 on a local run. There are 15 blocking findings: rule violations and visible defects. Each one has a fix of a few lines of copy or CSS. The site is not launch-ready until they are fixed or the owner waives them.

## Blocking

| # | Rule | Finding and evidence | Smallest fix |
|---|---|---|---|
| B1 | W-02, W-08 | Each poster and logo is one large link (`h3 a::after{inset:0}`, styles.css:113) that points to its own anchor (index.html:64, 68, 79, 84). Clicking or tapping the artwork only jumps the page. Measured: at 1440 a click on p2 moved scrollY 885 → 1068 (+183 px, hash `#p2`). On a 390 touch screen a tap moved scrollY 1414 → 1761 (+347 px). The link text "Final Logo" also makes no sense out of context. | Point each title link at the full-size file (`img/p1-1440.jpg`, `img/p2-1080.jpg`, `img/l1-1024.jpg`, `img/l5-512.jpg`). A click then opens the artwork, and keyboard focus still reveals the fields. |
| B2 | Owner decision "no dates in site text" | "Racing Schedule 2026 – Champ Car" is visible twice (index.html:55, 64) and is also in the alt text (index.html:65). | Retitle it "Racing Schedule – Champ Car", or get a written owner waiver that the year is part of the title. |
| B3 | W-01 | The title "Final Logo" (index.html:79) is the source folder and file name (`final logo/`, `final logo_black.png`; curation.md:48-67). It names a version state, not the work. | Rename it "Edmonson Motorsports Logo", which matches "Eztec Games Logo". The owner confirms. |
| B4 | L-07 | At 1024 px and wider, the white area under the h1 in the text column is empty. Measured: 805×462 px = 36.3% of a 1280×800 viewport, and 912×532 px = 37.4% of 1440×900 (`1440-00-first.png`). On the 404 page about 79% of a 390×844 viewport is empty below the white panel (`390-404.png`). | Put a second piece in cols 1-8 under the h1 at ≥1024, for example the V1 poster frame linking to `#v1`. This also puts video in the first screen (see N1). On the 404 page, add the header and footer (B11). |
| B5 | L-01, L-09 | (a) The Eztec fields use 2 columns that ignore the 3 tiles above them. The "Tools" column starts at x=902 while the tiles start at 380/728/1076 (1440). Same at 1280 (802 vs 648/956) and 768 (484 vs 392/576) (`1440-02-y1800.png`). (b) Video row at ≥1024: the V2 media bottom is at 4021 and the V3 media bottom at 3997 (24 px apart). The fields bottoms are at 4127 vs 4102. At 1280 the media bottoms are 22 px apart (`1440-04-y3600.png`). | (a) `.l-ezt .fields{grid-template-columns:repeat(3,minmax(0,1fr))}` with the same gap as `.set`, or one column like Edmonson. (b) Make `.vid-a,.vid-b` use `grid-row:span 3; grid-template-rows:subgrid` inside a 3-row `.vid-row` so that both field panels start on the same line. |
| B6 | L-09, visible defect | The Edmonson logo is a white-background JPG placed on the white Logos section, so the "white plate" has no visible edge. The logo ink covers only x 83-429, y 173-340 of 512 (bbox measured with PIL). At 1440 the ink therefore starts 54 px right of the title's left edge and fills 33% of the tile height. It reads as a small logo floating, misaligned, in blank space (`1440-hover-logo.png`, `390-02-y1688.png`). | Draw the plate edge: `.l-edm .art{outline:2px solid var(--on-accent);outline-offset:-2px}`. Or crop the plate to the ink plus an even margin. |
| B7 | C-05, M-09 | The focus ring on the video facades is invisible. `:focus-visible{outline:3px; outline-offset:3px}` (styles.css:68) draws outside the button, and the parent `.media{overflow:hidden}` (styles.css:160) clips it. Measured: `clippedBy: "media r-169"` (states.json), screenshot `1440-focus-facade.png`. The injected `<video>` has the same problem after play. Focus is only shown by the play bar and the inverted title. | Remove `overflow:hidden` from `.media`, because `.facade` already clips its own children. Or set `outline-offset:-3px` on `.facade` and on `.media>video`. |
| B8 | W-04 | The header "burithu" sits directly above the h1 line "burithu" (390 first screen, y≈20 and y≈132; `390-00-first.png`). Contact repeats "burithu / Graphic design and video editing" word for word (index.html:119). The name appears 5 times on the page. | Give `.h1-name` the `.sr` class so it stays in the h1 but is not shown. Delete `p.about` in Contact. |
| B9 | I-02 | The V3 alt text says "a dark jet with lyric text", but no lyric text is visible in v3-960.jpg (jet fuselage, hangar, sand, livery "NORTH…"). The V2 alt "Poster frame for Toph" does not describe the image at all (index.html:103, 108). | Describe what is visible, for example "Armoured animated figure firing a blast of flame" (V2) and "Dark YF-23 jet parked by a hangar" (V3). |
| B10 | W-06 | Capitalisation is mixed. Descriptive titles are in Title Case ("Champ Car Race Hype Post", "Eztec Games Logo", "Final Logo"), while the role line and all controls use sentence case ("Play with sound", "Copy username", "Back to top", "Graphic design and video editing"). | Use sentence case for descriptive titles ("Champ Car race hype post"). Keep proper names as they are. |
| B11 | L-08 | 404.html has no header and no footer (404.html:11-21), so the page width, edges and identity differ from the home page. | Copy the header and footer markup into 404.html, with links changed to `/#…`. |
| B12 | M-04 | The link transition is 80 ms (styles.css:60) and the play-text fade-out is 80 ms (styles.css:228). Both are below the 100-150 ms feedback band. | Change them to 120 ms. |
| B13 | M-06 | `text-decoration-thickness` is transitioned (styles.css:60). Only transform, opacity and colour may animate. | Remove it from the transition list and keep the instant thickness change. |
| B14 | M-09 | The active state looks the same as hover. Links: `a:active` (styles.css:62) and `a:hover` (styles.css:223) produce the same inverted block and 4 px underline. Copy button: `:active` (styles.css:200) is the same as `:hover` (styles.css:224). | Give `:active` its own state, for example the underline back at 2 px or `outline:2px solid currentColor;outline-offset:-4px` on press. |
| B15 | T-15 | `font-display:swap` is set, but the fallback face has no adjusted metrics (no `size-adjust`/`ascent-override` fallback @font-face). Measured impact is small (Lighthouse CLS 0, because the font is preloaded). | Add `@font-face{font-family:"Saira fallback";src:local("Arial Narrow");size-adjust:…}` and put it in `--font` before Arial Narrow. |

## Non-blocking

- N1 (5-second test): no video imagery is visible without scrolling at 390, 768 or 1440. "Video editing" is carried only by the h1 text and the "Video" nav link. The first video frame starts at y≈2960 at 1440 (focus order data).
- N2: the same poster (p1) is shown twice: in the opening, and as the first item of Posters about one screen later. The "Racing Schedule 2026 – Champ Car" link under the opening poster jumps to that second copy. The first two screens at 390 show one piece of work.
- N3: on touch screens the play bar is always shown and covers the bottom 56 px of the V1/V2 frames (56/201 = 27.9%) and of V3 (56/269 = 20.8%) at 390. On V1 it cuts off the race number (`touch-390-video.png`).
- N4: contrast of the white play key against the frame pixels at its edge: v1 average 3.53:1 (worst pixel 3.29:1), v2 20.09:1, v3 average 4.66:1 (worst pixel 1.95:1, against sand). That passes 3:1 on average, but the v3 key partly blends into the frame at its right edge.
- N5: the V3 poster frame has a black matte burned into the image, 14/16/11/11 px (left/right/top/bottom) of 960×720 (PIL edge scan). It shows as a dark inner band in the 4:3 frame (`1440-04-y3600.png`). ffmpeg cropdetect on v3.mp4 finds no matte (`crop=1280:960:0:0`), so only the poster frame is affected. Re-export it from an unmatted frame.
- N6: after play, the title stays inverted (`.piece:focus-within .t`) for as long as the video has focus (`1440-v1-after-play.png`). It looks like a stuck hover.
- N7: on click, the poster swap requests `img/v1-960.jpg` (82,909 B) even though the AVIF was already showing. On high-DPR screens it also swaps a 1440 source for a 960 one. Fix: copy the `currentSrc` of the facade image into the video `poster`.
- N8 (inferred from the maximum srcset widths, not measured on a DPR-2 screen): at 1440 on DPR-2, p2 has a 1080 px maximum for 680 css px (1360 needed, 1.26× upscale) and v1 has 1440 for 912 (1824 needed, 1.27×). Eztec is 512 for 332 (664 needed, 1.30×), which the owner accepted.
- N9: on hover the poster field panel covers the bottom ~76 px of p1 (≈9.5%), including the "EDMONSON MOTORSPORTS" wordmark, and scale(1.04) crops about 2% from each edge (`1440-hover-poster.png`). This matches the Pit Board concept and is recorded only.
- N10: dead CSS. `--plate` is defined (styles.css:13) and used 0 times (grep count 0). styles.css:70 repeats the rule already on styles.css:69.
- N11: share of white in the first viewport: 46% at 390, 70% at 768, 76% at 1280, 73% at 1440 (sampled every 8 px with elementFromPoint, images excluded). P-18/P-20 and direction D (about 65% planned) allow this. A first-time visitor sees a mostly white first screen on a "near-black" site.
- N12: the title "Toph" comes from the file name `toph.mp4` (curation.md:187) and says nothing about the piece to a stranger. Owner to confirm.
- N13: on the 404 page the h1 and the first paragraph have a 0 px gap (styles.css:37 resets the margins; 404.html:15-16).

## Rule-by-rule

| Rule | Status | Evidence |
|---|---|---|
| P-01 | PASS | body `#0E0E0E` (max channel 14). Dark sections inherit it. White areas are accent bands under P-18 (see N11). |
| P-02 | PASS | The only hexes in the CSS are styles.css:11-17, all neutral. Computed colours used: 0E0E0E, EEEEEE, FFFFFF, 191919, A0A0A0 (plus the default black on `<html>`/`<head>`, which is not rendered). |
| P-03 | PASS | Every colour has R=G=B. |
| P-04 | PASS | 4/8/12-column grid (styles.css:25-30, 56) and condensed uppercase Saira headings with white bars. The look survives with images removed. |
| P-05 | PASS | grep for `gradient`: no hits. |
| P-06 | PASS | grep for `box-shadow|text-shadow|drop-shadow`: no hits. |
| P-07 | PASS | grep for `backdrop-filter`: no hits. |
| P-08 | PASS | Hover only scales (styles.css:218, 220). No tilt, grain, cursor or keyframes (grep `@keyframes|cursor:\s*url|feTurbulence`: no hits). |
| P-09 | PASS | grep for scroll-snap/scroll-behavior/overscroll/sticky/fixed: exit 1. |
| P-10 | PASS | No IntersectionObserver or animation-timeline (same grep). |
| P-11 | PASS | Listeners: pointerenter/pointerleave/focusin/focusout/error/click (script.js:26-33, 78). |
| P-12 | PASS | No package.json in site/. Every network request goes to localhost (measure.json). |
| P-13 | PASS | No stats or counters. Dates are covered by B2. |
| P-14 | PASS | None present. |
| P-15 | PASS | Lowest text pair is 7.38:1 (#A0A0A0 on #0E0E0E). All others are 16.64 or 19.3. |
| P-16 | PASS | Lighthouse Accessibility 100 on home and 100 on 404. |
| P-17 | PASS | `"Saira","Arial Narrow",Arial,sans-serif` (styles.css:24). |
| P-18 | PASS | Text on white is #0E0E0E at 19.3:1. |
| P-19 | PASS | Reduced motion: `.art` transform none, transition 0s, previews do not start (states.json). Touch: fields static, play text opacity 1. |
| P-20 | PASS | Accent #FFFFFF with #0E0E0E text; no other UI hue. |
| P-21 | PASS | Every text link has a 2 px underline (styles.css:60). Hover/focus use an inverted block and a 4 px underline. |
| T-01 | PASS | One family, one woff2 file. |
| T-02 | PASS | 5 sizes per width: 12/16/20/28.25/44 at 390 and 12/16/20/40/88 at 1440. |
| T-03 | PASS | Weights 400/500/600. |
| T-04 | PASS | Body 16 px. Smallest is 12 px (labels, nav, footer). |
| T-05 | PASS | `p{max-width:65ch}`, `.about` 50ch, line-height 1.45-1.55. |
| T-06 | PASS | h1 max 5.5rem, letter-spacing -0.01em. |
| T-07 | PASS | Body 400, line-height 1.55, letter-spacing 0.01em. |
| T-08 | PASS | No px tracking (grep exit 1). Labels at 0.08em. |
| T-09 | PASS | grep `font-kerning|optimizeSpeed`: no hits. |
| T-10 | PASS | balance/pretty set (styles.css:39-40). Zero single-word last lines at 320/768/1280/1920 (Range scan). |
| T-11 | PASS | `document.fonts`: "Saira 400 600 75% 100% loaded". woff2 axes wght 400-600 and wdth 75-100 (fontTools). The 75% width renders 591 px vs 816 px at 100%. |
| T-12 | PASS | Roles differ by size, width, weight and case. |
| T-13 | PASS | No monospace. |
| T-14 | PASS | None. |
| T-15 | FAIL | B15. |
| T-16 | PASS | No overflow:hidden on text lines. Root font-size at 200% at 320 px: no clipping or overflow. |
| C-01 | PASS | Tokens in `:root`. Unused `--plate` (N10). |
| C-02 | N/A | Superseded by P-18. |
| C-03 | PASS | Muted text is solid #A0A0A0, 7.38:1. |
| C-04 | PASS | No text sits on images. Play text sits on a solid white bar (19.3:1). |
| C-05 | FAIL | B7. Ring colours are 19.3:1 where they are visible. |
| C-06 | PASS | Underline and inversion, not colour. |
| C-07 | PASS | No #000. |
| C-08 | PASS | #EEEEEE body text. |
| C-09 | PASS | `::selection` themed (styles.css:43-44). |
| C-10 | N/A | No form. |
| L-01 | FAIL | B5a. |
| L-02 | PASS | Spacing tokens 4-96 px (styles.css:22). No stray margin or padding values. |
| L-03 | PASS | 12 px title→frame, 64 px between rows, 96 px between sections (≥1024). See N13 for 404. |
| L-04 | PASS | The p1 poster is in the first viewport at 390 and 1440. |
| L-05 | PASS | Spans and ratios vary (5/6-column posters, 1+3 logos, 8+4 / 7+5 video). |
| L-06 | PASS | No nested cards. |
| L-07 | FAIL | B4. |
| L-08 | FAIL | B11. |
| L-09 | FAIL | B5, B6. |
| L-10 | PASS | Radius 0 everywhere. |
| L-11 | PASS | None. |
| L-12 | PASS | None. |
| L-13 | PASS | scrollWidth ≤ viewport at every 10 px step from 320 to 1920. 200% root text at 320: no overflow. The 30%-longer-words case was not tested. |
| L-14 | PASS | All targets ≥44 px tall. Title links are 32 px tall, but their hit area covers the whole piece (358×395 or more). |
| L-15 | PASS | One button per view (Copy username). |
| L-16 | PASS | 4→8→12 columns. Posters, logos and video regroup at each width. |
| L-17 | PASS | Tab order: skip, name, nav ×4, opening link, p1, p2, Edmonson, Eztec, V1, V2, V3, copy, back to top. This matches visual order. |
| L-18 | N/A | No lightbox. |
| L-19 | PASS | No fixed or sticky elements. |
| I-01 | PASS | All images are owner work. No placeholders. |
| I-02 | FAIL | B9. |
| I-03 | PASS | width/height on every img. Lighthouse CLS 0. |
| I-04 | PASS | picture/srcset/sizes everywhere. Hero `loading=eager fetchpriority=high`. The rest lazy. |
| I-05 | PASS | No forced crop (`contain`, true ratios). Touch play bar occlusion is in N3. |
| I-06 | PASS | None. |
| I-07 | PASS | None. |
| I-08 | PASS | One SVG play icon. |
| I-10 | PASS | Previews are muted, run on hover/focus only, stop on leave, and are off under reduced motion. Full videos have posters and start only on click. |
| I-11 | PASS (proxy) | At most 4 luma jumps ≥40/255 in any 1 s window (v2.mp4), so ≤2 flashes per second. Whole-frame proxy, not the WCAG area test. |
| I-12 | PASS | One frame style (bare). The hero copy alone has a 16 px dark mount to separate it from the white panel. |
| M-01 | PASS | Hover reveal, play wipe and preview each give feedback. |
| M-02 | PASS | No entrance animation. |
| M-03 | PASS | JS off: content visible, native `<video controls>` sized 912×513 / 796×448 / 564×423 (`1440-nojs-*.png`). |
| M-04 | FAIL | B12. |
| M-05 | PASS | `cubic-bezier(0.16,1,0.3,1)`. |
| M-06 | FAIL | B13. |
| M-07 | N/A | Superseded by P-19. |
| M-08 | PASS | styles.css:232-235, plus JS `reduce` guard (script.js:3, 12). |
| M-09 | FAIL | B14, B7. |
| M-10 | PASS | Nothing starts on its own. |
| M-11 | N/A | Single page. |
| M-12 | PASS | No spinners. |
| W-01 | FAIL | B3. |
| W-02 | FAIL | B1. |
| W-03 | PASS | "Posters / Logos / Video" used consistently. Minor: "Hype Post" sits under "Posters". |
| W-04 | FAIL | B8. |
| W-05 | PASS | No eyebrows or numbers. |
| W-06 | FAIL | B10. |
| W-07 | N/A | No form. |
| W-08 | FAIL | B1 ("Final Logo" link). |
| W-09 | PASS | No filler. |
| W-10 | PASS | Client names match curation.md:3-5 (owner decisions). |
| W-11 | PASS | title, og:title and twitter:title equal the h1 text. og.png shows name, role line and the p1 poster, the same as the hero. |
| W-12 | PASS (local) | 404.html renders with a "Back to the portfolio" link. GitHub Pages routing is not verified. |
| X-01–X-17 | PASS | Covered by the P/T/C/L/I rows above: no gradients, glow, glass, icon cards, metric strip, eyebrows, Inter, scroll reveal, ghost cards, stripes, texture, emoji, stock, 800-900 weights or widows. |
| X-18 | Not checked | No comparison set of 3 shipped portfolios. |
| X-19 | PASS | No buzzwords. |
| X-20 | PASS | Real clients. |
| X-21 | PASS | Every finding here was checked on viewed screenshots, not only on automated output. |
| Owner: no dates | FAIL | B2. |
| Owner: decisions list | PASS | White accent, Saira self-hosted, "burithu", one role line, Discord text only, no showreel, MP4 facade + previews, one Edmonson logo, 512 Eztec, V3 4:3: all implemented. B6 covers the Edmonson plate implementation. |

## Measurements

- Contrast (WCAG formula, computed colours): #0E0E0E on #FFFFFF 19.3:1 (header, h1, bars, fields, contact, play text). #EEEEEE on #0E0E0E 16.64:1 (titles, back-to-top). #A0A0A0 on #0E0E0E 7.38:1 (footer ©). Focus ring white on #0E0E0E 19.3:1, #0E0E0E on white 19.3:1. Play key vs frame: see N4. (The 1.1:1 entry for "Play with sound" in measure.json is a sampling artefact: the label sits on the absolutely positioned white `.play-bar`, so the real pair is 19.3:1.)
- Font sizes at 390: 12 px ×23 text nodes (labels, nav, opening link, copy, footer), 16 ×12, 20 ×11, 28.25 ×5, 44 ×1. Body text is never under 16 px, and no text is under 12 px.
- Weights: 400/500/600. Distinct rendered colours: 5.
- Touch targets (390): name 85×44, nav 76/60/56/75×44, opening link 268×44, title links 32 px tall but covering 358×543 / 358×395 / 358×395 / 358×272, facades 358×201/201/269, copy 148×44, back-to-top 102×44.
- Horizontal overflow: none from 320 to 1920 in 10 px steps.
- Fonts: one file, `fonts/saira-var-latin.woff2` (51,060 B), served from localhost. Zero third-party requests (all URLs in measure.json are localhost).
- First load, before any interaction (bytes on the wire, python server, uncompressed): desktop 1440 DPR1 225,908 B (220.6 KiB). Touch 390 DPR3 236,311 B (230.8 KiB). No `.mp4` requested on first load in either case. After scrolling to the bottom, no `.mp4` either. Desktop hover on V1 fetched only `v1-preview.mp4` (439,228 B). Click started `v1.mp4` (playing at t=2.85 s, 1920×1080, muted=false). On touch, no preview was requested after scrolling the whole page.
- Video files: v1/v2/v3 = 5,778,254 / 5,833,500 / 5,889,245 B (all ≤ 8 MB). Previews 439,039 / 267,988 / 210,683 B, each 7.00 s long.
- og.png: 1200×630, 272,184 B. Head has title, description, canonical, og:title/description/type/url/image/width/height/alt, twitter:card/title/description/image/alt, theme-color, favicon.svg, `lang="en"`.
- Lighthouse mobile (local http://localhost:8130/, not the live URL; Lighthouse 13.6.0, Edge): Performance 99, Accessibility 100, Best Practices 100, SEO 100. FCP 0.9 s, LCP 2.1 s, CLS 0, TBT 0 ms, SI 0.9 s, total 232 KiB. Audits below 1:
  - largest-contentful-paint: 2.1 s (0.96)
  - interactive: 2.1 s (0.99)
  - cache-insight: est. savings 217 KiB (local server sends no cache headers)
  - document-latency-insight: est. savings 10 KiB (no compression on the local server)
  - image-delivery-insight: est. savings 70 KiB (p1-960.avif 34 KB, p2-960.avif 24 KB, v1-960.avif 14 KB larger than needed at the emulated DPR)
  - network-dependency-tree-insight: no value
  - render-blocking-insight: est. 140 ms (styles.css)
  - 404.html: Accessibility 100, SEO 50 (is-crawlable and meta-description fail; expected because of `noindex`).

## 5-second test

- 390×844 (`390-00-first.png`): visible without scrolling: "burithu" (header, 20 px), nav "POSTERS LOGOS VIDEO CONTACT" (12 px), "burithu" again (20 px), "GRAPHIC DESIGN AND VIDEO EDITING" (44 px condensed caps, 2 lines), the full 2026 schedule poster (342×483), and the link "RACING SCHEDULE 2026 – CHAMP CAR". Judgement: graphic design and video editing are unmistakable as text, and the poster confirms design. Video is stated but not shown.
- 1440×900 (`1440-00-first.png`): visible: header name and nav, "burithu", the h1 at 88 px over 2 lines (cols 1-8), the schedule poster in a dark mount (cols 9-12, 416×588), the link under it, a 912×532 empty white area under the h1, and a strip of the dark posters section at the bottom. Judgement: same as 390, the statement is unmistakable. Video appears only as words, and 37% of the screen is empty.
- Code search command and output:
  - `grep -rniE "addEventListener\(['\"](scroll|wheel|touchmove)|onscroll|onwheel|lenis|locomotive|ScrollTrigger|ScrollMagic|\baos\b|whileInView|IntersectionObserver|scroll-snap|scroll-behavior|overscroll|animation-timeline|position:\s*(sticky|fixed)" site --include=*.html --include=*.css --include=*.js` → no output, exit=1.
  - `grep -niE "gradient|backdrop-filter|box-shadow|text-shadow|drop-shadow|feTurbulence|cursor:\s*url|@keyframes|font-kerning|optimizeSpeed|text-stroke|transition:\s*all|serif|lorem|todo|tbd|placeholder|click here|learn more|https?://" site/*.html site/*.css site/*.js` → only index.html:13, 17, 18, 25 (own-domain canonical/og URLs) and styles.css:24 (`sans-serif`). No banned pattern.

## Not checked, and why

- Live URL, GitHub Pages serving 404.html for unknown paths, and the LinkedIn Post Inspector preview: the repo is not deployed. Python's http.server returns its own 404 ("Error response"), so I tested 404.html directly.
- Real touch hardware, iOS Safari and a real DPR-2 laptop. Touch was emulated (hasTouch, isMobile, DPR 3; `(hover: none)` matched). N8 is inferred from srcset widths.
- Browser zoom at 200% for letters touching (T-06): I tested root font-size 200% at 320 px instead. The 30%-longer-words case in L-13 was not tested.
- WCAG flash test by area: the I-11 result is a whole-frame luma proxy.
- X-18 (template look against 3 shipped portfolios): no comparison set was given.
- Screen-reader output: not run. Accessible names were checked in the DOM only (facade name "Play video: <title>"; video `aria-label`).
