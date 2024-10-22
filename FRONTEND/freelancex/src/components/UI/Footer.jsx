// Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub,FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo">FREELANCEX</div>
        <div className="tagline">Freelance Smart, Get Paid</div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} FreelanceX. All rights reserved.
        </p>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
