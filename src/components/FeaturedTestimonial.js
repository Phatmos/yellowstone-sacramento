import React from "react";
import { Link } from "gatsby";
import "../styles/FeaturedTestimonial.css";

export default function FeaturedTestimonial({
  videoSrc = "https://www.dropbox.com/scl/fi/7pqhqlzevev9eqvxqtqph/01-August-Deck-Vertical.mp4?rlkey=baqe7w5m1a1xkie1h7o3zw58r&raw=1",
  poster = "/images/testimonials/featured-client-testimonial-poster.webp",
  projectTitle = "Sacramento Composite Deck Transformation",
  projectLocation = "Sacramento, CA",
  projectLink = "/projects/sacramento-ca-composite-deck/",
}) {
  return (
    <section className="yr-testimonial" aria-labelledby="client-story-title">
      <div className="yr-testimonial-orbit" aria-hidden="true" />

      <div className="yr-testimonial-wrap">
        <div className="yr-testimonial-media-column">
          <div className="yr-testimonial-index" aria-hidden="true">
            <span>Client story</span>
            <span>01</span>
          </div>

          <div className="yr-testimonial-media">
            {videoSrc ? (
              <video
                controls
                playsInline
                preload="metadata"
                poster={poster}
                aria-label="Yellowstone Renovation client testimonial video"
              >
                <source src={videoSrc} type="video/mp4" />
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
                <span>Watch the client story</span>
              </Link>
            )}

            <div className="yr-testimonial-video-label" aria-hidden="true">
              <span>Project film</span>
              <strong>{projectLocation}</strong>
            </div>
          </div>
        </div>

        <div className="yr-testimonial-copy">
          <span className="yr-testimonial-kicker">
            <span aria-hidden="true" />
            Real client · Real Yellowstone project
          </span>

          <div className="yr-testimonial-rating" aria-label="Five-star client experience">
            <span aria-hidden="true">★★★★★</span>
            <small>Five-star client experience</small>
          </div>

          <h2 id="client-story-title">
            Here’s what <em>our clients</em> say about us.
          </h2>

          <p className="yr-testimonial-intro">
            See how thoughtful planning, clear communication, and careful
            craftsmanship turned this Sacramento backyard into a space made
            for everyday living.
          </p>

          <div className="yr-testimonial-project">
            <div>
              <span>Featured transformation</span>
              <h3>{projectTitle}</h3>
              <p>{projectLocation}</p>
            </div>
            <span className="yr-testimonial-project-mark" aria-hidden="true">YR</span>
          </div>

          <div className="yr-testimonial-points" aria-label="Project highlights">
            <div>
              <span>01</span>
              <strong>Thoughtful planning</strong>
            </div>
            <div>
              <span>02</span>
              <strong>Clean execution</strong>
            </div>
            <div>
              <span>03</span>
              <strong>Refined finish</strong>
            </div>
          </div>

          <Link className="yr-testimonial-link" to={projectLink}>
            <span>Explore this transformation</span>
            <span className="yr-testimonial-link-icon" aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
