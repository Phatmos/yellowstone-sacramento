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

export default function ElkGroveCA() {
    return (
        <Layout>
            <Helmet>
                {/* ✅ Local Elk Grove Keywords */}
                <meta
                    name="keywords"
                    content="Deck Builder Elk Grove CA, Siding Contractor Elk Grove CA, James Hardie Elk Grove, Composite Decks Sacramento County, Vinyl Siding Elk Grove"
                />

                {/* ✅ Social Sharing — Facebook / iMessage / LinkedIn */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Elk Grove, CA | Exterior Builder You Can Count On"
                />
                <meta
                    property="og:description"
                    content="Trusted deck and siding contractor in Elk Grove, CA. Yellowstone Renovation installs composite decks, wood decks, and premium siding built for California weather. Free estimates in Sacramento County."
                />
                <meta
                    property="og:url"
                    content="https://sacramento.yellowstonerenovation.com/cities/elk-grove-ca/"
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
                    content="Deck and Siding Contractor in Elk Grove, CA | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Upgrade your Elk Grove home with durable siding and custom-built decks. Exterior builder you can trust — free quotes across Sacramento County."
                />
                <meta
                    name="twitter:image"
                    content="https://sacramento.yellowstonerenovation.com/images/remodler1.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Elk Grove, CA | Exterior Builder You Can Trust"
                description="Yellowstone Renovation provides professional siding installation and custom deck construction in Elk Grove, CA. We install composite, wood, vinyl, and James Hardie siding — designed for California’s weather. Free estimates across Sacramento County."
                pathname="/cities/elk-grove-ca/"
                image="https://sacramento.yellowstonerenovation.com/images/remodler1.webp"
            />

            <Helmet>

                {/* ⭐ LOCAL BUSINESS — Elk Grove CA */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "@id": "https://sacramento.yellowstonerenovation.com/#localbusiness-elk-grove",
                        "name": "Yellowstone Renovation",
                        "url": "https://sacramento.yellowstonerenovation.com",
                        "image": "https://sacramento.yellowstonerenovation.com/images/remodler1.webp",
                        "logo": "https://sacramento.yellowstonerenovation.com/icons/logo.webp",
                        "telephone": "(916) 571-6919",
                        "priceRange": "$$",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Elk Grove",
                            "addressRegion": "CA",
                            "addressCountry": "US"
                        },
                        "areaServed": [
                            "Elk Grove, CA",
                            "Laguna, CA",
                            "Sacramento County, CA",
                            "Sacramento, CA"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Elk Grove+CA"
                        ],
                        "serviceType": [
                            "Vinyl Siding Installation",
                            "James Hardie Fiber Cement",
                            "Composite Decks",
                            "Wood Decks",
                            "Replacement Windows",
                            "Exterior Repairs"
                        ],
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": 87
                        }
                    })}
                </script>

                {/* ⭐ ORGANIZATION SCHEMA */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "@id": "https://sacramento.yellowstonerenovation.com/#organization-elk-grove",
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
                    })}
                </script>

                {/* ⭐ PRODUCT SCHEMA — RATING SHOWS IN GOOGLE */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "@id": "https://sacramento.yellowstonerenovation.com/#product-elk-grove",
                        "name": "Siding & Deck Services — Elk Grove, CA",
                        "description": "Professional siding installation, deck building, and exterior renovation services in Elk Grove and Sacramento County.",
                        "image": "https://sacramento.yellowstonerenovation.com/images/remodler1.webp",
                        "brand": {
                            "@type": "Brand",
                            "name": "Yellowstone Renovation"
                        },
                        "sku": "SERVICE-ELK GROVE-001",
                        "mpn": "SERVICE-ELK GROVE-001",
                        "url": "https://sacramento.yellowstonerenovation.com",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": 87
                        },
                        "offers": {
                            "@type": "Offer",
                            "url": "https://sacramento.yellowstonerenovation.com",
                            "priceCurrency": "USD",
                            "price": "1",
                            "availability": "https://schema.org/InStock"
                        }
                    })}
                </script>

                {/* ⭐ FAQ SCHEMA — Elk Grove CA */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does siding cost in Elk Grove?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "In Elk Grove, vinyl siding typically ranges from $7–$12 per sq.ft. installed. James Hardie siding usually runs $14–$21 per sq.ft. depending on trim, layout, and home size."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you work in Laguna and Sacramento County?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we serve Elk Grove, Laguna, Vineyard, and all of Sacramento County with siding installation, deck building, and exterior remodeling."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are estimates free in Elk Grove?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we provide free, no-obligation estimates for all siding and deck projects throughout Elk Grove and Sacramento County."
                                }
                            }
                        ]
                    })}
                </script>

            </Helmet>

            <HeroSection
                backgroundImage="/images/deck-builder3.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Elk Grove, CA"
                subtitle="Upgrade your Elk Grove home with custom-built decks and durable siding — designed for long-term performance and curb appeal in California’s weather."
                projectCount="32+ deck and siding projects completed this year across Sacramento Metro"
                city="Elk Grove"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Browse our deck projects — uniquely crafted for California homes. Composite, wood, and custom designs built to last."
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
                title="Exterior Remodeling Services in Elk Grove, CA"
                subtitle="From decks to siding, we deliver clean workmanship, honest communication, and long-lasting results."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We build strong, beautiful decks tailored to Elk Grove homes. From simple backyard platforms to multi-level outdoor spaces — built to last.",
                        image: "/images/deck11.webp",
                        link: "/cities/elk-grove-ca/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Choose composite for low maintenance or wood for natural beauty. Our decks withstand Northern California sun, winter rain, and seasonal changes.",
                        image: "/images/deck7.webp",
                        link: "/composite-decks/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "Protect your home with durable siding. We install James Hardie fiber cement and high-quality vinyl siding for long-term performance.",
                        image: "/images/remodler1.webp",
                        link: "/siding-replacement/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Improve curb appeal and energy efficiency with new windows and precision exterior trim work.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Elk Grove"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Elk Grove’s Trusted Deck and Siding Specialists"
                heroText1="Yellowstone Renovation helps Elk Grove homeowners upgrade their exteriors with professional siding installation and beautifully crafted decks."
                heroText2="We install James Hardie, LP SmartSide, vinyl, cedar, and metal siding — plus Trex and TimberTech composite decks built for strength and beauty."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Serving Elk Grove, Laguna, Vineyard, and all of Sacramento County — from full siding replacement to outdoor living transformations."

                deckHeroTitle="Custom Decks in Elk Grove, CA — Built for Comfort & Longevity"
                deckHeroText1="A well-designed deck adds valuable outdoor living space for relaxing, cooking out, and spending time with family."
                deckHeroText2="We offer composite and wood options, tailored for Elk Grove homes and built to last."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Provide in Elk Grove:"
                deckServices={[
                    "Custom deck design & layout planning",
                    "Trex and TimberTech composite deck installation",
                    "Cedar and pressure-treated wood decks",
                    "Covered decks, pergolas, and screened porches",
                    "Deck resurfacing and structural repairs",
                    "Stair, railing, and lighting upgrades",
                    "Permitting and inspections handled start-to-finish"
                ]}
                deckCostTitle="Deck Cost in Elk Grove, CA"
                deckCostText="Composite decks in Elk Grove typically cost $45–$65 per sq. ft., depending on layout and height. Wood decks range from $30–$50 per sq. ft. Every project includes materials, labor, cleanup, and inspections."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}

                stylesTitle="Siding Styles Popular in Elk Grove"
                stylesIntro="From modern farmhouse styles to traditional California homes, we help Elk Grove homeowners choose siding designs that elevate curb appeal and provide long-term durability."
                styles={[
                    {
                        name: "Lap Siding",
                        text: "A timeless and durable style ideal for most Elk Grove homes. Available in fiber cement, vinyl, and engineered wood.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "A vertical modern style that adds character and depth. Popular in newer Sacramento County builds.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes & Shingles",
                        text: "Perfect for accent areas, gables, or full façades — offering a warm, handcrafted appearance.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Elk Grove"
                sidingTypesIntro="We install top-quality siding materials backed by strong warranties and clean craftsmanship."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Elk Grove, CA"
                costIntro="Pricing depends on home size, trim options, material, and layout. These are typical siding price ranges for Elk Grove:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.50 – $9.00 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.00 – $14.00 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.00 – $12.00 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$12.00 – $18.00 per sq. ft." },
                    { material: "Metal Siding", price: "$8.00 – $13.00 per sq. ft." },
                ]}

                extraSectionTitle="Why Elk Grove Residents Choose Yellowstone Renovation"
                extraSectionText="We provide honest pricing, clean workmanship, and reliable communication — earning trust across Elk Grove and Sacramento County."
                extraPoints={[
                    "⭐ Local California crew — no random subcontractors",
                    "⭐ Licensed, insured, and highly experienced installers",
                    "⭐ 5-year workmanship warranty on all projects",
                    "⭐ Over 400 exterior projects completed in Sacramento Metro",
                    "⭐ Free, detailed, no-pressure estimates"
                ]}

                ctaTitle="Get Your Free Deck or Siding Quote in Elk Grove"
                ctaText="Ready to transform your home’s exterior? Contact Yellowstone Renovation for a free estimate — serving Elk Grove, Laguna, and all Sacramento County."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}
