# Demo directions, round 2: build specs (D, E, F)

Round 1 (A "Index", B "Reel", C "Broadsheet", in `docs/demo-directions.md`) was judged "too simple". The owner also ruled "no serif". Round 2 makes two things central in every direction: **flat accent colour blocks** that are part of the layout, and **hover/focus motion** on every piece. Each direction below is complete: the builder makes no design decisions. If something is not specified, ask; do not invent. Every rule in `docs/design-rules.md` applies except where the owner's round 2 choices override it (listed next).

Checks run while writing this file (2026-11-18):
- Fonts: every css2 URL below returned HTTP 200 with `@font-face` rules (Saira 3 rules, Bricolage Grotesque 3, Instrument Sans + JetBrains Mono 10). Each family's `METADATA.pb` in `github.com/google/fonts` sits under `ofl/` with `license: "OFL"`. Saira's `wdth` axis (50-125) and Bricolage's `opsz` axis (12-96) were checked there too.
- Contrast: every ratio was computed in Python with the WCAG 2.x relative-luminance formula (sRGB linearised, `(L1+0.05)/(L2+0.05)`). None was estimated.
- Type scales were computed at 320, 390, 768, 1440 and 1920 px: 7 or fewer sizes per direction, and every step between adjacent sizes is at least 1.11x (T-02).
- Column widths and accent shares were computed from the stated dimensions. Text heights in the share figures are estimates, so each share is labelled "about".

**Owner overrides (round 2 wins over these rules):**
- **C-02** (accent used rarely, never on large areas): overridden in all three directions. The accent fills panels, bands and plates.
- **M-07**, second clause (hover limited to colour, underline or small opacity change): overridden. Hover slides panels, wipes fills across, scales art inside a clipped frame and runs a video-preview stand-in. M-07's first clause still holds: what moves is always a child inside a frame that stays put, so the hit area never moves.
- **C-05**, "focus rings themed to the accent": partly overridden. An accent ring cannot be seen on an accent block, so rings on accent areas use the on-accent colour (D, F) or `--text` (E). Every ring still meets 3:1 against the colour it sits on.
- Launch-only, not conflicts: I-01, X-13 and W-01 (placeholder art and copy are demo-only). The flat geometric placeholder art also stands in for content that I-07 and I-09 cover at launch. The horizontal bands inside the poster art are part of the poster subject, not texture (X-11).
- Lifted from round 1's own build list (these were not rules in the rules file): `@keyframes` is allowed for the three named animations below, and `transform` may now be transitioned. M-06 still limits animation to `transform`, `opacity` and colour.

---

## Shared build constraints (D, E, F)

**Files and tooling**
- One self-contained folder per demo: `demos/d/index.html` + `demos/d/styles.css`, and the same for `demos/e/` and `demos/f/`. No files are shared between folders. No image files: all art is inline SVG. The only external request is the Google Fonts `<link>` (demo stage only; self-host at build).
- No frameworks, no build step, no npm. The only JS is the facade script below, inline at the end of `<body>`. No scroll, wheel or touchmove listeners.
- Preview: `python -m http.server 8000 --directory demos`, then open `/d/`, `/e/`, `/f/`.

**HTML**
- `<html lang="en">`, `<meta charset="utf-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1">`. Title: `<title>Your Name: graphic design and video editing (Demo D)</title>` (E and F accordingly). `<meta name="description" content="Your Name: graphic design and video editing. Demo with placeholder content.">` (W-11).
- Landmarks: `<header>`, `<nav aria-label="Sections">`, `<main id="top">`, one `<section aria-labelledby>` per section with its `<h2>`, `<footer>`. Exactly one `<h1>`. Each piece is an `<article class="piece" id="...">` with an `<h3>`.
- Fonts: `<link rel="preconnect" href="https://fonts.googleapis.com">`, `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`, then the stylesheet link for that direction. Every link uses `display=swap` (T-15). **No serif families anywhere**: font stacks end in `sans-serif` or `monospace`, and Georgia, Times or `serif` never appear as a fallback.

**Pieces (same set and ids in every demo)**

| id | h3 text | Art (kit below) |
|---|---|---|
| `p-series` | Poster series title | P1 + P1b, 4:5 portrait |
| `p-event` | Event poster title | P2, 1:1.41 portrait |
| `l-team` | Team logo title | L-team, 1:1 |
| `l-set` | Logo set title | L-a, L-b, L-c, L-d, L-e, 1:1 each (one piece) |
| `v-reel` (optional) | Showreel title | V-reel, 16:9 |
| `v-char` | Character edit title | V-char, 16:9 |
| `v-air` | Aircraft edit title | V-air, 16:9 |
| `v-moto` | Motorsport edit title | V-moto, 9:16 |

- Fields: `<dl class="fields">` with three `<div>` groups: `<dt>Role</dt><dd>Role placeholder</dd>`, `<dt>Brief</dt><dd>Brief placeholder: one sentence on what the client asked for.</dd>`, `<dt>Tools</dt><dd>Tool placeholder, tool placeholder</dd>`. Title = the `<h3>`. Posters and logos also get `<p class="client">Client name</p>`.
- Posters and logos: the h3 holds `<a href="#<id>">` (it stands in for the project-page link on the live site). Make the whole piece clickable with `.piece{position:relative}` and `.piece h3 a::after{content:"";position:absolute;inset:0}`. Video pieces: the facade `<button>` is the interactive element and the h3 is plain text.
- Showreel: wrap it in `<!-- optional: showreel -->` ... `<!-- /optional -->` comment lines. Build it visible in the demo. Each direction states what leads when it is absent; no direction depends on it.
- Copy, used verbatim: owner "Your Name"; email `name@example.com`; LinkedIn `href="#"` with the text "Open LinkedIn profile (placeholder)"; lede "Lede placeholder: one sentence on what Your Name makes and for whom."; about "About placeholder. Two or three sentences on what Your Name makes and for whom, written with the owner. No claims, no numbers."; year "20XX". No stats, counts, testimonials or skill bars (P-13, P-14). No real client names, roles, briefs or tools.

**Placeholder art kit (inline SVG, flat, no gradients, no strokes as decoration)**
- Markup: `<div class="art" role="img" aria-label="Placeholder art: poster, 4:5 portrait"><svg viewBox="..." aria-hidden="true" focusable="false">...</svg><span class="ph-tag" aria-hidden="true">Placeholder · Poster 4:5</span></div>`. The `.art` box carries the `aspect-ratio`. The SVG is `display:block; width:100%; height:100%`. Tag texts: "Placeholder · Poster 4:5", "Placeholder · Poster 1:1.41", "Placeholder · Logo 1:1", "Placeholder · Video 16:9", "Placeholder · Video 9:16", "Placeholder · Showreel 16:9".
- `.ph-tag`: absolute, top-left, inset 8px, `background:var(--bg)`, `color:var(--muted)`, padding 4px 8px, tag type role of the direction. It sits on a solid chip, so its contrast is the muted/bg pair (C-04).
- Colour slots, set per direction on `.art`: `--a-bg` (ground), `--a-mid`, `--a-ink`, `--a-hot` (= accent), `--a-plate`, `--a-sheen`. Shape classes: `.g{fill:var(--a-bg)} .m{fill:var(--a-mid)} .i{fill:var(--a-ink)} .h{fill:var(--a-hot)} .p{fill:var(--a-plate)} .s{fill:var(--a-sheen)}`. SVG `<text>` numerals: `font-family:inherit; font-weight:600`, `letter-spacing:-0.02em`, hidden from assistive tech through the parent SVG.
- Geometry (rect = x,y,w,h):

| Art | viewBox | Shapes, back to front |
|---|---|---|
| P1 | 0 0 400 500 | rect.g 0,0,400,500 · rect.h 0,300,400,56 · rect.m 0,372,400,20 · text.i "07" x24 y272 size 232 · rect.i 24,420,200,10 · rect.i 24,440,152,10 · rect.m 24,460,176,10 |
| P1b | 0 0 400 500 | rect.g full · rect.i 24,24,200,10 · rect.i 24,44,152,10 · rect.m 24,64,176,10 · rect.h 0,96,400,56 · rect.m 0,168,400,20 · text.i "12" x24 y470 size 232 |
| P2 | 0 0 400 566 | rect.g full · rect.h 0,0,400,152 · text.g "24" x24 y128 size 120 · six rows at y = 184 + n×56 (n = 0..5): rect.i 24,y,56,28 (row n=2 uses .h) and rect.m 96,y,280,28 · rect.m 0,530,400,36 |
| L base | 0 0 400 400 | rect.p 0,0,400,400 · rect.s 0,0,400,132 (flat "metal" band). Marks go in `<g class="mark">` |
| L-team | | circle.h 200,212 r112 · rect.p 104,194,192,36 · rect.i 184,120,32,32 |
| L-a | | polygon.h 200,104 312,300 88,300 |
| L-b | | polygon.h 200,92 308,200 200,308 92,200 · rect.p 176,176,48,48 |
| L-c | | circle.i 200,200 r104 · circle.p r56 · circle.h r20 |
| L-d | | rect.h 108,128,184,32 · rect.i 108,184,184,32 · rect.h 108,240,184,32 |
| L-e | | path.h `M96 280 A104 104 0 0 1 304 280 Z` · rect.i 96,296,208,16 |
| V base | 0 0 640 360 | rect.g full · rect.m 0,236,640,124 · rect.i 0,234,640,2 (horizon) · circle.h.v-sun 480,140 r44 |
| V-char | | + rect.i 296,140,48,96 · circle.i 320,116 r22 |
| V-air | | + polygon.i 120,150 300,164 120,178 150,164 |
| V-reel | | + rect.p 214,0,212,234 · rect.i 212,0,2,234 · rect.i 426,0,2,234 · V-char figure |
| V-moto | 0 0 360 640 | rect.g full · rect.m 0,452,360,188 · rect.i 0,450,360,2 · circle.h.v-sun 252,236 r40 · rect.i 76,404,208,40 · rect.i 116,376,112,32 · circle.m 124,446 r20 · circle.m 236,446 r20 |

- `.v-sun` and `.mark` get `transform-box:fill-box; transform-origin:center`.

**Video facade (click-to-load, no iframe, no `<video>`)**
- Markup: `<button type="button" class="facade" data-status="st-char" aria-label="Play video: Character edit title (placeholder)">`. Inside it: the `.art` (role removed, `aria-hidden="true"`, because the button names itself), `<span class="sweep" aria-hidden="true"></span>`, `<span class="tc" aria-hidden="true"><span class="tc-idle">00:00:00:00</span><span class="tc-live">Preview · muted</span></span>` (top-right, inset 8px, same chip style as `.ph-tag`, `font-variant-numeric:tabular-nums`), and the play control specified per direction (its icon is `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>`, `fill:currentColor`). Directly after the button: `<p class="facade-status" id="st-char" role="status"></p>`.
- Script, verbatim, end of `<body>` (click listeners only, P-11):
  ```html
  <script>
  document.querySelectorAll('button.facade').forEach(function (b) {
    b.addEventListener('click', function () {
      document.getElementById(b.dataset.status).textContent = 'Demo only: the video player loads here on the live site.';
    });
  });
  </script>
  ```
- **Live-site behaviour (for the record; do not build it in the demo):** on `pointerenter` or `focus` of a facade, on devices matching `(hover: hover)` and with no reduced-motion preference, a muted, inline, looping ffmpeg preview (under 3 MB, poster frame set) plays over the frame. It pauses and rewinds on `pointerleave` or `blur`. Click or Enter loads the YouTube player (lite facade). Touch devices and reduced-motion visitors see the poster frame only (I-10, M-10).
- **Demo stand-in (CSS only):** `.frame` and `.facade` have `overflow:hidden; position:relative`. `.sweep{position:absolute; inset:0; opacity:0; pointer-events:none}` with `.sweep::before{content:""; position:absolute; left:0; top:0; bottom:0; width:2px; background:var(--text)}`. `.tc-live{opacity:0}`. Inside `@media (hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)`, on `.facade:hover, .facade:focus-visible`: `.v-sun{animation:drift 4s linear infinite alternate}`, `.sweep{opacity:1; animation:scrub 4s linear infinite}`. The label swap (`.tc-idle` opacity 0, `.tc-live` 1, 100 ms) lives in the hover/focus rule outside the motion query, so it survives reduced motion. Nothing flashes (I-11).
- The only keyframes allowed in any demo:
  `@keyframes drift{from{transform:translateX(0)}to{transform:translateX(-96px)}}`
  `@keyframes scrub{from{transform:translateX(0)}to{transform:translateX(100%)}}`
  `@keyframes sweep-once{from{transform:translateX(0);opacity:1}to{transform:translateX(100%);opacity:0}}` (F only)

**CSS, all demos**
- Mobile-first: base styles for 390 px, then `@media (min-width:768px)` and `@media (min-width:1024px)`. Check 320, 390, 768, 1280, 1440 and 1920 px: no horizontal scroll (L-13). Never size anything with `100vw` (the scrollbar causes overflow); full-bleed blocks are full-width children of `<body>`/`<main>` with a `.wrap{max-width:var(--max); margin-inline:auto; padding-inline:var(--margin)}` inside.
- Colours only as custom properties on `:root`, used via `var()` (C-01). Spacing scale, the only margin/padding/gap values: `--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:128px` (L-02).
- `h1,h2,h3{text-wrap:balance}` `p,dd{text-wrap:pretty}`, paragraphs `max-width:65ch`, `letter-spacing` only in `em` (T-05, T-08, T-10). `::selection{background:var(--accent); color:<the direction's on-accent text>}`.
- Transitions only on `transform`, `opacity`, `color`, `background-color`, `text-decoration-color`, `fill`. Never `all`, never width, height, top, left or clip-path (M-06). One easing for everything: `cubic-bezier(0.16,1,0.3,1)` (M-05). The exit (un-hover) duration is always shorter than the entrance (M-04). Write entrance durations on the hovered state and exit durations on the base state.
- Hover pattern: every rule that hides content until hover, and every hover rule, sits inside `@media (hover:hover) and (pointer:fine)`. Pair each `:hover` with `:focus-within` (pieces) or `:focus-visible` (controls) so keyboard users get the same state. Outside that query (touch, `hover:none`) every field and label is visible in the default state and nothing depends on hover (L-14).
- Reduced motion, verbatim: `@media (prefers-reduced-motion:reduce){*,*::before,*::after{transition-duration:0ms!important;animation:none!important}.art,.mark{transform:none!important}}`. Panels, fills and label swaps still change, just instantly (M-08). The `.sweep` stays at opacity 0.
- Every link and button has a hit area of at least 44×44 px (padding, not font size) (L-14). Every interactive element has hover, focus-visible and active states (M-09). Disabled states do not occur.
- Banned anywhere: `position:sticky`/`fixed`, `scroll-snap-*`, `scroll-behavior`, `overscroll-behavior`, `animation-timeline`, `backdrop-filter`, any `*-gradient(`, `box-shadow`, `text-shadow`, `filter`, `mix-blend-mode`, `perspective`, `rotate`/3D transforms, `opacity` used to mute text, IntersectionObserver, scroll libraries, `transition:all`. The header always scrolls away.
- Before handover, run the CLAUDE.md scroll-rule grep on `demos`; it must exit 1. Also confirm `grep -rniE "gradient|shadow|backdrop|serif\b|georgia|times" demos/d demos/e demos/f` finds only `sans-serif`.

---

## Direction D: "Pit Board"

**Concept.** The page is built like a pit board and a race livery: solid yellow panels carry the name, the section names, the logo wall and the contact, cutting edge to edge across a near-black page. Posters sit on dark ground, and on hover or focus a yellow panel slides up over the lower part of the work showing its role, brief and tools.

### D.1 Fonts
- **Saira** (OFL), one variable family used at two widths. Link: `https://fonts.googleapis.com/css2?family=Saira:wdth,wght@75..100,400..600&display=swap`. Stack `"Saira", "Arial Narrow", Arial, sans-serif`. Condensed = `font-stretch:75%`; text = `font-stretch:100%`. Weights 400, 500 and 600 only (T-03).

| Role | Size | Width / weight | Case / tracking | Line-height |
|---|---|---|---|---|
| h1 | `clamp(2.75rem, 1.6rem + 4.6vw, 5.5rem)` (44 / 61 / 88 px at 390 / 768 / 1440) | 75% / 600 | UPPERCASE via CSS, -0.01em | 0.95 |
| h2 (bars), contact email | `clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem)` | 75% / 600 | UPPERCASE (email stays lower case), 0 | 1.0 |
| h3, header name, lede, about | `1.25rem` | 100% / 600 (h3, name); 400 (lede, about) | sentence case, 0 | 1.25 (h3) / 1.45 |
| body, dd | `1rem` | 100% / 400 | 0.01em | 1.55 |
| labels (dt, nav, client, tags, timecode, play text, footer) | `0.75rem` | 100% / 500 | UPPERCASE, +0.08em; tabular-nums on timecode | 1.4 |
- Art numerals: Saira 75% / 600. The HTML source stays sentence case; uppercase comes only from `text-transform` (W-06).

### D.2 Colour tokens

| Token | Hex | Computed pairs |
|---|---|---|
| `--bg` | `#0E0E0E` (max channel 14) | |
| `--surface` (art ground) | `#191919` | |
| `--plate` (logo metal) | `#262626` | |
| `--sheen` (metal band) | `#333333` | |
| `--line` | `#2C2C2C` | decorative only |
| `--text` | `#EEEEEE` | on bg 16.64:1, on surface 15.15:1 |
| `--muted` | `#A0A0A0` | on bg 7.38:1, on surface 6.72:1 |
| `--accent` pit-board yellow (HSL 53° 64% 55%) | `#D6C445` | on bg 10.89:1, on surface 9.91:1 |
| `--on-accent` (all text on yellow) | `#0E0E0E` | on accent 10.89:1; on `--text` (active states) 16.64:1 |
- Yellow is always a solid, opaque fill. On yellow, every text role uses `--on-accent`; hierarchy comes from size, width, weight and case, never from grey. Yellow as text on dark appears only on link hover/focus.
- Art slots: `--a-bg:--surface; --a-mid:--plate; --a-ink:--text; --a-hot:--accent; --a-plate:--plate; --a-sheen:--sheen`. The kit is used unchanged.

### D.3 Grid and spacing

| Width | Columns | Gutter | Side margin | Content max |
|---|---|---|---|---|
| 390 px | 4 (col 80.5 px) | 12 px | 16 px | fluid |
| 768 px | 8 (col 76 px) | 16 px | 24 px | fluid (720 px) |
| ≥1024 px (1440 shown) | 12 (col 100 px) | 16 px | 32 px min | 1376 px, centred |
- Spans at 1440: 3 cols 332 px, 4 cols 448, 6 cols 680, 8 cols 912.
- Section gap `--s-9` at ≥1024, `--s-8` below. Bar to content `--s-7`. Title block to frame `--s-3`. Rows within a section `--s-8`. Radius 0 everywhere.
- **Full-bleed yellow:** header + opening (one continuous panel), the section bars (Posters, Video) and two whole sections (Logos, Contact). Field panels sit inside the frame width, not full bleed.
- Piece title block (always visible, above the frame): h3, then `.client` (posters and logos) `--s-1` below, label style, `--muted` on dark / `--on-accent` on yellow.

### D.4 Page structure
1. **Header + opening** (`<header class="on-accent">`, then `<section class="opening on-accent">` as the first child of main; both yellow, no gap between them). Header height 64 px: "Your Name" (h3 style, link to `#top`) left; nav "Posters", "Logos", "Video", "Contact" right, label style, gap `--s-5`. At 390: name row, then nav row with 44 px links. Opening, ≥1024: padding-top `--s-7`, padding-bottom `--s-8`. Cols 1-8: h1 "Graphic design and video editing" (2 lines at 88 px), `--s-5`, lede "Your Name. Lede placeholder: one sentence on what Your Name makes and for whom." (max 40ch). Cols 9-12, top-aligned with the h1: the **lead poster**, art P1 in a dark mount (`background:var(--bg); padding:16px`; art 416×520, mount 448×552). Below the mount, after `--s-3`: the link "Poster series title" to `#p-series` (label style). 768: h1 and lede full width, mount cols 1-5 below. 390: h1 (about 3 lines), lede, mount full width (8 px padding). **Accent share:** about 65% of the 1440×900 first viewport (computed: 1440×758 panel minus the 448×552 mount) and about 55% at 390×844. The Posters bar starts at about 854 px at 1440.
2. **Posters** (`id="posters"`). Full-bleed yellow bar: padding-block `--s-4`, h2 "Posters" aligned to the wrap. ≥1024 row: `p-series` in cols 1-8: title block, then one `.frame` holding P1 and P1b side by side (448×560 each, 16 px gap). `p-event` in cols 9-12: title block, then a frame with P2 (448×634). Tops align. Bottoms differ by design because ratios are true (I-05). 768: series full width (two arts 352×440), event cols 1-5 (444 px wide). 390: everything stacked full width. **Field panel:** inside the frame (DOM order: h3, `.client`, `.frame` > arts, `dl.fields`). With hover: `position:absolute; left:0; right:0; bottom:0; max-height:100%; overflow-y:auto`, yellow, padding `--s-5`. The series panel lays out the three fields as columns (`grid-template-columns:1fr 2fr 1fr; gap:16px`, about 120 px tall, about 21% of the frame). The event panel stacks them (about 210 px, about 33%). dt labels and dd body, all `--on-accent`. Without hover the same yellow block sits statically below the arts. **Accent share:** bar only at rest on desktop (about 8% of the section); about 30% on touch screens, where the panels are always shown.
3. **Logos** (`id="logos"`, `class="on-accent"`), a full-bleed yellow section with padding-block `--s-8` (`--s-7` below 768). h2 "Logos" at the top, then `--s-7`. ≥1024: `l-team` cols 1-4: title block, frame with L-team (448 sq), then the static `dl` stacked below (`--s-4`). `l-set` cols 5-12: title block, then L-a cols 5-8 (448 sq) and L-b..L-e as a 2×2 in cols 9-12 (216 sq each, 16 px gap), then the `dl` as `1fr 2fr 1fr` columns. 768: team cols 1-4 with its dl in cols 5-8; set below, L-a cols 1-4 (352) and the 2×2 in cols 5-8 (168 each). 390: team, then L-a full width, then the 2×2 (173 each). The dark metal plates on yellow are the composition. **Accent share:** about 52% of the section at 1440 (computed with an 850 px section height; the plates are the rest).
4. **Video** (`id="video"`). Yellow bar "Video". Video fields are always static, because hover plays the preview over the frame. ≥1024:
   - Optional `v-reel`: title block, facade cols 1-12 (1376×774), fields as a full-width yellow strip under it (`1fr 2fr 1fr`, padding `--s-5`).
   - `v-char`: title block across cols 1-12, facade cols 1-8 (912×513), fields as a yellow block in cols 9-12 that stretches to the facade's height (stacked dl, padding `--s-5`).
   - Row: `v-moto` title block and facade cols 1-3 (332×590), fields yellow block cols 4-6, top-aligned, auto height. `v-air` title block and facade cols 7-12 (680×383), fields strip under it.
   - **No showreel:** `v-char` takes the full-width reel layout (facade cols 1-12, strip under it) and the moto/air row follows. The opening is unaffected.
   - 768 and 390: each facade full width (v-moto 60% at 768, 70% at 390) with its yellow strip under it. **Accent share:** about 25% of the section.
   - **Facade control:** `.play-key`, a 64×64 yellow square (56 below 768) flush bottom-left with a 24 px `--on-accent` triangle. Behind it, `.play-bar`: full frame width, 64 px tall, yellow, `transform:scaleX(0); transform-origin:left`. `.play-text` "Play with sound" (label style, `--on-accent`, left 80 px, vertically centred, opacity 0). `.sweep{bottom:64px}` so the line stops above the bar.
5. **Contact** (`id="contact"`, `on-accent`), a full-bleed yellow section with padding-block `--s-9` (`--s-8` below 1024). ≥1024: cols 1-6 hold h2 "Contact" and, after `--s-5`, the about paragraph (1.25rem, max 50ch). Cols 8-12: the email link `name@example.com` at h2 size (Saira 75% / 600, lower case), `--on-accent`, underline 3px `--on-accent`, offset 0.15em, padding-inline `--s-2`, min-height 44 px. After `--s-5`: the LinkedIn link (1rem, underlined). 768/390: stacked. The email is the one primary action (L-15). **Accent share:** about 100% of the section.
6. **Footer** on `--bg`, padding-block `--s-6`: "© 20XX Your Name" (label, `--muted`) left, "Back to top" right (`--text`, 1px accent underline).

### D.5 Hover and focus motion

| Element | Trigger | Property: from → to | In / out ms |
|---|---|---|---|
| Poster field panel | `.piece:hover`, `.piece:focus-within` | `transform: translateY(100%)` → `translateY(0)` | 240 / 160 |
| Poster art | same | `.art` `transform: scale(1)` → `scale(1.04)`, clipped by `.frame` | 300 / 200 |
| Logo mark + plate | same (all marks of the set together) | `.mark` `scale(1)` → `scale(1.06)`; `rect.p` fill `--plate` → `--bg` | 240 / 160; 200 / 140 |
| h3 link (dark areas) | `a:hover`, `a:focus-visible` | color `--text` → `--accent` | 120 / 80 |
| Facade bar | `.facade:hover`, `.facade:focus-visible` | `.play-bar` `scaleX(0)` → `scaleX(1)`; `.play-text` opacity 0 → 1 (delay 100 ms in, 0 out) | 260 / 180; 150 / 80 |
| Facade preview | same | `drift`, `scrub`, label swap (shared) | 4 s loops |
| Nav and links on yellow | hover / focus-visible | `text-decoration-color` transparent → `--on-accent` (2px) | 120 / 80 |
| Contact email | hover / focus-visible | `background-color` transparent → `--on-accent`; color → `--accent`; underline → transparent | 150 / 100 |
- Active: piece h3 color `--muted`; play key and bar background `--text`; email background `--text` (`--on-accent` text, 16.64:1).
- `(hover:none)`: panels are static below the arts and always visible. No bar wipe: the play key shows alone and the tags show idle. Nothing is hidden.
- Reduced motion: the panel and bar appear instantly, there is no art or mark scaling, and there are no loops. The label swap and the colour changes remain.
- Focus: `:focus-visible{outline:3px solid var(--accent); outline-offset:3px}` (10.89:1 on bg). Inside `.on-accent` and inside `.fields` panels: `outline-color:var(--on-accent)` (10.89:1 on yellow). A focused piece shows the ring on its title and reveals its panel.

### D.6 Do not
- Do not shrink the yellow back to links and buttons. The panel, bars, Logos section, Contact section and field panels are required at the stated sizes.
- Do not use translucent yellow, `rgba` tints or grey or white text on yellow. Only `--on-accent` sits on yellow.
- Do not add checkered flags, diagonal stripes, chevrons or speed lines (X-11, P-08). Bands are horizontal, flat and full width.
- Do not move the panel with `height`, `top` or `bottom` (M-06), and never move the frame or article itself (M-07).
- Do not hide the four fields on touch screens. Do not put a shadow on the poster mount: the dark padding is the mount.
- Do not exceed 5.5rem for the h1 or use Saira below 75% width (oversized type is not the idea; T-06).

---

## Direction E: "Plates"

**Concept.** Every piece is mounted on its own full-bleed plate, and the page alternates raspberry and dark plates edge to edge in two columns, like a printed specimen. On hover or focus a plate flips colour (raspberry to dark, dark to raspberry) while the work scales slightly inside its frame. The opening splits the screen into a raspberry plate carrying the statement and a dark plate showing a poster beside a vertical video.

### E.1 Fonts
- **Bricolage Grotesque** (OFL, axes `opsz` 12-96 and `wght`), weights 400 and 600, `font-optical-sizing:auto` (large sizes get the display cut automatically). Link: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..600&display=swap`. Stack `"Bricolage Grotesque", "Helvetica Neue", Arial, sans-serif`. Sentence case everywhere; no uppercase anywhere.

| Role | Size | Weight | Tracking | Line-height |
|---|---|---|---|---|
| h1 | `clamp(2.5rem, 1.5rem + 4vw, 4.5rem)` (40 / 55 / 72 px) | 600 | -0.03em | 1.0 |
| h2, contact email | `clamp(2rem, 1.6rem + 1.6vw, 3rem)` | 600 | -0.02em | 1.05 |
| h3 | `1.5rem` | 600 | -0.01em | 1.2 |
| lede, about | `1.25rem` | 400 | 0 | 1.45 |
| body, dd | `1rem` | 400 | 0.01em | 1.55 |
| labels (dt, nav, header name, client, footer) | `0.875rem` | 600 | 0.01em | 1.4 |
| tags, timecode | `0.75rem` | 400 | 0.02em, tabular-nums | 1.3 |
- Fields are a run-in list: each `<div>` is `display:flex; gap:var(--s-2); align-items:baseline`; `dt` is fixed at `flex:0 0 4.5rem` in label style; `dd` is body text.

### E.2 Colour tokens

| Token | Hex | Computed pairs |
|---|---|---|
| `--bg` | `#121212` (max channel 18) | |
| `--surface` (dark plates) | `#1D1D1D` | |
| `--surface-2` (active plates, art ground, logo metal) | `#292929` | |
| `--sheen` (art mid, metal band) | `#3A3A3A` | |
| `--line` | `#303030` | decorative only |
| `--text` (**all** text, on dark and on raspberry) | `#F2F2F2` | on bg 16.73:1, surface 15.06:1, surface-2 13.00:1, **accent 5.20:1** |
| `--muted` (dark areas only) | `#A6A6A6` | on bg 7.70:1, surface 6.92:1; on accent 2.39:1, so **never on raspberry** |
| `--accent` raspberry (HSL 341° 55% 46%) | `#B5345C` | non-text: on bg 3.22:1, next to surface 2.90:1 (adjacent plates, decorative) |
- Text colour never changes when a plate flips. That is why the flip is safe mid-transition: `--text` passes on both plate colours. Raspberry is never used as text, except on the hovered email link (raspberry on `--text`, 5.20:1).
- Art slots: `--a-bg:--surface-2; --a-mid:--sheen; --a-ink:--text; --a-hot:--accent; --a-plate:--surface-2; --a-sheen:--sheen`. **E change to the kit:** in P1 and P1b the numerals use `.h` and the 56 px band uses `.i`.

### E.3 Grid and spacing

| Width | Plate columns | Plate padding | Plate inner | Text wrap (header, section heads) |
|---|---|---|---|---|
| 390 px | 1, full bleed | `--s-5` (24) | 342 px | margin 24 |
| 768 px | 2 × 384 px | `--s-6` (32) | 320 px | margin 32 |
| ≥1024 px (1440 shown) | 2 × 50%, full bleed | block `--s-8`, inline `--s-8` | max 592 px | max 1312 px, margin 64 |
- Spreads: `display:grid; grid-template-columns:1fr 1fr` (one column below 768). Plates in a spread stretch to equal height (L-09). Plates touch: no gap between plates or spreads.
- At ≥1024, `.plate-in{max-width:592px}` sits against the centre line: `margin-left:auto` in left plates, `margin-right:auto` in right plates. Left plate content then starts on the wrap's left edge at every width from 1440 up (at 1920: 960 - 64 - 592 = 304 = wrap edge).
- Inner subgrid where noted: 4 cols × 136 px, 16 px gutter (at 592). Wide plates span both columns: inner max 1312, `grid-template-columns:2fr 1fr; column-gap:48px` (art 843, caption 421 at 1440).
- Plate inner: flex column. Art first; the caption group (h3, `.client` `--s-1` below, fields `--s-4` below) takes `margin-top:auto` with at least `--s-5` above it, so captions in a spread share a bottom line. Art is left-aligned. Width caps: 4:5 poster pair 284 px each (24 px gap), 1:1.41 poster 300, single logo 360, 16:9 100% of inner, 9:16 300.
- Section heads: on `--bg` in the wrap, `--s-9` above (`--s-8` below 1024), `--s-6` below, h2 only. Radius 0 everywhere, except the play disc (50%).

### E.4 Page structure (plate colours are fixed: A = accent, S = surface)
1. **Header** (on `--bg`, height 72 px, wrap): "Your Name" left (label), nav right: "Posters", "Logos", "Video", "Contact" (label, `--text`, underline 2px `--accent` at 0.3em offset). 390: two rows.
2. **Opening spread** [A | S]. A: content bottom-aligned (`justify-content:flex-end`). h1 "Graphic design and video editing", then `--s-5`, lede "Your Name. Lede placeholder: one sentence on what Your Name makes and for whom." S: two links side by side with equal heights, `<a class="preview" href="#p-series">` (art P1 plus the label "Poster series title" `--s-3` below) and `<a class="preview" href="#v-moto">` (art V-moto with its `.tc` idle chip, no play icon, plus the label "Motorsport edit title"). Flex row, gap 24, items `flex:0.8 1 0` and `flex:0.5625 1 0`: 417 px tall at 1440 (333 + 235 px wide), 239 px at 390. 768: two plates side by side. 390: A stacked over S. **Accent share:** about 32% of the first viewport at 1440×900 (720×579 plate) and about 34% at 390×844.
3. **Posters** (`id="posters"`), head h2 "Posters". Spread [A: `p-series`, two arts side by side | S: `p-event`]. 390: series arts stay paired (163×204), event art 75% wide. **Accent share:** 50% at rest.
4. **Logos** (`id="logos"`), head h2 "Logos". Spread [S: `l-team` | A: `l-set`, where L-a spans cols 1-2 × rows 1-2 (288 sq) and L-b..L-e fill cols 3-4 as a 2×2 (136 each)]. 390: team art 280 sq; set subgrid 2 cols: L-a full width, then 2×2 (163 each). **Accent share:** 50%.
5. **Video** (`id="video"`), head h2 "Video".
   - Optional wide plate A: `v-reel`, facade in the 2fr column, caption in the 1fr column, bottom-aligned.
   - Spread [S: `v-char` facade at 100% inner | A: `v-moto` facade 300 px wide].
   - Wide plate S: `v-air`, facade 2fr, caption 1fr.
   - **No showreel:** delete the reel plate; nothing else changes. 390: plates stack in DOM order (v-moto at 70% width).
   - **Facade control:** a centred 72 px disc (56 below 768), `background:var(--text)`, 28 px triangle in `--accent` (5.20:1). The `.ph-tag` sits top-left and the `.tc` top-right. **Accent share:** about 45%.
6. **Contact** (`id="contact"`), spread [A | S]. A: h2 "Contact", `--s-6`, the email link `name@example.com` at h2 size, underline 3px `--text`, padding-inline `--s-2`, then the LinkedIn link (1rem) after `--s-4`. S: the about paragraph (1.25rem, max 45ch), with no heading. These plates do not flip.
7. **Footer** on `--bg`, wrap, padding-block `--s-6`: "© 20XX Your Name" (label, `--muted`) left, "Back to top" right.

### E.5 Hover and focus motion

| Element | Trigger | Property: from → to | In / out ms |
|---|---|---|---|
| Piece plate | `.piece:hover`, `.piece:focus-within` | `background-color`: A plates `--accent` → `--surface`; S plates `--surface` → `--accent` | 200 / 140 |
| Art | same | `.art` `scale(1)` → `scale(1.05)` inside `.frame{overflow:hidden}` | 300 / 200 |
| h3 link | same | `text-decoration-color` transparent → `--text` (2px, offset 0.2em) | 150 / 100 |
| Opening previews | `.preview:hover`, `:focus-visible` | art `scale(1)` → `scale(1.05)`; label underline transparent → `--text` | 300 / 200 |
| Facade disc | `.facade:hover`, `:focus-visible` | disc background `--text` → `--accent`; triangle `--accent` → `--text`; plus the shared preview stand-in | 150 / 100 |
| Header and footer links | hover / focus-visible | underline `--accent` → `--text` | 120 / 80 |
| Contact email | hover / focus-visible | `background-color` transparent → `--text`; color → `--accent` | 150 / 100 |
- Active: plate background `--surface-2` (13.00:1 with `--text`); disc background `--muted`.
- `(hover:none)`: no flip and no scale. Everything is already visible because E hides nothing.
- Reduced motion: the flip stays as an instant colour change; scaling and loops are removed.
- Focus: `:focus-visible{outline:3px solid var(--text); outline-offset:4px}` everywhere (16.73:1 on bg, 15.06:1 on surface, 5.20:1 on raspberry). A focused piece also flips, so focus has two visible cues.

### E.6 Do not
- Do not add gaps, borders, radii or shadows between plates. Do not inset plates inside the page margin: they bleed, and only their content aligns to the wrap.
- Do not put `--muted`, raspberry or any colour other than `--text` as text on raspberry.
- Do not change the checkerboard order. Do not make every plate accent or every plate dark.
- Do not flip by moving, scaling or sliding the plate (M-07). The flip is `background-color` only.
- Do not let art fill the plate: keep the width caps. Do not centre captions. Do not use uppercase, 700+ weights or a second family.

---

## Direction F: "Timeline"

**Concept.** The page is laid out like an edit suite. A program monitor opens the page beside a green slate carrying the statement, and a full-bleed green timeline below it indexes every piece as a clip. Each section is a track with a solid green track head down its left side, and on hover a green panel wipes across a piece's details while a playhead sweeps the frame.

### F.1 Fonts
- **Instrument Sans** (OFL) 400 and 600 for all text. **JetBrains Mono** (OFL) 400 only for timecodes, format labels and placeholder tags (data, T-13). Link: `https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;600&family=JetBrains+Mono:wght@400&display=swap`. Stacks: `"Instrument Sans", "Helvetica Neue", Arial, sans-serif` and `"JetBrains Mono", Consolas, monospace`.

| Role | Size | Family / weight | Case / tracking | Line-height |
|---|---|---|---|---|
| h1 | `clamp(2.25rem, 1.4rem + 3.2vw, 4rem)` (36 / 47 / 64 px) | Instrument 600 | sentence, -0.025em | 1.02 |
| h2 (track heads), contact email | `clamp(1.5rem, 1.3rem + 0.8vw, 2rem)` | Instrument 600 | sentence, -0.01em | 1.1 |
| lede, about | `1.25rem` | Instrument 400 | 0 | 1.45 |
| h3 (in clip bars) | `1.125rem` | Instrument 600 | sentence, 0 | 1.2 |
| body, dd, timeline clip titles | `1rem` | Instrument 400 (clip titles 600) | 0.01em | 1.55 |
| labels (dt, nav, lane labels, client, play text, footer) | `0.75rem` | Instrument 600 | UPPERCASE, +0.08em | 1.4 |
| mono (timecode, formats such as "poster 4:5", tags) | `0.75rem` | JetBrains 400 | lower case, 0 | 1.4 |

### F.2 Colour tokens

| Token | Hex | Computed pairs |
|---|---|---|
| `--bg` | `#0F0F0F` (max channel 15) | |
| `--surface` (art ground) | `#181818` | |
| `--plate` (art mid, logo metal) | `#262626` | |
| `--sheen` | `#333333` | |
| `--line` | `#2B2B2B` | footer hairline, decorative |
| `--text` | `#EBEBEB` | on bg 16.08:1, surface 14.89:1 |
| `--muted` | `#9E9E9E` | on bg 7.15:1, surface 6.63:1 |
| `--accent` edit green (HSL 150° 45% 48%) | `#43B079` | on bg 7.05:1, surface 6.53:1 |
| `--on-accent` (all text on green) | `#0F0F0F` | on accent 7.05:1; on `--text` (active) 16.08:1 |
- On green, only `--on-accent`. Green as text appears only on link hover on dark. Art slots: `--a-bg:--surface; --a-mid:--plate; --a-ink:--text; --a-hot:--accent; --a-plate:--plate; --a-sheen:--sheen`. The kit is used unchanged; tags and timecodes are set in JetBrains Mono.

### F.3 Grid and spacing

| Width | Columns | Gutter | Visible margin | Content max |
|---|---|---|---|---|
| 390 px | 4 (col 80.5) | 12 px | 16 px | fluid |
| 768 px | 8 (col 74) | 16 px | 32 px | fluid (704) |
| ≥1024 px (1440 shown) | 12 (col 88) | 24 px | 48 px min (60 at 1440) | 1320 px |
- Bleed grid, used by the opening, the tracks and the timeline: `grid-template-columns: minmax(24px,1fr) repeat(12, minmax(0,88px)) minmax(24px,1fr); column-gap:24px` (≥1024). Line 1 is the left page edge, cols 1-12 are lines 2-14, line 15 is the right edge. Below 1024, use the same pattern with 8 or 4 columns and that width's gutter.
- Spans at 1440: 2 cols 200 px, 3 cols 312, 4 cols 424, 6 cols 648, 8 cols 872, 10 cols 1096.
- **Track head** (≥1024): `grid-column:1/4` (left page edge through col 2), green, `display:grid; grid-template-columns:subgrid`, h2 in its cols 1-2 (`grid-column:2/4`), padding-block `--s-6`. It stretches to the full height of its section's work. Work: `grid-column:4/14` (cols 3-12), padding-block `--s-6`, rows `--s-8` apart. Tracks are `--s-9` apart, so the heads read as separate blocks. Below 1024 the head is a full-bleed bar (`grid-column:1/-1`, h2 aligned to col 1, padding-block `--s-4`) on top of the section.
- **Clip bar:** under every art frame and facade, the same width as the media, min-height 44 px, green, padding-inline `--s-4`. The h3 (`--on-accent`) sits left and the mono format right ("poster 4:5", "poster 1:1.41", "logo 1:1", "video 16:9", "video 9:16"). Media to bar: 0 (they touch). Bar to anything below: `--s-4`.
- **Fields column:** dark, padding `--s-5`, `position:relative`; `.client` first, then the stacked dl (dt label `--muted`, dd body `--text`). It holds the wipe layer `::before{content:""; position:absolute; inset:0; background:var(--accent); transform:scaleX(0); transform-origin:left; z-index:-1}` (the column gets `isolation:isolate`). Radius 0 everywhere.

### F.4 Page structure
1. **Header** (on `--bg`, height 64 px): "Your Name" (h3 style) left, nav right ("Posters", "Logos", "Video", "Contact", labels, underline on hover 2px `--accent`). 390: two rows.
2. **Opening** (bleed grid; DOM order: slate, then monitor article). ≥1024: the monitor article in cols 1-8: facade (872×491), clip bar, then its fields as a dark row (Role cols 1-2, Brief cols 3-6, Tools cols 7-8, with the wipe). The **slate**, green, from col 9 to the right page edge (`grid-column:10/-1`), spanning the article's full height, padding `--s-6`: h1 "Video editor and graphic designer", `--s-5`, lede "Your Name. Lede placeholder: one sentence on what Your Name makes and for whom." (`--on-accent`). The monitor piece is `v-reel` if it exists; **with no showreel it is `v-char`**. Below 1024: the slate is a full-bleed green block (padding `--s-5`) above the monitor, and the monitor fields stack.
   **Timeline band**, `--s-7` below: full-bleed green, padding-block `--s-6`, three lanes 8 px apart. Lane label in cols 1-2 (label style, `--on-accent`). Clips are links to the pieces, with `--bg` background, min-height 56 px, padding `--s-3` `--s-4`, title 1rem / 600 `--text`, mono format below in `--muted`:
   - "Posters" lane: `p-series` cols 3-5, `p-event` cols 6-8.
   - "Logos" lane: `l-team` cols 5-7, `l-set` cols 8-10.
   - "Video" lane: `v-reel` cols 3-4 (optional; omit it with no reel, others stay put), `v-char` cols 5-7, `v-air` cols 8-9, `v-moto` cols 10-12.
   768: lane label on its own row, clips 4 cols each (two per row). 390: two clips per row (2 cols each). The band never scrolls sideways. **Accent share:** about 40% of the 1440×900 first viewport (computed: slate 484×644 + clip bar 872×44 + the band's top 112 px). About 30% at 390×844 (slate about 253 px tall), with the band below the fold.
3. **Posters** track (`id="posters"`, head "Posters"). `p-series`: P1 cols 3-5 and P1b cols 6-8 (312×390 each), one clip bar across cols 3-8, fields column cols 9-12 stretching over art + bar. `p-event`: P2 cols 3-6 (424×600), bar, fields cols 7-10. 768: series arts side by side (344×430), event art cols 1-5; bars, then fields below full width. 390: stacked full width. **Accent share:** about 20% (head + bars).
4. **Logos** track (`id="logos"`). `l-team`: L-team cols 3-6 (424 sq), bar, fields cols 7-10. `l-set`: L-a cols 3-6 (424 sq) and L-b..L-e as a 2×2 in cols 7-10 (200 each, 24 px gap), one bar across cols 3-10, fields as a row under the bar (client + Role cols 3-4, Brief cols 5-8, Tools cols 9-10, wipe across the row). 390: L-a full width, 2×2 at 173 each. **Accent share:** about 20%.
5. **Video** track (`id="video"`). With a showreel: `v-char` facade cols 3-8 (648×365), bar, fields cols 9-12. Always: `v-moto` facade cols 3-5 (312×555), bar, fields cols 6-8 top-aligned; `v-air` facade cols 9-12 (424×239), bar, fields under it. With no showreel the `v-char` row is absent here (it is the monitor). 768/390: facades full width (v-moto 60% / 70%), each with its bar and fields. **Facade control:** `.play-key`, green, bottom-left inset `--s-4`, height 44, padding-inline `--s-4`, triangle 16 px plus the label, as two stacked spans "Play" / "Play with sound" (`min-width` fixed to the longer label, so the key never resizes). `.ph-tag` top-left, `.tc` top-right (mono). **Accent share:** about 22%.
6. **Contact** track (`id="contact"`, head "Contact"). About paragraph cols 3-8 (1.25rem, max 60ch). Cols 9-12: email link `name@example.com` at h2 size, `--text`, underline 3px `--accent`, padding `--s-2`, with its own wipe layer (as in the fields column); then the LinkedIn link (1rem) after `--s-4`.
7. **Footer**: `--bg`, `border-top:1px solid var(--line)`, padding-block `--s-6`, "© 20XX Your Name" (label, `--muted`) left, "Back to top" right.

### F.5 Hover and focus motion

| Element | Trigger | Property: from → to | In / out ms |
|---|---|---|---|
| Fields wipe | `.piece:hover`, `.piece:focus-within` | `.fields::before` `scaleX(0)` → `scaleX(1)`; dt, dd and `.client` color → `--on-accent` | 260 / 180 |
| Playhead sweep (posters, logos) | same | `.sweep` runs `sweep-once` 480 ms, once per hover, then rests at opacity 0 | 480 / – |
| Clip-bar h3 link | hover / focus-visible | `text-decoration-color` transparent → `--on-accent` (2px) | 120 / 80 |
| Timeline clip | `:hover`, `:focus-visible` | `background-color` `--bg` → `--accent`; title and format → `--on-accent` | 150 / 100 |
| Facade | `.facade:hover`, `:focus-visible` | label swap "Play" → "Play with sound" (opacity); shared preview stand-in (`.sweep` loops `scrub`) | 150 / 100; 4 s loops |
| Contact email | hover / focus-visible | wipe layer `scaleX(0)` → `scaleX(1)`; color `--text` → `--on-accent` | 260 / 180 |
- Text over a half-finished wipe passes through a low-contrast mix for at most 260 ms. This is accepted; both end states pass (16.08:1 and 7.05:1).
- Active: play key background `--text`; timeline clip background `--text` (`--on-accent` text, 16.08:1).
- `(hover:none)`: fields stay dark and static, clip bars stay green, the play key reads "Play", and there is no sweep. Everything is visible.
- Reduced motion: wipes complete instantly, with no sweep and no loops. Colour changes and the label swap remain.
- Focus: `:focus-visible{outline:3px solid var(--accent); outline-offset:3px}` on dark (7.05:1). In green areas (slate, band, track heads, clip bars, a wiped fields column): `outline-color:var(--on-accent)` (7.05:1).

### F.6 Do not
- Do not draw editing-software chrome: no waveforms, ruler ticks, "V1/A1" track numbers, scrubber handles or transport icons beyond the one play triangle (X-11, I-07, W-05).
- Do not use mono for headings, labels, fields or body (T-13).
- Do not shrink the track head into a stripe or turn it into a `border-left` on a card (L-11). It is a solid block of at least 2 columns plus the margin.
- Do not animate the wipe with `width` (M-06): `scaleX` only. Do not loop the playhead on posters or logos: loops are only the video stand-in.
- Do not make the timeline band scroll horizontally. Do not put grey text on green or green text on dark, except on link hover.

---

## Comparison

| | D: Pit Board | E: Plates | F: Timeline |
|---|---|---|---|
| Opening | Full-bleed yellow panel (header + condensed caps h1) with the lead poster in a dark mount | Split: raspberry plate with h1 beside a dark plate showing a poster and a 9:16 video side by side | 16:9 monitor beside a green slate with h1, then a full-bleed green timeline indexing every piece |
| Grid | 12-col, title above each frame, alternating dark sections with yellow bars and all-yellow sections | Two full-bleed half plates in a checkerboard; inner 4-col subgrid; wide plates for video | 12-col bleed grid; 2-col green track heads, work in cols 3-12 with clip bars and side field columns |
| Type voice | Saira, one family at two widths: condensed uppercase display, square-shouldered text | Bricolage Grotesque, optical sizes, all sentence case, run-in fields | Instrument Sans with JetBrains Mono for timecodes and formats; tracked uppercase labels |
| Accent and its role | `#D6C445` yellow, dark text on top: panels, bars, logo wall, contact, field panels | `#B5345C` raspberry, off-white text on top: half of all plates; the hover flip trades it | `#43B079` green, dark text on top: slate, timeline, track heads, clip bars, wipes |
| Hover vocabulary | Yellow panel slides up over the art; art scales 1.04; play bar wipes across | Whole plate flips colour; art scales 1.05; play disc inverts | Green wipe across the fields; playhead sweeps the frame once; play label changes |
| Best for | The strongest motorsport cue and the most accent on screen (about 65% of the first viewport) | Showing design and video work as images at once on the first screen | Leading with video editing; scanning the whole body of work in one band |

**Recommendation for the 5-second test: E, "Plates".** Observable reasons:
1. At both 1440×900 and 390×844, E is the only direction whose first viewport holds both kinds of work **as images**: a 4:5 poster and a 9:16 video frame side by side (417 px tall at 1440, 239 px at 390). Next to them sits an h1 naming both disciplines ("Graphic design and video editing"). D shows a poster but no video frame above the fold. F shows a video frame, but at 390 posters appear only as text further down.
2. The raspberry plate holding the h1 is the largest single shape in that viewport (about 32-34% of it), with `--text` on it at 5.20:1, so the statement is the first thing read. This is inferred from the layout and needs confirming in the owner's 5-second test.
3. Nothing on the first screen depends on hover or on a showreel existing.

Risks: E's raspberry (3.22:1 against the background) has less punch than D's yellow (10.89:1). E's opening also relies on the poster series and the motorsport edit being strong pieces. If the owner wants the most motorsport-forward look, D is the alternative. If the showreel is approved and video should lead, F is.
