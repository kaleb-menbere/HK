// src/pages/MenuPage.jsx
import React from 'react';
import Header from '../components/Header';
import CategoryNav from '../components/CategoryNav';
import MenuItem from '../components/MenuItem/MenuItem';
import './MenuPage.css';
import { useMenuData } from '../hooks/useMenuData';

const MenuPage = () => {
  const { categories, items, loading, error } = useMenuData();
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.categoryId === selectedCategory);

  return (
    <div className="menu-page">
      <Header cartCount={3} />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Savor the Flavor</h1>
          <p className="hero-subtitle">Experience culinary excellence with our handcrafted menu</p>
          <div className="hero-buttons">
            <button className="btn-primary">Order Now</button>
            <button className="btn-secondary">View Specials</button>
          </div>
        </div>
        
        {/* Floating Stats */}
        <div className="floating-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Dishes</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9</div>
            <div className="stat-label">Rating</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="menu-container">
        <CategoryNav 
          categories={categories} 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        
        {loading ? (
          <div className="loading-container">Loading menu...</div>
        ) : error ? (
          <div className="error-container">Error loading menu</div>
        ) : (
          <div className="menu-grid">
            {filteredItems.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Taste Perfection?</h2>
          <p>Book a table or order online for a delightful dining experience</p>
          <div className="cta-buttons">
            <button className="btn-primary btn-large">Book a Table</button>
            <button className="btn-outline btn-large">Order Online</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;