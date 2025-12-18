import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Get in Touch with Us</h1>
      <p className="sub-text">
        Have any questions about our products? Our support team is ready to help you 24/7!
      </p>

      <div className="contact-box">
        <form className="contact-form">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" required />

          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Phone Number</label>
          <input type="tel" placeholder="+91 XXXXX XXXXX" />

          <label>Message</label>
          <textarea rows="5" placeholder="Tell us how we can help..." required></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>📍 Visit Us</h3>
          <p>Srinesh Electronics<br />
          Opposite to IT Park,<br />
          Chennai - 600001<br />
          Tamil Nadu, India</p>

          <h3>📞 Call Us</h3>
          <p>+91 98765 43210<br />
          +91 44-XXXX-XXXX<br />
          Mon-Sun: 9 AM - 10 PM</p>

          <h3>✉ Email</h3>
          <p>support@srineshelectronics.com<br />
          sales@srineshelectronics.com</p>

          <h3>🕐 Hours</h3>
          <p>Monday - Friday: 9 AM - 9 PM<br />
          Saturday - Sunday: 10 AM - 8 PM<br />
          Holidays: 10 AM - 6 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
