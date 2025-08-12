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
        </div>
      </div>
    </div>
  );
};

export default About;
