# Review 2: re-review after the builder's fixes

Reviewer: independent (did not build the site). Date: 2026-11-18. I re-rendered and re-measured everything myself and did not rely on the builder's claims. Method: `python -m http.server 8132`, Edge via Playwright 1.49.1 (channel msedge), Lighthouse 13.6.0 with CHROME_PATH set to Edge. Screenshots are in `.shots/review-2/`. Scripts and raw output are in the scratchpad `review-2/` folder: shots.js, measure.js → measure.json, states.js → states.json, click.js, ringdiff.js, extra.js, fb2.js, geo.js, lh.json, lh404.json. The server is stopped. No file in `site/` was edited.

## Verdict: PASS WITH FIXES

All 15 blocking findings from review 1 are fixed or waived by the owner, and nothing regressed. The changes introduced 2 new rule violations (W-02/W-08 and W-11). Both are low severity, and each is fixed by editing one attribute or regenerating one file. All P-rules pass. Lighthouse mobile on `/` scored 100/100/100/100.

## (a) Review-1 blocking findings

| # | Rule | Status | New evidence |
|---|---|---|---|
| B1 | W-02, W-08 | FIXED | Titles are plain `h3` text (index.html:62, 66, 77, 82). Clicking the artwork now opens the largest JPG: p2 → `/img/p2-1080.jpg` (1080×1080), Eztec tile 2 → `/img/l6-512.jpg`, Edmonson → `/img/l1-1024.jpg`. This works at 1440 with a mouse and at 390 with touch taps (click.js output). Accessible names are "View full size: <title>" plus the alt text, so the three Eztec links have different names. |
| B2 | Owner: no dates | WAIVED | The owner approved the title "Racing schedule 2026 – Champ Car" (index.html:62). No other years appear in the site text (grep `\b20[0-9]{2}\b`: only index.html:62-63). |
| B3 | W-01 | FIXED | The title is now "Edmonson Motorsports logo" (index.html:77). |
| B4 | L-07 | FIXED | The white area under the h1 is gone. Largest empty area in the opening: 912×106 px under the V1 frame at 1440 (7.5% of the viewport) and 805×92 at 1280 (7.2%) (geo.js; `1440-00-first.png`, `1280-00-first.png`). The 404 page now has its header, h1, text, two images and footer within 1076 px (`1440-404.png`). |
| B5 | L-01, L-09 | FIXED | Eztec field columns start at x=380/728, the same as tiles 1/2 (1440). They match at 1280 (340/648) and 768 (208/392) too. In the video row, both field panels end at 4153 at 1440 and at 3828 at 1280, using subgrid (styles.css:193-194). |
| B6 | L-09 | FIXED | The Edmonson logo is now a white plate with a 12 px near-black edge (styles.css:151). The tile is 332 px, the same size as the Eztec tiles, and its left edge lines up with the title (`1440-02-y1800.png`). |
| B7 | C-05, M-09 | FIXED | The facade ring is drawn inside `.media::after`: a 3 px white band plus a 3 px #0E0E0E band (styles.css:75-76). Measured on V2: 56,517 px changed on focus, 42,618 of them by ≥3:1 (ringdiff.js). The ring is visible in `1440-focus-facade.png`. |
| B8 | W-04 | FIXED | The h1 name is now `.sr` (index.html:51), so "burithu" shows once at the top. The role line is no longer repeated in Contact. A minor leftover is in N-new-4. |
| B9 | I-02 | FIXED | I compared every alt text with its image. V1 "Open door … number 227 … Edmonson Motorsports logo", V2 "Armoured animated figure firing a blast of flame…" and V3 "Dark jet fuselage with a star roundel… corrugated hangar wall" all match their poster frames. P1 says "fourteen race dates", and I counted 14 rows. |
| B10 | W-06 | FIXED | Titles are in sentence case with proper names capitalised, as the owner decided. |
| B11 | L-08 | FIXED | 404.html now has the same header and footer (404.html:13-24, 39-44). Wrap padding is 16 px at 390 and 32 px at 1440, the same as home. |
| B12 | M-04 | FIXED | All transitions are 120-300 ms, and there are no 80 ms values left (grep `transition:` output: 120/160/180/200/120/150+100 ms). |
| B13 | M-06 | FIXED | Only background-color, color, transform and opacity are transitioned (styles.css:64, 225-242). |
| B14 | M-09 | FIXED | Hover and press look different on the nav link, Copy, the poster art link and the V3 facade: the screenshots of the hover and pressed states are not identical (`1440-active-*.png`, `1440-hoverstate-*.png`). The pressed nav link shows an inner outline and a 2 px underline. |
| B15 | T-15 | FIXED | Three "Saira fallback" faces are declared (styles.css:12-14), and all report `loaded`. Width difference against Saira over 100 px samples: 400 +0.4%, 600 0.0%, condensed 600 −1.5% on the uppercase h1 text and −6.4% on "Discord: burithu". The h1 height at 390 is the same with either font (84 vs 84 px). |

## (b) Review-1 non-blocking findings

- N1 (no video in the first screen): PARTIAL. A V1 frame (912×520 at 1440, 358×208 at 390) is now in the first viewport. It has no play icon or other video cue, so it reads as a photo (see N-new-1).
- N2 (P1 shown twice): owner decision, closed.
- N3, N4, N5, N8: accepted source limitations, closed. Play-key contrast is unchanged: v1 average 3.53:1, v3 worst pixel 1.95:1.
- N6 (title stuck inverted after play): FIXED. After V2 played, the title "Toph" was not inverted (`1440-v2-after-play.png`).
- N7 (poster re-download on play): FIXED. The poster is now `currentSrc` (`img/v1-960.avif`), and no JPG was requested on click (measure.json).
- N9 (hover panel covers the bottom of the poster): unchanged, by design.
- N10 (dead CSS): FIXED. `--plate` and the duplicate rule are both removed.
- N11 (share of white in the first viewport): now 48.2% at 390, 41.7% at 768, 42.3% at 1280 and 39.4% at 1440. Before the fixes it was 46-76%.
- N12 ("Toph" says nothing to a stranger): unchanged. Owner to confirm.
- N13 (404 h1-to-text gap): FIXED. The gap is 16 px.

## (c) New findings

### New blocking (rule violations, low severity)

| # | Rule | Finding | Smallest fix |
|---|---|---|---|
| NB1 | W-02, W-08 | The opening video frame link is named "Watch video: Victory Lap 5 x Edmonson" (index.html:53), but it only scrolls to the Video section (`/#video`, scrollY 2830 at 1440 and 3270 at 390) and plays nothing. The name promises an action the link does not perform. The poster link "View posters: racing schedule" → `#posters` is accurate. | Change the href to `#v1` and the text to "Go to video: Victory Lap 5 x Edmonson". Make the same change in 404.html:34. |
| NB2 | W-11 | The share image no longer matches the hero. og.png (1200×630, 272,184 B, unchanged) shows a large "burithu", the role line and the P1 poster. The hero now shows the role line, the V1 frame and the P1 poster, and the name is visually hidden. | Regenerate og.png from the new opening: role line, V1 frame and P1 poster, with the name. |

### New non-blocking

- N-new-1 (5-second test): the opening V1 frame has no play glyph, timecode or other video cue. Without its hidden label, a sighted visitor sees a car photo. Suggested fix: show the same 56/64 px white play key (`.play-key`) in the corner of `.op-vid .art`.
- N-new-2 (C-05, weak perception): the two-tone ring sits on white sections for the two opening links and the Edmonson tile. There, the white band blends into the page and the dark band blends into the dark mount or tile edge. The visible change on focus is a 3 px dark-to-white band at 19.3:1: 8,556 px on the V1 frame (perimeter 2,864 px), 6,408 px on the opening poster (perimeter 2,148 px) and 3,948 px on Edmonson (perimeter 1,328 px). That is about 3 × perimeter, which meets the area and contrast thresholds of WCAG 2.4.13. On screen it looks like the dark frame getting thinner (`1440-focus-op-vid.png`, `1440-ring-op-vid.png`). Suggested fix: on `.on-accent` add an outer ring, e.g. `.on-accent .art-link:focus-visible{outline:3px solid var(--on-accent);outline-offset:3px}`.
- N-new-3: artwork links open a bare JPG in the same tab (verified for p2, l6 and l1). The only visible cues before clicking are the pointer cursor and the hover zoom. Not a rule violation. If wanted, add a small visible "View full size" label on hover or focus.
- N-new-4 (W-04 leftover): Contact now shows "burithu" on its own line and then "Discord: burithu" two lines below (index.html:117, 120; `1440-05-y4500.png`). The name is said twice in three lines. Suggested fix: delete `p.about`.
- N-new-5 (inferred, not tested on other systems): the condensed fallback face uses `local("Arial Narrow Bold")`. That font was present on this Windows machine. It is usually absent on macOS, iOS and Android (recalled, not checked), and on those systems the h1 would fall back to unadjusted Arial while the woff2 loads. Measured CLS is 0 because the font is preloaded.
- N-new-6: on 404.html Lighthouse reports unused CSS (est. 11 KiB) and SEO 54 (is-crawlable and meta-description fail because of `noindex`). Both are expected.

## (d) Rule-by-rule (rules in force)

| Rule | Status | Evidence |
|---|---|---|
| P-01 | PASS | Body and dark sections #0E0E0E. White bands are accent under P-18 (39-48% of the first viewport). |
| P-02 | PASS | CSS hexes are only the 6 neutrals (styles.css:16-21). Computed colours: 0E0E0E, EEEEEE, FFFFFF, 191919, A0A0A0. |
| P-03 | PASS | Every colour has R=G=B. |
| P-04 | PASS | Grid at 4/8/12 columns. The condensed caps and white bars carry the look without images. |
| P-05 | PASS | grep for `gradient`: no hits. |
| P-06 | PASS | grep for shadow properties: no hits. |
| P-07 | PASS | grep for `backdrop-filter`: no hits. |
| P-08 | PASS | Only scale on hover (styles.css:228, 230-231, 234). |
| P-09 | PASS | Scroll/sticky/fixed grep exit=1. |
| P-10 | PASS | Same grep, exit=1. |
| P-11 | PASS | Listeners: pointerenter/pointerleave/focusin/focusout/error/click (script.js:26-33, 79). |
| P-12 | PASS | Every request goes to localhost (measure.json). |
| P-13 | PASS | No stats. |
| P-14 | PASS | None. |
| P-15 | PASS | Lowest text pair is 7.38:1. (The 1.1:1 entry for "Play with sound" is the sampling artefact explained in review 1; the real pair is 19.3:1.) |
| P-16 | PASS | Lighthouse Accessibility 100 on `/` and 100 on `/404.html`. |
| P-17 | PASS | `"Saira","Saira fallback",Arial,sans-serif`. |
| P-18 | PASS | Text on white is 19.3:1. |
| P-19 | PASS | Reduced motion: transform none, 0 s, no preview. Touch: fields static, play text opacity 1. All hover effects are CSS. |
| P-20 | PASS | No other UI hue. |
| P-21 | PASS | Text links keep a 2 px underline (styles.css:64). Image links are artwork, with a ring on focus and press. |
| T-01 | PASS | One web font. The fallback faces are local, not downloaded. |
| T-02 | PASS | 5 sizes per width (12/16/20/28.25/44 at 390, 12/16/20/40/88 at 1440). |
| T-03 | PASS | Weights 400/500/600. |
| T-04 | PASS | Body 16 px, smallest 12 px. |
| T-05 | PASS | `p` 65ch, `.about` 50ch. |
| T-06 | PASS | 5.5rem max, −0.01em. |
| T-07 | PASS | Line-height 1.55, letter-spacing 0.01em, weight 400. |
| T-08 | PASS | No px letter-spacing (grep exit=1). |
| T-09 | PASS | None. |
| T-10 | PASS | No widows at 320/768/1280/1920. The h1 is one line at ≥1280. |
| T-11 | PASS | Saira loaded from `/fonts/` (`document.fonts`). |
| T-12 | PASS | Unchanged. |
| T-13 | PASS | No monospace. |
| T-14 | PASS | None. |
| T-15 | PASS | B15 fixed. N-new-5 is a note only. |
| T-16 | PASS | 200% root text at 320: no overflow. |
| C-01 | PASS | Tokens via `var()`, no dead tokens. |
| C-03 | PASS | #A0A0A0 at 7.38:1. |
| C-04 | PASS | No text on images. |
| C-05 | PASS | B7 fixed. Ring on white sections: N-new-2. |
| C-06 | PASS | Underline and inversion, not colour. |
| C-07 | PASS | No #000. |
| C-08 | PASS | #EEEEEE body text. |
| C-09 | PASS | `::selection` themed. |
| L-01 | PASS | B5 fixed. |
| L-02 | PASS | Spacing only from tokens. The 3/6 px ring values are borders, not spacing. |
| L-03 | PASS | Includes the 404 gap (16 px). |
| L-04 | PASS | The V1 frame and P1 poster are in the first viewport at 390, 768, 1280 and 1440. |
| L-05 | PASS | Varied spans and ratios. |
| L-06 | PASS | No nested cards. |
| L-07 | PASS | Largest empty area is ≤7.5% of the viewport. |
| L-08 | PASS | The 404 page has the same header, footer and wrap. |
| L-09 | PASS | Fields and tiles aligned. The opening frame and poster share their top edge (y=220) and keep their own ratios, as the posters do. |
| L-10 | PASS | Radius 0. |
| L-11 | PASS | None. |
| L-12 | PASS | None. |
| L-13 | PASS | scrollWidth ≤ viewport from 320 to 1920 in 10 px steps. |
| L-14 | PASS | All targets ≥44 px. The smallest image link is 111×111 (Eztec tiles at 390). |
| L-15 | PASS | One button (Copy). |
| L-16 | PASS | The opening regroups: stacked at 390, 5+3 columns at 768, 8+4 at ≥1024. |
| L-17 | PASS | Tab order: skip, name, nav ×4, V1 frame, poster, P1, P2, Edmonson, Eztec ×3, V1-V3, copy, back to top. This matches the visual order. |
| L-18 | N/A | No lightbox. Art opens a plain image file. |
| L-19 | PASS | Nothing fixed or sticky. |
| I-01 | PASS | Real work only. |
| I-02 | PASS | B9 fixed. The opening images use `alt=""` and get their names from the link text. |
| I-03 | PASS | CLS 0. |
| I-04 | PASS | srcset/sizes everywhere. Opening images are eager (P1 with `fetchpriority=high`). |
| I-05 | PASS | No forced crops. |
| I-06 to I-09 | PASS | None present. |
| I-10 | PASS | Previews are muted and play on hover/focus only. The full video requested 5,778,444 B only after click. |
| I-11 | PASS | Video files unchanged since review 1 (proxy: ≤2 flashes per second). |
| I-12 | PASS | Mount style is the same for both opening images. |
| M-01 | PASS | Hover zoom and ring give feedback. |
| M-02 | PASS | No entrance animation. |
| M-03 | PASS | JS off: content visible, native video sized 912×513 / 796×448 / 564×423 (states.json). |
| M-04 | PASS | B12 fixed. |
| M-05 | PASS | Decelerating curve. |
| M-06 | PASS | B13 fixed. |
| M-08 | PASS | The reduced-motion rule also covers `.mount .art img`. |
| M-09 | PASS | B14 fixed. |
| M-10 | PASS | Nothing starts on its own. |
| M-12 | PASS | No spinners. |
| W-01 | PASS | B3 fixed. |
| W-02 | FAIL | NB1. |
| W-03 | PASS | Consistent words. |
| W-04 | PASS | B8 fixed. Minor leftover in N-new-4. |
| W-05 | PASS | None. |
| W-06 | PASS | Sentence case. |
| W-08 | FAIL | NB1. |
| W-09 | PASS | No filler. |
| W-10 | PASS | Real clients. |
| W-11 | FAIL | NB2. Title, og:title and h1 text still match. |
| W-12 | PASS (local) | 404.html renders with header, a home link and footer. GitHub Pages routing is not verified. |
| X-01 to X-17, X-19 to X-21 | PASS | As in review 1. Every screenshot cited here was viewed. |
| X-18 | Not checked | No comparison set. |

C-02, M-07 (superseded) and C-10, W-07, M-11 (no form, single page) are N/A.

## Measurements

- Contrast: unchanged pairs 19.3 / 16.64 / 7.38:1. Ring bands are #FFFFFF and #0E0E0E (19.3:1 against each other).
- Font sizes at 390: 12 px ×22 nodes, 16 ×12, 20 ×9, 28.25 ×5, 44 ×1. Nothing below 12 px; body text 16 px.
- Touch targets at 390: name 85×44, nav 76/60/56/75×44, V1 frame link 358×208, poster link 266×368, P1 358×506, P2 358×358, Edmonson 235×235, Eztec 111×111 ×3, facades 358×201/201/269, Copy 148×44, Back to top 102×44.
- Overflow: none from 320 to 1920.
- Network, before any interaction:
  - Desktop 1440: 256,170 B (250.2 KiB). Request list: html, css, js, woff2, favicon, p1-480.avif, v1-960.avif, p1-960.avif, p2-960.avif.
  - Touch 390 at DPR 3: 342,874 B (334.8 KiB).
  - No `.mp4` requested on first load. On touch, none even after scrolling the whole page.
  - Desktop hover on V1 fetched only `v1-preview.mp4` (439,228 B). Click fetched `v1.mp4`, which played at t=2.89 s, 1920×1080, unmuted.
  - No third-party origins.
- Lighthouse mobile, `/` (local, not the live URL): Performance 100, Accessibility 100, Best Practices 100, SEO 100. FCP 0.9 s, LCP 1.8 s, CLS 0, TBT 10 ms, total 265 KiB. Audits below 1:
  - largest-contentful-paint: 1.8 s (0.98)
  - cache-insight: 248 KiB (the local server sends no cache headers)
  - document-latency-insight: 11 KiB (no compression on the local server)
  - image-delivery-insight: 70 KiB
  - network-dependency-tree-insight
  - render-blocking-insight: 120 ms
  - unminified-css: 2 KiB
- Lighthouse mobile, `/404.html`: Performance 100, Accessibility 100, Best Practices 100, SEO 54 (expected, `noindex`).
- Code search (commands as in review 1):
  - scroll/library/pinning grep → no output, exit=1.
  - effects/placeholder grep → only the own-domain URLs at index.html:13, 17, 18, 25 and `sans-serif` at styles.css:28.
  - px letter-spacing grep → exit=1.
  - No `target` or `download` attributes.

## (e) 5-second test

- 390×844 (`390-00-first.png`): visible without scrolling: "burithu", the nav "POSTERS LOGOS VIDEO CONTACT", "GRAPHIC DESIGN AND VIDEO EDITING" (44 px, 2 lines), the V1 race-car frame (358×208), and most of the P1 schedule poster (266×368, cut off at the bottom of the viewport). Judgement: passes. The role line is the largest text and is unmistakable. The poster confirms the design work. The car frame supports "video" only if the visitor reads it as a video still; it has no play cue (N-new-1).
- 1440×900 (`1440-00-first.png`): visible: header and nav, "GRAPHIC DESIGN AND VIDEO EDITING" on one line (88 px, 1216 px wide), the V1 frame (912×520) and the P1 poster (448×626) side by side, and a strip of the dark Posters section. Judgement: passes. It is clearer than in review 1: the statement plus two pieces of work fill the screen, with no large empty area. The same caveat about the missing play cue applies.

## Not checked, and why

- The live URL, GitHub Pages serving 404.html for unknown paths, and the LinkedIn preview: the site is not deployed. Python's server returns its own 404 for unknown paths, so I tested `/404.html` directly.
- Real touch hardware, iOS Safari, and DPR-2 rendering: touch was emulated.
- Fallback-font behaviour on systems without Arial Narrow (N-new-5).
- True 200% browser zoom, an area-based flash test (videos unchanged since review 1), and screen-reader output. Accessible names were checked in the DOM and accessibility tree only.
- X-18: no comparison set.
