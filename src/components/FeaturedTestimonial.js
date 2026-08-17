import React from "react";
import { Link } from "gatsby";
import "../styles/FeaturedTestimonial.css";

export default function FeaturedTestimonial({
  videoSrc = "",
  poster = "/images/deck/deck-sacramento23.webp",
  projectTitle = "Sacramento Composite Deck Transformation",
  projectLocation = "Sacramento, CA",
  projectLink = "/projects/sacramento-ca-composite-deck/",
}) {
  return (
    <section className="yr-testimonial" aria-labelledby="client-story-title">
      <div className="yr-testimonial-wrap">
        <div className="yr-testimonial-media">
          {videoSrc ? (
            <video controls preload="metadata" poster={poster}>
              <source src={videoSrc} />
              Your browser does not support embedded video.
            </video>
          ) : (
            <Link
              to={projectLink}
              className="yr-testimonial-placeholder"
              style={{ backgroundImage: `url(${poster})` }}
              aria-label={`View ${projectTitle} project story`}
            >
              <span className="yr-testimonial-play" aria-hidden="true">▶</span>
              <span>Client video story</span>
            </Link>
          )}
        </div>

        <div className="yr-testimonial-copy">
          <span className="yr-testimonial-kicker">A real Yellowstone project</span>
          <h2 id="client-story-title">Here’s What Our Clients Say About Us</h2>
          <p>
            See how our team turns an exterior project into a clear, organized
            experience—from the first site visit and material choices through
            construction and the final walkthrough.
          </p>

          <div className="yr-testimonial-project">
            <span>Featured project</span>
            <h3>{projectTitle}</h3>
            <p>{projectLocation}</p>
          </div>

          <div className="yr-testimonial-points" aria-label="Project highlights">
            <span>Clear scope</span>
            <span>Clean job site</span>
            <span>Detailed finish</span>
          </div>

          <Link className="yr-testimonial-link" to={projectLink}>
            View the complete project <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

