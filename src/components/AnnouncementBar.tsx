import React from "react";

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="homepage-banner" id="banner-homepage" data-automation="homepage-banner-new-search">
      <div>
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 10.6667L25.6667 7L29.3333 5.33333L25.6667 3.66667L24 0L22.3333 3.66667L18.6667 5.33333L22.3333 7L24 10.6667ZM14 11.3333L10.6667 4L7.33333 11.3333L0 14.6667L7.33333 18L10.6667 25.3333L14 18L21.3333 14.6667L14 11.3333ZM24 18.6667L22.3333 22.3333L18.6667 24L22.3333 25.6667L24 29.3333L25.6667 25.6667L29.3333 24L25.6667 22.3333L24 18.6667Z" fill="#FE7E22"/>
        </svg>
      </div>
      <div className="homepage-banner-content">
        <p>
          A faster way to browse Vivastreet — Coming soon. See{" "}
          <a href="https://www.vivastreet.co.uk/blog/a-great-new-way-to-search-on-vivastreet/">here</a>{" "}
          for more details
        </p>
      </div>
    </div>
  );
};
