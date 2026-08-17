import React, {
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import "../styles/ProjectShowcase.css";


export default function ProjectShowcase({
    titleTop = "See the",
    titleGreen = "Transformation",
    titleEnd = "for yourself.",

    text =
    "Explore real Yellowstone Renovation projects across Sacramento. Drag the slider to compare the before and after, then browse more completed transformations below.",

    ctaText = "Start My Project",

    items = [
        {
            before: "/images/deckbeforee.jpg",
            after: "/images/deckafter.jpg",
            location: "Sacramento, CA",
            label: "Composite Deck Transformation",
            category: "Composite Deck",
            description:
                "A complete backyard deck transformation with upgraded materials, cleaner lines, and a more functional outdoor living space.",
        },

        {
            before: "/images/deckbefore1.jpeg",
            after: "/images/deckafter1.webp",
            location: "Elk Grove, CA",
            label: "Backyard Deck Remodel",
            category: "Deck Remodel",
            description:
                "An aging backyard structure rebuilt into a cleaner, stronger, and more inviting outdoor gathering space.",
        },

        {
            before: "/images/deckbefore2.webp",
            after: "/images/deckafter2.webp",
            location: "Sacramento, CA",
            label: "Deck Replacement",
            category: "Deck Replacement",
            description:
                "Old decking removed and replaced with a fresh, professionally finished deck built for long-term use.",
        },

        {
            before: "/images/deckbefore3.png",
            after: "/images/deckafter3.png",
            location: "Roseville, CA",
            label: "Outdoor Living Upgrade",
            category: "Outdoor Living",
            description:
                "A refreshed exterior space focused on better usability, stronger visual balance, and a cleaner finished result.",
        },

        {
            before: "/images/deckbefore4.png",
            after: "/images/deckafter4.avif",
            location: "Roseville, CA",
            label: "Composite Deck Upgrade",
            category: "Composite Deck",
            description:
                "A modern composite upgrade designed to improve appearance, durability, and everyday usability.",
        },

        {
            before:
                "/images/Back_Deck_DIY_Patio_Shelter_Before_After_The_Foxes_Photography_2020_01.jpg",

            after:
                "/images/IMG_3744.webp",

            location: "Sacramento, CA",
            label: "Backyard Transformation",
            category: "Exterior Remodel",
            description:
                "A full backyard refresh that transformed an outdated outdoor area into a cleaner and more finished environment.",
        },
    ],

    emailTo = "renovationyellowstone@gmail.com",

    nextUrl =
    "https://yellowstonerenovationca.com/success/",

    subject =
    "New Yellowstone Renovation Consultation Request",
}) {

    const projects = useMemo(() => {
        if (!Array.isArray(items)) return [];

        return items.filter(
            (item) =>
                item &&
                item.before &&
                item.after
        );
    }, [items]);


    const [activeIndex, setActiveIndex] =
        useState(0);

    const [sliderPosition, setSliderPosition] =
        useState(50);

    const [modalOpen, setModalOpen] =
        useState(false);

    const compareRef = useRef(null);

    const activeProject =
        projects[activeIndex];


    /* =========================================================
       CHANGE PROJECT
    ========================================================= */

    const selectProject = (index) => {
        setActiveIndex(index);
        setSliderPosition(50);
    };


    const prevProject = () => {
        if (!projects.length) return;

        setActiveIndex((current) =>
            current === 0
                ? projects.length - 1
                : current - 1
        );

        setSliderPosition(50);
    };


    const nextProject = () => {
        if (!projects.length) return;

        setActiveIndex((current) =>
            current === projects.length - 1
                ? 0
                : current + 1
        );

        setSliderPosition(50);
    };


    /* =========================================================
       BEFORE / AFTER SLIDER
    ========================================================= */

    const updateSlider = (clientX) => {
        const element =
            compareRef.current;

        if (!element) return;

        const rect =
            element.getBoundingClientRect();

        const position =
            ((clientX - rect.left) /
                rect.width) *
            100;

        const safePosition =
            Math.max(
                0,
                Math.min(100, position)
            );

        setSliderPosition(safePosition);
    };


    const handlePointerMove = (event) => {
        if (event.buttons !== 1) return;

        updateSlider(event.clientX);
    };


    const handlePointerDown = (event) => {
        event.currentTarget.setPointerCapture?.(
            event.pointerId
        );

        updateSlider(event.clientX);
    };


    const handleTouchMove = (event) => {
        if (!event.touches?.length) return;

        updateSlider(
            event.touches[0].clientX
        );
    };


    /* =========================================================
       KEYBOARD
    ========================================================= */

    useEffect(() => {
        if (modalOpen) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft") {
                prevProject();
            }

            if (event.key === "ArrowRight") {
                nextProject();
            }
        };

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [
        modalOpen,
        projects.length,
    ]);


    /* =========================================================
       MODAL
    ========================================================= */

    useEffect(() => {
        if (!modalOpen) return undefined;

        const oldOverflow =
            document.body.style.overflow;

        document.body.style.overflow =
            "hidden";


        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setModalOpen(false);
            }
        };


        window.addEventListener(
            "keydown",
            handleEscape
        );


        return () => {
            document.body.style.overflow =
                oldOverflow;

            window.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, [modalOpen]);


    if (!activeProject) {
        return null;
    }


    const formAction =
        `https://formsubmit.co/${emailTo}`;


    return (
        <>
            <section
                className="px"
                aria-labelledby="px-title"
            >

                <div className="px-wrap">


                    {/* ===================================================
              HEADER
          =================================================== */}

                    <header className="px-header">

                        <div className="px-header-main">

                            <div className="px-eyebrow">

                                <span />

                                REAL PROJECTS

                            </div>


                            <h2 id="px-title">

                                {titleTop}

                                <strong>
                                    {" "}
                                    {titleGreen}
                                </strong>

                                <em>
                                    {" "}
                                    {titleEnd}
                                </em>

                            </h2>

                        </div>


                        <div className="px-header-side">

                            <p>
                                {text}
                            </p>

                            <button
                                type="button"
                                className="px-header-cta"
                                onClick={() =>
                                    setModalOpen(true)
                                }
                            >
                                {ctaText}

                                <span>
                                    →
                                </span>

                            </button>

                        </div>

                    </header>



                    {/* ===================================================
              MAIN PROJECT EXPERIENCE
          =================================================== */}

                    <div className="px-stage">


                        {/* =================================================
                COMPARE
            ================================================= */}

                        <div
                            ref={compareRef}
                            className="px-compare"
                            onPointerDown={
                                handlePointerDown
                            }
                            onPointerMove={
                                handlePointerMove
                            }
                            onTouchMove={
                                handleTouchMove
                            }
                        >

                            {/* AFTER BASE */}

                            <img
                                className="px-image px-after-image"
                                src={
                                    activeProject.after
                                }
                                alt={`Completed ${activeProject.label} in ${activeProject.location}`}
                                draggable="false"
                            />


                            {/* BEFORE LAYER */}

                            <div
                                className="px-before-layer"
                                style={{
                                    width:
                                        `${sliderPosition}%`,
                                }}
                            >

                                <img
                                    className="px-image px-before-image"
                                    src={
                                        activeProject.before
                                    }
                                    alt={`Before ${activeProject.label} in ${activeProject.location}`}
                                    draggable="false"
                                />

                            </div>


                            {/* BEFORE LABEL */}

                            <span className="px-compare-label px-before-label">
                                BEFORE
                            </span>


                            {/* AFTER LABEL */}

                            <span className="px-compare-label px-after-label">
                                AFTER
                            </span>


                            {/* SLIDER LINE */}

                            <div
                                className="px-divider"
                                style={{
                                    left:
                                        `${sliderPosition}%`,
                                }}
                            >

                                <div className="px-divider-line" />


                                <button
                                    type="button"
                                    className="px-divider-handle"
                                    aria-label="Drag to compare before and after"
                                >

                                    <span>
                                        ‹
                                    </span>

                                    <span>
                                        ›
                                    </span>

                                </button>

                            </div>


                            {/* MOBILE HELP */}

                            <div className="px-drag-hint">

                                <span>
                                    ↔
                                </span>

                                Drag to compare

                            </div>

                        </div>



                        {/* =================================================
                INFORMATION PANEL
            ================================================= */}

                        <aside className="px-info">

                            <div className="px-info-top">

                                <div className="px-project-count">

                                    <span>
                                        PROJECT
                                    </span>

                                    <strong>
                                        {String(
                                            activeIndex + 1
                                        ).padStart(
                                            2,
                                            "0"
                                        )}
                                    </strong>

                                    <small>
                                        /
                                        {String(
                                            projects.length
                                        ).padStart(
                                            2,
                                            "0"
                                        )}
                                    </small>

                                </div>


                                <span className="px-category">
                                    {
                                        activeProject.category ||
                                        "Renovation"
                                    }
                                </span>

                            </div>


                            <div className="px-project-content">

                                <span className="px-location">

                                    <i />

                                    {
                                        activeProject.location
                                    }

                                </span>


                                <h3>
                                    {
                                        activeProject.label
                                    }
                                </h3>


                                <p>
                                    {
                                        activeProject.description
                                    }
                                </p>

                            </div>


                            <div className="px-project-details">

                                <div>

                                    <span>
                                        BUILT FOR
                                    </span>

                                    <strong>
                                        Everyday Living
                                    </strong>

                                </div>


                                <div>

                                    <span>
                                        APPROACH
                                    </span>

                                    <strong>
                                        Clean & Professional
                                    </strong>

                                </div>

                            </div>


                            <div className="px-info-bottom">

                                <button
                                    type="button"
                                    className="px-nav-btn"
                                    onClick={
                                        prevProject
                                    }
                                    aria-label="Previous project"
                                >
                                    ←
                                </button>


                                <button
                                    type="button"
                                    className="px-main-cta"
                                    onClick={() =>
                                        setModalOpen(true)
                                    }
                                >

                                    <span>
                                        Get a Free Estimate
                                    </span>

                                    <b>
                                        ↗
                                    </b>

                                </button>


                                <button
                                    type="button"
                                    className="px-nav-btn"
                                    onClick={
                                        nextProject
                                    }
                                    aria-label="Next project"
                                >
                                    →
                                </button>

                            </div>

                        </aside>

                    </div>



                    {/* ===================================================
              PROJECT SELECTOR
          =================================================== */}

                    <div className="px-project-strip">

                        <div className="px-strip-heading">

                            <span>
                                EXPLORE MORE PROJECTS
                            </span>

                            <div className="px-strip-line" />

                            <small>
                                {
                                    projects.length
                                }{" "}
                                transformations
                            </small>

                        </div>


                        <div className="px-thumbnails">

                            {projects.map(
                                (
                                    project,
                                    index
                                ) => (

                                    <button
                                        key={`${project.label}-${index}`}
                                        type="button"
                                        className={
                                            `px-thumb ${index ===
                                                activeIndex
                                                ? "is-active"
                                                : ""
                                            }`
                                        }
                                        onClick={() =>
                                            selectProject(
                                                index
                                            )
                                        }
                                        aria-label={`View ${project.label}`}
                                    >

                                        <div className="px-thumb-image">

                                            <img
                                                src={
                                                    project.after
                                                }
                                                alt=""
                                                loading="lazy"
                                            />

                                            <span>
                                                {String(
                                                    index + 1
                                                ).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                        </div>


                                        <div className="px-thumb-copy">

                                            <strong>
                                                {
                                                    project.label
                                                }
                                            </strong>

                                            <small>
                                                {
                                                    project.location
                                                }
                                            </small>

                                        </div>

                                    </button>

                                )
                            )}

                        </div>

                    </div>



                    {/* ===================================================
              BOTTOM TRUST
          =================================================== */}

                    <div className="px-trust">

                        <span>
                            Real Yellowstone projects
                        </span>

                        <i />

                        <span>
                            Sacramento & nearby areas
                        </span>

                        <i />

                        <span>
                            Free project consultation
                        </span>

                    </div>

                </div>

            </section>



            {/* =======================================================
          MODAL
      ======================================================= */}

            {modalOpen && (

                <div
                    className="px-modal-overlay"
                    onMouseDown={(event) => {

                        if (
                            event.target ===
                            event.currentTarget
                        ) {
                            setModalOpen(false);
                        }

                    }}
                >

                    <div
                        className="px-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="px-modal-title"
                    >

                        <button
                            type="button"
                            className="px-modal-close"
                            onClick={() =>
                                setModalOpen(false)
                            }
                            aria-label="Close"
                        >
                            ×
                        </button>


                        <div className="px-modal-header">

                            <span>
                                START YOUR PROJECT
                            </span>

                            <h3 id="px-modal-title">

                                Tell us what
                                <strong>
                                    {" "}
                                    you want to build.
                                </strong>

                            </h3>

                            <p>
                                Give us a few project
                                details and our
                                Sacramento team will
                                reach out to discuss
                                your options and next
                                steps.
                            </p>

                        </div>


                        <form
                            action={formAction}
                            method="POST"
                            className="px-form"
                        >

                            <input
                                type="hidden"
                                name="_next"
                                value={nextUrl}
                            />

                            <input
                                type="hidden"
                                name="_captcha"
                                value="false"
                            />

                            <input
                                type="hidden"
                                name="_subject"
                                value={subject}
                            />

                            <input
                                type="hidden"
                                name="_template"
                                value="table"
                            />

                            <input
                                type="hidden"
                                name="Page"
                                value={
                                    typeof window !==
                                        "undefined"
                                        ? window.location.href
                                        : ""
                                }
                            />


                            <div className="px-form-grid">

                                <div className="px-field">

                                    <label htmlFor="px-first">
                                        First name
                                    </label>

                                    <input
                                        id="px-first"
                                        name="First Name"
                                        placeholder="Peter"
                                        autoComplete="given-name"
                                        required
                                    />

                                </div>


                                <div className="px-field">

                                    <label htmlFor="px-last">
                                        Last name
                                    </label>

                                    <input
                                        id="px-last"
                                        name="Last Name"
                                        placeholder="Smith"
                                        autoComplete="family-name"
                                        required
                                    />

                                </div>


                                <div className="px-field">

                                    <label htmlFor="px-email">
                                        Email
                                    </label>

                                    <input
                                        id="px-email"
                                        type="email"
                                        name="Email"
                                        placeholder="you@email.com"
                                        autoComplete="email"
                                        required
                                    />

                                </div>


                                <div className="px-field">

                                    <label htmlFor="px-phone">
                                        Phone
                                    </label>

                                    <input
                                        id="px-phone"
                                        type="tel"
                                        name="Phone"
                                        placeholder="(916) 555-0123"
                                        autoComplete="tel"
                                        required
                                    />

                                </div>


                                <div className="px-field px-field-full">

                                    <label htmlFor="px-details">
                                        Project details
                                    </label>

                                    <textarea
                                        id="px-details"
                                        name="Project Details"
                                        rows="4"
                                        placeholder="Tell us what you'd like to build or improve..."
                                    />

                                </div>

                            </div>


                            <button
                                type="submit"
                                className="px-form-submit"
                            >

                                <span>
                                    Request My Free Consultation
                                </span>

                                <b>
                                    →
                                </b>

                            </button>


                            <p className="px-form-note">
                                Free consultation.
                                No obligation.
                                No pressure.
                            </p>

                        </form>

                    </div>

                </div>

            )}

        </>
    );
}