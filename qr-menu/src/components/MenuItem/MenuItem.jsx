// src/components/MenuItem/MenuItem.jsx
import React, { useState } from 'react';
import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';
import './MenuItem.css';

const MenuItem = ({ item, onAddToCart, viewMode = 'grid' }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(item, quantity);
      // Reset quantity after adding to cart
      setQuantity(1);
    }
  };

  // For list view - optimized for mobile
  if (viewMode === 'list') {
    return (
      <div className="mit-item mit-item--list">
        {/* Popular Badge - Mobile list */}
        {item.popular && (
          <div className="mit-item__badge">
            <FiStar className="mit-item__badge-icon" />
            <span>Popular</span>
          </div>
        )}

        {/* Image */}
        <div className="mit-item__image">
          <img src={item.image} alt={item.name} loading="lazy" />
          {/* Quick View Overlay - only on desktop */}
          <div className="mit-item__overlay">
            <FiShoppingCart className="mit-item__overlay-icon" />
            <span>Quick View</span>
          </div>
        </div>

        {/* Content */}
        <div className="mit-item__content">
          <div className="mit-item__header">
            <h3 className="mit-item__name">{item.name}</h3>
            <div className="mit-item__pricing">
              <span className="mit-item__price">${item.price.toFixed(2)}</span>
              {/* Like Button - in header for mobile list */}
              <button 
                className={`mit-item__like ${isLiked ? 'mit-item__like--active' : ''}`}
                onClick={() => setIsLiked(!isLiked)}
                aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
              >
                <FiHeart className="mit-item__like-icon" />
              </button>
            </div>
          </div>
          
          {/* Description - hidden on mobile list, shown on desktop */}
          <p className="mit-item__description">{item.description}</p>
          
          <div className="mit-item__footer">
            {/* Quantity Selector - full width on mobile, inline on desktop */}
            <div className="mit-item__qty">
              <button 
                className="mit-item__qty-btn" 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="mit-item__qty-value">{quantity}</span>
              <button 
                className="mit-item__qty-btn"
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            
            {/* Add to Cart Button */}
            <button className="mit-item__add-btn" onClick={handleAddToCart}>
              <FiShoppingCart className="mit-item__add-icon" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default grid view - optimized for 3 columns on mobile
  return (
    <div className="mit-item mit-item--grid">
      {/* Like Button */}
      <button 
        className={`mit-item__like ${isLiked ? 'mit-item__like--active' : ''}`}
        onClick={() => setIsLiked(!isLiked)}
        aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
      >
        <FiHeart className="mit-item__like-icon" />
      </button>

      {/* Popular Badge */}
      {item.popular && (
        <div className="mit-item__badge">
          <FiStar className="mit-item__badge-icon" />
          <span>Popular</span>
        </div>
      )}

      {/* Image */}
      <div className="mit-item__image">
        <img src={item.image} alt={item.name} loading="lazy" />
        {/* Quick View Overlay - hidden on mobile grid */}
        <div className="mit-item__overlay">
          <FiShoppingCart className="mit-item__overlay-icon" />
          <span>Quick View</span>
        </div>
      </div>

      {/* Content */}
      <div className="mit-item__content">
        <div className="mit-item__header">
          <h3 className="mit-item__name">{item.name}</h3>
          <span className="mit-item__price">${item.price.toFixed(2)}</span>
        </div>
        
        {/* Description - hidden on mobile grid */}
        <p className="mit-item__description">{item.description}</p>
        
        <div className="mit-item__footer">
          {/* Quantity Selector - simplified on mobile grid */}
          <div className="mit-item__qty">
            <button 
              className="mit-item__qty-btn" 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="mit-item__qty-value">{quantity}</span>
            <button 
              className="mit-item__qty-btn"
              onClick={() => setQuantity(quantity + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button - icon only on mobile grid */}
          <button className="mit-item__add-btn" onClick={handleAddToCart}>
            <FiShoppingCart className="mit-item__add-icon" />
            <span className="mit-item__add-text">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;