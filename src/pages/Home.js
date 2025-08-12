import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to FastBite</h1>
          <p>Delicious fast food delivered fresh to your door!</p>
          <Link to="/burgers" className="cta-button">Order Now</Link>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose FastBite?</h2>
          
          {/* Interactive Action Bar */}
          <div className="home-action-bar">
            <button 
              className="action-btn primary-btn" 
              data-action="order"
              id="quick-order-btn"
              title="Start ordering now"
            >
              🛒 Quick Order
            </button>
            <button 
              className="action-btn secondary-btn" 
              data-action="track"
              data-type="delivery"
            >
              📍 Track Order
            </button>
            <button 
              className="action-btn tertiary-btn" 
              data-action="call"
              data-contact="phone"
            >
              📞 Call Us
            </button>
            <button 
              className="action-btn quaternary-btn" 
              data-action="locate"
              data-service="map"
            >
              🗺️ Find Location
            </button>
          </div>

          <div className="features-grid">
            <div className="feature" data-feature="ingredients">
              <div className="feature-icon">🍔</div>
              <h3>Fresh Ingredients</h3>
              <p>We use only the freshest ingredients in all our dishes</p>
              <div className="feature-actions">
                <button 
                  className="feature-btn learn-more-btn" 
                  data-feature-action="learn"
                  data-topic="ingredients"
                >
                  Learn More
                </button>
                <button 
                  className="feature-btn rate-btn" 
                  data-feature-action="rate"
                  data-rating-type="ingredients"
                >
                  ⭐ Rate
                </button>
              </div>
            </div>
            <div className="feature" data-feature="delivery">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick delivery to your doorstep in under 30 minutes</p>
              <div className="feature-actions">
                <button 
                  className="feature-btn learn-more-btn" 
                  data-feature-action="learn"
                  data-topic="delivery"
                >
                  Learn More
                </button>
                <button 
                  className="feature-btn rate-btn" 
                  data-feature-action="rate"
                  data-rating-type="delivery"
                >
                  ⭐ Rate
                </button>
              </div>
            </div>
            <div className="feature" data-feature="service">
              <div className="feature-icon">⭐</div>
              <h3>Quality Service</h3>
              <p>Exceptional customer service and satisfaction guaranteed</p>
              <div className="feature-actions">
                <button 
                  className="feature-btn learn-more-btn" 
                  data-feature-action="learn"
                  data-topic="service"
                >
                  Learn More
                </button>
                <button 
                  className="feature-btn rate-btn" 
                  data-feature-action="rate"
                  data-rating-type="service"
                >
                  ⭐ Rate
                </button>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription Form */}
          <div className="home-newsletter" data-section="subscription">
            <h3>Stay Updated with Our Latest Offers!</h3>
            <form className="newsletter-signup-form" data-form="newsletter">
              <div className="newsletter-input-group">
                <input 
                  type="email" 
                  placeholder="Enter your email address..."
                  className="newsletter-email-input"
                  data-input="email"
                  required
                />
                <select 
                  className="newsletter-preferences"
                  data-input="preferences"
                >
                  <option value="all">All Updates</option>
                  <option value="offers">Special Offers Only</option>
                  <option value="new-items">New Menu Items</option>
                  <option value="events">Events & News</option>
                </select>
                <button 
                  type="submit" 
                  className="newsletter-submit-btn"
                  data-action="subscribe"
                  data-form-type="newsletter"
                >
                  Subscribe 📧
                </button>
              </div>
              <div className="newsletter-options">
                <label className="checkbox-container">
                  <input 
                    type="checkbox" 
                    name="sms-updates" 
                    className="newsletter-checkbox"
                    data-option="sms"
                  />
                  <span className="checkbox-custom"></span>
                  Also send SMS updates
                </label>
                <label className="checkbox-container">
                  <input 
                    type="checkbox" 
                    name="terms" 
                    className="newsletter-checkbox required-checkbox"
                    data-option="terms"
                    required
                  />
                  <span className="checkbox-custom"></span>
                  I agree to the terms and conditions
                </label>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="menu-preview">
        <div className="container">
          <h2>Our Menu Categories</h2>
          
          {/* Menu Filter Buttons */}
          <div className="menu-filter-bar" data-section="filters">
            <button 
              className="filter-btn active-filter" 
              data-filter="all"
              data-category="all"
            >
              🍽️ All Items
            </button>
            <button 
              className="filter-btn" 
              data-filter="popular"
              data-category="trending"
            >
              🔥 Popular
            </button>
            <button 
              className="filter-btn" 
              data-filter="new"
              data-category="latest"
            >
              ✨ New Items
            </button>
            <button 
              className="filter-btn" 
              data-filter="vegetarian"
              data-category="dietary"
            >
              🥗 Vegetarian
            </button>
            <button 
              className="filter-btn" 
              data-filter="deals"
              data-category="offers"
            >
              💰 Deals
            </button>
          </div>

          <div className="menu-categories">
            <div className="category-card-wrapper" data-category="burgers">
              <Link to="/burgers" className="category-card" data-menu-item="burgers">
                <div className="category-image">🍔</div>
                <h3>Burgers</h3>
                <p>Juicy burgers with premium ingredients</p>
                <div className="category-actions">
                  <button 
                    className="quick-action-btn favorite-btn" 
                    data-action="favorite"
                    data-item="burgers"
                    title="Add to favorites"
                  >
                    ❤️
                  </button>
                  <button 
                    className="quick-action-btn share-btn" 
                    data-action="share"
                    data-item="burgers"
                    title="Share category"
                  >
                    📤
                  </button>
                  <button 
                    className="quick-action-btn info-btn" 
                    data-action="info"
                    data-item="burgers"
                    title="More info"
                  >
                    ℹ️
                  </button>
                </div>
              </Link>
            </div>
            
            <div className="category-card-wrapper" data-category="pizza">
              <Link to="/pizza" className="category-card" data-menu-item="pizza">
                <div className="category-image">🍕</div>
                <h3>Pizza</h3>
                <p>Fresh pizza with authentic flavors</p>
                <div className="category-actions">
                  <button 
                    className="quick-action-btn favorite-btn" 
                    data-action="favorite"
                    data-item="pizza"
                    title="Add to favorites"
                  >
                    ❤️
                  </button>
                  <button 
                    className="quick-action-btn share-btn" 
                    data-action="share"
                    data-item="pizza"
                    title="Share category"
                  >
                    📤
                  </button>
                  <button 
                    className="quick-action-btn info-btn" 
                    data-action="info"
                    data-item="pizza"
                    title="More info"
                  >
                    ℹ️
                  </button>
                </div>
              </Link>
            </div>
            
            <div className="category-card-wrapper" data-category="drinks">
              <Link to="/drinks" className="category-card" data-menu-item="drinks">
                <div className="category-image">🥤</div>
                <h3>Drinks</h3>
                <p>Refreshing beverages and smoothies</p>
                <div className="category-actions">
                  <button 
                    className="quick-action-btn favorite-btn" 
                    data-action="favorite"
                    data-item="drinks"
                    title="Add to favorites"
                  >
                    ❤️
                  </button>
                  <button 
                    className="quick-action-btn share-btn" 
                    data-action="share"
                    data-item="drinks"
                    title="Share category"
                  >
                    📤
                  </button>
                  <button 
                    className="quick-action-btn info-btn" 
                    data-action="info"
                    data-item="drinks"
                    title="More info"
                  >
                    ℹ️
                  </button>
                </div>
              </Link>
            </div>
            
            <div className="category-card-wrapper" data-category="desserts">
              <Link to="/desserts" className="category-card" data-menu-item="desserts">
                <div className="category-image">🍰</div>
                <h3>Desserts</h3>
                <p>Sweet treats to end your meal perfectly</p>
                <div className="category-actions">
                  <button 
                    className="quick-action-btn favorite-btn" 
                    data-action="favorite"
                    data-item="desserts"
                    title="Add to favorites"
                  >
                    ❤️
                  </button>
                  <button 
                    className="quick-action-btn share-btn" 
                    data-action="share"
                    data-item="desserts"
                    title="Share category"
                  >
                    📤
                  </button>
                  <button 
                    className="quick-action-btn info-btn" 
                    data-action="info"
                    data-item="desserts"
                    title="More info"
                  >
                    ℹ️
                  </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Quick Order Form */}
          <div className="quick-order-section" data-section="quick-order">
            <h3>Quick Order Form</h3>
            <form className="quick-order-form" data-form="quick-order">
              <div className="order-input-row">
                <select 
                  className="order-category-select"
                  data-input="category"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="burgers">🍔 Burgers</option>
                  <option value="pizza">🍕 Pizza</option>
                  <option value="drinks">🥤 Drinks</option>
                  <option value="desserts">🍰 Desserts</option>
                </select>
                
                <input 
                  type="number" 
                  placeholder="Quantity"
                  className="order-quantity-input"
                  data-input="quantity"
                  min="1"
                  max="10"
                  required
                />
                
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  className="order-phone-input"
                  data-input="phone"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              
              <div className="order-options">
                <div className="radio-group-inline">
                  <label className="radio-option">
                    <input 
                      type="radio" 
                      name="orderType" 
                      value="delivery" 
                      className="order-radio"
                      data-option="delivery"
                      defaultChecked
                    />
                    <span className="radio-custom"></span>
                    🚚 Delivery
                  </label>
                  <label className="radio-option">
                    <input 
                      type="radio" 
                      name="orderType" 
                      value="pickup" 
                      className="order-radio"
                      data-option="pickup"
                    />
                    <span className="radio-custom"></span>
                    🏪 Pickup
                  </label>
                  <label className="radio-option">
                    <input 
                      type="radio" 
                      name="orderType" 
                      value="dine-in" 
                      className="order-radio"
                      data-option="dine-in"
                    />
                    <span className="radio-custom"></span>
                    🍽️ Dine In
                  </label>
                </div>
              </div>
              
              <div className="order-actions">
                <button 
                  type="button" 
                  className="order-btn estimate-btn"
                  data-action="estimate"
                >
                  💰 Get Estimate
                </button>
                <button 
                  type="submit" 
                  className="order-btn submit-order-btn"
                  data-action="submit-order"
                >
                  🛒 Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
