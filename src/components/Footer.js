import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>FastBite</h3>
            <p>Delicious fast food delivered fresh to your door!</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/burgers">Burgers</a></li>
              <li><a href="/pizza">Pizza</a></li>
              <li><a href="/drinks">Drinks</a></li>
              <li><a href="/desserts">Desserts</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📞 (555) 123-4567</p>
            <p>📧 info@fastbite.com</p>
            <p>📍 123 Food Street, Taste City</p>
          </div>
          
          <div className="footer-section">
            <h4>Hours</h4>
            <p>Monday - Thursday: 11AM - 10PM</p>
            <p>Friday - Saturday: 11AM - 11PM</p>
            <p>Sunday: 12PM - 9PM</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 FastBite Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
