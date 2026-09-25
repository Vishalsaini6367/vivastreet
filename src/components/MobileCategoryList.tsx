import React, { useState } from "react";

interface MobileCategoryListProps {
  onSelectCategory: (category: string) => void;
}

interface CategoryItem {
  id: string;
  name: string;
  iconType: "text" | "svg";
  textIcon?: string;
  svgId?: string;
  subcategories: string[];
}

const CATEGORIES: CategoryItem[] = [
  {
    id: "adult",
    name: "Adult",
    iconType: "text",
    textIcon: "18+",
    subcategories: [
      "Escorts and Massages",
      "Adult Dating",
      "Gay Escorts",
      "Trans Escorts",
      "Adult Entertainment",
      "Swingers"
    ]
  },
  {
    id: "property",
    name: "Property",
    iconType: "svg",
    svgId: "#icon_house",
    subcategories: [
      "Property to Rent",
      "Flatshare - Rooms to rent",
      "Property for Sale",
      "Land for Sale",
      "Garage Storage",
      "Commercial Property"
    ]
  },
  {
    id: "jobs",
    name: "Jobs",
    iconType: "svg",
    svgId: "#icon_bag",
    subcategories: [
      "Job Vacancies",
      "Small & Student Jobs",
      "Work experience",
      "Job Seekers - CVs"
    ]
  },
  {
    id: "vehicles",
    name: "Vehicles",
    iconType: "svg",
    svgId: "#icon_vehicles",
    subcategories: [
      "Cars for sale",
      "Motorcycles",
      "Caravans & Campervans",
      "Vans & Commercial Vehicles",
      "Boats",
      "Vehicle Parts & Accessories"
    ]
  },
  {
    id: "services",
    name: "Services",
    iconType: "svg",
    svgId: "#icon_service",
    subcategories: [
      "Find a tradesman",
      "Web & IT services",
      "Massage",
      "Health & Beauty",
      "Removals & Storage Services",
      "Other Services"
    ]
  },
  {
    id: "classes",
    name: "Classes",
    iconType: "svg",
    svgId: "#icon_pen",
    subcategories: [
      "Music-Acting-Dance",
      "Web design and Computer courses",
      "Language courses",
      "Sport - Wellness - Beauty",
      "Private lessons",
      "Other Classes"
    ]
  },
  {
    id: "buy-sell",
    name: "Buy & Sell",
    iconType: "svg",
    svgId: "#icon_tag",
    subcategories: [
      "Home",
      "Leisure",
      "Electronics",
      "Fashion",
      "Free Stuff - Swap",
      "Miscellaneous"
    ]
  },
  {
    id: "personals",
    name: "Free personals",
    iconType: "svg",
    svgId: "#icon_heart",
    subcategories: [
      "Friendship - Friends",
      "Straight Relationships",
      "Gay and Lesbian"
    ]
  },
  {
    id: "countries",
    name: "Vivastreet Countries",
    iconType: "svg",
    svgId: "#icon_world",
    subcategories: [
      "Vivastreet Belgium",
      "Vivastreet France",
      "Vivastreet Ireland",
      "Vivastreet United Kingdom"
    ]
  }
];

const COUNTRY_EXTERNAL_LINKS: Record<string, string> = {
  "Vivastreet Belgium": "https://www.vivastreet.be",
  "Vivastreet France": "https://www.vivastreet.com",
  "Vivastreet Ireland": "https://www.vivastreet.ie",
  "Vivastreet United Kingdom": "https://www.vivastreet.co.uk",
};

export const MobileCategoryList: React.FC<MobileCategoryListProps> = ({ onSelectCategory }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedId(expandedId === id ? null : id);
  };

  const handleRowClick = (cat: CategoryItem, e: React.MouseEvent) => {
    if (cat.id === "countries") {
      toggleExpand(cat.id, e);
    } else {
      onSelectCategory(cat.name);
    }
  };

  const handleSubcategoryClick = (sub: string) => {
    if (COUNTRY_EXTERNAL_LINKS[sub]) {
      window.open(COUNTRY_EXTERNAL_LINKS[sub], "_blank");
    } else {
      onSelectCategory(sub);
    }
  };

  return (
    <div className="vs-mobile-category-list">
      {CATEGORIES.map((cat) => {
        const isExpanded = expandedId === cat.id;
        return (
          <div key={cat.id} className="vs-mobile-category-item">
            <div
              className="vs-mobile-category-row"
              onClick={(e) => handleRowClick(cat, e)}
            >
              <div className="vs-mobile-category-left">
                <span className="vs-mobile-category-icon">
                  {cat.iconType === "text" ? (
                    <span className="vs-mobile-badge-18">{cat.textIcon}</span>
                  ) : (
                    <svg
                      className="ico"
                      style={{
                        width: 24,
                        height: 24,
                        fill: "#222",
                        display: "block",
                      }}
                    >
                      <use xlinkHref={cat.svgId} />
                    </svg>
                  )}
                </span>
                <span className="vs-mobile-category-name">{cat.name}</span>
              </div>
              <button
                type="button"
                className="vs-mobile-plus-btn"
                onClick={(e) => toggleExpand(cat.id, e)}
                aria-label={`Expand ${cat.name}`}
              >
                <svg
                  viewBox="0 0 26 26"
                  width="25"
                  height="25"
                  style={{
                    display: "block",
                    transform: isExpanded ? "rotate(45deg)" : "none",
                    transition: "transform 0.2s ease-in-out",
                    transformOrigin: "center",
                  }}
                >
                  <circle
                    cx="13"
                    cy="13"
                    r="11"
                    stroke="#333"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <line
                    x1="13"
                    y1="7.5"
                    x2="13"
                    y2="18.5"
                    stroke="#333"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="7.5"
                    y1="13"
                    x2="18.5"
                    y2="13"
                    stroke="#333"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {isExpanded && (
              <div className="vs-mobile-subcategory-list">
                {cat.subcategories.map((sub) => (
                  <div
                    key={sub}
                    className="vs-mobile-subcategory-item"
                    onClick={() => handleSubcategoryClick(sub)}
                  >
                    {sub}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
