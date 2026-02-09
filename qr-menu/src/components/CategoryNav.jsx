// src/components/CategoryNav.jsx
import React, { useRef, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './CategoryNav.css';

const CategoryNav = ({ categories = [], selectedCategory, onSelectCategory }) => {
  const scrollContainerRef = useRef(null);
  
  // Add "All" category option
  const allCategories = [
    { id: 'all', name: 'All Menu', description: 'Everything we offer' },
    ...categories
  ];

  // Scroll functionality
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Auto-scroll to active category
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector('.category-btn.active');
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [selectedCategory]);

  return (
    <div className="category-nav">
      <div className="category-nav-container">
        {/* Left Scroll Button */}
        <button 
          className="category-scroll-btn category-scroll-btn--left"
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <FiChevronLeft />
        </button>

        {/* Categories */}
        <div className="category-scroll" ref={scrollContainerRef}>
          {allCategories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => onSelectCategory(category.id)}
              aria-label={`Select ${category.name} category`}
              aria-current={selectedCategory === category.id ? 'true' : 'false'}
            >
              <div className="category-icon">
                {getCategoryIcon(category.id)}
              </div>
              <span className="category-name">{category.name}</span>
              {category.description && (
                <span className="category-description">{category.description}</span>
              )}
            </button>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button 
          className="category-scroll-btn category-scroll-btn--right"
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <FiChevronRight />
        </button>
      </div>

      {/* Category Counter */}
      <div className="category-counter">
        <span className="category-counter__current">
          {allCategories.findIndex(cat => cat.id === selectedCategory) + 1}
        </span>
        <span className="category-counter__total">/ {allCategories.length}</span>
      </div>
    </div>
  );
};

// Helper function to get icons for categories
const getCategoryIcon = (categoryId) => {
  const icons = {
    'all': '🍽️',
    'appetizers': '🍟',
    'burgers': '🍔',
    'pizzas': '🍕',
    'fastfood': '🍗',
    'desserts': '🍰',
    'hotdrinks': '☕',
    'colddrinks': '🥤',
    'specials': '⭐'
  };
  return icons[categoryId] || '🍽️';
};

export default CategoryNav;