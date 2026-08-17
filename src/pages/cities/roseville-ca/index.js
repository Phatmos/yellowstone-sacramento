import * as React from "react"
import Layout from "../../../components/Layout"

import "../../../styles/global.css"
import SEO from "../../../components/SEO";
import HeroSection from "../../../components/HeroSection";
import SidingPageSection from "../../../components/SidingPageSection";
import AboutSection from "../../../components/AboutSection";
import TestimonialsSection from "../../../components/TestimonialsSection";
import QuoteSection from "../../../components/QuoteSection";
import GallerySection from "../../../components/GallerySection"
import Services from "../../../components/Services.js"

export default function RosevilleKY() {
  return (
    <Layout>

      <SEO
        title="Deck and Siding Contractor in Roseville, CA | Exterior Builder You Can Trust"
        description="Yellowstone Renovation installs composite decks, wood decks, vinyl siding, and James Hardie siding in Roseville, CA. Trusted exterior contractor serving Placer County. Free onsite estimates."
        pathname="/cities/roseville-ca/"
        image="https://sacramento.yellowstonerenovation.com/images/remodler1.webp"
      />


      {/* ▶ HERO SECTION */}
      <HeroSection
        backgroundImage="/images/deck-builder3.webp"
        customerImage="/images/customer-hero1.png"
        title="Deck and Siding Contractor in Roseville, CA"
        subtitle="Improve your Roseville home with reliable siding installation and custom deck construction — built for beauty, comfort, and California weather."
        projectCount="35+ deck and siding projects completed this year across Placer County"
        city="Roseville"
        emailTo="yellowstonerenovation@gmail.com"
      />

      <AboutSection />

      {/* ▶ GALLERY */}
      <GallerySection
        title="DECK BUILDER GALLERY"
        subtitle="See our recent deck projects installed across Roseville and surrounding areas — built strong and designed to last."
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
          "/images/deck/deck-sacramento14.webp",
          "/images/deck/deck-sacramento68.webp",
          "/images/deck/deck-sacramento67.webp",
          "/images/deck/deck-sacramento82.webp",
          "/images/deck/deck-sacramento2.webp",
          "/images/deck/deck-sacramento96.webp",
        ]}
      />

      {/* ▶ SERVICES */}
      <Services
        title="Exterior Remodeling Services in Roseville, CA"
        subtitle="From premium siding to beautiful custom decks, our team delivers complete exterior remodeling services built for long-term performance in Roseville."
        accentColor="#0a923d"
        bgImage="/images/deck-bg.jpg"
        services={[
          {
            title: "Custom Deck Design & Construction",
            description:
              "We build beautiful and durable decks designed for Roseville homes — from simple layouts to full outdoor living spaces.",
            image: "/images/deck11.webp",
link: "/cities/roseville-ca/deck-builder/",
          },
          {
            title: "Composite & Wood Deck Installation",
            description:
              "Choose between low-maintenance composite or timeless wood decking. Built to handle California’s weather conditions.",
            image: "/images/deck7.webp",
            link: "/composite-decks-sacramento/",
          },
          {
            title: "James Hardie® & Vinyl Siding Installation",
            description:
              "We install top-quality siding that increases curb appeal and protects your home — including Hardie fiber cement and vinyl siding.",
            image: "/images/remodler1.webp",
            link: "/siding-replacement/",
          },
          {
            title: "Windows & Exterior Trim Upgrades",
            description:
              "Energy-efficient window installation and professional exterior trim upgrades for a cleaner, more polished exterior.",
            image: "/images/remodler6.webp",
            link: "/windows/",
          },
        ]}
      />

      {/* ▶ SIDING & DECK PAGE SECTION */}
      <SidingPageSection
        city="Roseville"
        layoutOrder={[
          "hero",
          "deck",
          "styles",
          "types",
          "cost",
          "extra",
          "cta",
        ]}

        heroTitle="Roseville’s Trusted Deck and Siding Experts"
        heroText1="We provide Roseville homeowners with professional siding installation and custom deck construction backed by high-quality materials and clean workmanship."
        heroText2="Choose from James Hardie, LP SmartSide, vinyl, cedar, and metal siding — plus Trex and TimberTech composite decks designed for lasting comfort."
        heroImage="/images/deck-builder12.webp"
        heroBottomText="Proudly serving Roseville, Granite Bay, Lincoln, and all Placer County areas."

        deckHeroTitle="Custom Decks Built for Roseville, CA"
        deckHeroText1="A well-designed deck enhances outdoor living and adds lasting value. We build decks that stand strong through Northern California’s heat and UV exposure and storms."
        deckHeroText2="Choose Trex, TimberTech, cedar, or pressure-treated wood — all installed to professional standards."
        deckHeroImage="/images/deck-builder8.webp"
        deckServicesTitle="Deck Services We Offer in Roseville:"
        deckServices={[
          "Custom deck design & 3D planning",
          "Trex and TimberTech composite deck installation",
          "Cedar and pressure-treated wood decks",
          "Covered decks, pergolas, and screened porches",
          "Deck resurfacing, repairs, and upgrades",
          "Railing, stairs, and lighting installations",
          "Permits and inspections handled for you"
        ]}
        deckCostTitle="Deck Cost in Roseville, CA"
        deckCostText="Composite decks in Roseville typically range from $45–$65 per sq. ft. installed. Wood decks range from $30–$50 per sq. ft. Pricing includes materials, labor, cleanup, and inspections."
        deckImages={[
          "/images/deck-builder.webp",
          "/images/deck-builder6.webp",
          "/images/deck-builder7.webp",
        ]}

        stylesTitle="Siding Styles Popular in Roseville"
        stylesIntro="We offer a full selection of siding styles to match Roseville homes — from modern to traditional."
        styles={[
          {
            name: "Lap Siding",
            text: "A durable, classic option that works well on Roseville homes. Available in vinyl, fiber cement, and engineered wood.",
            image: "/images/Lap-Siding.jpg",
          },
          {
            name: "Board and Batten",
            text: "Perfect for modern farmhouses and updated exteriors — creating strong vertical lines and visual character.",
            image: "/images/Board-Batten.jpg",
          },
          {
            name: "Shakes and Shingles",
            text: "Great for accents and gables, offering a natural textured appearance in cedar or fiber cement.",
            image: "/images/Shakes-Shingles.jpg",
          },
        ]}

        sidingTypesTitle="Siding Materials We Install in Roseville"
        sidingTypesIntro="Durable, low-maintenance siding options installed with precision and backed by strong warranties."
        sidingTypes={[
          { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
          { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
          { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
          { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
        ]}

        costTitle="Siding Installation Cost in Roseville, CA"
        costIntro="Below are average siding installation costs for Roseville homes:"
        costTable={[
          { material: "Vinyl Siding", price: "$6.50 – $9.00 per sq. ft." },
          { material: "Fiber Cement (James Hardie)", price: "$10.00 – $15.00 per sq. ft." },
          { material: "Engineered Wood (LP SmartSide)", price: "$9.00 – $12.00 per sq. ft." },
          { material: "Cedar Wood Siding", price: "$12.00 – $18.00 per sq. ft." },
          { material: "Metal Siding", price: "$8.00 – $13.00 per sq. ft." },
        ]}

        extraSectionTitle="Why Roseville Homeowners Choose Yellowstone Renovation"
        extraSectionText="Roseville residents trust our team for dependable communication, clean job sites, and craftsmanship built to last."
        extraPoints={[
          "⭐ Licensed, insured, and California-based installers",
          "⭐ 5-year workmanship warranty included",
          "⭐ 400+ exterior projects completed in Sacramento Metro",
          "⭐ No subcontractors — all work done by our team",
          "⭐ Free, detailed estimates with no pressure"
        ]}

        ctaTitle="Request a Free Deck or Siding Estimate in Roseville"
        ctaText="Ready to upgrade your home exterior? Get a free estimate for siding or deck construction in Roseville and Placer County."
        ctaImage="/images/deck-builder13.webp"
      />

      <TestimonialsSection />
      <QuoteSection />
    </Layout>
  );
}
