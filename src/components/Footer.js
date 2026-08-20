import React from "react";
import { Link } from "gatsby";
import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                {/* === Column 1: Logo & Contact === */}
                <div className="footer-col">
                    <Link to="/" className="footer-logo-link">
                        <img
                            src="/favicon.png"
                            alt="Yellowstone Renovation"
                            className="footer-logo"
                        />
                    </Link>
                    <p className="footer-about">
                        <strong>Contact Us</strong><br />
                        <a href="tel:9165716919">(916) 571-6919</a><br />
                        <a href="mailto:renovationyellowstone@gmail.com">
                            renovationyellowstone@gmail.com
                        </a><br /><br />

                        <strong>Location</strong><br />
                        Sacramento City & Nearby Areas
                    </p>
                </div>

                {/* === Column 2: Why Us === */}
                <div className="footer-col">
                    <h4>Why Us</h4>
                    <ul>
                        <li>✔️ On-site project consultations</li>
                        <li>✔️ Clearly defined project scope</li>
                        <li>✔️ Material and design guidance</li>
                        <li>✔️ Organized project communication</li>
                        <li>✔️ Final walkthrough and cleanup</li>
                    </ul>
                </div>

                {/* === Column 3: Services === */}
                <div className="footer-col">
                    <h4>Our Services</h4>
                    <ul>
                        <li><Link to="/deck-builder-sacramento/">Deck Builder Sacramento</Link></li>
                        <li><Link to="/fence-contractor-sacramento/">Fence Contractor Sacramento</Link></li>
                        <li><Link to="/redwood-fence-sacramento/">Redwood Fences</Link></li>
                        <li><Link to="/vinyl-fence-sacramento/">Vinyl Fences</Link></li>
                        <li><Link to="/siding-replacement/">Siding Replacement</Link></li>
                        <li><Link to="/windows/">Window Replacement</Link></li>
                    </ul>
                </div>

                {/* === Column 4: Areas Served === */}
                <div className="footer-col">
                    <h4>Areas Served</h4>
                    <ul>
                        <li><Link to="/cities/sacramento-ca/">Sacramento, CA</Link></li>
                        <li><Link to="/cities/folsom-ca/">Folsom, CA</Link></li>
                        <li><Link to="/cities/elk-grove-ca/">Elk Grove, CA</Link></li>
                        <li><Link to="/cities/roseville-ca/">Roseville, CA</Link></li>
                        <li><Link to="/cities/rocklin-ca/">Rocklin, CA</Link></li>
                        <li><Link to="/cities/citrus-heights-ca/">Citrus Heights, CA</Link></li>
                        <li><Link to="/cities/">View Full Service Area</Link></li>
                    </ul>
                </div>
            </div>

            {/* === Review Logos === */}
            <div className="footer-logos">
                <a href="https://www.bbb.org/us/ca/elk-grove/profile/home-improvement/yellowstone-renovation-0402-235919743" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/bbb-logo.webp" alt="BBB" />
                </a>
                <a href="https://www.google.com/maps/place/Yellowstone+Renovation" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/google-reviews.webp" alt="Google" />
                </a>
            </div>

            {/* === Bottom Bar === */}
            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Yellowstone Renovation. All Rights Reserved. |{" "}
                    <Link to="/privacy-policy/">Privacy Policy</Link> |{" "}
                    <Link to="/terms-of-service/">Terms of Service</Link>
                </p>

            </div>
        </footer>
    );
}
