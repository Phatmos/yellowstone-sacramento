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

export default function RosevilleDeckBuilder() {
    return (
        <Layout>

            {/* SEO */}
            <SEO
                title="Deck Builder in Roseville CA — Composite & Wood Decks | Yellowstone Renovation"
                description="Top-rated deck builders in Roseville, CA. Yellowstone Renovation designs and installs high-quality composite and wood decks built for durability, beauty, and long-term outdoor living. Free estimates across Placer County."
                pathname="/cities/roseville-ca/deck-builder"
                image="https://sacramento.yellowstonerenovation.com/images/deck-builder8.webp"
            />


            {/* HERO */}
            <Hero2
                topText="Top-Rated Deck Builder in Roseville, CA"
                title="Deck Builder in Roseville, CA — Custom Composite & Wood Decks"
                description="Yellowstone Renovation builds premium-quality decks for homeowners across Roseville and Placer County. From modern composite materials to warm natural wood, we deliver strong craftsmanship and long-lasting outdoor spaces."
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
                title="Roseville Deck Transformations"
                description="See how we upgrade outdoor living across Roseville — replacing aging structures with beautiful, long-lasting composite and wood decks."
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
                title="ROSEVILLE DECK BUILDER GALLERY"
                subtitle="Browse completed deck projects crafted for homeowners across Roseville and Placer County."
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
                title="Deck Builder in Roseville, CA — Custom Composite & Wood Decks"
                sections={[
                    {
                        heading: "Deck Builder Roseville CA — Reliable Craftsmanship & Long-Lasting Results",
                        text: `Yellowstone Renovation provides high-quality deck construction services throughout Roseville, California. We focus on durability, clean design, and professional installation to transform outdoor areas into functional, beautiful living spaces.

We work with both composite and wood decking systems, delivering expert planning, precise framing, and smooth finishing. Whether you're replacing an older structure or building a new entertainment space, we ensure your deck stands the test of time.`
                    },

                    {
                        heading: "Composite Deck Installation in Roseville, CA",
                        text: `Composite decking is one of the most popular choices for Roseville homeowners thanks to its durability and minimal maintenance. Composite boards resist moisture, rot, fading, and insect damage — ideal for California’s hot, dry summers and mild, rainy winters.

We install premium Trex, TimberTech, and AZEK decking with hidden fasteners and moisture-resistant framing. Choose your style from a wide range of colors and wood-like textures.`
                    },

                    {
                        heading: "Wood Deck Builder in Roseville, California",
                        text: `For homeowners who appreciate the natural warmth of wood, we build custom decks using pressure-treated pine, cedar, and redwood. Wood decks offer timeless charm and excellent value.

Each wood structure is sealed and reinforced to withstand weather exposure and maintain long-term stability. Our team ensures a strong foundation and a polished, clean appearance.`
                    },

                    {
                        heading: "Deck Replacement & Repair in Roseville, CA",
                        text: `If your current deck is worn, unstable, or outdated, we provide complete deck replacement and repair services across Roseville and Placer County. From structural reinforcement to full rebuilds, we upgrade your space with safe, long-lasting materials.

Damaged boards, sagging framing, unsafe railings — we fix it all with professional attention to detail.`
                    },

                    {
                        heading: "Our Deck Design & Construction Process",
                        text: `Every project begins with a consultation where we evaluate your space, discuss design options, and help you choose the best materials. We handle permits, framing, decking installation, and precise finishing.

Our construction process emphasizes communication, cleanliness, and adherence to California building codes.`
                    },

                    {
                        heading: "Average Deck Cost in Roseville, CA",
                        text: `Here’s what most Roseville homeowners spend on a professionally built deck:

Composite Decks: $45–$65 per sq. ft. installed  
Wood Decks: $30–$50 per sq. ft. installed  
Repairs & Partial Rebuilds: around 40–60% of full replacement cost  

Pricing includes materials, labor, demolition (if needed), cleanup, and final inspection. Contact us for an accurate custom estimate.`
                    },

                    {
                        heading: "Get a Free Deck Estimate in Roseville, CA",
                        text: `We offer free, no-obligation deck estimates for homeowners in Roseville, Granite Bay, Lincoln, and nearby Placer County communities.

Our team measures your space, reviews design options, and provides a clear, detailed quote.`
                    },

                    {
                        heading: "Decking Contractor in Roseville, California",
                        text: `A trusted contractor makes all the difference. We prioritize clear communication, dependable scheduling, and professional workmanship — all backed by long-lasting materials and strong warranties.

Our mission is to build outdoor spaces your family can enjoy for years.`
                    },

                    {
                        heading: "Deck Installation Services in Roseville",
                        text: `From small single-level decks to large composite systems with stairs, railings, and lighting — we design and build structures tailored to your property and style preferences.

Each project is engineered for strength and long-term durability in California’s climate.`
                    },

                    {
                        heading: "Professional Deck Construction in Roseville, CA",
                        text: `We are a licensed and insured contractor offering complete deck construction, including planning, permitting, framing, decking installation, railings, and finishing.

Our decks withstand heat, UV exposure, winter rain, and daily use without compromising safety or aesthetics.`
                    },

                    {
                        heading: "Working with a Local Roseville Deck Contractor",
                        text: `As a Sacramento Metro contractor, we understand local building requirements, soil conditions, and climate challenges. This allows us to build safer and stronger decks that hold up year after year.

Transparency and communication guide each step of our process.`
                    },

                    {
                        heading: "Choose the Best Deck Installers in Roseville, CA",
                        text: `Yellowstone Renovation is known for top-tier craftsmanship, honest pricing, and consistent 5-star customer feedback. We take pride in designing and building decks that boost home value and improve outdoor living.`
                    },

                    {
                        heading: "Average Cost to Install a New Deck in Roseville",
                        text: `Most Roseville homeowners invest between $10,000 and $45,000 for full installation depending on size, elevation, and material selection.

Composite decks generally cost $45–$65 per sq. ft., while wood decks range from $30–$50 per sq. ft. We provide accurate quotes tailored to your project.`
                    },

                    {
                        heading: "Roseville Wood Decks — Timeless Look & Lasting Value",
                        text: `Wood decks remain a favorite for their natural feel and versatility. We use high-quality lumber with proper sealing and reinforcement to ensure long-term reliability in California’s shifting climate.`
                    },

                    {
                        heading: "Composite Decks in Roseville, CA",
                        text: `Composite decking provides the longest lifespan with virtually no maintenance. Our installations feature Trex, TimberTech, and AZEK systems known for resistance to fading, mold, and moisture.`
                    },

                    {
                        heading: "Deck Builder Near Me in Roseville, CA",
                        text: `Searching for a “deck builder near me” in Roseville? We proudly serve homeowners in Roseville, Lincoln, Granite Bay, and all across Placer County.

We build custom decks that upgrade outdoor living with dependable craftsmanship and transparent pricing.`
                    },
                ]}

                /* SIDEBAR */
                offers={[
                    {
                        image: "/images/deck1.webp",
                        text: "Get $1500 OFF Your New Deck Installation — Limited Time Offer",
                        button: "Claim Discount",
                        link: "/contact/",
                    },
                    {
                        image: "/images/deck2.webp",
                        text: "Browse Roseville Deck Projects",
                        button: "View Gallery",
                        link: "/projects-showcase/",
                    },
                ]}

                whyUs={[
                    "Trusted local deck builders serving Roseville and Placer County",
                    "Trex, TimberTech, and AZEK composite specialists",
                    "Custom designs for every home and outdoor layout",
                    "Licensed, insured, and known for clean, efficient installations",
                    "Clear pricing, reliable scheduling, and long-term warranties",
                ]}

                projects={[
                    { image: "/images/deck4.webp", title: "Roseville Composite Deck Build" },
                    { image: "/images/deck5.webp", title: "Wood Deck With Premium Railings" },
                    { image: "/images/deck6.webp", title: "Pergola & Composite Deck Combination" },
                    { image: "/images/deck7.webp", title: "Covered Deck Expansion" },
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
                        title: "Composite vs Wood Decks for Roseville Homes",
                        date: "May 20th, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "Deck Maintenance Tips for Roseville Homeowners",
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
