import React from "react";
import Layout from "../components/Layout";
import GallerySection from "../components/GallerySection";
import Services from "../components/Services.js"
import DealerBanner from "../components/DealerBanner";
import HeroModern from "../components/HeroModern";
import MainSectionSideBar from "../components/MainSectionSideBar";
import SEO from "../components/SEO";
import BeforeAfter from "../components/BeforeAfter";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import TestimonialsSection from "../components/TestimonialsSection";
import QuoteSection from "../components/QuoteSection";
import DeckBuildingSteps from "../components/DeckBuildingSteps";
import HeroRoofingSection from "../components/HeroRoofingSection";


export default function DeckBuilderPage() {
    return (
        <Layout>
            <Helmet>
                {/* ✅ SEO Keywords */}
                <meta
                    name="keywords"
                    content="Deck builder Sacramento CA, Composite decks California, Covered decks contractor, Wood deck construction Sacramento, Outdoor living spaces Sacramento Metro"
                />

                {/* ✅ Social Media OpenGraph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Deck Builder in Sacramento, CA | Composite & Wood Decks | Free Estimates" />
                <meta property="og:description" content="Custom decks built for California weather — wood, composite, elevated & covered decks. 4.9★ rated deck contractor. Call for a fast quote!" />
                <meta property="og:image" content="https://sacramento.yellowstonerenovation.com/images/deck1.webp" />
                <meta property="og:url" content="https://sacramento.yellowstonerenovation.com/decking/" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                {/* ✅ Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Top Deck Builder in Sacramento, CA — Custom Composite & Wood Decks" />
                <meta name="twitter:description" content="Design + build services for backyard decks, covered patios & outdoor living upgrades. Free estimates!" />
                <meta name="twitter:image" content="https://sacramento.yellowstonerenovation.com/images/deck1.webp" />
            </Helmet>

            {/* ✅ Primary SEO Component */}
            <SEO
                title="Deck Builder in Sacramento, CA | Composite + Wood Deck Construction"
                description="Transform your backyard with a custom-built deck designed for comfort, style & durability. Expert builders serving Sacramento, Elk Grove, Roseville, Citrus Heights & Folsom."
                pathname="/decking/"
                image="https://sacramento.yellowstonerenovation.com/images/deck1.webp"
            />

            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            /* ------------------------------------------------------
                               LOCAL BUSINESS
                            ------------------------------------------------------ */
                            {
                                "@type": "LocalBusiness",
                                "@id": "https://sacramento.yellowstonerenovation.com/#localbusiness",
                                "name": "Yellowstone Renovation",
                                "url": "https://sacramento.yellowstonerenovation.com",
                                "logo": "https://sacramento.yellowstonerenovation.com/icons/logo.webp",
                                "image": "https://sacramento.yellowstonerenovation.com/images/og-home.jpg",
                                "telephone": "(916) 571-6919",
                                "priceRange": "$$",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Elk Grove",
                                    "addressRegion": "CA",
                                    "addressCountry": "US"
                                }
                            },

                            /* ------------------------------------------------------
                               ORGANIZATION
                            ------------------------------------------------------ */
                            {
                                "@type": "Organization",
                                "@id": "https://sacramento.yellowstonerenovation.com/#organization",
                                "name": "Yellowstone Renovation",
                                "url": "https://sacramento.yellowstonerenovation.com/",
                                "logo": "https://sacramento.yellowstonerenovation.com/icons/logo.webp",
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": "(916) 571-6919",
                                    "contactType": "customer support"
                                },
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Elk Grove",
                                    "addressRegion": "CA",
                                    "addressCountry": "US"
                                }
                            },

                            /* ------------------------------------------------------
                               MULTIPLE PRODUCT SCHEMA (GVD STYLE — 4 items)
                            ------------------------------------------------------ */
                            {
                                "@type": "Product",
                                "name": "Yellowstone Renovation",
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "reviewCount": "87"
                                }
                            },
                            {
                                "@type": "Product",
                                "name": "Yellowstone Renovation Deck Building",
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "reviewCount": "87"
                                }
                            },
                            {
                                "@type": "Product",
                                "name": "Yellowstone Renovation Siding Services",
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "reviewCount": "87"
                                }
                            },
                            {
                                "@type": "Product",
                                "name": "Yellowstone Renovation & Remodeling",
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "reviewCount": "87"
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>


            <HeroRoofingSection
                background="/images/deck/deck-sacramento39.webp"
                title="Top Deck Builder in Sacramento, CA"
                subtitle="From custom wood decks to modern composite designs — Yellowstone Renovation builds strong, beautiful outdoor spaces made to last. Expert craftsmanship, clean installations, and trusted 4.9★ service across Sacramento Metro."
                ratingText="⭐⭐⭐⭐⭐ 4.9 | #1 Local Deck Experts"
                placeholder="Enter your ZIP code"
                buttonText="Get a quick quote"
            />

            <Services
                title="Deck & Outdoor Services"
                subtitle="Build your dream outdoor space — durable, stylish, and made to enjoy every season."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Decks",
                        description:
                            "From design to build — we craft beautiful, long-lasting decks that fit your lifestyle.",
                        image: "/images/deck11.webp",
                        link: "/custom-decks",
                    },
                    {
                        title: "Composite Decking",
                        description:
                            "Low-maintenance, fade-resistant composite decks with a sleek, modern look.",
                        image: "/images/deck7.webp",
                        link: "/composite-decks",
                    },
                    {
                        title: "Wood Decks",
                        description:
                            "Natural wood decks with rich textures and timeless appeal, built with expert precision.",
                        image: "/images/deck-builder20.webp",
                        link: "/wood-decks",
                    },
                    {
                        title: "Pergolas & Railings",
                        description:
                            "Add elegance and shade to your outdoor living area with custom pergolas and railings.",
                        image: "/images/deck-builder6.webp",
                        link: "/contact",
                    },
                ]}
            />
            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="From custom wood decks to composite installations — explore our best outdoor transformations"
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
            <DealerBanner
                title="Complete Service Premier Deck Builders"
                highlight="Premier Deck Builders"
                description="When you choose our all-in-one deck building service, you’re not just getting a deck — you’re investing in a complete outdoor transformation. From selecting premium, durable materials to expert design and flawless craftsmanship, we handle every step of the process"
                backgroundColor="#ffffff"
                highlightColor="#247704"
            />
            <BeforeAfter
                title="Deck Before & After Transformations"
                description="Watch how we replace old, unsafe decks with beautiful, long-lasting outdoor spaces perfect for relaxing, grilling, and entertaining. Built strong for California weather."
                buttonText="See More Deck Projects"
                buttonLink="/projects"
                accentColor="#0a923d"
                images={[
                    {
                        before: "/images/deckafter3.webp",
                        after: "/images/deckbefore3.webp"
                    },
                    {
                        before: "/images/deckafter1.webp",
                        after: "/images/deckbefore1.webp"
                    }
                ]}
            />
            <MainSectionSideBar
                title="Deck builder in Sacramento, CA"
                sections={[
                    { heading: "Deck Builder in Sacramento, CA — Custom Outdoor Living Experts", text: `Yellowstone Renovation is the leading deck builder in Sacramento CA offering professional deck installation, replacement, and repair services for homeowners throughout Sacramento Metro. We create durable, stylish outdoor living spaces using composite, wood, and PVC materials engineered to withstand California’s climate. Our team specializes in custom deck construction, multi-level decks, and complete backyard transformations. Every deck we build is designed for comfort, strength, and long-term value. We handle everything from design and permits to installation and finishing, ensuring every detail meets our quality standards. Our decks enhance property value, add usable space, and bring beauty and relaxation to your home year-round. When searching for “deck builder near me in Sacramento CA,” trust Yellowstone Renovation for craftsmanship, reliability, and a result you’ll love.` },
                    { heading: "Custom Deck Installation Sacramento CA", text: `Our Sacramento deck installation services combine design creativity and precise construction. Each deck is custom-built to fit your home’s layout and style while maximizing outdoor functionality. We work closely with homeowners to design decks that match both modern and traditional homes, using materials like composite, cedar, and pressure-treated wood. Whether you want a wraparound deck, pool deck, or rooftop terrace, our installation process ensures flawless alignment, clean edges, and lasting strength. Every component—from railing posts to joist spacing—is engineered to local building codes. With professional project management, transparent pricing, and efficient scheduling, we deliver exceptional results without delays or hidden costs.` },
                    { heading: "Composite Decking Installation in Sacramento CA", text: `Composite decking is the top choice for homeowners who want low maintenance and lasting durability. Our composite deck systems are resistant to rot, mold, fading, and warping, making them perfect for hot, dry Sacramento summers. These decks maintain color and texture for decades without sanding, sealing, or staining. We offer high-quality materials from brands like Trex, TimberTech, and AZEK to guarantee performance and visual appeal. Composite decks come in multiple finishes that mimic real wood, offering a clean, modern look while being eco-friendly and safe for families and pets. If you want a long-term investment with minimal upkeep, composite decking is ideal for your Sacramento home.` },
                    { heading: "Wood Deck Builder in Sacramento CA", text: `Wood decks bring warmth, natural beauty, and timeless charm. We offer installation using cedar, redwood, and pressure-treated lumber designed to resist moisture, termites, and decay. Our wood decks are hand-finished and sealed for long-term protection and easy maintenance. Whether you want a rustic cabin feel or a sleek contemporary design, wood remains one of the most customizable materials available. We also provide annual maintenance services to keep your wood deck looking beautiful year after year. Each project is carefully planned and built to deliver reliable performance and lasting comfort.` },
                    { heading: "Deck Replacement and Remodeling Services", text: `If your old deck is unsafe or outdated, Yellowstone Renovation provides complete deck replacement in Sacramento CA. We remove existing structures, inspect foundations, and rebuild with stronger, more efficient framing and updated materials. Our remodeling services allow you to upgrade from wood to composite or add new features like built-in seating, steps, or privacy panels. We ensure your new deck meets all modern building requirements while improving comfort and style. A well-executed deck replacement adds curb appeal, increases resale value, and enhances your home’s overall usability.` },
                    { heading: "Multi-Level and Custom Deck Designs", text: `Our team specializes in multi-level decks and complex outdoor structures. We design and build decks that seamlessly connect to patios, balconies, and outdoor kitchens. Multi-level decks add depth and dimension to your property, providing distinct zones for lounging, dining, and entertainment. Using advanced 3D visualization and structural planning, we ensure a perfect fit with your home’s exterior. We also integrate lighting, railing systems, and pergolas for a cohesive, modern outdoor experience. Every design is unique, functional, and tailored to your space.` },
                    { heading: "Outdoor Living Solutions and Add-Ons", text: `Yellowstone Renovation turns simple decks into complete outdoor living areas. We install pergolas, gazebos, stairs, built-in benches, and custom railing systems that elevate usability and comfort. Our experts can also integrate LED lighting, ceiling fans, privacy screens, and weatherproof storage. These additions make your outdoor area ideal for relaxation and gatherings while maintaining visual harmony with your home. We focus on durability, precision, and detail to ensure every element performs beautifully through every season.` },
                    { heading: "Why Choose Yellowstone Renovation Deck Builders Sacramento CA", text: `Our company stands out through experience, transparency, and genuine commitment to quality. We are fully licensed, insured, and locally operated, serving Sacramento, Elk Grove, Roseville, Folsom, and Rocklin. Our clients appreciate our clear communication, fair pricing, and clean job sites. We use only high-grade materials and skilled craftsmen to guarantee structural integrity and flawless results. Hundreds of satisfied homeowners have trusted Yellowstone Renovation for projects that combine craftsmanship, reliability, and beauty. When you search “deck contractor Sacramento CA,” our name stands among the top because we deliver excellence every time.` },
                    { heading: "Schedule Your Free Deck Consultation in Sacramento CA", text: `Ready to enhance your home with a new deck? Contact Yellowstone Renovation today for a free consultation and estimate. Our team will guide you through every stage—from material selection and budgeting to final walkthrough. We pride ourselves on delivering projects on time, on budget, and beyond expectations. Call now or request an online quote to start your deck project with Sacramento’s most trusted builders. Experience the comfort, elegance, and value that only Yellowstone Renovation can deliver for your home.` }
                ]}

                offers={[
                    {
                        image: "/images/deck1.webp",
                        text: "Get $1500 OFF Your New Deck Installation — Limited Time Offer",
                        button: "Claim Discount",
                        link: "/contact",
                    },
                    {
                        image: "/images/deck2.webp",
                        text: "Explore Over 20 Completed Deck Projects in Sacramento",
                        button: "View Gallery",
                        link: "/projects",
                    },
                ]}
                whyUs={[
                    "Expert deck builders serving Sacramento and Sacramento Metro",
                    "Custom designs to fit your home and lifestyle",
                    "Top-quality materials — composite, wood, or hybrid options",
                    "Licensed, insured, and trusted by local homeowners",
                    "Fast, clean installations with no delays or hidden costs",
                ]}
                projects={[
                    { image: "/images/deck4.webp", title: "Backyard Deck" },
                    { image: "/images/deck5.webp", title: "Luxury Patio" },
                    { image: "/images/deck6.webp", title: "Composite Steps" },
                    { image: "/images/deck7.webp", title: "Wood Rail Deck" },
                ]}
                findUs={[
                    { name: "Yelp", rating: "4.6/5", logo: "/icons/Yelp.webp" },
                    { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
                ]}
                blog={[
                    {
                        title: "Choosing the Right Deck Material for California Weather",
                        date: "April 12th, 2025",
                        author: "Vasyl",
                        image: "/images/deck6.webp",
                    },
                    {
                        title: "Top 5 Deck Design Ideas for Sacramento Homes",
                        date: "May 20th, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "The Long-Term Value of Adding a Custom Deck",
                        date: "June 5th, 2025",
                        author: "Vasyl",
                        image: "/images/deck8.webp",
                    },
                ]}
                partners={["/icons/jameshardie.webp", "/icons/Yelp.webp"]}
            />

            <TestimonialsSection />
            <DeckBuildingSteps />
            <QuoteSection />
        </Layout>
    );
}
