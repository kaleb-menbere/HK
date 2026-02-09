// src/pages/GalleryPage.jsx
import React, { useState } from 'react';
import Header from '../../components/Header';
import './GalleryPage.css';
import { FiSearch, FiGrid, FiList, FiFilter, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'food', name: 'Food & Dishes' },
    { id: 'interior', name: 'Restaurant Interior' },
    { id: 'events', name: 'Events & Parties' },
    { id: 'team', name: 'Our Team' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Delicious Pizza',
      category: 'food',
      title: 'Margherita Pizza',
      description: 'Fresh basil and mozzarella'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Restaurant Interior',
      category: 'interior',
      title: 'Modern Dining Area',
      description: 'Elegant and comfortable seating'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Dessert Platter',
      category: 'food',
      title: 'Dessert Selection',
      description: 'Sweet treats for everyone'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Bar Area',
      category: 'interior',
      title: 'Cocktail Bar',
      description: 'Craft cocktails and fine wines'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Chef Cooking',
      category: 'team',
      title: 'Chef in Action',
      description: 'Mastering culinary techniques'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Burger Special',
      category: 'food',
      title: 'Signature Burger',
      description: 'Juicy beef with special sauce'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Wine Collection',
      category: 'interior',
      title: 'Wine Cellar',
      description: 'Extensive wine selection'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Salmon Dish',
      category: 'food',
      title: 'Herb-Crusted Salmon',
      description: 'Atlantic salmon with lemon butter'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Dining Event',
      category: 'events',
      title: 'Private Dining',
      description: 'Exclusive events and parties'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Appetizers',
      category: 'food',
      title: 'Chicken Wings',
      description: 'Crispy wings with buffalo sauce'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Restaurant Exterior',
      category: 'interior',
      title: 'Entrance',
      description: 'Welcoming atmosphere'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1551509134-eb7c5ea9113c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Birthday Party',
      category: 'events',
      title: 'Birthday Celebration',
      description: 'Special occasions made memorable'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let nextIndex;
    
    if (direction === 'prev') {
      nextIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      nextIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div className="glp-page">
      <Header />
      
      {/* Hero Section */}
      <section className="glp-hero">
        <div className="glp-hero__overlay"></div>
        <div className="glp-hero__content">
          <h1 className="glp-hero__title">Photo Gallery</h1>
          <p className="glp-hero__subtitle">Explore our restaurant through photos</p>
        </div>
      </section>

      {/* Gallery Controls */}
      <div className="glp-controls">
        <div className="gnr-container">
          <div className="glp-controls__content">
            <div className="glp-filters">
              <FiFilter className="glp-filters__icon" />
              <div className="glp-categories">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`glp-category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="glp-view-options">
              <div className="glp-view-toggle">
                <button 
                  className={`glp-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <FiGrid />
                  <span>Grid</span>
                </button>
                <button 
                  className={`glp-view-btn ${viewMode === 'masonry' ? 'active' : ''}`}
                  onClick={() => setViewMode('masonry')}
                >
                  <FiList />
                  <span>Masonry</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <main className="glp-main">
        <div className="gnr-container">
          <div className={`glp-gallery glp-gallery--${viewMode}`}>
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                className="glp-gallery-item"
                onClick={() => openLightbox(image)}
              >
                <div className="glp-gallery-image">
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <div className="glp-gallery-overlay">
                    <FiSearch className="glp-overlay-icon" />
                  </div>
                </div>
                <div className="glp-gallery-info">
                  <h3 className="glp-gallery-title">{image.title}</h3>
                  <p className="glp-gallery-description">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="glp-empty">
              <div className="glp-empty__icon">📷</div>
              <h3>No photos found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div className="glp-lightbox" onClick={closeLightbox}>
          <button 
            className="glp-lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          
          <button 
            className="glp-lightbox-nav glp-lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            aria-label="Previous image"
          >
            <FiChevronLeft />
          </button>
          
          <div className="glp-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="glp-lightbox-info">
              <h3 className="glp-lightbox-title">{selectedImage.title}</h3>
              <p className="glp-lightbox-description">{selectedImage.description}</p>
              <div className="glp-lightbox-category">
                {categories.find(cat => cat.id === selectedImage.category)?.name}
              </div>
            </div>
          </div>
          
          <button 
            className="glp-lightbox-nav glp-lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            aria-label="Next image"
          >
            <FiChevronRight />
          </button>
        </div>
      )}

      {/* Footer CTA */}
      <footer className="glp-footer">
        <div className="gnr-container">
          <div className="glp-footer__content">
            <h2 className="glp-footer__title">Share Your Experience</h2>
            <p className="glp-footer__text">Tag us in your photos using #GourmetRestaurant</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GalleryPage;