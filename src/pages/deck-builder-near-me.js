import React, { useState } from "react";
import Layout from "../components/Layout";
import GallerySection from "../components/GallerySection";
import Services from "../components/Services";
import DealerBanner from "../components/DealerBanner";
import MainSectionSideBar from "../components/MainSectionSideBar";
import SEO from "../components/SEO";
import BeforeAfter from "../components/BeforeAfter";
import { Helmet } from "react-helmet";
import TestimonialsSection from "../components/TestimonialsSection";
import DeckBuildingSteps from "../components/DeckBuildingSteps";
import HeroRoofingSection from "../components/HeroRoofingSection";

function DeckEstimateForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      if (response.ok) {
        setStatus("Thank you. Your request was sent successfully.");
        form.reset();
      } else {
        setStatus("Something went wrong. Please call us directly at (916) 571-6919.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please call us directly at (916) 571-6919.");
    }
  };

  return (
    <section style={{ background: "#f6f8f5", padding: "70px 20px" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
        <div>
          <p style={{ color: "#247704", fontWeight: "700", textTransform: "uppercase", marginBottom: "10px" }}>
            Free Deck Estimate
          </p>
          <h2 style={{ fontSize: "42px", lineHeight: "1.1", marginBottom: "18px", color: "#111" }}>
            Get Pricing From a Local Deck Builder Near You
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#444", marginBottom: "20px" }}>
            Send us your deck size, location, and project details. We’ll help you understand the best option for your home, whether it’s wood, composite, deck replacement, stairs, railings, or a covered deck.
          </p>
          <ul style={{ paddingLeft: "20px", color: "#333", lineHeight: "1.9", fontSize: "16px" }}>
            <li>Custom wood and composite decks</li>
            <li>Deck replacement and full rebuilds</li>
            <li>Stairs, railings, fascia, skirting, and picture-frame borders</li>
            <li>Serving Sacramento, Elk Grove, Roseville, Folsom, Rocklin, and nearby areas</li>
          </ul>
        </div>

        <form
          name="deck-builder-near-me"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "18px",
            boxShadow: "0 18px 45px rgba(0,0,0,0.08)",
          }}
        >
          <input type="hidden" name="form-name" value="deck-builder-near-me" />
          <p style={{ display: "none" }}>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <h3 style={{ fontSize: "26px", marginBottom: "18px", color: "#111" }}>
            Request a Free Estimate
          </h3>

          <input name="name" required placeholder="Your Name" style={inputStyle} />
          <input name="phone" required placeholder="Phone Number" style={inputStyle} />
          <input name="email" placeholder="Email Address" style={inputStyle} />
          <input name="city" required placeholder="City / ZIP Code" style={inputStyle} />

          <select name="projectType" required style={inputStyle}>
            <option value="">Project Type</option>
            <option value="New Deck Build">New Deck Build</option>
            <option value="Deck Replacement">Deck Replacement</option>
            <option value="Composite Deck">Composite Deck</option>
            <option value="Wood Deck">Wood Deck</option>
            <option value="Covered Deck">Covered Deck</option>
            <option value="Deck Repair">Deck Repair</option>
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your deck project"
            rows="5"
            style={{ ...inputStyle, resize: "vertical" }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              background: "#247704",
              color: "#fff",
              border: "none",
              padding: "16px 20px",
              borderRadius: "12px",
              fontSize: "17px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Send Estimate Request
          </button>

          {status && (
            <p style={{ marginTop: "14px", color: "#247704", fontWeight: "600" }}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px 16px",
  marginBottom: "14px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  fontSize: "16px",
  outline: "none",
};

export default function DeckBuilderNearMePage() {
  return (
    <Layout>
      <SEO
        title="Deck Builder Near Me | Custom Decks in Sacramento Metro"
        description="Need a deck builder near you? Yellowstone Renovation builds custom wood decks, composite decks, covered decks, stairs, railings, and deck replacements across Sacramento and Sacramento Metro."
        pathname="/deck-builder-near-me/"
        image="https://sacramento.yellowstonerenovation.com/images/deck/deck-sacramento39.webp"
      />

      <Helmet>
        <meta
          name="keywords"
          content="deck builder near me, deck contractor near me, deck builder Sacramento CA, deck builder Elk Grove CA, deck replacement near me, composite deck builder, wood deck contractor, covered deck builder"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Deck Builder Near Me | Yellowstone Renovation" />
        <meta
          property="og:description"
          content="Local deck builders serving Sacramento, Elk Grove, Roseville, Folsom, Rocklin, Sacramento, Citrus Heights, and surrounding Sacramento Metro areas."
        />
        <meta property="og:image" content="https://sacramento.yellowstonerenovation.com/images/deck/deck-sacramento39.webp" />
        <meta property="og:url" content="https://sacramento.yellowstonerenovation.com/deck-builder-near-me/" />
        <meta property="og:site_name" content="Yellowstone Renovation" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Deck Builder Near Me | Yellowstone Renovation" />
        <meta name="twitter:description" content="Custom wood, composite, and replacement decks built by local Sacramento Metro deck contractors." />
        <meta name="twitter:image" content="https://sacramento.yellowstonerenovation.com/images/deck/deck-sacramento39.webp" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://sacramento.yellowstonerenovation.com/#localbusiness",
                name: "Yellowstone Renovation",
                url: "https://sacramento.yellowstonerenovation.com",
                logo: "https://sacramento.yellowstonerenovation.com/icons/logo.webp",
                image: "https://sacramento.yellowstonerenovation.com/images/deck/deck-sacramento39.webp",
                telephone: "+1-916-571-6919",
                priceRange: "$$",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Elk Grove",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
                areaServed: [
                  "Sacramento CA",
                  "Elk Grove CA",
                  "Roseville CA",
                  "Folsom CA",
                  "Rocklin CA",
                  "Sacramento CA",
                  "Citrus Heights CA",
                  "Sacramento Metro",
                ],
              },
              {
                "@type": "Service",
                name: "Deck Builder Near Me",
                provider: {
                  "@id": "https://sacramento.yellowstonerenovation.com/#localbusiness",
                },
                serviceType: "Deck Building, Deck Replacement, Composite Deck Installation, Wood Deck Construction, Covered Deck Construction",
                areaServed: "Sacramento Metro",
              },
            ],
          })}
        </script>
      </Helmet>

      <HeroRoofingSection
        background="/images/deck/deck-sacramento39.webp"
        title="Deck Builder Near Me"
        subtitle="Custom wood, composite, and covered decks built by local deck contractors serving Sacramento, Elk Grove, Roseville, Folsom, Rocklin, Sacramento, Citrus Heights, and nearby Sacramento Metro areas."
        ratingText="⭐⭐⭐⭐⭐ Local Deck Builders in Sacramento Metro"
        placeholder="Enter your ZIP code"
        buttonText="Get Free Estimate"
      />

      <DeckEstimateForm />

      <Services
        title="Deck Services Near You"
        subtitle="Built clean, built strong, and designed for California weather."
        accentColor="#0a923d"
        bgImage="/images/deck-bg.jpg"
        services={[
          {
            title: "Custom Deck Construction",
            description: "New decks designed around your home, yard, budget, and outdoor lifestyle.",
            image: "/images/deck11.webp",
            link: "/decking/",
          },
          {
            title: "Composite Decking",
            description: "Low-maintenance composite decks with clean lines, durable boards, and modern finishes.",
            image: "/images/deck7.webp",
            link: "/composite-decks/",
          },
          {
            title: "Wood Decks",
            description: "Pressure-treated and natural wood decks built with proper framing and clean craftsmanship.",
            image: "/images/deck-builder20.webp",
            link: "/wood-decks/",
          },
          {
            title: "Deck Replacement",
            description: "Remove unsafe or outdated decks and rebuild with stronger framing and better materials.",
            image: "/images/deck-builder6.webp",
            link: "/contact/",
          },
        ]}
      />

      <GallerySection
        title="Recent Local Deck Projects"
        subtitle="Real deck builds, replacements, stairs, railings, and outdoor upgrades completed by Yellowstone Renovation."
        highlight="Deck Builder Near Me"
        background="#ffffff"
        images={[
          "/images/deck/deck-sacramento105.webp",
          "/images/deck/deck-sacramento104.webp",
          "/images/deck/deck-sacramento2.webp",
          "/images/deck/deck-sacramento01.webp",
          "/images/deck/deck-sacramento35.webp",
          "/images/deck/deck-sacramento13.webp",
          "/images/deck/deck-sacramento54.webp",
          "/images/deck/deck-sacramento23.webp",
          "/images/deck/deck-sacramento16.webp",
          "/images/deck/deck-sacramento87.webp",
          "/images/deck/deck-sacramento34.webp",
          "/images/deck/deck-sacramento65.webp",
        ]}
      />

      <DealerBanner
        title="Local Deck Contractors You Can Actually Reach"
        highlight="Built Right The First Time"
        description="We handle the full deck process: design, measurements, material planning, demolition, framing, decking, stairs, railings, cleanup, and final walkthrough."
        backgroundColor="#ffffff"
        highlightColor="#247704"
      />

      <BeforeAfter
        title="Before & After Deck Transformations"
        description="Old, damaged, and unsafe decks replaced with clean, strong, and usable outdoor spaces."
        buttonText="View More Projects"
        buttonLink="/projects/"
        accentColor="#0a923d"
        images={[
          {
            before: "/images/deckafter3.webp",
            after: "/images/deckbefore3.webp",
          },
          {
            before: "/images/deckafter1.webp",
            after: "/images/deckbefore1.webp",
          },
        ]}
      />

      <MainSectionSideBar
        title="Deck Builder Near Me"
        sections={[
          {
            heading: "Looking for a Deck Builder Near You?",
            text: `If you searched for “deck builder near me,” you are probably looking for a local contractor who can show up, explain the options, give a clear price, and build the deck correctly. Yellowstone Renovation builds custom decks across Sacramento Metro, including Sacramento, Elk Grove, Roseville, Folsom, Rocklin, Sacramento, Citrus Heights, and surrounding communities. We build new decks, replace old decks, upgrade wood decks to composite, install stairs and railings, and help homeowners create outdoor spaces that are safe, clean, and useful.`,
          },
          {
            heading: "Local Deck Builder Serving Sacramento and Sacramento Metro",
            text: `A local deck builder understands California weather, local soil conditions, drainage needs, intense summer heat, and seasonal winter rain, and the way outdoor structures wear over time. That matters. A deck is not just boards on top of framing. It needs proper footings, solid posts, correct joist spacing, safe stairs, strong railings, and clean water management. Our team builds decks with long-term use in mind, not just a fast surface-level finish.`,
          },
          {
            heading: "Custom Deck Construction for Your Home",
            text: `Every home is different, and every deck should be planned around the actual space. We look at the door height, yard slope, traffic flow, sunlight, privacy, existing patio areas, and how your family plans to use the deck. Whether you want a simple backyard platform, an elevated deck, a pool deck, a multi-level layout, or a covered outdoor area, we can help design and build a deck that fits the home instead of looking forced.`,
          },
          {
            heading: "Composite Deck Builder Near Me",
            text: `Composite decking is a smart option for homeowners who want a cleaner look and less maintenance. Composite boards do not need regular staining or sealing like traditional wood, and they hold up better against moisture, fading, and surface wear. We install composite deck boards, fascia, picture-frame borders, hidden fastener systems, stairs, and railing upgrades. If you want a deck that looks modern and is easier to maintain, composite is usually the better long-term choice.`,
          },
          {
            heading: "Wood Deck Builder Near Me",
            text: `Wood decks are still one of the most practical options for many homeowners. Pressure-treated wood gives you a strong deck at a lower upfront cost, and it can be stained or sealed for a better finished look. The problem is not wood itself. The problem is bad installation. We focus on proper framing, spacing, structural support, clean cuts, strong stairs, and safe railings so the deck is built correctly from the start.`,
          },
          {
            heading: "Deck Replacement and Full Rebuilds",
            text: `If your existing deck has soft boards, loose railings, rotted posts, weak stairs, sagging framing, or outdated materials, replacement may be smarter than repair. We remove the old deck, inspect what is still usable, and rebuild with better structure and updated materials. If the frame is not safe, we will tell you directly. Covering bad framing with new decking is a mistake, and it usually costs more later.`,
          },
          {
            heading: "Covered Decks, Stairs, Railings, and Add-Ons",
            text: `A deck can be more than a flat platform. We build stairs, landings, aluminum railings, wood railings, privacy walls, pergolas, covered deck structures, fascia, skirting, lighting options, and picture-frame details. These upgrades make the deck look more finished and make the space easier to use. The right add-ons depend on your budget, layout, and how you plan to use the area.`,
          },
          {
            heading: "Cities We Serve",
            text: `Yellowstone Renovation serves homeowners throughout the Sacramento Metro. Our primary service areas include Sacramento, Elk Grove, Roseville, Folsom, Rocklin, and Citrus Heights, along with nearby communities. If you are in the greater Sacramento area and need a deck builder, contact us to confirm availability for your address.`,
          },
          {
            heading: "Why Homeowners Choose Yellowstone Renovation",
            text: `Homeowners choose us because we keep the process clear. We explain the options, separate material choices, discuss wood versus composite honestly, and build with clean workmanship. You are not just paying for boards. You are paying for planning, structure, safety, finish quality, cleanup, and a contractor who communicates during the project.`,
          },
          {
            heading: "Get a Free Deck Estimate Near You",
            text: `Send us your location, a few photos, approximate deck size, and what type of deck you want. We can help you compare wood, composite, covered deck options, replacement costs, stairs, railings, and upgrades. Contact Yellowstone Renovation today to get a free deck estimate from a local Sacramento Metro deck builder.`,
          },
        ]}
        offers={[
          {
            image: "/images/deck1.webp",
            text: "Free Deck Estimate From a Local Builder",
            button: "Get Quote",
            link: "/contact/",
          },
          {
            image: "/images/deck2.webp",
            text: "See Completed Deck Projects Near You",
            button: "View Projects",
            link: "/projects/",
          },
        ]}
        whyUs={[
          "Local Sacramento Metro deck builders",
          "Wood, composite, and covered deck options",
          "Deck replacement and full rebuilds",
          "Stairs, railings, fascia, and skirting",
          "Clear pricing and clean installation",
        ]}
        projects={[
          { image: "/images/deck4.webp", title: "Backyard Deck" },
          { image: "/images/deck5.webp", title: "Composite Deck" },
          { image: "/images/deck6.webp", title: "Deck Stairs" },
          { image: "/images/deck7.webp", title: "Wood Deck" },
        ]}
        findUs={[
          { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
          { name: "Yelp", rating: "4.6/5", logo: "/icons/Yelp.webp" },
        ]}
        blog={[
          {
            title: "Wood vs Composite Decking in California",
            date: "May 2026",
            author: "Mark Ellison",
            image: "/images/deck6.webp",
          },
          {
            title: "Signs Your Deck Needs Replacement",
            date: "May 2026",
            author: "Mark Ellison",
            image: "/images/deck7.webp",
          },
          {
            title: "How to Choose a Local Deck Builder",
            date: "May 2026",
            author: "Mark Ellison",
            image: "/images/deck8.webp",
          },
        ]}
        partners={["/icons/jameshardie.webp", "/icons/Yelp.webp"]}
      />

      <TestimonialsSection />
      <DeckBuildingSteps />
      <DeckEstimateForm />
    </Layout>
  );
}
