# portfolio handoff

Purpose: static portfolio of the owner's graphic design and video editing work on GitHub Pages.
Updated: 2026-11-18. Branch: main. Latest commit: 62138ae "All-black restyle: boxed links, hover labels, muted looping videos" (pushed; Pages run succeeded).
Status: Live at https://burithu.github.io/portfolio/ (200; references video/v1-loop.mp4, 200). Repo burithu/portfolio; https://burithu.github.io/ returns 404.

## Resume here
1. Owner: LinkedIn Post Inspector on https://burithu.github.io/portfolio/; 5-second test with a stranger.
2. Restyle NOT fully verified (see Known issues). Optional: Lighthouse on live URL, Opus review of restyle, keyboard/Tab, reduced-motion, contrast, hover screenshots.
3. Ask owner before deleting unused site/video/v1-preview.mp4, v2-preview.mp4, v3-preview.mp4.
4. Optional later: retitle pieces; showreel (docs/showreel-proposal.md).
5. Edit site/, commit with `git commit -F <file>`, push to main (~25 s deploy). Subagents prepare changes only; main session commits and pushes (a subagent's commit+push was denied by permissions).

## Goal & scope
Show the work only, no stats. Shared as a link. Out of scope: scroll effects, backend, invented content.

## Current status
- [x] Phases 0-2, reviews 1-3 (docs/review-3.md "no violations" applies to the OLD white-section design only).
- [x] Pages via GitHub Actions; deployed; all-black restyle live (62138ae).
- [ ] LinkedIn Post Inspector (owner). [ ] 5-second test (owner). Showreel: none.

## Recent changes (this session, 2026-11-18)
- 62138ae restyle, pushed at owner's request. Page #0E0E0E; white only on small elements (nav squares, labels, buttons, video bar, poster Client/Tools hover panel, Edmonson logo plate). No underlines; links/buttons are white boxes inverting on hover/focus; nav = four white boxes, "burithu" plain wordmark. "View full size" labels on hover/focus only (posters top-left, logos bottom-left), absent on touch.
- Videos: three autoplay muted loops from load, site/video/v<N>-loop.mp4 (1.89/1.98/2.00 MB, full length, 640 px, no audio). White bar "Play with sound"/"Pause" on hover/focus (always visible on touch, reduced motion, autoplay blocked); "Play with sound" loads full video/v<N>.mp4 and pauses the other two.
- docs/design-rules.md: P-22..P-24 added; P-01, P-18, P-20, P-21, C-02, C-06, L-15, I-10, M-10 marked amended.
- Local checks before push (owner asked minimal testing): no console errors/failed requests at 1440 and 390; no horizontal overflow; loops muted; sound switch works; full videos not fetched before interaction; banned-pattern grep empty; underline count 0; Lighthouse mobile (one local run) 94/100/100/100, LCP 3.2 s, CLS 0, ~6.2 MB.
- Earlier today: /portfolio/ base path, repo rename, first deploy b8a43bb (details in archive).

## Key decisions
- Display name "burithu"; role line "Graphic design and video editing"; captions = title, client, tools. Contact "Discord: burithu" only. No dates in site text.
- Tools: Photoshop (posters, logos); DaVinci Resolve (videos). Only Edmonson logo L1 shown. Client "Edmonson Motorsports".
- Direction D "Pit Board", font Saira, no serif (P-17). Restyle 2026-11-18: all-black, white on small elements only, no underlines (P-22..P-24 supersede P-21 link marking).
- Videos self-hosted MP4, muted autoplay loops plus sound on demand; no YouTube. No showreel.
- Native scrolling only; CSS-only hover/focus motion with reduced-motion and touch fallbacks (P-19).
- Static HTML/CSS in site/; GitHub Actions deploy (checkout v7, configure-pages v6, upload-pages-artifact v5, deploy-pages v5). AVIF/WebP srcset. Content never invented.
- Main session manages only; Sonnet builds, Opus directs and reviews.

## Architecture map
- site/ deployed. source/ masters (gitignored). docs/ design-rules.md, curation.md, media-manifest.md, review-1..3.md, demo-directions*.md, showreel-proposal.md. demos/ rejected references (d chosen). .shots/ (gitignored). .github/workflows/pages.yml. CLAUDE.md.

## How to run
- Preview: `python -m http.server 8123 --directory F:/Work/portfolio/site`. Live checks, Lighthouse, scroll grep: CLAUDE.md Commands.
- Deploy: push to main; `gh run list --repo burithu/portfolio --limit 3`.

## Known issues & risks
- Restyle not done: independent Opus review, live Lighthouse, contrast sweep, keyboard/Tab pass, reduced-motion pass, hover-state screenshots.
- Unused files in repo: site/video/v{1,2,3}-preview.mp4.
- Repo PUBLIC; V2/V3 use third-party footage and commercial music.
- Docs hold local paths and placeholder name@example.com.
- Untested: macOS/iOS/Android fonts, real touch devices, screen reader.
- Scratch left at %TEMP%\restyle-serve and \restyle-work (test copies; deletion was denied by permissions; owner may delete). Test server on port 8140 stopped.

## Open questions
- Owner may change tidied titles. Delete unused preview MP4s?
- Opus rule ambiguities: L-09 vs I-05; P-06; W-06; L-15; P-01 (docs/review-3.md).

## User preferences & conventions
- Plan first, act on command. Commit via `git commit -F <file>`. Ask before deleting asset files. Minimal testing when owner says so.

## Session log
- 2026-11-18: Phases 0-2, 3 Opus reviews, first deploy b8a43bb, repo rename, /portfolio/ move, all-black restyle 62138ae live. Older: portfolio_HANDOFF_archive.md.

## Keeping this file current
Under 8,192 bytes (`wc -c`); Resume max 6 items; Recent changes = this session; session log last 10 lines; older detail to portfolio_HANDOFF_archive.md (newest on top).
