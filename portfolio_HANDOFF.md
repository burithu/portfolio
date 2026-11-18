# portfolio handoff

Purpose: static portfolio of the owner's graphic design and video editing work on GitHub Pages.
Updated: 2026-11-18. Branch: main. Latest commit: 807044e (cache-busting + click-anywhere-on-bar fix; live, deploy succeeded); before it 9f9aeee, 62138ae.
Status: Live at https://burithu.github.io/portfolio/ (200; references video/v1-loop.mp4, 200). Repo burithu/portfolio; https://burithu.github.io/ returns 404.

## Resume here
1. Ask owner whether click-to-play with sound now works for them (cache fix 807044e); if not, get browser/device.
2. RULE: whenever site/styles.css or site/script.js changes, recompute ?v= (first 8 hex of file sha256) in site/index.html and 404.html before pushing (now styles.css?v=57a87671, script.js?v=a3b31b36).
3. Owner: LinkedIn Post Inspector on the live URL; 5-second stranger test.
4. Optional: live Lighthouse run; Opus review of restyle; ask before deleting site/video/v<N>-preview.mp4; retitle pieces; showreel later.
5. Edit site/, commit with `git commit -F <file>`, push to main (~25 s deploy). Subagents prepare changes only; main session commits and pushes (their commit/push/delete are denied).

## Goal & scope
Show the work only, no stats. Shared as a link. Out of scope: scroll effects, backend, invented content.

## Current status
- [x] Phases 0-2, reviews 1-3 (docs/review-3.md "no violations" applies to the OLD white-section design only; owner declined a repeat).
- [x] Pages deployed; all-black restyle live; click/tap/Enter/Space on a loop starts full video with sound (9f9aeee, 807044e).
- Done-when: live URL 200 (verified); OG tags in live HTML (verified after /portfolio/ move); scroll-rule grep empty (last run before 807044e); Lighthouse mobile >= 90: live 100/100/100/100 was pre-restyle, restyle has one LOCAL run 94/100/100/100, live re-run outstanding.
- [ ] LinkedIn Post Inspector (owner). [ ] 5-second test (owner). Showreel: none.

## Recent changes (this session, 2026-11-18)
- 807044e: styles.css?v=57a87671, script.js?v=a3b31b36 in index.html and 404.html; any click on the white bar except Pause starts sound; rejected play() shows native controls paused at 0 instead of failing silently.
- 9f9aeee: click/tap on a looping video (or Enter/Space when focused) starts full video with sound, same as "Play with sound". Owner reported "still not doing it"; diagnosis on live site with real clicks under default autoplay policy: works in Edge, WebKit, touch emulation; no covering element, no play() rejection; full videos 200 with range support. Cause judged browser cache (Pages max-age=600, no version query). Real defect: only the bar's text button reacted, not icon or empty area.
- 62138ae all-black restyle (details in archive).

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
- Not tested: Firefox; touch in WebKit; reduced-motion and blocked-autoplay paths in a real browser; contrast sweep, Tab pass, hover screenshots; macOS/iOS/Android fonts, real touch devices, screen reader.
- Owner has not confirmed the click works after the cache fix. GitHub Pages caches script.js/styles.css 600 s: forgetting the ?v= bump leaves visitors on stale files.
- Unused files in repo: site/video/v{1,2,3}-preview.mp4.
- Repo PUBLIC; V2/V3 use third-party footage and commercial music. Docs hold local paths and placeholder name@example.com.
- Scratch in %TEMP% for owner to delete (deletes denied by permissions): restyle-serve, restyle-work, clickplay, clickdiag.

## Open questions
- Owner may change tidied titles. Delete unused preview MP4s?
- Opus rule ambiguities: L-09 vs I-05; P-06; W-06; L-15; P-01 (docs/review-3.md).

## User preferences & conventions
- Plan first, act on command. Commit via `git commit -F <file>`. Ask before deleting asset files. Minimal testing when owner says so.

## Session log
- 2026-11-18: Phases 0-2, 3 Opus reviews, first deploy b8a43bb, /portfolio/ move, restyle 62138ae, click-to-play 9f9aeee + cache-busting 807044e live. Older: portfolio_HANDOFF_archive.md.

## Keeping this file current
Under 8,192 bytes (`wc -c`); Resume max 6 items; Recent changes = this session; session log last 10 lines; older detail to portfolio_HANDOFF_archive.md (newest on top).
