# Yellowstone Renovation — Sacramento

This Gatsby 5 project is the Sacramento, California adaptation of the current live Yellowstone Renovation website. It preserves the live design, navigation, page components, service pages, project galleries, blog, forms, and SEO structure.

## Local setup (Windows, macOS, or Linux)

Use Node.js 20 LTS. From this project folder run:

```bash
npm install
npx gatsby clean
npm run develop
```

Open `http://localhost:8000`.

Do not run `npm install globaly`; `globaly` is not an npm package. A global Gatsby install is not required because the project uses the local Gatsby binary.

## Production build

```bash
npm install
npm run build
npm run serve
```

The production output is generated in `public/`.

## Netlify

- Build command: `npm run build`
- Publish directory: `public`
- Recommended Node version: `20`

Set `GATSBY_SITE_URL` to the final production domain before deployment. If it is not set, Gatsby uses Netlify's `URL` value and then falls back to `https://sacramento.yellowstonerenovation.com`.

Optional serverless-function credentials are documented in `.env.example`. Configure secrets in Netlify; never commit a real `.env` file.

## Sacramento configuration

- Phone: `(916) 571-6919`
- Primary market: Sacramento, California
- Service areas: Sacramento, Elk Grove, Roseville, Folsom, Rocklin, Citrus Heights
- Blog posts: 31 localized posts
- City pages: one service page and one deck-builder page for each primary city

No street address is included in structured data because a Sacramento business address has not been confirmed.
