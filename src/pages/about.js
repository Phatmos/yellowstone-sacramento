import * as React from "react";
import Layout from "../components/Layout";
import AboutHero from "../components/AboutHeroSimple";
import MainSectionSideBar from "../components/MainSectionSideBar";
import SEO from "../components/SEO";
import "../styles/global.css";

export default function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About Yellowstone Renovation | Sacramento Exterior Contractor"
        description="Meet Yellowstone Renovation, a Sacramento-area exterior renovation team focused on decks, siding, windows, painting, clear project scopes and organized workmanship."
        pathname="/about/"
        image="/images/Yellowstone-Team.webp"
      />

      <AboutHero />

      <MainSectionSideBar
        title="About Yellowstone Renovation"
        sections={[
          {
            heading: "Who We Are",
            text: "Yellowstone Renovation is a local exterior renovation company serving Sacramento and nearby communities. We focus on practical planning, careful construction, and straightforward communication so homeowners understand the scope before work begins.",
          },
          {
            heading: "Our Approach",
            text: "Every project starts with the property, the homeowner’s priorities, and the conditions we can verify on site. We review material choices, access, layout, visible structural concerns, and the steps required to prepare a clear written estimate.",
          },
          {
            heading: "Exterior Work With a Clear Purpose",
            text: "Our core services include custom decks, deck replacement and repair, siding installation, window replacement, and exterior painting. Each recommendation is tied to the home, the project goal, and the expected maintenance requirements.",
          },
          {
            heading: "An Organized Project Experience",
            text: "From scheduling through the final walkthrough, our goal is to keep responsibilities, next steps, and changes clear. We protect the work area, maintain an orderly job site, and communicate when project conditions require a decision.",
          },
          {
            heading: "Our Sacramento Service Area",
            text: "We serve Sacramento, Elk Grove, Roseville, Folsom, Rocklin, Citrus Heights, and surrounding communities. Project availability depends on the address, scope, permitting requirements, and current schedule.",
          },
          {
            heading: "Plan Your Next Exterior Project",
            text: "If you are comparing deck materials, evaluating aging siding, planning new windows, or preparing a larger exterior improvement, schedule an on-site consultation. We will help organize the choices and define the next step.",
          },
        ]}
        offers={[
          {
            image: "/images/Yellowstone-Team.webp",
            text: "Schedule an On-Site Exterior Project Consultation",
            button: "Request an Estimate",
            link: "/contact/",
          },
          {
            image: "/images/remodler1.webp",
            text: "Explore Completed Projects Across Sacramento",
            button: "View Projects",
            link: "/projects-showcase/",
          },
        ]}
        whyUs={[
          "Project scope reviewed before construction",
          "Material options explained in plain language",
          "Organized work areas and clear next steps",
          "Responsive communication throughout the project",
          "Local service across the Sacramento area",
        ]}
        projects={[
          {
            image: "/images/deck/deck-sacramento23.webp",
            title: "Composite Deck Project",
            link: "/projects/sacramento-ca-composite-deck/",
          },
          {
            image: "/images/projects/siding-1.webp",
            title: "Exterior Siding Upgrade",
            link: "/siding-replacement/",
          },
          {
            image: "/images/projects/window-1.webp",
            title: "Window Replacement",
            link: "/windows/",
          },
          {
            image: "/images/projects/deck-4.webp",
            title: "Custom Wood Deck",
            link: "/wood-decks-sacramento/",
          },
        ]}
        findUs={[
          { name: "Yelp", rating: "View profile", logo: "/icons/Yelp.webp" },
          { name: "Google", rating: "View profile", logo: "/icons/google-reviews.webp" },
        ]}
        blog={[
          {
            title: "Composite vs. Wood Decks in California",
            date: "Planning guide",
            author: "Yellowstone Renovation",
            image: "/images/deck/deck-sacramento13.webp",
            link: "/blog/composite-vs-wood-deck-california/",
          },
          {
            title: "When to Replace Siding in Sacramento",
            date: "Homeowner guide",
            author: "Yellowstone Renovation",
            image: "/images/projects/siding-1.webp",
            link: "/blog/when-to-replace-siding-sacramento/",
          },
          {
            title: "Deck Building Permits in Sacramento",
            date: "Permit guide",
            author: "Yellowstone Renovation",
            image: "/images/deck/deck-sacramento22.webp",
            link: "/blog/deck-building-permit-sacramento-ca/",
          },
        ]}
        partners={[
          "/icons/jameshardie.webp",
          "/icons/bbb-logo.webp",
          "/icons/Yelp.webp",
        ]}
      />
    </Layout>
  );
}

