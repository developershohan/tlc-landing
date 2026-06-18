# Thames Luxury Charters — Landing Page

Next.js 16 (App Router) + TypeScript + Tailwind v4, shadcn/ui structure.
Framer Motion for component motion, GSAP ScrollTrigger for pinned scroll
sequences, and Lenis for global smooth scrolling.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Section flow (top to bottom)

1. **Hero** — full-bleed looping video + rotating-occasion headline.
2. **ClipReveal** — a framed river shot expands to full-bleed on scroll,
   with stills drifting past in parallax (the SpaceX-style clip-path reveal).
3. **ParadigmShift** — pinned "shift" sequence: a clip-path text wipe and a
   ship gliding across, landing on the charter pitch.
4. **Heritage** — the 32+ years / since-1993 statement.
5. **ExperienceSpread** — three stacked photos fan apart as you scroll
   (the Yachting "animated photos" effect).
6. **Features** — on-board highlights grid with line icons.
7. **FleetGallery** — interactive bento gallery, expands on click.
8. **Occasions** — hover-lift occasion cards.
9. **WinterSale** — offers, promo code TLC-BF-25, deposit bonus.
10. **SocialMarquee** — infinite Instagram photo strip (pauses on hover).
11. **EnquireCta** + **Footer**.

## What changed in this pass

- **Font** switched to **HelveticaNowDisplay** across headings and body
  (see `public/fonts/README.txt` to drop in the licensed files).
- **Scroll indicator** moved to a **horizontal bar at the very top** that
  fills left-to-right (was a vertical line on the left edge).
- **Hero video** element is now live — it plays the moment the file exists.
- Added smooth scrolling, the clip-path reveal, the pinned shift sequence,
  the photo-spread, the features grid and the Instagram marquee.

## Media checklist

Every placeholder shows the exact path it expects (search the code for
`PLACEHOLDER`). Swap each labelled `<div>` for an `<img>`/`<video>`:

| What | Path |
|---|---|
| Hero video (muted, looping) | `public/video/hero-loop.mp4` |
| Hero poster frame | `public/images/hero-poster.jpg` |
| Full-bleed river shot | `public/images/river-wide.jpg` |
| Parallax stills | `public/images/still-1..4.jpg` |
| Experience photos | `public/images/experience/{dining,deck,skyline}.jpg` |
| Fleet photos | `public/images/fleet/*.jpg` |
| Occasion photos | `public/images/occasions/*.jpg` |
| Instagram strip | `public/images/social/01..06.jpg` |
| HelveticaNowDisplay | `public/fonts/HelveticaNowDisplay-*.woff2` |

## Notes

- Reduced-motion is respected (Lenis disables, animations collapse).
- Focus rings, 44px+ tap targets, and AA contrast on text over media.
- Offer dates/prices were taken from your current site — re-check before
  going live in case anything changed.
