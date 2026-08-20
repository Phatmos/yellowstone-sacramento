import React from "react";
import { Link } from "gatsby";
import SEO from "./SEO";
import Header from "./Header";
import FeaturedTestimonial from "./FeaturedTestimonial";
import HeroSplit1 from "./HeroSplit1";
import GallerySection from "./GallerySection";
import DeckBuildingSteps from "./DeckBuildingSteps";
import DeckFAQWithForm from "./DeckFAQWithForm";
import BottomHeroCtaDeck from "./BottomHeroCtaDeck";
import Footer from "./Footer";
import "../styles/DeckServicePage.css";

const serviceLinks = [
  { to: "/deck-builder-sacramento/", label: "Deck Builder Sacramento" },
  { to: "/composite-decks-sacramento/", label: "Composite Decks" },
  { to: "/wood-decks-sacramento/", label: "Wood Decks" },
  { to: "/deck-replacement-sacramento/", label: "Deck Replacement" },
  { to: "/deck-repair-sacramento/", label: "Deck Repair" },
  { to: "/covered-decks-sacramento/", label: "Covered Decks" },
];

const areaLinks = [
["Sacramento", "/cities/sacramento-ca/deck-builder/"],
  ["Elk Grove", "/cities/elk-grove-ca/deck-builder/"],
  ["Roseville", "/cities/roseville-ca/deck-builder/"],
  ["Folsom", "/cities/folsom-ca/deck-builder/"],
  ["Rocklin", "/cities/rocklin-ca/deck-builder/"],
  ["Citrus Heights", "/cities/citrus-heights-ca/deck-builder/"],
];

const data = {
  main: {
    path: "/deck-builder-sacramento/",
    title: "Deck Builder Sacramento, CA | Custom Deck Construction",
    description: "Sacramento deck builder for custom composite and wood decks, replacements, repairs, covers, stairs and railings. Request a detailed on-site estimate.",
    eyebrow: "Custom deck construction in Sacramento, California",
    title1: "Sacramento",
    titleGreen: "Deck Builder",
    title2: "Custom Deck Design, Construction & Replacement",
    heroImage: "/images/california/composite-deck-california.webp",
    heroText: "Plan a deck around your home, budget and daily life. We build composite and wood decks, stairs and railings for Sacramento-area homeowners.",
    heading: "A Sacramento deck contractor focused on the whole project",
    intro: [
      "A durable deck starts before the first board is installed. The layout must work with the home, footings and framing must support the design, and the material package must fit Sacramento's sun, seasonal rain and maintenance expectations.",
      "Yellowstone Renovation helps homeowners compare options, define the scope and move from an on-site consultation to a finished outdoor living space. New construction, replacement, repair, stairs, railings and covered-deck planning are handled as parts of one coordinated project.",
    ],
    highlights: [
      ["Design around the property", "We evaluate access, grade, door transitions, usable dimensions, traffic flow and how the deck connects to the yard."],
      ["Material guidance", "Compare composite, redwood, cedar and pressure-treated lumber by appearance, maintenance, heat, budget and expected use."],
      ["Complete construction scope", "Framing, decking, fascia, stairs, railings and finish details are planned together so the completed deck feels intentional."],
      ["Permit-aware planning", "Permit and inspection needs depend on the deck and project address. We identify the applicable jurisdiction before construction begins."],
    ],
    localHeading: "Deck construction for Sacramento homes",
    localText: "Sacramento-area properties range from compact city lots to larger suburban backyards. The right solution may be a ground-level entertaining deck, an elevated deck with stairs, a low-maintenance replacement or a covered outdoor room. We recommend a scope only after looking at the existing structure, site conditions and the way you want to use the space.",
    faq: [
      { q: "How much does a new deck cost in Sacramento?", a: "Price depends on size, height, site access, framing, material, stairs, railings, demolition and permit requirements. An on-site estimate is the reliable way to compare a complete scope rather than board-only pricing." },
      { q: "Does a deck need a permit in Sacramento?", a: "Some deck projects require permits and inspections, while limited repairs may be treated differently. Requirements depend on the structure and whether the property is inside the City of Sacramento or another jurisdiction. Confirm the project address and scope before work starts." },
      { q: "Is composite or wood decking better?", a: "Composite typically reduces routine staining and sealing. Wood offers a natural appearance and can have a lower initial material cost, but it needs ongoing care. Framing, ventilation, exposure and maintenance preferences matter as much as the surface material." },
      { q: "Can you replace an old deck?", a: "Yes. A replacement begins with evaluating the surface, framing, connections, footings, stairs and railings. Reusing part of a structure should be based on condition and compatibility with the new design, not assumed in advance." },
      { q: "Which Sacramento areas do you serve?", a: "Our core service area includes Sacramento, Elk Grove, Roseville, Folsom, Rocklin and Citrus Heights. Call to confirm availability for a specific project address." },
    ],
  },
  composite: {
    path: "/composite-decks-sacramento/",
    title: "Composite Deck Builder Sacramento, CA | Low-Maintenance Decks",
    description: "Custom composite deck construction in Sacramento, including framing, picture-frame borders, fascia, stairs and railings. Compare materials and request an estimate.",
    eyebrow: "Low-maintenance decking for Sacramento homes",
    title1: "Sacramento",
    titleGreen: "Composite Decks",
    title2: "Designed for Long-Term Outdoor Living",
    heroImage: "/images/california/composite-deck-california.webp",
    heroText: "Build a lower-maintenance deck with a coordinated plan for boards, framing, ventilation, fascia, stairs and railings.",
    heading: "Composite decking is a system, not just a board choice",
    intro: [
      "Composite decking can reduce the recurring sanding, staining and sealing associated with many wood surfaces. It still needs the correct framing layout, fasteners, expansion spacing, airflow and water management.",
      "We help Sacramento homeowners compare colors, board profiles, textures and railing combinations in the context of the entire build. Lighter and darker colors can feel different in direct sun, so exposure and barefoot use should be part of material selection.",
    ],
    highlights: [
      ["Board and color planning", "Compare appearance, heat exposure, texture, warranty terms and compatible fastener systems before ordering."],
      ["Purpose-built framing", "Joist spacing and blocking are planned for the selected product, stair layout, border pattern and railing loads."],
      ["Finished edges", "Picture-frame borders, fascia and stair details conceal cut ends and give the deck a complete architectural finish."],
      ["Practical maintenance", "Composite still benefits from regular cleaning and prompt removal of debris, especially around shaded or damp areas."],
    ],
    localHeading: "Choosing composite decking in Sacramento's climate",
    localText: "Direct sun, shade patterns, tree debris and irrigation all affect how a deck performs. We discuss board temperature, drainage, ventilation and cleaning access so the material choice fits the actual site rather than a showroom sample alone.",
  },
  wood: {
    path: "/wood-decks-sacramento/",
    title: "Wood Deck Builder Sacramento, CA | Redwood, Cedar & Treated",
    description: "Wood deck construction in Sacramento with redwood, cedar and pressure-treated options. Get help with layout, framing, railings, finish and maintenance planning.",
    eyebrow: "Natural wood deck construction in Sacramento",
    title1: "Sacramento",
    titleGreen: "Wood Decks",
    title2: "Natural Materials, Carefully Detailed",
    heroImage: "/images/deck-builder12.webp",
    heroText: "Choose a wood deck with a realistic plan for structure, finish, drainage and long-term maintenance in California weather.",
    heading: "A wood deck should be selected for both appearance and upkeep",
    intro: [
      "Redwood, cedar and pressure-treated lumber each offer a different balance of color, grain, durability, availability and cost. The best fit depends on the design, exposure and how much maintenance you want to perform.",
      "Good performance also depends on details below the walking surface: properly planned framing, fasteners, clearances, drainage and end protection. We build the assembly as one system and explain the care the finished deck will need.",
    ],
    highlights: [
      ["Wood species comparison", "Review the visual character, grade, expected movement, maintenance needs and budget of common deck lumber options."],
      ["Moisture-conscious details", "Airflow, gaps and water-shedding details help the structure dry after rain or cleaning."],
      ["Stairs and railings", "Transitions, handrails, guards and stair geometry are integrated into the design rather than added as an afterthought."],
      ["Finish planning", "Discuss when and how the deck should be cleaned, sealed or stained based on the selected lumber and product instructions."],
    ],
    localHeading: "Wood decking for hot, dry Sacramento summers",
    localText: "Sun exposure can change color and increase checking or surface movement over time. Shade, irrigation and seasonal rain add different stresses. Material selection, installation details and a realistic maintenance plan help preserve the deck's appearance and service life.",
  },
  replacement: {
    path: "/deck-replacement-sacramento/",
    title: "Deck Replacement Sacramento, CA | Rebuild Old Decks",
    description: "Deck replacement in Sacramento for aging wood and composite decks. We evaluate framing, footings, connections, stairs and railings before planning the rebuild.",
    eyebrow: "Old deck removal and rebuilding in Sacramento",
    title1: "Sacramento",
    titleGreen: "Deck Replacement",
    title2: "Rebuild the Structure, Layout and Finish",
    heroImage: "/images/california/deck-repair-inspection.webp",
    heroText: "Replace an aging deck with a coordinated plan for demolition, structure, materials, stairs, railings and code-related updates.",
    heading: "Replacement is the opportunity to correct more than worn boards",
    intro: [
      "Soft boards, loose railings and visible fastener damage may be only the surface symptoms of an older deck. A replacement plan should also examine framing, ledger connections, posts, footings, stairs, drainage and the way the deck meets the home.",
      "We document the intended scope before demolition, identify decisions that depend on concealed conditions and help you choose whether the new deck should retain the footprint or improve the layout.",
    ],
    highlights: [
      ["Existing-condition review", "We look for movement, decay, corrosion, water traps and unsafe details before recommending what may remain."],
      ["Controlled demolition", "Access, debris handling and protection of adjacent landscaping or finishes are included in project planning."],
      ["Layout improvements", "A rebuild can adjust stairs, traffic flow, railing locations and usable space when the site and approvals allow."],
      ["Compatible materials", "New decking, framing and hardware are selected as a system with the correct spacing and attachment details."],
    ],
    localHeading: "When repair is no longer the responsible option",
    localText: "Localized surface damage may be repairable. Widespread deterioration, recurring movement or deficient structural connections can make replacement more practical. We explain which observations drive the recommendation so you can compare scope, risk and long-term value.",
  },
  repair: {
    path: "/deck-repair-sacramento/",
    title: "Deck Repair Sacramento, CA | Boards, Stairs & Railings",
    description: "Deck repair in Sacramento for damaged boards, stairs, railings and selected structural components. Start with an on-site condition and scope review.",
    eyebrow: "Targeted deck repairs in Sacramento",
    title1: "Sacramento",
    titleGreen: "Deck Repair",
    title2: "Fix Damage Without Hiding the Cause",
    heroImage: "/images/california/deck-repair-inspection.webp",
    heroText: "Address loose boards, unstable railings, stair problems and isolated deterioration after the underlying condition is evaluated.",
    heading: "A useful deck repair starts with diagnosis",
    intro: [
      "Replacing a damaged board does not solve trapped water, inadequate support or a failing connection beneath it. We first identify whether the issue is cosmetic, localized or evidence of a wider structural problem.",
      "After the review, the repair scope can focus on the affected area or shift to replacement when isolated work would not produce a safe, durable result. Material matching and access are also considered before work is scheduled.",
    ],
    highlights: [
      ["Surface repairs", "Selected boards, trim and fascia may be replaceable when the supporting structure remains suitable."],
      ["Stair and railing work", "Loose components, damaged treads and guard details are reviewed together with their supporting connections."],
      ["Framing observations", "Visible joists, beams, posts and hardware are checked for damage that may change the recommended scope."],
      ["Repair-versus-replace guidance", "You receive a clear explanation of what the repair addresses, what it does not and when a rebuild is more practical."],
    ],
    localHeading: "Common reasons Sacramento decks need attention",
    localText: "Persistent shade, irrigation overspray, debris, failed coatings, sun exposure and normal age can affect different areas of a deck at different rates. Early evaluation can keep a localized problem from spreading, while a thorough scope avoids spending money on a surface-only fix when the structure is compromised.",
  },
  covered: {
    path: "/covered-decks-sacramento/",
    title: "Covered Decks Sacramento, CA | Deck & Patio Cover Planning",
    description: "Plan a covered deck in Sacramento with coordinated deck, roof, drainage, lighting and permit considerations. Request an on-site project consultation.",
    eyebrow: "Shaded outdoor living in Sacramento",
    title1: "Sacramento",
    titleGreen: "Covered Decks",
    title2: "Coordinate the Deck, Cover and Home",
    heroImage: "/images/california/composite-deck-california.webp",
    heroText: "Create usable shade with a design that coordinates structure, drainage, roof form, lighting and the connection to your home.",
    heading: "A covered deck is a coordinated structural project",
    intro: [
      "Adding a cover changes loads, drainage, clearances and the relationship between the deck and the home. Posts, beams, roof form and water management must be considered along with the deck layout below.",
      "We help homeowners define whether they want open shade, stronger weather protection, lighting or fan-ready space, then organize the deck and cover scope around the property and applicable approvals.",
    ],
    highlights: [
      ["Shade and orientation", "Sun direction, desired coverage and sightlines help determine the useful size and placement of the cover."],
      ["Structural coordination", "Deck framing, posts, beams and the cover are planned together so loads and clearances are addressed."],
      ["Drainage strategy", "Roof slope, runoff and water discharge are considered to avoid creating problems near the home or footings."],
      ["Electrical planning", "Lighting or fan goals should be identified early so electrical work and inspections can be coordinated when required."],
    ],
    localHeading: "More comfortable outdoor space during Sacramento summers",
    localText: "A well-positioned cover can make a deck more usable during intense afternoon sun while preserving airflow and views. The right design depends on the home's roofline, property constraints and the level of rain protection you expect.",
  },
};

const sharedFaq = [
  { q: "How do I start?", a: "Schedule an on-site consultation. We will discuss the goal, inspect the project area, measure the space and identify the choices needed for a complete estimate." },
  { q: "Do you work outside Sacramento?", a: "Yes. The core service area includes Sacramento, Elk Grove, Roseville, Folsom, Rocklin and Citrus Heights. Availability depends on the project address and schedule." },
  { q: "When are permits considered?", a: "Permit and inspection requirements are identified during planning because they vary by structure and jurisdiction. Final requirements should be confirmed for the property address before construction." },
];

export default function DeckServicePage({ page = "main" }) {
  const item = data[page] || data.main;
  const faqs = item.faq || sharedFaq;

  return (
    <>
      <SEO
        title={item.title}
        description={item.description}
        pathname={item.path}
        image={item.heroImage}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Decks", path: "/deck-builder-sacramento/" },
          ...(page === "main" ? [] : [{ name: item.title.split("|")[0].trim(), path: item.path }]),
        ]}
        service={{
          name: item.title.split("|")[0].trim(),
          serviceType: "Deck construction and remodeling",
          description: item.description,
        }}
      />
      <Header />
      <main className="deck-seo-page">
        <nav className="deck-seo-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span>›</span>
          {page !== "main" && <><Link to="/deck-builder-sacramento/">Decks</Link><span>›</span></>}
          <span aria-current="page">{item.title.split("|")[0].trim()}</span>
        </nav>

        <HeroSplit1
          img={item.heroImage}
          alt={`${item.title.split("|")[0]} project in the Sacramento area`}
          eyebrow={item.eyebrow}
          reviews="Serving Sacramento & Nearby Areas"
          title1={item.title1}
          titleGreen={item.titleGreen}
          title2={item.title2}
          text={item.heroText}
          btnText="Request an On-Site Estimate"
        />

        <FeaturedTestimonial />

        <section className="deck-seo-intro">
          <div className="deck-seo-copy">
            <span className="deck-seo-kicker">Plan the complete scope</span>
            <h2>{item.heading}</h2>
            {item.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="deck-seo-actions">
              <Link className="deck-seo-primary" to="/contact/">Request a free estimate</Link>
              <a className="deck-seo-secondary" href="tel:9165716919">Call (916) 571-6919</a>
            </div>
          </div>
          <aside className="deck-seo-scope" aria-label="Deck project scope">
            <h2>Deck project scope</h2>
            <ul>
              <li>On-site consultation and measurements</li>
              <li>Material and layout planning</li>
              <li>Framing, decking, stairs and railings</li>
              <li>Permit-aware project coordination</li>
              <li>Final walkthrough and site cleanup</li>
            </ul>
          </aside>
        </section>

        <section className="deck-seo-details">
          <div className="deck-seo-section-head">
            <span>What matters</span>
            <h2>Decisions that shape a better deck</h2>
          </div>
          <div className="deck-seo-detail-grid">
            {item.highlights.map(([title, text]) => (
              <article key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section className="deck-seo-local">
          <div>
            <span className="deck-seo-kicker">Local planning</span>
            <h2>{item.localHeading}</h2>
            <p>{item.localText}</p>
            <p>Permit rules depend on the project address and scope. The City of Sacramento currently directs property owners to verify required permits through its building permit services before work begins.</p>
          </div>
          <div className="deck-seo-area-links">
            <h3>Deck service areas</h3>
            {areaLinks.map(([label, to]) => <Link to={to} key={to}>{label} deck builders <span>→</span></Link>)}
          </div>
        </section>

        <section className="deck-seo-services">
          <div className="deck-seo-section-head">
            <span>Explore options</span>
            <h2>Sacramento deck services</h2>
          </div>
          <div className="deck-seo-service-links">
            {serviceLinks.map((link) => (
              <Link to={link.to} key={link.to} className={link.to === item.path ? "current" : ""}>
                {link.label}<span>Learn more →</span>
              </Link>
            ))}
          </div>
        </section>

        <GallerySection
          title="Deck Projects in the Sacramento Area"
          subtitle="See construction details, layouts and finishes from recent deck projects. Your design and estimate will be based on your own property, selected materials and project scope."
          highlight="PROJECT GALLERY"
          background="#ffffff"
          images={[
            "/images/deck/deck-sacramento39.webp", "/images/deck/deck-sacramento102.webp",
            "/images/deck/deck-sacramento22.webp", "/images/deck/deck-sacramento15.webp",
            "/images/deck/deck-sacramento9.webp", "/images/deck/deck-sacramento07.webp",
            "/images/deck/deck-sacramento41.webp", "/images/deck/deck-sacramento104.webp",
          ]}
        />

        <DeckBuildingSteps />

        <section className="deck-seo-guides">
          <div className="deck-seo-section-head">
            <span>Research before you build</span>
            <h2>Sacramento deck planning guides</h2>
          </div>
          <div className="deck-seo-guide-grid">
            <Link to="/blog/deck-installation-cost-sacramento-ca/"><strong>Deck installation cost in Sacramento</strong><span>Understand the variables in a complete estimate →</span></Link>
            <Link to="/blog/deck-building-permit-sacramento-ca/"><strong>Sacramento deck permit guide</strong><span>Learn when approvals may affect the schedule →</span></Link>
            <Link to="/blog/composite-vs-wood-deck-california/"><strong>Composite vs. wood decking</strong><span>Compare maintenance, appearance and use →</span></Link>
            <Link to="/blog/red-flags-bad-deck-builders-sacramento-ca/"><strong>Deck contractor red flags</strong><span>Questions to ask before choosing a scope →</span></Link>
          </div>
        </section>

        <DeckFAQWithForm
          faqs={faqs}
          title={`${item.titleGreen} — Frequently Asked Questions`}
          highlight="Questions"
          subtitle="Straight answers about planning, scope, materials and next steps."
        />
        <BottomHeroCtaDeck bgImage="/images/deck/deck-sacramento27.webp" phoneDisplay="(916) 571-6919" phoneTel="9165716919" />
      </main>
      <Footer />
    </>
  );
}
