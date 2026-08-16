import React from "react";
import ServiceAreasGrid from "../../components/ServiceAreasGrid";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { Helmet } from "react-helmet";

export default function ServiceAreasPage() {
    return (
        <Layout>
            <Helmet>
                {/* ✅ Ranking Keywords */}
                <meta
                    name="keywords"
                    content="Service areas Sacramento CA, Contractors near me Sacramento, Siding contractor Elk Grove, Deck builder Roseville, Exterior remodeling Citrus Heights CA"
                />

                {/* ✅ Social Sharing */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Cities We Serve | Yellowstone Renovation" />
                <meta
                    property="og:description"
                    content="Yellowstone Renovation provides siding, decks, window installation & exterior remodeling in Sacramento, Elk Grove, Roseville, Citrus Heights, Folsom & more."
                />
                <meta property="og:url" content="https://sacramento.yellowstonerenovation.com/cities/" />
                <meta property="og:image" content="https://sacramento.yellowstonerenovation.com/images/remodler1.webp" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Cities We Serve | Sacramento Exterior Contractors"
                />
                <meta
                    name="twitter:description"
                    content="Top-rated exterior remodeling serving Sacramento & Sacramento Metro. Free estimates!"
                />
                <meta
                    name="twitter:image"
                    content="https://sacramento.yellowstonerenovation.com/images/remodler1.webp"
                />
            </Helmet>

            <SEO
                title="Service Areas | Cities We Serve | Yellowstone Renovation"
                description="Find a siding and deck contractor near you. Yellowstone Renovation proudly serves Sacramento, Elk Grove, Roseville, Folsom, Citrus Heights & nearby communities in Sacramento Metro."
                pathname="/cities/"
                image="https://sacramento.yellowstonerenovation.com/images/remodler1.webp"
            />

            {/* ✅ Local Business Area Schema */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Exterior Remodeling in Sacramento Metro",
                        "serviceType": [
                            "Siding Installation",
                            "Deck Construction",
                            "Replacement Windows",
                            "Exterior Painting",
                            "Gutters & Fascia"
                        ],
                        "areaServed": [
                            "Sacramento, CA",
                            "Elk Grove, CA",
                            "Roseville, CA",
                            "Citrus Heights, CA",
                            "Folsom, CA",
                            "Rocklin, CA"
                        ],
                        "provider": {
                            "@type": "HomeAndConstructionBusiness",
                            "name": "Yellowstone Renovation",
                            "telephone": "916-571-6919",
                            "url": "https://sacramento.yellowstonerenovation.com"
                        }
                    })}
                </script>
            </Helmet>


            <ServiceAreasGrid accent="#0a923d" />
        </Layout>
    );
}
