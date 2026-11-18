# Demo D accent options

Base tokens (unchanged): --bg #0E0E0E, --surface #191919, --plate #262626, --sheen #333333, --text #EEEEEE (off-white). Ratios use the WCAG 2.x relative-luminance formula (computed in Python). Hue is held; only lightness was adjusted.

| Option | --accent (blocks) | --on-accent | on-accent vs accent | --accent-text (text on dark) | accent vs bg / surface / plate / sheen | accent-text vs bg / surface / plate / sheen |
|---|---|---|---|---|---|---|
| Electric blue | #2438FF | #EEEEEE | 5.87:1 | #8691FF | 2.84 / 2.58 / 2.22 / 1.86 | 6.90 / 6.29 / 5.41 / 4.52 |
| Cobalt | #3670FF | #0E0E0E | 4.52:1 | #6D97FF | 4.52 / 4.12 / 3.54 / 2.96 | 6.91 / 6.30 / 5.42 / 4.52 |
| Racing red | #CE2C1C | #EEEEEE | 4.52:1 | #EB796E | 3.68 / 3.35 / 2.88 / 2.41 | 6.89 / 6.27 / 5.40 / 4.51 |
| Signal orange | #FF5A1F | #0E0E0E | 6.19:1 | #FF6D39 | 6.19 / 5.64 / 4.85 / 4.05 | 6.89 / 6.28 / 5.40 / 4.51 |
| Ice | #BFD4FF | #0E0E0E | 12.94:1 | #BFD4FF | 12.94 / 11.79 / 10.14 / 8.47 | 12.94 / 11.79 / 10.14 / 8.47 |
| White | #FFFFFF | #0E0E0E | 19.30:1 | #FFFFFF | 19.30 / 17.58 / 15.13 / 12.63 | 19.30 / 17.58 / 15.13 / 12.63 |

Rules: text on accent >= 4.5:1; accent as text or thin graphic on dark >= 4.5:1 against all four dark tokens (where the raw accent fails, --accent-text is a lighter tint of the same hue; where it passes, --accent-text equals --accent).

Starting values changed to meet the rules: Cobalt #2F6BFF -> #3670FF (lightened so near-black text reaches 4.5:1); Racing red #E0301E -> #CE2C1C (darkened so off-white text reaches 4.5:1). Electric blue, Signal orange and Ice kept their starting hex.

Hard-coded colours: none in demos/d/styles.css outside :root custom properties, and none in the HTML or inline SVG (placeholder art uses classes bound to --accent). The stylesheet uses var(--accent) directly as text/graphic on dark in 4 places (focus ring, piece-title hover, to-top link colour and underline); each override file re-declares these rules to use --accent-text. Other uses (--accent as text on --on-accent in link hover/active states) are the same pair as on-accent vs accent.

Placeholder art fills and the accent bars are decorative solid blocks, not text; saturated blue fills on the dark surface are below 4.5:1 against it (see accent vs surface column).

White (monochrome): the accent #FFFFFF is only 1.16:1 against the #EEEEEE page text and art ink, so these lose their distinction: the highlighted schedule row (third row of the event poster) matches the other white rows, the accent bands on the posters match the 07/12 numerals and ink bars, and the accent piece-title hover matches the white piece title. #F5F5F5 would be 1.06:1, so #FFFFFF was kept.
