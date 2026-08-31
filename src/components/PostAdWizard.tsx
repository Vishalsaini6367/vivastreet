import React, { useState } from 'react';
import { Listing } from './ListingCard';
import { ArrowLeft, Upload, Check, Loader2, Home, Eye } from 'lucide-react';

interface PostAdWizardProps {
  categories: string[];
  subcategoriesByCategory: Record<string, string[]>;
  onPublish: (ad: Listing) => void;
  onCancel: () => void;
  onViewAd: (ad: Listing) => void;
}

export const PostAdWizard: React.FC<PostAdWizardProps> = ({
  categories,
  subcategoriesByCategory,
  onPublish,
  onCancel,
  onViewAd
}) => {
  const [step, setStep] = useState(1);
  
  // Form State
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priceType, setPriceType] = useState<'number' | 'Contact' | 'Free'>('number');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [publishing, setPublishing] = useState(false);
  const [createdAd, setCreatedAd] = useState<Listing | null>(null);

  // Mock upload simulator
  const handleMockUpload = () => {
    const mockImageUrls = [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60', // team/office (services/jobs)
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=60', // house (property)
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60', // headphones (buy/sell)
    ];
    // Pick image based on category
    let chosenImg = mockImageUrls[0];
    if (category === 'Property') chosenImg = mockImageUrls[1];
    if (category === 'Buy & Sell') chosenImg = mockImageUrls[2];

    setUploadedImages([...uploadedImages, chosenImg]);
  };

  const handleNextStep = () => {
    if (step === 1 && (!category || !subcategory)) return;
    if (step === 2 && (!title || !description || !location || (priceType === 'number' && !price))) return;
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handlePublishSubmit = () => {
    setPublishing(true);
    
    // Create new Listing object
    const finalPrice: number | 'Contact' | 'Free' = priceType === 'number' ? parseFloat(price) : priceType;
    
    const newAd: Listing = {
      id: `mock-ad-${Date.now()}`,
      title,
      description,
      price: finalPrice,
      category,
      subcategory,
      location,
      date: 'Just now',
      image: uploadedImages[0] || 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=60',
      views: 1,
      isVerified: true,
      sellerName: 'Local Advertiser',
      sellerPhone: '07700 900077',
      sellerRating: 5.0,
      isPremium: false,
      isUrgent: false
    };

    setTimeout(() => {
      onPublish(newAd);
      setCreatedAd(newAd);
      setPublishing(false);
      setStep(4); // Success step
    }, 2000);
  };

  return (
    <div className="post-ad-page container">
      {step < 4 && (
        <div className="wizard-progress-bar-container">
          <div className="wizard-header-row">
            <h1 className="wizard-title">Post a Classified Ad</h1>
            <button onClick={onCancel} className="btn btn-ghost btn-cancel">Cancel</button>
          </div>

          {/* Progress Indicator */}
          <div className="progress-steps-row">
            <div className={`progress-step-item ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
              <div className="step-circle">{step > 1 ? <Check size={14} /> : 1}</div>
              <span className="step-label">Category</span>
            </div>
            <div className="step-progress-connector"></div>
            <div className={`progress-step-item ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
              <div className="step-circle">{step > 2 ? <Check size={14} /> : 2}</div>
              <span className="step-label">Listing Info</span>
            </div>
            <div className="step-progress-connector"></div>
            <div className={`progress-step-item ${step >= 3 ? 'active' : ''} ${step > 3 ? 'completed' : ''}`}>
              <div className="step-circle">{step > 3 ? <Check size={14} /> : 3}</div>
              <span className="step-label">Media & Publish</span>
            </div>
          </div>
        </div>
      )}

      {/* STEP 1: Categories Selector */}
      {step === 1 && (
        <div className="wizard-card glass animate-fadeIn">
          <h2 className="step-title">Select a Category & Subcategory</h2>
          
          <div className="input-group">
            <label className="input-label">Main Category</label>
            <select 
              value={category}
              onChange={(e) => { setCategory(e.target.value); setSubcategory(''); }}
              className="input-field"
            >
              <option value="">-- Choose Category --</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {category && (
            <div className="input-group animate-slideDown">
              <label className="input-label">Subcategory</label>
              <select 
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                className="input-field"
              >
                <option value="">-- Choose Subcategory --</option>
                {subcategoriesByCategory[category]?.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
          )}

          <div className="wizard-actions-row">
            <div></div>
            <button 
              onClick={handleNextStep}
              disabled={!category || !subcategory}
              className="btn btn-primary"
            >
              Next Step
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Listing Details Form */}
      {step === 2 && (
        <div className="wizard-card glass animate-fadeIn">
          <h2 className="step-title">Enter Ad Details</h2>

          <div className="input-group">
            <label className="input-label">Ad Title</label>
            <input 
              type="text" 
              placeholder="e.g. Professional Massage Therapist or Flat for rent..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-field"
              maxLength={70}
            />
            <span className="input-helper-text">{70 - title.length} characters remaining</span>
          </div>

          <div className="input-group">
            <label className="input-label">Description</label>
            <textarea 
              placeholder="Provide a detailed description of your services, job post, or item..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={6}
              className="input-field"
            ></textarea>
          </div>

          <div className="price-type-selection">
            <div className="input-group flex-1">
              <label className="input-label">Pricing Mode</label>
              <select 
                value={priceType} 
                onChange={(e) => setPriceType(e.target.value as any)}
                className="input-field"
              >
                <option value="number">Fixed Price (£)</option>
                <option value="Contact">Contact Seller</option>
                <option value="Free">Free of Charge</option>
              </select>
            </div>

            {priceType === 'number' && (
              <div className="input-group flex-1 animate-fadeIn">
                <label className="input-label">Price (£)</label>
                <input 
                  type="number" 
                  placeholder="e.g. 150"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="input-field"
                />
              </div>
            )}
          </div>

          <div className="input-group">
            <label className="input-label">Location (UK Region or Town)</label>
            <input 
              type="text" 
              placeholder="e.g. London or West Midlands"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="wizard-actions-row">
            <button onClick={handlePrevStep} className="btn btn-outline">
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
            <button 
              onClick={handleNextStep}
              disabled={!title || !description || !location || (priceType === 'number' && !price)}
              className="btn btn-primary"
            >
              Next Step
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Media Upload & Publish */}
      {step === 3 && (
        <div className="wizard-card glass animate-fadeIn">
          <h2 className="step-title">Upload Photo & Publish</h2>

          <div className="upload-dropzone">
            <Upload className="upload-icon" size={32} />
            <h4 className="upload-heading">Drag and drop files here</h4>
            <p className="upload-subtext">Supports PNG, JPG (maximum 5MB)</p>
            <button 
              type="button" 
              onClick={handleMockUpload} 
              className="btn btn-outline upload-trigger-btn"
            >
              Choose Files
            </button>
          </div>

          {uploadedImages.length > 0 && (
            <div className="uploaded-thumbnails-grid">
              {uploadedImages.map((img, idx) => (
                <div key={idx} className="uploaded-thumb-frame">
                  <img src={img} alt={`Uploaded ${idx + 1}`} className="uploaded-thumb-img" />
                  <span className="success-badge"><Check size={10} /></span>
                </div>
              ))}
            </div>
          )}

          <div className="wizard-actions-row">
            <button onClick={handlePrevStep} className="btn btn-outline" disabled={publishing}>
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
            <button 
              onClick={handlePublishSubmit}
              disabled={publishing}
              className="btn btn-secondary btn-publish-action"
            >
              {publishing ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  <span>Publishing your ad...</span>
                </>
              ) : (
                <span>Publish Ad Now</span>
              )}
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: Success Panel */}
      {step === 4 && createdAd && (
        <div className="success-wizard-card glass animate-fadeIn">
          <div className="huge-success-circle">
            <Check size={48} />
          </div>
          
          <h2 className="success-wizard-title">Congratulations! Your ad is live!</h2>
          <p className="success-wizard-subtitle">
            Your ad "{createdAd.title}" has been successfully verified and posted to the UK community.
          </p>

          <div className="created-ad-preview-box">
            <img src={createdAd.image} alt={createdAd.title} className="preview-box-img" />
            <div className="preview-box-details">
              <span className="card-category-label">{createdAd.category}</span>
              <h4 className="preview-box-title">{createdAd.title}</h4>
              <div className="preview-box-price">
                Price: {typeof createdAd.price === 'number' ? `£${createdAd.price}` : createdAd.price}
              </div>
              <span className="preview-box-location">{createdAd.location}</span>
            </div>
          </div>

          <div className="success-wizard-actions">
            <button 
              onClick={() => onViewAd(createdAd)} 
              className="btn btn-primary"
            >
              <Eye size={16} />
              <span>View Ad Page</span>
            </button>
            <button 
              onClick={onCancel} // Goes back home
              className="btn btn-outline"
            >
              <Home size={16} />
              <span>Return Home</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
