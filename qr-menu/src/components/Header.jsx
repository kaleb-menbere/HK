// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Header = ({ cartCount = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled past 50px
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Close mobile menu on scroll
      if (isMobileMenuOpen && Math.abs(currentScrollY - lastScrollY.current) > 10) {
        setIsMobileMenuOpen(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    // Close mobile menu when clicking outside
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && 
          mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) &&
          !event.target.closest('.grm-mobile-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const contactInfo = [
    { icon: <FaPhoneAlt />, text: 'Call: (+1) 555-1234', href: 'tel:+15551234' },
    { icon: <FaMapMarkerAlt />, text: '123 Food Street, New York', href: '#' },
    { icon: <FaClock />, text: 'Open: Mon-Sun 8AM - 10PM', href: '#' }
  ];

  const navItems = [
    { label: 'Home', path: '/', active: true },
    { label: 'Our Menu', path: '/menu' },
    { label: 'About Us', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Contact Bar */}
      <div className={`grm-header-contact ${isMobileMenuOpen ? 'grm-contact-hidden' : ''}`}>
        <div className="grm-header-container">
          <div className="grm-contact-wrapper">
            <div className="grm-contact-items">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.href} className="grm-contact-link">
                  <span className="grm-contact-icon">{item.icon}</span>
                  <span className="grm-contact-label">{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`grm-main-header ${isScrolled ? 'grm-header-scrolled' : ''} ${isMobileMenuOpen ? 'grm-header-mobile-open' : ''}`}>
        <div className="grm-header-container">
          <div className="grm-header-content">
            {/* Logo */}
            <div className="grm-logo-section">
              <div className="grm-logo">
                <span className="grm-logo-main">Gourmet</span>
                <span className="grm-logo-sub">RESTAURANT</span>
              </div>
            </div>

            {/* Navigation */}
            <nav 
              ref={mobileMenuRef}
              className={`grm-navigation ${isMobileMenuOpen ? 'grm-nav-open' : ''}`}
              aria-hidden={!isMobileMenuOpen}
            >
              <div className="grm-mobile-menu-header">
                <div className="grm-mobile-logo">
                  {/* <span className="grm-logo-main">Gourmet</span>
                  <span className="grm-logo-sub">RESTAURANT</span> */}
                </div>
                <br></br><br></br>
              </div>
              
              <ul className="grm-nav-list">
                {navItems.map((item, index) => (
                  <li key={index} className="grm-nav-item">
                    <a 
                      href={item.path} 
                      className={`grm-nav-link ${item.active ? 'grm-nav-active' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-current={item.active ? 'page' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="grm-mobile-contact">
                {contactInfo.map((item, index) => (
                  <a key={index} href={item.href} className="grm-mobile-contact-link">
                    <span className="grm-contact-icon">{item.icon}</span>
                    <span className="grm-contact-label">{item.text}</span>
                  </a>
                ))}
              </div>
              
              <div className="grm-mobile-cart">
                <button className="grm-cart-button">
                  <FiShoppingCart className="grm-cart-icon" />
                  <span className="grm-cart-label">View Cart</span>
                  {cartCount > 0 && (
                    <span className="grm-cart-count">{cartCount}</span>
                  )}
                </button>
                <div className="grm-cart-total">
                  <span className="grm-cart-amount">$0.00</span>
                </div>
              </div>
            </nav>

            {/* Actions */}
            <div className="grm-header-actions">
              {/* Cart */}
              <div className="grm-cart-container">
                <button className="grm-cart-button">
                  <FiShoppingCart className="grm-cart-icon" />
                  <span className="grm-cart-label">Cart</span>
                  {cartCount > 0 && (
                    <span className="grm-cart-count">{cartCount}</span>
                  )}
                </button>
                <div className="grm-cart-total">
                  <span className="grm-cart-amount">$0.00</span>
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                className="grm-mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {isMobileMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;