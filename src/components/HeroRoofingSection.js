import React, { useState } from "react";
import "../styles/HeroRoofingSection.css";

export default function HeroRoofingSection({
    background,
    title,
    subtitle,
    ratingText,
}) {
    const [step, setStep] = useState(1);

    // FORM FIELDS
    const [zip, setZip] = useState("");
    const [zipError, setZipError] = useState("");

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState("");

    // ZIP VALIDATION
    const handleZipChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");

        if (value.length <= 5) setZip(value);

        if (value.length === 5) {
            setZipError("");
        } else if (value.length > 0) {
            setZipError("ZIP code must be exactly 5 digits (example: 95814)");
        } else {
            setZipError("");
        }
    };

    const isZipValid = zip.length === 5;
    const isStep2Valid = name.trim().length > 1 && phone.length === 10;

    // ===============================
    // 🚀 SUBMIT FORM TO FORMSUBMIT.CO
    // ===============================
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!isStep2Valid || loading) return;

        setLoading(true);
        setSubmitError("");

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/renovationyellowstone@gmail.com",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Accept: "application/json" },
                    body: JSON.stringify({
                        name: name,
                        phone: phone,
                        zip_code: zip,
                        message: "New quick-quote request from homepage hero",
                    }),
                }
            );

            const data = await response.json().catch(() => ({}));

            if (response.ok && data.success !== false && data.success !== "false") {
                window.location.href = "/thank-you/";
            } else {
                setSubmitError("Something went wrong. Please try again.");
            }
        } catch (err) {
            setSubmitError("Network error — check your connection.");
        }

        setLoading(false);
    };

    return (
        <section
            className="roof-hero"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="roof-hero-overlay"></div>

            <div className="roof-hero-content">

                {/* LEFT SIDE */}
                <div className="roof-left">
                    <div className="roof-rating-box">
                        <img
                            src="/icons/google-reviews.webp"
                            className="roof-google-icon"
                            alt="Google"
                        />
                        <div className="roof-rating-text">{ratingText}</div>
                    </div>

                    <h1 className="roof-title">{title}</h1>
                    <p className="roof-subtext">{subtitle}</p>
                </div>

                {/* RIGHT FORM CARD */}
                <form className="roof-form-card" onSubmit={handleSubmit}>

                    {/* STEP PROGRESS */}
                    <div className="progress-container">
                        <div className={`step-line ${step === 1 ? "active" : ""}`}></div>
                        <div className={`step-line ${step === 2 ? "active" : ""}`}></div>
                    </div>

                    {/* STEP 1 — ZIP ONLY */}
                    {step === 1 && (
                        <>
                            <input
                                type="text"
                                name="ZIP Code"
                                placeholder="Enter your ZIP code"
                                className="glass-input"
                                value={zip}
                                onChange={handleZipChange}
                                inputMode="numeric"
                                autoComplete="postal-code"
                                aria-label="ZIP code"
                            />

                            {zipError && <div className="zip-error">{zipError}</div>}

                            <button
                                type="button"
                                className="glass-btn"
                                disabled={!isZipValid}
                                onClick={() => setStep(2)}
                                style={{ opacity: isZipValid ? 1 : 0.5 }}
                            >
                                Get a quick quote →
                            </button>
                        </>
                    )}

                    {/* STEP 2 — NAME + PHONE */}
                    {step === 2 && (
                        <>
                            <input
                                type="text"
                                name="Name"
                                placeholder="Your name"
                                className="glass-input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                autoComplete="name"
                            />

                            <input
                                type="tel"
                                name="Phone"
                                placeholder="Phone number"
                                className="glass-input"
                                value={phone}
                                onChange={(e) =>
                                    setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                                }
                                inputMode="tel"
                                autoComplete="tel"
                            />

                            {submitError && (
                                <div className="zip-error" role="alert">{submitError}</div>
                            )}

                            <button
                                type="submit"
                                className="glass-btn"
                                disabled={!isStep2Valid || loading}
                                style={{ opacity: isStep2Valid ? 1 : 0.5 }}
                            >
                                {loading ? "Submitting..." : "Submit →"}
                            </button>
                        </>
                    )}

                </form>
            </div>
        </section>
    );
}
