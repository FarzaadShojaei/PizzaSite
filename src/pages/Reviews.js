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
            <form className="review-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newReview.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="rating">Rating *</label>
                  <select
                    id="rating"
                    name="rating"
                    value={newReview.rating}
                    onChange={handleInputChange}
                    required
                  >
                    <option value={5}>5 Stars - Excellent</option>
                    <option value={4}>4 Stars - Very Good</option>
                    <option value={3}>3 Stars - Good</option>
                    <option value={2}>2 Stars - Fair</option>
                    <option value={1}>1 Star - Poor</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="title">Review Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newReview.title}
                  onChange={handleInputChange}
                  placeholder="Give your review a title..."
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
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-review-btn">Submit Review</button>
            </form>
          </div>
        </div>

        {/* Additional Review Interactive Elements */}
        <section className="review-interactions">
          <h2>More Ways to Share</h2>
          
          {/* Review Actions */}
          <div className="review-actions">
            <button className="btn-filter" data-action="filter" data-rating="5">Show 5-Star Reviews</button>
            <button id="sort-reviews-btn" data-sort="date">Sort by Date</button>
            <button className="btn-export" data-export="reviews" type="button">Export Reviews</button>
            <button className="btn-moderate" data-role="admin" disabled>Moderate Reviews</button>
          </div>

          {/* Quick Rating Form */}
          <form className="quick-rating-form" id="quick-rating" data-rating-type="quick">
            <h3>Quick Rating</h3>
            <p>Rate your last experience in seconds!</p>
            <div className="star-rating">
              <input type="radio" name="quick-rating" value="5" id="star5" />
              <label for="star5" data-star="5">⭐</label>
              <input type="radio" name="quick-rating" value="4" id="star4" />
              <label for="star4" data-star="4">⭐</label>
              <input type="radio" name="quick-rating" value="3" id="star3" />
              <label for="star3" data-star="3">⭐</label>
              <input type="radio" name="quick-rating" value="2" id="star2" />
              <label for="star2" data-star="2">⭐</label>
              <input type="radio" name="quick-rating" value="1" id="star1" />
              <label for="star1" data-star="1">⭐</label>
            </div>
            <input type="submit" value="Submit Quick Rating" className="quick-rating-submit" data-submit="quick" />
          </form>

          {/* Photo Review Form */}
          <form className="photo-review-form" data-review-type="photo">
            <h3>Add Photos to Your Review</h3>
            <input type="file" name="review-photos" multiple accept="image/*" data-upload="photos" />
            <input type="text" name="photo-caption" placeholder="Describe your photos..." />
            <div className="photo-options">
              <label>
                <input type="checkbox" name="allow-sharing" data-permission="sharing" />
                Allow FastBite to share my photos
              </label>
              <label>
                <input type="checkbox" name="social-media" data-platform="social" />
                Post to social media
              </label>
            </div>
            <button type="submit" id="photo-review-submit" className="photo-submit-btn">Upload Photos</button>
          </form>

          {/* Survey Form */}
          <div className="customer-survey">
            <h3>Customer Experience Survey</h3>
            <form className="survey-form" data-survey="experience" id="customer-survey">
              <div className="survey-question">
                <label>How often do you order from FastBite?</label>
                <select name="frequency" data-question="frequency" required>
                  <option value="">Select frequency</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="rarely">Rarely</option>
                </select>
              </div>
              <div className="survey-question">
                <label>What's your favorite menu category?</label>
                <div className="checkbox-group">
                  <label><input type="checkbox" name="favorite" value="burgers" data-category="burgers" /> Burgers</label>
                  <label><input type="checkbox" name="favorite" value="pizza" data-category="pizza" /> Pizza</label>
                  <label><input type="checkbox" name="favorite" value="drinks" data-category="drinks" /> Drinks</label>
                  <label><input type="checkbox" name="favorite" value="desserts" data-category="desserts" /> Desserts</label>
                </div>
              </div>
              <textarea name="suggestions" placeholder="Any suggestions for improvement?" rows="3" data-feedback="suggestions"></textarea>
              <input type="submit" value="Complete Survey" className="survey-submit" data-action="survey" />
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reviews;
