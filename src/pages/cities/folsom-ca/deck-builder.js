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

export default function FolsomDeckBuilder() {
    return (
        <Layout>

            {/* SEO */}
            <SEO
                title="Deck Builder in Folsom CA — Composite & Wood Decks | Yellowstone Renovation"
                description="Top-rated deck builders in Folsom, CA. Yellowstone Renovation designs and installs high-quality composite and wood decks crafted for durability, beauty, and long-term performance. Free estimates across Sacramento County."
                pathname="/cities/folsom-ca/deck-builder"
                image="https://sacramento.yellowstonerenovation.com/images/deck-builder8.webp"
            />


            {/* HERO */}
            <Hero2
                topText="Top-Rated Deck Builder in Folsom, CA"
                title="Deck Builder in Folsom, CA — Custom Composite & Wood Decks"
                description="Yellowstone Renovation builds strong, modern, and long-lasting decks for homeowners across Folsom and Sacramento County. From premium composite decking to beautifully finished wood structures, we deliver quality craftsmanship you can rely on."
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
                title="Folsom Deck Transformations"
                description="Browse before-and-after images of projects completed throughout Folsom — showing how we rebuild unsafe decks into modern, durable outdoor living spaces."
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
                title="FOLSOM DECK BUILDER GALLERY"
                subtitle="Browse completed deck projects built for homeowners across Folsom and Sacramento County."
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
                title="Deck Builder in Folsom, CA — Custom Composite & Wood Decks"
                sections={[
                    {
                        heading: "Deck Builder Folsom CA — Quality, Craftsmanship, and Outdoor Living",
                        text: `Yellowstone Renovation provides Folsom homeowners with high-quality deck construction built for durability and long-term performance. We design and build outdoor living spaces using premium materials and proven installation methods.

Our team specializes in both composite and natural wood decking, offering design guidance, permit support, and precise construction. Whether upgrading an old deck or creating a brand-new entertainment space, we deliver results you can rely on.`
                    },

                    {
                        heading: "Composite Deck Installation in Folsom, CA",
                        text: `Composite decking is a top choice for Folsom homeowners who want a low-maintenance, long-lasting outdoor area. Composite boards resist fading, moisture, insects, and warping — ideal for California’s changing weather.

We install high-quality Trex, TimberTech, and AZEK systems using hidden fasteners and moisture-protected framing. Choose from a wide selection of modern colors and realistic wood textures.`
                    },

                    {
                        heading: "Wood Deck Builder in Folsom, California",
                        text: `If you love the natural beauty of wood, we build custom decks using pressure-treated lumber, cedar, and redwood. Wood decks offer excellent value and timeless appeal.

Every wood deck is sealed, reinforced, and tailored to withstand heat, sun exposure, and daily use. Our craftsmanship ensures a clean, smooth finish and strong structural integrity.`
                    },

                    {
                        heading: "Deck Replacement & Repair in Folsom, CA",
                        text: `If your deck is unsafe, outdated, or failing structurally, we offer complete deck replacement and repair services throughout Folsom and Sacramento County. From strengthening framing to full rebuilds, we restore outdoor spaces with reliable materials and workmanship.

Loose railings, rotted boards, and sagging structures — we handle all phases of repair and replacement.`
                    },

                    {
                        heading: "Our Deck Design & Construction Process",
                        text: `Each project begins with a consultation to evaluate your space and discuss design options. After planning, our team handles all permitting, structural framing, decking installation, and finishing work.

We maintain open communication, a clean job site, and strict adherence to California building codes.`
                    },

                    {
                        heading: "Average Deck Cost in Folsom, CA",
                        text: `Here’s what most Folsom homeowners invest in a professionally built deck:

Composite Decks: $45–$65 per sq. ft. installed  
Wood Decks: $30–$50 per sq. ft. installed  
Repairs or Partial Rebuilds: around 40–60% of a full replacement  

Pricing includes materials, labor, cleanup, and final inspection. Contact us for an exact estimate based on your home.`
                    },

                    {
                        heading: "Get a Free Deck Estimate in Folsom, CA",
                        text: `Ready to upgrade your backyard? We provide free, no-pressure estimates across Folsom, Orangevale, Fair Oaks, Rancho Cordova, and all of Sacramento County.

We measure your space, explain material options, and provide a detailed written quote during your appointment.`
                    },

                    {
                        heading: "Decking Contractor in Folsom, California",
                        text: `Choosing the right contractor matters. Yellowstone Renovation is known for dependable scheduling, high-quality craftsmanship, and clean work throughout the project.

We help homeowners increase property value and create comfortable outdoor spaces built for everyday use.`
                    },

                    {
                        heading: "Deck Installation Services in Folsom",
                        text: `From compact wood decks to large composite installations with railings, lighting, and stairs — we build custom designs tailored to your home’s architecture and outdoor layout.

Each project is engineered for structural strength and long-term durability in California’s climate.`
                    },

                    {
                        heading: "Professional Deck Construction in Folsom, CA",
                        text: `As a licensed and insured contractor, we manage every step of the building process — including design, permits, framing, decking, railings, and inspection.

Our decks are built to withstand heat, UV exposure, winter rain, and constant use without weakening over time.`
                    },

                    {
                        heading: "Working with a Local Folsom Deck Contractor",
                        text: `Located in Sacramento Metro, we understand local building requirements, soil conditions, and climate challenges. That allows us to build stronger and safer decks for Folsom homeowners.

Clear communication and reliable service guide every project from start to finish.`    
                    },

                    {
                        heading: "Choose the Best Deck Installers in Folsom, CA",
                        text: `Yellowstone Renovation is recognized for quality craftsmanship, reliable timelines, and consistent 5-star customer satisfaction. We create well-built, attractive outdoor spaces designed to last for decades.`
                    },

                    {
                        heading: "Average Cost to Install a New Deck in Folsom",
                        text: `Most Folsom homeowners invest between $10,000 and $45,000 for a complete deck installation, depending on size, height, and materials selected.

Composite decks typically cost $45–$65 per sq. ft., while wood options range from $30–$50 per sq. ft. We provide clear, accurate estimates before beginning any project.`
                    },

                    {
                        heading: "Folsom Wood Decks — Natural Appeal & Lasting Value",
                        text: `Wood decks bring warmth and traditional beauty to any property. We use premium lumber with proper treatment and sealing to ensure long-term durability in California’s seasonal weather patterns.`
                    },

                    {
                        heading: "Composite Decks in Folsom, CA",
                        text: `Composite decks offer exceptional durability with virtually no maintenance required. Our installations include Trex, TimberTech, and AZEK — proven brands known for moisture resistance and long-lasting color performance.`
                    },

                    {
                        heading: "Deck Builder Near Me in Folsom, CA",
                        text: `Searching for “deck builder near me” in Folsom? Yellowstone Renovation proudly serves Folsom, Orangevale, Rancho Cordova, Fair Oaks, and all of Sacramento County.

We design and build custom decks that enhance home value, outdoor functionality, and everyday comfort.`
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
                        text: "Browse Folsom Deck Projects",
                        button: "View Gallery",
                        link: "/projects-showcase/",
                    },
                ]}

                whyUs={[
                    "Trusted local deck builders serving Folsom and Sacramento County",
                    "Trex, TimberTech, and AZEK composite specialists",
                    "Custom designs tailored to your home and outdoor layout",
                    "Licensed, insured, and known for reliable scheduling",
                    "Clear pricing, clean job sites, and long-term warranties",
                ]}

                projects={[
                    { image: "/images/deck4.webp", title: "Folsom Composite Deck Build" },
                    { image: "/images/deck5.webp", title: "Wood Deck With Custom Railings" },
                    { image: "/images/deck6.webp", title: "Pergola & Deck Upgrade" },
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
                        title: "Composite vs Wood Decks: Which Is Best for Folsom Homes?",
                        date: "May 20th, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "Deck Maintenance Tips for Folsom Homeowners",
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
