import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import "../styles/MascotSections.css";

const serviceAreas = [
  ["Sacramento", "/cities/sacramento-ca/"],
  ["Elk Grove", "/cities/elk-grove-ca/"],
  ["Folsom", "/cities/folsom-ca/"],
  ["Roseville", "/cities/roseville-ca/"],
  ["Citrus Heights", "/cities/citrus-heights-ca/"],
  ["Rocklin", "/cities/rocklin-ca/"],
];

const PinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21s7-6.4 7-12A7 7 0 0 0 5 9c0 5.6 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export function MascotServiceAreas() {
  return (
    <section className="yrm-areas" aria-labelledby="yrm-areas-title">
      <div className="yrm-areas-card">
        <div className="yrm-areas-copy">
          <span className="yrm-pill">Areas we serve</span>
          <h2 id="yrm-areas-title">
            Proudly serving Sacramento
            <span> and nearby communities</span>
          </h2>
          <p>
            Local deck, fence, siding and window projects across the
            Sacramento Metro. Choose your city for service details or ask us
            about another nearby address.
          </p>

          <div className="yrm-area-links" aria-label="Primary service areas">
            {serviceAreas.map(([label, to]) => (
              <Link key={label} to={to}>
                <PinIcon />
                {label}
              </Link>
            ))}
          </div>

          <Link className="yrm-primary-button" to="/cities/">
            View all service areas <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="yrm-map" aria-hidden="true">
          <span className="yrm-road yrm-road-one" />
          <span className="yrm-road yrm-road-two" />
          <span className="yrm-road yrm-road-three" />
          <span className="yrm-map-pin yrm-map-pin-one" />
          <span className="yrm-map-pin yrm-map-pin-two" />
          <span className="yrm-map-pin yrm-map-pin-three" />
          <span className="yrm-map-pin yrm-map-pin-four" />
          <img
            src="/images/mascot/yellowstone-bear-map.webp"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export function MascotProjectCta({
  eyebrow = "A local team that is ready to help",
  title = "Let’s talk about your project",
  text = "Tell us what you are planning and get a clear next step from Yellowstone Renovation.",
  buttonText = "Get Free Estimate",
  buttonLink = "/contact/",
}) {
  return (
    <section className="yrm-cta" aria-labelledby="yrm-cta-title">
      <div className="yrm-cta-card">
        <div className="yrm-cta-shade" />
        <img
          className="yrm-cta-bear"
          src="/images/mascot/yellowstone-bear-lounging.webp"
          alt="Yellowstone Renovation bear mascot ready to help"
          loading="lazy"
        />

        <div className="yrm-speech" aria-hidden="true">
          <strong>Got questions?</strong>
          <span>I’m just a click away!</span>
        </div>

        <div className="yrm-cta-copy">
          <span>{eyebrow}</span>
          <h2 id="yrm-cta-title">{title}</h2>
          <p>{text}</p>
          <div className="yrm-cta-actions">
            <Link to={buttonLink}>{buttonText} <b aria-hidden="true">→</b></Link>
            <a href="tel:9165716919">Call (916) 571-6919</a>
          </div>
        </div>
      </div>

      <div className="yrm-trust-row" aria-label="Yellowstone Renovation assurances">
        <div><b>Local</b><span>Family Owned</span></div>
        <div><b>★★★★★</b><span>5-Star Reviews</span></div>
        <div><b>✓</b><span>Quality Materials</span></div>
        <div><b>36</b><span>Month Warranty</span></div>
      </div>
    </section>
  );
}

export function MascotAssist() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [round, setRound] = useState(0);
  const timers = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const wasDismissed = window.sessionStorage.getItem("yr-mascot-dismissed");
    if (wasDismissed) {
      setDismissed(true);
      return undefined;
    }

    const showAfterScroll = () => {
      if (window.scrollY > 720) {
        setVisible(true);
        setRound(1);
        window.removeEventListener("scroll", showAfterScroll);
      }
    };

    window.addEventListener("scroll", showAfterScroll, { passive: true });
    showAfterScroll();

    return () => {
      window.removeEventListener("scroll", showAfterScroll);
      timers.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  useEffect(() => {
    if (!visible || dismissed || typeof window === "undefined") return undefined;

    const hideTimer = window.setTimeout(() => {
      setVisible(false);

      if (round < 2) {
        const returnTimer = window.setTimeout(() => {
          setRound(2);
          setVisible(true);
        }, 30000);
        timers.current.push(returnTimer);
      }
    }, 12000);

    timers.current.push(hideTimer);
    return () => window.clearTimeout(hideTimer);
  }, [visible, dismissed, round]);

  const close = () => {
    setDismissed(true);
    setVisible(false);
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("yr-mascot-dismissed", "1");
    }
  };

  if (dismissed) return null;

  return (
    <aside
      className={`yrm-assist ${visible ? "yrm-assist-visible" : ""}`}
      aria-hidden={!visible}
      aria-label="Project help"
    >
      <button
        type="button"
        className="yrm-assist-close"
        onClick={close}
        aria-label="Close project help"
        tabIndex={visible ? 0 : -1}
      >
        ×
      </button>
      <img
        src="/images/mascot/yellowstone-bear-wave.webp"
        alt=""
        loading="lazy"
      />
      <div>
        <strong>Hi! Need a free estimate?</strong>
        <span>I’m here to help.</span>
      </div>
      <Link to="/contact/" tabIndex={visible ? 0 : -1}>Start Here</Link>
      <a href="tel:9165716919" tabIndex={visible ? 0 : -1}>Call Us</a>
    </aside>
  );
}
