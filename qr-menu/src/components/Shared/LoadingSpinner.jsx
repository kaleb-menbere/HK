// Update components/Shared/LoadingSpinner.jsx
import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ 
  size = 'medium', 
  type = 'dots', 
  color = '#ff6b35',
  className = ''
}) => {
  const sizeClasses = {
    small: 'loading-spinner--small',
    medium: 'loading-spinner--medium',
    large: 'loading-spinner--large',
    xlarge: 'loading-spinner--xlarge'
  };

  const typeClasses = {
    dots: 'loading-spinner--dots',
    ring: 'loading-spinner--ring',
    pulse: 'loading-spinner--pulse',
    bars: 'loading-spinner--bars'
  };

  const spinnerClass = `loading-spinner ${sizeClasses[size]} ${typeClasses[type]} ${className}`.trim();

  const renderSpinner = () => {
    switch (type) {
      case 'dots':
        return (
          <div className="loading-spinner__dots">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className="loading-spinner__dot" 
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        );
      
      case 'ring':
        return (
          <div className="loading-spinner__ring-wrapper">
            <div 
              className="loading-spinner__ring" 
              style={{ borderColor: `${color} transparent transparent transparent` }}
            ></div>
          </div>
        );
      
      case 'pulse':
        return (
          <div 
            className="loading-spinner__pulse" 
            style={{ backgroundColor: color }}
          ></div>
        );
      
      case 'bars':
        return (
          <div className="loading-spinner__bars">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className="loading-spinner__bar" 
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        );
      
      default:
        return (
          <div className="loading-spinner__dots">
            <div className="loading-spinner__dot" style={{ backgroundColor: color }}></div>
            <div className="loading-spinner__dot" style={{ backgroundColor: color }}></div>
            <div className="loading-spinner__dot" style={{ backgroundColor: color }}></div>
          </div>
        );
    }
  };

  return <div className={spinnerClass}>{renderSpinner()}</div>;
};

export default LoadingSpinner;