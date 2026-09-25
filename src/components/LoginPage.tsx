import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface LoginPageProps {
  setPage: (page: "home" | "search" | "detail" | "post-ad" | "login") => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ setPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
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
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column", color: "#1e293b", fontFamily: "Arial, sans-serif" }}>
      {/* 1. TOP WHITE HEADER */}
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
            padding: "10px 16px",
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
                width: 135,
                height: 44,
                display: "block",
              }}
            >
              <use xlinkHref="#ico-logo-vs-dark" />
            </svg>
          </a>

          {/* Right Action Icons: FAVOURITES, POST AN AD, MENU */}
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {/* Favourites */}
            <button
              type="button"
              onClick={() => setPage("search")}
              style={{
                background: "none",
                border: "none",
                padding: "2px 0",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
              }}
              aria-label="Favourites"
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="#2b2e36"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  color: "#374151",
                  letterSpacing: 0.3,
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
                padding: "2px 0",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
              }}
              aria-label="Post an Ad"
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="#2b2e36"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  color: "#374151",
                  letterSpacing: 0.3,
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
                padding: "2px 0",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
              }}
              aria-label="Menu"
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="#2b2e36"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  color: "#374151",
                  letterSpacing: 0.3,
                  textTransform: "uppercase",
                }}
              >
                MENU
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAIN LOGIN CONTENT */}
      <main
        style={{
          flex: "1 0 auto",
          width: "100%",
          padding: "36px 16px 40px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: 440,
            margin: "0 auto",
            boxSizing: "border-box",
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontSize: 27,
              fontWeight: 700,
              color: "#1e293b",
              margin: "0 0 24px 0",
              letterSpacing: "-0.4px",
            }}
          >
            Login to Vivastreet
          </h1>

          {/* Toast Notification */}
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
              }}
            >
              ✓ Logged in successfully! Redirecting...
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Address */}
            <div style={{ marginBottom: 20 }}>
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
              <div
                style={{
                  width: "100%",
                  height: 48,
                  border: emailFocused ? "1.5px solid #65b21c" : "1px solid #d1d5db",
                  borderRadius: 8,
                  boxSizing: "border-box",
                  backgroundColor: "#ffffff",
                  boxShadow: emailFocused ? "0 0 0 3px rgba(101, 178, 28, 0.15)" : "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  id="login-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    padding: "0 14px",
                    fontSize: 16,
                    color: "#1e293b",
                    boxSizing: "border-box",
                    float: "none",
                    clear: "none",
                    boxShadow: "none",
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div style={{ marginBottom: 10 }}>
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
              <div
                style={{
                  width: "100%",
                  height: 48,
                  border: passwordFocused ? "1.5px solid #65b21c" : "1px solid #d1d5db",
                  borderRadius: 8,
                  boxSizing: "border-box",
                  backgroundColor: "#ffffff",
                  boxShadow: passwordFocused ? "0 0 0 3px rgba(101, 178, 28, 0.15)" : "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  style={{
                    flex: 1,
                    height: "100%",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    padding: "0 14px",
                    fontSize: 16,
                    color: "#1e293b",
                    boxSizing: "border-box",
                    float: "none",
                    clear: "none",
                    boxShadow: "none",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: "0 14px",
                    height: "100%",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#6b7280",
                  }}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="#6b7280"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
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
                  display: "inline-block",
                }}
              >
                Forgotten your password?
              </a>
            </div>

            {/* Flat Lime Green Login Button */}
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
                transition: "background-color 0.15s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5ca119")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#65b21c")}
            >
              Login
            </button>

            {/* Create an account */}
            <div style={{ textAlign: "center", marginTop: 22 }}>
              <a
                href="https://www.vivastreet.co.uk/register"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#0284c7",
                  fontSize: 15.5,
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
                color: "#374151",
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

          {/* Thin Divider */}
          <div style={{ borderTop: "1px solid #e5e7eb", margin: "24px 0 28px 0" }} />

          {/* Sub-footer Section matching screenshot */}
          <div style={{ paddingBottom: 40 }}>
            <h2
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#1e293b",
                margin: "0 0 16px 0",
              }}
            >
              Vivastreet
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a
                href="https://www.vivastreet.co.uk/s/about-us"
                style={{ color: "#475569", textDecoration: "none", fontSize: 15 }}
              >
                About Us
              </a>
              <a
                href="https://www.vivastreet.co.uk/s/press"
                style={{ color: "#475569", textDecoration: "none", fontSize: 15 }}
              >
                Press
              </a>
              <a
                href="https://www.vivastreet.co.uk/blog/"
                style={{ color: "#475569", textDecoration: "none", fontSize: 15 }}
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* 3. SLIDE-OUT MENU DRAWER PORTAL (When MENU is tapped) */}
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

            {/* Close button X */}
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
              {/* 1. My account */}
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

              {/* 3. Post your Ad */}
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

              {/* 4. Other links */}
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
