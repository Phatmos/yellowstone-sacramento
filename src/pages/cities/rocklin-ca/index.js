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

export default function RocklinKY() {
    return (
        <Layout>
            <Helmet>
                {/* ✅ Local Rocklin Keywords */}
                <meta
                    name="keywords"
                    content="Deck and Siding Contractor Rocklin CA, Deck Builder Rocklin CA, Siding Installation Rocklin, James Hardie Rocklin CA, Vinyl Siding Placer County, Exterior Builder Rocklin"
                />

                {/* ✅ Social Sharing */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Rocklin, CA | Exterior Builder You Can Trust"
                />
                <meta
                    property="og:description"
                    content="Trusted deck and siding contractor in Rocklin, CA — Yellowstone Renovation installs composite decks, wood decks, and premium siding built for California weather. Free estimates in Placer County."
                />
                <meta
                    property="og:url"
                    content="https://sacramento.yellowstonerenovation.com/cities/rocklin-ca/"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />
                <meta
                    property="og:image"
                    content="https://sacramento.yellowstonerenovation.com/images/remodler1.webp"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Deck and Siding Contractor in Rocklin, CA | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Upgrade your Rocklin home with durable siding and custom-built decks. Exterior builder you can trust — free quotes across Placer County."
                />
                <meta
                    name="twitter:image"
                    content="https://sacramento.yellowstonerenovation.com/images/remodler1.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Rocklin, CA | Exterior Builder You Can Trust"
                description="Yellowstone Renovation installs composite decks, wood decks, vinyl siding, and James Hardie siding in Rocklin, CA. Trusted exterior contractor serving all of Placer County. Free onsite estimates."
                pathname="/cities/rocklin-ca/"
                image="https://sacramento.yellowstonerenovation.com/images/remodler1.webp"
            />

            <Helmet>
                {/* Local Business Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Yellowstone Renovation",
                        "url": "https://sacramento.yellowstonerenovation.com",
                        "image": "https://sacramento.yellowstonerenovation.com/images/remodler1.webp",
                        "logo": "https://sacramento.yellowstonerenovation.com/icons/logo.webp",
                        "telephone": "916-571-6919",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Rocklin",
                            "addressRegion": "CA",
                            "addressCountry": "US"
                        },
                        "areaServed": [
                            "Rocklin, CA",
                            "Roseville, CA",
                            "Loomis, CA",
                            "Placer County, CA"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Rocklin+CA"
                        ],
                        "serviceType": [
                            "Vinyl Siding Installation",
                            "James Hardie Fiber Cement",
                            "Composite Decks",
                            "Wood Decks",
                            "Replacement Windows",
                            "Exterior Repairs"
                        ]
                    })}
                </script>

                {/* Rocklin FAQ Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does siding cost in Rocklin?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "In Rocklin, vinyl siding usually ranges $8–$13 per sq.ft. installed. James Hardie fiber cement siding costs $14–$22 per sq.ft. depending on trim and home size."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you serve Roseville and Loomis?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we provide siding installation, deck construction, and exterior remodeling across Rocklin, Roseville, Loomis, and all of Placer County."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer free estimates in Placer County?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — Yellowstone Renovation offers free onsite estimates for siding, decks, windows, and exterior renovations throughout Placer County."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <HeroSection
                backgroundImage="/images/deck-builder3.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Rocklin, CA"
                subtitle="Upgrade your Rocklin home with professionally built decks and long-lasting siding — crafted for curb appeal, comfort, and California weather."
                projectCount="19+ deck and siding projects completed this year in Sacramento Metro"
                city="Rocklin"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Explore recently completed deck projects — built strong for California homeowners. Composite, wood, and custom designs crafted with precision."
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
                title="Exterior Remodeling Services in Rocklin, CA"
                subtitle="From deck construction to premium siding, we provide complete exterior remodeling solutions tailored for Rocklin and Placer County."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We design and build strong, beautiful decks that fit the style of Rocklin homes. From basic platforms to large outdoor living spaces — we build it all.",
                        image: "/images/deck11.webp",
                        link: "/cities/rocklin-ca/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Choose low-maintenance composite or classic wood decking. Built to withstand California moisture, storms, and temperature changes.",
                        image: "/images/deck7.webp",
                        link: "/composite-decks/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "High-quality siding that protects your home and boosts curb appeal. We install James Hardie fiber cement and durable vinyl siding designed for long-term performance.",
                        image: "/images/remodler1.webp",
                        link: "/siding-replacement/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Energy-efficient windows and detailed trim installation for improved appearance and better insulation.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Rocklin"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Rocklin’ Trusted Deck and Siding Experts"
                heroText1="Yellowstone Renovation provides professional siding installation and custom deck construction for Rocklin homeowners. We focus on clean work, honest communication, and long-lasting craftsmanship."
                heroText2="Offering James Hardie, LP SmartSide, vinyl, cedar, and metal siding — plus Trex and TimberTech composite decks built to elevate outdoor living."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Proudly serving Rocklin, Roseville, Loomis, and all Placer County communities."

                deckHeroTitle="Custom Decks Built for Rocklin, CA"
                deckHeroText1="A well-built deck transforms your outdoor space, offering relaxation, entertainment, and added home value. We build decks that handle California’s climate and look great year-round."
                deckHeroText2="Choose Trex, TimberTech, cedar, or pressure-treated wood for a deck built to match your home's style."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Offer in Rocklin:"
                deckServices={[
                    "Custom deck design and 3D planning",
                    "Trex and TimberTech composite deck installation",
                    "Cedar and pressure-treated wood decks",
                    "Covered decks, pergolas, screened porches",
                    "Deck resurfacing and repairs",
                    "Railing, stairs, and lighting upgrades",
                    "Permits and inspections handled for you"
                ]}
                deckCostTitle="Deck Cost in Rocklin, CA"
                deckCostText="Deck pricing varies by size and design. Composite decks typically range $45–$65 per sq. ft. installed. Wood decks usually cost $30–$50 per sq. ft. All estimates include materials, labor, cleanup, and inspections."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}

                stylesTitle="Popular Siding Styles for Rocklin Homes"
                stylesIntro="We help Rocklin homeowners select siding styles that complement their homes, improve durability, and elevate appearance."
                styles={[
                    {
                        name: "Lap Siding",
                        text: "A classic option offering strong protection and clean lines. Available in vinyl, fiber cement, and engineered wood.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "A modern farmhouse style popular in Placer County. Adds height, texture, and visual character.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes and Shingles",
                        text: "Ideal for gables and accents — offering a handcrafted, textured appearance in cedar or fiber cement.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Rocklin"
                sidingTypesIntro="We offer durable siding materials backed by strong warranties and expert installation."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Rocklin, CA"
                costIntro="Pricing depends on home size, material, trim, and layout. Typical Rocklin siding installation costs:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.50 – $9.00 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.00 – $14.00 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.00 – $12.00 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$12.00 – $18.00 per sq. ft." },
                    { material: "Metal Siding", price: "$8.00 – $13.00 per sq. ft." },
                ]}

                extraSectionTitle="Why Rocklin Homeowners Choose Yellowstone Renovation"
                extraSectionText="Homeowners across Placer County trust our team for quality craftsmanship, clean work, and dependable communication from start to finish."
                extraPoints={[
                    "⭐ Local California-based crew — no random subcontractors",
                    "⭐ Licensed, insured, and experienced installers",
                    "⭐ 5-year workmanship warranty on all projects",
                    "⭐ 400+ exterior projects completed in Sacramento Metro",
                    "⭐ Free, detailed, no-pressure estimates"
                ]}

                ctaTitle="Request a Free Deck or Siding Estimate in Rocklin"
                ctaText="Ready to upgrade your home’s exterior? Contact Yellowstone Renovation for a free, no-obligation estimate — serving Rocklin, Roseville, Loomis, and all of Placer County."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}
