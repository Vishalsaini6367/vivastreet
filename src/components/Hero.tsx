import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { CategoryGrid } from "./CategoryGrid";
import { MobileCategoryList } from "./MobileCategoryList";

interface HeroProps {
  onSearchSubmit: (query: string, category: string, location: string) => void;
  onSelectCategory: (category: string) => void;
  setPage: (page: "home" | "search" | "detail" | "post-ad") => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearchSubmit, onSelectCategory, setPage }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("0");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit("", selectedCategory, selectedLocation);
  };

  return (
    <>
      <div id="static_home" className="static_home">
        {/* Background image - absolutely fills the hero */}
        <div className="static_home__background_image" />

        {/* Navbar overlays at top of hero */}
        <Navbar setPage={setPage} onToggleSearch={() => setMobileSearchOpen(!mobileSearchOpen)} />

        {/* Mobile-only centered Post your Ad button matching official mobile screenshot */}
        <div className="vs-mobile-hero-post vs-mobile-only">
          <button
            type="button"
            className="vs-mobile-post-ad-btn"
            onClick={() => setPage("post-ad")}
          >
            Post your Ad
          </button>
        </div>

        {/* Title - Desktop only */}
        <div className="static_home__title vs-desktop-only">
          <h1 className="static_home__title__content">FREE LOCAL CLASSIFIED ADS</h1>
        </div>

        {/* Search form - Desktop or opened on Mobile */}
        <div className={`static_home__category grid__item ${mobileSearchOpen ? "vs-mobile-search-open" : "vs-desktop-only"}`}>
        <form
          className="static_home__category__form grid grid--full"
          id="static_home__category__form"
          onSubmit={handleSubmit}
        >
          <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
            <p className="grid__item mob--one-whole tab--two-twelfths desk--two-twelfths">
              <legend className="static_home__search_panel__category__form__title">
                What are you looking for ?
              </legend>
            </p>
            <input type="hidden" name="lb" value="new" />
            <input type="hidden" name="search" value="1" />

            <p className="grid__item mob--one-whole tab--four-twelfths desk--four-twelfths input-wrapper select">
              <select
                name="select-this"
                id="vs-cat-dropdown-1"
                data-automation="categoryDropdown"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value=""> All categories </option>
                <optgroup label="Free Personals">
                  <option value="3"> -- Free personals -- </option>
                  <option value="14"> Friendship - Friends </option>
                  <option value="1018"> Gay Escorts </option>
                  <option value="1032"> Trans Escorts </option>
                  <option value="142"> Straight Relationships </option>
                  <option value="1000"> Gay and Lesbian </option>
                  <option value="15"> Adult Dating </option>
                  <option value="88"> Escorts and Massages </option>
                  <option value="131"> Adult Entertainment </option>
                  <option value="376"> Swingers </option>
                </optgroup>
                <optgroup label="Buy &amp; Sell">
                  <option value="2"> -- Buy &amp; Sell -- </option>
                  <option value="1007"> Home </option>
                  <option value="1008"> Leisure </option>
                  <option value="1009"> Electronics </option>
                  <option value="1010"> Fashion </option>
                  <option value="18"> Free Stuff - Swap </option>
                  <option value="52"> Miscellaneous </option>
                </optgroup>
                <optgroup label="Holidays">
                  <option value="1029"> -- Holidays -- </option>
                  <option value="1030"> Holidays Services </option>
                  <option value="41"> B&amp;B&apos;s, Hotels &amp; Holiday lets UK </option>
                  <option value="44"> House exchange </option>
                </optgroup>
                <optgroup label="Farming">
                  <option value="1011"> -- Farming -- </option>
                  <option value="1012"> Farm vehicles &amp; machinery </option>
                  <option value="1014"> Farms for sale </option>
                </optgroup>
                <optgroup label="Vehicles">
                  <option value="138"> -- Vehicles -- </option>
                  <option value="45"> Cars for sale </option>
                  <option value="46"> Motorcycles </option>
                  <option value="91"> Caravans &amp; Campervans </option>
                  <option value="130"> Vans &amp; Commercial Vehicles </option>
                  <option value="86"> Boats </option>
                  <option value="1006"> Vehicle Rentals </option>
                  <option value="239"> Vehicle Parts &amp; Accessories </option>
                </optgroup>
                <optgroup label="Residential Property">
                  <option value="7"> -- Residential Property -- </option>
                  <option value="37"> Property to Rent </option>
                  <option value="38"> Flatshare - Rooms to rent </option>
                  <option value="40"> Property for Sale </option>
                  <option value="118"> Land for Sale </option>
                  <option value="117"> Garage Storage </option>
                  <option value="76"> Commercial Property </option>
                </optgroup>
                <optgroup label="Classes">
                  <option value="9"> -- Classes -- </option>
                  <option value="106"> Music-Acting-Dance </option>
                  <option value="108"> Web design and Computer courses </option>
                  <option value="105"> Language courses </option>
                  <option value="150"> Sport - Wellness - Beauty </option>
                  <option value="109"> Private lessons </option>
                  <option value="110"> Other Classes </option>
                </optgroup>
                <optgroup label="Services">
                  <option value="6"> -- Services -- </option>
                  <option value="32"> Find a tradesman </option>
                  <option value="134"> Web &amp; IT services </option>
                  <option value="103"> Models - Auditions - Photography </option>
                  <option value="123"> Event Planning &amp; Catering </option>
                  <option value="33"> Massage </option>
                  <option value="132"> Health &amp; Beauty </option>
                  <option value="31"> Removals &amp; Storage Services </option>
                  <option value="241"> Transport Services </option>
                  <option value="101"> Interpreting - Translation </option>
                  <option value="226"> Financial &amp; Legal Services </option>
                  <option value="35"> Astrology - Psychics </option>
                  <option value="36"> Other Services </option>
                </optgroup>
                <optgroup label="Jobs">
                  <option value="1"> -- Jobs -- </option>
                  <option value="139"> Job Vacancies </option>
                  <option value="67"> Small &amp; Student Jobs </option>
                  <option value="90"> Work experience </option>
                  <option value="140"> Job Seekers - CVs </option>
                </optgroup>
                <optgroup label="Domestic Help">
                  <option value="8"> -- Domestic Help -- </option>
                  <option value="100"> Babysitting &amp; Nannies </option>
                  <option value="102"> Housekeeping &amp; Cleaning </option>
                  <option value="99"> Work from Home </option>
                </optgroup>
                <optgroup label="Community">
                  <option value="4"> -- Community -- </option>
                  <option value="20"> Bands &amp; Musicians </option>
                  <option value="1031"> Public Notices </option>
                  <option value="16"> Pubs, Restaurants and Takeaways </option>
                  <option value="17"> Other Activities </option>
                  <option value="23"> Charity and Volunteer Work </option>
                  <option value="116"> Missing People - Connections </option>
                  <option value="5"> Local Events </option>
                </optgroup>
              </select>
            </p>

            <p className="grid__item mob--one-whole tab--four-twelfths desk--four-twelfths input-wrapper select">
              <select
                id="vs_geo_dropdown_1"
                name="searchGeoId"
                data-automation="searchGeoDropdown"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="0">All UK</option>
                <option value="4">East Anglia</option>
                <option value="5">East Midlands</option>
                <option value="7">London</option>
                <option value="2">North East</option>
                <option value="3">North West</option>
                <option value="104">Northern Ireland</option>
                <option value="10">Scotland</option>
                <option value="8">South East</option>
                <option value="9">South West</option>
                <option value="11">Wales</option>
                <option value="96">West Midlands</option>
                <option value="95">Yorkshire and the Humber</option>
              </select>
            </p>

            <p className="grid__item mob--one-whole tab--two-twelfths desk--two-twelfths">
              <input
                type="submit"
                value="Search"
                className="btn btn-search btn-orange"
                data-automation="homepageSearchButton"
              />
              <input type="hidden" name="offer_type" value="offer" />
              <input type="hidden" name="end_field" />
            </p>
          </fieldset>
        </form>
      </div>

      {/* Category Tabs bar at bottom of hero - Desktop only */}
      <div className="vs-desktop-only">
        <CategoryGrid onSelectCategory={onSelectCategory} />
      </div>
    </div>

    {/* Mobile Category Accordion List directly below hero */}
    <div className="vs-mobile-only">
      <MobileCategoryList onSelectCategory={onSelectCategory} />
    </div>
  </>
  );
};
