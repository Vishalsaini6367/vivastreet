import React, { useState } from 'react';
import { Listing, ListingCard } from './ListingCard';
import { Grid, List, SlidersHorizontal, RefreshCw, X, AlertTriangle } from 'lucide-react';

interface ListingGridProps {
  listings: Listing[];
  onSelectListing: (listing: Listing) => void;
  categories: string[];
  searchQuery: string;
  selectedCategory: string;
  selectedLocation: string;
  setSearchQuery: (val: string) => void;
  setSelectedCategory: (val: string) => void;
  setSelectedLocation: (val: string) => void;
}

export const ListingGrid: React.FC<ListingGridProps> = ({
  listings,
  onSelectListing,
  categories,
  searchQuery,
  selectedCategory,
  selectedLocation,
  setSearchQuery,
  setSelectedCategory,
  setSelectedLocation,
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<string>('recent');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [premiumOnly, setPremiumOnly] = useState(false);
  const [priceMax, setPriceMax] = useState<string>('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedLocation('');
    setVerifiedOnly(false);
    setPremiumOnly(false);
    setPriceMax('');
  };

  // Filter listings based on categories, search query, location, and extra tags
  const filteredListings = listings.filter((item) => {
    // Search query matches title, description, or subcategory
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchSub = item.subcategory.toLowerCase().includes(q);
      const matchCat = item.category.toLowerCase().includes(q);
      const matchLoc = item.location.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchSub && !matchCat && !matchLoc) {
        return false;
      }
    }

    // Category filter
    if (selectedCategory && item.category !== selectedCategory) {
      return false;
    }

    // Location filter
    if (selectedLocation) {
      const loc = selectedLocation.toLowerCase();
      if (!item.location.toLowerCase().includes(loc)) {
        return false;
      }
    }

    // Verified toggle
    if (verifiedOnly && !item.isVerified) {
      return false;
    }

    // Premium toggle
    if (premiumOnly && !item.isPremium) {
      return false;
    }

    // Price Max limit
    if (priceMax) {
      const max = parseFloat(priceMax);
      if (!isNaN(max)) {
        if (typeof item.price === 'number') {
          if (item.price > max) return false;
        } else {
          // Contact/Free options can be kept or filtered. Let's keep them.
        }
      }
    }

    return true;
  });

  // Sort listings
  const sortedListings = [...filteredListings].sort((a, b) => {
    if (sortBy === 'recent') {
      // Simple mock sort using id
      return b.id.localeCompare(a.id);
    }
    if (sortBy === 'price-low') {
      const priceA = typeof a.price === 'number' ? a.price : 0;
      const priceB = typeof b.price === 'number' ? b.price : 0;
      return priceA - priceB;
    }
    if (sortBy === 'price-high') {
      const priceA = typeof a.price === 'number' ? a.price : 0;
      const priceB = typeof b.price === 'number' ? b.price : 0;
      return priceB - priceA;
    }
    if (sortBy === 'popular') {
      return b.views - a.views;
    }
    return 0;
  });

  return (
    <div className="search-results-page container">
      {/* Page Title & Stats */}
      <div className="results-header">
        <div>
          <h1 className="results-title">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Browse Classifieds'}
          </h1>
          <p className="results-count-label">
            Found {sortedListings.length} ads {selectedLocation ? `in ${selectedLocation}` : 'across the UK'}
          </p>
        </div>

        {/* View togglers & Mobile filter trigger */}
        <div className="results-controls">
          <button 
            className="btn btn-outline mobile-filter-btn"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <SlidersHorizontal size={18} />
            <span>Filters</span>
          </button>

          <div className="sort-wrapper">
            <span className="sort-label">Sort by:</span>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className="view-mode-toggle">
            <button 
              className={`view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <Grid size={18} />
            </button>
            <button 
              className={`view-mode-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="List View"
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="results-layout">
        {/* Left Sidebar Filters (Desktop) */}
        <aside className={`filters-sidebar glass ${mobileFiltersOpen ? 'mobile-open' : ''}`}>
          <div className="sidebar-header">
            <h2 className="sidebar-title">Filters</h2>
            <button className="reset-all-btn" onClick={resetFilters}>
              <RefreshCw size={14} />
              <span>Reset All</span>
            </button>
            {mobileFiltersOpen && (
              <button 
                className="close-filters-btn action-btn-icon" 
                onClick={() => setMobileFiltersOpen(false)}
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="filter-section">
            <h3 className="filter-heading">Category</h3>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input-field filter-input"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Region/Location Filter */}
          <div className="filter-section">
            <h3 className="filter-heading">Location</h3>
            <input 
              type="text" 
              placeholder="e.g. London"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="input-field filter-input"
            />
          </div>

          {/* Max Price Filter */}
          <div className="filter-section">
            <h3 className="filter-heading">Max Budget (£)</h3>
            <input 
              type="number" 
              placeholder="e.g. 500"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              className="input-field filter-input"
            />
          </div>

          {/* Toggle Switches */}
          <div className="filter-section toggles-section">
            <label className="toggle-label">
              <input 
                type="checkbox" 
                checked={verifiedOnly}
                onChange={(e) => setVerifiedOnly(e.target.checked)}
                className="toggle-checkbox"
              />
              <span className="toggle-text">Verified Sellers Only</span>
            </label>

            <label className="toggle-label">
              <input 
                type="checkbox" 
                checked={premiumOnly}
                onChange={(e) => setPremiumOnly(e.target.checked)}
                className="toggle-checkbox"
              />
              <span className="toggle-text">Premium Listings Only</span>
            </label>
          </div>
        </aside>

        {/* Listings Display */}
        <main className="listings-main-content">
          {/* Active Tags list */}
          {(searchQuery || selectedCategory || selectedLocation || priceMax || verifiedOnly || premiumOnly) && (
            <div className="active-filters-list">
              {searchQuery && (
                <span className="filter-tag">
                  Query: {searchQuery}
                  <button onClick={() => setSearchQuery('')}><X size={12} /></button>
                </span>
              )}
              {selectedCategory && (
                <span className="filter-tag">
                  Category: {selectedCategory}
                  <button onClick={() => setSelectedCategory('')}><X size={12} /></button>
                </span>
              )}
              {selectedLocation && (
                <span className="filter-tag">
                  Location: {selectedLocation}
                  <button onClick={() => setSelectedLocation('')}><X size={12} /></button>
                </span>
              )}
              {priceMax && (
                <span className="filter-tag">
                  Budget: ≤£{priceMax}
                  <button onClick={() => setPriceMax('')}><X size={12} /></button>
                </span>
              )}
              {verifiedOnly && (
                <span className="filter-tag">
                  Verified Only
                  <button onClick={() => setVerifiedOnly(false)}><X size={12} /></button>
                </span>
              )}
              {premiumOnly && (
                <span className="filter-tag">
                  Premium Only
                  <button onClick={() => setPremiumOnly(false)}><X size={12} /></button>
                </span>
              )}
            </div>
          )}

          {sortedListings.length > 0 ? (
            <div className={viewMode === 'grid' ? 'grid-responsive' : 'list-responsive'}>
              {sortedListings.map((item) => (
                <ListingCard 
                  key={item.id} 
                  listing={item} 
                  onClick={() => onSelectListing(item)}
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            <div className="no-results-card glass">
              <AlertTriangle className="no-results-icon" size={48} />
              <h3 className="no-results-title">No Ads Found</h3>
              <p className="no-results-text">
                We couldn't find any listings that match your search filters. Try widening your filters or location search.
              </p>
              <button onClick={resetFilters} className="btn btn-primary">
                Reset All Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
