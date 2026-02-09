// src/components/CartSidebar.jsx
import React from 'react';
import { FiX, FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import './CartSidebar.css';

const CartSidebar = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, total, itemCount }) => {
  return (
    <div className={`ct-sb ${isOpen ? 'ct-sb--open' : ''}`}>
      <div className="ct-sb__overlay" onClick={onClose}></div>
      <div className="ct-sb__content">
        <div className="ct-sb__header">
          <h3 className="ct-sb__title">
            Your Cart
            <span className="ct-sb__count">{itemCount} items</span>
          </h3>
          <button className="ct-sb__close" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="ct-sb__body">
          {items.length === 0 ? (
            <div className="ct-sb__empty">
              <div className="ct-sb__empty-icon">🛒</div>
              <p>Your cart is empty</p>
              <small>Add some delicious items from our menu</small>
            </div>
          ) : (
            <div className="ct-sb__items">
              {items.map(item => (
                <div key={item.id} className="ct-sb__item">
                  <div className="ct-sb__item-info">
                    <h4 className="ct-sb__item-name">{item.name}</h4>
                    <p className="ct-sb__item-price">${item.price.toFixed(2)} each</p>
                  </div>
                  
                  <div className="ct-sb__item-controls">
                    <div className="ct-sb__qty">
                      <button 
                        className="ct-sb__qty-btn"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      >
                        <FiMinus />
                      </button>
                      <span className="ct-sb__qty-value">{item.quantity}</span>
                      <button 
                        className="ct-sb__qty-btn"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <FiPlus />
                      </button>
                    </div>
                    
                    <div className="ct-sb__item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    
                    <button 
                      className="ct-sb__remove"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="ct-sb__footer">
            <div className="ct-sb__summary">
              <div className="ct-sb__summary-row">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="ct-sb__summary-row">
                <span>Tax (8%)</span>
                <span>${(total * 0.08).toFixed(2)}</span>
              </div>
              <div className="ct-sb__summary-row ct-sb__summary-row--total">
                <span>Total</span>
                <span>${(total * 1.08).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="ct-sb__actions">
              <button className="ct-sb__clear" onClick={() => items.forEach(item => onRemoveItem(item.id))}>
                Clear Cart
              </button>
              <button className="ct-sb__checkout" onClick={() => alert('Please call us to place your order!')}>
                Call to Order
              </button>
            </div>
            
            <div className="ct-sb__note">
              <small>
                💡 Note: Please call (+1) 555-1234 to place your order, 
                or show this cart to our staff when visiting.
              </small>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;