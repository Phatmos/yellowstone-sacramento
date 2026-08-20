import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import { useLocation } from "@reach/router";

const DEFAULT_AREAS = [
  "Sacramento, CA",
  "Elk Grove, CA",
  "Roseville, CA",
  "Folsom, CA",
  "Rocklin, CA",
  "Citrus Heights, CA",
];

const normalizePath = (value = "/") => {
  const path = value.startsWith("/") ? value : `/${value}`;
  return path === "/" ? path : `${path.replace(/\/+$/, "")}/`;
};

export default function SEO({
  title,
  description,
  pathname,
  image,
  article = false,
  datePublished,
  dateModified,
  author = "Yellowstone Renovation",
  breadcrumbs = [],
  service = null,
  city,
  serviceType = [],
  areaServed = [],
  projectSchema = null,
  noindex = false,
}) {
  const location = useLocation();
  const { site } = useStaticQuery(graphql`
    query SEOQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const { title: defaultTitle, description: defaultDescription, siteUrl } =
    site.siteMetadata;
  const path = normalizePath(pathname || location.pathname || "/");
  const url = `${siteUrl}${path}`;
  const socialImage = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : `${siteUrl}/images/deck/deck-sacramento23.webp`;
  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;
  const inferredServices = Array.isArray(serviceType) ? serviceType : [serviceType];
  const resolvedService = service || (inferredServices.filter(Boolean).length > 0
    ? {
        name: `${inferredServices[0]}${city ? ` in ${city}, CA` : ""}`,
        serviceType: inferredServices.join(", "),
        description: pageDescription,
        areaServed: areaServed.length > 0 ? areaServed : city ? [`${city}, CA`] : DEFAULT_AREAS,
      }
    : null);

  const graph = [];

  if (path === "/") {
    graph.push(
      {
        "@type": "Organization",
        "@id": organizationId,
        name: "Yellowstone Renovation",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/icons/logo.png`,
          width: 512,
          height: 512,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-916-571-6919",
          contactType: "sales",
          areaServed: "US-CA",
          availableLanguage: "English",
        },
        sameAs: [
          "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
          "https://www.instagram.com/yellowstone_renovation/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: "Yellowstone Renovation",
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        name: "Yellowstone Renovation",
        url: siteUrl,
        telephone: "+1-916-571-6919",
        image: socialImage,
        priceRange: "$$",
        areaServed: DEFAULT_AREAS.map((name) => ({ "@type": "City", name })),
        parentOrganization: { "@id": organizationId },
      }
    );
  }

  const pageSchema = {
    "@type": article ? "BlogPosting" : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: pageTitle,
    description: pageDescription,
    isPartOf: { "@id": websiteId },
    primaryImageOfPage: { "@type": "ImageObject", url: socialImage },
    inLanguage: "en-US",
  };

  if (article) {
    pageSchema.headline = pageTitle;
    pageSchema.image = [socialImage];
    pageSchema.author = { "@type": "Organization", name: author };
    pageSchema.publisher = { "@id": organizationId };
    if (datePublished) pageSchema.datePublished = datePublished;
    if (dateModified || datePublished) pageSchema.dateModified = dateModified || datePublished;
  }
  graph.push(pageSchema);

  if (resolvedService) {
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: resolvedService.name,
      serviceType: resolvedService.serviceType || resolvedService.name,
      description: resolvedService.description || pageDescription,
      url,
      provider: {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        name: "Yellowstone Renovation",
        telephone: "+1-916-571-6919",
        url: siteUrl,
      },
      areaServed: (resolvedService.areaServed || DEFAULT_AREAS).map((name) => ({
        "@type": "City",
        name,
      })),
    });
  }

  if (breadcrumbs.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${siteUrl}${normalizePath(item.path)}`,
      })),
    });
  }

  if (projectSchema) {
    graph.push({
      "@type": "CreativeWork",
      author: { "@id": organizationId },
      ...projectSchema,
      image: projectSchema.image || socialImage,
      url: projectSchema.url || url,
    });
  }

  return (
    <Helmet htmlAttributes={{ lang: "en-US" }}>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <link rel="canonical" href={url} />
      <link rel="icon" type="image/png" sizes="48x48" href="/icons/icon-48x48.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192x192.png" />
      <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Yellowstone Renovation" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:alt" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={socialImage} />
      <script type="application/ld+json">
        {JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}
      </script>
    </Helmet>
  );
}
