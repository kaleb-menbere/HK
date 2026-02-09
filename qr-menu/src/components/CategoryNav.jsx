// src/components/CategoryNav.jsx
import React from 'react';
import './CategoryNav.css';

const CategoryNav = ({ categories = [], selectedCategory, onSelectCategory }) => {
  // Add "All" category option
  const allCategories = [
    { id: 'all', name: 'All Menu' },
    ...categories
  ];

  return (
    <div className="category-nav">
      <div className="category-nav-container">
        <div className="category-scroll">
          {allCategories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => onSelectCategory(category.id)}
            >
              <span className="category-name">{category.name}</span>
              {category.description && (
                <span className="category-description">{category.description}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;