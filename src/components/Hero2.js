import React, { useRef, useState } from "react";
import "../styles/Hero2.css";

export default function Hero2({
  topText,
  title,
  description,
  backgroundImage,
  overlayOpacity = 0.55,

  // ✅ Dynamic form values
  formTitle = "Free Wood Siding Estimate",
  formSubtitle = "Fill out the form below and our expert team will contact you within 24 hours!",
  selectLabel = "Select Wood Siding Service",
  selectOptions = [
    "Full Wood Siding Replacement",
    "Cedar Siding Installation",
    "Wood Siding Repair",
    "Painting & Staining",
  ],
  ctaText = "Get My Estimate",
  successRedirect = "/success/", // ✅ Local success page
  emailTo = "renovationyellowstone@gmail.com",
}) {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // 🧠 Auto-generate expiration date (last day of current month)
  const currentDate = new Date();
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const lastDay = new Date(year, currentDate.getMonth() + 1, 0).getDate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    const form = formRef.current;
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const service = form.service.value.trim();
    const message = form.message.value.trim();

    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailTo}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          service,
          message,
          source: "Service page hero form",
          page_url: window.location.href,
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.success === false || data.success === "false") {
        throw new Error("FormSubmit rejected the request");
      }

      const query = new URLSearchParams({
        name: `${firstName} ${lastName}`,
        email,
        service,
      }).toString();
      window.location.href = `${successRedirect}?${query}`;
    } catch (error) {
      console.error("Form submit error:", error);
      setSubmitError("We could not send your request. Please try again or call (916) 571-6919.");
      setSubmitting(false);
    }
  };

  return (
    <section
      className="hero2-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* 🔲 Overlay */}
      <div
        className="hero2-overlay"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      ></div>

      <div className="hero2-container">
        {/* ==== LEFT CONTENT ==== */}
        <div className="hero2-left">
          {topText && <p className="hero2-top">{topText}</p>}
          <h1 className="hero2-title">{title}</h1>
          <p className="hero2-desc">{description}</p>

          <div className="hero2-rating">⭐⭐⭐⭐⭐ Rated #1 Local Exterior Experts</div>

          <div className="hero2-logos">
            <img src="/icons/bbb-logo.webp" alt="BBB" />
            <img src="/icons/google-reviews.webp" alt="Google Reviews" />
            <img src="/icons/Yelp.webp" alt="Yelp" />
          </div>
        </div>

        {/* ==== RIGHT FORM CARD ==== */}
        <div className="hero2-form-card">
          <div className="hero2-offer-tag">
            {monthName.toUpperCase()} {year} SPECIAL
          </div>

          <h3 className="hero2-form-title">{formTitle}</h3>
          <p className="hero2-form-sub">{formSubtitle}</p>

          <form ref={formRef} className="hero2-form" onSubmit={handleSubmit}>
            {/* 🧍 Name Fields */}
            <div className="hero2-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              />
            </div>

            {/* ✉️ Contact Info */}
            <div className="hero2-row">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                inputMode="tel"
                autoComplete="tel"
              />
            </div>

            {/* 🧱 Dropdown */}
            <select name="service" required>
              <option value="">{selectLabel}</option>
              {selectOptions.map((o, i) => (
                <option key={i}>{o}</option>
              ))}
            </select>

            {/* 📝 Message */}
            <textarea
              rows="3"
              name="message"
              placeholder="Please describe your project"
            ></textarea>

            {/* 🟢 Submit Button */}
            {submitError && <p className="hero2-form-error" role="alert">{submitError}</p>}
            <button type="submit" disabled={submitting}>
              {submitting ? "Sending..." : ctaText}
            </button>

            {/* 🕓 Expiration Date */}
            <p className="hero2-expire-text">
              Offer expires {monthName} {lastDay}, {year}.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
