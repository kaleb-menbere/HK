// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="nfp-page">
      <Header />
      
      <main className="nfp-main">
        <div className="gnr-container">
          <div className="nfp-content">
            <div className="nfp-icon">😕</div>
            <h1 className="nfp-title">404 - Page Not Found</h1>
            <p className="nfp-text">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="nfp-actions">
              <Link to="/" className="nfp-btn nfp-btn--primary">
                Back to Home
              </Link>
              <Link to="/menu" className="nfp-btn nfp-btn--secondary">
                View Our Menu
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;