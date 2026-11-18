# Demo directions: build specs (Phase 1)

Three design directions for the portfolio demo pages. Each spec is complete: the builder makes no design decisions. If something is not specified, ask; do not invent. Every rule in `docs/design-rules.md` applies. Rule IDs are cited where a choice exists only because of a rule.

Verification done while writing this file (2026-11-18):
- Fonts: every family below is in `github.com/google/fonts` under `ofl/` with `license: "OFL"` in its METADATA.pb, and every `<link>` URL below returned HTTP 200 with `@font-face` rules.
- Contrast: every ratio below was computed with the WCAG 2.x relative-luminance formula in Python (script: sRGB linearise, `(L1+0.05)/(L2+0.05)`).
- Type scales: computed at 390, 768 and 1440 px. Each direction uses 7 or fewer sizes at any width, and adjacent sizes are at least 10% apart (T-02).

---

## Shared build constraints (all three demos)

**Files**
- One self-contained folder per demo: `demos/a/index.html` + `demos/a/styles.css`, and the same for `demos/b/` and `demos/c/`. No shared files between folders. No images, no external assets except the Google Fonts `<link>`.
- No JS frameworks, no build step, no npm. The only JS is the inline video-facade script below, placed at the end of `<body>`.
- Preview: `python -m http.server 8000 --directory demos`, then open `/a/`, `/b/`, `/c/`.

**HTML**
- `<html lang="en">`, `<meta charset="utf-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- `<title>Your Name: graphic design and video editing (Demo A)</title>` (B, C accordingly). `<meta name="description">` repeats the h1 meaning (W-11).
- Landmarks: `<header>`, `<nav aria-label="Sections">`, `<main id="top">`, one `<section aria-labelledby="...">` per section with an `<h2>`, `<footer>`. Exactly one `<h1>`. Piece titles are `<h3>`.
- Each piece is an `<article>` containing a `<figure>` (placeholder media) and its four fields in a `<dl>`: `<dt>Role</dt><dd>Role: placeholder</dd>`, `<dt>Brief</dt><dd>Brief placeholder: one sentence on what the client asked for.</dd>`, `<dt>Tools</dt><dd>Tool placeholder, tool placeholder</dd>`. The title is the `<h3>`.
- Fonts: `<link rel="preconnect" href="https://fonts.googleapis.com">`, `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`, then the stylesheet link given per direction (all use `display=swap`, T-15).

**Placeholder copy (use verbatim, never real names)**
- Owner: "Your Name". Email: `name@example.com`. LinkedIn link: `href="#"`, text "Open LinkedIn profile (placeholder)".
- Piece titles: "Poster series title", "Event poster title", "Team logo title", "Logo set title", "Character edit title", "Aircraft edit title", "Motorsport edit title", "Showreel title".
- Client line (where a spec asks for it): "Client name".
- About: "About placeholder. Two or three sentences on what Your Name makes and for whom, written with the owner. No claims, no numbers."
- Year: "20XX". No stats, counts, durations-as-achievements, testimonials or skill bars anywhere (P-13, P-14).

**Placeholder media (no external assets)**
- Each placeholder is a `<div class="ph r-4x5" role="img" aria-label="Placeholder: poster, 4:5 portrait">` with a child `<span class="ph-label" aria-hidden="true">POSTER 4:5</span>`. The ratio comes from CSS classes, never from fixed heights:
  `.r-4x5{aspect-ratio:4/5} .r-a{aspect-ratio:1000/1414} .r-1x1{aspect-ratio:1/1} .r-5x4{aspect-ratio:5/4} .r-16x9{aspect-ratio:16/9} .r-9x16{aspect-ratio:9/16}`.
  `.r-a` is the A-series portrait poster ratio (1:1.414); label it "POSTER 1:1.41".
- Labels: "POSTER 4:5", "POSTER 1:1.41", "LOGO 1:1", "LOGO 5:4", "VIDEO 16:9", "VIDEO 9:16", "SHOWREEL 16:9". Fill and label style differ per direction (see each spec). No stripes, diagonals, grid lines, noise or icons inside placeholders (X-11, I-07, I-09).

**Video facade**
- The whole video placeholder is a real `<button type="button" class="facade r-16x9" data-status="st-char" aria-label="Play video: Character edit title (placeholder)">`. Inside it: the `.ph-label` span and the play icon as inline SVG with `aria-hidden="true"` (`<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`, `fill: currentColor`). No iframe, no `<video>`.
- Directly after the button: `<p class="facade-status" id="st-char" role="status"></p>` (empty).
- Inline script, verbatim, end of `<body>` (click listeners only, P-11):
  ```html
  <script>
  document.querySelectorAll('button.facade').forEach(function (b) {
    b.addEventListener('click', function () {
      document.getElementById(b.dataset.status).textContent = 'Demo only: the video player loads here on the live site.';
    });
  });
  </script>
  ```

**CSS, all demos**
- Mobile-first: base styles for 390 px, then `@media (min-width: 768px)` and `@media (min-width: 1024px)`. Check at 320, 390, 768, 1280, 1440 and 1920 px: no horizontal scroll (L-13).
- All colors as custom properties on `:root`, used only via `var()` (C-01). No other hex in the file.
- Spacing scale (4 px base), the only allowed margin/padding/gap values: `--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:128px` (L-02).
- `h1,h2,h3{text-wrap:balance}` `p,dd{text-wrap:pretty}` (T-10). Paragraph `max-width:65ch` (T-05). `letter-spacing` only in `em` (T-08).
- `::selection{background:var(--accent);color:var(--bg)}` (C-09).
- `:focus-visible{outline:2px solid var(--accent);outline-offset:3px}`; never `outline:none` without this (C-05, M-09).
- Transitions only on `color`, `background-color`, `border-color`, `text-decoration-color`, `opacity`, never `all` (M-06). Easing `cubic-bezier(0.16,1,0.3,1)` (M-05). Durations per direction; the un-hovered (exit) duration is always shorter than the hover (entrance) duration (M-04).
- `@media (prefers-reduced-motion: reduce){*,*::before,*::after{transition-duration:0ms !important}}` (M-08). State changes still happen, instantly.
- Banned anywhere in CSS/HTML/JS: `position: sticky`, `position: fixed`, `scroll-snap-*`, `scroll-behavior`, `overscroll-behavior`, `animation-timeline`, `@keyframes`, `backdrop-filter`, `*-gradient(`, `text-shadow`, `filter`, `box-shadow`, `IntersectionObserver`, `scroll`/`wheel`/`touchmove` listeners, any scroll library (P-05 to P-12). The header is static: it scrolls away.
- Every link and button: min 44×44 px hit area (padding, not font size) (L-14).
- Run the CLAUDE.md scroll-rule grep on `demos` before handing over; it must exit 1.

---

## Direction A: "Index"

**Concept.** The page opens as a typeset index of every piece, then each piece gets a spec-sheet row: metadata column left, work right, separated by hairlines. It reads like a designer's own catalogue, so the type and the grid show design skill before any image loads, and the index lists posters, logos and video in the first viewport.

### A.1 Fonts
- One family: **Archivo** (OFL), weights 400 and 600. Link: `https://fonts.googleapis.com/css2?family=Archivo:wght@400;600&display=swap`. Stack: `"Archivo", "Helvetica Neue", Arial, sans-serif`.
- Numbers: `font-variant-numeric: tabular-nums` on the index Format column and the footer year.

| Role | Size | Weight | Case / tracking | Line-height |
|---|---|---|---|---|
| h1 statement | `clamp(2.75rem, 1.8rem + 3.9vw, 5rem)` | 600 | sentence case, -0.03em | 1.0 |
| h2 section | `clamp(1.75rem, 1.5rem + 1vw, 2.25rem)` | 600 | sentence case, -0.02em | 1.1 |
| h3 piece title, index title | `1.25rem` | 600 (h3) / 400 (index) | sentence case, 0 | 1.3 |
| body, dd values, about | `1rem` | 400 | 0.01em | 1.6 |
| labels (dt, index column heads, nav, footer) | `0.75rem` | 600 | UPPERCASE, +0.08em | 1.4 |

### A.2 Color tokens
| Token | Hex | Pairs (computed) |
|---|---|---|
| `--bg` | `#111111` | |
| `--surface` (placeholders) | `#1A1A1A` | |
| `--text` | `#EDEDED` | on bg 16.13:1, on surface 14.87:1 |
| `--muted` | `#9C9C9C` | on bg 6.88:1, on surface 6.34:1 |
| `--line` (hairlines, placeholder frame) | `#2E2E2E` | decorative only, 1.39:1 on bg |
| `--accent` signal red-orange | `#DE5F3A` | on bg 5.22:1, on surface 4.81:1 |

- Accent is allowed only on **links**: link underline color (`text-decoration-color`), link text color on hover/focus, the play icon on facade hover/focus, focus ring, `::selection`. Forbidden: headings, labels, backgrounds, borders, placeholder fills. Accent text may sit only on `--bg` or `--surface`.

### A.3 Grid and spacing
| Width | Columns | Gutter | Side margin | Content max |
|---|---|---|---|---|
| 390 px | 4 | 12 px | 16 px | fluid |
| 768 px | 8 | 16 px | 32 px | fluid |
| ≥1024 px (1440 shown) | 12 | 24 px | 48 px | 1344 px, centered |
- Container: `max-width:1344px; margin-inline:auto; padding-inline:<margin>`; inner `display:grid; grid-template-columns:repeat(N,1fr); column-gap:<gutter>`. At 1440 one column is 90 px.
- Desktop row split: **meta = cols 1-4 (432 px), media = cols 5-12 (888 px)**. Every section and piece row uses this split, including the header.
- Rhythm: hairline `border-top:1px solid var(--line)` above every piece row; piece row padding-block `--s-6` (32) at 390, `--s-7` (48) at ≥1024. Section gap `--s-8` (64) at 390, `--s-10` (128) at ≥1024. Space above h2 `--s-8`, below `--s-5`.
- Radius: 0 everywhere.

### A.4 Page structure
1. **Header** (not sticky). One row, height 64 px, hairline bottom. Left (cols 1-4): "Your Name" as a link to `#top`, label style but sentence case 1rem 600. Right (cols 5-12, right-aligned): nav links "Posters", "Logos", "Video", "Contact" in label style, gap `--s-5`. At 390: name on row 1, nav on row 2 left-aligned, links padded to 44 px height.
2. **Opening viewport.** h1 in cols 1-9: "Graphic design and video editing by Your Name". At 1440 it sets in about 3 lines at 5rem. Below it, after `--s-8`, the **index**: a `<table>` spanning cols 1-12, caption visually hidden ("Index of work"). Columns: Title (cols 1-6), Type (cols 7-9), Format (cols 10-12). Header row in label style, muted. Rows, in this order:
   Poster series title | Poster | 4:5 portrait · Event poster title | Poster | 1:1.41 portrait · Team logo title | Logo | 1:1 · Logo set title | Logo | 1:1 · Character edit title | Video | 16:9 · Aircraft edit title | Video | 16:9 · Motorsport edit title | Video | 9:16.
   Each Title cell holds `<a href="#piece-id">` (1.25rem 400, text color, 1px accent underline, offset 0.25em). Rows are 56 px tall, hairline between rows. Type in body text color, Format in muted. At 390: Format column hidden (`display:none` on th and td), Title and Type share the row (Type right-aligned). First viewport check: at 1440×900 the h1 plus at least 5 index rows are visible; at 390×844 the h1 plus at least 4 rows.
3. **Posters** (`id="posters"`). h2 "Posters" in cols 1-4, first row of the section.
   - Row "Poster series title": meta cols 1-4 (h3, then `<dl>` with dt in label style muted, dd in body; Role, Brief, Tools stacked, `--s-2` between dt and dd, `--s-4` between pairs). Media: two `.r-4x5` placeholders, cols 5-8 and 9-12 (432 × 540 px each), top-aligned.
   - Row "Event poster title": meta cols 1-4; one `.r-a` placeholder cols 5-8 (432 × 611 px). Cols 9-12 empty by design (the hairline row keeps it intentional; the region is under a quarter of the viewport, L-07).
4. **Logos** (`id="logos"`).
   - Row "Team logo title": meta cols 1-4; `.r-1x1` placeholder cols 5-8 (432 px square).
   - Row "Logo set title" (one entry for the whole set): meta cols 1-4. Media cols 5-12: one large `.r-1x1` in cols 5-8 (432 px) and a 2×2 sub-grid of four `.r-1x1` in cols 9-12 (each 204 px, 24 px gap: total 432 × 432, so both blocks share top and bottom edges). Labels "LOGO 1:1".
5. **Video** (`id="video"`).
   - Optional showreel slot: first row, "Showreel title", `.r-16x9` facade cols 5-12. Wrap it in an HTML comment block `<!-- optional: showreel -->` ... `<!-- /optional -->` on their own lines. Build it visible in the demo.
   - Rows "Character edit title" and "Aircraft edit title": `.r-16x9` facades cols 5-12 (888 × 500).
   - Row "Motorsport edit title": `.r-9x16` facade cols 5-7 (318 × 565).
   - Below each facade, the `.facade-status` line in body muted.
6. **About and contact** (`id="contact"`). h2 "About" cols 1-4. Cols 5-10: about paragraph at 1.25rem 400 (uses the h3 size, weight 400), max 60ch. Below it, after `--s-6`, a `<dl>`: "Email" → `<a href="mailto:name@example.com">name@example.com</a>`, "LinkedIn" → "Open LinkedIn profile (placeholder)". The email link is the primary action (L-15): same link style as all links, no button.
7. **Footer.** Hairline top, padding-block `--s-6`. Left: "© 20XX Your Name" (label style, muted). Right: "Back to top" link to `#top`.
- **Mobile (390 px) and 768 px:** every piece row stacks: h3, dl, then media full width of the container. Paired posters stay side by side at 768 (each half width); at 390 they stack. The logo set becomes the large square full width, then the four small squares as a 2×2 grid. The 9:16 video is 60% of container width at 390 and 768 (so it does not exceed one screen).

### A.5 Placeholder style
- `background:var(--surface); border:1px solid var(--line)`. `.ph-label` top-left, inset `--s-3`, label style, `--muted`.
- Facade: same block; the play icon sits bottom-left inset `--s-4`, inside a 56 × 56 px square with `1px solid var(--text)` border, icon 24 px in `--text`. Hover/focus-visible: icon and square border become `--accent`. Active: background of the square `--bg`.

### A.6 Interaction and motion
- Links: hover/focus text → `--accent`, underline stays accent. Active: underline offset unchanged, text `--text`.
- Durations: hover entrance 120 ms, exit 80 ms. Color only. Index rows: no background change on hover.

### A.7 Do not
- Do not add hover image previews to the index rows, numbers before index rows, or "01/02" section numbers (W-05).
- Do not set labels in monospace (T-13). Do not use Archivo above 600 or below 400.
- Do not crop posters or logos to 16:9 to fill the media column; empty columns beside small pieces are intended.
- Do not draw a visible column grid or background lines; only the row hairlines (X-11).
- Do not color the h1, h2 or index Type column with the accent.

---

## Direction B: "Reel"

**Concept.** A cinema-led page: an oversized condensed headline names the two disciplines, and directly under it the showreel frame fills the content width; the work below runs as edge-to-edge justified rows with tight gutters, like a contact sheet. It suits a video editor because motion work is the first image, and condensed caps echo motorsport signage and poster type.

### B.1 Fonts
- **Barlow Condensed** (OFL) 600 for display; **Barlow** (OFL) 400 and 500 for text. Link: `https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600&family=Barlow:wght@400;500&display=swap`. Stacks: `"Barlow Condensed", "Arial Narrow", sans-serif` and `"Barlow", Arial, sans-serif`.

| Role | Family / size | Weight | Case / tracking | Line-height |
|---|---|---|---|---|
| h1 | Condensed `clamp(3rem, 1.5rem + 6.2vw, 6rem)` | 600 | UPPERCASE via CSS, -0.01em | 0.92 |
| h2 section | Condensed `clamp(2.25rem, 1.6rem + 2.6vw, 3.75rem)` | 600 | UPPERCASE, 0 | 0.95 |
| h3 piece title | Condensed `1.5rem` | 600 | UPPERCASE, +0.02em | 1.1 |
| about lede | Barlow `1.5rem` | 400 | sentence case, 0 | 1.4 |
| body, dd values | Barlow `1rem` | 400 | 0.01em | 1.55 |
| labels (dt, nav, captions' field names, footer, button) | Barlow `0.8125rem` | 500 | UPPERCASE, +0.06em | 1.4 |

- HTML source text stays sentence case; uppercase comes only from `text-transform` (W-06, screen readers).

### B.2 Color tokens
| Token | Hex | Pairs (computed) |
|---|---|---|
| `--bg` | `#0B0B0B` | |
| `--surface` (placeholders) | `#161616` | |
| `--surface-2` (facade hover) | `#202020` | |
| `--text` | `#F0F0F0` | on bg 17.27:1, surface 15.88:1, surface-2 14.30:1 |
| `--muted` | `#A6A6A6` | on bg 8.09:1, surface 7.43:1, surface-2 6.69:1 |
| `--line` | `#262626` | footer rule only |
| `--accent` tungsten amber | `#D69A48` | on bg 8.04:1, surface 7.39:1, surface-2 6.65:1; `--bg` text on accent fill 8.04:1 |

- Accent is allowed only on **things you press to act**: the filled play discs, the single "Email Your Name" button, focus rings, `::selection`. Forbidden: links (they are `--text` with a `--muted` underline), headings, labels, any area larger than the button.

### B.3 Grid and spacing
| Width | Columns | Gutter | Side margin | Content max |
|---|---|---|---|---|
| 390 px | 4 | 8 px | 12 px | fluid |
| 768 px | 12 | 8 px | 24 px | fluid |
| ≥1024 px (1440 shown) | 12 | 8 px | 24 px | 1680 px, centered (1392 px at 1440) |
- Text blocks (header, captions, about) sit on the 12-column grid. Media sits in **justified rows**: `display:flex; gap:8px` (same as the gutter), each item `flex:<w/h ratio> 1 0` with its placeholder carrying the `aspect-ratio`, so every item in a row has the same height and widths follow the ratios. Ratios: 4:5 → `0.8`, 1:1.41 → `0.7072`, 1:1 → `1`, 5:4 → `1.25`, 16:9 → `1.7778`, 9:16 → `0.5625`. At 1440 the poster row is 596 px tall and the aircraft/motorsport row 591 px.
- Below 768 px every row stacks to one item per line at full width, except 9:16 video at 70% width.
- Rhythm: caption sits `--s-3` under its media. Rows within a section `--s-7` apart. Sections `--s-9` (96) apart at ≥1024, `--s-8` at 390. Space above h2 is the section gap; below h2 `--s-5`.
- Radius: 0 on media and button; play disc 50%.

### B.4 Caption styles (four fields)
- **Item caption** (one piece per media item): under the item at its width. h3, then Role, Brief, Tools stacked; dt label style muted, dd body text.
- **Wide caption** (one piece made of several media items, or one full-width item): under the row on the 12-col grid. ≥1024: h3 cols 1-3, Role cols 4-5, Brief cols 6-10 (max 65ch), Tools cols 11-12. 768: h3 full width, then Role / Brief / Tools in cols 1-4 / 5-9 / 10-12. 390: stacked.
- **Side caption** (single portrait or square item): item cols 1-6, caption cols 7-12 top-aligned, stacked fields. 390: caption under the item.

### B.5 Page structure
1. **Header** (not sticky). Height 72 px. Left: "Your Name" link to `#top` (label style). Right: nav "Showreel", "Posters", "Logos", "Video", "Contact" (label style, gap `--s-5`). 390: name row 1, nav row 2.
2. **Opening viewport.** Padding-top `--s-7`. h1 full width, left-aligned, two lines: "Graphic design" / "and video editing" (break with `<br>` inside the h1; source sentence case). After `--s-6`: the **showreel facade** (`id="reel"`), full content width, `.r-16x9`, label "SHOWREEL 16:9", wide caption below (h3 "Showreel title", Role, Brief, Tools). Check: at 1440×900 the h1 and the play disc are both visible; at 390×844 the h1 and the whole reel are visible. If no showreel is approved later, the strongest video edit takes this slot unchanged.
3. **Posters** (`id="posters"`). h2 "Posters". One justified row: `.r-4x5`, `.r-4x5`, `.r-a`, with one wide caption "Poster series title" under the row. Then one row with "Event poster title" as a side caption layout (`.r-a` cols 1-6). Note: in the demo the series uses three placeholders and the event poster one; the real split is set in curation.
4. **Logos** (`id="logos"`). h2 "Logos". Side-caption row: "Team logo title", `.r-1x1` cols 1-6. Then a justified row of the set: `.r-1x1`, `.r-5x4`, `.r-1x1`, `.r-1x1` (labels "LOGO 1:1", "LOGO 5:4"), with one wide caption "Logo set title".
5. **Video** (`id="video"`). h2 "Video". Row 1: "Character edit title" facade full width `.r-16x9`, wide caption. Row 2: justified row of two separate pieces, "Aircraft edit title" `.r-16x9` and "Motorsport edit title" `.r-9x16`, each with an item caption under it. Status lines under each facade.
6. **About and contact** (`id="contact"`). h2 "Contact". ≥1024: about lede cols 1-6 (1.5rem, max 40ch). Cols 8-12: the primary action `<a class="button" href="mailto:name@example.com">Email Your Name</a>`: background `--accent`, text `--bg`, label style, padding `--s-4` `--s-5`, min-height 56 px. Under it, `--s-4` apart: "name@example.com" in body muted, then "Open LinkedIn profile (placeholder)" link. 390: stacked, button full width.
7. **Footer.** `border-top:1px solid var(--line)`, padding-block `--s-5`. "© 20XX Your Name" left, "Back to top" right, label style.

### B.6 Placeholder style
- `background:var(--surface)`, no border. `.ph-label` bottom-left, inset `--s-4`, Condensed 600 1.5rem uppercase `--muted`.
- Facade: same block; play disc centered, 96 px (64 px below 768), `background:var(--accent)`, icon 40 px (28 px) in `--bg`. Hover/focus-visible: block background → `--surface-2`, disc → `--text`. Active: disc → `--muted`. Focus ring on the whole button: `outline:3px solid var(--accent); outline-offset:4px`.

### B.7 Interaction and motion
- Links: `--text`, 1px underline `--muted`, hover underline → `--text`. Button hover: background → `--text`, text stays `--bg` (17.27:1).
- Durations: hover entrance 150 ms, exit 100 ms. Color only; the disc never scales (M-07).

### B.8 Do not
- Do not make the reel autoplay, add a muted loop, or put any text over the media block (I-10, C-04).
- Do not use Condensed for body text or captions' values; do not use 700+ weights or tracking tighter than -0.01em (X-16).
- Do not force all media into 16:9 or equal widths: row heights match, widths follow ratios (I-05).
- Do not use amber on links, headings or labels; it means "press".
- Do not add a second button anywhere; the header has links only (L-15, X-15).

---

## Direction C: "Broadsheet"

**Concept.** An editorial layout: a serif statement and a lead poster share the first viewport like a magazine cover, and each section is an asymmetric spread of figures with prose captions on a 12-column grid. It suits a designer because it presents posters and logos the way print presents them, with brief and credits set as readable text beside the work.

### C.1 Fonts
- **Newsreader** (OFL, optical-size axis) 400 roman, 500 roman, 500 italic; **Hanken Grotesk** (OFL) 500 for labels. Link: `https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,500&display=swap`. Stacks: `"Newsreader", Georgia, serif` and `"Hanken Grotesk", Arial, sans-serif`. Set `font-optical-sizing:auto`.

| Role | Family / size | Weight | Case / tracking | Line-height |
|---|---|---|---|---|
| h1 statement | Newsreader `clamp(2.5rem, 1.6rem + 3.7vw, 4.5rem)` | 500 | sentence case, -0.02em | 1.05 |
| h2 section | Newsreader `clamp(1.75rem, 1.45rem + 1.25vw, 2.5rem)` | 500 | sentence case, -0.01em | 1.15 |
| h3 piece title | Newsreader italic `1.5rem` | 500 | sentence case, 0 | 1.25 |
| lede, header name | Newsreader `1.25rem` | 400 (name 500) | 0 | 1.45 |
| body paragraphs, Brief | Newsreader `1.125rem` | 400 | 0.005em | 1.6 |
| Role, Tools values | Newsreader `1rem` | 400 | 0.005em | 1.5 |
| labels (dt, nav, footer, placeholder labels) | Hanken `0.75rem` | 500 | UPPERCASE, +0.08em | 1.4 |

### C.2 Color tokens
| Token | Hex | Pairs (computed) |
|---|---|---|
| `--bg` | `#141414` | |
| `--surface` (placeholders) | `#1D1D1D` | |
| `--text` | `#E6E6E6` | on bg 14.76:1, surface 13.51:1 |
| `--muted` | `#A3A3A3` | on bg 7.30:1, surface 6.68:1 |
| `--line` | `#333333` | section rules, 1.46:1 (decorative) |
| `--accent` steel blue | `#93ADDB` | on bg 8.11:1, surface 7.42:1 |

- Accent is allowed only as **the text color of links** (body, contact, nav, footer), focus rings and `::selection`. Links are accent text with a 1px accent underline at 0.2em offset. Forbidden: play buttons, headings, labels, rules, fills.

### C.3 Grid and spacing
| Width | Columns | Gutter | Side margin | Content max |
|---|---|---|---|---|
| 390 px | 4 | 16 px | 24 px | fluid |
| 768 px | 8 | 24 px | 48 px | fluid |
| ≥1024 px (1440 shown) | 12 | 32 px | 64 px minimum; at 1440 the centered 1280 px container leaves 80 px | 1280 px |
- At 1440 one column is 77 px. Caption columns are always at least 4 columns wide (405 px), so Brief at 1.125rem stays near 47 characters per line (T-05).
- Rhythm: each section starts with `border-top:1px solid var(--line)`, then `--s-6` to the h2, then `--s-7` to content. Sections `--s-9` apart at ≥1024, `--s-8` at 390. Figure to caption `--s-3`. Between figure rows `--s-8`.
- Radius: 0. No borders on media.

### C.4 Caption style (four fields)
- h3 italic first. Then a `<dl>`: dt label style muted; Role and Tools dd at 1rem; Brief dd at 1.125rem as a paragraph. Order: h3, Role, Brief, Tools. `--s-2` dt→dd, `--s-4` between pairs. "Client name" sits under the h3 in label style muted, as part of the caption (posters and logos only).

### C.5 Page structure
1. **Header** (not sticky). Padding-block `--s-5`, `border-bottom:1px solid var(--line)`. Left: "Your Name" link to `#top`, Newsreader 500 1.25rem, `--text` (the one link not in accent; it is the masthead). Right: nav "Posters", "Logos", "Video", "Contact" in label style, accent color, no underline until hover. 390: name row 1, nav row 2.
2. **Opening viewport.** ≥1024: cols 1-6: h1 "Your Name is a graphic designer and video editor." then `--s-5`, lede (1.25rem, max 48ch): "Lede placeholder: one sentence about the work below, to be written with the owner." Cols 8-12: the **lead figure**, the first poster of the series (`.r-4x5`, 514 × 643 px), top-aligned with the h1. Its caption is short: h3 "Poster series title", "Client name" (label style muted), then the link "See the poster series" to `#posters`. The four fields appear once, in the Posters section. 768: h1 and lede full width, lead figure cols 2-7 below. 390: h1, lede, figure full width. Check: at 1440×900 h1 and the whole poster are visible; at 390×844 the h1, lede and the top of the poster are visible.
3. **Posters** (`id="posters"`). h2 "Posters".
   - Row 1, "Poster series title" (the further posters of the series): two `.r-4x5` figures, cols 1-4 and 5-8 (405 × 506 px each); full caption (C.4) cols 9-12, top-aligned. The h3 here is a separate heading from the opening caption's h3 (give it `id="series"`).
   - Row 2, "Event poster title": `.r-a` figure cols 7-12 (624 × 882 px); caption cols 2-5, top-aligned. (The alternation is fixed: row 1 figures left, row 2 figure right.)
   - 768: row 1 figures side by side (cols 1-4, 5-8), caption below full width; row 2 figure cols 3-8, caption below. 390: everything stacked, figures full width.
4. **Logos** (`id="logos"`). h2 "Logos". ≥1024, one row:
   - "Team logo title": `.r-1x1` figure cols 1-4 (405 px square), caption under it in cols 1-4.
   - "Logo set title": a plate in cols 5-12, a 3-column sub-grid with 32 px gaps (each cell 259 px). Cells 1-5: `.r-1x1` placeholders "LOGO 1:1". Cell 6 (bottom right): the set's caption (C.4) instead of a logo, top-aligned in the cell.
   - 768: team logo cols 1-4 with caption cols 5-8; plate full width below (3 columns, caption in cell 6). 390: team logo, caption, then plate as 2 columns with the caption full width after the five logos.
5. **Video** (`id="video"`). h2 "Video".
   - Optional showreel slot (HTML comment markers as in A): "Showreel title" facade cols 1-8, caption cols 9-12. Build it visible.
   - "Character edit title": `.r-16x9` facade cols 1-8 (842 × 474), caption cols 9-12.
   - Next row: "Motorsport edit title" `.r-9x16` facade cols 1-3 (296 × 526) with caption cols 4-6; "Aircraft edit title" `.r-16x9` facade cols 7-12 (624 × 351) with caption under it in cols 7-12. Both top-aligned.
   - 768 and 390: each facade full width with caption under it; the 9:16 facade at 60% width.
6. **About and contact** (`id="contact"`). h2 "About". ≥1024: cols 1-8 hold two paragraphs of the about placeholder (write it twice as two `<p>`, the second starting "Second about paragraph placeholder.") set with `column-count:2; column-gap:32px` (each column about 405 px). Cols 9-12: `<dl>` with "Email" → accent link `name@example.com` (the primary action, L-15) and "LinkedIn" → "Open LinkedIn profile (placeholder)". 390 and 768: one column, contact list below.
7. **Footer.** `border-top:1px solid var(--line)`, padding-block `--s-6`. "Your Name, 20XX" label style muted left; "Back to top" accent link right.

### C.6 Placeholder style
- `background:var(--surface)`, no border. `.ph-label` centered horizontally and vertically, Hanken label style, `--muted`.
- Facade: play control centered under the label (`--s-3` gap), a 64 px circle with `1px solid var(--text)` border, icon 24 px `--text`. Hover/focus-visible: circle fill `--text`, icon `--bg`. Active: circle fill `--muted`. No accent on the facade except its focus ring.

### C.7 Interaction and motion
- Links: hover text → `--text`, underline → `--text`. Active: underline color `--muted`.
- Durations: hover entrance 200 ms, exit 120 ms. Color only.

### C.8 Do not
- Do not add drop caps, pull quotes, "Issue no." mastheads, datelines or figure numbers ("Fig. 1"): print costume, not content (W-05).
- Do not italicise anything except h3 piece titles. Do not use Hanken for body or headings.
- Do not make caption columns narrower than 4 columns at ≥1024 (measure falls under 45 characters).
- Do not color headings, rules or the play control with the accent.
- Do not center the h1 or the sections; the layout is asymmetric by design.

---

## Comparison

| | A: Index | B: Reel | C: Broadsheet |
|---|---|---|---|
| Grid | 12-col, fixed 4/8 meta-media split, hairline rows | 12-col text grid + justified equal-height media rows, 8 px gutters | 12-col asymmetric spreads, figure + 4-col prose captions, alternating sides |
| Type voice | One grotesk (Archivo 400/600), sentence case, uppercase tracked labels, tabular index | Condensed caps display (Barlow Condensed 600) to 6rem over Barlow text, maximum scale contrast | Optical-size serif (Newsreader), italic titles, small sans labels |
| Accent | `#DE5F3A` red-orange, links only (underlines, hover) | `#D69A48` amber, press targets only (play discs, one button) | `#93ADDB` steel blue, link text only |
| Opening | Text-only: h1 + index table of all pieces | h1 naming both disciplines + full-width showreel frame with play disc | Serif statement left + lead portrait poster right |
| Best for | Visitors who scan titles; shows typographic control; least image-dependent | Fast recognition of "video editor + designer"; strongest when a showreel exists | Poster and logo work read as print; longest captions |

**Recommendation: B, "Reel".** Observable reasons: (1) at 390×844 and 1440×900 the first viewport contains both disciplines stated in the largest type on the page (3rem / 6rem uppercase h1 "Graphic design and video editing") and a 16:9 frame with a play control, so "design" is read and "video" is seen without scrolling; (2) the amber play disc is the only non-neutral element in that viewport (8.04:1 against the background), so the one colored mark points at the video (inferred from the layout, to be confirmed in the owner's 5-second test); (3) one scroll later the three posters sit side by side in one 596 px tall row at 1440, so the poster work is seen as a set. Risk: its opening depends on a video; with no showreel it shows one edit, and posters/logos are below the fold. A is the fallback if the owner wants the page to read well before any media loads.
