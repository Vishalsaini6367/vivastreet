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
  }
];

export const MobileCategoryList: React.FC<MobileCategoryListProps> = ({ onSelectCategory }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="vs-mobile-category-list">
      {CATEGORIES.map((cat) => {
        const isExpanded = expandedId === cat.id;
        return (
          <div key={cat.id} className="vs-mobile-category-item">
            <div
              className="vs-mobile-category-row"
              onClick={() => onSelectCategory(cat.name)}
            >
              <div className="vs-mobile-category-left">
                <span className="vs-mobile-category-icon">
                  {cat.iconType === "text" ? (
                    <span className="vs-mobile-badge-18">{cat.textIcon}</span>
                  ) : (
                    <svg className="ico" style={{ width: 22, height: 22, fill: "#222" }}>
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
                <span className={`vs-mobile-plus-icon${isExpanded ? " expanded" : ""}`}>
                  +
                </span>
              </button>
            </div>

            {isExpanded && (
              <div className="vs-mobile-subcategory-list">
                {cat.subcategories.map((sub) => (
                  <div
                    key={sub}
                    className="vs-mobile-subcategory-item"
                    onClick={() => onSelectCategory(sub)}
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
