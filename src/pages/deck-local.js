import React from "react";
import SEO from "../components/SEO";

import HeroSplit1 from "../components/HeroSplit1";
import GallerySection from "../components/GallerySection";
import ProjectShowcase from "../components/ProjectShowcase";
import BenefitsGrid from "../components/BenefitsGrid";
import ServicesChips from "../components/ServicesChips";
import ProcessStepsDeck from "../components/ProcessStepsDeck";
import AboutUsVideo from "../components/AboutUsVideo";
import DeckFAQWithForm from "../components/DeckFAQWithForm";
import BottomHeroCtaDeck from "../components/BottomHeroCtaDeck";
import DeckHeader from "../components/DeckHeader";
import FeaturedTestimonial from "../components/FeaturedTestimonial";

export default function DeckPage() {
    return (
        <main>
            <SEO
                title="Deck Builder in Sacramento, CA | Composite & Wood Decks"
                description="Plan a custom composite or wood deck in Sacramento, CA, including railings, stairs, lighting, repairs and full deck replacement."
                pathname="/deck-local/"
                image="/images/deck-builder12.webp"
                serviceType={["Deck design", "Deck construction", "Deck replacement"]}
                areaServed={["Sacramento, CA", "Elk Grove, CA", "Roseville, CA", "Folsom, CA", "Rocklin, CA"]}
                breadcrumbs={[
                    { name: "Home", path: "/" },
                    { name: "Deck Builder", path: "/deck-local/" },
                ]}
            />

            <DeckHeader />

            <HeroSplit1
                img="/images/deck-builder12.webp"
                alt="Deck builder in Sacramento CA"
                reviews="Sacramento Deck & Exterior Specialists"
                title1="Sacramento’s"
                titleGreen="Deck Builder"
                title2="Custom Composite & Wood Decks Built to Last"
                promo="Free 3D Design + $1,500 Off"
                btnText="Schedule Free Estimate"
            />

            <FeaturedTestimonial />

            <section id="projects"></section>
            <GallerySection
                title="Deck Builder in Sacramento — Recent Projects"
                subtitle="A quick look at real deck projects we’ve completed across Sacramento, Elk Grove, Roseville, Folsom, and nearby areas. From wood decks to composite decking, stairs, rails, fascia, and picture-frame details — every project is built with clean craftsmanship and long-lasting quality."
                highlight="PROJECT GALLERY"
                background="#ffffff"
                images={[
                    "/images/deck/deck-sacramento39.webp",
                    "/images/deck/deck-sacramento102.webp",
                    "/images/deck/deck-sacramento22.webp",
                    "/images/deck/deck-sacramento15.webp",
                    "/images/deck/deck-sacramento9.webp",
                    "/images/deck/deck-sacramento07.webp",
                    "/images/deck/deck-sacramento04.webp",
                    "/images/deck/deck-sacramento4.webp",
                    "/images/deck/deck-sacramento95.webp",
                    "/images/deck/deck-sacramento41.webp",
                    "/images/deck/deck-sacramento01.webp",
                    "/images/deck/deck-sacramento48.webp",
                    "/images/deck/deck-sacramento46.webp",
                    "/images/deck/deck-sacramento44.webp",
                    "/images/deck/deck-sacramento53.webp",
                    "/images/deck/deck-sacramento54.webp",
                    "/images/deck/deck-sacramento60.webp",
                    "/images/deck/deck-sacramento65.webp",
                    "/images/deck/deck-sacramento91.webp",
                    "/images/deck-builder110.webp",
                    "/images/deck/deck-sacramento104.webp",

                ]}
            />

            <ProjectShowcase
                titleTop="From Old Space to"
                titleGreen="Beautiful Results"
                titleEnd="— See It Happen"
                text="Real deck transformations completed by our team across Sacramento and the surrounding area. See the difference thoughtful planning, strong construction, and clean craftsmanship can make."
                ctaText="Get My Free Consultation"
                items={[
                    {
                        before: "/images/deckbeforee.jpg",
                        after: "/images/deckafter.jpg",
                        location: "Sacramento, CA",
                        label: "Composite Deck Transformation",
                    },
                    {
                        before: "/images/deckbefore1.jpeg",
                        after: "/images/deckafter1.webp",
                        location: "Elk Grove, CA",
                        label: "Backyard Deck Remodel",
                    },
                    {
                        before: "/images/deckbefore2.webp",
                        after: "/images/deckafter2.webp",
                        location: "Sacramento, CA",
                        label: "Deck Replacement",
                    },
                    {
                        before: "/images/deckbefore3.png",
                        after: "/images/deckafter3.png",
                        location: "Roseville, CA",
                        label: "Outdoor Living Upgrade",
                    },
                    {
                        before: "/images/deckbefore4.png",
                        after: "/images/deckafter4.avif",
                        location: "Roseville, CA",
                        label: "Composite Deck Upgrade",
                    },
                    {
                        before:
                            "/images/Back_Deck_DIY_Patio_Shelter_Before_After_The_Foxes_Photography_2020_01.jpg",
                        after: "/images/IMG_3744.webp",
                        location: "Sacramento, CA",
                        label: "Backyard Transformation",
                    },
                ]}
            />

            <section id="benefits"></section>
            <BenefitsGrid />

            <ServicesChips />

            <section id="process"></section>
            <ProcessStepsDeck />

            <AboutUsVideo
                poster="/images/worker.png"
                videoUrl="https://www.youtube.com/embed/cqG0WZ2JzXk"
                title="Meet Yellowstone Renovation"
                text="We build decks and exterior upgrades with clear pricing, clean job sites, and strong workmanship."
                subline="Serving Sacramento, Elk Grove, Roseville & nearby"
                pill="Deck Builder & Siding Contractor"
                showStars={false}
            />

            <DeckFAQWithForm />

            <BottomHeroCtaDeck
                bgImage="/images/deck/deck-sacramento27.webp"
                phoneDisplay="(916) 571-6919"
                phoneTel="9165716919"
            />
        </main>
    );
}
