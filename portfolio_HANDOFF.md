# portfolio handoff

Purpose: static portfolio of the owner's graphic design and video editing work on GitHub Pages.
Updated: 2026-11-18. Branch: main. Last deployed content commit: b8a43bb.
Status: Live at https://burithu.github.io/ (first push 2026-11-18, commit b8a43bb). Owner approved the first push ("push everything").

## Resume here
1. Owner: paste https://burithu.github.io/ into LinkedIn Post Inspector and confirm the preview (OG tags verified live, see below).
2. Owner: run the 5-second test with a stranger (can they say what burithu does?).
3. Optional: change tidied piece titles; add a showreel later (docs/showreel-proposal.md).
4. Edit site/, commit with `git commit -F <file>`, push to main; pages.yml redeploys (~25 s).


## Goal & scope
Show the work only, no stats. Shared as a link. Repo burithu/burithu.github.io. Out of scope: scroll effects, backend, invented content.

## Current status
- [x] Phases 0-2, reviews 1-3. Final reviewer statement (docs/review-3.md, pass 4): "No violations of docs/design-rules.md found".
- [x] Pages source = GitHub Actions (set via API). [x] First push, deploy success. [x] Live checks (below).
- [ ] LinkedIn Post Inspector (owner). [ ] 5-second test (owner).
- Showreel: none for now.

## Recent changes (this session, 2026-11-18)
- b8a43bb: first commit, 127 files, 22,368,224 B (largest: three ~5.8 MB MP4s). Pushed; workflow run 44288061511 success in 23 s job.
- Live checks: / 200; /styles.css 200 text/css; /og.png 200 image/png (1200x630 via ffprobe); /img/p1-960.avif 200 image/avif; /video/v1.mp4 200 video/mp4; nonsense path 404 with custom 404 body.
- Live OG tags present (title, description, type, url, image absolute https, 1200/630, alt, twitter:card summary_large_image).
- Scroll-rule grep on site/: no matches.
- Lighthouse mobile live, 3 runs: 100/100/100/100 each (median 100 all four); LCP 1.4-1.6 s, TBT 0-10 ms, CLS 0; color-contrast 1. Audits <1 (insights): cache 217 KiB, image-delivery 70 KiB, render-blocking 0.5, network-dependency-tree.
- Playwright msedge 390x844 and 1440x900: all requests from burithu.github.io, 0 failed, 0 console errors, Saira loaded (.shots/live-*.png).

## Key decisions
- Owner 2026-11-18: display name "burithu"; one shared role line "Graphic design and video editing"; captions = title, client (where any), tools; no per-piece role or brief.
- Tools: Adobe Photoshop for posters and logos; DaVinci Resolve for videos.
- All curated pieces approved, but only Edmonson logo L1 shown; L2-L4 dropped. No dates in site text (title "Racing schedule 2026 – Champ Car" stays).
- No YouTube: videos self-hosted MP4 with click-to-play facade. Contact is "Discord: burithu" only (no email, no LinkedIn). No showreel.
- Direction D "Pit Board" (docs/demo-directions-r2.md), font Saira, WHITE accent #FFFFFF, text on accent #0E0E0E (P-20). Page text #EEEEEE, so links/active states use underline, weight or inverted block (P-21).
- No serif (P-17). Accent as flat blocks (P-18). CSS-only hover/focus motion, never tied to scroll, with reduced-motion and touch fallbacks (P-19).
- Native scrolling only: no scroll/wheel listeners, libraries, snap, parallax, pinning. Dark near-black theme, one accent, no effects.
- Static HTML/CSS in site/; deploy via GitHub Actions (path: site). pages.yml versions verified 2026-11-18: checkout v7, configure-pages v6, upload-pages-artifact v5, deploy-pages v5.
- Images AVIF/WebP with srcset. Client name "Edmonson Motorsports". Content never invented. Strongest first.
- Source folders read-only; masters copied to source/. Main session manages only; Sonnet builds, Opus directs and reviews.

## Architecture map
- site/ deployed site. source/ masters (gitignored). docs/ design-rules.md, curation.md, media-manifest.md, review-1..3.md, demo-directions*.md, d-accent-options.md, showreel-proposal.md (not used). demos/ a,b,c,e,f and d-accents = rejected references kept on disk; demos/d chosen. .shots/ screenshots (gitignored). .github/workflows/pages.yml. CLAUDE.md rules.

## How to run
- Preview: `python -m http.server 8123 --directory F:/Work/portfolio/site`. Live checks, Lighthouse, scroll grep: CLAUDE.md Commands.
- Deploy: push to main triggers .github/workflows/pages.yml (verified). Watch: `gh run list --repo burithu/burithu.github.io --limit 3`.

## Known issues & risks
- Repo is PUBLIC; V2/V3 use third-party footage and commercial music, now exposed.
- Docs contain local paths (3 lines in docs/curation.md, docs/showreel-proposal.md) and placeholder name@example.com in demos/docs; no real email.
- Untested: fallback fonts on macOS/iOS/Android; real touch devices; screen reader.
- Lighthouse insights (cache TTL on GitHub Pages is fixed at 10 min; image delivery) are not fixable cheaply.

## Open questions
- Owner may still change the tidied titles.
- Opus-flagged rule ambiguities: L-09 vs I-05; P-06 threshold; W-06; L-15; P-01 (see docs/review-3.md).

## User preferences & conventions
- Plan first, act on command. Commit messages via `git commit -F <file>`. Ask before deleting asset files.

## Session log
- 2026-11-18: Phases 0-2 done (D + white), 3 Opus reviews, owner approved push, first deploy b8a43bb live, all live checks pass. Earlier: portfolio_HANDOFF_archive.md.
