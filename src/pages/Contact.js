import React, { useState } from 'react';
import ErrorButton from '../components/ErrorButton';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-header">
          <h1>Contact FastBite</h1>
          <p className="lead">We'd love to hear from you! Get in touch with us today.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-details">
                <h3>Location</h3>
                <p>123 Food Street<br />
                Taste City, TC 12345<br />
                United States</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-details">
                <h3>Phone</h3>
                <p>Main: (555) 123-4567<br />
                Delivery: (555) 123-4568<br />
                Catering: (555) 123-4569</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📧</div>
              <div className="info-details">
                <h3>Email</h3>
                <p>info@fastbite.com<br />
                orders@fastbite.com<br />
                support@fastbite.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🕒</div>
              <div className="info-details">
                <h3>Hours</h3>
                <p>Mon-Thu: 11AM - 10PM<br />
                Fri-Sat: 11AM - 11PM<br />
                Sunday: 12PM - 9PM</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Issue</option>
                    <option value="catering">Catering Request</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>

        <div className="map-section">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <h3>🗺️ Interactive Map</h3>
              <p>123 Food Street, Taste City, TC 12345</p>
              <p>Click here to open in Google Maps</p>
            </div>
          </div>
        </div>

        {/* Contact Page Error Testing */}
        <div className="error-section">
          <h3>📞 Contact Page Error Testing</h3>
          <p>Test error scenarios for contact forms and communication:</p>
          
          <div className="error-button-group">
            <h4>Form & Communication Errors</h4>
            <ErrorButton errorType="validationError" buttonText="Form Validation Error" variant="warning" size="small" />
            <ErrorButton errorType="networkError" buttonText="Form Submit Error" variant="danger" size="small" />
            <ErrorButton errorType="api500" buttonText="Email Server Error" variant="warning" size="small" />
            <ErrorButton errorType="timeout" buttonText="Form Timeout" variant="outline" size="small" />
          </div>

          <div className="error-button-group">
            <h4>Location & Map Errors</h4>
            <ErrorButton errorType="api404" buttonText="Map API Error" variant="danger" size="small" />
            <ErrorButton errorType="permissionError" buttonText="Location Access" variant="dark" size="small" />
            <ErrorButton errorType="storageError" buttonText="Contact Storage" variant="outline" size="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
