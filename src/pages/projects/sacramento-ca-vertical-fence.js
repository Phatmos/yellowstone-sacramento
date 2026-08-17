import React from "react";
import Layout from "../../components/Layout";
import ProjectTemplate from "../../components/ProjectTemplate";
import GallerySection from "../../components/GallerySection";
import SEO from "../../components/SEO";
import OtherCompletedProjects from "../../components/OtherCompletedProjects";

const SacramentoVerticalFencePage = () => {
    const pageUrl = "https://sacramento.yellowstonerenovation.com/projects/sacramento-ca-vertical-fence/";
    const heroImage = "https://sacramento.yellowstonerenovation.com/images/projects/sacramento/frn25.webp";


    return (
        <Layout>

            <SEO
                title="Vertical Wood Fence Builder in Sacramento, CA — Privacy Fence Project"
                description="See a completed vertical wood privacy fence project in Sacramento, CA by Yellowstone Renovation."
                pathname="/projects/sacramento-ca-vertical-fence/"
                image={heroImage}
            />
            <ProjectTemplate
                title="Vertical Wood Fence Installation in Sacramento, CA"
                location="Sacramento, CA"
                yearBuilt="2025"
                area="~280 linear ft"
                style="Privacy Wood Fence"
                rails="3-rail system with vertical boards"
                covre="-"
                description="This project features a full installation of a vertical wood privacy fence, designed to provide security, clean aesthetics, and long-lasting durability for the homeowner."
                detailsText="The scope included full layout planning, post hole digging, concrete setting, installation of pressure-treated posts, 3-rail horizontal framing, and vertical picket installation. The fence was built to ensure straight lines, proper spacing, and a strong structural foundation for long-term performance."
                highlights={[
                    "Full fence layout and planning",
                    "Post hole digging and concrete installation",
                    "Pressure-treated 4x4 posts",
                    "3-rail horizontal framing system",
                    "Vertical privacy fence boards",
                    "Clean straight alignment across property",
                    "Secure and durable installation",
                ]}
                heroImage="/images/projects/sacramento/frn25.webp"
                sideImages={[
                    "/images/projects/sacramento/frn1.webp",
                    "/images/projects/sacramento/frn2.webp",
                    "/images/projects/sacramento/frn3.webp",
                    "/images/projects/sacramento/frn4.webp",
                    "/images/projects/sacramento/frn5.webp",
                    "/images/projects/sacramento/frn6.webp",
                    "/images/projects/sacramento/frn7.webp",
                    "/images/projects/sacramento/frn8.webp",
                    "/images/projects/sacramento/frn9.webp",
                    "/images/projects/sacramento/frn10.webp",
                ]}
                ctaTitle="Need a Fence Like This?"
                ctaText="Contact Yellowstone Renovation today for a free estimate and let us build a fence that adds privacy, security, and value to your home."
            />

            <div id="project-gallery">
                <GallerySection
                    title="Fence Installation Gallery in Sacramento, CA"
                    subtitle="See this vertical wood fence project completed by Yellowstone Renovation."
                    highlight="FENCE BUILDER"
                    background="#ffffff"
                    images={[
                        "/images/projects/sacramento/frn1.webp",
                        "/images/projects/sacramento/frn2.webp",
                        "/images/projects/sacramento/frn3.webp",
                        "/images/projects/sacramento/frn4.webp",
                        "/images/projects/sacramento/frn6.webp",
                        "/images/projects/sacramento/frn7.webp",
                        "/images/projects/sacramento/frn8.webp",
                        "/images/projects/sacramento/frn9.webp",
                        "/images/projects/sacramento/frn10.webp",
                        "/images/projects/sacramento/frn11.webp",
                        "/images/projects/sacramento/frn12.webp",
                        "/images/projects/sacramento/frn13.webp",
                        "/images/projects/sacramento/frn14.webp",
                        "/images/projects/sacramento/frn15.webp",
                        "/images/projects/sacramento/frn16.webp",
                        "/images/projects/sacramento/frn17.webp",
                        "/images/projects/sacramento/frn18.webp",
                        "/images/projects/sacramento/frn19.webp",
                        "/images/projects/sacramento/frn20.webp",
                        "/images/projects/sacramento/frn21.webp",
                        "/images/projects/sacramento/frn22.webp",
                        "/images/projects/sacramento/frn23.webp",
                        "/images/projects/sacramento/frn24.webp",
                        "/images/projects/sacramento/frn25.webp",
                        "/images/projects/sacramento/frn26.webp",
                        "/images/projects/sacramento/frn27.webp",
                        "/images/projects/sacramento/frn28.webp",
                        "/images/projects/sacramento/frn29.webp",
                    ]}
                />
            </div>

            <OtherCompletedProjects currentProject="/projects/sacramento-ca-vertical-fence/" />
        </Layout>
    );
};

export default SacramentoVerticalFencePage;
