import React, { useState } from "react";

interface NavbarProps {
  setPage: (page: "home" | "search" | "detail" | "post-ad") => void;
  darkMode?: boolean;
  toggleDarkMode?: () => void;
  onSearch?: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ setPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="static_home__header" className="static_home__header">
      {/* MOBILE HEADER */}
      <div className="static_home__header__content_mobile">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}
        >
          <svg className="ico ico-menu" style={{ fill: "#fff", width: 28, height: 28 }}>
            <use xlinkHref="#ico-menu" />
          </svg>
        </button>

        <a
          href="#"
          onClick={(e) => { e.preventDefault(); setPage("home"); }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <svg id="ico-logo-vs" className="ico logo-header" style={{ width: 150, height: 62 }}>
            <use xlinkHref="#ico-logo-vs-white" />
          </svg>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ display: "flex" }}>
            <svg className="ico ico-search" style={{ fill: "#fff", width: 28, height: 28 }}>
              <use xlinkHref="#ico-search" />
            </svg>
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage("post-ad"); }}>
            <div className="btn btn-orange" style={{ padding: "8px 14px", fontSize: 13, whiteSpace: "nowrap" }}>
              Post your Ad
            </div>
          </a>
        </div>
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
      <div className="static_home__header__content">
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
