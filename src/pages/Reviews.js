import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    title: '',
    comment: ''
  });

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      title: "Amazing burgers!",
      comment: "The Classic Beef Burger was absolutely delicious. Fresh ingredients and perfectly cooked. Will definitely order again!",
      date: "2024-01-15",
      verified: true
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 4,
      title: "Great pizza, fast delivery",
      comment: "Ordered the Margherita Classic and it arrived hot and fresh. The crust was perfect and the toppings were generous.",
      date: "2024-01-14",
      verified: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5,
      title: "Best dessert cookies ever!",
      comment: "The chocolate chip cookies are to die for! Soft, gooey, and packed with chocolate. My kids loved them too.",
      date: "2024-01-13",
      verified: true
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      title: "Excellent service",
      comment: "Not only is the food great, but the customer service is outstanding. They went above and beyond to make sure my order was perfect.",
      date: "2024-01-12",
      verified: true
    },
    {
      id: 5,
      name: "Lisa Wang",
      rating: 4,
      title: "Fresh and tasty",
      comment: "I love the variety of healthy options. The Green Tea Lemonade is refreshing and the Veggie Supreme burger is surprisingly filling.",
      date: "2024-01-11",
      verified: false
    },
    {
      id: 6,
      name: "James Brown",
      rating: 5,
      title: "Perfect for family dinners",
      comment: "We ordered the Family Feast Package and it was more than enough for our family of 5. Great value and everyone loved their meal.",
      date: "2024-01-10",
      verified: true
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your review! It will be published after moderation.');
    setNewReview({
      name: '',
      rating: 5,
      title: '',
      comment: ''
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ⭐
      </span>
    ));
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews-header">
          <h1>Customer Reviews</h1>
          <p className="lead">See what our customers are saying about FastBite</p>
        </div>

        <div className="reviews-summary">
          <div className="rating-overview">
            <div className="average-rating">
              <span className="rating-number">{averageRating.toFixed(1)}</span>
              <div className="rating-stars">
                {renderStars(Math.round(averageRating))}
              </div>
              <p>Based on {totalReviews} reviews</p>
            </div>
          </div>

          <div className="rating-breakdown">
            {[5, 4, 3, 2, 1].map(star => {
              const count = reviews.filter(r => r.rating === star).length;
              const percentage = (count / totalReviews) * 100;
              return (
                <div key={star} className="rating-bar">
                  <span className="star-label">{star} ⭐</span>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="count">({count})</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="reviews-content">
          <div className="reviews-list">
            <h2>Customer Reviews</h2>
            {reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      {review.name.charAt(0)}
                    </div>
                    <div className="reviewer-details">
                      <h4>{review.name}</h4>
                      {review.verified && <span className="verified-badge">✓ Verified Customer</span>}
                    </div>
                  </div>
                  <div className="review-meta">
                    <div className="review-rating">
                      {renderStars(review.rating)}
                    </div>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
                <div className="review-content">
                  <h3>{review.title}</h3>
                  <p>{review.comment}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="write-review">
            <h2>Write a Review</h2>
            
            {/* Interactive Buttons Section with Various CSS Selectors */}
            <div className="action-buttons-section">
              <h3>Quick Actions</h3>
              <div className="button-showcase">
                <button 
                  type="button" 
                  className="btn btn-primary btn-hover-effect"
                  data-action="like"
                  title="Like this page"
                >
                  👍 Like Page
                </button>
                
                <button 
                  type="button" 
                  className="btn btn-secondary btn-animated"
                  data-action="share"
                  data-platform="social"
                >
                  📤 Share Reviews
                </button>
                
                <button 
                  type="button" 
                  className="btn btn-success btn-gradient"
                  data-action="subscribe"
                  id="newsletter-btn"
                >
                  📧 Get Updates
                </button>
                
                <button 
                  type="button" 
                  className="btn btn-warning btn-pulse"
                  data-action="filter"
                  data-filter="verified"
                >
                  ⭐ Show Verified Only
                </button>
                
                <button 
                  type="button" 
                  className="btn btn-info btn-ripple"
                  data-action="sort"
                  data-sort="recent"
                >
                  🔄 Sort by Recent
                </button>
              </div>
            </div>

            {/* Advanced Form with Multiple Input Types */}
            <form className="review-form advanced-form" onSubmit={handleSubmit}>
              <div className="form-section" data-section="personal">
                <h4>Personal Information</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={newReview.name}
                      onChange={handleInputChange}
                      className="form-control required-field"
                      data-validation="text"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email (Optional)</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control optional-field"
                      data-validation="email"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="form-section" data-section="rating">
                <h4>Your Experience</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="rating">Rating *</label>
                    <select
                      id="rating"
                      name="rating"
                      value={newReview.rating}
                      onChange={handleInputChange}
                      className="form-control select-field"
                      data-validation="required"
                      required
                    >
                      <option value={5}>5 Stars - Excellent</option>
                      <option value={4}>4 Stars - Very Good</option>
                      <option value={3}>3 Stars - Good</option>
                      <option value={2}>2 Stars - Fair</option>
                      <option value={1}>1 Star - Poor</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="visit-type">Visit Type</label>
                    <select 
                      id="visit-type" 
                      name="visitType" 
                      className="form-control secondary-select"
                      data-category="experience"
                    >
                      <option value="dine-in">Dine In</option>
                      <option value="takeout">Takeout</option>
                      <option value="delivery">Delivery</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Food Categories (Check all that apply)</label>
                  <div className="checkbox-group" data-group="categories">
                    <label className="checkbox-label">
                      <input type="checkbox" name="categories" value="burgers" className="checkbox-input" data-category="burgers" />
                      <span className="checkmark"></span>
                      🍔 Burgers
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" name="categories" value="pizza" className="checkbox-input" data-category="pizza" />
                      <span className="checkmark"></span>
                      🍕 Pizza
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" name="categories" value="drinks" className="checkbox-input" data-category="drinks" />
                      <span className="checkmark"></span>
                      🥤 Drinks
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" name="categories" value="desserts" className="checkbox-input" data-category="desserts" />
                      <span className="checkmark"></span>
                      🍰 Desserts
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-section" data-section="review">
                <h4>Your Review</h4>
                <div className="form-group">
                  <label htmlFor="title">Review Title *</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newReview.title}
                    onChange={handleInputChange}
                    placeholder="Give your review a title..."
                    className="form-control title-field"
                    data-validation="text"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="comment">Your Review *</label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={newReview.comment}
                    onChange={handleInputChange}
                    placeholder="Tell us about your experience..."
                    rows="5"
                    className="form-control textarea-field"
                    data-validation="text"
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Would you recommend us?</label>
                  <div className="radio-group" data-group="recommendation">
                    <label className="radio-label">
                      <input type="radio" name="recommend" value="yes" className="radio-input" data-recommend="yes" defaultChecked />
                      <span className="radio-mark"></span>
                      Yes, definitely!
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="recommend" value="maybe" className="radio-input" data-recommend="maybe" />
                      <span className="radio-mark"></span>
                      Maybe
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="recommend" value="no" className="radio-input" data-recommend="no" />
                      <span className="radio-mark"></span>
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-outline-secondary btn-reset" data-action="reset">
                  🔄 Reset Form
                </button>
                <button type="button" className="btn btn-outline-primary btn-save-draft" data-action="save-draft">
                  💾 Save Draft
                </button>
                <button type="submit" className="submit-review-btn btn-submit-primary" data-action="submit">
                  📝 Submit Review
                </button>
              </div>
            </form>

            {/* Newsletter Signup Form */}
            <div className="newsletter-section" data-section="newsletter">
              <h3>Stay Updated</h3>
              <form className="newsletter-form inline-form" data-form-type="newsletter">
                <div className="input-group">
                  <input 
                    type="email" 
                    placeholder="Enter your email for updates..." 
                    className="newsletter-input form-control"
                    data-validation="email"
                    required
                  />
                  <button type="submit" className="newsletter-btn btn-newsletter" data-action="subscribe">
                    Subscribe 📧
                  </button>
                </div>
                <div className="form-options">
                  <label className="checkbox-label small">
                    <input type="checkbox" name="terms" className="checkbox-input" data-type="agreement" required />
                    <span className="checkmark small"></span>
                    I agree to receive email updates
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
