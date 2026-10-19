# After Hours Plumbing Service — Website Codebase

## Overview
This repository contains the custom-developed codebase and assets for the **After Hours Plumbing Service** landing page ("Architectural Bento Footer Edition"), designed for a polished local service brand experience.

### Brand & Design Notes
- **Brand Focus:** Emergency Trade Assurance
- **Project Style:** High-trust tactical modernism for plumbing and emergency dispatch
- **Design System:** Tailored for residential service, local credibility, and urgent conversion

---

## Codebase Structure

```
├── index.html                    # Production-ready landing page with full markup & semantics
├── project-metadata.json         # Local project metadata and build notes
├── design-system.md              # Complete design tokens, typography, colors & spacing specs
├── css/
│   └── style.css                 # Custom tactical modernism styles, glassmorphism & animations
├── js/
│   └── main.js                   # Client interactions (estimator, booking modal, toast, review slider)
└── assets/
    └── images/                   # Localized image assets (logos, avatars, project photos)
        ├── logo-header.png
        ├── logo-footer.png
        ├── hero-technician.jpg
        ├── project-restroom.jpg
        ├── service-water-heater.jpg
        ├── service-leak-repair.jpg
        ├── service-sewer-gas.jpg
        ├── service-water-softener.jpg
        ├── avatar-danny.jpg
        ├── avatar-deborah.jpg
        ├── avatar-edgar.jpg
        ├── avatar-maria.jpg
        ├── review-danny.jpg
        ├── review-deborah.jpg
        ├── review-edgar.jpg
        └── image_map.json        # Local asset mapping reference
```

---

## Features & Enhancements

1. **Brand & Design Movement**: *High-Trust Tactical Modernism* — Clean architectural grids, urgent emergency red triggers (`#DC2626`), hydraulic authority blue (`#0284C7`), and deep slate legibility (`#090D15`).
2. **Interactive Quick Selector & Estimator**: Allows users to select service, timeline, and zip code to immediately request upfront pricing.
3. **Interactive Booking Modal**: Streamlined intake modal for immediate dispatch callback.
4. **Interactive Review Switcher**: Authentic Google customer reviews from Houston homeowners with carousel controls.
5. **Video & Technical Showcase**: Interactive modal explaining licensed Texas Master Plumber credentials (#38421).
6. **Self-Contained Local Assets**: All images and logos have been downloaded locally with online CDN fallbacks to prevent broken media.
7. **Mobile Optimized**: Responsive floating navigation with slide-out drawer and persistent bottom-docked emergency dispatch bar for mobile screens.

---

## Local Development

Requirements: Node.js 20 or later and npm.

```bash
npm install
npm run build
npm run preview
```

The checked-in `css/style.css` lets VS Code Live Server work directly at
`http://127.0.0.1:5500/index.html`. After changing Tailwind classes, run
`npm run build` to regenerate the stylesheet. The build also copies the site to
`dist/`; use `npm run preview` to preview that production output at
<http://localhost:8000>. `dist/` is generated and intentionally excluded from
Git.

## Deploy to GitHub and Vercel

1. Create an empty GitHub repository and push this project to its default branch.
2. In Vercel, choose **Add New Project**, import the GitHub repository, and deploy.
3. Vercel uses the included `vercel.json` to run `npm run build` and publish
   `dist/`. No framework preset or environment variables are required.

For future changes, push to the connected GitHub branch; Vercel will create a
deployment automatically.
