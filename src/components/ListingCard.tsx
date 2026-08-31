import React, { useState } from 'react';
import { MapPin, Calendar, Star, Heart, Eye } from 'lucide-react';

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number | 'Contact' | 'Free';
  category: string;
  subcategory: string;
  location: string;
  date: string;
  image: string;
  views: number;
  isUrgent?: boolean;
  isPremium?: boolean;
  isVerified?: boolean;
  sellerName: string;
  sellerPhone: string;
  sellerRating: number;
}

interface ListingCardProps {
  listing: Listing;
  onClick: () => void;
  viewMode?: 'grid' | 'list';
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing, onClick, viewMode = 'grid' }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const formatPrice = (val: number | 'Contact' | 'Free') => {
    if (typeof val === 'number') {
      return `£${val.toLocaleString()}`;
    }
    return val;
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarked(!bookmarked);
  };

  if (viewMode === 'list') {
    return (
      <div className="listing-card-list card card-hoverable" onClick={onClick}>
        {/* Image Frame */}
        <div className="list-image-container">
          <img src={listing.image} alt={listing.title} className="list-card-image" />
          <div className="badge-overlay-container">
            {listing.isUrgent && <span className="badge badge-urgent list-badge">Urgent</span>}
            {listing.isPremium && <span className="badge badge-premium list-badge">Premium</span>}
          </div>
        </div>

        {/* Content details */}
        <div className="list-content-details">
          <div className="list-content-header">
            <div>
              <span className="card-category-label">{listing.category} • {listing.subcategory}</span>
              <h3 className="list-card-title">{listing.title}</h3>
            </div>
            <div className="list-card-price">{formatPrice(listing.price)}</div>
          </div>

          <p className="list-card-description">{listing.description}</p>

          <div className="list-content-footer">
            <div className="list-meta-info">
              <span className="meta-item">
                <MapPin size={14} />
                <span>{listing.location}</span>
              </span>
              <span className="meta-item">
                <Calendar size={14} />
                <span>{listing.date}</span>
              </span>
              <span className="meta-item">
                <Eye size={14} />
                <span>{listing.views} views</span>
              </span>
            </div>

            <div className="list-seller-info">
              <div className="seller-rating-stars">
                <Star size={12} fill="var(--secondary)" color="var(--secondary)" />
                <span>{listing.sellerRating}</span>
              </div>
              <span className="seller-name-label">{listing.sellerName}</span>
              {listing.isVerified && <span className="badge badge-verified list-badge-verified">Verified</span>}
            </div>
          </div>
        </div>

        {/* Bookmark Trigger */}
        <button 
          className={`card-bookmark-btn ${bookmarked ? 'bookmarked' : ''}`}
          onClick={handleBookmark}
        >
          <Heart size={18} fill={bookmarked ? 'var(--secondary)' : 'none'} />
        </button>
      </div>
    );
  }

  // Grid view (Default)
  return (
    <div className="listing-card-grid card card-hoverable" onClick={onClick}>
      {/* Card Image Wrapper */}
      <div className="grid-image-container">
        <img src={listing.image} alt={listing.title} className="grid-card-image" />
        <div className="badge-overlay-container">
          {listing.isUrgent && <span className="badge badge-urgent">Urgent</span>}
          {listing.isPremium && <span className="badge badge-premium">Premium</span>}
        </div>
        
        <button 
          className={`card-bookmark-btn ${bookmarked ? 'bookmarked' : ''}`}
          onClick={handleBookmark}
        >
          <Heart size={18} fill={bookmarked ? 'var(--secondary)' : 'none'} />
        </button>
      </div>

      {/* Card Body details */}
      <div className="grid-content-details">
        <div className="card-top-info">
          <span className="card-category-label">{listing.category}</span>
          <div className="card-views-indicator">
            <Eye size={12} />
            <span>{listing.views}</span>
          </div>
        </div>

        <h3 className="grid-card-title" title={listing.title}>{listing.title}</h3>
        
        <div className="grid-card-price">{formatPrice(listing.price)}</div>

        <div className="grid-card-location-date">
          <div className="meta-item">
            <MapPin size={14} />
            <span>{listing.location}</span>
          </div>
          <div className="meta-item">
            <Calendar size={14} />
            <span>{listing.date}</span>
          </div>
        </div>

        <div className="grid-card-footer">
          <div className="grid-seller-rating">
            <Star size={12} fill="var(--secondary)" color="var(--secondary)" />
            <span>{listing.sellerRating} • {listing.sellerName}</span>
          </div>
          {listing.isVerified && <span className="badge badge-verified">Verified</span>}
        </div>
      </div>
    </div>
  );
};
