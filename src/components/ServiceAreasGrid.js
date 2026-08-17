import React from "react";
import "../styles/ServiceAreasGrid.css";

const areas = [
    {
        name: "Sacramento, CA",
        region: "Sacramento County",
        image: "/images/city/deck-siding-sacramento-6.webp",
        slug: "sacramento-ca",
    },
    {
        name: "Elk Grove, CA",
        region: "Sacramento County",
        image: "/images/city/deck-siding-sacramento-19.webp",
        slug: "elk-grove-ca",
    },
    {
        name: "Roseville, CA",
        region: "Placer County",
        image: "/images/city/deck-siding-sacramento-3.webp",
        slug: "roseville-ca",
    },
    {
        name: "Folsom, CA",
        region: "Sacramento County",
        image: "/images/city/deck-siding-sacramento-27.webp",
        slug: "folsom-ca",
    },
    {
        name: "Rocklin, CA",
        region: "Placer County",
        image: "/images/city/deck-siding-sacramento-34.webp",
        slug: "rocklin-ca",
    },
    {
        name: "Citrus Heights, CA",
        region: "Sacramento County",
        image: "/images/city/deck-siding-sacramento-2.webp",
        slug: "citrus-heights-ca",
    },
];

const MapPinIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11z" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export default function ServiceAreasGrid({ accent = "#0a923d" }) {
    return (
        <section className="serviceareas-modern">
            <div className="serviceareas-container">
                <h1 className="serviceareas-title" style={{ color: accent }}>
                    Areas We Serve
                </h1>
                <p className="serviceareas-subtitle">
                    Yellowstone Renovation provides deck building, siding, windows, and exterior
                    remodeling across the Sacramento Metro. Choose your city to explore local services.
                </p>

                <div className="serviceareas-modern-grid">
                    {areas.map((area) => {
                        const base = `/cities/${area.slug}/`;
                        const services = [
                            ["Deck Builder", `${base}deck-builder/`],
                            ["Composite Deck Installation", "/composite-decks-sacramento/"],
                            ["Siding Installation", "/siding-replacement/"],
                            ["Window Replacement", "/windows/"],
                        ];

                        return (
                            <div className="modern-card" key={area.slug}>
                                <div className="modern-image">
                                    <img src={area.image} alt={`Exterior remodeling in ${area.name}`} loading="lazy" />
                                    <div className="overlay"></div>
                                    <div className="city-info">
                                        <h2>{area.name}</h2>
                                        <p><span className="icon"><MapPinIcon /></span>{area.region}</p>
                                    </div>
                                </div>
                                <div className="modern-body">
                                    <div className="tags">
                                        <span style={{ background: accent }}>Deck</span>
                                        <span style={{ background: "#0a7733" }}>Siding</span>
                                        <span style={{ background: "#0f552b" }}>Windows</span>
                                    </div>
                                    <ul>
                                        {services.map(([label, link]) => (
                                            <li key={label}><span className="icon">✓</span><a href={link}>{label}</a></li>
                                        ))}
                                    </ul>
                                    <a href={base} className="explore-btn" style={{ background: accent }}>
                                        Explore Details →
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
