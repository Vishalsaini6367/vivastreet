import React, { useState } from "react";

interface CategoryGridProps {
  onSelectCategory: (category: string) => void;
}

const TABS = [
  { id: 0, label: "Property" },
  { id: 1, label: "Jobs" },
  { id: 2, label: "Vehicles" },
  { id: 3, label: "Buy & Sell" },
  { id: 4, label: "Services" },
  { id: 5, label: "Personals" },
  { id: 6, label: "Adult" },
];

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <>
      {/* DESKTOP MEGA MENU TABS */}
      <div id="static_home__mega_menu" className="static_home__mega_menu" data-automation="megaMenu">
        <ul className="static_home__mega_menu__list">
          {TABS.map((tab) => (
            <li
              key={tab.id}
              className={`static_home__mega_menu__list__item ${activeTab === tab.id ? "active" : ""}`}
              data-list-id={tab.id}
              onMouseEnter={() => setActiveTab(tab.id)}
              onClick={() => { setActiveTab(tab.id); onSelectCategory(tab.label); }}
            >
              <a className="static_home__mega_menu__list__item__link" href="#" onClick={(e) => e.preventDefault()}>
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* MEGA MENU MAP (SUB-CATEGORIES) */}
      <div className="static_home__mega_menu__map">
        {/* PAGE 0: PROPERTY */}
        {activeTab === 0 && (
          <div className="static_home__mega_menu__map__page" style={{ display: "block" }}>
            <div className="static_home__mega_menu__map__column">
              <a className="static_home__mega_menu__map__column__title" href="#">
                <h3>RESIDENTIAL PROPERTY</h3>
              </a>
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Property to Rent</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Flatshare - Rooms to Rent</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Property for Sale</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Land for Sale</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Garage Storage</a></li>
              </ul>
            </div>
            <div className="static_home__mega_menu__map__column">
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__column__title" href="#">COMMERCIAL PROPERTY</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Office space</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Shops/Businesses for Sale-let</a></li>
              </ul>
            </div>
            <div className="static_home__mega_menu__map__column">
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__column__title"><a className="static_home__mega_menu__map__column__title" href="#">Holidays</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Holidays services</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Hotels</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Property Exchange</a></li>
              </ul>
            </div>
          </div>
        )}

        {/* PAGE 1: JOBS */}
        {activeTab === 1 && (
          <div className="static_home__mega_menu__map__page" style={{ display: "block" }}>
            <div className="static_home__mega_menu__map__column">
              <a className="static_home__mega_menu__map__column__title" href="#">
                <h3>JOBS</h3>
              </a>
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Job vacancies</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Part time jobs</a></li>
              </ul>
            </div>
            <div className="static_home__mega_menu__map__column">
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__column__title" style={{ visibility: "hidden" }}>.</li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Internships</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Job seekers - CVs</a></li>
              </ul>
            </div>
            <div className="static_home__mega_menu__map__column">
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__column__title" style={{ visibility: "hidden" }}>.</li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Accounting jobs</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Engineering jobs</a></li>
              </ul>
            </div>
            <div className="static_home__mega_menu__map__column">
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__column__title" style={{ visibility: "hidden" }}>.</li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Marketing jobs</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Sales jobs</a></li>
              </ul>
            </div>
          </div>
        )}

        {/* PAGE 2: VEHICLES */}
        {activeTab === 2 && (
          <div className="static_home__mega_menu__map__page" style={{ display: "block" }}>
            <div className="static_home__mega_menu__map__column">
              <a className="static_home__mega_menu__map__column__title" href="#">
                <h3>VEHICLES</h3>
              </a>
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Cars</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Motorcycles</a></li>
              </ul>
            </div>
            <div className="static_home__mega_menu__map__column">
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__column__title" style={{ visibility: "hidden" }}>.</li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Vans & commercial vehicles</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Caravans & campervans</a></li>
              </ul>
            </div>
            <div className="static_home__mega_menu__map__column">
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__column__title" style={{ visibility: "hidden" }}>.</li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Vehicle rentals</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Boats</a></li>
              </ul>
            </div>
            <div className="static_home__mega_menu__map__column">
              <a className="static_home__mega_menu__map__column__title" href="#">
                <h3>PARTS & ACCESSORIES</h3>
              </a>
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Car parts & accessories</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Motorcycle parts & accessories</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Caravan parts & accessories</a></li>
              </ul>
            </div>
          </div>
        )}

        {/* PAGE 3: BUY & SELL */}
        {activeTab === 3 && (
          <div className="static_home__mega_menu__map__page" style={{ display: "block" }}>
            <div className="static_home__mega_menu__map__column">
              <a className="static_home__mega_menu__map__column__title" href="#">
                <h3>HOME</h3>
              </a>
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Home appliances</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Furniture</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Decorations, paintings & lighting</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Books & collectables</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Garden, outdoor & DIY</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Office furniture</a></li>
              </ul>
            </div>
            <div className="static_home__mega_menu__map__column">
              <a className="static_home__mega_menu__map__column__title" href="#">
                <h3>LEISURE</h3>
              </a>
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Musical instruments</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Sports equipment</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Hand made</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Event tickets</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Food & Beverages</a></li>
              </ul>
            </div>
            <div className="static_home__mega_menu__map__column">
              <a className="static_home__mega_menu__map__column__title" href="#">
                <h3>FASHION</h3>
              </a>
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Clothes, footwear & accessories</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Kids clothing & toys</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Jewellery</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Health & beauty product</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Free stuff - swap</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Miscellaneous</a></li>
              </ul>
            </div>
            <div className="static_home__mega_menu__map__column">
              <a className="static_home__mega_menu__map__column__title" href="#">
                <h3>ELECTRONICS</h3>
              </a>
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Camera, audio & video</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">CDs - DVDs - Video games</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Computers & accessories</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Mobile phones</a></li>
              </ul>
            </div>
          </div>
        )}

        {/* PAGE 4: SERVICES */}
        {activeTab === 4 && (
          <div className="static_home__mega_menu__map__page" style={{ display: "block" }}>
            <div className="static_home__mega_menu__map__column">
              <a className="static_home__mega_menu__map__column__title" href="#">
                <h3>SERVICES</h3>
              </a>
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Find a tradesman</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Web & IT services</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Models - auditions - photography</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Event planning & catering</a></li>
              </ul>
            </div>
            <div className="static_home__mega_menu__map__column">
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__column__title" style={{ visibility: "hidden" }}>.</li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Massage Services</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Health & Beauty</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Removals & storage services</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Transport services</a></li>
              </ul>
            </div>
            <div className="static_home__mega_menu__map__column">
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__column__title" style={{ visibility: "hidden" }}>.</li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Interpreting - Translation</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Financial services</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Astrology - Psychics</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Other services</a></li>
              </ul>
            </div>
          </div>
        )}

        {/* PAGE 5: PERSONALS */}
        {activeTab === 5 && (
          <div className="static_home__mega_menu__map__page" style={{ display: "block" }}>
            <div className="static_home__mega_menu__map__column">
              <a className="static_home__mega_menu__map__column__title" href="#">
                <h3>FREE PERSONALS</h3>
              </a>
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Friendship - Friends</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Straight relationships</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Men seeking women</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Women seeking men</a></li>
              </ul>
            </div>
            <div className="static_home__mega_menu__map__column">
              <a className="static_home__mega_menu__map__column__title" href="#">
                <h3>GAY AND LESBIAN</h3>
              </a>
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Gay escorts</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Gay dating</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Lesbian dating</a></li>
              </ul>
            </div>
            <div className="static_home__mega_menu__map__column">
              <div className="static_home__mega_menu__map__column__title">
                <h3>ADULT</h3>
              </div>
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Swingers</a></li>
              </ul>
            </div>
          </div>
        )}

        {/* PAGE 6: ADULT */}
        {activeTab === 6 && (
          <div className="static_home__mega_menu__map__page" style={{ display: "block" }}>
            <div className="static_home__mega_menu__map__column">
              <a className="static_home__mega_menu__map__column__title" href="#">
                <h3>ADULT DATING</h3>
              </a>
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Swingers</a></li>
              </ul>
              <a className="static_home__mega_menu__map__column__title" href="#">
                <h3>EROTICA</h3>
              </a>
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Adult entertainment</a></li>
              </ul>
            </div>
            <div className="static_home__mega_menu__map__column">
              <a className="static_home__mega_menu__map__column__title" href="#">
                <h3>ESCORTS &amp; MASSAGE</h3>
              </a>
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Escorts</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Gay escorts</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Trans escorts</a></li>
              </ul>
            </div>
            <div className="static_home__mega_menu__map__column">
              <a className="static_home__mega_menu__map__column__title" href="#">
                <h3>POPULAR SEARCHES</h3>
              </a>
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Asian escorts</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Belfast escorts</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Birmingham escorts</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Bradford escorts</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">British escorts</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Edinburgh escorts</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Glasgow escorts</a></li>
              </ul>
            </div>
            <div className="static_home__mega_menu__map__column">
              <ul className="static_home__mega_menu__map__list">
                <li className="static_home__mega_menu__map__column__title" style={{ visibility: "hidden" }}>.</li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Independent escorts</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Leeds escorts</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Liverpool escorts</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">London escorts</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Manchester escorts</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Nuru Massage</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">TS escorts</a></li>
                <li className="static_home__mega_menu__map__list__item"><a className="static_home__mega_menu__map__list__item__link" href="#">Thai massage</a></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
