import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import "../styles/FeaturedTestimonial.css";

export default function FeaturedTestimonial({
  desktopVideoSrc = "https://www.dropbox.com/scl/fi/vuf3hz8z96a37umd6avl2/02-August-Deck-Horizontal.mp4?rlkey=e45wqaa59wmg7bf6nh1hgtc1p&st=h3hy7itw&raw=1",

  mobileVideoSrc = "https://www.dropbox.com/scl/fi/7pqhqlzevev9eqvxqtqph/01-August-Deck-Vertical.mp4?rlkey=baqe7w5m1a1xkie1h7o3zw58r&raw=1",

  desktopPoster = "/images/testimonials/clienclient-story-desktop.png",
  mobilePoster = "/images/testimonials/client-story-mobile.png",

  projectTitle = "Sacramento Composite Deck Transformation",
  projectLocation = "Sacramento, CA",
  projectLink = "/projects/sacramento-ca-composite-deck/",
}) {
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  const [desktopPlaying, setDesktopPlaying] = useState(false);
  const [mobilePlaying, setMobilePlaying] = useState(false);

  useEffect(() => {
    const videos = [
      desktopVideoRef.current,
      mobileVideoRef.current,
    ].filter(Boolean);

    if (!videos.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (!entry.isIntersecting || entry.intersectionRatio < 0.2) {
            video.pause();
          }
        });
      },
      {
        threshold: [0, 0.2, 0.5],
      }
    );

    videos.forEach((video) => observer.observe(video));

    return () => {
      videos.forEach((video) => observer.unobserve(video));
      observer.disconnect();
    };
  }, []);

  const playDesktop = () => {
    const video = desktopVideoRef.current;

    if (!video) return;

    video.play().catch(() => {});
    setDesktopPlaying(true);
  };

  const playMobile = () => {
    const video = mobileVideoRef.current;

    if (!video) return;

    video.play().catch(() => {});
    setMobilePlaying(true);
  };

  return (
    <section
      className="yr-review-section"
      aria-labelledby="yr-review-title"
    >
      <div className="yr-review-card">

        {/* =====================================================
            DESKTOP VIDEO
        ===================================================== */}

        <div className="yr-review-media yr-review-media-desktop">

          <video
            ref={desktopVideoRef}
            className="yr-review-video"
            controls={desktopPlaying}
            playsInline
            preload="metadata"
            poster={desktopPoster}
            onPlay={() => setDesktopPlaying(true)}
            onPause={() => setDesktopPlaying(false)}
            aria-label="Yellowstone Renovation client testimonial video"
          >
            <source
              src={desktopVideoSrc}
              type="video/mp4"
            />

            Your browser does not support embedded video.
          </video>


          {!desktopPlaying && (
            <>
              <div className="yr-review-media-label">
                REAL CLIENT STORY
              </div>

              <button
                type="button"
                className="yr-review-play"
                onClick={playDesktop}
                aria-label="Play client testimonial"
              >
                <span>▶</span>
              </button>
            </>
          )}

        </div>


        {/* =====================================================
            MOBILE VIDEO
        ===================================================== */}

        <div className="yr-review-media yr-review-media-mobile">

          <video
            ref={mobileVideoRef}
            className="yr-review-video"
            controls={mobilePlaying}
            playsInline
            preload="metadata"
            poster={mobilePoster}
            onPlay={() => setMobilePlaying(true)}
            onPause={() => setMobilePlaying(false)}
            aria-label="Yellowstone Renovation client testimonial video"
          >
            <source
              src={mobileVideoSrc}
              type="video/mp4"
            />

            Your browser does not support embedded video.
          </video>


          {!mobilePlaying && (
            <>
              <div className="yr-review-media-label">
                REAL CLIENT STORY
              </div>

              <button
                type="button"
                className="yr-review-play"
                onClick={playMobile}
                aria-label="Play client testimonial"
              >
                <span>▶</span>
              </button>
            </>
          )}

        </div>


        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="yr-review-content">

          <div className="yr-review-top">

            <span className="yr-review-badge">
              Client Story
            </span>

            <div
              className="yr-review-stars"
              aria-label="5 star client experience"
            >
              ★★★★★
            </div>

          </div>


          <h2 id="yr-review-title">
            Real work.
            <span> Real client experience.</span>
          </h2>


          <p className="yr-review-description">
            See what this Sacramento homeowner had to say about
            working with Yellowstone Renovation.
          </p>


          <div
            className="yr-review-benefits"
            aria-label="Project highlights"
          >

            <div>
              <span>✓</span>
              Clear communication
            </div>

            <div>
              <span>✓</span>
              Quality craftsmanship
            </div>

            <div>
              <span>✓</span>
              Clean project delivery
            </div>

          </div>


          <div className="yr-review-bottom">

            <div className="yr-review-project">

              <span>
                FEATURED PROJECT
              </span>

              <strong>
                {projectTitle}
              </strong>

              <small>
                {projectLocation}
              </small>

            </div>


            <Link
              to={projectLink}
              className="yr-review-link"
            >
              View Project

              <span>
                →
              </span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}