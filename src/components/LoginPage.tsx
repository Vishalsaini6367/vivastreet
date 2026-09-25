import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface LoginPageProps {
  setPage: (page: "home" | "search" | "detail" | "post-ad" | "login") => void;
  onBack?: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ setPage, onBack }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedInToast, setLoggedInToast] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoggedInToast(true);
    setTimeout(() => {
      setLoggedInToast(false);
      setPage("home");
    }, 1800);
  };

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* 1. OFFICIAL WHITE LOGIN HEADER */}
      <header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0,
          zIndex: 100,
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: 1056,
            margin: "0 auto",
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          {/* Logo on Left */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setPage("home");
            }}
            style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
            aria-label="Vivastreet Home"
          >
            <svg
              style={{
                width: 140,
                height: 48,
                display: "block",
              }}
            >
              <use xlinkHref="#ico-logo-vs-dark" />
            </svg>
          </a>

          {/* 3 Right Action Buttons: FAVOURITES, POST AN AD, MENU */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {/* Favourites */}
            <button
              type="button"
              onClick={() => setPage("search")}
              style={{
                background: "none",
                border: "none",
                padding: "4px 2px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
              aria-label="Favourites"
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="#2b2e36"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span
                style={{
                  fontSize: 9.5,
                  fontWeight: 700,
                  color: "#475569",
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                }}
              >
                FAVOURITES
              </span>
            </button>

            {/* Post an Ad */}
            <button
              type="button"
              onClick={() => setPage("post-ad")}
              style={{
                background: "none",
                border: "none",
                padding: "4px 2px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
              aria-label="Post an Ad"
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="#2b2e36"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              <span
                style={{
                  fontSize: 9.5,
                  fontWeight: 700,
                  color: "#475569",
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                }}
              >
                POST AN AD
              </span>
            </button>

            {/* Menu */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              style={{
                background: "none",
                border: "none",
                padding: "4px 2px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
              aria-label="Menu"
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="#2b2e36"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <span
                style={{
                  fontSize: 9.5,
                  fontWeight: 700,
                  color: "#475569",
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                }}
              >
                MENU
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAIN LOGIN FORM CONTAINER */}
      <main
        style={{
          flex: "1 0 auto",
          width: "100%",
          padding: "24px 20px 40px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: 460,
            margin: "0 auto",
            boxSizing: "border-box",
          }}
        >
          {/* Back button if available */}
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              style={{
                background: "none",
                border: "none",
                color: "#64748b",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 500,
                padding: 0,
                marginBottom: 16,
              }}
            >
              <span>← Back</span>
            </button>
          )}

          {/* Heading */}
          <h1
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#1e293b",
              margin: "0 0 24px 0",
              letterSpacing: "-0.3px",
            }}
          >
            Login to Vivastreet
          </h1>

          {/* Login Notification Toast */}
          {loggedInToast && (
            <div
              style={{
                backgroundColor: "#e8f5e9",
                border: "1px solid #65b21c",
                color: "#2e7d32",
                padding: "12px 16px",
                borderRadius: 8,
                marginBottom: 20,
                fontSize: 14,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span>✓ Logged in successfully! Redirecting...</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Address */}
            <div style={{ marginBottom: 18 }}>
              <label
                htmlFor="login-email"
                style={{
                  display: "block",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#374151",
                  marginBottom: 8,
                }}
              >
                Email address
              </label>
              <input
                id="login-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  height: 48,
                  padding: "10px 14px",
                  border: "1.5px solid #d1d5db",
                  borderRadius: 8,
                  fontSize: 16,
                  outline: "none",
                  boxSizing: "border-box",
                  color: "#1e293b",
                  backgroundColor: "#ffffff",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#65b21c";
                  e.target.style.boxShadow = "0 0 0 3px rgba(101, 178, 28, 0.15)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#d1d5db";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: 14 }}>
              <label
                htmlFor="login-password"
                style={{
                  display: "block",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#374151",
                  marginBottom: 8,
                }}
              >
                Password
              </label>
              <div style={{ position: "relative", width: "100%" }}>
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                    height: 48,
                    padding: "10px 46px 10px 14px",
                    border: "1.5px solid #d1d5db",
                    borderRadius: 8,
                    fontSize: 16,
                    outline: "none",
                    boxSizing: "border-box",
                    color: "#1e293b",
                    backgroundColor: "#ffffff",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#65b21c";
                    e.target.style.boxShadow = "0 0 0 3px rgba(101, 178, 28, 0.15)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#d1d5db";
                    e.target.style.boxShadow = "none";
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 4,
                    color: "#6b7280",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Forgotten your password? */}
            <div style={{ marginBottom: 24 }}>
              <a
                href="https://www.vivastreet.co.uk/forgotten-password"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#0284c7",
                  fontSize: 15,
                  textDecoration: "underline",
                  fontWeight: 400,
                }}
              >
                Forgotten your password?
              </a>
            </div>

            {/* Green Login Button */}
            <button
              type="submit"
              style={{
                width: "100%",
                height: 48,
                backgroundColor: "#65b21c",
                color: "#ffffff",
                fontSize: 16,
                fontWeight: 600,
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                transition: "background-color 0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 4px rgba(101, 178, 28, 0.2)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5ca119")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#65b21c")}
            >
              Login
            </button>

            {/* Create an account */}
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <a
                href="https://www.vivastreet.co.uk/register"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#0284c7",
                  fontSize: 16,
                  fontWeight: 500,
                  textDecoration: "underline",
                  display: "inline-block",
                }}
              >
                Create an account
              </a>
            </div>

            {/* Having trouble logging in? Contact support */}
            <div
              style={{
                marginTop: 28,
                marginBottom: 28,
                fontSize: 15,
                color: "#334155",
                lineHeight: 1.5,
              }}
            >
              Having trouble logging in?{" "}
              <a
                href="https://help.vivastreet.co.uk"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#0284c7",
                  textDecoration: "underline",
                }}
              >
                Contact support
              </a>
            </div>
          </form>

          {/* Divider */}
          <div style={{ borderTop: "1px solid #e5e7eb", margin: "24px 0" }} />

          {/* Vivastreet Sub-links matching screenshot preview */}
          <div style={{ paddingBottom: 24 }}>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#1e293b",
                margin: "0 0 16px 0",
              }}
            >
              Vivastreet
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <li>
                <a
                  href="https://www.vivastreet.co.uk/s/about-us"
                  style={{ color: "#475569", textDecoration: "none", fontSize: 15 }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.vivastreet.co.uk/s/press"
                  style={{ color: "#475569", textDecoration: "none", fontSize: 15 }}
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="https://www.vivastreet.co.uk/blog/"
                  style={{ color: "#475569", textDecoration: "none", fontSize: 15 }}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://www.vivastreet.co.uk/s/corporate_responsibility"
                  style={{ color: "#475569", textDecoration: "none", fontSize: 15 }}
                >
                  Corporate Responsibility
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* 3. SLIDE-OUT MENU DRAWER PORTAL (When MENU is clicked) */}
      {menuOpen &&
        createPortal(
          <>
            {/* Backdrop overlay */}
            <div
              className="vs-mobile-sidebar-backdrop"
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
              className="vs-mobile-sidebar-close"
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
              className="vs-mobile-sidebar"
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
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  setPage("login");
                }}
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
                target="_blank"
                rel="noreferrer"
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
                onClick={(e) => {
                  e.preventDefault();
                  setPage("post-ad");
                  setMenuOpen(false);
                }}
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
                  { label: "Contact us", href: "https://help.vivastreet.co.uk/kb/en/contact" },
                  { label: "About us", href: "https://www.vivastreet.co.uk/s/about-us" },
                  { label: "Terms and Conditions", href: "https://www.vivastreet.co.uk/s/legal" },
                  { label: "Posting Guidelines", href: "https://www.vivastreet.co.uk/s/posting-guidelines" },
                  { label: "Cookie policy", href: "https://www.vivastreet.co.uk/s/cookies" },
                  { label: "Press", href: "https://www.vivastreet.co.uk/s/press" },
                  {
                    label: "Corporate Responsibility",
                    href: "https://www.vivastreet.co.uk/s/corporate_responsibility",
                  },
                  { label: "Support Services", href: "https://www.vivastreet.co.uk/s/support_services" },
                  {
                    label: "Modern Slavery Statement",
                    href: "https://media-p.viva-images.com/vs-uk/modern-slavery/ModernSlaveryStatementVS4.pdf",
                  },
                  { label: "Online Safety Act", href: "https://www.vivastreet.co.uk/s/online-safety-act" },
                  { label: "Privacy policy", href: "https://www.vivastreet.co.uk/s/privacy-policy" },
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
    </div>
  );
};
