// src/pages/MenuPage.jsx
import React, { useState, useMemo, useCallback } from 'react';
import Header from '../../components/Header';
import CategoryNav from '../../components/CategoryNav';
import MenuItem from '../../components/MenuItem/MenuItem';
import CartSidebar from '../../components/CartSidebar';
import './MenuPage.css';
import { useMenuData } from '../../hooks/useMenuData';
import { FiFilter, FiGrid, FiList, FiShoppingCart } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';

const MenuPage = () => {
  const { categories, items, loading, error } = useMenuData();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('default'); // 'default', 'price-low', 'price-high', 'name'

  // Filter and sort items with useMemo to prevent unnecessary recalculations
  const sortedItems = useMemo(() => {
    // Filter items by category
    const filteredItems = selectedCategory === 'all' 
      ? items 
      : items.filter(item => item.categoryId === selectedCategory);

    // Sort items
    return [...filteredItems].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }, [items, selectedCategory, sortBy]);

  // Add item to cart with useCallback
  const addToCart = useCallback((item, quantity) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity }];
      }
    });
  }, []);

  // Remove item from cart
  const removeFromCart = useCallback((itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  }, []);

  // Update item quantity
  const updateQuantity = useCallback((itemId, quantity) => {
    setCartItems(prev => {
      if (quantity <= 0) {
        return prev.filter(item => item.id !== itemId);
      }
      return prev.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      );
    });
  }, []);

  // Calculate cart totals with useMemo
  const { cartTotal, cartCount } = useMemo(() => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    return { cartTotal: total, cartCount: count };
  }, [cartItems]);

  // Handle category selection
  const handleCategorySelect = useCallback((categoryId) => {
    setSelectedCategory(categoryId);
  }, []);

  // Handle view mode change
  const handleViewModeChange = useCallback((mode) => {
    setViewMode(mode);
  }, []);

  // Handle sort change
  const handleSortChange = useCallback((e) => {
    setSortBy(e.target.value);
  }, []);

  return (
    <div className="mnp-page">
      <Header cartCount={cartCount} />
      
      {/* Hero Section */}
      <section className="mnp-hero">
        <div className="mnp-hero__overlay"></div>
        <div className="mnp-hero__content">
          <h1 className="mnp-hero__title">Our Menu</h1>
          <p className="mnp-hero__subtitle">Discover our carefully crafted dishes made with the finest ingredients</p>
          <div className="mnp-hero__stats">
            <div className="mnp-hero__stat">
              <span className="mnp-stat__number">{items.length}</span>
              <span className="mnp-stat__label">Menu Items</span>
            </div>
            <div className="mnp-hero__stat">
              <span className="mnp-stat__number">{categories.length}</span>
              <span className="mnp-stat__label">Categories</span>
            </div>
            <div className="mnp-hero__stat">
              <span className="mnp-stat__number">50+</span>
              <span className="mnp-stat__label">Daily Fresh</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Menu Content */}
      <main className="mnp-main">
        <div className="gnr-container">
          {/* Sticky Category Navigation */}
          <div className="mnp-category-sticky">
            <CategoryNav 
              categories={categories} 
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
          </div>

          {/* Menu Controls - Now scrolls with content */}
          <div className="mnp-controls">
            <div className="mnp-controls__content">
              <div className="mnp-view-toggle" data-view-mode={viewMode}>
                <button 
                  className={`mnp-view-btn ${viewMode === 'grid' ? 'mnp-view-btn--active' : ''}`}
                  onClick={() => handleViewModeChange('grid')}
                  aria-label="Grid view"
                >
                  <FiGrid />
                  <span>Grid</span>
                </button>
                <button 
                  className={`mnp-view-btn ${viewMode === 'list' ? 'mnp-view-btn--active' : ''}`}
                  onClick={() => handleViewModeChange('list')}
                  aria-label="List view"
                >
                  <FiList />
                  <span>List</span>
                </button>
              </div>
              
              <div className="mnp-sort">
                <FiFilter className="mnp-sort__icon" />
                <select 
                  className="mnp-sort__select"
                  value={sortBy}
                  onChange={handleSortChange}
                  aria-label="Sort menu items"
                >
                  <option value="default">Sort by</option>
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                </select>
              </div>
            </div>
          </div>
          
          {loading ? (
            <div className="mnp-loading">
              <div className="mnp-loading__spinner"></div>
              <p>Loading menu...</p>
            </div>
          ) : error ? (
            <div className="mnp-error">
              <p>Error loading menu. Please try again later.</p>
            </div>
          ) : (
            <div className={`mnp-items mnp-items--${viewMode}`}>
              {sortedItems.map(item => (
                <MenuItem 
                  key={item.id} 
                  item={item} 
                  onAddToCart={addToCart}
                  viewMode={viewMode}
                />
              ))}
            </div>
          )}

          {/* Empty State */}
          {sortedItems.length === 0 && !loading && !error && (
            <div className="mnp-empty">
              <div className="mnp-empty__icon">🍽️</div>
              <h3>No items found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </main>

      {/* Cart Sidebar */}
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        total={cartTotal}
        itemCount={cartCount}
      />

      {/* Floating Cart Button (for mobile) */}
      {cartCount > 0 && (
        <button 
          className="mnp-cart-btn" 
          onClick={() => setIsCartOpen(true)}
          aria-label="Open cart"
        >
          <FiShoppingCart />
          <span className="mnp-cart-btn__count">{cartCount}</span>
          <span className="mnp-cart-btn__total">${cartTotal.toFixed(2)}</span>
        </button>
      )}

      {/* Footer CTA */}
      <footer className="mnp-footer">
        <div className="gnr-container">
          <div className="mnp-footer__content">
            <h2 className="mnp-footer__title">Ready to Order?</h2>
            <p className="mnp-footer__text">Call us or visit our restaurant to place your order</p>
            <div className="mnp-footer__actions">
              <a href="tel:+15551234" className="mnp-footer__btn mnp-footer__btn--primary">
                <FaPhoneAlt />
                <span>Call Now</span>
              </a>
              <button 
                className="mnp-footer__btn mnp-footer__btn--secondary" 
                onClick={() => setIsCartOpen(true)}
                disabled={cartCount === 0}
              >
                {cartCount > 0 ? 'View Your Cart' : 'Your Cart is Empty'}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MenuPage;