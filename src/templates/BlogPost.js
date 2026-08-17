import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import "../styles/BlogPost.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function BlogPost({ data }) {
  if (!data || !data.markdownRemark) {
    return (
      <main style={{ textAlign: "center", padding: "100px 20px" }}>
        <h2>Post not found</h2>
        <Link to="/blog/">← Back to Blog</Link>
      </main>
    );
  }

  const post = data.markdownRemark.frontmatter;
  const html = data.markdownRemark.html;
  const postUrl = `${data.site.siteMetadata.siteUrl}/blog/${post.slug}/`;

  const allPosts = data.allMarkdownRemark.nodes;
  const sameCategoryPosts = allPosts
    .filter(
      (p) =>
        p.frontmatter.category === post.category &&
        p.frontmatter.slug !== post.slug
    )
    .slice(0, 8);

  const sectionTitle =
    post.category === "Decking"
      ? "More in Decks"
      : post.category === "Windows"
      ? "More in Windows"
      : post.category === "Siding"
      ? "More in Siding"
      : "More in Paint ";

  return (
    <Layout>



      <SEO
        title={`${post.title} | Yellowstone Renovation`}
        description={post.excerpt}
        pathname={`/blog/${post.slug}`}
        image={post.image}
        article
        datePublished={post.dateISO}
        author={post.author || "Yellowstone Renovation"}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: post.title, path: `/blog/${post.slug}/` },
        ]}
      />

      {/* ===== BREADCRUMBS ===== */}
<section className="bp-breadcrumb-section">
  <div className="bp-container">
    <nav className="bp-breadcrumbs">
      <Link to="/">Home</Link>
      <span>/</span>
      <Link to="/blog/">Blog</Link>
      <span>/</span>
      <span className="current">{post.title}</span>
    </nav>
  </div>
</section>

      {/* ===== BLOG HEADER ===== */}
      <header className="bp-header">
        <div className="bp-header-container">
          <span className="bp-category">{post.category}</span>
          <h1 className="bp-title">{post.title}</h1>
          <div className="bp-meta">
            By {post.author || "Yellowstone Team"} — {post.date}
          </div>
        </div>

        <div className="bp-image-container">
          <img src={post.image} alt={post.title} />
        </div>

        <div className="bp-share">
          <span>SHARE —</span>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              postUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              postUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
              postUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={`mailto:?subject=${post.title}&body=Read this guide: ${postUrl}`}
          >
            <FaEnvelope />
          </a>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="bp-container">
        <article
          className="bp-article"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {post.category === "Decking" && (
          <aside className="bp-service-path" aria-label="Related Sacramento deck services">
            <span>Planning a deck project?</span>
            <h2>Use this guide with a project-specific service page</h2>
            <p>Compare the complete scope, then request an on-site consultation for your Sacramento-area property.</p>
            <div>
              <Link to="/deck-builder-sacramento/">Deck Builder Sacramento</Link>
              <Link to="/composite-decks-sacramento/">Composite Decks</Link>
              <Link to="/wood-decks-sacramento/">Wood Decks</Link>
              <Link to="/deck-replacement-sacramento/">Deck Replacement</Link>
              <Link to="/deck-repair-sacramento/">Deck Repair</Link>
            </div>
          </aside>
        )}

        {/* ===== MORE IN CATEGORY ===== */}
        {sameCategoryPosts.length > 0 && (
          <section className="bp-more-category">
            <h3>{sectionTitle}</h3>
            <div className="bp-more-grid">
              {sameCategoryPosts.map((b) => (
                <Link
                  to={`/blog/${b.frontmatter.slug}/`}
                  key={b.id}
                  className="bp-more-card"
                >
                  <img
                    src={b.frontmatter.image}
                    alt={b.frontmatter.title}
                    className="bp-more-img"
                  />
                  <div className="bp-more-content">
                    <p className="bp-more-date">{b.frontmatter.date}</p>
                    <h4>{b.frontmatter.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

  {/* ===== PROJECTS SECTION ===== */}
<section className="bp-projects">
  <h3>Recent Deck & Siding Projects</h3>
  <div className="bp-project-grid">
    <div className="bp-project-card">
      <img src="/images/deck3.webp" alt="Composite Deck Project" />
      <h4>Custom Composite Deck with Railings</h4>
      <p>Sacramento, CA</p>
    </div>

    <div className="bp-project-card">
      <img src="/images/deck2.webp" alt="Wood Deck Project" />
      <h4>Natural Wood Deck with Built-in Seating</h4>
      <p>Roseville, CA</p>
    </div>

    <div className="bp-project-card">
      <img src="/images/deck4.webp" alt="Hardie Siding Replacement" />
      <h4>James Hardie Fiber Cement Siding Upgrade</h4>
      <p>Folsom, CA</p>
    </div>

    <div className="bp-project-card">
      <img src="/images/remodler1.webp" alt="Vinyl Siding Installation" />
      <h4>Durable Vinyl Siding Replacement</h4>
      <p>Elk Grove, CA</p>
    </div>
  </div>
</section>

        {/* ===== BACK BUTTON ===== */}
        <div className="bp-back">
          <Link to="/blog/">← Back to Blog</Link>
        </div>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        date(formatString: "MMMM D, YYYY")
        dateISO: date(formatString: "YYYY-MM-DD")
        author
        category
        image
        excerpt
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          slug
          category
          image
          date(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
`;
