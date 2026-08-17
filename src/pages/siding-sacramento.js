import * as React from "react"
import Layout from "../components/Layout"
import Hero2 from "../components/Hero2";
import DealerBanner from "../components/DealerBanner";
import BeforeAfter from "../components/BeforeAfter";
import GallerySection from "../components/GallerySection";
import MainSection from "../components/mainSection.js";
import "../styles/global.css"
import Services from "../components/Services.js"
import WindowsPromoSection from "../components/WindowsPromoSection";
import SEO from "../components/SEO";
import MainSectionSideBar from "../components/MainSectionSideBar";

export default function Home() {
    return (
        <Layout>

            <SEO
                title="Siding Installer in Sacramento, CA | Yellowstone Renovation"
                description="Need a siding installer in Sacramento, CA? We replace and install vinyl, James Hardie® fiber cement, and LP® SmartSide® with clean detail and strong warranties. Get a free estimate."
                pathname="/siding-sacramento/"
                image="https://sacramento.yellowstonerenovation.com/images/remodler5.webp"
            />

            {/* Local Business + Service Schema */}

            <Hero2
                topText="LOCAL SIDING INSTALLER — SACRAMENTO, CA"
                title="Beautiful, Durable Siding Installed the Right Way"
                description="We replace and install vinyl, James Hardie® fiber cement, and LP® SmartSide® with clean lines, correct flashings, and a watertight finish built for California weather."
                backgroundImage="/images/remodler9.webp"
                formTitle="Get a Free Siding Estimate"
                selectLabel="Which Siding Type?"
                selectOptions={[
                    "Vinyl Siding",
                    "James Hardie® Fiber Cement",
                    "LP® SmartSide®",
                    "Board & Batten",
                ]}
                ctaText="Get Estimate"
            />

            <GallerySection
                title="Siding Installer in Sacramento — Recent Projects"
                subtitle="A quick look at real siding installs we’ve completed across Sacramento, Elk Grove, Roseville, Folsom, and nearby areas. Same attention to detail on every home: straight courses, tight trim lines, and properly sealed penetrations."
                highlight="PROJECT GALLERY"
                background="#ffffff"
                images={[
                    "/images/remodler1.webp",
                    "/images/remodler15.webp",
                    "/images/remodler13.webp",
                    "/images/remodler4.webp",
                    "/images/remodler5.webp",
                    "/images/remodler6.webp",
                    "/images/remodler23.webp",
                    "/images/remodler9.webp",
                    "/images/deck-builder.webp",
                    "/images/remodler11.webp",
                    "/images/remodler24.webp",
                    "/images/remodler13.webp",
                    "/images/remodler25.webp",
                    "/images/remodler15.webp",
                    "/images/remodler26.webp",
                    "/images/deck3.webp",
                    "/images/remodler18.webp",
                    "/images/remodler19.webp",
                    "/images/remodler28.webp",
                    "/images/remodler23.webp",
                    "/images/deck3.webp",
                ]}
            />

            <Services
                title="Professional Siding Installation & Replacement Services"
                subtitle="We help homeowners protect and beautify their homes with durable, weather-resistant siding. Our expert installers follow manufacturer guidelines to ensure every panel, trim, and joint is built to last."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Vinyl Siding Installation",
                        description:
                            "Affordable, low-maintenance, and versatile — vinyl siding is perfect for homeowners seeking lasting protection without constant upkeep. We install every panel with precision, ensuring straight lines, proper expansion spacing, and watertight seams. Choose from dozens of modern colors and textures for a refreshed, clean exterior.",
                        image: "/images/remodler1.webp",
                        link: "/vinyl-siding",
                    },
                    {
                        title: "James Hardie® Fiber Cement Siding",
                        description:
                            "The industry’s top choice for strength and beauty. James Hardie® siding resists fire, moisture, pests, and fading — making it ideal for harsh weather conditions. Our certified team installs HardiePlank®, HardiePanel®, and board-and-batten profiles following factory specifications for flawless results and full warranty protection.",
                        image: "/images/remodler5.webp",
                        link: "/james-hardie-siding",
                    },
                    {
                        title: "Wood Siding Installation",
                        description:
                            "Bring natural warmth and timeless style to your home with authentic wood siding. We offer cedar, redwood, and other premium woods, carefully sealed and installed to handle California’s changing climate. Every project is customized for your home’s design — from classic lap siding to modern vertical layouts — creating a rich, natural exterior that stands out.",
                        image: "/images/remodler15.webp",
                        link: "/wood-siding",
                    },
                    {
                        title: "Metal Siding Installation",
                        description:
                            "Modern, durable, and virtually maintenance-free — metal siding provides bold curb appeal and unbeatable protection. We install steel and aluminum siding systems with precision fasteners, hidden seams, and fade-resistant coatings. Ideal for both residential and commercial buildings, metal siding offers excellent energy efficiency and a clean, contemporary finish built to last decades.",
                        image: "/images/remodler24.webp",
                        link: "/metal-siding",
                    },
                ]}
            />

            <DealerBanner
                title="Need a Reliable Siding Installer in Sacramento?"
                highlight="Sacramento Siding Installer"
                description="We’re a local crew that shows up, keeps the site clean, and installs siding the way it’s meant to be installed. Expect honest pricing, clear timelines, and craftsmanship you’ll notice every time you pull into the driveway."
                backgroundColor="#ffffff"
                highlightColor="#247704"
            />

            <BeforeAfter
                title="Siding Before & After"
                description="See the difference proper prep, flashing, and finish details make. New siding transforms both curb appeal and protection."
                buttonText="View Full Siding Projects"
                buttonLink="/projects"
                accentColor="#247704"
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

            <MainSectionSideBar
                title="Siding Installers in Sacramento, CA"
                sections={[
                    {
                        heading: "Siding Installers in Sacramento, CA — Professional Exterior Upgrades",
                        text: `Yellowstone Renovation is your trusted local siding installer in Sacramento, CA. We provide complete siding installation, replacement, and repair services designed to enhance your home's protection and appearance. Our siding contractors specialize in vinyl, James Hardie® fiber cement, and LP® SmartSide® installations — materials selected for Northern California sun, heat, and seasonal rain. Whether you’re updating an older home or completing new construction, our team focuses on craftsmanship that adds long-term value and beauty.`,
                    },
                    {
                        heading: "Expert Siding Installation Services for Every Home Style",
                        text: `Our Sacramento siding installers combine precision craftsmanship with durable materials to deliver flawless exterior finishes. We handle every step — from removing old siding and preparing the surface to sealing, flashing, and final detailing. Choose from lap, shake, vertical board-and-batten, or modern composite siding styles. Every project is tailored to your architecture and climate needs to ensure your home not only looks exceptional but performs for decades.`,
                    },
                    {
                        heading: "James Hardie® Siding — Installed by Certified Professionals",
                        text: `As certified James Hardie® siding installers, we follow manufacturer guidelines to the letter, ensuring proper nailing patterns, flashing, and joint spacing for warranty protection. HardiePlank®, HardiePanel®, and HardieShingle® are the industry’s most reliable materials — resistant to fire, pests, moisture, and fading. Our Sacramento team installs Hardie siding with precision so your home stays low-maintenance, energy-efficient, and beautiful in every season.`,
                    },
                    {
                        heading: "Vinyl Siding Installation in Sacramento — Affordable & Long-Lasting",
                        text: `Vinyl siding remains one of the most popular and cost-effective exterior solutions for California homeowners. It’s low-maintenance, fade-resistant, and available in dozens of colors and textures. Our installers ensure clean, even alignment, seamless edges, and a watertight seal that protects against moisture and drafts. With proper installation, vinyl siding can last 30–40 years while keeping your home looking fresh and inviting.`,
                    },
                    {
                        heading: "LP® SmartSide® Siding — Engineered Wood with Natural Beauty",
                        text: `LP® SmartSide® offers the warmth and natural look of real wood with advanced durability. It’s treated with SmartGuard® technology to resist fungal decay, termites, and moisture damage — ideal for California’s variable weather. Our skilled installers bring years of experience to every LP SmartSide® project, ensuring tight seams, reinforced corners, and a smooth, high-quality finish that enhances your home's architectural character.`,
                    },
                    {
                        heading: "Siding Repair and Storm Damage Restoration",
                        text: `If your siding is cracked, warped, or loosened by strong winds, we offer complete siding repair and restoration services in Sacramento and surrounding cities. Our experts inspect for hidden damage, replace affected panels, and resecure your siding to restore full protection. We also assist with storm-related insurance claims to ensure you get the coverage you deserve — handling everything from assessment to documentation.`,
                    },
                    {
                        heading: "Soffit, Fascia & Trim Installation — Finishing Details That Matter",
                        text: `Your siding system works best when it’s fully sealed and ventilated. We install matching soffits, fascia, window trim, and drip-edge flashing to prevent attic moisture and roof edge decay. These finishing details not only improve ventilation and performance but also give your home a cohesive, polished appearance. Every trim line is carefully measured and color-matched for a professional finish.`,
                    },
                    {
                        heading: "Custom Exterior Design, Colors, and Materials",
                        text: `At Yellowstone Renovation, we believe every home should reflect the owner’s personality. Our siding installers help you choose from hundreds of color combinations, woodgrain textures, and profiles to complement your roof, windows, and gutters. We offer visual previews and color consultations to make sure your exterior design is balanced, modern, and built to last. From bold modern panels to classic horizontal siding — your home will stand out beautifully.`,
                    },
                    {
                        heading: "Why Homeowners Choose Our Sacramento Siding Installers",
                        text: `Homeowners throughout Sacramento, Elk Grove, Roseville, Folsom, and Rocklin trust Yellowstone Renovation for professional siding installation. We’re fully licensed and insured, offering transparent pricing, clean job sites, and a workmanship warranty up to 5 years. With over 130 completed projects in Sacramento Metro, our reputation is built on reliability, precision, and customer satisfaction. When searching for "siding installers near me", homeowners consistently choose our team for results that last.`,
                    },
                    {
                        heading: "Get Your Free Siding Installation Estimate in Sacramento, CA",
                        text: `Ready to transform your home with new siding? Contact Yellowstone Renovation today to schedule your free consultation. Our experts will inspect your property, explain material options, and provide a clear, itemized quote with no hidden fees. Whether you’re looking for vinyl, James Hardie®, or LP SmartSide® installation, we’ll help you find the perfect balance of beauty, strength, and value. Call today and see why we’re Sacramento’s preferred siding installers.`,
                    },
                ]}

                offers={[
                    {
                        image: "/images/remodler24.webp",
                        text: "Ask about seasonal pricing on full siding replacement",
                        button: "Claim Offer",
                        link: "/contact"
                    },
                    {
                        image: "/images/remodler13.webp",
                        text: "See recent siding projects near you",
                        button: "See Gallery",
                        link: "/projects"
                    }
                ]}

                whyUs={[
                    "Local Sacramento siding installer",
                    "James Hardie®, LP® SmartSide®, and vinyl experts",
                    "Straight courses, tight trim, correct flashing",
                    "Licensed & insured",
                    "Friendly crew • Daily cleanup • Clear timelines"
                ]}

                projects={[
                    { image: "/images/remodler24.webp", title: "Crisp Trim & Corners" },
                    { image: "/images/remodler13.webp", title: "Board & Batten Finish" },
                    { image: "/images/remodler1.webp", title: "Full Vinyl Refresh" },
                    { image: "/images/remodler4.webp", title: "HardiePlank® Upgrade" }
                ]}
                findUs={[
                    { name: "Yelp", rating: "4.6/5", logo: "/icons/Yelp.webp" },
                    { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
                ]}
                blog={[
                    {
                        title: "Vinyl vs. Fiber Cement: What Fits Your Sacramento Home?",
                        date: "April 12th, 2025",
                        author: "Vasyl",
                        image: "/images/deck6.webp",
                    },
                    {
                        title: "How Proper Flashing Prevents Moisture Problems",
                        date: "May 20th, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "Siding Colors That Boost Curb Appeal",
                        date: "June 5th, 2025",
                        author: "Vasyl",
                        image: "/images/deck8.webp",
                    },
                ]}
                partners={["/icons/jameshardie.webp", "/icons/Yelp.webp"]}
            />

            {/* Repurpose the slider strictly for siding topics */}
            <WindowsPromoSection
                slides={[
                    {
                        image: "/images/remodler11.webp",
                        tag: "Siding Replacement",
                        heading: "Transform Your Home Exterior",
                        description: "Fresh profiles, straight lines, sealed edges. A clean siding install changes everything.",
                        button: "Explore Siding",
                        link: "/siding-sacramento",
                        projectImage: "/images/remodler24.webp",
                        projectLocation: "Sacramento, CA",
                        projectInfo1: "James Hardie®",
                        projectInfo2: "Board & Batten",
                        projectName: "HardiePlank Upgrade",
                        projectPrice: "From 14,995"
                    },
                    {
                        image: "/images/remodler13.webp",
                        tag: "Fiber Cement",
                        heading: "James Hardie® Pros",
                        description: "Premium look, engineered durability, and manufacturer-backed performance.",
                        button: "See Hardie Styles",
                        link: "/james-hardie-siding",
                        projectImage: "/images/remodler25.webp",
                        projectLocation: "Elk Grove, CA",
                        projectInfo1: "ColorPlus®",
                        projectInfo2: "Premium Trim",
                        projectName: "HardiePanel System",
                        projectPrice: "From 18,900"
                    },
                    {
                        image: "/images/deck3.webp",
                        tag: "Vinyl Siding",
                        heading: "Affordable & Low-Maintenance",
                        description: "Modern color palettes and textures with strong value for California homes.",
                        button: "View Vinyl Options",
                        link: "/vinyl-siding",
                        projectImage: "/images/remodler1.webp",
                        projectLocation: "Roseville, CA",
                        projectInfo1: "Insulated",
                        projectInfo2: "Color-Stable",
                        projectName: "Vinyl Refresh",
                        projectPrice: "From 9,950"
                    }
                ]}
            />
        </Layout>
    )
}
