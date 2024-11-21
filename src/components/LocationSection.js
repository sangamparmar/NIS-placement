import React from 'react';
import './LocationSection.css';

const LocationSection = () => {
  return (
    <div className="location-section">
      <div className="container">
        <div className="location-header">
          <h2>Our Location</h2>
          <p>Visit us at our office or get in touch with us through the form below.</p>
        </div>
        <div className="location-content">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.123456789012!2d76.123456789012!3d30.123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911234567890123%3A0x1234567890123456!2sWinsome%20Textile%20Industries%20Ltd!5e0!3m2!1sen!2sin!4v1633075271234!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Address:</strong> Winsome Textile Industries Ltd, 1, Industrial Area, Baddi, Solan, Himachal Pradesh 173205, India</p>
            <p><strong>Phone:</strong> +91 12345 67890</p>
            <p><strong>Email:</strong> info@winsometextile.com</p>
          </div>
        </div>
        <div className="contact-form">
          <h3>Get in Touch</h3>
          <form action="https://formspree.io/f/mnnqzdkw" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
