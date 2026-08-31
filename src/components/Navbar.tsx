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
          className="static_home__header__content__menu_trigger"
          id="static_home__header__content__menu_trigger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <svg className="ico ico-menu static_home__header__content__menu_trigger__icon_menu">
            <use xlinkHref="#ico-menu"></use>
          </svg>
        </button>
        <a className="vs-logo" href="#" onClick={(e) => { e.preventDefault(); setPage("home"); }} data-automation="mobHomepageIcon">
          <svg id="ico-logo-vs" className="ico logo-header">
            <use xlinkHref="#ico-logo-vs-white"></use>
          </svg>
        </a>
        <a href="#" onClick={(e) => e.preventDefault()} className="icon-search search-opener" id="search-opener" data-automation="mobSearch">
          <svg className="ico ico-search search-opener__icon_search">
            <use xlinkHref="#ico-search"></use>
          </svg>
        </a>
        <nav className="inline-mobile">
          <div className="inlinemenu">
            <a href="#" onClick={(e) => { e.preventDefault(); setPage("post-ad"); }} data-automation="mobPostButton">
              <div className="btn btn-orange">Post your Ad</div>
            </a>
          </div>
        </nav>
      </div>

      {/* DESKTOP HEADER */}
      <div className="static_home__header__content">
        <a className="vs-logo" href="#" onClick={(e) => { e.preventDefault(); setPage("home"); }} data-automation="homepageLogo">
          <svg id="ico-logo-vs" className="ico logo-header">
            <use xlinkHref="#ico-logo-vs-white"></use>
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
                <a href="https://help.vivastreet.co.uk" data-automation="lnkHeaderHelp" className="nav--links" rel="nofollow">
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
