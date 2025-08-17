import React, { useState } from 'react';
import DownloadButton from '../components/DownloadButton';
import ErrorButton from '../components/ErrorButton';
import './Gallery.css';

const GalleryImage = ({ item }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="gallery-item">
      <div className="gallery-image">
        {!imageError ? (
          <img 
            src={item.image} 
            alt={item.title}
            onError={handleImageError}
          />
        ) : (
          <div className="gallery-placeholder">
            <div className="gallery-placeholder-icon">📸</div>
            <div className="gallery-placeholder-text">{item.title}</div>
          </div>
        )}
        <div className="gallery-overlay">
          <div className="overlay-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'food',
      title: 'Gourmet Burger Deluxe',
      image: 'https://picsum.photos/400/300?random=101',
      description: 'Our signature burger with premium ingredients'
    },
    {
      id: 2,
      category: 'restaurant',
      title: 'Modern Dining Area',
      image: 'https://picsum.photos/400/300?random=102',
      description: 'Comfortable seating with contemporary design'
    },
    {
      id: 3,
      category: 'food',
      title: 'Artisan Pizza Collection',
      image: 'https://picsum.photos/400/300?random=103',
      description: 'Fresh made pizzas with authentic Italian recipes'
    },
    {
      id: 4,
      category: 'staff',
      title: 'Our Kitchen Team',
      image: 'https://picsum.photos/400/300?random=104',
      description: 'Professional chefs preparing your meals'
    },
    {
      id: 5,
      category: 'food',
      title: 'Fresh Smoothie Bar',
      image: 'https://picsum.photos/400/300?random=105',
      description: 'Natural fruit smoothies and healthy drinks'
    },
    {
      id: 6,
      category: 'restaurant',
      title: 'Outdoor Seating',
      image: 'https://picsum.photos/400/300?random=106',
      description: 'Enjoy your meal in our beautiful patio area'
    },
    {
      id: 7,
      category: 'food',
      title: 'Dessert Showcase',
      image: 'https://picsum.photos/400/300?random=107',
      description: 'Indulgent desserts and sweet treats'
    },
    {
      id: 8,
      category: 'events',
      title: 'Birthday Celebration',
      image: 'https://picsum.photos/400/300?random=108',
      description: 'Making special moments memorable'
    },
    {
      id: 9,
      category: 'food',
      title: 'Cookie Collection',
      image: 'https://picsum.photos/400/300?random=109',
      description: 'Freshly baked cookies daily'
    },
    {
      id: 10,
      category: 'staff',
      title: 'Friendly Service',
      image: 'https://picsum.photos/400/300?random=110',
      description: 'Our team is here to serve you with a smile'
    },
    {
      id: 11,
      category: 'restaurant',
      title: 'Coffee Corner',
      image: 'https://picsum.photos/400/300?random=111',
      description: 'Premium coffee and espresso bar'
    },
    {
      id: 12,
      category: 'events',
      title: 'Corporate Catering',
      image: 'https://picsum.photos/400/300?random=112',
      description: 'Professional catering for business events'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'food', label: 'Food' },
    { key: 'restaurant', label: 'Restaurant' },
    { key: 'staff', label: 'Our Team' },
    { key: 'events', label: 'Events' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery-header">
          <h1>Photo Gallery</h1>
          <p className="lead">Take a visual journey through FastBite's delicious world</p>
        </div>

        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category.key}
              className={`filter-btn ${selectedCategory === category.key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map(item => (
            <GalleryImage key={item.id} item={item} />
          ))}
        </div>

        <div className="gallery-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Happy Customers Daily</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Menu Items</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.8★</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years of Service</div>
          </div>
        </div>

        {/* Gallery Interactive Elements */}
        <section className="gallery-interactions">
          <h2>Share Your Experience</h2>
          
          {/* Photo Upload Form */}
          <form className="photo-upload-form" id="customer-photo-form" data-upload-type="customer">
            <h3>Upload Your FastBite Photo</h3>
            <input type="file" name="photo" accept="image/*" data-input="file" required />
            <input type="text" name="caption" placeholder="Add a caption..." />
            <input type="text" name="instagram" placeholder="Your Instagram handle (optional)" data-social="instagram" />
            <button type="submit" className="upload-btn" data-action="upload">Share Photo</button>
          </form>

          {/* Gallery Action Buttons */}
          <div className="gallery-actions">
            <DownloadButton
              fileName="gallery-photos.jpg"
              filePath="/images/gallery-photos.jpg"
              buttonText="Download Gallery"
              variant="primary"
              size="medium"
              icon="📸"
            />
            <DownloadButton
              fileName="fastbite-menu.jpg"
              filePath="/images/restaurant-menu.jpg"
              buttonText="Download Menu"
              variant="secondary"
              size="medium"
              icon="🍽️"
            />
            <button id="share-gallery-btn" className="btn-share">Share Gallery</button>
            <button className="btn-slideshow" data-mode="slideshow" type="button">Start Slideshow</button>
            <button className="btn-fullscreen" data-view="fullscreen">View Fullscreen</button>
          </div>

          {/* Photo Contest Form */}
          <div className="photo-contest">
            <h3>Monthly Photo Contest</h3>
            <p>Submit your best FastBite moment for a chance to win!</p>
            <form className="contest-form" data-contest="monthly" id="photo-contest">
              <input type="text" name="participant-name" placeholder="Your Name" required />
              <input type="email" name="participant-email" placeholder="Email" required />
              <select name="contest-category" data-category="contest" required>
                <option value="">Select Category</option>
                <option value="food">Best Food Shot</option>
                <option value="ambiance">Restaurant Ambiance</option>
                <option value="family">Family Moment</option>
                <option value="creative">Most Creative</option>
              </select>
              <textarea name="story" placeholder="Tell us the story behind your photo..." rows="3"></textarea>
              <div className="contest-terms">
                <label>
                  <input type="checkbox" name="terms" data-agreement="terms" required />
                  I agree to the contest terms and conditions
                </label>
              </div>
              <input type="submit" value="Enter Contest" className="contest-submit" id="contest-entry-btn" />
            </form>
          </div>

          {/* Social Media Integration */}
          <div className="social-integration">
            <h3>Connect With Us</h3>
            <div className="social-buttons">
              <button className="social-btn facebook" data-platform="facebook" data-action="follow">Follow on Facebook</button>
              <button className="social-btn instagram" data-platform="instagram" data-action="follow">Follow on Instagram</button>
              <button className="social-btn twitter" data-platform="twitter" data-action="follow">Follow on Twitter</button>
              <button id="newsletter-social" className="social-btn newsletter" data-action="subscribe">Join Newsletter</button>
            </div>
          </div>

          {/* Gallery Error Testing */}
          <div className="error-section">
            <h3>🎨 Gallery Error Testing</h3>
            <p>Test error scenarios specific to gallery and image handling:</p>
            
            <div className="error-button-group">
              <h4>Image & Media Errors</h4>
              <ErrorButton errorType="networkError" buttonText="Image Load Error" variant="danger" size="small" />
              <ErrorButton errorType="api404" buttonText="Missing Image API" variant="warning" size="small" />
              <ErrorButton errorType="memoryError" buttonText="Large Image Memory" variant="outline" size="small" />
            </div>

            <div className="error-button-group">
              <h4>Gallery State Errors</h4>
              <ErrorButton errorType="stateError" buttonText="Gallery State Error" variant="dark" size="small" />
              <ErrorButton errorType="renderError" buttonText="Gallery Render Error" variant="danger" size="small" />
              <ErrorButton errorType="validationError" buttonText="Upload Validation" variant="dark" size="small" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
