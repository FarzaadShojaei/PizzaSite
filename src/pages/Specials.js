import React from 'react';
import MenuItem from '../components/MenuItem';
import './Specials.css';

const Specials = () => {
  const todaySpecials = [
    {
      id: 101,
      name: "Monday Burger Madness",
      description: "Buy any burger and get 50% off on a second burger of equal or lesser value",
      price: 9.99,
      image: "https://picsum.photos/400/300?random=201",
      originalPrice: 15.99
    },
    {
      id: 102,
      name: "Pizza Tuesday",
      description: "Large pizza + 2 drinks + dessert combo deal",
      price: 19.99,
      image: "https://picsum.photos/400/300?random=202",
      originalPrice: 28.99
    },
    {
      id: 103,
      name: "Wednesday Wings",
      description: "24 pieces of buffalo wings with 4 dipping sauces",
      price: 16.99,
      image: "https://picsum.photos/400/300?random=203",
      originalPrice: 24.99
    }
  ];

  const weeklyDeals = [
    {
      id: 201,
      name: "Family Feast Package",
      description: "4 burgers + 2 large pizzas + 6 drinks + dessert platter",
      price: 59.99,
      image: "https://picsum.photos/400/300?random=204",
      originalPrice: 89.99
    },
    {
      id: 202,
      name: "Student Special",
      description: "Any main dish + drink + cookie with valid student ID",
      price: 12.99,
      image: "https://picsum.photos/400/300?random=205",
      originalPrice: 18.99
    },
    {
      id: 203,
      name: "Happy Hour Drinks",
      description: "50% off all beverages between 3-5 PM weekdays",
      price: 2.49,
      image: "https://picsum.photos/400/300?random=206",
      originalPrice: 4.99
    }
  ];

  const loyaltyProgram = {
    bronze: { orders: 5, discount: 5 },
    silver: { orders: 15, discount: 10 },
    gold: { orders: 30, discount: 15 },
    platinum: { orders: 50, discount: 20 }
  };

  return (
    <div className="specials">
      <div className="container">
        <div className="specials-header">
          <h1>🎉 Today's Specials & Deals</h1>
          <p className="lead">Incredible savings on your favorite meals!</p>
        </div>

        <section className="today-specials">
          <h2>Today's Hot Deals</h2>
          <div className="specials-grid">
            {todaySpecials.map(special => (
              <div key={special.id} className="special-item">
                <div className="special-badge">TODAY ONLY</div>
                <div className="special-image">
                  <img src={special.image} alt={special.name} />
                </div>
                <div className="special-content">
                  <h3>{special.name}</h3>
                  <p className="description">{special.description}</p>
                  <div className="price-section">
                    <span className="original-price">${special.originalPrice}</span>
                    <span className="special-price">${special.price}</span>
                    <span className="savings">Save ${(special.originalPrice - special.price).toFixed(2)}</span>
                  </div>
                  <button className="order-special-btn">Order Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="weekly-deals">
          <h2>Weekly Specials</h2>
          <div className="deals-grid">
            {weeklyDeals.map(deal => (
              <div key={deal.id} className="deal-card">
                <img src={deal.image} alt={deal.name} />
                <div className="deal-info">
                  <h3>{deal.name}</h3>
                  <p>{deal.description}</p>
                  <div className="deal-price">
                    <span className="current-price">${deal.price}</span>
                    <span className="original-price">${deal.originalPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="loyalty-program">
          <h2>FastBite Loyalty Program</h2>
          <p className="loyalty-intro">Join our loyalty program and earn amazing rewards with every order!</p>
          
          <div className="loyalty-tiers">
            <div className="tier bronze">
              <div className="tier-icon">🥉</div>
              <h3>Bronze</h3>
              <p>{loyaltyProgram.bronze.orders} orders</p>
              <div className="benefit">{loyaltyProgram.bronze.discount}% off</div>
            </div>
            <div className="tier silver">
              <div className="tier-icon">🥈</div>
              <h3>Silver</h3>
              <p>{loyaltyProgram.silver.orders} orders</p>
              <div className="benefit">{loyaltyProgram.silver.discount}% off</div>
            </div>
            <div className="tier gold">
              <div className="tier-icon">🥇</div>
              <h3>Gold</h3>
              <p>{loyaltyProgram.gold.orders} orders</p>
              <div className="benefit">{loyaltyProgram.gold.discount}% off</div>
            </div>
            <div className="tier platinum">
              <div className="tier-icon">💎</div>
              <h3>Platinum</h3>
              <p>{loyaltyProgram.platinum.orders} orders</p>
              <div className="benefit">{loyaltyProgram.platinum.discount}% off</div>
            </div>
          </div>
        </section>

        <section className="newsletter-signup">
          <div className="newsletter-content">
            <h2>Never Miss a Deal!</h2>
            <p>Subscribe to our newsletter and be the first to know about exclusive offers and new menu items.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>

        {/* Special Offers Interactive Elements */}
        <section className="special-interactions">
          <h2>Exclusive Member Benefits</h2>
          
          {/* Membership Signup Form */}
          <form className="membership-form" id="vip-membership" data-membership="vip">
            <h3>Join VIP Membership</h3>
            <div className="form-grid">
              <input type="text" name="first-name" placeholder="First Name" required />
              <input type="text" name="last-name" placeholder="Last Name" required />
              <input type="email" name="member-email" placeholder="Email Address" required />
              <input type="tel" name="phone" placeholder="Phone Number" data-input="phone" />
            </div>
            <select name="membership-tier" data-tier="selection" required>
              <option value="">Select Membership Tier</option>
              <option value="bronze">Bronze - 5% off</option>
              <option value="silver">Silver - 10% off</option>
              <option value="gold">Gold - 15% off</option>
              <option value="platinum">Platinum - 20% off</option>
            </select>
            <div className="preferences">
              <h4>Notification Preferences</h4>
              <label><input type="checkbox" name="email-deals" data-notification="email" /> Email deals</label>
              <label><input type="checkbox" name="sms-alerts" data-notification="sms" /> SMS alerts</label>
              <label><input type="checkbox" name="birthday-offers" data-special="birthday" /> Birthday offers</label>
            </div>
            <button type="submit" className="membership-submit" data-action="join-membership">Join VIP Club</button>
          </form>

          {/* Deal Alert Customization */}
          <div className="deal-customization">
            <h3>Customize Your Deal Alerts</h3>
            <form className="alert-form" data-alert-type="custom" id="deal-alerts">
              <div className="food-preferences">
                <h4>Food Categories</h4>
                <div className="category-checkboxes">
                  <label><input type="checkbox" name="alerts" value="burgers" data-food="burgers" /> Burger Deals</label>
                  <label><input type="checkbox" name="alerts" value="pizza" data-food="pizza" /> Pizza Specials</label>
                  <label><input type="checkbox" name="alerts" value="drinks" data-food="drinks" /> Drink Offers</label>
                  <label><input type="checkbox" name="alerts" value="desserts" data-food="desserts" /> Dessert Deals</label>
                </div>
              </div>
              <div className="timing-preferences">
                <label>Preferred deal times:</label>
                <select name="deal-timing" data-timing="preference">
                  <option value="morning">Morning (8AM-12PM)</option>
                  <option value="afternoon">Afternoon (12PM-5PM)</option>
                  <option value="evening">Evening (5PM-9PM)</option>
                  <option value="anytime">Anytime</option>
                </select>
              </div>
              <input type="submit" value="Save Preferences" className="save-preferences" id="save-alert-prefs" />
            </form>
          </div>

          {/* Special Actions */}
          <div className="special-actions">
            <h3>Quick Actions</h3>
            <button className="btn-current-deals" data-action="view" data-category="current">View Current Deals</button>
            <button id="notify-friends-btn" className="btn-share-deals" data-action="share">Share Deals with Friends</button>
            <button className="btn-calendar" data-feature="calendar" type="button">Add to Calendar</button>
            <button className="btn-favorites" data-action="favorite" data-list="specials">Save to Favorites</button>
          </div>

          {/* Feedback on Deals */}
          <form className="deal-feedback-form" data-feedback-type="deals">
            <h3>Rate Our Deals</h3>
            <p>Help us improve by rating today's specials!</p>
            <div className="rating-group">
              <label>Deal Value:</label>
              <div className="star-rating">
                <input type="radio" name="value-rating" value="5" data-rating="value" />
                <input type="radio" name="value-rating" value="4" data-rating="value" />
                <input type="radio" name="value-rating" value="3" data-rating="value" />
                <input type="radio" name="value-rating" value="2" data-rating="value" />
                <input type="radio" name="value-rating" value="1" data-rating="value" />
              </div>
            </div>
            <textarea name="deal-comments" placeholder="Comments about today's deals..." rows="3" data-feedback="comments"></textarea>
            <button type="submit" className="feedback-submit" data-submit-type="feedback">Submit Feedback</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Specials;
