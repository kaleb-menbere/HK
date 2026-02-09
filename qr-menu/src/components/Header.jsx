// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css';
import { FiShoppingCart, FiUser, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Header = ({ cartCount = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topBarInfo = [
    { icon: <FaPhoneAlt />, text: '(+1) 555-1234', href: 'tel:+15551234' },
    { icon: <FaMapMarkerAlt />, text: '123 Food Street, New York', href: '#' },
    { icon: <FaClock />, text: 'Mon-Sun: 8AM - 10PM', href: '#' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-info">
              {topBarInfo.map((item, index) => (
                <a key={index} href={item.href} className="top-bar-item">
                  <span className="top-bar-icon">{item.icon}</span>
                  <span className="top-bar-text">{item.text}</span>
                </a>
              ))}
            </div>
            <div className="social-links">
              <a href="#" className="social-link">FB</a>
              <a href="#" className="social-link">IG</a>
              <a href="#" className="social-link">TW</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo-container">
              <div className="logo">
                <span className="logo-text">Gourmet</span>
                <span className="logo-subtext">BISTRO</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
              <ul className="nav-list">
                <li className="nav-item"><a href="/" className="nav-link active">Home</a></li>
                <li className="nav-item"><a href="/menu" className="nav-link">Menu</a></li>
                <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
                <li className="nav-item"><a href="/reservation" className="nav-link">Reservation</a></li>
                <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
              </ul>
            </nav>

            {/* Right Actions */}
            <div className="header-actions">
              {/* Search */}
              <div className="search-container">
                <FiSearch className="search-icon" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* User Account */}
              <button className="icon-btn account-btn">
                <FiUser className="icon" />
                <span className="btn-text">Account</span>
              </button>

              {/* Cart */}
              <button className="icon-btn cart-btn">
                <FiShoppingCart className="icon" />
                <span className="btn-text">Cart</span>
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button 
                className="mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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