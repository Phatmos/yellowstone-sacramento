import React from "react";
import Layout from "../../components/Layout";
import ProjectTemplate from "../../components/ProjectTemplate";
import GallerySection from "../../components/GallerySection";
import SEO from "../../components/SEO";
import OtherCompletedProjects from "../../components/OtherCompletedProjects";
const SacramentoCompositeDeckPage = () => {
    const pageUrl = "https://sacramento.yellowstonerenovation.com/projects/sacramento-ca-composite-deck/";
    const heroImage = "https://sacramento.yellowstonerenovation.com/images/projects/sacramento/fr20.webp";

    return (
        <Layout>

            <SEO
                title="Composite Deck & Concrete Upgrade in Sacramento, CA | Yellowstone Renovation"
                description="Custom composite deck rebuild in Sacramento, CA with 4000-PSI concrete, picture-frame decking, modern railing, wrapped posts, stairs, gutters, and clean exterior finishes."
                pathname="/projects/sacramento-ca-composite-deck/"
                image={heroImage}
            />

            <ProjectTemplate
                title="Composite Deck & Concrete Upgrade in Sacramento, CA"
                location="Sacramento, CA"
                yearBuilt="2025"
                area="420 sq ft"
                style="Modern Composite Deck"
                rails="White railing with black caps and pickets"
                covre="-"
                description="This project includes a full rebuild of an existing 30' x 14' deck with new composite decking, upgraded concrete areas, a reinforced block wall, and a clean modern railing system."
                detailsText="The scope includes demolition and removal of the existing deck, removal of old concrete sections, new 4000-PSI concrete, a reinforced block wall, a pressure-treated deck frame, composite decking with hidden fasteners, full picture-frame border, wide stairs, white fascia, wrapped posts, gutter installation, and a white-and-black railing system."
                highlights={[
                    "Demolition and removal of existing 30' x 14' deck",
                    "New 4000-PSI concrete in designated areas",
                    "Reinforced block wall with 8-inch top cap",
                    "Pressure-treated deck frame with joist tape",
                    "Composite decking with hidden fasteners",
                    "Full picture-frame border",
                    "4 ft wide stairs with picture-framed treads",
                    "White fascia and Hardie-wrapped posts",
                    "White railing with black caps and pickets",
                    "Gutter system and flashing/apron installation",
                ]}
                heroImage="/images/projects/sacramento/fr20.webp"
                sideImages={[
                    "/images/projects/sacramento/fr2.webp",
                    "/images/projects/sacramento/fr13.webp",
                    "/images/projects/sacramento/fr14.webp",
                    "/images/projects/sacramento/fr15.webp",
                    "/images/projects/sacramento/fr16.webp",
                    "/images/projects/sacramento/fr17.webp",
                    "/images/projects/sacramento/fr18.webp",
                ]}
                ctaTitle="Ready to Upgrade Your Outdoor Space?"
                ctaText="Contact Yellowstone Renovation today for a free estimate and let us help you design a deck that is built to last."
            />

            <div id="project-gallery">
                <GallerySection
                    title="Composite Deck Gallery in Sacramento, CA"
                    subtitle="See this custom composite deck and concrete upgrade project completed by Yellowstone Renovation."
                    highlight="COMPOSITE DECK BUILDER"
                    background="#ffffff"
                    images={[
                        "/images/projects/sacramento/fr13.webp",
                        "/images/projects/sacramento/fr14.webp",
                        "/images/projects/sacramento/fr15.webp",
                        "/images/projects/sacramento/fr16.webp",
                        "/images/projects/sacramento/fr17.webp",
                        "/images/projects/sacramento/fr18.webp",
                        "/images/projects/sacramento/fr12.webp",
                        "/images/projects/sacramento/fr11.webp",
                        "/images/projects/sacramento/fr10.webp",
                        "/images/projects/sacramento/fr9.webp",
                        "/images/projects/sacramento/fr8.webp",
                        "/images/projects/sacramento/fr7.webp",
                        "/images/projects/sacramento/fr6.webp",
                        "/images/projects/sacramento/fr5.webp",
                        "/images/projects/sacramento/fr4.webp",
                        "/images/projects/sacramento/fr3.webp",
                        "/images/projects/sacramento/fr19.webp",
                        "/images/projects/sacramento/fr20.webp",
                        "/images/projects/sacramento/fr21.webp",
                        "/images/projects/sacramento/fr12.webp",
                        "/images/projects/sacramento/fr2.webp",
                    ]}
                />
            </div>
            <OtherCompletedProjects currentProject="/projects/sacramento-ca-composite-deck/" />

        </Layout>
    );
};

export default SacramentoCompositeDeckPage;
