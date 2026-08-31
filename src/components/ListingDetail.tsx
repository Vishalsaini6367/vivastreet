import React, { useState } from 'react';
import { Listing } from './ListingCard';
import { MapPin, Calendar, Eye, ShieldAlert, Star, Phone, MessageSquare, ChevronLeft, Check } from 'lucide-react';

interface ListingDetailProps {
  listing: Listing;
  onBack: () => void;
}

export const ListingDetail: React.FC<ListingDetailProps> = ({ listing, onBack }) => {
  const [activeImage, setActiveImage] = useState(listing.image);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'safety'>('desc');
  const [phoneRevealed, setPhoneRevealed] = useState(false);
  
  // Message Form States
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [sending, setSending] = useState(false);

  // Gallery Thumbnails (mocking extra images based on the main image)
  const thumbnails = [
    listing.image,
    'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=60', // placeholder 1
    'https://images.unsplash.com/photo-1555529669-e69e7aa0bc9a?w=800&auto=format&fit=crop&q=60', // placeholder 2
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !senderMessage) return;

    setSending(true);
    // Simulate API delay
    setTimeout(() => {
      setSending(false);
      setMessageSent(true);
      setSenderName('');
      setSenderEmail('');
      setSenderMessage('');
      // Clear toast after 4s
      setTimeout(() => setMessageSent(false), 4000);
    }, 1500);
  };

  const formatPrice = (val: number | 'Contact' | 'Free') => {
    if (typeof val === 'number') {
      return `£${val.toLocaleString()}`;
    }
    return val;
  };

  return (
    <div className="listing-detail-page container">
      {/* Back navigation */}
      <button onClick={onBack} className="btn btn-outline back-results-btn">
        <ChevronLeft size={16} />
        <span>Back to search results</span>
      </button>

      {/* Main Grid Layout */}
      <div className="detail-layout">
        {/* Left Column - Gallery & Info tabs */}
        <div className="detail-main-content">
          {/* Top badging */}
          <div className="detail-badge-row">
            {listing.isUrgent && <span className="badge badge-urgent">Urgent Ad</span>}
            {listing.isPremium && <span className="badge badge-premium">Premium Featured</span>}
            {listing.isVerified && <span className="badge badge-verified">Verified Seller</span>}
          </div>

          <h1 className="detail-title">{listing.title}</h1>

          {/* Gallery Carousel */}
          <div className="gallery-container">
            <div className="gallery-active-frame glass">
              <img src={activeImage} alt={listing.title} className="gallery-active-image" />
            </div>
            <div className="gallery-thumbnails">
              {thumbnails.map((thumb, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(thumb)}
                  className={`thumbnail-btn ${activeImage === thumb ? 'active' : ''}`}
                >
                  <img src={thumb} alt={`Thumbnail ${idx + 1}`} className="thumbnail-img" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Info bar */}
          <div className="detail-meta-bar">
            <div className="meta-item">
              <MapPin size={16} />
              <span>{listing.location}</span>
            </div>
            <div className="meta-item">
              <Calendar size={16} />
              <span>Listed {listing.date}</span>
            </div>
            <div className="meta-item">
              <Eye size={16} />
              <span>{listing.views} views</span>
            </div>
            <div className="meta-item detail-ad-id">
              <span>Ad ID: #VS{listing.id.slice(-6)}</span>
            </div>
          </div>

          {/* Safety First Box */}
          <div className="safety-warning-box">
            <ShieldAlert className="safety-icon" size={24} />
            <div>
              <h4 className="safety-title">Safety Tips for Buyers</h4>
              <p className="safety-text">
                Always meet in a public, well-lit place. Never send wire transfers or money orders. Inspect goods before pay.
              </p>
            </div>
          </div>

          {/* Info tabs */}
          <div className="tabs-container">
            <div className="tabs-header">
              <button 
                onClick={() => setActiveTab('desc')}
                className={`tab-trigger ${activeTab === 'desc' ? 'active' : ''}`}
              >
                Description
              </button>
              <button 
                onClick={() => setActiveTab('specs')}
                className={`tab-trigger ${activeTab === 'specs' ? 'active' : ''}`}
              >
                Specifications
              </button>
              <button 
                onClick={() => setActiveTab('safety')}
                className={`tab-trigger ${activeTab === 'safety' ? 'active' : ''}`}
              >
                Seller Integrity
              </button>
            </div>

            <div className="tabs-content">
              {activeTab === 'desc' && (
                <div className="tab-pane-content">
                  <p>{listing.description}</p>
                  <p style={{ marginTop: '16px' }}>
                    If you have any questions or want to arrange a viewing/appointment, please use the contact form on the right sidebar or call the number shown. Professional and secure interactions only.
                  </p>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="tab-pane-content specs-pane">
                  <div className="spec-row">
                    <span className="spec-label">Category</span>
                    <span className="spec-value">{listing.category}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Subcategory</span>
                    <span className="spec-value">{listing.subcategory}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Item Budget/Price</span>
                    <span className="spec-value">{formatPrice(listing.price)}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Listing Type</span>
                    <span className="spec-value">{listing.isPremium ? 'Premium Highlight' : 'Standard Ad'}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Region</span>
                    <span className="spec-value">{listing.location}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Ad Status</span>
                    <span className="spec-value">Active & Verified</span>
                  </div>
                </div>
              )}

              {activeTab === 'safety' && (
                <div className="tab-pane-content safety-pane">
                  <div className="integrity-meter">
                    <div className="meter-header">
                      <span className="meter-title">Seller Trust Score</span>
                      <span className="meter-value">94%</span>
                    </div>
                    <div className="meter-bar-bg">
                      <div className="meter-bar-fill" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  <ul className="integrity-list">
                    <li>✓ User account verified with email & phone</li>
                    <li>✓ Quick response rate (usually replies in under 1 hour)</li>
                    <li>✓ Member on Vivastreet since 2024</li>
                    <li>✓ 5-star average rating based on buyer feedback</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Seller & Actions */}
        <aside className="detail-sidebar">
          {/* Price Tag */}
          <div className="sidebar-price-card glass">
            <span className="price-tag-label">Asking Price</span>
            <div className="sidebar-price-text">{formatPrice(listing.price)}</div>
          </div>

          {/* Seller Card */}
          <div className="seller-profile-card glass">
            <div className="seller-header">
              <div className="seller-avatar-large">
                {listing.sellerName.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <h3 className="seller-name">{listing.sellerName}</h3>
                <span className="seller-join-date">Member since July 2024</span>
              </div>
            </div>

            <div className="seller-rating-row">
              <div className="stars-grid">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < Math.floor(listing.sellerRating) ? 'var(--secondary)' : 'none'} 
                    color="var(--secondary)" 
                  />
                ))}
              </div>
              <span className="rating-score">({listing.sellerRating} / 5.0)</span>
            </div>

            {listing.isVerified && (
              <div className="verified-badge-row">
                <Check size={14} className="verified-check" />
                <span>ID & Address Verified</span>
              </div>
            )}

            {/* Actions: Show Phone */}
            <div className="seller-contact-actions">
              <button 
                onClick={() => setPhoneRevealed(true)}
                className={`btn btn-primary phone-reveal-btn ${phoneRevealed ? 'revealed' : ''}`}
                disabled={phoneRevealed}
              >
                <Phone size={18} />
                <span>
                  {phoneRevealed ? listing.sellerPhone : 'Show Phone Number'}
                </span>
              </button>
            </div>
          </div>

          {/* Contact Message Box */}
          <div className="contact-form-card glass">
            <div className="card-header-with-icon">
              <MessageSquare size={18} className="header-icon" />
              <h3 className="contact-card-title">Send a message</h3>
            </div>

            {messageSent ? (
              <div className="message-success-toast">
                <div className="success-icon-circle">
                  <Check size={18} />
                </div>
                <div>
                  <h4 className="success-toast-title">Message Sent!</h4>
                  <p className="success-toast-desc">Your query has been securely delivered to the seller.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="contact-email-form">
                <div className="input-group">
                  <label className="input-label">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Alex Smith"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    required
                    className="input-field"
                  />
                </div>

                <div className="input-group">
                  <label className="input-label">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="e.g. alex@example.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    required
                    className="input-field"
                  />
                </div>

                <div className="input-group">
                  <label className="input-label">Your Query</label>
                  <textarea 
                    placeholder="Ask a question about availability, details, etc..."
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    required
                    rows={4}
                    className="input-field"
                    style={{ resize: 'none' }}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-secondary w-full"
                  disabled={sending}
                >
                  {sending ? 'Sending secure message...' : 'Send Secure Message'}
                </button>
              </form>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};
