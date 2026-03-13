# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static portfolio website for catobenjaminsen.com. No build tools or package managers — vanilla HTML/CSS/JS with jQuery 2.1.3 and Bootstrap 3.3.2.

## Development

To preview locally, serve the root directory over HTTP:
```
python3 -m http.server 8000
```

Deployment is via GitHub Pages on the `gh-pages` branch with a custom domain (`CNAME` → catobenjaminsen.com).

## Architecture

Single `index.html` page with:
- **`css/base.css`** — all styling (~710 lines), custom responsive design with media queries for mobile/tablet/desktop
- **`js/app.js`** — jQuery interactivity: masthead fade-in on load, modal open/close, Escape key support, body scroll lock
- **`img/`** — project screenshots (`*-preview.webp`), icons (`*.png`), hero background, and headshots

### Modal system
Three modals embedded in `index.html`: two project modals (Loyalties, Zero Circle) and a bio modal. All share the same open/close logic in `app.js`. Modals use CSS `fadeIn`/`slideIn` animations defined in `base.css`.

### Responsive breakpoints (in `base.css`)
- Mobile: ≤767px
- Small mobile: ≤450px, very small: ≤320px
- Tablet: 768–1023px
- Desktop: 1024–1399px
- Large desktop: ≥1400px
- Landscape mobile: handled separately
