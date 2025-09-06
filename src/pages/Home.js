import React from 'react';
import { Link } from 'react-router-dom';
import ErrorButton from '../components/ErrorButton';
import './Home.css';
import '../components/AddToCartButtons.css';

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
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🍔</div>
              <h3>Fresh Ingredients</h3>
              <p>We use only the freshest ingredients in all our dishes</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick delivery to your doorstep in under 30 minutes</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⭐</div>
              <h3>Quality Service</h3>
              <p>Exceptional customer service and satisfaction guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="menu-preview">
        <div className="container">
          <h2>Our Menu Categories</h2>
          <div className="menu-categories">
            <div className="category-card">
              <div className="category-image">🍔</div>
              <h3>Burgers</h3>
              <p>Juicy burgers with premium ingredients</p>
              <div className="category-actions">
                <Link to="/burgers" className="view-menu-btn">View Menu</Link>
                <button className="add-cart-primary" onClick={() => {}}>Add to Cart</button>
                <button className="add-cart-secondary" onClick={() => {}}>Quick Add</button>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image">🍕</div>
              <h3>Pizza</h3>
              <p>Fresh pizza with authentic flavors</p>
              <div className="category-actions">
                <Link to="/pizza" className="view-menu-btn">View Menu</Link>
                <button id="add-cart-special" onClick={() => {}}>Add to Cart</button>
                <button data-cart="express" onClick={() => {}}>Express Add</button>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image">🥤</div>
              <h3>Drinks</h3>
              <p>Refreshing beverages and smoothies</p>
              <div className="category-actions">
                <Link to="/drinks" className="view-menu-btn">View Menu</Link>
                <button className="add-cart-success" onClick={() => {}}>Add to Cart</button>
                <button data-cart="quick" onClick={() => {}}>Quick Order</button>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image">🍰</div>
              <h3>Desserts</h3>
              <p>Sweet treats to end your meal perfectly</p>
              <div className="category-actions">
                <Link to="/desserts" className="view-menu-btn">View Menu</Link>
                <button className="add-cart-warning" onClick={() => {}}>Add to Cart</button>
                <button id="add-cart-featured" onClick={() => {}}>Featured Add</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons and Forms with Various CSS Selectors */}
      <section className="interactive-elements">
        <div className="container">
          <h2>Interactive Elements Showcase</h2>
          
          {/* Class Selector Buttons */}
          <div className="button-group class-selectors">
            <h3>Class Selector Add to Cart Buttons</h3>
            <button className="add-cart-primary" onClick={() => {}}>Add to Cart - Primary</button>
            <button className="add-cart-secondary" onClick={() => {}}>Add to Cart - Secondary</button>
            <button className="add-cart-success" onClick={() => {}}>Add to Cart - Success</button>
            <button className="add-cart-danger" onClick={() => {}}>Add to Cart - Danger</button>
            <button className="add-cart-warning" onClick={() => {}}>Add to Cart - Warning</button>
            <button className="add-cart-dark" onClick={() => {}}>Add to Cart - Dark</button>
            <button className="add-cart-outline" onClick={() => {}}>Add to Cart - Outline</button>
            <button className="add-cart-minimal" onClick={() => {}}>Add to Cart - Minimal</button>
          </div>

          {/* ID Selector Buttons */}
          <div className="button-group id-selectors">
            <h3>ID Selector Add to Cart Buttons</h3>
            <button id="add-cart-special" onClick={() => {}}>Add to Cart - Special</button>
            <button id="add-cart-featured" onClick={() => {}}>Add to Cart - Featured</button>
            <button id="add-cart-premium" onClick={() => {}}>Add to Cart - Premium</button>
            <button id="add-cart-exclusive" onClick={() => {}}>Add to Cart - Exclusive</button>
            <button id="add-cart-vip" onClick={() => {}}>Add to Cart - VIP</button>
          </div>

          {/* Attribute Selector Buttons */}
          <div className="button-group attribute-selectors">
            <h3>Attribute Selector Add to Cart Buttons</h3>
            <button data-cart="express" onClick={() => {}}>Add to Cart - Express</button>
            <button data-cart="quick" onClick={() => {}}>Add to Cart - Quick</button>
            <button data-cart="instant" onClick={() => {}}>Add to Cart - Instant</button>
            <button data-priority="high" onClick={() => {}}>Add to Cart - High Priority</button>
            <button data-category="food" onClick={() => {}}>Add to Cart - Food</button>
            <button data-style="modern" onClick={() => {}}>Add to Cart - Modern</button>
            <input type="button" value="Add to Cart - Input" onClick={() => {}} />
          </div>

          {/* Form with Various Submit Types */}
          <div className="forms-section">
            <h3>Form Submit Elements</h3>
            
            {/* Newsletter Form */}
            <form className="newsletter-form" data-form-type="newsletter">
              <h4>Newsletter Signup</h4>
              <input type="email" name="email" placeholder="Your email..." required />
              <input type="submit" value="Subscribe" className="submit-btn newsletter-submit" />
            </form>

            {/* Quick Order Form */}
            <form id="quick-order-form" className="quick-order">
              <h4>Quick Order</h4>
              <select name="item" required>
                <option value="">Select Item</option>
                <option value="burger">Burger</option>
                <option value="pizza">Pizza</option>
                <option value="drink">Drink</option>
              </select>
              <input type="number" name="quantity" min="1" max="10" value="1" />
              <button type="submit" data-submit-type="order" className="add-cart-rounded" onClick={() => {}}>Add to Cart</button>
            </form>

            {/* Feedback Form */}
            <form className="feedback-form" data-priority="normal">
              <h4>Quick Feedback</h4>
              <textarea name="feedback" placeholder="Your feedback..." rows="3"></textarea>
              <input type="submit" value="Send Feedback" id="feedback-submit" />
            </form>
          </div>

          {/* Pseudo-class Demonstration Buttons */}
          <div className="button-group pseudo-demo">
            <h3>Add to Cart - Special Effects</h3>
            <button className="add-cart-glow" onClick={() => {}}>Add to Cart - Glow</button>
            <button className="add-cart-gradient-border" onClick={() => {}}>Add to Cart - Gradient Border</button>
            <button className="add-cart-rounded" onClick={() => {}}>Add to Cart - Rounded</button>
            <button className="add-cart-square" onClick={() => {}}>Add to Cart - Square</button>
            <button className="add-cart-primary" disabled>Add to Cart - Disabled</button>
          </div>
        </div>
      </section>

      {/* Error Testing Section */}
      <section className="error-testing-section">
        <div className="container">
          <div className="error-section">
            <h3>🧪 Error Testing Buttons</h3>
            <p>Click these buttons to test different front-end error scenarios. Check the console for detailed error logs.</p>
            
            <div className="error-button-group">
              <h4>JavaScript Runtime Errors</h4>
              <ErrorButton errorType="generic" variant="danger" size="small" />
              <ErrorButton errorType="reference" variant="danger" size="small" />
              <ErrorButton errorType="type" variant="danger" size="small" />
              <ErrorButton errorType="range" variant="danger" size="small" />
            </div>

            <div className="error-button-group">
              <h4>Network & API Errors (Simulated)</h4>
              <ErrorButton errorType="networkError" variant="warning" size="small" />
              <ErrorButton errorType="api404" variant="warning" size="small" />
              <ErrorButton errorType="api500" variant="warning" size="small" />
              <ErrorButton errorType="timeout" variant="warning" size="small" />
            </div>

            <div className="error-button-group">
              <h4>Real Network & Server Errors</h4>
              <ErrorButton errorType="realNetworkError" variant="danger" size="small" />
              <ErrorButton errorType="realApi404" variant="danger" size="small" />
              <ErrorButton errorType="realApi500" variant="danger" size="small" />
              <ErrorButton errorType="realTimeout" variant="danger" size="small" />
              <ErrorButton errorType="realSlowApi" variant="warning" size="small" />
              <ErrorButton errorType="realCorsError" variant="outline" size="small" />
            </div>

            <div className="error-button-group">
              <h4>Application Logic Errors</h4>
              <ErrorButton errorType="validationError" variant="dark" size="small" />
              <ErrorButton errorType="authError" variant="dark" size="small" />
              <ErrorButton errorType="permissionError" variant="dark" size="small" />
              <ErrorButton errorType="stateError" variant="dark" size="small" />
            </div>

            <div className="error-button-group">
              <h4>Performance & Memory Errors</h4>
              <ErrorButton errorType="memoryError" variant="outline" size="small" />
              <ErrorButton errorType="infiniteLoop" variant="outline" size="small" />
              <ErrorButton errorType="storageError" variant="outline" size="small" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
