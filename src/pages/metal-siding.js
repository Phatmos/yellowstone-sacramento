import * as React from "react"
import Layout from "../components/Layout"
import Hero2 from "../components/Hero2";
import GallerySection from "../components/GallerySection";
import DealerBanner from "../components/DealerBanner";
import BeforeAfter from "../components/BeforeAfter";
import MainSection from "../components/mainSection.js";
import "../styles/global.css"
import SEO from "../components/SEO";
import MainSectionSideBar from "../components/MainSectionSideBar";
import Services from "../components/Services.js"
import { Helmet } from "react-helmet";

export default function Home() {
    return (
        <Layout>
            <Helmet>
                <meta
                    name="keywords"
                    content="Metal siding Sacramento CA, Steel siding California, Aluminum siding contractor Sacramento, Modern exterior siding Sacramento, Metal cladding installation"
                />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Metal Siding Installation in Sacramento, CA | Durable Steel & Aluminum Siding" />
                <meta property="og:description" content="Modern metal siding with unmatched durability. Steel, aluminum & custom architectural panels installed professionally in Sacramento & Sacramento Metro. Free estimates." />
                <meta property="og:url" content="https://sacramento.yellowstonerenovation.com/metal-siding/" />
                <meta property="og:image" content="https://sacramento.yellowstonerenovation.com/images/remodler15.webp" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Steel & Aluminum Metal Siding Contractor in Sacramento, CA" />
                <meta name="twitter:description" content="Architectural-grade panel siding built for California weather — no rot, no warping, extreme durability!" />
                <meta name="twitter:image" content="https://sacramento.yellowstonerenovation.com/images/remodler15.webp" />
            </Helmet>

            {/* ✅ PAGE SEO */}
            <SEO
                title="Metal Siding Installation in Sacramento, CA | Steel & Aluminum Cladding"
                description="Upgrade your home with ultra-durable metal siding. Steel & aluminum siding resists fire, pests, Northern California heat and UV exposure & high-wind storms. Installed by expert siding contractors in Sacramento, CA."
                pathname="/metal-siding/"
                image="https://sacramento.yellowstonerenovation.com/images/remodler15.webp"
            />

            {/* ✅ Local Business Schema */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Yellowstone Renovation",
                        "url": "https://sacramento.yellowstonerenovation.com/metal-siding/",
                        "image": "https://sacramento.yellowstonerenovation.com/images/remodler15.webp",
                        "telephone": "916-571-6919",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Sacramento",
                            "addressRegion": "CA",
                            "addressCountry": "US"
                        },
                        "serviceType": [
                            "Steel Siding Installation",
                            "Aluminum Siding Installation",
                            "Modern Metal Exterior Cladding"
                        ],
                        "areaServed": [
                            "Sacramento, CA",
                            "Elk Grove, CA",
                            "Roseville, CA",
                            "Citrus Heights, CA",
                            "Folsom, CA"
                        ]
                    })}
                </script>

                {/* ✅ FAQ SCHEMA */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Is metal siding good for California weather?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — steel and aluminum siding resist moisture, fire, hail, and pests while performing well in Sacramento’s summer heat and seasonal temperature changes."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Does metal siding rust?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Quality steel siding with anti-corrosion coatings and aluminum siding do not rust when installed correctly with proper ventilation and clearances."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is metal siding energy-efficient?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — insulated metal siding improves efficiency and the reflective finish reduces heat absorption, especially in direct sunlight."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <Hero2
                topText="METAL SIDING EXPERTS"
                title="Strong, Modern, Weather-Resistant Metal Siding"
                description="Steel & aluminum siding engineered to protect your home against the harshest conditions."
                backgroundImage="/images/remodler15.webp"
                formTitle="Metal Siding Estimate"
                selectLabel="Choose a Metal Siding Option"
                selectOptions={[
                    "Steel Lap Siding",
                    "Vertical Metal Panels",
                    "Metal Siding Repair",
                    "Seamless Soffit/Fascia"
                ]}
                ctaText="Request Quote"
            />

            <GallerySection
                title="Sacramento’s Trusted Metal Siding Experts"
                subtitle=" Metal siding is the perfect combination of modern design and long-term durability. Whether you’re upgrading your home or protecting a commercial property, our installations deliver unmatched weather resistance, energy efficiency, and curb appeal."
                highlight=" Metal Siding Experts"
                background="#ffffff"
                images={[
                    "/images/remodler1.webp",
                    "/images/remodler15.webp",
                    "/images/remodler13.webp",
                    "/images/remodler4.webp",
                    "/images/remodler5.webp",
                    "/images/remodler6.webp",
                    "/images/remodler24.webp",
                    "/images/remodler9.webp",
                    "/images/deck-builder.webp",
                    "/images/remodler11.webp",
                    "/images/remodler24.webp",
                    "/images/remodler13.webp",
                    "/images/remodler27.webp",
                    "/images/remodler15.webp",
                    "/images/remodler27.webp",
                    "/images/deck3.webp",
                    "/images/remodler18.webp",
                    "/images/remodler19.webp",
                    "/images/remodler20.webp",
                    "/images/remodler13.webp",
                    "/images/deck3.webp",
                ]}
            />
            <BeforeAfter
                title="Metal Siding Before & After"
                description="See how durable and stylish metal siding can transform outdated homes into modern, low-maintenance exteriors. Built to resist dents, moisture, fire, and fading — this upgrade delivers long-lasting protection in every season."
                buttonText="Explore Metal Siding Projects"
                buttonLink="/projects"
                accentColor="#0a923d"
                images={[
                    {
                        before: "/images/deckafter2.webp",
                        after: "/images/deckbefore2.webp"
                    },
                    {
                        before: "/images/sidingafter.webp",
                        after: "/images/sidingbefore.webp"
                    }
                ]}
            />

            <Services
                title="Metal Siding Services"
                subtitle="Strong, fire-resistant, weather-proof siding built to protect your home in every season — engineered specifically for California conditions."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Metal Siding Installation & Replacement",
                        description:
                            "Upgrade to a modern exterior that handles sun, heat, winter rain, and pests with ease. Metal siding offers unmatched durability and decades of protection with minimal maintenance.",
                        image: "/images/remodler1.webp",
                        link: "/metal-siding",
                    },
                    {
                        title: "Steel Siding",
                        description:
                            "Premium steel siding built tough to resist dents, fire, and weather damage. A smart long-term investment with a bold architectural look and increased home value.",
                        image: "/images/remodler7.webp",
                        link: "/contact",
                    },
                    {
                        title: "Aluminum Siding",
                        description:
                            "Lightweight, affordable, and rust-resistant — a great option for humid or coastal environments. Available in textured wood-grain finishes for stylish exterior design.",
                        image: "/images/remodler24.webp",
                        link: "/contact",
                    },
                    {
                        title: "Metal Fascia, Soffit & Trim Systems",
                        description:
                            "Protect your home’s structure from moisture and pests with strong metal trim — designed to improve ventilation and create a clean, cohesive exterior style.",
                        image: "/images/remodler13.webp",
                        link: "/contact",
                    },
                ]}
            />

            <DealerBanner
                title="Complete Metal Siding Replacement & Installation"
                highlight="Metal Siding Replacement"
                description="Our expert team provides complete metal siding services — from removal of old materials to precise installation of steel or aluminum panels. We work with top-quality, rust-resistant siding that’s energy-efficient, fire-safe, and nearly maintenance-free. Choose from a variety of finishes, textures, and colors to match your home’s design while ensuring maximum protection against the elements."
                backgroundColor="#ffffff"
                highlightColor="#247704"
            />

            <BeforeAfter />
            <MainSectionSideBar
                title="Metal Siding Contractors in Sacramento, CA"
                sections={[
                    {
                        heading: "Metal Siding in Sacramento CA — Modern Strength & Long-Term Protection",
                        text: `Metal siding is becoming one of the most popular home exterior upgrades in California thanks to its unmatched durability and sleek modern look. At Yellowstone Renovation, we install high-quality steel and aluminum siding engineered to resist moisture, fading, warping, and pests — no matter the weather. If your goal is long-term protection with a contemporary style, metal siding is a smart investment. Searching for “metal siding contractors near me in Sacramento CA”? We deliver professional installation backed by strong warranties and exceptional workmanship.`
                    },
                    {
                        heading: "Steel & Aluminum Siding — Stronger Exterior Performance",
                        text: `Our metal siding systems are weather-resistant and built to outperform traditional wood or standard vinyl products. Steel siding offers maximum strength against storms and wind, while aluminum provides long-lasting rust resistance — ideal for humid conditions. Both materials deliver a clean architectural look that instantly elevates curb appeal.`
                    },
                    {
                        heading: "Fire, Pest & Rot Resistant",
                        text: `Metal siding will not rot, warp, burn, or attract termites. That means fewer repairs, longer lifespan, and better long-term security for your home’s structure. It’s one of the most durable siding options available for California’s climate.`
                    },
                    {
                        heading: "Energy-Efficient Options to Lower Utility Bills",
                        text: `Insulated metal siding helps reduce heat absorption in the summer and maintain warmth in the winter — leading to improved energy efficiency. Better insulation, quieter interiors, and lower utility bills make metal siding a smart upgrade for comfort and efficiency.`
                    },
                    {
                        heading: "Low Maintenance + Easy Cleaning",
                        text: `Metal siding keeps its shape and appearance year after year without constant upkeep. A quick wash is all it takes to look brand new. No repainting. No repairs from swelling or cracking. No more high-maintenance siding headaches.`
                    },
                    {
                        heading: "Modern Styles & Bold Exterior Design",
                        text: `Choose from smooth finishes, vertical panels, corrugated styles, or wood-grain textured metal for a rustic-meets-modern look. Metal siding pairs perfectly with black trim, large windows, and updated deck areas — transforming a home into a new architectural statement.`
                    },
                    {
                        heading: "Why Homeowners Choose Yellowstone Renovation",
                        text: `We are licensed, insured, and trusted across Sacramento and Sacramento Metro for premium siding installation. Our process is clean, efficient, and detail-oriented — ensuring watertight performance, strong attachment, and lasting beauty. We proudly serve Sacramento, Elk Grove, Roseville, Folsom, Rocklin and more — delivering results that stand the test of time.`
                    },
                    {
                        heading: "Free Metal Siding Estimate in Sacramento CA",
                        text: `Ready to upgrade your home’s exterior with modern protection? Contact Yellowstone Renovation today for your free consultation. Our experts will help you compare materials, explore style options, and create a stunning design that fits your home and budget.`
                    }
                ]}

                offers={[
                    {
                        image: "/images/remodler5.webp",
                        text: "Get $2,000 OFF Metal Siding Installation — Limited Time",
                        button: "Claim Discount",
                        link: "/contact"
                    },
                    {
                        image: "/images/remodler7.webp",
                        text: "See Completed Metal Siding Projects Nearby",
                        button: "View Gallery",
                        link: "/projects"
                    }
                ]}

                whyUs={[
                    "Steel & aluminum siding built for California weather",
                    "Modern architectural styles + customizable colors",
                    "Fire, pest & rot resistant materials",
                    "Energy-efficient insulated siding options",
                    "Local 5-star rated siding contractor"
                ]}

                projects={[
                    { image: "/images/remodler5.webp", title: "Steel Siding Exterior" },
                    { image: "/images/remodler7.webp", title: "Vertical Metal Panel Upgrade" },
                    { image: "/images/remodler13.webp", title: "Modern Aluminum Exterior" },
                    { image: "/images/remodler24.webp", title: "Siding + Trim Transformation" }
                ]}
                findUs={[
                    { name: "Yelp", rating: "4.6/5", logo: "/icons/Yelp.webp" },
                    { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
                ]}
                blog={[
                    {
                        title: "Choosing the Right Deck Material for California Weather",
                        date: "April 12th, 2025",
                        author: "Vasyl",
                        image: "/images/deck6.webp",
                    },
                    {
                        title: "Top 5 Deck Design Ideas for Sacramento Homes",
                        date: "May 20th, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "The Long-Term Value of Adding a Custom Deck",
                        date: "June 5th, 2025",
                        author: "Vasyl",
                        image: "/images/deck8.webp",
                    },
                ]}
                partners={["/icons/jameshardie.webp", "/icons/Yelp.webp"]}
            />
        </Layout>
    )
}
