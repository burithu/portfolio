# portfolio handoff

Purpose: static portfolio of the owner's graphic design and video editing work on GitHub Pages.
Updated: 2026-11-18. Branch: main. Last commit: none (no commits yet). Nothing pushed.
Status: Phase 2 build done, owner decisions applied, 3 reviews run. One blocking item left (T-16, fix in progress). Not committed.

## Resume here
1. Get the independent Opus reviewer to confirm the T-16 fix: "View full size" label overlaps the poster Client/Tools panel on hover/focus (docs/review-3.md; no other rule violated).
2. Then first commit (`git commit -F <file>`). Set Pages source to "GitHub Actions" on burithu/burithu.github.io.
3. ASK OWNER before first push. Tell them the push publishes the Toph and YF-23 videos (third-party footage, commercial music) in a public repo.
4. After push: live URL 200 check; Lighthouse on live URL; Open Graph tags in live HTML; owner checks LinkedIn Post Inspector and runs the 5-second test with a stranger.
5. No commits or pushes without the owner's say. Owner said of the build "i like it so far" (not a push approval).

## Goal & scope
Show the work only, no stats. Shared as a link. Repo burithu/burithu.github.io. Out of scope: scroll effects, backend, invented content.

## Current status
- [x] Phase 0, Phase 1 (D + white), Phase 2 curation, build, assets, og.png.
- [x] Reviews: review-1 (15 blocking, fixed), review-2 (2 new, fixed), review-3 (1 left: T-16). Reviewer local Lighthouse mobile 99/100/100/100; all 21 P-rules pass; banned-pattern search empty.
- [ ] T-16 fix confirmed. [ ] First commit. [ ] Pages source. [ ] First push. [ ] Live checks. [ ] LinkedIn Inspector, 5-second test.
- Showreel: none for now.

## Recent changes (this session, 2026-11-18)
- Owner decisions applied (see Key decisions). Site has 7 pieces: Racing schedule 2026 – Champ Car; Champ Car race hype post; Edmonson Motorsports logo; Eztec Games logo (three metal-background versions); Victory Lap 5 x Edmonson; Toph; YF23 x The One That Got Away. Titles are tidied file names; owner may still change them.
- Media (docs/media-manifest.md): masters in source/ with SHA-256 verified. site/img 3,232,285 B (AVIF/WebP/JPG; p1 480/960/1440, p2 480/960/1080, l1 256/512/1024 on white plate, l5-l7 256/512, v1-v3 posters 480/960/1440). site/video 18,418,709 B (v1 5.78 MB 1080p24, v2 5.83 MB 1080p60, v3 5.89 MB 1280x960 4:3; muted previews 0.21-0.44 MB each). og.png 1200x630, 151,761 B, mirrors the opening.
- Site files under site/ are being edited by another agent (T-16 fix); do not edit there from this session.

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
- Preview (verified): `python -m http.server 8123 --directory F:/Work/portfolio/site`. Lighthouse and scroll-rule check: CLAUDE.md Commands.
- Deploy: push to main triggers pages.yml. Untested.

## Known issues & risks
- T-16 open (see Resume 1).
- Repo PUBLIC and empty. Pages source not set, so first deploy fails until it is.
- V2/V3 use third-party footage and commercial music; public repo exposes them.
- Untested: fallback fonts on macOS/iOS/Android (size-adjust values estimated); real touch devices; screen reader; GitHub Pages 404 routing.

## Open questions
- Owner may still change the tidied titles.
- Opus-flagged rule ambiguities: L-09 vs I-05; P-06 "neon" threshold; W-06 on CSS all-caps; L-15 header Contact link; P-01 near-black threshold awaits confirmation.

## User preferences & conventions
- Plan first, act on command. Commit messages via `git commit -F <file>`. Ask before deleting asset files.

## Session log
- 2026-11-18: Phases 0-1 done (D + white). Phase 2: curation, shell, owner decisions, assets, 3 Opus reviews; T-16 pending. Earlier history: portfolio_HANDOFF_archive.md.

Keeping this file current: stay under 8 KB (8,192 bytes), Resume here max 6 items, session log last 10 lines, older history to portfolio_HANDOFF_archive.md.
