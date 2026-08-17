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

export default function FolsomKY() {
    return (
        <Layout>

            <SEO
                title="Deck and Siding Contractor in Folsom, CA | Exterior Builder You Can Trust"
                description="Yellowstone Renovation installs composite decks, wood decks, vinyl siding, and James Hardie in Folsom, CA. Reliable exterior contractor offering free estimates across Sacramento County."
                pathname="/cities/folsom-ca/"
                image="https://sacramento.yellowstonerenovation.com/images/remodler1.webp"
            />


            <HeroSection
                backgroundImage="/images/deck-builder3.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Folsom, CA"
                subtitle="Transform your Folsom home with custom-built decks and durable siding — designed for curb appeal, comfort, and long-term performance in California’s weather."
                projectCount="27+ deck and siding projects completed this year across Sacramento Metro"
                city="Folsom"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Browse our deck projects — built strong for California homes. Composite, wood, and custom designs crafted for durability and style."
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
                title="Exterior Remodeling Services in Folsom, CA"
                subtitle="From custom decks to premium siding, we provide complete exterior remodeling solutions tailored to your Folsom home."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We design and build long-lasting decks suited for Folsom homes. Whether it’s a simple backyard platform or a full outdoor living space, our craftsmanship stands out.",
                        image: "/images/deck11.webp",
link: "/cities/folsom-ca/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Choose between low-maintenance composite or natural wood. Each deck is built to withstand Northern California heat and UV exposure, storms, and seasonal changes.",
                        image: "/images/deck7.webp",
                        link: "/composite-decks-sacramento/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "Protect your Folsom home with durable siding solutions. We install premium James Hardie fiber cement and high-quality vinyl siding built for long-term performance.",
                        image: "/images/remodler1.webp",
                        link: "/siding-replacement/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Enhance curb appeal and improve energy efficiency with new windows and expert exterior trim work.",
                        image: "/images/remodler6.webp",
                        link: "/windows/",
                    },
                ]}
            />

            <SidingPageSection
                city="Folsom"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Folsom’s Trusted Deck and Siding Experts"
                heroText1="Yellowstone Renovation helps Folsom homeowners upgrade their exterior with high-quality siding installation and custom deck construction. Our work is clean, durable, and built to last."
                heroText2="We install James Hardie, LP SmartSide, vinyl, cedar, and metal siding — as well as Trex and TimberTech composite decks built for comfort and long-term durability."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Proudly serving Folsom, Rancho Cordova, Orangevale, and all Sacramento County with premium exterior remodeling."

                deckHeroTitle="Custom Decks Built for Folsom, CA"
                deckHeroText1="A well-designed deck creates new outdoor space for relaxing, hosting, and spending time with family. We build decks that feel great, look amazing, and withstand California weather."
                deckHeroText2="Choose from Trex, TimberTech, cedar, or pressure-treated wood — all installed with precision and care."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Offer in Folsom:"
                deckServices={[
                    "Custom deck design and layout planning",
                    "Trex and TimberTech composite deck installation",
                    "Pressure-treated and cedar wood decks",
                    "Covered decks, pergolas, and screened porches",
                    "Deck resurfacing and structural repairs",
                    "Stair, railing, and lighting installations",
                    "Permits and inspections handled start to finish"
                ]}
                deckCostTitle="Average Deck Cost in Folsom, CA"
                deckCostText="Composite decks in Folsom typically range from $45–$65 per sq. ft., while wood decks average $30–$50 per sq. ft. Each estimate includes labor, materials, cleanup, and inspections."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}

                stylesTitle="Popular Siding Styles for Folsom Homes"
                stylesIntro="We help Folsom homeowners pick siding styles that improve curb appeal and withstand weather — from traditional to modern designs."
                styles={[
                    {
                        name: "Lap Siding",
                        text: "Timeless design, durable protection, and low maintenance. Works well on most Folsom homes.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "A vertical, modern look popular in new builds and farmhouse-style homes.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes and Shingles",
                        text: "Perfect for accents and gables — offers a handcrafted, textured look.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Folsom"
                sidingTypesIntro="Our siding materials are built to last and backed by trusted brands and professional installation."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Folsom, CA"
                costIntro="Pricing varies based on home size, material choice, and trim details. Typical Folsom siding project cost ranges include:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.50 – $9.00 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.00 – $14.00 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.00 – $12.00 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$12.00 – $18.00 per sq. ft." },
                    { material: "Metal Siding", price: "$8.00 – $13.00 per sq. ft." },
                ]}

                extraSectionTitle="Why Folsom Homeowners Choose Yellowstone Renovation"
                extraSectionText="Homeowners across Sacramento County trust our team for quality craftsmanship, clean work, and honest communication from start to finish."
                extraPoints={[
                    "⭐ Local California-based crew — no random subcontractors",
                    "⭐ Licensed, insured, and experienced installers",
                    "⭐ 5-year workmanship warranty",
                    "⭐ 400+ successful exterior projects in Sacramento Metro",
                    "⭐ Free detailed estimates — no pressure"
                ]}

                ctaTitle="Request a Free Deck or Siding Estimate in Folsom"
                ctaText="Thinking about improving your home’s exterior? Get a free, no-obligation estimate from Yellowstone Renovation — serving Folsom, Rancho Cordova, Orangevale, and all Sacramento County."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}
