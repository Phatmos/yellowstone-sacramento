import React from "react";
import Layout from "../../../components/Layout";
import HeroSection from "../../../components/HeroSection";
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

export default function SacramentoDeckBuilder() {
    return (
        <Layout>

            {/* ✅ SEO Core */}
            <SEO
                title="Deck Builder in Sacramento CA — Composite & Wood Decks | Yellowstone Renovation"
                description="Professional deck builders in Sacramento, CA — Yellowstone Renovation designs and installs composite and wood decks built for beauty, comfort, and durability. Free quotes across Sacramento County!"
                pathname="/cities/sacramento-ca/deck-builder"
                image="https://sacramento.yellowstonerenovation.com/images/deck-builder8.webp"
            />

            {/* ✅ Extra Meta / Schema */}

            {/* ✅ HERO — This is now the REAL H1 */}
            <Hero2
                topText="Top-Rated Deck Builder in Sacramento, CA"
                title="Deck Builder in Sacramento, CA — Custom Composite & Wood Decks"
                description="Yellowstone Renovation designs and builds high-quality decks for homes across Sacramento and Sacramento County. From composite to wood, covered decks to complete outdoor living spaces — we deliver strong craftsmanship, clean work, and long-lasting results."
                backgroundImage="/images/deck/deck-sacramento1.webp"
                overlayOpacity={0.65}
                formTitle="Get a Free Deck Construction Estimate"
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

            {/* Before & After */}
            <BeforeAfter
                title="Sacramento Deck Before & After Transformations"
                description="See how our team revitalizes outdoor spaces in Sacramento with durable, stylish decks built to last. From rotted boards to luxury composite designs — we handle it all."
                buttonText="Explore More Projects"
                buttonLink="/projects-showcase/"
                accentColor="#0a923d"
                images={[
                    { before: "/images/deckafter3.webp", after: "/images/deckbefore3.webp" },
                    { before: "/images/deckafter1.webp", after: "/images/deckbefore1.webp" },
                ]}
            />

            {/* Gallery */}
            <GallerySection
                title="SACRAMENTO DECK BUILDER GALLERY"
                subtitle="From composite decks to custom wood builds — explore projects completed by our team across Sacramento and Sacramento County."
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
                title="Deck Builder in Sacramento, CA — Custom Composite & Wood Decks"
                sections={[
                    {
                        heading: "Deck Builder Sacramento CA — Built for Strength, Comfort, and Style",
                        text: `Yellowstone Renovation is a professional deck builder in Sacramento, California, known for quality construction and creative outdoor designs. We help homeowners across Sacramento County turn their backyards into functional and beautiful living spaces. Each deck we build is made for comfort, safety, and durability.

We use high-quality materials such as Trex, TimberTech, and AZEK composite decking, along with traditional cedar and pressure-treated wood. Every project starts with a design consultation, followed by permit handling, solid framing, and expert installation. Whether you want a simple platform deck or a multi-level entertainment space, we make sure it lasts for years with minimal maintenance.`
                    },
                    {
                        heading: "Composite Deck Installation in Sacramento CA",
                        text: `Composite decking is a top choice for homeowners who want a modern, low-maintenance deck that looks great all year. Unlike wood, composite boards do not rot, warp, or fade. They are resistant to moisture, insects, and California’s weather extremes.

We install Trex, TimberTech, and AZEK composite decks with hidden fasteners, waterproof framing, and optional lighting. You can choose from many colors and textures that match your home’s style. Our composite decks in Sacramento are safe, slip-resistant, and built to last for decades without the need for sanding, staining, or painting.`
                    },
                    {
                        heading: "Wood Deck Builder in Sacramento CA",
                        text: `For those who love the look and feel of real wood, Yellowstone Renovation builds classic decks using cedar, redwood, and pressure-treated pine. Wood decks bring warmth, charm, and natural beauty to any home.

Our team focuses on perfect structure, smooth finishes, and proper sealing for protection from moisture and UV rays. We also offer staining and sealing services to help your deck stay strong and vibrant for years. Wood decks remain one of the most affordable and flexible options for homeowners in Sacramento who want a timeless design.`
                    },
                    {
                        heading: "Deck Replacement and Repair in Sacramento CA",
                        text: `If your old deck is unsafe, weathered, or outdated, our experts provide full deck replacement and repair services across Sacramento and Sacramento County. We can rebuild existing structures using stronger, longer-lasting materials or upgrade your deck with modern composite boards.

From broken boards and loose railings to structural reinforcements, we handle every type of repair quickly and professionally. Our goal is to restore both safety and beauty, giving your outdoor space new life without the high cost of a complete rebuild.`
                    },
                    {
                        heading: "Deck Design and Construction Process",
                        text: `Our process is simple and transparent. We start with a design consultation to understand your needs, space, and budget. Then we create a layout that fits your home’s style and how you plan to use the space.

After design approval, our licensed team handles permits, framing, decking, and finishing details. We also offer lighting, railing, and step options for a polished look. Every project is built to California’s building code standards, ensuring long-lasting quality and safety.`
                    },
                    {
                        heading: "Average Deck Cost in Sacramento, CA",
                        text: `Our pricing is clear and competitive. Here’s a general idea of what most homeowners in Sacramento pay for new decks:

Composite Decks: $45–$65 per square foot installed  
Wood Decks: $30–$50 per square foot installed  
Deck Repair or Rebuild: usually 40–60% of full replacement cost

These prices include labor, materials, cleanup, and final inspection. The total cost depends on the size, height, design, and materials you choose. Contact us for a free quote to get an exact price for your home.`
                    },
                    {
                        heading: "Get a Free Deck Estimate in Sacramento CA",
                        text: `Ready to build or replace your deck? Call Yellowstone Renovation today to schedule a free, no-obligation estimate. We serve Sacramento, East Sacramento, Land Park, and all nearby areas in Sacramento County.

Our team will visit your home, take measurements, discuss design options, and provide a detailed quote. With Yellowstone Renovation, you can count on honest pricing, professional service, and a deck you’ll enjoy for years to come.`
                    },
                    {
                        heading: "Decking Contractor in Sacramento, CA",
                        text: `Hiring a deck contractor in Sacramento, CA is a big decision that can completely change the way you enjoy your home. At Yellowstone Renovation, we understand the importance of finding a reliable company that delivers quality workmanship, fair pricing, and lasting results. Our goal is to transform your outdoor living space into a beautiful, functional area that adds value and comfort to your property.`
                    },
                    {
                        heading: "Deck Installation Services in Sacramento",
                        text: `Yellowstone Renovation specializes in professional deck installation and replacement services throughout Sacramento and Sacramento County. We deliver exceptional craftsmanship and clear communication from start to finish. Whether you want a compact wood deck or a large composite entertainment area, our team will design and build the perfect deck for your home.`
                    },
                    {
                        heading: "Professional Deck Construction in Sacramento, CA",
                        text: `When you choose Yellowstone Renovation, you get a fully licensed and insured team committed to quality and safety. We handle every part of the process — from design and permitting to framing, railing, and inspection. Our decks meet California code standards and withstand years of heat, UV exposure, and winter rain while maintaining strength and beauty.`
                    },
                    {
                        heading: "Working with a Local Deck Contractor Near You",
                        text: `As a local business in Sacramento Metro, we understand the region’s climate and soil conditions. Our Sacramento deck builders maintain open communication with clients from start to finish, ensuring every detail matches your expectations. We’re proud to be the trusted choice for homeowners across Sacramento County.`
                    },
                    {
                        heading: "Choose the Best Deck Installers in Sacramento, CA",
                        text: `With hundreds of completed projects and consistent 5-star reviews, Yellowstone Renovation is a top-rated deck contractor in Sacramento. We combine durable materials, expert craftsmanship, and transparent communication to create exceptional outdoor spaces.`
                    },
                    {
                        heading: "Average Cost to Install a New Deck in Sacramento",
                        text: `Most homeowners in Sacramento invest between $10,000 and $45,000 for complete deck installation. Composite decks cost around $45–$65 per sq. ft., while wood decks range from $30–$50 per sq. ft. Prices include materials, labor, and cleanup. We provide detailed estimates so you always know what to expect.`
                    },
                    {
                        heading: "Sacramento Wood Decks — Natural Beauty That Lasts",
                        text: `If you love real wood, our custom decks made from cedar, redwood, or treated pine bring warmth and elegance to any backyard. Each deck is sealed and treated for weather resistance and built to your exact design preferences.`
                    },
                    {
                        heading: "Composite Decks in Sacramento, CA",
                        text: `Composite decks are ideal for homeowners who want durability and minimal upkeep. We build with Trex, TimberTech, and AZEK — top brands that resist fading, mold, and moisture while maintaining beautiful color and texture for decades.`
                    },
                    {
                        heading: "Deck Builder Near Me in Sacramento, CA",
                        text: `Searching for a reliable “deck builder near me” in Sacramento, CA? Look no further than Yellowstone Renovation — your trusted local contractor for composite and wood deck installations across Sacramento County and surrounding areas.

We’re proud to serve homeowners throughout Sacramento, East Sacramento, Land Park, Pocket-Greenhaven, and Natomas, providing professional deck design, construction, and repair services tailored to each property.

Whether you need a full deck replacement, a modern composite upgrade, or a small backyard addition, our experienced team delivers lasting results with honest pricing, clean job sites, and top-tier craftsmanship.

As a locally owned company, we understand California’s climate and building codes, ensuring every project meets state standards for safety and durability. If you’re looking for a “deck contractor near me” that values quality and customer satisfaction, Yellowstone Renovation is your best choice.`
                    },

                ]}
                offers={[
                    {
                        image: "/images/deck1.webp",
                        text: "Get $1500 OFF Your New Deck Installation — Limited Time Offer",
                        button: "Claim Discount",
                        link: "/contact/",
                    },
                    {
                        image: "/images/deck2.webp",
                        text: "See Over 20 Completed Deck Projects in Sacramento",
                        button: "View Gallery",
                        link: "/projects-showcase/",
                    },
                ]}

                whyUs={[
                    "Trusted local deck builders serving Sacramento and Sacramento County",
                    "Trex, TimberTech, and AZEK certified installation experts",
                    "Custom designs for every home and outdoor space",
                    "Licensed, insured, and known for quality workmanship",
                    "Transparent pricing, clean job sites, and reliable scheduling",
                ]}

                projects={[
                    { image: "/images/deck4.webp", title: "Backyard Composite Deck" },
                    { image: "/images/deck5.webp", title: "Wood Deck with Rail System" },
                    { image: "/images/deck6.webp", title: "Modern Pergola Deck" },
                    { image: "/images/deck7.webp", title: "Covered Porch Extension" },
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
                        title: "Choosing Between Composite and Wood Decks",
                        date: "May 20th, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "Deck Maintenance Tips for California Homeowners",
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
