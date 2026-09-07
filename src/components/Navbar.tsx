import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface NavbarProps {
  setPage: (page: "home" | "search" | "detail" | "post-ad") => void;
  darkMode?: boolean;
  toggleDarkMode?: () => void;
  onSearch?: (query: string) => void;
  onToggleSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ setPage, onToggleSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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

      {/* Mobile Slide-Out Sidebar Drawer */}
      {menuOpen &&
        createPortal(
          <>
            {/* Backdrop overlay */}
          <div
            className="vs-mobile-sidebar-backdrop vs-mobile-only"
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.45)",
              zIndex: 99998,
            }}
          />

          {/* Close button X right outside the drawer */}
          <button
            type="button"
            className="vs-mobile-sidebar-close vs-mobile-only"
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              top: 24,
              left: "calc(68% + 12px)",
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              zIndex: 100000,
              padding: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Close sidebar"
          >
            <svg
              viewBox="0 0 24 24"
              style={{
                width: 38,
                height: 38,
                stroke: "#fff",
                strokeWidth: 3,
                fill: "none",
                strokeLinecap: "round",
              }}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Drawer menu */}
          <aside
            className="vs-mobile-sidebar vs-mobile-only"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              bottom: 0,
              height: "100dvh",
              maxHeight: "100dvh",
              width: "68%",
              maxWidth: 290,
              backgroundColor: "#737c8d",
              zIndex: 99999,
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
              overscrollBehavior: "contain",
              touchAction: "pan-y",
              boxShadow: "4px 0 16px rgba(0,0,0,0.3)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* 1. My account - dark slate */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setMenuOpen(false); }}
              style={{
                flex: "0 0 auto",
                backgroundColor: "#545c6b",
                color: "#fff",
                fontSize: 16,
                fontWeight: 500,
                padding: "18px 20px",
                textDecoration: "none",
                display: "block",
                boxSizing: "border-box",
                lineHeight: "20px",
              }}
            >
              My account
            </a>

            {/* 2. Help */}
            <a
              href="https://help.vivastreet.co.uk"
              onClick={() => setMenuOpen(false)}
              style={{
                flex: "0 0 auto",
                backgroundColor: "#697282",
                color: "#fff",
                fontSize: 15,
                fontWeight: 400,
                padding: "15px 20px",
                textDecoration: "none",
                display: "block",
                boxSizing: "border-box",
                lineHeight: "20px",
              }}
            >
              Help
            </a>

            {/* 3. Post your Ad - Vibrant Orange with white (+) icon */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setPage("post-ad"); setMenuOpen(false); }}
              style={{
                flex: "0 0 auto",
                backgroundColor: "#fe7e22",
                color: "#fff",
                fontSize: 15,
                fontWeight: 600,
                padding: "14px 20px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 12,
                boxSizing: "border-box",
                lineHeight: "20px",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  color: "#fe7e22",
                  fontWeight: 700,
                  fontSize: 15,
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                +
              </span>
              Post your Ad
            </a>

            {/* 4. Other links on slate-grey background */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#737c8d",
                paddingBottom: 50,
                flex: "0 0 auto",
              }}
            >
              {[
                { label: "Contact us", href: "#" },
                { label: "About us", href: "#" },
                { label: "Terms and Conditions", href: "#" },
                { label: "Posting Guidelines", href: "#" },
                { label: "Cookie policy", href: "#" },
                { label: "Press", href: "#" },
                { label: "Corporate Responsibility", href: "https://www.vivastreet.co.uk/s/corporate_responsibility" },
                { label: "Support Services", href: "#" },
                { label: "Modern Slavery Statement", href: "#" },
                { label: "Online Safety Act", href: "#" },
                { label: "Privacy policy", href: "#" },
                { label: "Blog", href: "https://www.vivastreet.co.uk/blog" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    flex: "0 0 auto",
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: 400,
                    padding: "13px 20px",
                    textDecoration: "none",
                    display: "block",
                    lineHeight: "20px",
                    boxSizing: "border-box",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </aside>
        </>,
        document.body
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
