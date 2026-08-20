import React from "react";
import { Link } from "gatsby";
import Layout from "./Layout";
import SEO from "./SEO";
import { MascotProjectCta } from "./MascotSections";
import { fencePages, fenceServiceLinks } from "../data/fenceServices";
import "../styles/FenceServicePage.css";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4 4L19 6" />
  </svg>
);

export default function FenceServicePage({ page = "main" }) {
  const item = fencePages[page] || fencePages.main;
  const isMain = page === "main";

  return (
    <Layout>
      <SEO
        title={item.title}
        description={item.description}
        pathname={item.path}
        image={item.heroImage}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Fencing", path: "/fence-contractor-sacramento/" },
          ...(
            isMain
              ? []
              : [{ name: item.heading, path: item.path }]
          ),
        ]}
        service={{
          name: item.heading,
          serviceType: "Fence installation and replacement",
          description: item.description,
          areaServed: [
            "Sacramento, CA",
            "Elk Grove, CA",
            "Roseville, CA",
            "Folsom, CA",
            "Rocklin, CA",
            "Citrus Heights, CA",
          ],
        }}
      />

      <article className="fence-page">
        <nav className="fence-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          {!isMain && (
            <>
              <Link to="/fence-contractor-sacramento/">Fencing</Link>
              <span>›</span>
            </>
          )}
          <strong aria-current="page">{item.heading}</strong>
        </nav>

        <header
          className="fence-hero"
          style={{ backgroundImage: `url(${item.heroImage})` }}
        >
          <div className="fence-hero-overlay" />
          <div className="fence-hero-copy">
            <span>{item.eyebrow}</span>
            <h1>{item.heading}</h1>
            <h2>{item.accent}</h2>
            <p>{item.lead}</p>
            <div className="fence-hero-actions">
              <Link to="/contact/">Request a Free Estimate <b aria-hidden="true">→</b></Link>
              <a href="tel:9165716919">Call (916) 571-6919</a>
            </div>
          </div>

          <aside className="fence-hero-note">
            <strong>Fence project checklist</strong>
            <span><CheckIcon /> Measurements and property access</span>
            <span><CheckIcon /> Material, height and style</span>
            <span><CheckIcon /> Posts, gates and hardware</span>
            <span><CheckIcon /> Removal and disposal</span>
          </aside>
        </header>

        <section className="fence-trust" aria-label="Project assurances">
          <div><b>Local</b><span>Sacramento Team</span></div>
          <div><b>5★</b><span>Client Experience</span></div>
          <div><b>36</b><span>Month Workmanship Warranty</span></div>
          <div><b>✓</b><span>Clear Project Scope</span></div>
        </section>

        {isMain ? (
          <section className="fence-materials" aria-labelledby="fence-material-title">
            <div className="fence-section-heading">
              <span>Compare your options</span>
              <h2 id="fence-material-title">Fence materials and project types</h2>
              <p>Start with privacy, appearance, maintenance and access. Then compare the systems that fit those priorities.</p>
            </div>
            <div className="fence-material-grid">
              {fenceServiceLinks.map((service) => (
                <Link to={service.to} key={service.key} className="fence-material-card">
                  <img src={service.image} alt="" loading="lazy" />
                  <div>
                    <h3>{service.label}</h3>
                    <p>{service.summary}</p>
                    <strong>Explore option <span aria-hidden="true">→</span></strong>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : (
          <nav className="fence-type-nav" aria-label="Other fence options">
            <span>Compare:</span>
            {fenceServiceLinks
              .filter((service) => service.key !== page)
              .map((service) => (
                <Link to={service.to} key={service.key}>{service.label}</Link>
              ))}
          </nav>
        )}

        <section className="fence-intro">
          <div className="fence-intro-copy">
            <span className="fence-kicker">Built around the property</span>
            <h2>{item.introTitle}</h2>
            {item.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="fence-inline-actions">
              <Link to="/contact/">Schedule an on-site estimate</Link>
              <Link to="/projects-showcase/">View completed projects</Link>
            </div>
          </div>
          <figure className="fence-intro-image">
            <img src={item.heroImage} alt={`${item.heading} project planning`} loading="lazy" />
            <figcaption>Material, layout, gates and structure planned together.</figcaption>
          </figure>
        </section>

        <section className="fence-decisions" aria-labelledby="fence-decisions-title">
          <div className="fence-section-heading">
            <span>Details that matter</span>
            <h2 id="fence-decisions-title">A better fence starts below the finish</h2>
          </div>
          <div className="fence-decision-grid">
            {item.details.map(([title, text], index) => (
              <article key={title}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="fence-planning">
          <div className="fence-planning-copy">
            <span className="fence-kicker">Where this option fits</span>
            <h2>Match the fence to the way the property is used</h2>
            <div className="fence-use-grid">
              {item.idealFor.map((use) => (
                <span key={use}><CheckIcon /> {use}</span>
              ))}
            </div>
          </div>
          <aside>
            <span>Ownership plan</span>
            <h3>{item.careTitle}</h3>
            <p>{item.careText}</p>
          </aside>
        </section>

        <section className="fence-permit-note">
          <div>
            <span>Before installation</span>
            <h2>Confirm property lines, utilities and local requirements</h2>
          </div>
          <p>
            Fence standards can change by jurisdiction, location on the lot,
            height, easements, HOA rules and visibility conditions. The City of
            Sacramento lists fences in its permit guidance and directs property
            owners to applicable planning standards. Verify the project address
            and final design before work begins.
          </p>
          <a
            href="https://www.cityofsacramento.gov/community-development/building/permit-services/required-permits.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Review City of Sacramento permit guidance ↗
          </a>
        </section>

        <section className="fence-faq" aria-labelledby="fence-faq-title">
          <div className="fence-section-heading">
            <span>Helpful answers</span>
            <h2 id="fence-faq-title">Sacramento fence questions</h2>
          </div>
          <div className="fence-faq-list">
            {item.faqs.map(({ q, a }) => (
              <details key={q}>
                <summary>{q}<span aria-hidden="true">+</span></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="fence-guide-links">
          <div>
            <span>Learn before you build</span>
            <h2>Fence planning guides</h2>
          </div>
          <Link to="/blog/how-much-does-a-fence-cost-sacramento/">What drives fence cost?</Link>
          <Link to="/blog/redwood-vs-cedar-vs-pressure-treated-fence/">Compare common wood options</Link>
          <Link to="/blog/signs-fence-needs-repair-or-replacement/">Repair or replace an old fence?</Link>
        </section>

        <MascotProjectCta
          eyebrow="Sacramento fence installation"
          title="Let’s plan your new fence"
          text="Send the property address, approximate footage, preferred material and gate needs. We’ll help organize the next step and schedule an on-site estimate."
        />
      </article>
    </Layout>
  );
}
