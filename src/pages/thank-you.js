import * as React from "react";
import { Link } from "gatsby";
import SEO from "../components/SEO";
import "../styles/ThankYou.css";

export default function ThankYou() {
    return (
        <>
        <SEO
            title="Thank You | Yellowstone Renovation"
            description="Your estimate request has been received."
            pathname="/thank-you/"
            noindex
        />
        <section className="thankyou-section">
            <div className="thankyou-container">
                <div className="thankyou-icon">✔</div>
                <h1>Thank You!</h1>
                <p>
                    Your deck estimate request has been successfully submitted.
                    Our team will contact you within 24 hours to discuss your project
                    in <strong>Sacramento and the surrounding areas</strong>.
                </p>

                <Link to="/" className="thankyou-home-btn">
                    ← Back to Home
                </Link>
            </div>
        </section>
        </>
    );
}
