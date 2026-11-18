# Media manifest

Generated 2026-11-18. All media produced from owner-approved masters copied to `source/` (gitignored).

## Totals (computed)
- site/img: 3232285 bytes
- site/video: 18418709 bytes
- site/og.png: 272184 bytes (1200x630 PNG, rgb24; limit 300000)

## Source copies (SHA-256 of copy equals original, all MATCH)
| Copy | Original |
|---|---|
| source/p1.png | F:\Work\Edmonson Racing\Posters\racing schedule 2026\racing schedule_champ car 2026.png |
| source/p2.png | F:\Work\Edmonson Racing\Posters\champ car oct\champ car race hype post.png |
| source/l1.svg | F:\Work\Edmonson Racing\Logo work\final logo\final_logo_nobg.svg |
| source/l1.png | F:\Work\Edmonson Racing\Logo work\final logo\Final_nobg.png (1249x833 RGBA; chosen as the PNG twin: same 1249x833 canvas as the SVG) |
| source/l5.jpg | ...\MetalBG\Concentric_Black_Metal\Logo_Concentric_Black_MetalBG.jpg |
| source/l6.jpg | ...\MetalBG\Concentric_Titanium\Logo_Concentric_TitaniumBG.jpg |
| source/l7.jpg | ...\MetalBG\Scribble_Metal\Logo_ScribbleMetalBG.jpg |
| source/v1.mp4 | F:\Work\Edmonson Racing\videos\victory lap 5 x edmonson\victory lap 5 x edmonson .mp4 |
| source/v2.mp4 | F:\Video Editing\toph\toph.mp4 |
| source/v3.mov | F:\Video Editing\mortal reminder\runnderban\plane edit\yf23_theonethatgotaway\yf23 x the one that got away.mov |

Note: the L5-L7 paths in the brief lacked the per-logo subfolder; the real paths include it (as in docs/curation.md).

## srcset widths available per id (each in avif, webp, jpg)
- p1: 480, 960, 1440
- p2: 480, 960, **1080** (source is 1080 wide; no p2-1440.*. HTML srcset must use p2-1080)
- l1: 256, 512, **1024** (extra width)
- l5, l6, l7: 256, 512 (512 is native)
- v1, v2, v3 poster frames: 480, 960, 1440 (v3 is 4:3: 480x360, 960x720, 1440x1080; v1, v2 are 16:9)

## Deviations from the naming scheme
- p2-1080.* replaces p2-1440.*.
- l1-1024.* added.
- site/img/l1.svg NOT provided: the SVG embeds a raster for the stripes and uses live text in font "Bitsumishi" that is not embedded, so it renders with a fallback font on any machine without that font.

## l1 plate decision: white #FFFFFF
Measured WCAG contrast of the logo colours (from the PNG's opaque pixels): tan (173,159,108) 7.31 vs #0E0E0E / 2.64 vs white; dark green (0,55,24) 1.43 vs #0E0E0E / 13.46 vs white; black text (0,0,0) 1.09 vs #0E0E0E / 21.00 vs white. On #0E0E0E the green stripes and the wordmark vanish; on white every part is at least 2.64 (tan, a large solid shape). Logo trimmed to its alpha bounding box (693x333 px in the 1249x833 source), centred on a flat square plate at 67.7% of plate width (about 16% padding each side, slightly more than the 12% asked, because 693 px is the native width and 1024 px would otherwise need upscaling). Same ratio at 1024/512/256 (downscaled with Lanczos; no upscaling). No effects.

## Images
| File | Size | Bytes | Settings |
|---|---|---|---|
| site/img/l1-1024.avif | 1024x1024 | 4994 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/l1-1024.jpg | 1024x1024 | 32797 | mjpeg -q:v 3 yuvj420p |
| site/img/l1-1024.webp | 1024x1024 | 9940 | libwebp q80 cl6 |
| site/img/l1-256.avif | 256x256 | 1898 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/l1-256.jpg | 256x256 | 6434 | mjpeg -q:v 3 yuvj420p |
| site/img/l1-256.webp | 256x256 | 2846 | libwebp q80 cl6 |
| site/img/l1-512.avif | 512x512 | 3039 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/l1-512.jpg | 512x512 | 14208 | mjpeg -q:v 3 yuvj420p |
| site/img/l1-512.webp | 512x512 | 5216 | libwebp q80 cl6 |
| site/img/l5-256.avif | 256x256 | 2364 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/l5-256.jpg | 256x256 | 8518 | mjpeg -q:v 3 yuvj420p |
| site/img/l5-256.webp | 256x256 | 3758 | libwebp q80 cl6 |
| site/img/l5-512.avif | 512x512 | 4589 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/l5-512.jpg | 512x512 | 23243 | mjpeg -q:v 3 yuvj420p |
| site/img/l5-512.webp | 512x512 | 10234 | libwebp q80 cl6 |
| site/img/l6-256.avif | 256x256 | 3005 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/l6-256.jpg | 256x256 | 10815 | mjpeg -q:v 3 yuvj420p |
| site/img/l6-256.webp | 256x256 | 6066 | libwebp q80 cl6 |
| site/img/l6-512.avif | 512x512 | 8592 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/l6-512.jpg | 512x512 | 34869 | mjpeg -q:v 3 yuvj420p |
| site/img/l6-512.webp | 512x512 | 18774 | libwebp q80 cl6 |
| site/img/l7-256.avif | 256x256 | 6220 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/l7-256.jpg | 256x256 | 15984 | mjpeg -q:v 3 yuvj420p |
| site/img/l7-256.webp | 256x256 | 10672 | libwebp q80 cl6 |
| site/img/l7-512.avif | 512x512 | 21382 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/l7-512.jpg | 512x512 | 58477 | mjpeg -q:v 3 yuvj420p |
| site/img/l7-512.webp | 512x512 | 38304 | libwebp q80 cl6 |
| site/img/p1-1440.avif | 1440x2036 | 102848 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/p1-1440.jpg | 1440x2036 | 416117 | mjpeg -q:v 3 yuvj420p |
| site/img/p1-1440.webp | 1440x2036 | 214752 | libwebp q80 cl6 |
| site/img/p1-480.avif | 480x678 | 30066 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/p1-480.jpg | 480x678 | 72200 | mjpeg -q:v 3 yuvj420p |
| site/img/p1-480.webp | 480x678 | 44406 | libwebp q80 cl6 |
| site/img/p1-960.avif | 960x1358 | 65498 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/p1-960.jpg | 960x1358 | 219376 | mjpeg -q:v 3 yuvj420p |
| site/img/p1-960.webp | 960x1358 | 121522 | libwebp q80 cl6 |
| site/img/p2-1080.avif | 1080x1080 | 49880 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/p2-1080.jpg | 1080x1080 | 181411 | mjpeg -q:v 3 yuvj420p |
| site/img/p2-1080.webp | 1080x1080 | 102324 | libwebp q80 cl6 |
| site/img/p2-480.avif | 480x480 | 19622 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/p2-480.jpg | 480x480 | 54819 | mjpeg -q:v 3 yuvj420p |
| site/img/p2-480.webp | 480x480 | 33816 | libwebp q80 cl6 |
| site/img/p2-960.avif | 960x960 | 46573 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/p2-960.jpg | 960x960 | 151048 | mjpeg -q:v 3 yuvj420p |
| site/img/p2-960.webp | 960x960 | 85230 | libwebp q80 cl6 |
| site/img/v1-1440.avif | 1440x810 | 36752 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/v1-1440.jpg | 1440x810 | 134387 | mjpeg -q:v 3 yuvj420p |
| site/img/v1-1440.webp | 1440x810 | 79152 | libwebp q80 cl6 |
| site/img/v1-480.avif | 480x270 | 12240 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/v1-480.jpg | 480x270 | 32715 | mjpeg -q:v 3 yuvj420p |
| site/img/v1-480.webp | 480x270 | 21906 | libwebp q80 cl6 |
| site/img/v1-960.avif | 960x540 | 26138 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/v1-960.jpg | 960x540 | 82720 | mjpeg -q:v 3 yuvj420p |
| site/img/v1-960.webp | 960x540 | 52556 | libwebp q80 cl6 |
| site/img/v2-1440.avif | 1440x810 | 10246 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/v2-1440.jpg | 1440x810 | 57494 | mjpeg -q:v 3 yuvj420p |
| site/img/v2-1440.webp | 1440x810 | 30930 | libwebp q80 cl6 |
| site/img/v2-480.avif | 480x270 | 3709 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/v2-480.jpg | 480x270 | 14393 | mjpeg -q:v 3 yuvj420p |
| site/img/v2-480.webp | 480x270 | 8492 | libwebp q80 cl6 |
| site/img/v2-960.avif | 960x540 | 7058 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/v2-960.jpg | 960x540 | 33400 | mjpeg -q:v 3 yuvj420p |
| site/img/v2-960.webp | 960x540 | 18884 | libwebp q80 cl6 |
| site/img/v3-1440.avif | 1440x1080 | 10118 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/v3-1440.jpg | 1440x1080 | 62810 | mjpeg -q:v 3 yuvj420p |
| site/img/v3-1440.webp | 1440x1080 | 28148 | libwebp q80 cl6 |
| site/img/v3-480.avif | 480x360 | 4150 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/v3-480.jpg | 480x360 | 15723 | mjpeg -q:v 3 yuvj420p |
| site/img/v3-480.webp | 480x360 | 8140 | libwebp q80 cl6 |
| site/img/v3-960.avif | 960x720 | 7123 | libaom-av1 crf30 cpu-used4 still, yuv420p |
| site/img/v3-960.jpg | 960x720 | 36505 | mjpeg -q:v 3 yuvj420p |
| site/img/v3-960.webp | 960x720 | 17650 | libwebp q80 cl6 |

Poster frame timestamps (extracted from the masters, full-frame): v1 9.500 s (car door, Edmonson logo, #227); v2 11.775 s (fire attack, mech); v3 2.828 s (YF-23 in hangar; 5.656 s was rejected: transition glitch).

## Videos
Full versions: H.264 High, yuv420p, 2-pass libx264 -preset slower, AAC LC 128k stereo, faststart. Target video bitrates: v1 2600k, v2 1350k, v3 900k (maxrate 1.5x, bufsize 2x). v1 and v2 stay 1920x1080; v2 stays 60 fps (size target met). v3 scaled 1440x1080 to 1280x960 (4:3, no crop, no bars). The timecode (tmcd) data track copied from the sources was stripped by remux (-c copy).

Previews: no audio, 7.0 s, H.264 High, crf 29 with maxrate 700k, faststart.
| Preview | In | Out | Why |
|---|---|---|---|
| v1-preview.mp4 | 4.25 s | 11.25 s | car and pit crew, helmet, car interior (contact sheet) |
| v2-preview.mp4 | 9.8 s | 16.8 s | fire-attack action (skips title text and the black end card) |
| v3-preview.mp4 | 16.0 s | 23.0 s | jets over terrain, LIFE/US kinetic text |

| File | Size | fps | Duration | Bytes | Audio | Limit |
|---|---|---|---|---|---|---|
| site/video/v1-preview.mp4 | 640x360 | 24/1 | 7.00 s | 439039 | audio: none | OK (limit 3000000) |
| site/video/v1.mp4 | 1920x1080 | 24/1 | 17.00 s | 5778254 | audio: aac | OK (limit 8000000) |
| site/video/v2-preview.mp4 | 640x360 | 30/1 | 7.00 s | 267988 | audio: none | OK (limit 3000000) |
| site/video/v2.mp4 | 1920x1080 | 60/1 | 31.38 s | 5833500 | audio: aac | OK (limit 8000000) |
| site/video/v3-preview.mp4 | 640x480 | 24/1 | 7.00 s | 210683 | audio: none | OK (limit 3000000) |
| site/video/v3.mp4 | 1280x960 | 24/1 | 45.25 s | 5889245 | audio: aac | OK (limit 8000000) |

Visual check (3 frames per video, 100% crops, source beside encode, times in s: v1 3/8/13; v2 5/15/26; v3 6/20/38): v1 no visible difference (logo text and small sponsor text intact). v2 fine grain in dark scenes is smoothed; flat cel art intact. v3 source is already soft/low-resolution VHS-like; no added blocking visible. Strictly, v1 and v2 are about 5.8 MB, under the 6 MB preference.

## Open Graph
site/og.png: 1200x630, #0E0E0E background, white block (48,48, 690x534) with "burithu" (Saira variable, weight 600, font-stretch 75%) and "Graphic design and video editing" (weight 500, stretch 75%) in #0E0E0E; p1 poster uncropped at right (534 px tall, 377 px wide) from site/img/p1-1440.jpg. Rendered in Edge (Playwright, channel msedge); verified with ffprobe.

## Deleted (generated placeholders from earlier today)
l2-256/512 and l3-256/512 and l4-256/512 (avif, webp, jpg: 18 files) and p2-1440.avif/.jpg/.webp (3 files). All other placeholder files (p1, p2-480/960, l1, l5-l7, v1-v3 posters) were overwritten in place by the real renders.

## Commands (one per kind; PowerShell, paths shortened)
- AVIF: `ffmpeg -y -i SRC -vf "scale=W:-2:flags=lanczos,format=yuv420p" -c:v libaom-av1 -crf 30 -b:v 0 -cpu-used 4 -still-picture 1 -map_metadata -1 OUT.avif`
- WebP: `ffmpeg -y -i SRC -vf "scale=W:-2:flags=lanczos" -c:v libwebp -quality 80 -compression_level 6 -map_metadata -1 OUT.webp`
- JPG: `ffmpeg -y -i SRC -vf "scale=W:-2:flags=lanczos,format=yuvj420p" -c:v mjpeg -q:v 3 -map_metadata -1 OUT.jpg`
- l1 plate: Python PIL (trim to alpha bbox, paste centred on white square at 67.7% width), then the commands above.
- Full video pass 1: `ffmpeg -y -i SRC -map 0:v:0 -c:v libx264 -profile:v high -pix_fmt yuv420p -preset slower -b:v 2600k -maxrate 3900k -bufsize 5200k -passlogfile LOG -pass 1 -an -f null NUL` (v3 adds `-vf scale=1280:960:flags=lanczos`)
- Full video pass 2: same options with `-pass 2 -map 0:a:0 -c:a aac -b:a 128k -ac 2 -movflags +faststart OUT.mp4`; then `ffmpeg -i OUT -map 0:v:0 -map 0:a:0 -c copy -write_tmcd 0 -movflags +faststart FINAL.mp4`
- Preview: `ffmpeg -y -ss IN -t 7 -i SRC -map 0:v:0 -an -vf "scale=640:360:flags=lanczos,fps=24" -c:v libx264 -profile:v high -pix_fmt yuv420p -preset slower -crf 29 -maxrate 700k -bufsize 1400k -movflags +faststart -write_tmcd 0 OUT.mp4`
- Poster frame: `ffmpeg -y -ss T -i SRC -frames:v 1 frame.png`, then the image commands.
- OG: Playwright (msedge) screenshot of an HTML page at 1200x630.
