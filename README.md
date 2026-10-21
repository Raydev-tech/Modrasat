# Rawdatul Huffadh Islamic Institute — Landing Page

A responsive React + Tailwind CSS landing page built with Vite.

## Requirements
- Node.js (LTS version)
- VS Code (recommended)

## Install and run

1. Extract this ZIP.
2. Open the extracted `rawdatul-huffadh-website` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL Vite prints, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Customize before publishing
- Replace the sample hero background image URL in `src/index.css` with a photo you have permission to use.
- Replace the example email address in `src/App.jsx` with the institute's real contact address.
- The newsletter form currently demonstrates the interface only; it does not send or store email addresses. Connect a backend or email marketing service before using it publicly.
- The introduction popup is a placeholder ready for your own video.
- Social links currently point to sections of this page. Replace them with the institute's official profile URLs.
- The Qur'an and daily reminder sections are landing-page previews, not a complete Qur'an reader or verified live prayer-time system.


## AOS scroll animations

AOS (Animate On Scroll) is installed and initialized in `src/main.jsx`.
The landing page uses effects such as `fade-up`, `fade-left`, `fade-right`, and `zoom-in`.
Animation settings can be changed in `AOS.init()`:
- `duration`: animation duration in milliseconds
- `once`: animate each element only once
- `offset`: how far into the viewport before animating

To install all dependencies after updating, run `npm install`.
