import React from "react";
import Layout from "../components/Layout";
import HeroModern from "../components/HeroModern";
import GallerySection from "../components/GallerySection";
import DealerBanner from "../components/DealerBanner";
import Services from "../components/Services.js"
import MainSectionSideBar from "../components/MainSectionSideBar";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet";

import WindowTypesSection from "../components/WindowTypesSection";




export default function ServiceAreasPage() {
    return (
        <Layout>
            <Helmet>
                {/* ✅ Targeted Windows Keywords */}
                <meta
                    name="keywords"
                    content="Replacement windows Sacramento CA, Window installation Sacramento, Energy efficient windows California, Vinyl windows Sacramento CA, Window contractor Sacramento"
                />

                {/* ✅ Open Graph for Facebook / Messengers */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Replacement Windows in Sacramento, CA | Increase Efficiency & Comfort" />
                <meta property="og:description" content="Upgrade to high-efficiency windows that eliminate drafts, reduce noise & lower energy bills. Free estimates in Sacramento & Sacramento Metro!" />
                <meta property="og:image" content="https://sacramento.yellowstonerenovation.com/images/window3.webp" />
                <meta property="og:url" content="https://sacramento.yellowstonerenovation.com/windows/" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                {/* ✅ Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Replacement Windows in Sacramento, CA | Professional Installation" />
                <meta name="twitter:description" content="Modern energy-efficient windows installed by Sacramento’s trusted exterior contractor. Fast, free estimates." />
                <meta name="twitter:image" content="https://sacramento.yellowstonerenovation.com/images/window3.webp" />
            </Helmet>

            {/* ✅ Core SEO component */}
            <SEO
                title="Replacement Windows in Sacramento, CA | Yellowstone Renovation"
                description="Boost home comfort & energy savings with modern vinyl, double-pane & Low-E windows installed by certified pros. Serving Sacramento, Roseville, Elk Grove & Folsom."
                pathname="/windows/"
                image="https://sacramento.yellowstonerenovation.com/images/window3.webp"
            />

            {/* ✅ Structured Data — Local Service Optimization */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Yellowstone Renovation",
                        "url": "https://sacramento.yellowstonerenovation.com/windows/",
                        "serviceType": [
                            "Window Replacement",
                            "Vinyl Windows",
                            "Energy Efficient Windows",
                            "New Construction Windows"
                        ],
                        "image": "https://sacramento.yellowstonerenovation.com/images/window3.webp",
                        "telephone": "916-571-6919",
                        "areaServed": [
                            "Sacramento, CA",
                            "Elk Grove, CA",
                            "Roseville, CA",
                            "Citrus Heights, CA",
                            "Folsom, CA"
                        ],
                        "priceRange": "$$"
                    })}
                </script>

                {/* ✅ BIG SEO BOOST: FAQ Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much do replacement windows cost in Sacramento?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Most vinyl replacement windows in Sacramento cost $650–$1,250 per window installed, depending on size, design, Low-E coatings & frame type."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What type of windows are best for California weather?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Energy-efficient vinyl windows with thermal spacers and Low-E coatings are ideal for hot, dry summers and mild, rainy winters in the Sacramento region."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you install custom window sizes?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — every replacement window is custom-measured to fit your existing openings with airtight sealing and proper flashing."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>


            <HeroModern
                bgImage="/images/window3.webp"
                subtitle="Window Replacement Experts"
                title="Upgrade Your Home with Energy-Efficient Windows"
                description="Enhance comfort, reduce energy bills, and boost curb appeal with high-performance replacement windows — professionally installed with precision and care."
                buttonText="Get Free Estimate"
                buttonLink="/contact"
                cardImage="/images/windows1.webp"
                location="Sacramento, CA"
                tags={["Windows", "Energy-Efficient"]}
                projectTitle="Window Replacement Near You"
                projectPrice="From $8,350"
                accentColor="#0a923d"
            />
            <WindowTypesSection />
            <GallerySection
                title="Improve Comfort and Style with New Windows"
                subtitle="Modern designs, better insulation, and Flawless Installation — view what’s possible for your home!"
                highlight="Flawless Installation"
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
                    "/images/remodler14.webp",
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
            <DealerBanner
                title="Complete Service Premier Window Replacement"
                highlight=" Premier Deck Builders"
                description="When you choose our professional window replacement team, you’re not just upgrading the glass — you’re improving the comfort, efficiency, and beauty of your entire home. We help you select energy-efficient windows that reduce noise, increase insulation, and elevate curb appeal. From measurement and design to precise installation and a spotless final cleanup, we handle every detail with expert care so you can enjoy a brighter, more comfortable home for years to come"
                backgroundColor="#ffffff"
                highlightColor="#247704"
            />
            <Services
                title=""
                subtitle=""
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Siding Installation & Replacement",
                        description:
                            "Boost your home’s protection and curb appeal with professional siding installation. We offer vinyl, fiber cement, and composite siding options that combine durability, insulation, and timeless style.",
                        image: "/images/remodler1.webp",
                        link: "/siding-replacement",
                    },
                    {
                        title: "James Hardie Siding Experts",
                        description:
                            "As certified James Hardie installers, we provide high-performance fiber cement siding designed to resist weather, moisture, and fading — delivering lasting beauty and value for your home.",
                        image: "/images/remodler1.webp",
                        link: "/james-hardie-siding",
                    },
                    {
                        title: "Custom Deck Design & Build",
                        description:
                            "Transform your backyard into the perfect outdoor retreat. Our custom-built decks blend strength, comfort, and modern design — made from top-quality wood and composite materials.",
                        image: "/images/deck11.webp",
                        link: "/custom-decks",
                    },
                    {
                        title: "Composite & Wood Decks",
                        description:
                            "Choose from low-maintenance composite decks or the natural beauty of wood. We build outdoor spaces that stand up to every season and bring family and friends together.",
                        image: "/images/deck7.webp",
                        link: "/decking",
                    },
                ]}
            />


            <MainSectionSideBar
                title="Window Replacement in Sacramento, CA"
                sections={[
                    {
                        heading: "Premium Window Replacement Installed the Right Way",
                        text: `At Yellowstone Renovation, we provide top-tier window replacement services for homeowners throughout Sacramento, CA who want a home that feels comfortable, efficient, and beautiful. Old or damaged windows lead to drafts, foggy glass, increased noise, and higher energy bills — and most homeowners don’t even realize how much comfort they’re losing each year. Our replacement windows are carefully selected for Sacramento’s climate and professionally installed for an airtight fit that prevents leaks, reduces noise, and transforms your home's curb appeal. From the first measurement to the final inspection, our goal is simple: windows that look amazing, work flawlessly, and last for decades.`
                    },
                    {
                        heading: "Custom-Fit Windows Designed for Sacramento Homes",
                        text: `Your home deserves windows that are crafted specifically for its design and functionality. We offer all popular window types including double hung, single hung, casement, awning, sliding, picture, bay and bow, garden, and specialty architectural shapes — all available in premium materials like vinyl, fiberglass, wood, and aluminum. Whether your style is modern, traditional, or farmhouse, our design team will help you choose the ideal window style, frame color, and glass performance options. Every window is custom-measured to ensure a perfect fit, smooth operation, and a clean finished look that makes your home feel brand new again.`
                    },
                    {
                        heading: "Energy-Efficient Windows That Reduce Heating & Cooling Costs",
                        text: `With Sacramento’s hot summers and chilly winters, energy efficiency matters. Our ENERGY STAR® certified windows are engineered with advanced glass technology, insulated frames, warm-edge spacers, and airtight sealing that dramatically reduces heat transfer. That means less strain on your HVAC system, fewer drafts, lower monthly utility bills, and a more comfortable home year-round. UV-protective coatings also help shield furniture and flooring from fading while still letting natural sunlight brighten your rooms. Investing in energy-efficient windows is one of the fastest ways to increase your home’s long-term value and comfort.`
                    },
                    {
                        heading: "Professional Window Installation by Licensed Experts",
                        text: `No matter how good a window is, it only performs well when installed correctly. Our trained installers follow best-practice guidelines for removal, waterproofing, insulation, and sealing to prevent air and water leaks. We protect your flooring and furniture throughout the project and clean as we go — leaving your home better than we found it. Every installation is double-checked for smooth opening, tight locking, and flawless alignment. With strong manufacturer warranties and our own craftsmanship guarantee, you can feel confident knowing your new windows are built — and installed — to last.`
                    },
                    {
                        heading: "Local Sacramento Window Company You Can Rely On",
                        text: `As a family-owned business proudly serving Sacramento, Roseville, Elk Grove, Folsom, Rocklin, and surrounding Sacramento Metro communities, we believe your project deserves a personal touch. When you call us, you will speak directly with local professionals who understand our housing styles, building codes, and weather conditions. We’re your neighbors — and we truly care about improving homes in our community. That’s why our customers choose us again and again, and refer us to their friends and family.`
                    },
                    {
                        heading: "Upgrade With Confidence — Windows That Make a Real Difference",
                        text: `New windows do more than improve appearance — they improve daily life. Imagine a quieter home with fewer drafts… crystal-clear views… easier-to-clean glass… smooth-gliding locks and screens… and lower energy costs every single month. Whether you plan to enjoy your home for years or want to increase resale value, window replacement is one of the smartest upgrades you can make. Let our Sacramento window experts guide you through a hassle-free process so you feel confident, excited, and thrilled with your results from day one.`
                    }
                ]} offers={[
                    {
                        image: "/images/remodler13.webp",
                        text: "Save $800 on Energy-Efficient Windows — Limited Time Offer",
                        button: "Claim Savings",
                        link: "/contact"
                    },
                    {
                        image: "/images/remodler1.webp",
                        text: "Get a Free In-Home Window Consultation",
                        button: "Schedule Now",
                        link: "/contact"
                    }
                ]}
                whyUs={[
                    "Expert window replacement for improved comfort & efficiency",
                    "Wide selection of premium window styles & materials",
                    "ENERGY STAR® certified window options available",
                    "Licensed & insured installation with no shortcuts",
                    "Local Sacramento team trusted by California homeowners"
                ]}
                projects={[
                    { image: "/images/remodler1.webp", title: "Vinyl Window Replacement" },
                    { image: "/images/remodler15.webp", title: "Energy-Efficient Windows" },
                    { image: "/images/remodler13.webp", title: "Custom Frame Installations" },
                    { image: "/images/remodler4.webp", title: "Window & Siding Upgrade" }
                ]}
                findUs={[
                    { name: "Yelp", rating: "4.7/5", logo: "/icons/Yelp.webp" },
                    { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" }
                ]}
                blog={[
                    {
                        title: "How New Windows Can Reduce Your Energy Bills",
                        date: "April 5th, 2025",
                        author: "Vasyl",
                        image: "/images/remodler6.webp"
                    },
                    {
                        title: "Best Window Styles for Sacramento Homes",
                        date: "May 10th, 2025",
                        author: "Katya",
                        image: "/images/remodler24.webp"
                    },
                    {
                        title: "How to Know If Your Windows Need Replaced",
                        date: "June 2nd, 2025",
                        author: "Peter",
                        image: "/images/remodler24.webp"
                    }
                ]}
                partners={["/icons/jameshardie.webp", "/icons/bbb-logo.webp", "/icons/Yelp.webp"]}
            />


        </Layout>
    );
}
