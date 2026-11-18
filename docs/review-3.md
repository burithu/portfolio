Reviewed before the move to /portfolio/; URLs in this report refer to the earlier root address.

# Review 3: third pass, narrow scope

Reviewer: independent (did not build the site). Date: 2026-11-18. I re-rendered and re-measured everything myself. Method: `python -m http.server 8134`, Edge via Playwright 1.49.1 (channel msedge), Lighthouse 13.6.0 with CHROME_PATH set to Edge. Screenshots are in `.shots/review-3/`, and every image cited here was viewed. Scripts and raw output are in the scratchpad `review-3/` folder: shots.js, measure.js → measure.json, states3.js, click3.js, lh.json. The server is stopped. No file in `site/` was edited.

## Verdict: PASS WITH FIXES

The two review-2 blocking findings are fixed. The edits introduced one new blocking defect. On desktop (hover-capable pointer), the poster caption panel and the new "View full size" label overlap, which cuts the Client and Tools text in half on hover and on keyboard focus.

## (a) Review-2 blocking findings

| # | Rule | Status | Evidence |
|---|---|---|---|
| NB1 | W-02, W-08 | FIXED | Link names are now "Go to video: Victory Lap 5 x Edmonson" → `#v1` and "Go to poster: Racing schedule 2026 – Champ Car" → `#p1` (index.html:53-54). On 404.html they point to `/#v1` and `/#p1`. Clicks land with the target at top=0 and visible, at 1440 and 390 on home and at 1440 on 404 (click3.js). |
| NB2 | W-11 | FIXED | og.png is 1200×630, 151,761 B, and was viewed. It mirrors the opening: "burithu", "GRAPHIC DESIGN AND VIDEO EDITING", the V1 frame and the P1 poster. The white panel spans x 60-1138 and y 60-568. The content bounding box is 84,84 to 1131,561, so the margins are left 84, top 84, right 68 and bottom 68 px (PIL scan). Nothing important sits within 60 px of an edge. |

## (b) Review-2 non-blocking findings

1. **Play cue on the opening video frame: FIXED.** A 40 px white key with a play glyph sits at the bottom-left of the V1 frame (`.op-play`; `390-00-first.png`, `1440-00-first.png`).
2. **Focus on white sections: FIXED.** The opening links, the Edmonson tile and the Eztec tiles now show `outline: 3px solid #0E0E0E` at a 3 px offset (19.3:1 against white). No ancestor clips it (states3.js: `clippedBy: null`). See `1440-focus-op-vid.png` and `1440-focus-edm.png`. `.logo .frame` is now `overflow: visible`, but every logo tile `.art` still has `overflow: hidden`, so scaled images stay inside their tiles. Measured overshoot: 0 px for the Eztec tiles, and −12 px for Edmonson (it scales into its own padding). Nothing spills or overlaps a neighbour on hover.
3. **"View full size" labels: PARTIAL.**
   - Touch / no-hover (390, `(hover: none)` true): the 6 labels sit below their artwork and are underlined and legible. The two poster labels are #EEEEEE on #0E0E0E (16.64:1); the logo labels are #0E0E0E on white (19.3:1). They sit above the static caption panel without touching it (`touch-390-p1.png`, `touch-390-logos.png`).
   - Hover-capable pointer: the labels on the two posters collide with the caption panel (blocking B-new-1 below).
   - Logos: no collision on hover.
4. **Contact: FIXED.** It now has the heading, "Discord: burithu" and the Copy username button only (index.html:113-123; `1440-05-y4500.png`).
5. **Fallback fonts: IMPROVED, partly untested.**
   - `--font-cond` now lists four condensed fallback families (styles.css:17-20, 35).
   - On this Windows machine only "Saira fb narrow" (Arial Narrow Bold) loads. The Helvetica Neue Condensed, Roboto Condensed and Arial faces report `unloaded`, which is expected since those fonts are not installed here.
   - The CSS comment itself says their size-adjust values are estimates, untested on macOS, iOS and Android. I could not test them either.

## (c) New findings

### Blocking

| # | Rule | Finding | Smallest fix |
|---|---|---|---|
| B-new-1 | T-16 (glyphs clipped); visible defect | The "View full size" label is now inside `.frame` and has `position:relative; z-index:1` with a dark background (styles.css:90-91). On a hover-capable pointer, the caption panel slides up to the frame's bottom edge, which now includes the label strip. The label paints over the lower part of the panel. Measured on P1 at 1440: panel y 784-861, label y 837-861, so 24 px of a 77 px panel is covered and "Edmonson Motorsports" and "Adobe Photoshop" are cut through the middle. P2 is the same (panel 725-803, label 778-803). The same happens on keyboard focus, where the two-tone ring also covers the label's first letter ("/iew full size"). Screenshots: `1440-hover-poster-p1.png`, `1440-focus-poster-p1.png`. On these devices hover/focus is the only way to see the Client and Tools text. | Inside `@media (hover:hover) and (pointer:fine)`, add `z-index:2` to `.poster .fields` so the open panel covers the label strip. Alternative: move `.view-label` outside `.frame`. |

### Non-blocking

- N-r3-1: the "View full size" label is 12 px / 500 in sentence case with 0.01em tracking (styles.css:90). Every other 12 px label and small link (nav, Back to top, dt, Copy username) is uppercase with 0.08em tracking, so the site now has two styles for small link labels. This is a T-12 consistency note, not a failure.
- N-r3-2: there are six identical "View full size" labels: two under the posters, one under the Edmonson logo and three in a row under the Eztec tiles. Under the Eztec tiles they repeat three times on one line at 1440 (`1440-02-y1800.png`).
- N-r3-3 (unverified): in the 1440 JS-off full-page capture, each `<noscript>` video shows Edge's native loading arc over its poster (`1440-nojs-full.png`). This markup was not changed in this pass, and I did not check whether the arc is a capture-timing artefact.

### Fresh checks with no new problem

- First screen at 390 and 1440: the h1 role line, the V1 frame with its play key, and the P1 poster. 5-second test: "GRAPHIC DESIGN AND VIDEO EDITING" is unmistakable at both widths, and the frame now reads as video.
- The Posters, Logos and Contact sections look correct at both widths, apart from B-new-1.
- Text contrast: lowest pair is 7.38:1 (footer). The new label pairs are 16.64 and 19.3:1.
- Font sizes are 12/16/20/28.25/44 at 390 and 12/16/20/40/88 at 1440. Weights are 400/500/600. Colours: 5 neutrals.
- Targets: every image link is ≥111×136 at 390, and every text control is ≥44 px tall.
- Overflow: none from 320 to 1920 in 10 px steps. No widows at 320/768/1280/1920.
- Network before any interaction:
  - Desktop 258,280 B: html, css, js, woff2, favicon, p1-480.avif, v1-960.avif, p1-960.avif, p2-960.avif.
  - Touch DPR3: 344,984 B.
  - No `.mp4` requested until hover (preview, 439,228 B) or click (full video, playing at t=2.89 s, unmuted, 1920×1080). On touch, no preview was requested.
  - No third-party origins.
- JS off: content visible, facades hidden, 6 labels present, the native videos render (`1440-nojs-full.png`).
- Reduced motion: logo and opening image transforms are `none`.
- Code search:
  - scroll/library/pinning grep → exit=1, no output.
  - effects/placeholder grep → only the own-domain URLs (index.html:13, 17, 18, 25) and the `sans-serif` font stacks (styles.css:34-35).
  - CSS hexes are only the 6 neutrals. No px letter-spacing.
  - Years appear only in the owner-approved title (index.html:54, 62, 63; 404.html:35).
- Lighthouse mobile, `/` (local): Performance 99, Accessibility 100, Best Practices 100, SEO 100. FCP 0.9 s, LCP 2.2 s, CLS 0, TBT 0 ms, 267 KiB. Audits below 1:
  - largest-contentful-paint: 2.2 s (0.95)
  - interactive: 2.2 s (0.99)
  - cache-insight: 250 KiB (local server, no cache headers)
  - document-latency-insight: 11 KiB
  - image-delivery-insight: 70 KiB
  - network-dependency-tree-insight
  - render-blocking-insight: 140 ms
  - unminified-css: 3 KiB

## Rules whose status changed since review 2

| Rule | Review 2 | Review 3 | Evidence |
|---|---|---|---|
| W-02 | FAIL | PASS | NB1 fixed. |
| W-08 | FAIL | PASS | NB1 fixed. |
| W-11 | FAIL | PASS | NB2 fixed. |
| T-16 | PASS | FAIL | B-new-1. |

Every other rule keeps its review-2 status (PASS or N/A; X-18 not checked).

## Violations statement

As of this pass, one rule in force is violated: **T-16**. On hover-capable pointers, the poster caption text (Client/Tools) is clipped by the overlapping "View full size" strip on hover and keyboard focus (B-new-1). No other violation was found.

## Not checked

- The live URL, GitHub Pages 404 routing and the LinkedIn preview.
- Real touch devices and iOS/macOS/Android font fallback (the Helvetica, Roboto and Arial condensed faces did not load here).
- True 200% browser zoom and a screen reader.
- 768 and 1280 were not re-captured in this pass. B-new-1 comes from CSS that applies at every width with a hover-capable pointer, so I infer it also occurs there.

## Pass 4: T-16 fix check

I checked this myself: `python -m http.server 8136` (now stopped), Edge via Playwright, script `review-4/p4.js` in the scratchpad, screenshots in `.shots/review-4/`, all of them viewed. styles.css:242 now contains `z-index:2` on `.poster .fields` inside `@media (hover:hover) and (pointer:fine)`. No other file changed: index.html, script.js and 404.html still carry the 19:27/19:13 timestamps from pass 3.

- **Method.** For every non-space character, I took the centre of its box and checked that `elementFromPoint` there returns the element the character belongs to.
- **Hover and keyboard focus.** P1 and P2 at 768, 1280 and 1440: 44 of 44 panel characters are on top in every one of the 12 cases. The label is fully covered (0 of 12 visible). The panel has no internal scroll (scrollHeight − clientHeight = 0). Focus is `:focus-visible` in all 6 focus cases, and the two-tone ring sits outside the 16 px panel padding. Screenshots: `{768,1280,1440}-{p1,p2}-{hover,focus}.png`.
- **Rest state.** The "View full size" label shows 12 of 12 characters at all 3 widths for both posters. The panel stays hidden below the frame. Screenshots: `*-rest.png`.
- **Touch at 390** (`(hover: none)` true). Panel 44 of 44 and label 12 of 12 for both posters. The label's bottom edge equals the panel's top edge (701/701 and 702/702 px), so the two touch without overlapping. Screenshots: `390-touch-{p1,p2}.png`.
- **Regression checks.** scrollWidth ≤ viewport from 320 to 1920 at every 10 px step. The scroll/library/pinning grep and the effects/placeholder grep both exit 1. CSS hexes are still only the 6 neutrals.
- **Does covering the label break a rule?** No.
  - The label is covered in full, not clipped, and only while the panel is open. T-16 is about clipped glyphs, and none remain.
  - The link's purpose is still available in each state. Before interaction the visible label shows it. During hover and focus the accessible name "View full size: <title>" (W-08) and the pointer cursor still show it.
  - On touch, both the label and the panel are always visible (P-19).
- **T-16: FIXED.**

**Final statement: No violations of docs/design-rules.md found** among the rules in force that I checked. X-18 was not checked, because no comparison set was given. The live URL, real devices and non-Windows font fallback remain unverified, as listed above.
