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
            <Link to="/burgers" className="category-card">
              <div className="category-image">🍔</div>
              <h3>Burgers</h3>
              <p>Juicy burgers with premium ingredients</p>
            </Link>
            <Link to="/pizza" className="category-card">
              <div className="category-image">🍕</div>
              <h3>Pizza</h3>
              <p>Fresh pizza with authentic flavors</p>
            </Link>
            <Link to="/drinks" className="category-card">
              <div className="category-image">🥤</div>
              <h3>Drinks</h3>
              <p>Refreshing beverages and smoothies</p>
            </Link>
            <Link to="/desserts" className="category-card">
              <div className="category-image">🍰</div>
              <h3>Desserts</h3>
              <p>Sweet treats to end your meal perfectly</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Buttons and Forms with Various CSS Selectors */}
      <section className="interactive-elements">
        <div className="container">
          <h2>Interactive Elements Showcase</h2>
          
          {/* Class Selector Buttons */}
          <div className="button-group class-selectors">
            <h3>Class Selector Buttons</h3>
            <button className="btn-primary">Primary Button</button>
            <button className="btn-secondary">Secondary Button</button>
            <button className="btn-success">Success Button</button>
            <button className="btn-danger">Danger Button</button>
          </div>

          {/* ID Selector Buttons */}
          <div className="button-group id-selectors">
            <h3>ID Selector Buttons</h3>
            <button id="unique-btn-1" className="unique-button">Unique Button 1</button>
            <button id="unique-btn-2" className="unique-button">Unique Button 2</button>
            <button id="special-action-btn">Special Action</button>
          </div>

          {/* Attribute Selector Buttons */}
          <div className="button-group attribute-selectors">
            <h3>Attribute Selector Buttons</h3>
            <button data-action="save" data-priority="high">Save</button>
            <button data-action="delete" data-priority="low">Delete</button>
            <button data-category="navigation" data-style="modern">Navigate</button>
            <button type="button" disabled>Disabled Button</button>
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
              <button type="submit" data-submit-type="order">Add to Cart</button>
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
            <h3>Hover, Focus & Active States</h3>
            <button className="hover-demo">Hover Me</button>
            <button className="focus-demo">Focus Me</button>
            <button className="active-demo">Click & Hold</button>
            <button className="disabled-demo" disabled>Disabled State</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
