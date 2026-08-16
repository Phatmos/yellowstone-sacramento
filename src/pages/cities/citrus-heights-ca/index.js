import * as React from "react"
import Layout from "../../../components/Layout"

import "../../../styles/global.css"
import SEO from "../../../components/SEO";
import { Helmet } from "react-helmet";
import HeroSection from "../../../components/HeroSection";
import SidingPageSection from "../../../components/SidingPageSection";
import AboutSection from "../../../components/AboutSection";
import TestimonialsSection from "../../../components/TestimonialsSection";
import QuoteSection from "../../../components/QuoteSection";
import GallerySection from "../../../components/GallerySection"
import Services from "../../../components/Services.js"

export default function CitrusHeightsCA() {
    return (
        <Layout>
            <Helmet>
                {/* ✅ Local Citrus Heights Keywords */}
                <meta
                    name="keywords"
                    content="Deck Builder Citrus Heights CA, Siding Contractor Citrus Heights CA, James Hardie Citrus Heights, Composite Decks Sacramento County, Vinyl Siding Citrus Heights California"
                />

                {/* ✅ Social Sharing — Facebook / iMessage / LinkedIn */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Citrus Heights, CA | Exterior Builder You Can Trust"
                />
                <meta
                    property="og:description"
                    content="Reliable deck and siding contractor in Citrus Heights, CA. Yellowstone Renovation installs composite decks, wood decks, and premium siding built for California weather. Free estimates in Sacramento County."
                />
                <meta
                    property="og:url"
                    content="https://sacramento.yellowstonerenovation.com/cities/citrus-heights-ca/"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />
                <meta
                    property="og:image"
                    content="https://sacramento.yellowstonerenovation.com/images/remodler1.webp"
                />

                {/* ✅ Twitter Preview */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Deck and Siding Contractor in Citrus Heights, CA | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Upgrade your Citrus Heights home with durable siding and custom decks. Exterior builder you can trust — free quotes across Sacramento County."
                />
                <meta
                    name="twitter:image"
                    content="https://sacramento.yellowstonerenovation.com/images/remodler1.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Citrus Heights, CA | Exterior Builder You Can Trust"
                description="Yellowstone Renovation provides professional siding installation and custom deck construction in Citrus Heights, CA. We install composite, wood, vinyl, and James Hardie siding — designed for California’s weather. Free estimates across Sacramento County."
                pathname="/cities/citrus-heights-ca/"
                image="https://sacramento.yellowstonerenovation.com/images/remodler1.webp"
            />

            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            /* -----------------------------------------------------
                               1) Local Business — Citrus Heights Version
                            ----------------------------------------------------- */
                            {
                                "@type": "LocalBusiness",
                                "@id": "https://sacramento.yellowstonerenovation.com/#localbusiness",
                                "name": "Yellowstone Renovation",
                                "url": "https://sacramento.yellowstonerenovation.com",
                                "logo": "https://sacramento.yellowstonerenovation.com/icons/logo.webp",
                                "image": "https://sacramento.yellowstonerenovation.com/images/remodler1.webp",
                                "telephone": "(916) 571-6919",
                                "priceRange": "$$",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Citrus Heights",
                                    "addressRegion": "CA",
                                    "addressCountry": "US"
                                },
                                "areaServed": [
                                    "Citrus Heights, CA",
                                    "Sacramento, CA",
                                    "Carmichael, CA",
                                    "Sacramento County, CA"
                                ],
                                "sameAs": [
                                    "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                                    "https://www.instagram.com/yellowstone_renovation/",
                                    "https://maps.google.com/?q=Yellowstone+Renovation+Citrus Heights+CA"
                                ],
                                "serviceType": [
                                    "Vinyl Siding Installation",
                                    "James Hardie Fiber Cement",
                                    "Composite Decks",
                                    "Wood Decks",
                                    "Replacement Windows",
                                    "Exterior Repairs"
                                ]
                            },

                            /* -----------------------------------------------------
                               2) Organization Schema
                            ----------------------------------------------------- */
                            {
                                "@type": "Organization",
                                "@id": "https://sacramento.yellowstonerenovation.com/#organization",
                                "name": "Yellowstone Renovation",
                                "url": "https://sacramento.yellowstonerenovation.com",
                                "logo": "https://sacramento.yellowstonerenovation.com/icons/logo.webp",
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": "(916) 571-6919",
                                    "contactType": "customer support",
                                    "areaServed": "US"
                                },
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Elk Grove",
                                    "addressRegion": "CA",
                                    "addressCountry": "US"
                                }
                            },

                            /* -----------------------------------------------------
                               3) Product (Review Snippets) — Enables Stars in Google
                            ----------------------------------------------------- */
                            {
                                "@type": "Product",
                                "@id": "https://sacramento.yellowstonerenovation.com/#product",
                                "name": "Yellowstone Renovation Services",
                                "image": {
                                    "@type": "ImageObject",
                                    "url": "https://sacramento.yellowstonerenovation.com/images/remodler1.webp",
                                    "width": 1200,
                                    "height": 800
                                },
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "reviewCount": "87"
                                }
                            },

                            /* -----------------------------------------------------
                               4) FAQ Schema — Citrus Heights
                            ----------------------------------------------------- */
                            {
                                "@type": "FAQPage",
                                "@id": "https://sacramento.yellowstonerenovation.com/#citrus-heights-faq",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "How much does siding cost in Citrus Heights?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text":
                                                "In Citrus Heights, vinyl siding usually ranges from $7–$11 per sq.ft. installed. James Hardie® fiber cement siding often runs between $14–$21 per sq.ft. depending on trim, layout, and home size."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do you work outside Citrus Heights?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text":
                                                "Yes. We serve Citrus Heights, Sacramento, Carmichael, Fair Oaks, and all of Sacramento County with deck building, siding replacement, and exterior renovations."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do you offer free estimates in Citrus Heights?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text":
                                                "Yes — we provide free, detailed, no-pressure estimates for all siding and deck projects in Citrus Heights and surrounding areas."
                                        }
                                    }
                                ]
                            }
                        ]
                    })}
                </script>
            </Helmet>


            <HeroSection
                backgroundImage="/images/deck-builder3.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Citrus Heights, CA"
                subtitle="Give your Citrus Heights home a fresh exterior with custom-built decks and durable siding — designed for long-term performance in California’s climate."
                projectCount="30+ deck and siding projects completed this year across Sacramento Metro"
                city="Citrus Heights"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Browse our deck projects — crafted for California homes with a focus on strength, comfort, and clean finishes."
                highlight="DECK BUILDER"
                background="#ffffff"
                images={[
                    "/images/deck/deck-sacramento105.webp",
                    "/images/deck/deck-sacramento104.webp",
                    "/images/deck/deck-sacramento2.webp",
                    "/images/deck/deck-sacramento01.webp",
                    "/images/deck/deck-sacramento35.webp",
                    "/images/deck/deck-sacramento13.webp",
                    "/images/deck/deck-sacramento54.webp",
                    "/images/deck/deck-sacramento23.webp",
                    "/images/deck/deck-sacramento16.webp",
                    "/images/deck/deck-sacramento87.webp",
                    "/images/deck/deck-sacramento34.webp",
                    "/images/deck/deck-sacramento65.webp",
                    "/images/deck/deck-sacramento23.webp",
                    "/images/deck/deck-sacramento87.webp",
                    "/images/deck/deck-sacramento14.webp",
                    "/images/deck/deck-sacramento68.webp",
                    "/images/deck/deck-sacramento67.webp",
                    "/images/deck/deck-sacramento82.webp",
                    "/images/deck/deck-sacramento23.webp",
                    "/images/deck/deck-sacramento2.webp",
                    "/images/deck/deck-sacramento96.webp",
                ]}
            />

            <Services
                title="Exterior Remodeling Services in Citrus Heights, CA"
                subtitle="From siding replacement to custom decks, we help Citrus Heights homeowners improve curb appeal, comfort, and protection."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We design and build decks that fit Citrus Heights homes and yards — from simple backyard platforms to multi-level outdoor living spaces.",
                        image: "/images/deck11.webp",
                        link: "/cities/citrus-heights-ca/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Choose low-maintenance composite or classic wood decking. Our builds are engineered for California wind, sun, and rain.",
                        image: "/images/deck7.webp",
                        link: "/composite-decks/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "Protect your home with durable siding. We install James Hardie fiber cement and quality vinyl siding for long-lasting performance.",
                        image: "/images/remodler1.webp",
                        link: "/siding-replacement/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Refresh your home’s exterior with new windows and detailed trim work that ties everything together.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Citrus Heights"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Citrus Heights’s Trusted Deck and Siding Team"
                heroText1="Yellowstone Renovation helps Citrus Heights homeowners upgrade their exteriors with professional siding installation and carefully built decks."
                heroText2="We install James Hardie, LP SmartSide, vinyl, cedar, and metal siding — plus composite and wood decks tailored to your home and budget."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Serving Citrus Heights, Sacramento, Carmichael, Fair Oaks, and the rest of Sacramento County with complete exterior remodeling."

                deckHeroTitle="Custom Decks in Citrus Heights, CA — Built for Everyday Living"
                deckHeroText1="Enjoy more time outside with a deck built for cookouts, family gatherings, and relaxing evenings."
                deckHeroText2="From composite to pressure-treated lumber, we match the right materials to your Citrus Heights property and lifestyle."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Provide in Citrus Heights:"
                deckServices={[
                    "Custom deck design & layout planning",
                    "Trex and TimberTech composite deck installation",
                    "Cedar and pressure-treated wood decks",
                    "Covered decks, pergolas, and screened porches",
                    "Deck resurfacing and structural repairs",
                    "Stair, railing, and lighting upgrades",
                    "Permitting and inspections handled start-to-finish"
                ]}
                deckCostTitle="Deck Cost in Citrus Heights, CA"
                deckCostText="Composite decks in Citrus Heights typically range from $45–$65 per sq. ft., depending on height, layout, and railing options. Wood decks usually range from $30–$50 per sq. ft. Every project includes labor, materials, cleanup, and inspections."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}

                stylesTitle="Siding Styles Popular in Citrus Heights"
                stylesIntro="Whether you prefer a modern farmhouse look or a traditional California style, we help Citrus Heights homeowners choose siding that looks great and protects the home."
                styles={[
                    {
                        name: "Lap Siding",
                        text: "A classic, durable option that suits many Citrus Heights neighborhoods — available in fiber cement, engineered wood, and vinyl.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "Vertical siding that adds height and a fresh, modern feel — popular on newer homes and additions.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes & Shingles",
                        text: "Ideal for gables and accent walls, giving your home a warm, handcrafted appearance.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Citrus Heights"
                sidingTypesIntro="We install siding products built to handle Northern California’s heat and UV exposure, storms, and temperature swings."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Citrus Heights, CA"
                costIntro="Pricing depends on home size, material choice, and trim details. These ranges are typical for full siding projects in Citrus Heights:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.50 – $9.00 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.00 – $14.00 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.00 – $12.00 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$12.00 – $18.00 per sq. ft." },
                    { material: "Metal Siding", price: "$8.00 – $13.00 per sq. ft." },
                ]}

                extraSectionTitle="Why Citrus Heights Homeowners Choose Yellowstone Renovation"
                extraSectionText="We focus on clear communication, detailed workmanship, and clean job sites — so your project feels organized from start to finish."
                extraPoints={[
                    "⭐ Local California crew — no random subcontractors",
                    "⭐ Licensed, insured, and experienced installers",
                    "⭐ 5-year workmanship warranty on all projects",
                    "⭐ Hundreds of deck and siding projects completed in Sacramento Metro",
                    "⭐ Free, detailed, no-pressure estimates"
                ]}

                ctaTitle="Get Your Free Deck or Siding Quote in Citrus Heights"
                ctaText="Ready to update your home’s exterior? Contact Yellowstone Renovation for a free, no-obligation estimate in Citrus Heights and surrounding Sacramento County."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}
