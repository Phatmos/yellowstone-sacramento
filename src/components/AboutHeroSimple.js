import React from "react";
import { Link } from "gatsby";
import "../styles/AboutHeroSimple.css";

export default function AboutHeroSimple({
  eyebrow = "Local Sacramento Exterior Team",
  title = "Exterior Remodeling Built Around Your Home",
  subtitle = "Built with care. Managed with clarity.",
  description = "Decks, siding, windows, and exterior improvements delivered by a local team focused on clear communication and quality workmanship.",
  button1Text = "Explore Our Projects",
  button1Link = "/projects-showcase/",
  button2Text = "Get a Free Estimate",
  button2Link = "/contact/",
  bgImage = "/images/team.jpg",
}) {
  return (
    <section className="about-v3-hero">
      <img
        className="about-v3-bg"
        src={bgImage}
        alt="Yellowstone Renovation team and completed exterior project"
      />

      <div className="about-v3-overlay" />

      <div className="about-v3-inner">
        <div className="about-v3-copy">
          <div className="about-v3-eyebrow">
            <span />
            {eyebrow}
          </div>

          <h1>{title}</h1>

          <p className="about-v3-subtitle">
            {subtitle}
          </p>

          <p className="about-v3-description">
            {description}
          </p>

          <div className="about-v3-actions">
            <Link
              to={button1Link}
              className="about-v3-primary"
            >
              {button1Text}
              <span>→</span>
            </Link>

            <Link
              to={button2Link}
              className="about-v3-secondary"
            >
              {button2Text}
            </Link>
          </div>

          <div className="about-v3-trust">
            <div>
              <span>✓</span>
              Local Sacramento Team
            </div>

            <div>
              <span>✓</span>
              Licensed & Insured
            </div>

            <div>
              <span>✓</span>
              Clear Project Scope
            </div>
          </div>
        </div>

        <aside className="about-v3-card">
          <span className="about-v3-card-label">
            YELLOWSTONE RENOVATION
          </span>

          <h2>
            Exterior specialists
            <span> built around your project.</span>
          </h2>

          <div className="about-v3-services">
            <span>Decks</span>
            <span>Siding</span>
            <span>Windows</span>
            <span>Painting</span>
          </div>

          <div className="about-v3-card-line" />

          <div className="about-v3-card-bottom">
            <div>
              <small>SERVICE AREA</small>
              <strong>Sacramento + Nearby</strong>
            </div>

            <Link
              to="/contact/"
              aria-label="Contact Yellowstone Renovation"
            >
              ↗
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}