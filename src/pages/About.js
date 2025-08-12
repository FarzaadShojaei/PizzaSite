import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-header">
          <h1>About FastBite</h1>
          <p className="lead">Your favorite fast food destination since 2020</p>
        </div>

        <div className="about-content">
          <section className="story">
            <h2>Our Story</h2>
            <p>
              FastBite was born from a simple idea: to serve delicious, high-quality fast food 
              that brings people together. Founded in 2020 by food enthusiasts Maria and John, 
              we started as a small local restaurant with big dreams.
            </p>
            <p>
              What began as a passion project has grown into a beloved community staple, 
              serving thousands of happy customers with our signature burgers, authentic pizzas, 
              refreshing drinks, and indulgent desserts.
            </p>
          </section>

          <section className="mission">
            <h2>Our Mission</h2>
            <div className="mission-points">
              <div className="mission-point">
                <span className="icon">🥘</span>
                <div>
                  <h3>Quality First</h3>
                  <p>We use only the freshest ingredients and prepare everything with care</p>
                </div>
              </div>
              <div className="mission-point">
                <span className="icon">⚡</span>
                <div>
                  <h3>Fast Service</h3>
                  <p>Quick service without compromising on quality or taste</p>
                </div>
              </div>
              <div className="mission-point">
                <span className="icon">🤝</span>
                <div>
                  <h3>Community Focus</h3>
                  <p>Supporting our local community and creating lasting relationships</p>
                </div>
              </div>
            </div>
          </section>

          <section className="team">
            <h2>Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">👨‍🍳</div>
                <h3>Chef John</h3>
                <p>Head Chef & Co-Founder</p>
                <p>15+ years of culinary experience</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">👩‍💼</div>
                <h3>Maria Rodriguez</h3>
                <p>Manager & Co-Founder</p>
                <p>Expert in customer service excellence</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">👨‍🍳</div>
                <h3>Chef Mike</h3>
                <p>Pizza Specialist</p>
                <p>Trained in authentic Italian techniques</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">👩‍🍳</div>
                <h3>Sarah Williams</h3>
                <p>Pastry Chef</p>
                <p>Creating magical desserts daily</p>
              </div>
            </div>
          </section>

          <section className="values">
            <h2>Why Choose Us?</h2>
            <div className="values-grid">
              <div className="value">
                <h3>🌱 Fresh Ingredients</h3>
                <p>Locally sourced, organic when possible</p>
              </div>
              <div className="value">
                <h3>🚀 Fast Delivery</h3>
                <p>30 minutes or less, guaranteed</p>
              </div>
              <div className="value">
                <h3>💰 Great Prices</h3>
                <p>Quality food at affordable prices</p>
              </div>
              <div className="value">
                <h3>🌟 Customer First</h3>
                <p>Your satisfaction is our top priority</p>
              </div>
            </div>
          </section>

          {/* About Page Interactive Elements */}
          <section className="about-actions">
            <h2>Get in Touch with Us</h2>
            
            {/* Action Buttons with Different Selectors */}
            <div className="action-buttons">
              <button className="btn-outline">Learn More</button>
              <button id="careers-btn" data-page="careers">Join Our Team</button>
              <button className="btn-contact" data-action="contact">Contact Us</button>
              <button type="button" className="btn-franchise" data-category="business">Franchise Opportunities</button>
            </div>

            {/* Career Application Form */}
            <form className="career-form" id="career-application" data-form-category="employment">
              <h3>Quick Career Interest Form</h3>
              <div className="form-row">
                <input type="text" name="name" placeholder="Full Name" required />
                <input type="email" name="email" placeholder="Email Address" required />
              </div>
              <select name="position" data-field="position" required>
                <option value="">Select Position</option>
                <option value="chef">Chef</option>
                <option value="server">Server</option>
                <option value="manager">Manager</option>
                <option value="delivery">Delivery Driver</option>
              </select>
              <textarea name="message" placeholder="Why do you want to work with us?" rows="4"></textarea>
              <button type="submit" className="submit-career" data-submit-action="career">Submit Application</button>
            </form>

            {/* Franchise Inquiry Form */}
            <form className="franchise-form" data-business-type="franchise">
              <h3>Franchise Inquiry</h3>
              <input type="text" name="business-name" placeholder="Business Name" />
              <input type="tel" name="phone" placeholder="Phone Number" />
              <input type="text" name="location" placeholder="Preferred Location" />
              <input type="submit" value="Request Information" id="franchise-submit" className="btn-franchise-submit" />
            </form>

            {/* Newsletter with Advanced Selectors */}
            <div className="newsletter-section">
              <h3>Stay Updated</h3>
              <form className="about-newsletter" data-newsletter-type="updates">
                <input type="email" name="subscriber-email" placeholder="Enter email for updates..." required />
                <div className="checkbox-group">
                  <label>
                    <input type="checkbox" name="promotions" data-category="marketing" /> 
                    Promotional offers
                  </label>
                  <label>
                    <input type="checkbox" name="news" data-category="news" /> 
                    Company news
                  </label>
                </div>
                <button type="submit" data-submit-type="newsletter" className="newsletter-btn">Subscribe to Updates</button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
