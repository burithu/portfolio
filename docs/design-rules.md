# Design rules: avoiding generic AI-generated design

Checklist for building and reviewing the dark portfolio site (graphic designer / video editor). Every rule is a yes/no check on the rendered page or the CSS. Project rules come first and override every other section. Where a source rule conflicts with them it was dropped (see "Dropped source rules" at the end).

Source tag shorthand (paths are relative to the repo's file tree):
- `impeccable:` = github.com/pbakaus/impeccable, files under `skill/reference/` (for example `craft-floor.md`).
- `OpenDesigner:` = github.com/ckryptickunal/OpenDesigner. `preflight/checklist.md #N` = `.agents/skills/opendesigner-preflight/references/checklist.md` item N; `preflight/mistakes.md MN` = `.../references/mistakes.md` entry MN; `preflight/kerning.md` = `.../references/kerning.md`.

## Project rules (non-negotiable)

- P-01 The page background is near-black (every channel of the computed `background-color` <= 24/255; check `body` and each section), not pure `#000` on large areas and not a gradient. [project]
- P-02 Exactly one accent hue is used across the whole site; list every non-neutral color in the CSS and all of them are that one hue (tints and shades allowed). [project]
- P-03 Neutrals (background, surfaces, text, borders) carry no second hue: no blue-purple tint, no second brand color. [project]
- P-04 Style comes from type and grid: the site has a visible, consistent column grid and a deliberate type scale, and removing every image still leaves a page with an identifiable look. [project]
- P-05 No gradients on backgrounds, text, borders or buttons (`linear-gradient`, `radial-gradient`, `conic-gradient` absent from the CSS, except an image the client supplied). [project]
- P-06 No glow: no `box-shadow` or `text-shadow` or `filter: drop-shadow` with zero offset and a colored blur, and no neon colors (saturated hue at high lightness on dark). [project]
- P-07 No glassmorphism: `backdrop-filter` and `-webkit-backdrop-filter` are absent from the CSS; no translucent blurred panels. [project]
- P-08 No decorative effects: no noise or grain overlay, no animated background, no particles, no custom cursor, no blob or mesh shapes, no tilt or 3D hover. [project]
- P-09 Scrolling is native only: no `scroll-snap-*`, `position: sticky`/`fixed` used to pin a section while content changes, no `overscroll-behavior` tricks, and no `scroll-behavior` override beyond the browser default. [project]
- P-10 No scroll-driven or scroll-triggered animation: no `animation-timeline`, no IntersectionObserver-based reveals, no parallax, no pinned sections. [project]
- P-11 No `scroll`, `wheel`, `touchmove` listeners or `onscroll` handlers anywhere in the JS or HTML. [project]
- P-12 No scroll library is installed or loaded: Lenis, Locomotive Scroll, GSAP ScrollTrigger, ScrollMagic, AOS, Framer Motion `whileInView` are absent from `package.json` and network requests. [project]
- P-13 The site shows work only: no stats, counters, metrics, "years of experience", "projects delivered", client-count or follower numbers, anywhere, including the about page and footer. [project]
- P-14 No animated counters, progress rings, skill bars or percentage charts. [project]
- P-15 Every text/background pair meets WCAG AA: body text >= 4.5:1, large text (>= 24px, or >= 18.66px bold) >= 3:1; verified with computed colors, including the accent as text. [project]
- P-16 Lighthouse Accessibility score is >= 90 on mobile emulation for every page type (home, project, about/contact). [project]
- P-17 No serif typefaces: every font-family in the CSS resolves to a sans-serif or monospace family. [project]
- P-18 The accent colour may fill solid flat areas (panels, bars, bands); text on the accent passes WCAG AA; still exactly one accent hue and no gradients. [project]
- P-19 Hover/focus motion is allowed via CSS transitions on :hover, :focus-visible and :focus-within only; all content is reachable without hover on touch devices; motion is removed under prefers-reduced-motion; nothing is triggered by scroll. [project]
- P-20 Chosen design: Direction D "Pit Board", accent #FFFFFF with #0E0E0E text on accent blocks; no other hue appears in the UI (artwork excepted). [project, owner decision 2026-11-18]
- P-21 Links and interactive/active states are distinguishable from body text without relying on colour (underline, weight or inverted block). [project]

## Typography

- T-01 No more than 2 font families are loaded, and each has a distinct role (display, body); a third is not added for "variety". [OpenDesigner: preflight/checklist.md #55]
- T-02 Computed font sizes across the site number about 8 or fewer, come from one scale, and no two differ by less than 10%. [OpenDesigner: preflight/checklist.md #7]
- T-03 No more than 3 font weights are used; headings use one heading weight, not 800-900 everywhere. [OpenDesigner: preflight/checklist.md #6, #55]
- T-04 Body text is >= 16px (1rem); no meaningful text is below 12px. [impeccable: typeset.md; OpenDesigner: preflight/checklist.md #9]
- T-05 Body paragraphs measure 45-75 characters per line (`max-width` about 65ch) at every breakpoint, with line-height >= 1.4. [impeccable: craft-floor.md, typeset.md; OpenDesigner: preflight/checklist.md #67]
- T-06 Display type is at most 6rem and display tracking is no tighter than -0.04em (-0.02em to -0.03em preferred); letters never touch at 200% zoom. [impeccable: craft-floor.md; OpenDesigner: preflight/checklist.md #5]
- T-07 Light text on the dark background has slightly more line-height and tracking than it would on light, and the body weight is not thin (no weight below 400 for body). [impeccable: typeset.md]
- T-08 `letter-spacing` is written in `em`, never px; uppercase labels are tracked open (+0.04em to +0.1em); code and tabular numbers sit at 0. [OpenDesigner: preflight/kerning.md, preflight/checklist.md #57]
- T-09 Nothing disables kerning: no `font-kerning: none`, no `font-feature-settings: "kern" 0`, no `text-rendering: optimizeSpeed`. [OpenDesigner: preflight/checklist.md #57]
- T-10 Headings use `text-wrap: balance` and body copy `text-wrap: pretty`; no heading or lede ends on a single-word last line at 320, 768, 1280 and 1920px. [impeccable: typeset.md; OpenDesigner: preflight/checklist.md #8, #39]
- T-11 The display face is a deliberately chosen, self-hosted or properly linked font that is not Inter, Roboto, Arial, Open Sans or the platform default; document.fonts shows every used face as loaded and no fallback renders. [impeccable: craft-floor.md (system display face ban); OpenDesigner: preflight/checklist.md #10]
- T-12 Hierarchy is readable by squinting: heading, body, label and metadata roles differ by size and weight, not by size alone, and the same role looks identical on every page. [impeccable: typeset.md]
- T-13 Monospace appears only for code, data or measurements (for example timecodes), not as a "technical" costume on labels. [impeccable: craft-floor.md]
- T-14 No gradient text and no outlined or stroked text used as decoration. [impeccable: craft-floor.md]
- T-15 Only used font files and weights are loaded; text is not invisible while fonts load (`font-display` set, fallback metrics adjusted). [impeccable: typeset.md]
- T-16 No glyph is clipped by an `overflow: hidden` line (descenders and ascenders intact at 200% zoom). [OpenDesigner: preflight/checklist.md #4]

## Color and contrast

- C-01 Neutral ramp has defined roles: background, raised surface, border, muted text, primary text, each a CSS custom property used via `var()`; no one-off hex values in components. [impeccable: colorize.md; OpenDesigner: preflight/checklist.md #2]
- C-02 The accent is used rarely and for one job (links, the primary action, current-page marker); it does not fill large areas or decorate headings. [impeccable: colorize.md (rarity gives an accent force)] (superseded by P-18, owner decision 2026-11-18)
- C-03 Secondary text is a solid muted color that passes 4.5:1 where it sits; it is not made with `opacity` on text. [OpenDesigner: preflight/checklist.md #60]
- C-04 Text over any image or video is measured against the pixels behind it and meets 4.5:1 (3:1 large), or a plain solid panel sits behind it. [OpenDesigner: preflight/checklist.md #11]
- C-05 Controls, icons and focus indicators have >= 3:1 against their background; focus rings are visible on every focusable element and themed to the accent. [impeccable: colorize.md; craft-floor.md]
- C-06 Meaning is never carried by color alone (current page, error, selected state also differ by text, weight, underline or shape). [impeccable: colorize.md]
- C-07 Pure white `#fff` and pure black `#000` are not both used as opaque surface/text colors; pair off-white text with the near-black. [OpenDesigner: preflight/checklist.md #58]
- C-08 Light text on near-black is off-white (not `#fff` body copy over large dark areas) so glare is controlled, and still >= 4.5:1. [project; impeccable: typeset.md]
- C-09 Text selection (`::selection`), caret and scrollbar styling, if themed, use the single accent and neutrals; they are not left as a mismatched default color. [impeccable: craft-floor.md (browser surfaces)]
- C-10 Error and success states in forms are distinguishable without adding extra brand hues beyond the single accent: use text, icon and weight, with at most one functional error color kept out of the decorative palette. [project; impeccable: colorize.md]

## Layout and spacing

- L-01 A column grid is declared in CSS (grid or consistent container + gutter) and content edges align to it at 1280px; there is no grid drawn that content ignores. [OpenDesigner: preflight/checklist.md #12, preflight/mistakes.md M10]
- L-02 All spacing values come from one documented scale (a 4px base); list the margins and paddings and find no stray values. [impeccable: layout.md; OpenDesigner: preflight/checklist.md #68]
- L-03 Spacing has rhythm: related items are tight, sections are separated by clearly larger gaps, and there is more space above a heading than below it; the same gap is not applied to everything. [impeccable: craft-floor.md, layout.md]
- L-04 The work leads: the first viewport at 390px and 1440px contains actual project imagery or a title tied to the work, not a generic tagline over empty space. [impeccable: SKILL.src.md (Experience mode)]
- L-05 The page is not a stack of same-size icon + heading + text cards; no section's structure is "N identical cards". Project thumbnails in a grid are fine when sizes, ratios or spans vary with the work. [impeccable: craft-floor.md; OpenDesigner: preflight/checklist.md #14]
- L-06 No nested cards and no card wrapper around content that does not need a container; grouping is done with proximity first. [impeccable: craft-floor.md, layout.md]
- L-07 No unplanned empty region larger than about a quarter of the viewport. [OpenDesigner: preflight/mistakes.md M11]
- L-08 Header, footer, content width and page padding measure the same on every page at every width. [OpenDesigner: preflight/checklist.md #44]
- L-09 Elements that share a row or column line up: sibling cards share top edge and height, centered blocks sit within 2px of the section's centre line, from 320 to 1920px. [OpenDesigner: preflight/checklist.md #35, #53]
- L-10 Radii are consistent (one or two values); nested rounded boxes use inner radius = outer radius minus gap (within 2px); border radius is not so large that boxes read as pills unless they are small controls. [OpenDesigner: preflight/checklist.md #45; impeccable: craft-floor.md]
- L-11 No colored `border-left`/`border-right` stripe wider than 1px on cards, quotes or callouts. [impeccable: craft-floor.md]
- L-12 No hard offset block shadows (`box-shadow: 4px 4px 0`) and no shadow used where a border or spacing would do; elevation is declared once, border or shadow, not both. [impeccable: craft-floor.md]
- L-13 No horizontal page scroll at 320px; at 320px, 200% text size and 30% longer words nothing is clipped, ellipsized or overflowing. [OpenDesigner: preflight/checklist.md #66]
- L-14 Touch targets are >= 44x44px on touch screens; no control depends on hover to work. [impeccable: adapt.md; OpenDesigner: preflight/checklist.md #61]
- L-15 There is one primary action per view (for example "Contact"); other actions are visibly quieter text links, and actions already in the header are not repeated as buttons. [OpenDesigner: preflight/checklist.md #36]
- L-16 Layout is checked at 320, 390, 768, 1280 and 1920px; it recomposes (reorder, reflow) rather than just shrinking. [impeccable: layout.md, adapt.md]
- L-17 Keyboard focus order matches the visual order. [impeccable: layout.md]
- L-18 No modal or lightbox for content that could be a normal page; if a lightbox exists it traps focus, closes on Escape and has a labelled close button. [impeccable: craft-floor.md]
- L-19 No fixed or sticky bar covers content that cannot scroll out from under it. [OpenDesigner: preflight/checklist.md #52]

## Imagery and media

- I-01 Every image is the designer's real work or a real photo; no stock imagery, no AI-generated filler, no placeholder gray boxes at launch. [impeccable: craft-floor.md (real content); project]
- I-02 Every image has `alt` text describing what it shows; decorative images have `alt=""`. [impeccable: clarify.md; OpenDesigner: smart-ui/references/rules.md R5]
- I-03 Images declare width and height (or `aspect-ratio`) so layout does not shift; Lighthouse CLS <= 0.1. [OpenDesigner: review/references/motion.md]
- I-04 Images use `srcset`/`sizes` (or `<picture>`) and below-the-fold images use `loading="lazy"`; the first-viewport image is not lazy. [impeccable: adapt.md]
- I-05 Project thumbnails show the work uncropped enough to judge it: the crop keeps the subject and the ratio is chosen per work, not forced to one square or 16:9 box for everything. [project]
- I-06 No geometric mask (circle, polygon, gradient cutout) stands in for a real cut-out of a subject. [impeccable: craft-floor.md]
- I-07 No sparklines, rings or abstract shapes used as filler where content should be. [impeccable: craft-floor.md]
- I-08 Icons, if any, come from one set with one stroke weight; no emoji or unicode glyphs as icons. [impeccable: craft-floor.md]
- I-09 No SVG sketch/doodle illustrations or `feTurbulence` grain imitating pictures. [impeccable: craft-floor.md (sketchy SVG ban); project P-08]
- I-10 Video does not autoplay with sound; autoplaying loops are muted, have a pause control if over 5 seconds, and stop when offscreen. A video poster frame is set. [impeccable: animate.md; OpenDesigner: review/references/motion.md]
- I-11 No video or loop flashes more than 3 times in any second. [OpenDesigner: preflight/checklist.md #49; review/references/motion.md]
- I-12 Corners and frames around media use one style (one bezel/border treatment), and a thumbnail shows the same crop as the page it opens. [OpenDesigner: preflight/checklist.md #46, #47]

## Motion and interaction

- M-01 Motion exists only for feedback, state change or navigation continuity; every animation can be named with its job. [impeccable: animate.md]
- M-02 No entrance animation repeats on every section (same fade-and-rise everywhere). [impeccable: craft-floor.md; OpenDesigner: preflight/mistakes.md M16]
- M-03 Content is visible in the default state with JavaScript off; nothing starts at opacity 0 waiting for a script. [impeccable: animate.md]
- M-04 Durations: feedback 100-150ms, state change 150-300ms, overlays or transitions <= 500ms; exits are faster than entrances. [impeccable: animate.md; OpenDesigner: review/references/motion.md]
- M-05 Easing is a decelerating curve (for example `cubic-bezier(0.16, 1, 0.3, 1)`); no bounce or elastic easing. [impeccable: animate.md]
- M-06 Only `transform` and `opacity` (and color) are animated; no transitions on `width`, `height`, `top`, `left`, margin, `font-size` or `letter-spacing`, and no `transition: all`. [impeccable: animate.md; OpenDesigner: preflight/checklist.md #20]
- M-07 Hover never moves the hovered element out from under the pointer (the child moves, the hit area stays), and hover effects are limited to color, underline or small opacity change. [impeccable: animate.md] (superseded by P-19, owner decision 2026-11-18)
- M-08 A `prefers-reduced-motion: reduce` rule exists and removes spatial movement while keeping state feedback. [impeccable: animate.md; OpenDesigner: review/references/motion.md]
- M-09 Every interactive element has distinct default, hover, focus-visible, active and disabled states; focus is never removed with `outline: none` without a replacement. [impeccable: craft-floor.md]
- M-10 Nothing starts on its own and runs over 5 seconds without a pause control, other than muted video the visitor can stop. [OpenDesigner: review/references/motion.md (WCAG 2.2.2)]
- M-11 Page-to-page transitions, if any, are a short crossfade (< 300ms) or none. [OpenDesigner: preflight/checklist.md #46]
- M-12 There are no loading spinners or skeletons for loads under 1 second; a slow load keeps the final layout (no shift). [OpenDesigner: review/references/motion.md; preflight/checklist.md #71]

## Copy

- W-01 Copy is written for this person's work: names, disciplines and project titles are real and specific; no placeholder text ("Lorem", "TODO", "Click here") remains. [OpenDesigner: preflight/checklist.md #69]
- W-02 Buttons and links name their action with a verb and object ("View project", "Email me"), never "Learn more", "Click here" or "Submit". [impeccable: clarify.md; OpenDesigner: preflight/checklist.md #69]
- W-03 Each concept uses one word for the same thing across the site (for example "work" is not also "projects" and "portfolio"). [impeccable: clarify.md]
- W-04 No heading or intro restates the line above it; each idea is said once. [impeccable: clarify.md]
- W-05 No eyebrow or kicker label above section headings and no 01 / 02 / 03 section numbers (unless order matters to the reader). [impeccable: craft-floor.md]
- W-06 Headings and buttons follow one capitalization style (sentence case or title case, not mixed). [OpenDesigner: preflight/checklist.md #69]
- W-07 Contact form has persistent labels (not placeholders as labels), error messages say what failed and how to fix it, and fields are announced accessibly. [impeccable: clarify.md]
- W-08 Link text makes sense out of context; icon-only controls have an accessible name. [impeccable: clarify.md]
- W-09 No filler claims ("passionate", "creative solutions", "elevate your brand", "unlock", "seamless"); each sentence states something checkable about the work. [OpenDesigner: smart-ui/references/rules.md (Voice); impeccable: craft-floor.md]
- W-10 Every name and credit shown is real; no invented client names, and any client or tool mark shown is the real one. [OpenDesigner: preflight/checklist.md #37]
- W-11 Page title and meta/share text say what the page's h1 says; the share image matches the current hero. [OpenDesigner: preflight/checklist.md #62]
- W-12 A 404 page exists, says what happened in plain words and links home. [impeccable: foundations.md]

## Tells of generic AI design (avoid all)

- X-01 Purple-to-blue or neon gradient hero, gradient text, gradient buttons. [impeccable: craft-floor.md; project P-05]
- X-02 Glowing accents, colored halos, neon borders on dark backgrounds. [impeccable: craft-floor.md; project P-06]
- X-03 Frosted-glass cards with blur over a colored blob. [impeccable: craft-floor.md; project P-07]
- X-04 Three-up (or six-up) grid of icon + heading + sentence cards. [impeccable: craft-floor.md]
- X-05 Hero metric strip: big number with small label ("120+ projects", "8 years"). [impeccable: craft-floor.md; project P-13]
- X-06 Small uppercase eyebrow above every heading; numbered 01/02/03 sections. [impeccable: craft-floor.md]
- X-07 Inter (or the system sans) for everything with default weights and default tracking. [impeccable: craft-floor.md]
- X-08 Same fade-up-on-scroll reveal for every block, parallax layers, scroll-jacking. [impeccable: craft-floor.md; project P-10]
- X-09 Rounded rectangles with a 1px border plus a wide soft shadow on every container (the ghost card), and pill-shaped everything. [impeccable: craft-floor.md]
- X-10 Colored left-border stripe on callouts and quotes. [impeccable: craft-floor.md]
- X-11 Stripe patterns, grid-line backgrounds or grain used as texture with no subject-matter reason. [impeccable: craft-floor.md]
- X-12 Emoji or unicode glyphs as icons; mismatched icon strokes. [impeccable: craft-floor.md]
- X-13 Stock photos, AI filler images, gray placeholder boxes. [project; impeccable: craft-floor.md]
- X-14 Light or dark chosen by category habit rather than use: here dark is a project decision and is built deliberately (own surface ramp, adjusted text weight), not an inverted light theme. [impeccable: craft-floor.md, colorize.md]
- X-15 Three equal-weight call-to-action buttons in a row. [OpenDesigner: preflight/mistakes.md M37]
- X-16 Black-weight (800-900) headings with very tight tracking. [OpenDesigner: preflight/mistakes.md M5]
- X-17 Widows and one-word last lines in headings and ledes. [OpenDesigner: preflight/mistakes.md M7, M40]
- X-18 Template look: muted palette, even rhythm, identical sections, nothing specific to this person; compared against 3 shipped designer portfolios it should not read as a template. [OpenDesigner: preflight/mistakes.md M44; preflight/checklist.md #43]
- X-19 Hedge copy and buzzwords ("elevate", "seamless", "unlock", "crafted with passion"). [OpenDesigner: smart-ui/references/rules.md (Voice)]
- X-20 Invented clients, names or testimonials that sound plausible but are not real. [OpenDesigner: preflight/checklist.md #37]
- X-21 Treating a green automated check (lint, Lighthouse, contrast tool) as done without looking at the page at full size. [OpenDesigner: preflight/checklist.md #32-33]

## Dropped source rules (conflict with project rules)

- impeccable `animate.md`: scroll-driven motion "when the scroll relationship carries meaning", scroll reveals and staggered list reveals on scroll; dropped (P-09 to P-12).
- impeccable `craft-floor.md` motion palette ("blur, backdrop-filter, clip-path, mask, shadow belong to the palette") and "one authored focal moment" built from blur/shader effects; dropped (P-07, P-08). A page-load focal moment is not adopted either; M-01 allows only feedback and continuity.
- impeccable `colorize.md`: multi-role palettes, data-viz category colors, "let strongest color own a deliberate region", OKLCH multi-hue ramps; dropped or narrowed (P-02, C-02, C-10).
- OpenDesigner `checklist.md` #43 and `motion.md` items on "real data shown as data", small trend charts, counters and animated number checks; dropped (P-13, P-14).
- OpenDesigner `motion.md` section on scroll-driven animation inspection (scroll to 0/25/50/75/100%); not applicable (no scroll-driven motion exists).
- OpenDesigner video, audio, caption and Smart UI chat rules (checklist #16-19, #27-31, rules R1-R3, R7): not applicable to a website. SEO/llms.txt items (#63-64) not adopted (out of scope).

## Sources

- impeccable (github.com/pbakaus/impeccable), Apache-2.0, read at commit `d41d9860b0094dcb68030657da63461212835aaa` (committed 2026-11-16). Files read: `README.md`, `skill/SKILL.src.md`, `skill/reference/{craft-floor,typeset,layout,animate,colorize,clarify,foundations}.md`; `adapt.md` was read via keyword search only (touch targets, hover, responsive images); `harden`, `polish`, `quieter`, `critique-rubric` were fetched but not used.
- OpenDesigner (github.com/ckryptickunal/OpenDesigner), MIT, read at commit `c9ccc0c572a7d74763a6e60e7e5362550f609ed4` (committed 2026-11-18). Files read: `README.md`, `.agents/skills/opendesigner-preflight/references/{checklist,mistakes,kerning}.md`, `.agents/skills/opendesigner-review/references/motion.md`, `.agents/skills/opendesigner-smart-ui/references/rules.md`, `.agents/skills/opendesigner-search/references/practices.md`.
- Rules are paraphrased and reworded for this project; both repos were read as text only and nothing from them was executed.
