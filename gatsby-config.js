const path = require("path");

const siteUrl = (
  process.env.GATSBY_SITE_URL ||
  "https://yellowstonerenovationca.com"
).replace(/\/$/, "");

module.exports = {
  siteMetadata: {
    title: "Yellowstone Renovation",
    description:
      "Top-rated remodeling, siding & deck contractors serving Sacramento, CA and Sacramento Metro.",
    author: "Yellowstone Renovation",
    siteUrl,
  },

  plugins: [
    "gatsby-plugin-react-helmet",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: path.join(__dirname, "content", "blog"),
      },
    },

    "gatsby-transformer-remark",

    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: [
          "/success/",
          "/success-offer/",
          "/thank-you/",
          "/404/",
        ],
      },
    },

    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,

        sitemap: `${siteUrl}/sitemap-index.xml`,

        policy: [
          {
            userAgent: "*",
            allow: "/",

            disallow: [
              "/success/",
              "/success-offer/",
              "/thank-you/",
            ],
          },
        ],
      },
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Yellowstone Renovation",
        short_name: "Yellowstone",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0AAA3D",
        display: "minimal-ui",
        icon: "static/icons/logo.png",
        legacy: true,
        theme_color_in_head: true,
        cache_busting_mode: "query",
        crossOrigin: "anonymous",
        include_favicon: true,
      },
    },

    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WVHDRN55",
        includeInDevelopment: false,
        defaultDataLayer: {
          platform: "gatsby",
        },
        enableWebVitalsTracking: true,
        routeChangeEventName: "gatsby-route-change",
      },
    },

    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};