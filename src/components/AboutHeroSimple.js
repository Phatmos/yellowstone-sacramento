import React from "react";
import { Link } from "gatsby";
import "../styles/AboutHeroSimple.css";

export default function AboutHeroSimple({
  eyebrow = "Local exterior renovation team",
  title = "Exterior Remodeling Built Around Your Home",
  subtitle = "Serving Sacramento and nearby communities",
  description = "Yellowstone Renovation plans and builds decks, siding, windows, and exterior improvements with clear scopes, organized project management, and careful workmanship.",
  button1Text = "Explore Our Projects",
  button1Link = "/projects-showcase/",
  button2Text = "Request a Free Estimate",
  button2Link = "/contact/",
  bgImage = "/images/Yellowstone-Team.webp",
}) {
  return (
    <section className="about-v2-hero">
      <img src={bgImage} alt="Yellowstone Renovation project team" />
      <div className="about-v2-shade" />
      <div className="about-v2-wrap">
        <div className="about-v2-copy">
          <span>{eyebrow}</span>
          <h1>{title}</h1>
          <p className="about-v2-subtitle">{subtitle}</p>
          <p className="about-v2-description">{description}</p>
          <div className="about-v2-actions">
            <Link to={button1Link}>{button1Text} <b aria-hidden="true">→</b></Link>
            <Link to={button2Link}>{button2Text}</Link>
          </div>
        </div>
        <div className="about-v2-note">
          <strong>Sacramento-area exterior specialists</strong>
          <p>Decks · Siding · Windows · Painting</p>
        </div>
      </div>
    </section>
  );
}

