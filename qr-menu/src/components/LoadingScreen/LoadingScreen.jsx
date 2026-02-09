// Create a new file: src/components/LoadingScreen/LoadingScreen.jsx
import React from 'react';
import LoadingSpinner from '../Shared/LoadingSpinner';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-screen__content">
        <div className="loading-screen__logo">
          <div className="loading-screen__logo-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1V4" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" />
              <path d="M16 1V4" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 8H21" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" />
              <path d="M19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4Z" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" />
              <path d="M7 12H11" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" />
              <path d="M7 16H17" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h1 className="loading-screen__logo-text">Gourmet Restaurant</h1>
        </div>
        
        <div className="loading-screen__spinner">
          <LoadingSpinner size="xlarge" type="ring" color="#ff6b35" />
        </div>
        
        <div className="loading-screen__message">
          <p className="loading-screen__text">Preparing your dining experience</p>
          <div className="loading-screen__progress">
            <div className="loading-screen__progress-bar"></div>
          </div>
        </div>
        
        <div className="loading-screen__slogan">
          <p>Savor every moment</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;