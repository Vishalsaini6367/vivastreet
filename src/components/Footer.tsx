import React from "react";

export const Footer: React.FC = () => {
  return (
    <>
      <section className="statics_links">
        <div className="grid grid--full static_links_logo">
          <div className="grid__item mob--one-whole tab--one-whole desk--one-fifth">
            <a className="vs-logo" href="#">
              <svg id="ico-logo-vs" className="ico logo-footer">
                <use xlinkHref="#ico-logo-vs-white"></use>
              </svg>
            </a>
          </div>
          <div className="grid__item mob--one-whole tab--one-whole desk--four-fifths">
            <nav className="footer-links">
              <ul>
                <li><a href="https://help.vivastreet.co.uk/kb/en/contact" rel="nofollow">Contact us</a></li>
                <li><a href="https://www.vivastreet.co.uk/s/about-us">About us</a></li>
                <li><a href="https://www.vivastreet.co.uk/blog/">Vivastreet Blog</a></li>
              </ul>
              <ul>
                <li><a href="https://www.vivastreet.co.uk/s/privacy-policy">Privacy Policy</a></li>
                <li><a href="https://www.vivastreet.co.uk/s/legal">Terms and Conditions</a></li>
                <li><a href="https://www.vivastreet.co.uk/s/posting-guidelines">Posting Guidelines</a></li>
              </ul>
              <ul>
                <li><a href="https://help.vivastreet.co.uk" rel="nofollow">Help</a></li>
                <li><a href="https://www.vivastreet.co.uk/s/cookies">Cookie Policy</a></li>
                <li><a href="https://www.vivastreet.co.uk/s/press">Press</a></li>
              </ul>
              <ul>
                <li><a href="https://www.vivastreet.co.uk/s/support_services">Support Services</a></li>
                <li><a href="https://media-p.viva-images.com/vs-uk/modern-slavery/ModernSlaveryStatementVS4.pdf" target="_blank" rel="noreferrer">Modern Slavery Statement</a></li>
                <li><a href="https://www.vivastreet.co.uk/s/online-safety-act" target="_blank" rel="noreferrer">Online Safety Act</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer">
        <div className="footer__content">
          <div className="footer__content__copyright">
            <span className="footer__content__copyright__content">
              Copyright © {new Date().getFullYear()} <a href="https://www.vivastreet.co.uk/s/about-us">Vivastreet</a> - Part of <a href="https://www.dvcorporate.com/">Digital Ventures Services Ltd</a>
              <br />
              <span className="footer__content__copyright__content__note">
                *Most of the categories on Vivastreet are free to post. However, in order to provide you with a quality service and security, some categories will charge a fee. These fees are clearly listed before you confirm your advert..
              </span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
