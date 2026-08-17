import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import "../styles/ContactPage.css";

export default function ContactPage() {
  const [submitting, setSubmitting] = React.useState(false);
  const formRef = React.useRef(null);

  const emailTo = "renovationyellowstone@gmail.com";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;

    if (!form) return;

    const formData = {
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      service: form.service.value,
      message: form.message.value.trim(),

      _subject: "New Yellowstone Renovation Website Lead",
      _template: "table",
    };

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${emailTo}`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const query = new URLSearchParams({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          service: formData.service,
        }).toString();

        window.location.href = `/success?${query}`;
      } else {
        alert(
          "Something went wrong. Please try again or call us at (916) 571-6919."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);

      alert(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact Yellowstone Renovation | Free Estimate Sacramento, CA"
        description="Request a free estimate from Yellowstone Renovation for decks, siding, windows, painting, and exterior remodeling in Sacramento and nearby communities."
        pathname="/contact/"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">
        <video
          className="contact-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/deck-builder28.webp"
          aria-hidden="true"
        >
          <source
            src="/videos/deck-build.mp4"
            type="video/mp4"
          />
        </video>

        <div className="contact-hero-overlay" />

        <div className="contact-hero-inner">
          <div className="contact-hero-copy">

            <div className="contact-eyebrow">
              <span />
              START YOUR PROJECT
            </div>

            <h1>
              Let’s build something
              <span> you’ll love.</span>
            </h1>

            <p>
              Tell us what you’re planning. Our Sacramento team
              will review your project and help you understand
              the next step.
            </p>

            <div className="contact-hero-trust">

              <div>
                <strong>Free</strong>
                <span>Project Estimate</span>
              </div>

              <div>
                <strong>Local</strong>
                <span>Sacramento Team</span>
              </div>

              <div>
                <strong>Clear</strong>
                <span>Project Scope</span>
              </div>

            </div>

          </div>

          <a
            href="#request-estimate"
            className="contact-hero-scroll"
          >
            <span>Start your estimate</span>
            <b>↓</b>
          </a>
        </div>
      </section>


      {/* =====================================================
          CONTACT INTRO
      ===================================================== */}

      <section
        className="contact-main"
        id="request-estimate"
      >
        <div className="contact-main-header">

          <div>
            <span className="contact-section-label">
              CONTACT YELLOWSTONE
            </span>

            <h2>
              Tell us about
              <span> your project.</span>
            </h2>
          </div>

          <p>
            A few details are all we need to get started.
            Complete the form and our team will follow up with you.
          </p>

        </div>


        {/* =================================================
            MAIN CONTACT CARD
        ================================================= */}

        <div className="contact-card">

          {/* ===============================================
              LEFT
          =============================================== */}

          <aside className="contact-info">

            <div className="contact-info-top">

              <span className="contact-info-kicker">
                TALK TO OUR TEAM
              </span>

              <h3>
                Have a project
                <span> in mind?</span>
              </h3>

              <p>
                Decks, siding, windows, painting, or a complete
                exterior renovation — tell us what you’re looking
                to improve.
              </p>

            </div>


            <div className="contact-details">

              <a
                href="tel:9165716919"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  ↗
                </div>

                <div>
                  <span>CALL US</span>
                  <strong>(916) 571-6919</strong>
                </div>
              </a>


              <a
                href="mailto:renovationyellowstone@gmail.com"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  @
                </div>

                <div>
                  <span>EMAIL</span>
                  <strong>
                    renovationyellowstone@gmail.com
                  </strong>
                </div>
              </a>


              <div className="contact-detail">

                <div className="contact-detail-icon">
                  ●
                </div>

                <div>
                  <span>SERVICE AREA</span>
                  <strong>
                    Sacramento & Nearby Communities
                  </strong>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-detail-icon">
                  ◷
                </div>

                <div>
                  <span>BUSINESS HOURS</span>
                  <strong>
                    Mon–Sat · 8 AM–6 PM
                  </strong>
                </div>

              </div>

            </div>


            <div className="contact-info-footer">

              <div className="contact-stars">
                ★★★★★
              </div>

              <p>
                Local exterior renovation team serving
                Sacramento homeowners.
              </p>

              <div className="contact-review-links">

                <a
                  href="https://www.bbb.org/us/ca/elk-grove/profile/home-improvement/yellowstone-renovation-0402-235919743"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BBB
                </a>

                <a
                  href="https://www.yelp.com/biz/yellowstone-renovation-elk-grove"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yelp
                </a>

                <a
                  href="https://maps.app.goo.gl/2jFZ8SX23aumT1f36"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google
                </a>

              </div>

            </div>

          </aside>


          {/* ===============================================
              FORM
          =============================================== */}

          <div className="contact-form-side">

            <div className="contact-form-header">

              <span>
                FREE PROJECT ESTIMATE
              </span>

              <h3>
                What are you planning?
              </h3>

              <p>
                Fill out the form below and we’ll get back
                to you as soon as possible.
              </p>

            </div>


            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
            >

              <div className="contact-form-row">

                <div className="contact-field">
                  <label htmlFor="firstName">
                    First name
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="Peter"
                    autoComplete="given-name"
                    required
                  />
                </div>


                <div className="contact-field">
                  <label htmlFor="lastName">
                    Last name
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Smith"
                    autoComplete="family-name"
                    required
                  />
                </div>

              </div>


              <div className="contact-form-row">

                <div className="contact-field">
                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    autoComplete="email"
                    required
                  />
                </div>


                <div className="contact-field">
                  <label htmlFor="phone">
                    Phone
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="(916) 555-0123"
                    autoComplete="tel"
                    required
                  />
                </div>

              </div>


              <div className="contact-field">
                <label htmlFor="service">
                  What can we help with?
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your project
                  </option>

                  <option value="Deck Construction">
                    Deck Construction
                  </option>

                  <option value="Siding Installation">
                    Siding Installation
                  </option>

                  <option value="James Hardie Siding">
                    James Hardie® Siding
                  </option>

                  <option value="Window Replacement">
                    Window Replacement
                  </option>

                  <option value="Exterior Painting">
                    Exterior Painting
                  </option>

                  <option value="Gutters & Soffits">
                    Gutters & Soffits
                  </option>

                  <option value="Full Exterior Remodeling">
                    Full Exterior Remodeling
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>


              <div className="contact-field">
                <label htmlFor="message">
                  Tell us about your project
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us what you'd like to build or improve..."
                  required
                />
              </div>


              <button
                type="submit"
                className="contact-submit"
                disabled={submitting}
              >
                <span>
                  {submitting
                    ? "Sending your request..."
                    : "Request My Free Estimate"}
                </span>

                {!submitting && <b>→</b>}
              </button>


              <p className="contact-form-note">
                No pressure. No obligation. Just a clear next
                step for your project.
              </p>

            </form>

          </div>

        </div>


        {/* =================================================
            BOTTOM QUICK SERVICES
        ================================================= */}

        <div className="contact-services">

          <span>
            POPULAR PROJECTS
          </span>

          <div>
            <span>Decks</span>
            <span>Siding</span>
            <span>Windows</span>
            <span>Painting</span>
            <span>Exterior Remodeling</span>
          </div>

        </div>

      </section>
    </Layout>
  );
}