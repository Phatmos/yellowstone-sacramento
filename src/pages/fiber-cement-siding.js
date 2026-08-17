import * as React from "react"
import Layout from "../components/Layout"
import Hero2 from "../components/Hero2";
import GallerySection from "../components/GallerySection";
import DealerBanner from "../components/DealerBanner";
import BeforeAfter from "../components/BeforeAfter";
import MainSectionSideBar from "../components/MainSectionSideBar";
import "../styles/global.css"
import SEO from "../components/SEO";
import Services from "../components/Services.js"


export default function Home() {
    return (
        <Layout>

            {/* ✅ Primary SEO Component */}
            <SEO
                title="James Hardie® Fiber Cement Siding | Sacramento, CA Contractor"
                description="Install HardiePlank® siding with Sacramento’s top-rated exterior contractor. Built for Northern California heat and UV exposure, storms & fire-resistance — backed by industry-leading manufacturer warranties."
                pathname="/fiber-cement-siding/"
                image="https://sacramento.yellowstonerenovation.com/images/remodler1.webp"
            />

            {/* ✅ Local Business Schema */}

            <Hero2
                topText="JAMES HARDIE® SIDING CONTRACTOR"
                title="Premium Fiber Cement Siding Installed to Perfection"
                description="Built to resist moisture, cracking, and fading — Hardie siding gives your home long-lasting strength and beauty."
                backgroundImage="/images/remodler13.webp"
                overlayOpacity={0.6}
                formTitle="Get a Hardie Siding Estimate"
                formSubtitle="Authorized Hardie experts serving Sacramento & the Sacramento region."
                selectLabel="Select Hardie Product"
                selectOptions={[
                    "HardiePlank® Lap Siding",
                    "HardiePanel® Vertical Siding",
                    "HardieShingle® & Trim",
                    "Repair / ColorPlus Replacement"
                ]}
                ctaText="Request Hardie Quote"
            />


            <GallerySection
                title="Sacramento’s Trusted Fiber Cement Siding Experts"
                subtitle="Fiber cement siding combines the look of real wood with the long-lasting performance of cement. Whether you want a traditional or modern finish, our installations are built for beauty, strength, and low maintenance."
                highlight="Fiber Cement Siding Experts"
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
                    "/images/remodler23.webp",
                    "/images/remodler15.webp",
                    "/images/remodler26.webp",
                    "/images/deck3.webp",
                    "/images/remodler18.webp",
                    "/images/remodler19.webp",
                    "/images/remodler20.webp",
                    "/images/remodler24.webp",
                    "/images/deck3.webp",
                ]}
            />
            <BeforeAfter
                title="Fiber Cement Siding Before & After"
                description="See how we transform outdated exteriors with durable, fire-resistant fiber cement siding engineered to withstand California’s climate while keeping homes beautiful year-round."
                buttonText="View Fiber Cement Projects"
                buttonLink="/projects#fiber-cement"
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
                title="Fiber Cement Siding Services"
                subtitle="Durable, fire-resistant, and beautifully finished siding — engineered for Sacramento’s weather and built to last for decades."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Fiber Cement Siding Installation",
                        description:
                            "Upgrade your home with long-lasting protection. Fiber cement siding resists fire, pests, rot, and harsh weather — the most durable choice for California homes.",
                        image: "/images/remodler4.webp",
                        link: "/contact",
                    },
                    {
                        title: "James Hardie® Siding",
                        description:
                            "America’s #1 siding brand — HardiePlank® delivers premium durability and stunning curb appeal with ColorPlus® technology for fade resistance.",
                        image: "/images/remodler5.webp",
                        link: "/james-hardie-siding",
                    },
                    {
                        title: "Board & Batten Hardie Siding",
                        description:
                            "Create a bold vertical farmhouse look with fiber cement board-and-batten siding — combining modern design and long-term performance.",
                        image: "/images/remodler24.webp",
                        link: "/siding-replacement/",
                    },
                    {
                        title: "Trim, Fascia & Weather Protection",
                        description:
                            "HardieTrim® and vented soffits provide a complete weatherproof exterior system — stronger, safer and lower-maintenance than wood.",
                        image: "/images/remodler13.webp",
                        link: "/metal-siding",
                    },
                ]}
            />

            <DealerBanner
                title="Complete Fiber Cement Siding Replacement & Installation"
                highlight="Fiber Cement Siding"
                description="When you choose fiber cement siding, you’re choosing strength and style that last for decades. Our team provides expert installation of top brands like James Hardie®, ensuring precision alignment, superior moisture protection, and a stunning exterior finish. From removing old siding to flawless color-matched installation — we make your home look exceptional and stay protected year-round."
                backgroundColor="#ffffff"
                highlightColor="#247704"
            />

            <MainSectionSideBar
                title="Fiber Cement Siding Contractors in Sacramento, CA"
                sections={[
                    {
                        heading: "Fiber Cement Siding in Sacramento CA — Strong, Beautiful & Built to Last",
                        text: `Fiber cement siding is one of the strongest, most long-lasting siding solutions available for California homes. At Yellowstone Renovation, we install premium fiber cement siding selected to withstand intense sun, summer heat, seasonal rain, pests, and temperature changes — without the maintenance demands of natural wood. Whether you’re updating an older home or building new, fiber cement siding delivers the look of painted wood with exceptional performance. Searching for “fiber cement siding contractor near me in Sacramento, CA”? You’re in the right place.`
                    },
                    {
                        heading: "James Hardie® Siding — The #1 Brand Homeowners Trust",
                        text: `We proudly install James Hardie® fiber cement siding — the industry leader in strength, safety, and curb appeal. Hardie siding is non-combustible, pest-resistant, and engineered specifically for local climate conditions. With dozens of modern colors and styles, it enhances your home with timeless beauty while providing superior weather protection. HardiePlank®, HardiePanel®, board-and-batten, and HardieShingle® — we install it all with certified precision.`
                    },
                    {
                        heading: "Fade-Resistant Colors That Look Beautiful for Years",
                        text: `James Hardie ColorPlus® Technology includes multiple coats of baked-on finish — designed to resist peeling, cracking, and fading under hot California summers. This means less maintenance and a home that continues looking amazing season after season.`
                    },
                    {
                        heading: "Low-Maintenance Exterior Protection",
                        text: `Fiber cement siding offers the natural beauty of wood without constant upkeep. No wood rot. No termites. No repainting every few years. Just reliable durability that protects your investment. It’s the perfect option for homeowners wanting long-term value and peace of mind.`
                    },
                    {
                        heading: "Storm-Ready Strength for California Weather",
                        text: `Sacramento homeowners choose fiber cement siding for fire resistance, dimensional stability, and reliable performance through strong sun and seasonal rain. Correct flashing, clearances, and moisture management help protect the wall assembly behind the siding.`
                    },
                    {
                        heading: "Experts in Fiber Cement Siding Replacement",
                        text: `Whether your home has outdated vinyl, wood siding with rot, or storm damage — our team handles full removal and replacement with new, stronger siding. We carefully inspect sheathing, install proper flashing and weather barriers, and seal every seam for full moisture protection.`
                    },
                    {
                        heading: "Why Homeowners Choose Yellowstone Renovation",
                        text: `We are fully licensed, insured, and rated highly by customers throughout Sacramento, Elk Grove, Roseville, Folsom, and Rocklin. With detailed project planning, clean installations, and transparent pricing — we make home improvement stress-free. Our craftsmanship ensures your home not only looks beautiful, but stays protected for decades.`
                    },
                    {
                        heading: "Get a Free Fiber Cement Siding Quote",
                        text: `Ready to upgrade to a stronger, longer-lasting exterior? Contact us today for a free consultation and material comparison. We’ll help you choose the right Hardie siding style, color, and trim to bring your dream exterior to life. Beautiful, durable, and worry-free — that’s the Yellowstone Renovation promise.`
                    }
                ]}

                offers={[
                    {
                        image: "/images/remodler5.webp",
                        text: "Save $2,000 on James Hardie® Siding Installation — Limited Time",
                        button: "Claim Offer",
                        link: "/contact"
                    },
                    {
                        image: "/images/remodler4.webp",
                        text: "View Our Local Fiber Cement Siding Projects",
                        button: "See Gallery",
                        link: "/projects"
                    }
                ]}

                whyUs={[
                    "Certified James Hardie® siding installers",
                    "Top-rated fiber cement siding contractor in Sacramento CA",
                    "Fade-resistant finishes built for California climate",
                    "Licensed, insured, and trusted locally",
                    "Superior craftsmanship with clean job sites"
                ]}

                projects={[
                    { image: "/images/remodler5.webp", title: "HardiePlank Lap Siding" },
                    { image: "/images/remodler1.webp", title: "Board-and-Batten Upgrade" },
                    { image: "/images/remodler4.webp", title: "Full Exterior Transformation" },
                    { image: "/images/remodler7.webp", title: "Hardie + Trim Refresh" }
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
