import React from "react";
import { Link } from "gatsby";
import "../styles/Services.css";

export default function Services({
  title = "Professional Exterior Remodeling Services",
  subtitle = "Focused exterior improvements planned around your home, priorities, and long-term value.",
  accentColor = "#079448",
  services = [],
}) {
  const [firstWord, ...rest] = title.split(" ");

  return (
    <section className="services-v2" style={{ "--services-accent": accentColor }}>
      <div className="services-v2-wrap">
        <header className="services-v2-header">
          <span>Premium exterior services</span>
          <h2>
            {firstWord} <em>{rest.join(" ")}</em>
          </h2>
          <p>{subtitle}</p>
        </header>

        <div className="services-v2-grid">
          {services.map((service, index) => (
            <Link to={service.link} className="services-v2-card" key={service.title}>
              <div className="services-v2-image">
                <img src={service.image} alt={service.title} loading="lazy" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="services-v2-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <strong>Explore service <span aria-hidden="true">→</span></strong>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

