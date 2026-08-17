import React from "react";
import { Link } from "gatsby";
import "../styles/OurPortfolio.css";

const projects = [
  {
    image: "/images/deck-builder1.webp",
    title: "Composite Deck Installation",
    description: "Low-maintenance decking designed for everyday outdoor living.",
    location: "Sacramento, CA",
    link: "/projects/sacramento-ca-composite-deck/",
  },
  {
    image: "/images/sidingafter.webp",
    title: "Exterior Siding Upgrade",
    description: "A cleaner exterior finish with durable siding and trim details.",
    location: "Sacramento Metro",
    link: "/siding-replacement/",
  },
  {
    image: "/images/deck-builder26.webp",
    title: "Covered Patio Deck",
    description: "A protected outdoor space designed for comfort and year-round use.",
    location: "Elk Grove, CA",
    link: "/covered-decks-sacramento/",
  },
  {
    image: "/images/remodler6.webp",
    title: "Window & Trim Upgrade",
    description: "Energy-conscious windows paired with crisp exterior trim.",
    location: "Roseville, CA",
    link: "/windows/",
  },
];

export default function OurPortfolio() {
  return (
    <section className="portfolio-v2">
      <div className="portfolio-v2-wrap">
        <header className="portfolio-v2-header">
          <div>
            <span>Selected work</span>
            <h2>Exterior Projects Built Around the Home</h2>
          </div>
          <p>
            Explore recent deck, siding, and window projects completed across
            the Sacramento area.
          </p>
        </header>

        <div className="portfolio-v2-grid">
          {projects.map((project) => (
            <Link to={project.link} className="portfolio-v2-card" key={project.title}>
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="portfolio-v2-shade" />
              <div className="portfolio-v2-content">
                <span>{project.location}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <strong>View project <b aria-hidden="true">↗</b></strong>
              </div>
            </Link>
          ))}
        </div>

        <div className="portfolio-v2-action">
          <Link to="/projects-showcase/">View All Exterior Projects <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}

