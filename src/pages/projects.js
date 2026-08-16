import * as React from "react";
import Layout from "../components/Layout";
import "../styles/ProjectsPage.css";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet";
import { MapPin } from "lucide-react"; // ✅ nice icon for location

export default function ProjectsPage() {
  const [filter, setFilter] = React.useState("All");

  const categories = ["All", "Siding", "Decking", "Windows", "Painting"];

  const projects = [
    // --- SIDING PROJECTS ---
    {
      title: "James Hardie® Fiber Cement Siding Upgrade",
      category: "Siding",
      image: "/images/deck3.webp",
      location: "Sacramento, CA",
    },
    {
      title: "Vinyl Siding Replacement — Two-Story Home",
      category: "Siding",
      image: "/images/remodler4.webp",
      location: "Folsom, CA 40475",
    },
    {
      title: "HardiePlank® Lap Siding with Trim Accents",
      category: "Siding",
      image: "/images/remodler5.webp",
      location: "Rocklin, CA 40383",
    },
    {
      title: "Hardie® Siding & Energy-Efficient Window Upgrade — Sacramento, CA",
      category: "Siding",
      image: "/images/remodler13.webp",
      location: "Sacramento, CA",
    },
    {
      title: "Modern Vertical Siding Installation",
      category: "Siding",
      image: "/images/remodler18.webp",
      location: "Elk Grove, CA",
    },

    // --- DECKING PROJECTS ---
    {
      title: "Composite Deck Build with Lighting Package",
      category: "Decking",
      image: "/images/deck-builder.webp",
      location: "Roseville, CA 40324",
    },
    {
      title: "Custom Wood Deck & Stair Expansion",
      category: "Decking",
      image: "/images/deck/deck-sacramento1.webp",
      location: "Sacramento, CA 40515",
    },
    {
      title: "Covered Deck with Cedar Ceiling & Fans",
      category: "Decking",
      image: "/images/deck/deck-sacramento8.webp",
      location: "Elk Grove, CA",
    },
    {
      title: "Trex Composite Deck with Black Railings",
      category: "Decking",
      image: "/images/deck/deck-sacramento14.webp",
      location: "Citrus Heights, CA 40391",
    },
    {
      title: "Elevated Multi-Level Deck with Pergola",
      category: "Decking",
      image: "/images/deck/deck-sacramento22.webp",
      location: "Folsom, CA",
    },

    // --- WINDOWS ---
    {
      title: "Energy-Efficient Window Replacement",
      category: "Windows",
      image: "/images/windows1.webp",
      location: "Sacramento, CA",
    },
    {
      title: "New Windows & Trim Wrap Upgrade",
      category: "Windows",
      image: "/images/remodler11.webp",
      location: "Folsom, CA 40475",
    },

    // --- PAINTING ---
    {
      title: "Exterior Repaint + Trim Protection",
      category: "Painting",
      image: "/images/remodler9.webp",
      location: "Elk Grove, CA",
    },
    {
      title: "Full Exterior Painting & Caulking Restoration",
      category: "Painting",
      image: "/images/remodler15.webp",
      location: "Roseville, CA 40324",
    },
  ];

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <Helmet>
        <meta
          name="keywords"
          content="Deck builder Sacramento CA, Siding contractor Sacramento CA, Composite decks, James Hardie siding, Home remodeling California projects"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Deck & Siding Project Gallery | Yellowstone Renovation"
        />
        <meta
          property="og:description"
          content="Browse our real siding replacement and custom deck construction projects across Sacramento Metro. Quality craftsmanship in every detail."
        />
        <meta
          property="og:image"
          content="https://sacramento.yellowstonerenovation.com/images/deck-builder.webp"
        />
      </Helmet>

      <SEO
        title="Deck & Siding Projects | Yellowstone Renovation | Sacramento, CA"
        description="Explore real before & after photos of decks, siding, and windows installed by Yellowstone Renovation across Sacramento Metro."
        pathname="/projects/"
        image="https://sacramento.yellowstonerenovation.com/images/deck-builder.webp"
      />

      <section className="portfolio-section">
        <div className="portfolio-container">
          <h2>Our Deck & Siding Projects</h2>
          <p className="portfolio-subtitle">
            Discover how Yellowstone Renovation brings lasting value and beauty
            to California homes — from custom decks to durable James Hardie®
            siding installations.
          </p>

          <div className="portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="portfolio-count">
            Showing {filtered.length} of {projects.length} projects
          </p>

          <div className="portfolio-grid">
            {filtered.map((project, i) => (
              <div key={i} className="project-card">
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <h4>{project.title}</h4>
                  <p>
                    <MapPin size={18} color="#0a923d" />
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
