# TOP-STEA website (React + Tailwind CSS)

    npm install
    cp .env.example .env     # then put your Cloudinary cloud name in .env
    npm run dev

## Structure
- `src/routes/index.js` -> `export const routes = [...landingRoutes]`
- `src/routes/landingRoute.jsx` -> all pages (lazy loaded) under `LandingLayout`
- `src/routes/paths.js` -> every URL in one place
- `src/pages/` Home, About, Services, ServiceDetail (/services/:slug), Methodology, Engagement, QualityHse, Contact, NotFound
- `src/sections/` big page blocks (hero slider, stats, fast-track, ...)
- `src/data/site.js` all copy from the TOP-STEA document

## Cloudinary images
1. Put your cloud name in `.env` (`VITE_CLOUDINARY_CLOUD_NAME`).
2. Upload photos to Cloudinary and set each public ID in `src/data/images.js`.
Until then every picture shows a gold placeholder (in dev it prints the public ID it expects).

## Brand colours (from the logo)
gold `#B88F50`, charcoal `#373435` (see `tailwind.config.js`).

## To fill in
- Email / phone / address in `src/data/site.js` (`company`) - not in the document, so left blank.
- Contact form submit handler in `src/components/ContactForm.jsx` (TODO).

## Services menu
Services -> **Construction** (click to open its pages: Mechanical, Electrical, Plumbing, Fire Protection, ELV) and **Maintenance** (House Keeping Services).
- URLs: `/services`, `/services/construction`, `/services/construction/:slug`, `/services/maintenance`, `/services/maintenance/:slug`
- Add a maintenance service: copy the House Keeping entry in `maintenanceServices` (`src/data/site.js`). It appears in the menu, the Maintenance page, the sidebar and the footer automatically.

## Changing the hero banner images
Edit `src/data/hero.js`. Each slide has an `image` that can be a Cloudinary public ID, a full https:// URL, or a local file in `public/images/` (e.g. `/images/hero-1.jpg`). Add or remove slides freely; thumbnails, dots and counter adapt.
