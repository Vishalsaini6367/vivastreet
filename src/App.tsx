import { useState, useEffect } from 'react';
import { SvgSymbols } from './components/SvgSymbols';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ListingGrid } from './components/ListingGrid';
import { ListingDetail } from './components/ListingDetail';
import { PostAdWizard } from './components/PostAdWizard';
import { Footer } from './components/Footer';
import { Listing } from './components/ListingCard';

const INITIAL_MOCK_LISTINGS: Listing[] = [
  {
    id: 'mock-1',
    title: 'Luxury Full Body Swedish & Deep Tissue Massage',
    description: 'Welcome to a clean, quiet and professional environment. I am a certified massage therapist offering Swedish massage, deep tissue massage, and relaxing therapy to help ease muscle tension, stress, and anxiety. Fresh towels, relaxing music, and aromatherapy oils provided. Shower facilities are available.',
    price: 60,
    category: 'Services',
    subcategory: 'Massage & Therapy',
    location: 'London (Kensington)',
    date: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=60',
    views: 142,
    isPremium: true,
    isVerified: true,
    sellerName: 'Elena Therapies',
    sellerPhone: '07700 900011',
    sellerRating: 4.9
  },
  {
    id: 'mock-2',
    title: 'Expert GCSE & A-Level Mathematics Tutor',
    description: 'Hi! I am a final-year Physics student at the University of Birmingham with 4+ years of experience tutoring Maths and Physics. I customize sessions to match each student\'s learning pace, focusing on exam preparation, concepts mastery, and boosting confidence. Rates are £30/hour. Lessons conducted online or in-person.',
    price: 30,
    category: 'Services',
    subcategory: 'Tutors & Classes',
    location: 'Birmingham',
    date: '5 hours ago',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=60',
    views: 48,
    isVerified: true,
    sellerName: 'David K. Maths',
    sellerPhone: '07700 900022',
    sellerRating: 5.0
  },
  {
    id: 'mock-3',
    title: 'Stunning 2 Bedroom Penthouse with Skyline Views',
    description: 'Available immediately! A fully furnished, high-specification 2-bedroom, 2-bathroom apartment located on the 24th floor of the prestigious Tower One. Features floor-to-ceiling windows, open-plan living/dining room, modern integrated kitchen, air conditioning, and a private balcony. Secure underground parking and 24h concierge.',
    price: 1450,
    category: 'Property',
    subcategory: 'Flats for Rent',
    location: 'Greater Manchester',
    date: '1 day ago',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=60',
    views: 310,
    isPremium: true,
    isUrgent: true,
    sellerName: 'Elite Lettings Ltd',
    sellerPhone: '07700 900033',
    sellerRating: 4.6
  },
  {
    id: 'mock-4',
    title: 'Double Room in Clean Professional House Share',
    description: 'Lovely double room available in a recently renovated 5-bedroom house. Sharing with 4 friendly young professionals (2 male, 2 female). All bills included (water, gas, electricity, high-speed fiber broadband, council tax). The house features a large shared kitchen/living area, a washing machine, and a sunny garden. 5 mins walk to tube.',
    price: 680,
    category: 'Property',
    subcategory: 'Rooms for Rent',
    location: 'London (Stratford)',
    date: '3 days ago',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=60',
    views: 189,
    isVerified: true,
    sellerName: 'Robert L.',
    sellerPhone: '07700 900044',
    sellerRating: 4.8
  },
  {
    id: 'mock-5',
    title: 'Senior Frontend Developer (React/TypeScript)',
    description: 'We are seeking a talented Senior Frontend Developer with 5+ years of experience to join our fast-growing tech team. You will lead the development of our customer-facing web platforms using React, TypeScript, Redux, and modern styling libraries. Offering a competitive salary up to £75,000, remote work, health insurance, and 28 days holiday.',
    price: 'Contact',
    category: 'Jobs',
    subcategory: 'Full Time Jobs',
    location: 'London (Remote-first)',
    date: '1 day ago',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
    views: 92,
    isVerified: true,
    sellerName: 'Apex Recruiting',
    sellerPhone: '07700 900055',
    sellerRating: 4.5
  },
  {
    id: 'mock-6',
    title: 'iPhone 15 Pro Max - 256GB - Titanium Gray',
    description: 'For sale is a brand new, factory unlocked iPhone 15 Pro Max with 256GB storage in Titanium Gray. The phone is still in its original sealed box and comes with a full 1-year Apple warranty. I will also throw in a free protective screen guard and clear MagSafe case. Cash on collection or tracked next-day delivery.',
    price: 850,
    category: 'Buy & Sell',
    subcategory: 'Electronics',
    location: 'Glasgow',
    date: '4 hours ago',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&auto=format&fit=crop&q=60',
    views: 75,
    sellerName: 'Marcus Phones',
    sellerPhone: '07700 900066',
    sellerRating: 4.7
  }
];

const CATEGORIES = [
  'Services', 'Property', 'Jobs', 'Buy & Sell', 'Vehicles', 'Pets', 'Community'
];

const SUBCATEGORIES_BY_CATEGORY: Record<string, string[]> = {
  'Services': ['Massage & Therapy', 'Tutors & Classes', 'Household Help', 'Computer & Tech'],
  'Property': ['Flats for Rent', 'Houses for Rent', 'Rooms for Rent', 'Commercial Sale'],
  'Jobs': ['Full Time Jobs', 'Part Time Jobs', 'Work from Home', 'Temporary Contracts'],
  'Buy & Sell': ['Electronics', 'Home & Garden', 'Fashion & Clothes', 'Hobbies & Leisure'],
  'Vehicles': ['Cars for Sale', 'Bikes & Scooters', 'Vans & Trucks', 'Car Parts'],
  'Pets': ['Dogs & Puppies', 'Cats & Kittens', 'Pet Accessories', 'Birds'],
  'Community': ['Local Events', 'Classes & Workshops', 'Volunteering', 'Lost & Found']
};

function App() {
  const [page, setPage] = useState<'home' | 'search' | 'detail' | 'post-ad'>('home');
  const [listings, setListings] = useState<Listing[]>(INITIAL_MOCK_LISTINGS);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [darkMode] = useState<boolean>(false);

  // Filter States
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  // toggleDarkMode removed (unused)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleHeroSearch = (query: string, category: string, location: string) => {
    setSearchQuery(query);
    setSelectedCategory(category);
    setSelectedLocation(location);
    setPage('search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setSearchQuery('');
    setSelectedLocation('');
    setPage('search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectListing = (listingItem: Listing) => {
    setListings(prevListings => 
      prevListings.map(item => 
        item.id === listingItem.id 
          ? { ...item, views: item.views + 1 }
          : item
      )
    );
    setSelectedListing({ ...listingItem, views: listingItem.views + 1 });
    setPage('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePublishAd = (newAd: Listing) => {
    setListings([newAd, ...listings]);
  };

  const handleViewCreatedAd = (newAd: Listing) => {
    setSelectedListing(newAd);
    setPage('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-layout">
      {/* SVG Icon Symbols Sprite */}
      <SvgSymbols />

      {/* Top Banner */}
      <AnnouncementBar />

      {/* Non-Home Page Header */}
      {page !== 'home' && (
        <div style={{ backgroundColor: '#2b2e36', padding: '5px 0' }}>
          <Navbar setPage={setPage} />
        </div>
      )}

      {page === 'home' && (
        <main>
          {/* Hero Section (Contains Navbar & CategoryGrid inside #static_home) */}
          <Hero
            onSearchSubmit={handleHeroSearch}
            onSelectCategory={handleSelectCategory}
            setPage={setPage}
          />

          {/* Post Your Ad CTA Banner */}
          <section className="padding-l main_post_home">
            <div className="grid grid--full main_post_home_title">
              <div className="grid__item mob--one-whole tab--one-whole desk--two-thirds">
                <h2 style={{ color: '#fff', padding: '20px 0', fontSize: '28px', lineHeight: '28px', fontWeight: 400 }}>
                  Post your ad now !
                </h2>
              </div>
              <div className="grid__item mob--one-whole tab--one-whole desk--one-quarter">
                <a href="#" onClick={(e) => { e.preventDefault(); setPage('post-ad'); }}>
                  <div className="btn btn-orange btn-primary" data-automation="homepagePostAdButton">
                    Post your Ad
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Pre-Footer Links Section */}
          <section className="main_links_home">
            <div className="pre_footer">
              <div className="grid__item">
                <div className="grid grid--full">
                  <div className="grid__item mob--one-whole tab--one-whole desk--two-quarters">
                    <div className="links_block">
                      <h3 className="links_block__title">Browse in your location</h3>
                      <ul className="links_block__list">
                        {[
                          { label: 'East Anglia', path: 'east-anglia' },
                          { label: 'East Midlands', path: 'east-midland' },
                          { label: 'Isle of Wight', path: 'isle-of-wight' },
                          { label: 'London', path: 'london' },
                          { label: 'North East', path: 'north-east' },
                          { label: 'North West', path: 'north-west' },
                          { label: 'Northern Ireland', path: 'northern-ireland' },
                          { label: 'Scotland', path: 'scotland' },
                          { label: 'South East', path: 'south-east' },
                          { label: 'South West', path: 'south-west' },
                          { label: 'Wales', path: 'wales' },
                          { label: 'West Midlands', path: 'west-midland-region' },
                          { label: 'Yorkshire and the Humber', path: 'yorkshire-and-the-humber' }
                        ].map((loc, index, arr) => (
                          <li key={loc.path} className="links_block__list__item">
                            <a
                              className="links_block__list__item__link"
                              href="#"
                              onClick={(e) => { e.preventDefault(); handleHeroSearch('', '', loc.label); }}
                            >
                              {loc.label}
                            </a>
                            {index < arr.length - 1 && ','}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="links_block" id="countries">
                      <h3 className="links_block__title">Vivastreet Countries</h3>
                      <ul className="links_block__list">
                        <li className="links_block__list__item">
                          <a className="links_block__list__item__link" href="https://www.vivastreet.be">Vivastreet Belgium</a>,
                        </li>
                        <li className="links_block__list__item">
                          <a className="links_block__list__item__link" href="https://www.vivastreet.com">Vivastreet France</a>,
                        </li>
                        <li className="links_block__list__item">
                          <a className="links_block__list__item__link" href="https://www.vivastreet.ie">Vivastreet Ireland</a>,
                        </li>
                        <li className="links_block__list__item">
                          <a className="links_block__list__item__link" href="https://www.vivastreet.co.uk">Vivastreet United Kingdom</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid__item mob--one-whole tab--one-whole desk--two-quarters">
                    <div className="social_links_block container">
                      <h2 className="social_links_block__title">Join our community !</h2>
                      <section className="social_links_block__list">
                        <span className="social_links_block__list__item" data-automation="homepageFbook">
                          <a className="social_links_block__list__item__link" href="https://www.facebook.com/people/Vivastreet-UK/61582536474625/" target="_blank" rel="noreferrer">
                            <img className="social_links_block__list__item__link__image" src="https://static.viva-images.com/templates/viwii3/images/home/fb_icon_round_60.png" alt="facebook logo" loading="lazy" />
                          </a>
                        </span>
                        <span className="social_links_block__list__item" data-automation="homepageTwitter">
                          <a className="social_links_block__list__item__link" href="https://x.com/vivastreet_uk?lang=en-gb" target="_blank" rel="noreferrer">
                            <img className="social_links_block__list__item__link__image" src="https://media-p.viva-images.com/social-assets/x_icon_round_60.png" alt="twitter logo" loading="lazy" />
                          </a>
                        </span>
                        <span className="social_links_block__list__item" data-automation="homepageInsta">
                          <a className="social_links_block__list__item__link" href="https://www.instagram.com/vivastreetuk_" target="_blank" rel="noreferrer">
                            <img className="social_links_block__list__item__link__image" src="https://static.viva-images.com/templates/viwii3/images/home/instagram_icon_round_60.png" alt="instagram logo" loading="lazy" />
                          </a>
                        </span>
                        <span className="social_links_block__list__item" data-automation="homepageTikTok">
                          <a className="social_links_block__list__item__link" href="https://www.tiktok.com/@vivastreetuk_" target="_blank" rel="noreferrer">
                            <img className="social_links_block__list__item__link__image" src="https://media-p.viva-images.com/social-assets/tiktok_logo_120px.png" alt="tiktok logo" loading="lazy" />
                          </a>
                        </span>
                        <span className="social_links_block__list__item" data-automation="homepageYtube">
                          <a className="social_links_block__list__item__link" href="https://www.youtube.com/channel/UCiLEB5oT_KdqEYELrcMKaHA" target="_blank" rel="noreferrer">
                            <img className="social_links_block__list__item__link__image" src="https://static.viva-images.com/templates/viwii3/images/home/youtube_icon_round_60.png" alt="youtube logo" loading="lazy" />
                          </a>
                        </span>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {page === 'search' && (
        <ListingGrid
          listings={listings}
          onSelectListing={handleSelectListing}
          categories={CATEGORIES}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          selectedLocation={selectedLocation}
          setSearchQuery={setSearchQuery}
          setSelectedCategory={setSelectedCategory}
          setSelectedLocation={setSelectedLocation}
        />
      )}

      {page === 'detail' && selectedListing && (
        <ListingDetail
          listing={selectedListing}
          onBack={() => setPage('search')}
        />
      )}

      {page === 'post-ad' && (
        <PostAdWizard
          categories={CATEGORIES}
          subcategoriesByCategory={SUBCATEGORIES_BY_CATEGORY}
          onPublish={handlePublishAd}
          onCancel={() => setPage('home')}
          onViewAd={handleViewCreatedAd}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;


