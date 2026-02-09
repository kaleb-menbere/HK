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

  // For list view
  if (viewMode === 'list') {
    return (
      <div className="mit-item mit-item--list">
        <div className="mit-item__image">
          <img src={item.image} alt={item.name} loading="lazy" />
        </div>
        <div className="mit-item__content">
          <div className="mit-item__header">
            <div>
              <h3 className="mit-item__name">{item.name}</h3>
              {item.popular && (
                <div className="mit-item__badge">
                  <FiStar className="mit-item__badge-icon" />
                  <span>Popular</span>
                </div>
              )}
            </div>
            <span className="mit-item__price">${item.price.toFixed(2)}</span>
          </div>
          
          <p className="mit-item__description">{item.description}</p>
          
          <div className="mit-item__footer">
            <button 
              className={`mit-item__like ${isLiked ? 'mit-item__like--active' : ''}`}
              onClick={() => setIsLiked(!isLiked)}
              aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
            >
              <FiHeart className="mit-item__like-icon" />
            </button>
            
            <div className="mit-item__controls">
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
              
              <button className="mit-item__add-btn" onClick={handleAddToCart}>
                <FiShoppingCart className="mit-item__add-icon" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default grid view
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
        
        <p className="mit-item__description">{item.description}</p>
        
        <div className="mit-item__footer">
          {/* Quantity Selector */}
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
};

export default MenuItem;