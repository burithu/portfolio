# Portfolio

Read `portfolio_HANDOFF.md` before starting any work. Update it before ending a session and before every `git push`, and tell the user in chat what changed.

## Goal
Portfolio of the owner's graphic design and video editing work on GitHub Pages (repo burithu/portfolio, live at https://burithu.github.io/portfolio/), shared as a link. Show the work only: no stats or metrics.

## Design rules (hard)
- Professional stylized dark theme. Near-black background. Exactly one accent color.
- Strong typography and grid carry the style.
- No neon gradients, glow, glassmorphism or effects.
- No serif typefaces: sans, grotesque, condensed or mono families only (P-17, owner decision 2026-11-18).
- The accent may fill solid flat blocks/panels/bars; text on it passes WCAG AA; still one hue, no gradients (P-18).
- Hover/focus motion allowed via CSS only (:hover, :focus-visible, :focus-within); content reachable on touch without hover; removed under prefers-reduced-motion; never tied to scroll (P-19).
- Native scrolling only: no scroll-jacking, scroll-triggered animations, parallax, scroll-snap or pinned sections.
- No scroll/wheel listeners. No scroll libraries (Lenis, Locomotive, ScrollTrigger).
- Chosen direction (owner, 2026-11-18): D "Pit Board" (docs/demo-directions-r2.md, demos/d), font Saira, accent WHITE #FFFFFF with #0E0E0E text on accent blocks (P-20). Rejected references kept on disk: demos/a, b, c, e, f and the other demos/d-accents variants.
- Page text is off-white #EEEEEE, so the white accent cannot mark links or active/hover states by colour: use underline, weight or an inverted white block with dark text (P-21). Real artwork is the only colour on the page.
- Full rule list: docs/design-rules.md (extracted from github.com/pbakaus/impeccable and github.com/ckryptickunal/OpenDesigner, reference data only).

## Content rules
- Never invent roles, briefs or client details. Draft from file names, then ask the owner to confirm.
- Each piece has: title, client (where one applies), tools (owner decision 2026-11-18: no per-piece role or brief).
- Order strongest first.
- Client name: Edmonson Motorsports (owner, 2026-11-18).
- Display name "burithu". Contact is "Discord: burithu" only (no email, no LinkedIn). Captions are title, client and tools, with one shared role line ("Graphic design and video editing"). No showreel. No dates in site text.
- Source folders are read-only. Copy chosen final exports into source/.
- Paths outside F:\Work need the owner's permission.

## Tech
- Static HTML/CSS in site/.
- Videos are self-hosted MP4 (full versions at or under 8 MB each, muted previews under 3 MB), no YouTube. Click-to-play facade swaps in a native <video controls>.
- Images: AVIF/WebP with srcset.
- Open Graph tags with a 1200x630 preview image.

## Agent / effort plan
- Main session is project manager only: plans, briefs, reviews, decides. No edits, builds or large reads.
- Folder sweeps and summaries: scout (Haiku) or Sonnet low.
- Build/edit HTML/CSS, ffmpeg, image conversion: Sonnet medium.
- Design direction and final independent review: Opus high.
- Independent tasks run in parallel. Each brief states goal, files, and what done looks like.

## Phases
0. Setup.
1. Three demo directions in demos/ with placeholders. Desktop and mobile screenshots to the owner. Then stop. Push nothing.
2. Build only after the owner picks. Curation list in docs/curation.md for approval. Showreel (60-90 s) is proposed, and built only if approved.
Ask the owner before the first push.

## Folder map
- site/ : deployed site (site/index.html placeholder, .gitkeep)
- demos/ : Phase 1 design-direction pages (.gitkeep)
- source/ : copies of chosen master files, gitignored
- docs/ : design-rules.md, curation.md
- .shots/ : local screenshot scratch, gitignored (create when needed)
- .github/workflows/pages.yml : deploys site/ to GitHub Pages
- .gitignore, CLAUDE.md, portfolio_HANDOFF.md

## Commands
- Local preview (verified 2026-11-18, returns HTTP 200): `python -m http.server 8000 --directory site`. `npx serve site` is untested.
- Scroll-rule code search (untested against real pages; no matches expected, exit code 1 means clean):
  `grep -rniE "addEventListener\(['\"](scroll|wheel)|onscroll|onwheel|lenis|locomotive|ScrollTrigger|scroll-snap|position:\s*(sticky|fixed)" site demos`
  Any `position: fixed` or `sticky` hit must be checked by hand: only pinning is a violation.
- Local server for the site shell (verified 2026-11-18): `python -m http.server 8123 --directory F:/Work/portfolio/site`.
- Lighthouse (verified 2026-11-18; Chrome not installed, uses Edge): set CHROME_PATH to the msedge.exe path, then `npx -y lighthouse http://localhost:8123/ --form-factor=mobile --screenEmulation.mobile --only-categories=performance,accessibility,best-practices,seo --chrome-flags="--headless=new"`. Screenshots: Playwright with channel msedge.
- Deploy (verified 2026-11-18): push to main triggers .github/workflows/pages.yml (job ~23 s). `gh run list --repo burithu/portfolio --limit 3`; `gh run watch <id> --repo burithu/portfolio --exit-status`. Pages enabled with `gh api -X POST repos/burithu/portfolio/pages -f build_type=workflow`.
- Live checks (verified 2026-11-18): `curl -s -o /dev/null -w "%{http_code}" https://burithu.github.io/portfolio/`; `curl -sI https://burithu.github.io/portfolio/og.png`; `curl -s https://burithu.github.io/portfolio/ | grep -iE 'og:|twitter:card'`; og image size `ffprobe -v error -show_entries stream=width,height -of csv=p=0 <file>`; Lighthouse as above with the live URL (3 runs scored 100/100/100/100).

## Done when
- Live URL https://burithu.github.io/portfolio/ returns 200.
- Mobile Lighthouse >= 90 in all four categories (Accessibility includes text contrast).
- Code search finds no scroll/wheel listeners, scroll libraries (Lenis, Locomotive, ScrollTrigger), scroll-snap or pinned sections.
- The Opus reviewer finds no violations of docs/design-rules.md.
- Open Graph tags present in the live HTML and the owner confirms the preview in LinkedIn Post Inspector.
- The owner runs a 5-second test: a stranger can say what they do.
