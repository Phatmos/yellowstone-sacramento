import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import BeforeAfter from "../components/BeforeAfter";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import SEO from "../components/SEO";
import QuoteSection from "../components/QuoteSection";
import ScrollToTop from "../components/ScrollToTop";
import "../styles/ScrollToTop.css";
import MainSectionSideBar from "../components/MainSectionSideBar";
import DeckBuildingSteps from "../components/DeckBuildingSteps";



export default function IndexPage() {
    return (
        <Layout>
            {/* ✅ SEO Core */}
            <SEO
                title="Yellowstone Renovation — Expert Remodeling, Siding & Deck Builders in California"
                description="Transform your home with Yellowstone Renovation — specialists in siding, decks, kitchens, and complete exterior remodeling across Sacramento, Elk Grove, and Sacramento Metro."
                pathname="/"
                image="https://sacramento.yellowstonerenovation.com/images/house-bg.webp"
            />

            {/* ✅ Extra Meta / Schema */}
            <Helmet>
                {/* ======================= */}
                {/* 🔥 ADVANCED COMBINED SCHEMA */}
                {/* ======================= */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            /* -------------------------------------------------- */
                            /* 1️⃣ Local Business Schema (Primary) */
                            /* -------------------------------------------------- */
                            {
                                "@type": "HomeAndConstructionBusiness",
                                "@id": "https://sacramento.yellowstonerenovation.com/#localbusiness",
                                "name": "Yellowstone Renovation",
                                "url": "https://sacramento.yellowstonerenovation.com/",
                                "logo": "https://sacramento.yellowstonerenovation.com/icons/logo.webp",
                                "image": "https://sacramento.yellowstonerenovation.com/images/house-bg.webp",
                                "telephone": "916-571-6919",
                                "priceRange": "$$",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Elk Grove",
                                    "addressRegion": "CA",
                                    "addressCountry": "US"
                                },
                                "serviceType": [
                                    "Deck Construction",
                                    "Exterior Remodeling",
                                    "Siding Installation",
                                    "Kitchen Remodeling",
                                    "Bathroom Remodeling"
                                ],
                                "areaServed": [
                                    "Sacramento, CA",
                                    "Elk Grove, CA",
                                    "Roseville, CA",
                                    "Folsom, CA",
                                    "Citrus Heights, CA"
                                ],
                                "sameAs": [
                                    "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                                    "https://www.instagram.com/yellowstone_renovation/",
                                    "https://maps.google.com/?q=Yellowstone+Renovation+Elk Grove+CA"
                                ]
                            },

                            /* -------------------------------------------------- */
                            /* 2️⃣ Organization Schema */
                            /* -------------------------------------------------- */
                            {
                                "@type": "Organization",
                                "@id": "https://sacramento.yellowstonerenovation.com/#organization",
                                "name": "Yellowstone Renovation",
                                "url": "https://sacramento.yellowstonerenovation.com/",
                                "logo": "https://sacramento.yellowstonerenovation.com/icons/logo.webp",
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": "916-571-6919",
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

                            /* -------------------------------------------------- */
                            /* 3️⃣ Product Schema — ⭐ Enables Review Stars */
                            /* -------------------------------------------------- */
                            {
                                "@type": "Product",
                                "@id": "https://sacramento.yellowstonerenovation.com/#product",
                                "name": "Yellowstone Renovation Remodeling Services",
                                "image": {
                                    "@type": "ImageObject",
                                    "url": "https://sacramento.yellowstonerenovation.com/images/house-bg.webp",
                                    "width": 1200,
                                    "height": 800
                                },
                                "description": "Professional exterior remodeling, siding installation, and custom deck construction across Sacramento Metro.",
                                "brand": {
                                    "@type": "Brand",
                                    "name": "Yellowstone Renovation"
                                },
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "reviewCount": "87"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "priceCurrency": "USD",
                                    "price": "1",
                                    "availability": "https://schema.org/InStock",
                                    "url": "https://sacramento.yellowstonerenovation.com/"
                                }
                            },

                            /* -------------------------------------------------- */
                            /* 4️⃣ Service Schema – Deck Page Targeting */
                            /* -------------------------------------------------- */
                            {
                                "@type": "Service",
                                "@id": "https://sacramento.yellowstonerenovation.com/#deckservice",
                                "serviceType": [
                                    "Custom Deck Construction",
                                    "Deck Design",
                                    "Backyard Outdoor Living",
                                    "Composite & Wood Decks"
                                ],
                                "provider": {
                                    "@id": "https://sacramento.yellowstonerenovation.com/#localbusiness"
                                },
                                "areaServed": [
                                    "Sacramento, CA",
                                    "Elk Grove, CA",
                                    "Roseville, CA",
                                    "Citrus Heights, CA",
                                    "Folsom, CA"
                                ],
                                "image": "https://sacramento.yellowstonerenovation.com/images/deck-builder.webp",
                                "url": "https://sacramento.yellowstonerenovation.com/custom-decks/"
                            },

                            /* -------------------------------------------------- */
                            /* 5️⃣ FAQ Schema — Appears as dropdown FAQ in Google */
                            /* -------------------------------------------------- */
                            {
                                "@type": "FAQPage",
                                "@id": "https://sacramento.yellowstonerenovation.com/#faq",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "How much does a custom deck cost in Sacramento?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Custom decks typically range from $45–$95 per sq.ft depending on design complexity, elevation, materials, and railing choices."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do you design decks with lighting, seating, and grill stations?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes — we offer complete deck design including outdoor kitchens, pergolas, privacy walls, built-in seating, and LED lighting."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do you offer free design consultations?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes — free estimates with layout options, material samples, and optional 3D design previews."
                                        }
                                    }
                                ]
                            }
                        ]
                    })}
                </script>
            </Helmet>


            {/* ✅ Page Content Only (Header/Footer handled by Layout) */}
            <HeroSection
                backgroundImage="/images/deck-builder13.webp"
                customerImage="/images/customer-hero1.png"
                city="Sacramento"
                projectCount="87+ projects completed in past year"
            />

            <AboutSection />
            <ScrollToTop />
            <BeforeAfter
                title="Deck Before & After Transformations"
                description="Watch how we replace old, unsafe decks with beautiful, long-lasting outdoor spaces perfect for relaxing, grilling, and entertaining. Built strong for California weather."
                buttonText="See More Deck Projects"
                buttonLink="/projects"
                accentColor="#0a923d"
                images={[
                    {
                        before: "/images/deckafter3.webp",
                        after: "/images/deckbefore3.webp",
                    },
                    {
                        before: "/images/deckafter1.webp",
                        after: "/images/deckbefore1.webp",
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
            <DeckBuildingSteps />

            <TestimonialsSection />

            <QuoteSection />
        </Layout>
    );
}
