import React from "react";
import ServiceAreasGrid from "../../components/ServiceAreasGrid";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";

export default function ServiceAreasPage() {
    return (
        <Layout>

            <SEO
                title="Service Areas | Cities We Serve | Yellowstone Renovation"
                description="Find a siding and deck contractor near you. Yellowstone Renovation proudly serves Sacramento, Elk Grove, Roseville, Folsom, Citrus Heights & nearby communities in Sacramento Metro."
                pathname="/cities/"
                image="https://sacramento.yellowstonerenovation.com/images/remodler1.webp"
            />

            {/* ✅ Local Business Area Schema */}


            <ServiceAreasGrid accent="#0a923d" />
        </Layout>
    );
}
