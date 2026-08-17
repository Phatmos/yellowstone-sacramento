import React from "react";
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

export default function CitrusHeightsDeckBuilder() {
    return (
        <Layout>

            {/* SEO */}
            <SEO
                title="Deck Builder in Citrus Heights CA — Composite & Wood Decks | Yellowstone Renovation"
                description="Top-quality deck builders in Citrus Heights, CA. Yellowstone Renovation designs and builds composite and wood decks built for strength, beauty, and long-term value. Free estimates throughout Sacramento County."
                pathname="/cities/citrus-heights-ca/deck-builder"
                image="https://sacramento.yellowstonerenovation.com/images/deck-builder8.webp"
            />


            {/* HERO */}
            <Hero2
                topText="Top-Rated Deck Builder in Citrus Heights, CA"
                title="Deck Builder in Citrus Heights, CA — Custom Composite & Wood Decks"
                description="Yellowstone Renovation builds durable, beautiful, and long-lasting decks for homeowners throughout Citrus Heights and Sacramento County. Whether you're upgrading an old deck or designing a brand-new outdoor space, we deliver professional craftsmanship and dependable service."
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
                title="Citrus Heights Deck Transformations"
                description="See how we upgrade decks in Citrus Heights — replacing old, unsafe structures with modern, long-lasting composite and wood designs."
                buttonText="Explore More Projects"
                buttonLink="/projects-showcase/"
                accentColor="#0a923d"
                images={[
                    { before: "/images/deckafter3.webp", after: "/images/deckbefore3.webp" },
                    { before: "/images/deckafter1.webp", after: "/images/deckbefore1.webp" },
                ]}
            />

            {/* GALLERY */}
            <GallerySection
                title="CITRUS HEIGHTS DECK BUILDER GALLERY"
                subtitle="Browse completed deck projects built for homeowners across Citrus Heights and Sacramento County."
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
                title="Deck Builder in Citrus Heights, CA — Custom Composite & Wood Decks"
                sections={[
                    {
                        heading: "Deck Builder Citrus Heights CA — Craftsmanship, Quality & Value",
                        text: `Yellowstone Renovation is a trusted deck contractor serving Citrus Heights, California. We design and build decks that combine strength, functionality, and modern outdoor style.

From premium composite systems to natural wood installations, we create outdoor spaces built to last. Our process includes design, permits, strong framing, professional installation, and clean finishing.`
                    },

                    {
                        heading: "Composite Deck Installation in Citrus Heights, CA",
                        text: `Composite decking is ideal for Citrus Heights homeowners who want a long-lasting, low-maintenance outdoor space. Composite boards resist rot, insects, fading, and moisture — all while maintaining their color for decades.

We install Trex, TimberTech, and AZEK decking using hidden fasteners and reinforced framing. Enjoy a modern deck without annual staining or repairs.`
                    },

                    {
                        heading: "Wood Deck Builder in Citrus Heights, California",
                        text: `Natural wood decks offer warmth, charm, and traditional beauty. We install wood decks using pressure-treated lumber, cedar, and redwood to match your budget and style.

Every wood deck is reinforced, sealed, and built with proper spacing and drainage to withstand California’s climate.`
                    },

                    {
                        heading: "Deck Replacement & Repair in Citrus Heights, CA",
                        text: `If your existing deck is rotted, unstable, or outdated, our team provides complete deck replacement and structural repairs. We rebuild decks using modern materials, safer framing, and updated building practices.

Loose boards, failed footings, or deteriorating railings — we repair and restore outdoor spaces throughout Citrus Heights and Sacramento County.`
                    },

                    {
                        heading: "Our Deck Design & Construction Process",
                        text: `Our process begins with an on-site consultation where we measure your space, evaluate existing structures, and discuss materials.

From permits to framing to decking installation, we manage every stage with communication and attention to detail. All decks are built to California residential building standards.`
                    },

                    {
                        heading: "Average Deck Cost in Citrus Heights, CA",
                        text: `Here’s what most Citrus Heights homeowners invest in professional deck construction:

Composite Decks: $45–$65 per sq. ft.  
Wood Decks: $30–$50 per sq. ft.  
Deck Repairs: 40–60% of full replacement cost  

Prices include materials, labor, cleanup, and final inspection.`
                    },

                    {
                        heading: "Get a Free Deck Estimate in Citrus Heights, CA",
                        text: `We offer free, no-pressure estimates across Citrus Heights, Orangevale, Fair Oaks, Carmichael, and all surrounding areas in Sacramento County.

During your appointment, we measure your project, review material options, discuss design ideas, and provide a clear written quote.`
                    },

                    {
                        heading: "Decking Contractor in Citrus Heights, California",
                        text: `Homeowners choose Yellowstone Renovation for dependable communication, strong workmanship, and a commitment to building long-lasting decks.

We create outdoor spaces that maximize property value, comfort, and daily enjoyment.`
                    },

                    {
                        heading: "Deck Installation Services in Citrus Heights",
                        text: `Whether you want a compact wood deck or a modern composite system with custom railings, lighting, or covered structures — we design and build decks that match your property and lifestyle.`
                    },

                    {
                        heading: "Professional Deck Construction in Citrus Heights, CA",
                        text: `We handle all design, measurements, engineering, permitting, framing, decking installation, railing systems, and final inspection. Our installations are clean, durable, and built to code.`
                    },

                    {
                        heading: "Working with a Local Citrus Heights Deck Contractor",
                        text: `Being based in Sacramento Metro, we understand local building codes, weather patterns, and soil conditions. This local expertise allows us to build stronger, safer decks for Citrus Heights homeowners.`
                    },

                    {
                        heading: "Choose the Best Deck Installers in Citrus Heights, CA",
                        text: `Yellowstone Renovation is known for reliable service, excellent craftsmanship, and fair pricing. With consistent 5-star reviews, we’re one of the top deck builders serving Citrus Heights.`
                    },

                    {
                        heading: "Average Cost to Install a New Deck in Citrus Heights",
                        text: `Citrus Heights homeowners typically invest between $10,000 and $45,000 depending on material selection, elevation, size, and added features like stairs or lighting.`
                    },

                    {
                        heading: "Citrus Heights Wood Decks — Classic Beauty & Warmth",
                        text: `We build natural wood decks that bring charm and warmth to your backyard. Proper sealing, ventilation, and construction techniques ensure longevity despite California’s seasonal weather.`
                    },

                    {
                        heading: "Composite Decks in Citrus Heights, CA",
                        text: `Composite decks provide outstanding durability with almost no maintenance. Our Trex, TimberTech, and AZEK installs resist fading, moisture, and cracking while maintaining a premium appearance.`
                    },

                    {
                        heading: "Deck Builder Near Me in Citrus Heights, CA",
                        text: `Searching for “deck builder near me” in Citrus Heights? Yellowstone Renovation proudly serves Citrus Heights, Orangevale, Fair Oaks, Carmichael, and the wider Sacramento County area.

We deliver clean work, fair pricing, and dependable project timelines.`
                    },
                ]}

                /* SIDEBAR CONTENT */
                offers={[
                    {
                        image: "/images/deck1.webp",
                        text: "Get $1500 OFF Your New Deck Installation — Limited Time Offer",
                        button: "Claim Discount",
                        link: "/contact/",
                    },
                    {
                        image: "/images/deck2.webp",
                        text: "Browse Completed Deck Projects in Citrus Heights",
                        button: "View Gallery",
                        link: "/projects-showcase/",
                    },
                ]}

                whyUs={[
                    "Trusted local deck builders serving Citrus Heights & Sacramento County",
                    "Trex, TimberTech, and AZEK composite experts",
                    "Custom designs to fit your home and yard",
                    "Licensed, insured, and known for on-time scheduling",
                    "Transparent pricing and strong workmanship warranties",
                ]}

                projects={[
                    { image: "/images/deck4.webp", title: "Citrus Heights Composite Deck Build" },
                    { image: "/images/deck5.webp", title: "Custom Wood Deck With Railings" },
                    { image: "/images/deck6.webp", title: "Deck & Pergola Combination" },
                    { image: "/images/deck7.webp", title: "Covered Deck & Outdoor Upgrade" },
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
                        title: "Composite vs Wood Decks — What Citrus Heights Homeowners Should Know",
                        date: "May 20th, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "Deck Maintenance Tips for Citrus Heights Homes",
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
