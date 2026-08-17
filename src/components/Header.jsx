import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import "../styles/Header.css";

const navItems = [
  { label: "Home", to: "/" },

  {
    label: "About",
    to: "/about/",
    children: [
      { label: "About Us", to: "/about/" },
      { label: "Offer", to: "/offers/" },
    ],
  },

  {
    label: "Siding",
    to: "/siding-replacement/",
    children: [
      { label: "Siding Overview", to: "/siding-replacement/" },
      { label: "Siding Installer", to: "/siding-sacramento/" },
      { label: "James Hardie Siding", to: "/james-hardie-siding/" },
      { label: "Vinyl Siding", to: "/vinyl-siding/" },
      { label: "Fiber Cement Siding", to: "/fiber-cement-siding/" },
      { label: "Wood Siding", to: "/wood-siding/" },
      { label: "Metal Siding", to: "/metal-siding/" },
    ],
  },

  {
    label: "Decks",
    to: "/deck-builder-sacramento/",
    children: [
      { label: "Deck Builder", to: "/deck-builder-sacramento/" },
      { label: "Composite Decks", to: "/composite-decks-sacramento/" },
      { label: "Wood Decks", to: "/wood-decks-sacramento/" },
      { label: "Deck Replacement", to: "/deck-replacement-sacramento/" },
      { label: "Deck Repair", to: "/deck-repair-sacramento/" },
      { label: "Covered Decks", to: "/covered-decks-sacramento/" },
    ],
  },

  { label: "Windows", to: "/windows/" },
  { label: "Painting", to: "/painting/" },
  { label: "Projects", to: "/projects-showcase/" },
  { label: "Contact Us", to: "/contact/" },
  { label: "Blog", to: "/blog/" },
];

const normalizePath = (value = "") => {
  const clean = value
    .split("?")[0]
    .split("#")[0]
    .replace(/\/+$/, "");

  return clean || "/";
};

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3 5.5 5.6v5.8c0 4.3 2.7 7.8 6.5 9.6 3.8-1.8 6.5-5.3 6.5-9.6V5.6L12 3Z" />
    <path d="m9.2 12.1 1.7 1.7 3.9-4.1" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 16.7v2.5a1.8 1.8 0 0 1-2 1.8A17.8 17.8 0 0 1 3 5a1.8 1.8 0 0 1 1.8-2H7.3A1.8 1.8 0 0 1 9 4.6c.1.9.3 1.7.6 2.5a1.8 1.8 0 0 1-.4 1.9L8.1 10a14.4 14.4 0 0 0 5.9 5.9l1.1-1.1a1.8 1.8 0 0 1 1.9-.4c.8.3 1.6.5 2.5.6a1.8 1.8 0 0 1 1.5 1.7Z" />
  </svg>
);

export default function Header() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const currentPath = normalizePath(location.pathname);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const oldOverflow = document.body.style.overflow;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = oldOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const isActive = (path) => {
    const target = normalizePath(path);

    if (target === "/") {
      return currentPath === "/";
    }

    return (
      currentPath === target ||
      currentPath.startsWith(`${target}/`)
    );
  };

  const itemIsActive = (item) =>
    isActive(item.to) ||
    (item.children || []).some((child) =>
      isActive(child.to)
    );

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      {/* =====================================================
          PROMO BAR
      ===================================================== */}

      <div className="yrh-promo">
        <Link to="/offers/">
          <span aria-hidden="true">◆</span>

          <strong>LIMITED TIME:</strong>

          {" "}Free 3D Design + $1,500 Off Your Project
        </Link>
      </div>


      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="yrh-header">

        <div className="yrh-main">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            className="yrh-brand"
            aria-label="YellowstoneReno.jpg home"
          >
            <img
              src="/YellowstoneReno.jpg"
              alt="YellowstoneReno.jpg"
              className="yrh-logo-full"
            />
          </Link>


          {/* =================================================
              TRUST
          ================================================= */}

          <div
            className="yrh-trust"
            aria-label="Customer assurances"
          >

            <div className="yrh-trust-item yrh-review">
              <span
                className="yrh-stars"
                aria-hidden="true"
              >
                ★★★★★
              </span>

              <strong>5-Star Reviews</strong>
            </div>


            <div className="yrh-trust-item">
              <ShieldIcon />
              <strong>Fully Insured</strong>
            </div>


            <div className="yrh-trust-item">
              <ShieldIcon />
              <strong>36-Month Warranty</strong>
            </div>

          </div>


          {/* =================================================
              ACTIONS
          ================================================= */}

          <div className="yrh-actions">

            <a
              href="tel:9165716919"
              className="yrh-phone"
            >
              <PhoneIcon />
              <span>(916) 571-6919</span>
            </a>


            <Link
              to="/contact/"
              className="yrh-cta"
            >
              Schedule Free Estimate

              <span aria-hidden="true">
                →
              </span>
            </Link>


            <button
              type="button"
              className="yrh-menu-button"
              aria-label="Open navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>

          </div>

        </div>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav
          className="yrh-nav"
          aria-label="Main navigation"
        >
          <ul>

            {navItems.map((item) => (

              <li
                className={
                  item.children
                    ? "yrh-dropdown"
                    : ""
                }
                key={item.label}
              >

                <Link
                  className={
                    itemIsActive(item)
                      ? "yrh-active"
                      : ""
                  }
                  to={item.to}
                >
                  {item.label}

                  {item.children && (
                    <span
                      className="yrh-caret"
                      aria-hidden="true"
                    >
                      ▾
                    </span>
                  )}
                </Link>


                {item.children && (

                  <ul className="yrh-dropdown-menu">

                    {item.children.map((child) => (

                      <li key={child.label}>
                        <Link
                          to={child.to}
                          activeClassName="yrh-active-child"
                        >
                          {child.label}
                        </Link>
                      </li>

                    ))}

                  </ul>

                )}

              </li>

            ))}

          </ul>
        </nav>

      </header>


      {/* =====================================================
          MOBILE MENU OVERLAY
      ===================================================== */}

      <div
        className={`yrh-mobile-overlay ${
          menuOpen ? "yrh-open" : ""
        }`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      >

        <aside
          className="yrh-mobile-panel"
          onClick={(event) =>
            event.stopPropagation()
          }
        >

          {/* =================================================
              MOBILE HEADER
          ================================================= */}

          <div className="yrh-mobile-head">

            <Link
              to="/"
              className="yrh-brand"
              onClick={closeMenu}
              aria-label="YellowstoneReno.jpg home"
            >
              <img
                src="/YellowstoneReno.jpg"
                alt="YellowstoneReno.jpg"
                className="yrh-logo-full"
              />
            </Link>


            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation"
            >
              ×
            </button>

          </div>


          {/* =================================================
              MOBILE NAVIGATION
          ================================================= */}

          <nav
            className="yrh-mobile-nav"
            aria-label="Mobile navigation"
          >

            {navItems.map((item) =>

              item.children ? (

                <div
                  className={`yrh-mobile-group ${
                    openDropdown === item.label
                      ? "yrh-expanded"
                      : ""
                  }`}
                  key={item.label}
                >

                  <button
                    type="button"
                    className={
                      itemIsActive(item)
                        ? "yrh-active"
                        : ""
                    }
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label
                          ? null
                          : item.label
                      )
                    }
                    aria-expanded={
                      openDropdown === item.label
                    }
                  >
                    {item.label}

                    <span aria-hidden="true">
                      {openDropdown === item.label
                        ? "−"
                        : "+"}
                    </span>
                  </button>


                  <div
                    className={`yrh-mobile-submenu ${
                      openDropdown === item.label
                        ? "yrh-open"
                        : ""
                    }`}
                  >

                    {item.children.map((child) => (

                      <Link
                        to={child.to}
                        onClick={closeMenu}
                        key={child.label}
                      >
                        {child.label}
                      </Link>

                    ))}

                  </div>

                </div>

              ) : (

                <Link
                  to={item.to}
                  onClick={closeMenu}
                  className={
                    itemIsActive(item)
                      ? "yrh-active"
                      : ""
                  }
                  key={item.label}
                >
                  {item.label}
                </Link>

              )

            )}

          </nav>


          {/* =================================================
              MOBILE ACTIONS
          ================================================= */}

          <div className="yrh-mobile-actions">

            <a href="tel:9165716919">
              <PhoneIcon />

              (916) 571-6919
            </a>


            <Link
              to="/contact/"
              onClick={closeMenu}
            >
              Schedule Free Estimate
            </Link>

          </div>

        </aside>

      </div>
    </>
  );
}