import React, { useState } from "react";

interface NavbarProps {
  setPage: (page: "home" | "search" | "detail" | "post-ad") => void;
  darkMode?: boolean;
  toggleDarkMode?: () => void;
  onSearch?: (query: string) => void;
  onToggleSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ setPage, onToggleSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      id="static_home__header"
      className="static_home__header"
      style={{
        backgroundColor: "transparent",
        background: "transparent",
      }}
    >
      {/* MOBILE HEADER */}
      <div
        className="static_home__header__content_mobile"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "10px 16px",
          position: "relative",
          left: 0,
          top: 0,
          transform: "none",
          backgroundColor: "transparent",
          background: "transparent",
          boxSizing: "border-box",
        }}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "static",
            margin: 0,
          }}
          aria-label="Toggle menu"
        >
          <svg className="ico ico-menu" style={{ fill: "#fff", width: 28, height: 28, position: "static", top: 0, left: 0 }}>
            <use xlinkHref="#ico-menu" />
          </svg>
        </button>

        <a
          href="#"
          onClick={(e) => { e.preventDefault(); setPage("home"); }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "static",
            margin: "0 auto",
            textDecoration: "none",
          }}
        >
          <svg
            id="ico-logo-vs"
            className="ico logo-header"
            style={{
              width: 140,
              height: 52,
              position: "static",
              top: 0,
              left: 0,
              margin: 0,
              display: "block",
            }}
          >
            <use xlinkHref="#ico-logo-vs-white" />
          </svg>
        </a>

        <button
          type="button"
          onClick={() => onToggleSearch?.()}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "static",
            margin: 0,
          }}
          aria-label="Search"
        >
          <svg className="ico ico-search" style={{ fill: "#fff", width: 28, height: 28, position: "static", top: 0, left: 0 }}>
            <use xlinkHref="#ico-search" />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          backgroundColor: "#2b2e36", zIndex: 999, padding: "16px 20px",
          display: "flex", flexDirection: "column", gap: 14
        }}>
          <a href="https://www.vivastreet.co.uk/s/corporate_responsibility" style={{ color: "#fff", textDecoration: "none", fontSize: 15 }}>Corporate Responsibility</a>
          <a href="https://www.vivastreet.co.uk/blog" style={{ color: "#fff", textDecoration: "none", fontSize: 15 }}>Blog</a>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "#fff", textDecoration: "none", fontSize: 15 }}>My account</a>
          <a href="https://help.vivastreet.co.uk" style={{ color: "#fff", textDecoration: "none", fontSize: 15 }}>Help</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage("post-ad"); setMenuOpen(false); }}>
            <div className="btn btn-orange" style={{ textAlign: "center", marginTop: 4 }}>Post your Ad</div>
          </a>
        </div>
      )}

      {/* DESKTOP HEADER */}
      <div
        className="static_home__header__content"
        style={{
          backgroundColor: "transparent",
          background: "transparent",
        }}
      >
        <a
          className="vs-logo"
          href="#"
          onClick={(e) => { e.preventDefault(); setPage("home"); }}
          data-automation="homepageLogo"
        >
          <svg id="ico-logo-vs" className="ico logo-header">
            <use xlinkHref="#ico-logo-vs-white" />
          </svg>
        </a>

        <nav className="inline-desktop">
          <div className="inlinemenu">
            <ul>
              <li>
                <a href="https://www.vivastreet.co.uk/s/corporate_responsibility" className="nav--links" data-automation="lnkHeaderCorporateresponsibility">
                  Corporate Responsibility
                </a>
              </li>
              <li>
                <a href="https://www.vivastreet.co.uk/blog" className="nav--links" data-automation="lnkHeaderBlog">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="nav--links" data-automation="lnkHeaderLogin">
                  My account
                </a>
              </li>
              <li>
                <a href="https://help.vivastreet.co.uk" className="nav--links" data-automation="lnkHeaderHelp" rel="nofollow">
                  Help
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setPage("post-ad"); }} style={{ border: 0, display: "inline-block" }}>
                  <div className="btn btn-orange" data-automation="lnkHeaderPost">
                    Post your Ad
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
