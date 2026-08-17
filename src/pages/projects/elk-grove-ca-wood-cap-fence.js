import React from "react";
import Layout from "../../components/Layout";
import ProjectTemplate from "../../components/ProjectTemplate";
import GallerySection from "../../components/GallerySection";
import SEO from "../../components/SEO";
import OtherCompletedProjects from "../../components/OtherCompletedProjects";

const ElkGroveWoodFencePage = () => {
    const pageUrl =
        "https://sacramento.yellowstonerenovation.com/projects/elk-grove-ca-wood-cap-fence/";
    const heroImage ="https://sacramento.yellowstonerenovation.com/images/projects/elk-grove/nch1.webp";

    return (
        <Layout>

            <SEO
                title="Wood Privacy Fence Builder in Elk Grove, CA — 260 LF Fence Project"
                description="See a completed 260 LF wood privacy fence project in Elk Grove, CA by Yellowstone Renovation. Built with metal posts, concrete footings, pressure-treated wood, top cap detail, and custom gate."
                pathname="/projects/elk-grove-ca-wood-cap-fence/"
                image={heroImage}
            />

            <ProjectTemplate
                title="260 LF Wood Privacy Fence in Elk Grove, CA"
                location="Elk Grove, CA"
                yearBuilt="2025"
                area="260 linear ft"
                style="Wood Cap Privacy Fence"
                rails="Pressure-treated rails"
                covre="-"
                description="This project includes a full installation of a 260 linear foot wood privacy fence with a clean cap finish, metal posts, and a custom-built gate system."
                detailsText="The scope included full layout and fence line preparation, installation of heavy-duty metal posts set in concrete, pressure-treated wood framing, vertical privacy pickets, horizontal support rails, and a top cap detail for a clean finished look. The project also included a custom wood gate with black hardware, ensuring durability, security, and a modern appearance."
                highlights={[
                    "260 linear feet of wood privacy fence",
                    "6 ft tall fence design",
                    "Metal posts set in concrete for strength",
                    "Pressure-treated wood pickets and rails",
                    "Top cap finish for clean look",
                    "Custom wood gate with black hardware",
                    "Reinforced structure for long-term durability",
                    "Straight and clean fence line installation",
                    "Backyard privacy improvement",
                    "Full installation and cleanup included",
                ]}
                heroImage="/images/projects/elk-grove/nch3.webp"
                sideImages={[
                    "/images/projects/elk-grove/nch2.webp",
                    "/images/projects/elk-grove/nch3.webp",
                    "/images/projects/elk-grove/nch7.webp",
                    "/images/projects/elk-grove/nch11.webp",
                    "/images/projects/elk-grove/nch12.webp",
                    "/images/projects/elk-grove/nch13.webp",
                    "/images/projects/elk-grove/nch14.webp",
                    "/images/projects/elk-grove/nch16.webp",
                ]}
                ctaTitle="Need a Fence Like This?"
                ctaText="Contact Yellowstone Renovation today for a free estimate. We build strong, clean, and long-lasting fences across Sacramento Metro."
            />

            <div id="project-gallery">
                <GallerySection
                    title="Wood Privacy Fence in Elk Grove, CA"
                    subtitle="Take a look at this 260 ft wood privacy fence project completed by Yellowstone Renovation."
                    highlight="FENCE BUILDER"
                    background="#ffffff"
                    images={[
                        "/images/projects/elk-grove/nch1.webp",
                        "/images/projects/elk-grove/nch2.webp",
                        "/images/projects/elk-grove/nch3.webp",
                        "/images/projects/elk-grove/nch7.webp",
                        "/images/projects/elk-grove/nch11.webp",
                        "/images/projects/elk-grove/nch12.webp",
                        "/images/projects/elk-grove/nch13.webp",
                        "/images/projects/elk-grove/nch14.webp",
                        "/images/projects/elk-grove/nch16.webp",
                        "/images/projects/elk-grove/nch17.webp",
                        "/images/projects/elk-grove/nch18.webp",

                    ]}
                />
            </div>

            <OtherCompletedProjects currentProject="/projects/elk-grove-ca-wood-cap-fence/" />
        </Layout>
    );
};

export default ElkGroveWoodFencePage;
