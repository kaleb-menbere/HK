// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaHome, FaUtensils, FaInfoCircle, FaImages, FaEnvelope } from 'react-icons/fa';

const Header = ({ cartCount = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('#/');
  const mobileMenuRef = useRef(null);
  const lastScrollY = useRef(0);
  const location = useLocation();

  // Update active path based on hash
  useEffect(() => {
    const updateActivePath = () => {
      const currentHash = window.location.hash;
      setActivePath(currentHash || '#/');
    };

    // Initial update
    updateActivePath();

    // Listen for hash changes
    const handleHashChange = () => {
      updateActivePath();
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Also update when location changes (for React Router)
  useEffect(() => {
    const currentHash = window.location.hash;
    setActivePath(currentHash || '#/');
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      if (isMobileMenuOpen && Math.abs(currentScrollY - lastScrollY.current) > 10) {
        setIsMobileMenuOpen(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && 
          mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) &&
          !event.target.closest('.grm-mobile-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

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
    { icon: <FaMapMarkerAlt />, text: '123 Food Street, New York', href: '#/contact' },
    { icon: <FaClock />, text: 'Open: Mon-Sun 8AM - 10PM', href: '#/contact' }
  ];

  const navItems = [
    { 
      label: 'OUR Menu', 
      path: '#/menu', 
      icon: <FaUtensils /> 
    },
    { 
      label: 'About', 
      path: '#/about', 
      icon: <FaInfoCircle /> 
    },
    { 
      label: 'Gallery', 
      path: '#/gallery', 
    },
    { 
      label: 'Contact', 
      path: '#/contact', 
      icon: <FaEnvelope /> 
    }
  ];

  const isActive = (path) => {
    // For home page, check both #/ and empty hash
    if (path === '#/') {
      return activePath === '#/' || activePath === '';
    }
    return activePath === path;
  };

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Contact Bar - Hidden on Mobile */}
      <div className={`grm-header-contact ${isMobileMenuOpen ? 'grm-contact-hidden' : ''}`}>
        <div className="grm-header-container">
          <div className="grm-contact-wrapper">
            <div className="grm-contact-items">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  className="grm-contact-link"
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      window.location.hash = item.href;
                      setIsMobileMenuOpen(false);
                    }
                  }}
                >
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
              <a 
                href="#/" 
                className="grm-logo"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
              >
                <span className="grm-logo-main">Gourmet</span>
                <span className="grm-logo-sub">RESTAURANT</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav 
              ref={mobileMenuRef}
              className={`grm-navigation ${isMobileMenuOpen ? 'grm-nav-open' : ''}`}
              aria-hidden={!isMobileMenuOpen}
              id="mobile-navigation"
            >


              {/* Navigation Links */}
              <ul className="grm-nav-list">
                {navItems.map((item, index) => (
                  <li key={index} className="grm-nav-item">
                    <a 
                      href={item.path} 
                      className={`grm-nav-link ${isActive(item.path) ? 'grm-nav-active' : ''}`}
                      onClick={() => handleNavClick(item.path)}
                      aria-current={isActive(item.path) ? 'page' : undefined}
                    >
                      <span className="grm-nav-icon">{item.icon}</span>
                      <span className="grm-nav-label">{item.label}</span>
                      {isActive(item.path) && (
                        <span className="grm-nav-indicator" aria-hidden="true"></span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Mobile Contact Info */}
              <div className="grm-mobile-contact">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href} 
                    className="grm-mobile-contact-link"
                    onClick={(e) => {
                      if (item.href.startsWith('#')) {
                        e.preventDefault();
                        window.location.hash = item.href;
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    <span className="grm-contact-icon">{item.icon}</span>
                    <span className="grm-contact-label">{item.text}</span>
                  </a>
                ))}
              </div>
            </nav>

            {/* Actions */}
            <div className="grm-header-actions">
              {/* Cart */}
              <div className="grm-cart-container">
                <button 
                  className="grm-cart-button"
                  onClick={() => {
                    // Trigger cart opening logic here
                  }}
                  aria-label="Cart"
                >
                  <FiShoppingCart className="grm-cart-icon" />
                  {cartCount > 0 && (
                    <span className="grm-cart-count">{cartCount}</span>
                  )}
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                className="grm-mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {isMobileMenuOpen ? (
                  <>
                    <FiX />
                    <span className="sr-only">Close menu</span>
                  </>
                ) : (
                  <>
                    <FiMenu />
                    <span className="sr-only">Open menu</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;