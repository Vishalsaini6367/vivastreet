import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { CategoryGrid } from "./CategoryGrid";

interface HeroProps {
  onSearchSubmit: (query: string, category: string, location: string) => void;
  onSelectCategory: (category: string) => void;
  setPage: (page: "home" | "search" | "detail" | "post-ad") => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearchSubmit, onSelectCategory, setPage }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("0");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit("", selectedCategory, selectedLocation);
  };

  return (
    <div id="static_home" className="static_home">
      <div className="static_home__background_image"></div>

      {/* HEADER INSIDE STATIC_HOME OVER BACKGROUND */}
      <Navbar setPage={setPage} />

      <div className="static_home__title">
        <h1 className="static_home__title__content">FREE LOCAL CLASSIFIED ADS</h1>
      </div>

      <div className="static_home__category grid__item">
        <form
          action="ads"
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
            <input type="hidden" name="start_field" value="1" />

            <p className="grid__item mob--one-whole tab--four-twelfths desk--four-twelfths input-wrapper select">
              <select
                name="select-this"
                id="vs-cat-dropdown-1"
                data-automation="categoryDropdown"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="" data-search="classifieds"> All categories </option>
                <optgroup label="Free Personals">
                  <option className="kiwii-bg-xxlight-green" value="3" data-search="online"> -- Free personals -- </option>
                  <option value="14" data-search="friendship"> Friendship - Friends </option>
                  <option value="1018" data-search="gay-escorts"> Gay Escorts </option>
                  <option value="1032" data-search="trans-escorts"> Trans Escorts </option>
                  <option value="142" data-search="straight-relationships"> Straight Relationships </option>
                  <option value="1000" data-search="gay-and-lesbian"> Gay and Lesbian </option>
                  <option value="15" data-search="adult-dating"> Adult Dating </option>
                  <option value="88" data-search="escort"> Escorts and Massages </option>
                  <option value="131" data-search="adult-services"> Adult Entertainment </option>
                  <option value="376" data-search="swingers"> Swingers </option>
                </optgroup>
                <optgroup label="Buy & Sell">
                  <option className="kiwii-bg-xxlight-green" value="2" data-search="buy-sell"> -- Buy & Sell -- </option>
                  <option value="1007" data-search="home"> Home </option>
                  <option value="1008" data-search="leisure"> Leisure </option>
                  <option value="1009" data-search="electronics"> Electronics </option>
                  <option value="1010" data-search="fashion"> Fashion </option>
                  <option value="18" data-search="freebies"> Free Stuff - Swap </option>
                  <option value="52" data-search="miscellaneous"> Miscellaneous </option>
                </optgroup>
                <optgroup label="Holidays">
                  <option className="kiwii-bg-xxlight-green" value="1029" data-search="holidays"> -- Holidays -- </option>
                  <option value="1030" data-search="holidays-services"> Holidays Services </option>
                  <option value="41" data-search="hotels"> B&B's, Hotels & Holiday lets UK </option>
                  <option value="44" data-search="property-exchange"> House exchange </option>
                </optgroup>
                <optgroup label="Farming">
                  <option className="kiwii-bg-xxlight-green" value="1011" data-search="farming"> -- Farming -- </option>
                  <option value="1012" data-search="machinery"> Farm vehicles & machinery </option>
                  <option value="1014" data-search="farms-sale"> Farms for sale </option>
                </optgroup>
                <optgroup label="Vehicles">
                  <option className="kiwii-bg-xxlight-green" value="138" data-search="vehicles"> -- Vehicles -- </option>
                  <option value="45" data-search="cars"> Cars for sale </option>
                  <option value="46" data-search="motorcycles"> Motorcycles </option>
                  <option value="91" data-search="caravans"> Caravans & Campervans </option>
                  <option value="130" data-search="vans"> Vans & Commercial Vehicles </option>
                  <option value="86" data-search="boats"> Boats </option>
                  <option value="1006" data-search="car-rentals"> Vehicle Rentals </option>
                  <option value="239" data-search="vehicle-parts"> Vehicle Parts & Accessories </option>
                </optgroup>
                <optgroup label="Residential Property">
                  <option className="kiwii-bg-xxlight-green" value="7" data-search="real-estate"> -- Residential Property -- </option>
                  <option value="37" data-search="rent"> Property to Rent </option>
                  <option value="38" data-search="flatshare"> Flatshare - Rooms to rent </option>
                  <option value="40" data-search="property-sale"> Property for Sale </option>
                  <option value="118" data-search="land"> Land for Sale </option>
                  <option value="117" data-search="storage"> Garage Storage </option>
                  <option value="76" data-search="commercial-property"> Commercial Property </option>
                </optgroup>
                <optgroup label="Classes">
                  <option className="kiwii-bg-xxlight-green" value="9" data-search="classes"> -- Classes -- </option>
                  <option value="106" data-search="arts"> Music-Acting-Dance </option>
                  <option value="108" data-search="computer"> Web design and Computer courses </option>
                  <option value="105" data-search="language"> Language courses </option>
                  <option value="150" data-search="sport"> Sport - Wellness - Beauty </option>
                  <option value="109" data-search="private"> Private lessons </option>
                  <option value="110" data-search="misc-courses"> Other Classes </option>
                </optgroup>
                <optgroup label="Services">
                  <option className="kiwii-bg-xxlight-green" value="6" data-search="services"> -- Services -- </option>
                  <option value="32" data-search="handyman"> Find a tradesman </option>
                  <option value="134" data-search="computer-services"> Web & IT services </option>
                  <option value="103" data-search="auditions"> Models - Auditions - Photography </option>
                  <option value="123" data-search="event-planning"> Event Planning & Catering </option>
                  <option value="33" data-search="massage"> Massage</option>
                  <option value="132" data-search="health-beauty"> Health & Beauty </option>
                  <option value="31" data-search="removals"> Removals & Storage Services </option>
                  <option value="241" data-search="transport-services"> Transport Services </option>
                  <option value="101" data-search="translation"> Interpreting - Translation </option>
                  <option value="226" data-search="financial-services"> Financial & Legal Services </option>
                  <option value="35" data-search="astrology"> Astrology - Psychics </option>
                  <option value="36" data-search="other-services"> Other Services </option>
                </optgroup>
                <optgroup label="Jobs">
                  <option className="kiwii-bg-xxlight-green" value="1" data-search="job-vacancies"> -- Jobs -- </option>
                  <option value="139" data-search="job-offers"> Job Vacancies </option>
                  <option value="67" data-search="part-time-jobs"> Small & Student Jobs </option>
                  <option value="90" data-search="apprenticeships"> Work experience </option>
                  <option value="140" data-search="cvs"> Job Seekers - CVs </option>
                </optgroup>
                <optgroup label="Domestic Help">
                  <option className="kiwii-bg-xxlight-green" value="8" data-search="part-time"> -- Domestic Help -- </option>
                  <option value="100" data-search="babysitter"> Babysitting & Nannies </option>
                  <option value="102" data-search="cleaning"> Housekeeping & Cleaning </option>
                  <option value="99" data-search="mlm"> Work from Home </option>
                </optgroup>
                <optgroup label="Community">
                  <option className="kiwii-bg-xxlight-green" value="4" data-search="community"> -- Community -- </option>
                  <option value="20" data-search="artists"> Bands & Musicians </option>
                  <option value="1031" data-search="public-notice"> Public Notices </option>
                  <option value="16" data-search="eat"> Pubs, Restaurants and Takeaways </option>
                  <option value="17" data-search="activities"> Other Activities </option>
                  <option value="23" data-search="charity"> Charity and Volunteer Work </option>
                  <option value="116" data-search="missing"> Missing People - Connections </option>
                  <option value="5" data-search="events"> Local Events </option>
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
                <option value="0" data-search="gb">All UK</option>
                <option value="4" data-search="east-anglia">East Anglia</option>
                <option value="5" data-search="east-midland">East Midlands</option>
                <option value="7" data-search="london">London</option>
                <option value="2" data-search="north-east">North East</option>
                <option value="3" data-search="north-west">North West</option>
                <option value="104" data-search="northern-ireland">Northern Ireland</option>
                <option value="10" data-search="scotland">Scotland</option>
                <option value="8" data-search="south-east">South East</option>
                <option value="9" data-search="south-west">South West</option>
                <option value="11" data-search="wales">Wales</option>
                <option value="96" data-search="west-midland-region">West Midlands</option>
                <option value="95" data-search="yorkshire-and-the-humber">Yorkshire and the Humber</option>
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

      {/* MEGA MENU TAB BAR INSIDE STATIC_HOME AT BOTTOM: 0 */}
      <CategoryGrid onSelectCategory={onSelectCategory} />
    </div>
  );
};
