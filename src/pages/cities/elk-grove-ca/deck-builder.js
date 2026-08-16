import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../../components/Layout";
import AboutSection from "../../../components/AboutSection";
import BeforeAfter from "../../../components/BeforeAfter";
import GallerySection from "../../../components/GallerySection";
import TestimonialsSection from "../../../components/TestimonialsSection";
import SEO from "../../../components/SEO";
import QuoteSection from "../../../components/QuoteSection";
import ScrollToTop from "../../../components/ScrollToTop";
import "../../../styles/ScrollToTop.css";
import DeckBuildingSteps from "../../../components/DeckBuildingSteps";
import MainSectionSideBar from "../../../components/MainSectionSideBar";
import Hero2 from "../../../components/Hero2";

export default function ElkGroveDeckBuilder() {
    return (
        <Layout>

            {/* SEO */}
            <SEO
                title="Deck Builder in Elk Grove CA — Composite & Wood Decks | Yellowstone Renovation"
                description="Top-rated deck builders in Elk Grove, CA. Yellowstone Renovation installs composite and wood decks engineered for strength, beauty, and long-term durability. Free estimates across Sacramento County."
                pathname="/cities/elk-grove-ca/deck-builder"
                image="https://sacramento.yellowstonerenovation.com/images/deck-builder8.webp"
            />

            <Helmet>
                {/* ==========================
        META TAGS
    =========================== */}
                <meta
                    name="keywords"
                    content="deck builder Elk Grove CA, composite deck Elk Grove, wood deck installation Sacramento County, deck repair Elk Grove CA, deck replacement Elk Grove"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Deck Builder in Elk Grove CA | Yellowstone Renovation" />
                <meta
                    property="og:description"
                    content="Custom-built decks in Elk Grove, California — from modern composite systems to beautifully crafted wood structures. Get a fast, free estimate today."
                />
                <meta
                    property="og:image"
                    content="https://sacramento.yellowstonerenovation.com/images/deck-builder8.webp"
                />
                <meta
                    property="og:url"
                    content="https://sacramento.yellowstonerenovation.com/cities/elk-grove-ca/deck-builder"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Elk Grove CA Deck Builder | Composite & Wood Deck Construction"
                />
                <meta
                    name="twitter:description"
                    content="Build your dream outdoor space with Yellowstone Renovation — the trusted deck contractor serving Elk Grove and Sacramento County."
                />
                <meta
                    name="twitter:image"
                    content="https://sacramento.yellowstonerenovation.com/images/deck-builder8.webp"
                />

                {/* ==========================
        STRUCTURED DATA (JSON-LD)
    =========================== */}

                {/* ⭐ LOCAL BUSINESS SCHEMA (Elk Grove) */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "@id": "https://sacramento.yellowstonerenovation.com/#localbusiness-elk-grove",
                        "name": "Yellowstone Renovation",
                        "url": "https://sacramento.yellowstonerenovation.com",
                        "logo": "https://sacramento.yellowstonerenovation.com/icons/logo.webp",
                        "image": "https://sacramento.yellowstonerenovation.com/images/deck-builder8.webp",
                        "telephone": "(916) 571-6919",
                        "priceRange": "$$",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Elk Grove",
                            "addressRegion": "CA",
                            "addressCountry": "US"
                        },
                        "serviceType": [
                            "Deck Construction",
                            "Composite Deck Installation",
                            "Wood Deck Builder",
                            "Deck Repair",
                            "Deck Replacement"
                        ],
                        "areaServed": [
                            "Elk Grove, CA",
                            "Laguna, CA",
                            "Sheldon, CA",
                            "Vineyard, CA",
                            "Sacramento County, CA"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Elk Grove+CA"
                        ],
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": 87
                        }
                    })}
                </script>

                {/* ⭐ PRODUCT SCHEMA — Enables STAR Ratings */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "@id": "https://sacramento.yellowstonerenovation.com/#product-elk-grove",
                        "name": "Deck Building Services — Elk Grove, CA",
                        "description":
                            "Professional composite and wood deck installation in Elk Grove and Sacramento County. Custom layouts, strong framing, and long-lasting materials.",
                        "image": "https://sacramento.yellowstonerenovation.com/images/deck-builder8.webp",
                        "brand": {
                            "@type": "Brand",
                            "name": "Yellowstone Renovation"
                        },
                        "sku": "DECK-ELK GROVE-001",
                        "mpn": "DECK-ELK GROVE-001",
                        "url": "https://sacramento.yellowstonerenovation.com/cities/elk-grove-ca/deck-builder",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": 87
                        },
                        "offers": {
                            "@type": "Offer",
                            "priceCurrency": "USD",
                            "price": "1",
                            "availability": "https://schema.org/InStock",
                            "url": "https://sacramento.yellowstonerenovation.com/cities/elk-grove-ca/deck-builder"
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
                        }
                    })}
                </script>

                {/* ⭐ FAQ SCHEMA — Elk Grove */}
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
                                    "text":
                                        "In Elk Grove, vinyl siding usually ranges from $7–$12 per sq.ft. installed. James Hardie siding typically costs $14–$21 per sq.ft. depending on layout and trim options."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you work in Laguna and Sacramento County?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text":
                                        "Yes — we provide professional deck construction, siding installation, and exterior remodeling throughout Elk Grove, Laguna, Sheldon, Vineyard, and all of Sacramento County."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are estimates free in Elk Grove?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text":
                                        "Yes! We offer free, no-obligation estimates for deck building, siding installation, and exterior renovations across Elk Grove and Sacramento County."
                                }
                            }
                        ]
                    })}
                </script>

            </Helmet>


            {/* HERO */}
            <Hero2
                topText="Top-Rated Deck Builder in Elk Grove, CA"
                title="Deck Builder in Elk Grove, CA — Custom Composite & Wood Decks"
                description="Yellowstone Renovation builds strong, modern, and long-lasting decks for homeowners throughout Elk Grove and Sacramento County. Whether you prefer composite or natural wood, we deliver craftsmanship and outdoor living spaces built to last."
                backgroundImage="/images/deck/deck-sacramento1.webp"
                overlayOpacity={0.65}
                formTitle="Get a Free Deck Estimate"
                selectLabel="Select Deck Service"
                selectOptions={[
                    "Custom Deck Design & Build",
                    "Composite Decks (Trex, TimberTech)",
                    "Wood Deck Installation",
                    "Second-Story Decks",
                    "Deck Repair & Resurfacing",
                    "Covered Decks & Pergolas",
                    "Stairs & Railing Installation",
                    "Screened-In Decks & Porches",
                    "Full Backyard Deck Makeover",
                ]}
                ctaText="Get Free Quote"
            />

            <AboutSection />

            {/* BEFORE & AFTER */}
            <BeforeAfter
                title="Elk Grove Deck Transformations"
                description="Take a look at some before-and-after deck projects we've completed in Elk Grove — rebuilding damaged or aging decks into safe, modern, and beautiful outdoor spaces."
                buttonText="Explore More Projects"
                buttonLink="/projects"
                accentColor="#0a923d"
                images={[
                    { before: "/images/deckafter3.webp", after: "/images/deckbefore3.webp" },
                    { before: "/images/deckafter1.webp", after: "/images/deckbefore1.webp" },
                ]}
            />

            {/* GALLERY */}
            <GallerySection
                title="ELK GROVE DECK BUILDER GALLERY"
                subtitle="View completed deck projects designed and built for homeowners across Elk Grove and Sacramento County."
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

            <DeckBuildingSteps />
            <TestimonialsSection />

            <MainSectionSideBar
                title="Deck Builder in Elk Grove, CA — Custom Composite & Wood Decks"
                sections={[
                    {
                        heading: "Deck Builder Elk Grove CA — Quality, Craftsmanship & Outdoor Living",
                        text: `Yellowstone Renovation delivers high-quality deck construction for homeowners throughout Elk Grove, California. We specialize in creating durable outdoor living spaces that look beautiful and stand strong for years.

Our team works with both composite and natural wood deck systems. From initial design to permitting, framing, and finishing, we ensure every project is built with precision and long-term value in mind.`
                    },

                    {
                        heading: "Composite Deck Installation in Elk Grove, CA",
                        text: `Composite decking has become a top choice for Elk Grove homeowners looking for low-maintenance, long-lasting outdoor solutions. Composite boards resist moisture, fading, insects, and warping — ideal for California weather.

We install Trex, TimberTech, and AZEK decking with clean hidden-fastener systems and moisture-protected framing. Choose from a wide range of modern textures and colors designed to complement your home.`
                    },

                    {
                        heading: "Wood Deck Builder in Elk Grove, California",
                        text: `If you love the charm and warmth of natural wood, we build premium wood decks using pressure-treated lumber, cedar, and redwood. These decks bring natural beauty and excellent value to your outdoor space.

Each wood deck is professionally sealed, reinforced, and finished, ensuring long-term durability against sun exposure, temperature changes, and daily use.`
                    },

                    {
                        heading: "Deck Replacement & Repair in Elk Grove, CA",
                        text: `Is your deck worn down, unsafe, or outdated? We provide complete deck replacement and repair services across Elk Grove and Sacramento County. Whether your deck needs stronger framing, upgraded materials, or a full rebuild, we deliver reliable restoration solutions.

From loose railings to rotted boards to structural failures — we repair and rebuild decks with quality materials and clean workmanship.`
                    },

                    {
                        heading: "Our Deck Design & Construction Process",
                        text: `Every project begins with a design consultation where we discuss your goals, layout, and preferred materials. From there, our licensed team manages all permits, structural work, decking installation, and finishing.

We maintain clear communication, organized job sites, and strict adherence to California building codes for a smooth experience from start to finish.`
                    },

                    {
                        heading: "Average Deck Cost in Elk Grove, CA",
                        text: `Here’s what Elk Grove homeowners typically invest when building a new deck:

Composite Decks: $45–$65 per sq. ft. installed  
Wood Decks: $30–$50 per sq. ft. installed  
Deck Repairs or Partial Rebuilds: about 40–60% of full replacement cost  

Pricing includes labor, materials, cleanup, and a final inspection. Contact us for a detailed quote tailored to your property.`
                    },

                    {
                        heading: "Get a Free Deck Estimate in Elk Grove, CA",
                        text: `We offer free, no-pressure on-site estimates throughout Elk Grove, Laguna, Sheldon, Vineyard, and all surrounding areas in Sacramento County.

Our team will evaluate your space, review design options, and provide a clear, written estimate tailored to your home.`
                    },

                    {
                        heading: "Decking Contractor in Elk Grove, California",
                        text: `Choosing a reliable contractor matters. Yellowstone Renovation is known for dependable scheduling, clean job sites, and work that meets or exceeds California building standards.

We create outdoor spaces that enhance home value, add comfort, and provide long-term enjoyment.`
                    },

                    {
                        heading: "Deck Installation Services in Elk Grove",
                        text: `Whether you're looking for a simple wood deck or a large composite system with upgraded railings and lighting, we customize every design to match your home and lifestyle.

Our decks are engineered for structural stability and weather resistance, providing years of safe use.`
                    },

                    {
                        heading: "Professional Deck Construction in Elk Grove, CA",
                        text: `As a licensed and insured builder, we manage each phase of construction — from design and permitting to framing, decking, railings, and final inspections.

Our decks are built to withstand Northern California heat and UV exposure, rainfall, and daily activity without compromising integrity.`
                    },

                    {
                        heading: "Working with a Local Elk Grove Deck Contractor",
                        text: `As a Sacramento Metro company, we understand local building regulations, soil conditions, and climate patterns. This local knowledge helps us build stronger and longer-lasting decks for Elk Grove homeowners.

Clear communication and dependable service define every project we complete.`
                    },

                    {
                        heading: "Choose the Best Deck Installers in Elk Grove, CA",
                        text: `Yellowstone Renovation is recognized across Sacramento County for high-quality craftsmanship, transparent pricing, and consistent 5-star customer satisfaction.

We create outdoor spaces with beautiful design, solid structure, and impressive long-term performance.`
                    },

                    {
                        heading: "Average Cost to Install a New Deck in Elk Grove",
                        text: `Most Elk Grove homeowners invest between $10,000 and $45,000 for a professional deck installation, depending on design, size, height, and selected materials.

Composite options run $45–$65 per sq. ft., while wood decks typically cost $30–$50 per sq. ft. We provide detailed estimates before construction begins.`
                    },

                    {
                        heading: "Elk Grove Wood Decks — Natural Beauty & Lasting Value",
                        text: `Wood decks create classic warmth and appeal. We use high-quality lumber with sealing and treatment to protect against Northern California’s heat and UV exposure and temperature changes, ensuring your deck stays strong and attractive.`
                    },

                    {
                        heading: "Composite Decks in Elk Grove, CA",
                        text: `Composite decks offer unbeatable durability with virtually no maintenance required. Our installations include Trex, TimberTech, and AZEK — trusted brands that resist fading, moisture, and mold for decades.`
                    },

                    {
                        heading: "Deck Builder Near Me in Elk Grove, CA",
                        text: `Searching for “deck builder near me” in Elk Grove? Yellowstone Renovation proudly serves Elk Grove, Laguna, Sheldon, Vineyard, and all of Sacramento County.

We design and build decks that increase property value, improve outdoor functionality, and provide long-lasting comfort for your home.`
                    },
                ]}

                /* SIDEBAR CONTENT */
                offers={[
                    {
                        image: "/images/deck1.webp",
                        text: "Get $1500 OFF Your New Deck Installation — Limited Time Offer",
                        button: "Claim Discount",
                        link: "/contact",
                    },
                    {
                        image: "/images/deck2.webp",
                        text: "Browse Elk Grove Deck Projects",
                        button: "View Gallery",
                        link: "/projects",
                    },
                ]}

                whyUs={[
                    "Trusted local deck builders serving Elk Grove and Sacramento County",
                    "Trex, TimberTech, and AZEK composite specialists",
                    "Custom designs built around your home and outdoor space",
                    "Licensed, insured, and reliable scheduling",
                    "Clear pricing, clean job sites, and strong warranties",
                ]}

                projects={[
                    { image: "/images/deck4.webp", title: "Elk Grove Composite Deck Build" },
                    { image: "/images/deck5.webp", title: "Wood Deck With Custom Railings" },
                    { image: "/images/deck6.webp", title: "Pergola & Deck Combo Project" },
                    { image: "/images/deck7.webp", title: "Covered Deck Extension" },
                ]}

                findUs={[
                    { name: "Yelp", rating: "4.6/5", logo: "/icons/Yelp.webp" },
                    { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
                ]}

                blog={[
                    {
                        title: "How Much Does a Deck Cost in California?",
                        date: "April 12th, 2025",
                        author: "Mark Ellison",
                        image: "/images/deck6.webp",
                    },
                    {
                        title: "Composite vs Wood Decks: A Guide for Elk Grove Homeowners",
                        date: "May 20th, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "Deck Maintenance Tips for Elk Grove Homes",
                        date: "June 10th, 2025",
                        author: "Mark Ellison",
                        image: "/images/deck8.webp",
                    },
                ]}

                partners={[
                    "/icons/trex.webp",
                    "/icons/timbertech.webp",
                    "/icons/Yelp.webp"
                ]}
            />

            <QuoteSection />
            <ScrollToTop />
        </Layout>
    );
}
