import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: About */}
        <div className="footer-column">
          <h2 className="footer-logo">MERN Shop</h2>
          <p className="footer-description">
            Your one-stop shop for modern needs. Quality guaranteed.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/cart" className="footer-link">Cart</Link></li>
            <li><Link to="/order" className="footer-link">My Orders</Link></li>
            <li><Link to="/profile" className="footer-link">Profile</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact & Socials */}
        <div className="footer-column">
          <h3 className="footer-title">Contact</h3>
          <p className="footer-contact">support@mernshop.com</p>
          <p className="footer-contact">+91 6388251426</p>
          <div className="footer-socials">
            <a href="#"><FaFacebook className="social-icon" /></a>
            <a href="#"><FaInstagram className="social-icon" /></a>
            <a href="#"><FaTwitter className="social-icon" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MERN Shop. All rights reserved.
      </div>
    </footer>
  );
}
