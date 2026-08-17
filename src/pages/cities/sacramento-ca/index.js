import * as React from "react"
import Layout from "../../../components/Layout"

import "../../../styles/global.css"
import SEO from "../../../components/SEO";
import HeroSection from "../../../components/HeroSection";
import SidingPageSection from "../../../components/SidingPageSection";
import AboutSection from "../../../components/AboutSection";
import TestimonialsSection from "../../../components/TestimonialsSection";
import QuoteSection from "../../../components/QuoteSection";
import GallerySection from "../../../components/GallerySection"
import Services from "../../../components/Services.js"

export default function SacramentoKY() {
    return (
        <Layout>

            <SEO
                title="Deck and Siding Contractor in Sacramento, CA | Exterior Builder You Can Trust"
                description="Yellowstone Renovation installs composite decks, wood decks, vinyl siding, and James Hardie siding in Sacramento, CA. Trusted exterior contractor serving all of Sacramento County. Free onsite estimates."
                pathname="/cities/sacramento-ca/"
                image="https://sacramento.yellowstonerenovation.com/images/remodler1.webp"
            />


            {/* ▶ HERO SECTION */}
            <HeroSection
                backgroundImage="/images/deck-builder3.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Sacramento, CA"
                subtitle="Enhance your Sacramento home with durable siding and professionally built decks — designed to handle California weather and elevate curb appeal."
                projectCount="28+ deck and siding projects completed this year in Sacramento County"
                city="Sacramento"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            {/* ▶ GALLERY */}
            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Explore our completed deck projects — built for comfort, strength, and outdoor living in California’s climate."
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
                    "/images/deck/deck-sacramento14.webp",
                    "/images/deck/deck-sacramento68.webp",
                    "/images/deck/deck-sacramento67.webp",
                    "/images/deck/deck-sacramento82.webp",
                    "/images/deck/deck-sacramento2.webp",
                    "/images/deck/deck-sacramento96.webp",
                ]}
            />

            {/* ▶ SERVICES */}
            <Services
                title="Exterior Remodeling Services in Sacramento, CA"
                subtitle="From custom decks to premium siding, our exterior renovation services are designed for long-term durability and lasting beauty."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We build sturdy, beautiful decks tailored to Sacramento homes. From simple layouts to full outdoor living spaces — we handle everything.",
                        image: "/images/deck11.webp",
link: "/cities/sacramento-ca/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Choose between low-maintenance composite or classic natural wood. Built strong for California’s climate.",
                        image: "/images/deck7.webp",
                        link: "/composite-decks-sacramento/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "Enhance curb appeal and protect your home with Hardie fiber cement or durable vinyl siding — installed by licensed professionals.",
                        image: "/images/remodler1.webp",
                        link: "/siding-replacement/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Improve energy efficiency and home appearance with professional window installations and trim upgrades.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            {/* ▶ SIDING & DECK PAGE SECTION */}
            <SidingPageSection
                city="Sacramento"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Sacramento’s Local Deck & Siding Experts"
                heroText1="Yellowstone Renovation provides Sacramento homeowners with high-quality siding installation and custom deck construction designed to last for years."
                heroText2="We install James Hardie, LP SmartSide, vinyl, cedar, and metal siding — plus Trex and TimberTech composite decks built for comfort and durability."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Serving Sacramento, East Sacramento, Land Park, Pocket-Greenhaven, and all Sacramento County neighborhoods."

                deckHeroTitle="Custom Decks Built for Sacramento, CA"
                deckHeroText1="A well-built deck turns your backyard into a perfect place for gathering, relaxing, or entertaining. Our decks are built to handle California weather and look great year-round."
                deckHeroText2="Choose Trex, TimberTech, cedar, or treated wood — each option installed to the highest standards."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Provide in Sacramento:"
                deckServices={[
                    "Custom deck design & planning",
                    "Trex and TimberTech composite deck installation",
                    "Cedar and pressure-treated wood decks",
                    "Covered decks, pergolas, screened porches",
                    "Deck resurfacing and structural repairs",
                    "Railing, stair, and lighting upgrades",
                    "Permits and inspections handled for you"
                ]}
                deckCostTitle="Deck Cost in Sacramento, CA"
                deckCostText="Composite decks in Sacramento usually range $45–$65 per sq. ft. installed. Wood decks range $30–$50 per sq. ft. Estimates include materials, labor, cleanup, and inspection."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}

                stylesTitle="Siding Styles Popular in Sacramento"
                stylesIntro="We help homeowners select siding styles that enhance curb appeal while offering long-term weather resistance."
                styles={[
                    {
                        name: "Lap Siding",
                        text: "A timeless, durable siding style found on many Sacramento homes. Available in vinyl, fiber cement, and engineered wood.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "A modern farmhouse look growing in popularity across California — adds bold vertical lines and strong visual appeal.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes and Shingles",
                        text: "Perfect for accents and gables. Available in cedar or fiber cement, offering a handcrafted, textured appearance.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Sacramento"
                sidingTypesIntro="Durable siding options installed with professional precision and backed by warranties."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Sacramento, CA"
                costIntro="Below are average siding installation price ranges for Sacramento homes, including labor and cleanup:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.50 – $9.00 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.00 – $15.00 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.00 – $12.00 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$12.00 – $18.00 per sq. ft." },
                    { material: "Metal Siding", price: "$8.00 – $13.00 per sq. ft." },
                ]}

                extraSectionTitle="Why Sacramento Homeowners Choose Us"
                extraSectionText="Homeowners across Sacramento County trust Yellowstone Renovation for reliable communication, professional craftsmanship, and clean job sites."
                extraPoints={[
                    "⭐ Local licensed & insured California crew",
                    "⭐ 5-year workmanship warranty",
                    "⭐ 400+ exterior projects completed in the Sacramento region",
                    "⭐ No subcontractors — our own installers",
                    "⭐ Free, detailed, no-pressure estimates"
                ]}

                ctaTitle="Request a Free Deck or Siding Estimate in Sacramento"
                ctaText="Ready to start your outdoor project? Contact Yellowstone Renovation for a free, no-obligation estimate in Sacramento and Sacramento County."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}
