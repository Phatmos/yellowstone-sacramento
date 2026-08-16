import React, { useState, useEffect, useCallback } from "react";
import "../styles/GallerySection.css";

export default function GallerySection({
    title = "DECK & SIDING PROJECT GALLERY IN SACRAMENTO, CA",
    subtitle = "See how Yellowstone Renovation helps homeowners across Sacramento bring their dream exteriors to life. Our deck and siding projects showcase the perfect blend of craftsmanship and design — from maintenance-free composite decks and cozy wood patios to elegant James Hardie® siding upgrades that stand the test of time. Each renovation is a story of transformation, care, and lasting value.",
    highlight = " PROJECT GALLERY",
    background = "#f9f9f9",
    images = [
        "/images/deck/deck-sacramento105.webp",
        "/images/deck/deck-sacramento104.webp",
        "/images/deck/deck-sacramento2.webp",
        "/images/deck/deck-sacramento01.webp",
        "/images/deck/deck-sacramento35.webp",
        "/images/deck/deck-sacramento65.webp",
        "/images/deck/deck-sacramento54.webp",
        "/images/deck/deck-sacramento23.webp",
        "/images/deck/deck-sacramento16.webp",
        "/images/deck/deck-sacramento87.webp",
        "/images/deck/deck-sacramento34.webp",
        "/images/deck/deck-sacramento65.webp",
        "/images/deck/deck-sacramento23.webp",
        "/images/deck/deck-sacramento87.webp",
        "/images/deck/deck-sacramento14.webp",
        "/images/deck/deck-sacramento57.webp",
        "/images/deck/deck-sacramento67.webp",
        "/images/deck/deck-sacramento87.webp",
        "/images/deck/deck-sacramento23.webp",
        "/images/deck/deck-sacramento2.webp",
        "/images/deck/deck-sacramento96.webp",
        "/images/deck/deck-sacramento03.webp",
        "/images/deck/deck-sacramento43.webp",
    ],
    limit = 0, // 0 = show all
}) {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [displayLimit, setDisplayLimit] = useState(limit);

    // ✅ Add one more image on mobile
    useEffect(() => {
        const updateLimit = () => {
            if (window.innerWidth < 768 && limit > 0) {
                setDisplayLimit(limit + 1);
            } else {
                setDisplayLimit(limit);
            }
        };
        updateLimit();
        window.addEventListener("resize", updateLimit);
        return () => window.removeEventListener("resize", updateLimit);
    }, [limit]);

    const displayedImages = displayLimit > 0 ? images.slice(0, displayLimit) : images;

    const openLightbox = (index) => setSelectedIndex(index);
    const closeLightbox = useCallback(() => {
        setSelectedIndex(null);
        if (document.fullscreenElement) document.exitFullscreen();
        setIsFullscreen(false);
    }, []);

    const nextImage = useCallback(
        (e) => {
            e?.stopPropagation();
            setSelectedIndex((prev) => (prev + 1) % displayedImages.length);
        },
        [displayedImages.length]
    );

    const prevImage = useCallback(
        (e) => {
            e?.stopPropagation();
            setSelectedIndex(
                (prev) => (prev - 1 + displayedImages.length) % displayedImages.length
            );
        },
        [displayedImages.length]
    );

    // Keyboard navigation
    useEffect(() => {
        if (selectedIndex === null) return;
        const handleKey = (e) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedIndex, closeLightbox, nextImage, prevImage]);

    const toggleFullscreen = async (e) => {
        e.stopPropagation();
        const img = document.querySelector(".lightbox-img");
        try {
            if (!document.fullscreenElement && img) {
                await img.requestFullscreen();
                setIsFullscreen(true);
            } else {
                await document.exitFullscreen();
                setIsFullscreen(false);
            }
        } catch (err) {
            console.warn("Fullscreen not supported:", err);
        }
    };

    return (
        <section className="gallery-section" style={{ background }}>
            <div className="gallery-container">
                <h2>
                    {title.split("IN")[0].trim()}{" "}
                    <span className="highlight">{highlight}</span>{" "}
                    {title.includes("IN") ? "IN SACRAMENTO, CA" : ""}
                </h2>

                {subtitle && <p className="subtitle">{subtitle}</p>}

                <div className="gallery-grid">
                    {displayedImages.map((src, index) => (
                        <div
                            key={index}
                            className="gallery-item"
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={src}
                                alt={`Deck and Siding Project ${index + 1} - Sacramento CA`}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {selectedIndex !== null && (
                    <div className="lightbox" onClick={closeLightbox}>
                        <div className="lightbox-controls">
                            <button
                                className="close-btn"
                                title="Close"
                                onClick={closeLightbox}
                            >
                                ✕
                            </button>
                        </div>
                        <button className="nav-btn prev" onClick={prevImage}>
                            ‹
                        </button>

                        <img
                            src={displayedImages[selectedIndex]}
                            alt={`Full view of deck or siding project ${selectedIndex + 1}`}
                            className="lightbox-img"
                        />

                        <button className="nav-btn next" onClick={nextImage}>
                            ›
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
