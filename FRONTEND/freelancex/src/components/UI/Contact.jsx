// Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id='Contact'>
      <h2>Contact Us</h2>
      <p>Have any questions? We're here to help! Reach out to us for support or inquiries.</p>
      
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>Email: support@freelancex.com</p>
        <p>Phone: +91 123-456-7890</p>
      </div>
    </section>
  );
};

export default Contact;
