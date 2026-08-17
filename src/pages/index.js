import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

import WelcomeSection from "../components/WelcomeSection"
import DealerBanner from "../components/DealerBanner"
import BeforeAfter from "../components/BeforeAfter"
import GallerySection from "../components/GallerySection"
import "../styles/global.css"
import Services from "../components/Services.js"
import OurPortfolio from "../components/OurPortfolio"
import WindowsPromoSection from "../components/WindowsPromoSection"
import SEO from "../components/SEO"
import HeroRoofingSection from "../components/HeroRoofingSection";


export default function Home() {
  return (
    <Layout>

      <SEO
        title="Deck & Siding Contractor in Sacramento, CA | Yellowstone Renovation"
        description="Yellowstone Renovation provides deck construction and exterior remodeling in Sacramento, CA. Explore composite and wood decks, siding, windows and project planning."
        pathname="/"
      />


      <HeroRoofingSection
        background="/images/deck/deck-sacramento23.webp"
        title="Deck Builder & Siding Contractor in Sacramento, CA"
        subtitle="Yellowstone Renovation is a small, local company made up of a few hardworking people who truly care about what we do. We’re not a big corporation — just a team that takes pride in every project and aims to deliver honest, high-quality work for every client."
        ratingText="Local Team | Sacramento Exterior Projects"
        placeholder="Enter your ZIP code"
        buttonText="Get a quick quote"
      />


      {/* ✅ GALLERY */}
      <GallerySection
        title="DECK BUILDER GALLERY"
        subtitle="Explore our deck projects — expertly built for California homes. From composite to wood, each design is built to endure weather and time."
        highlight="DECK BUILDER"
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
          "/images/deck/deck-sacramento23.webp",
          "/images/deck/deck-sacramento87.webp",
          "/images/deck/deck-sacramento14.webp",
          "/images/deck/deck-sacramento68.webp",
          "/images/deck/deck-sacramento67.webp",
          "/images/deck/deck-sacramento82.webp",
          "/images/deck/deck-sacramento23.webp",
          "/images/deck/deck-sacramento2.webp",
          "/images/deck/deck-sacramento96.webp",
        ]}
      />

      {/* ✅ SERVICES SECTION */}
      <Services
        title="Professional Exterior Remodeling Services"
        subtitle="Complete outdoor solutions — decks, siding, gutters, windows, and trim installation. Everything your home exterior needs, built with precision, quality, and pride."
        accentColor="#0a923d"
        bgImage="/images/deck-bg.jpg"
        services={[
          {
            title: "Custom Deck Design & Build",
            description:
              "From concept to completion — our team builds stunning, durable decks that expand your living space and enhance outdoor comfort.",
            image: "/images/deck/deck-sacramento66.webp",
            link: "/deck-builder-sacramento/",
          },
          {
            title: "Composite & Wood Decks",
            description:
              "Choose between low-maintenance composite materials or timeless natural wood — both crafted for strength and lasting beauty.",
            image: "/images/projects/sacramento/fr20.webp",
            link: "/composite-decks-sacramento/",
          },
          {
            title: "James Hardie® & Vinyl Siding",
            description:
              "High-performance siding solutions built to protect your home and elevate curb appeal — engineered for California’s weather.",
            image: "/images/remodler1.webp",
            link: "/siding-replacement/",
          },
          {
            title: "Windows & Exterior Trim",
            description:
              "Energy-efficient windows and detailed trim work that improve your home’s aesthetics, comfort, and overall value.",
            image: "/images/remodler6.webp",
            link: "/windows/",
          },
        ]}
      />

      <WelcomeSection />
      <DealerBanner />
      {/* ✅ BEFORE / AFTER */}
      <BeforeAfter
        title="Deck & Siding Before & After Transformations"
        description="See how we’ve upgraded exteriors across Sacramento with strong, beautiful decks and durable siding installations. Outdoor living done right — the Yellowstone way."
        buttonText="See More Projects"
        buttonLink="/projects-showcase/"
        accentColor="#0a923d"
        images={[
          {
            before: "/images/deckafter3.webp",
            after: "/images/deckbefore3.webp",
          },
          {
            before: "/images/sidingafter.webp",
            after: "/images/sidingbefore.webp",
          },
        ]}
      />
      <OurPortfolio />
      <section className="home-seo-hub">
        <span>Deck planning in Sacramento</span>
        <h2>Start with the deck service that matches your project</h2>
        <p>
          Compare new deck construction, material-specific options, repairs and
          full replacements. Each guide explains the scope and links to local
          project information without forcing several pages to compete for the
          same search.
        </p>
        <div>
          <Link to="/deck-builder-sacramento/">Deck Builder Sacramento</Link>
          <Link to="/composite-decks-sacramento/">Composite Decks</Link>
          <Link to="/wood-decks-sacramento/">Wood Decks</Link>
          <Link to="/deck-replacement-sacramento/">Deck Replacement</Link>
          <Link to="/deck-repair-sacramento/">Deck Repair</Link>
          <Link to="/covered-decks-sacramento/">Covered Decks</Link>
        </div>
      </section>


      {/* ✅ PROMO SLIDER (Exterior Only) */}
      <WindowsPromoSection
        slides={[
          {
            image: "/images/remodler11.webp",
            tag: "Siding Replacement",
            heading: "Transform Your Home Exterior",
            description:
              "Boost curb appeal and weather resistance with expert siding installation. We install James Hardie® and premium vinyl siding across Sacramento Metro.",
            button: "Explore Siding Options",
            link: "/siding-replacement/",
            projectImage: "/images/remodler24.webp",
            projectLocation: "Sacramento, CA",
            projectInfo1: "James Hardie",
            projectInfo2: "Expert Install",
            projectName: "Fiber Cement Project",
            projectPrice: "14,995",
          },
          {
            image: "/images/deck6.webp",
            tag: "Deck Construction",
            heading: "Build Your Perfect Outdoor Space",
            description:
              "Custom-built decks designed for California weather — composite, cedar, or covered patio decks for relaxing and entertaining.",
            button: "View Deck Options",
            link: "/deck-builder-sacramento/",
            projectImage: "/images/deck2.webp",
            projectLocation: "Elk Grove, CA",
            projectInfo1: "Composite",
            projectInfo2: "Modern Railings",
            projectName: "Outdoor Living Deck",
            projectPrice: "18,300",
          },
        ]}
      />
    </Layout>
  )
}
