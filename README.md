# Yellowstone Renovation — Sacramento

This Gatsby 5 project is the Sacramento, California adaptation of the current live Yellowstone Renovation website. It preserves the live design and media while using a consolidated Sacramento SEO architecture.

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
- Blog posts: 24 localized posts after merging thin and overlapping articles
- City pages: one service page and one deck-builder page for each primary city

## Primary deck SEO cluster

- `/deck-builder-sacramento/` — primary deck construction page
- `/composite-decks-sacramento/`
- `/wood-decks-sacramento/`
- `/deck-replacement-sacramento/`
- `/deck-repair-sacramento/`
- `/covered-decks-sacramento/`

Previous overlapping deck URLs and removed utility pages are permanently redirected in `static/_redirects`. Thank-you pages are `noindex` and excluded from the sitemap.

The shared SEO component generates canonical URLs, Open Graph/Twitter metadata, WebPage or BlogPosting schema, optional Service schema and BreadcrumbList schema. Organization and LocalBusiness entities are defined on the homepage without unverified review, license or street-address data.

No street address is included in structured data because a Sacramento business address has not been confirmed.
