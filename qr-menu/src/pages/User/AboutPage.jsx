// src/pages/AboutPage.jsx
import React from 'react';
import Header from '../../components/Header';
import './AboutPage.css';
import { FaUsers, FaAward, FaLeaf, FaClock, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { GiChefToque } from 'react-icons/gi';
import { MdRestaurantMenu, MdEmail } from 'react-icons/md';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Chef Marco Rossi',
      role: 'Executive Chef',
      bio: 'With over 20 years of experience in Italian cuisine, Chef Marco brings authentic flavors from Italy.',
      image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Head Pastry Chef',
      bio: 'Specializing in French pastries and desserts, Sarah creates sweet masterpieces daily.',
      image: 'https://images.unsplash.com/photo-1567446537710-0e9b8d4d8c4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'James Wilson',
      role: 'Restaurant Manager',
      bio: 'Ensuring every guest receives exceptional service and a memorable dining experience.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const values = [
    {
      icon: <FaLeaf />,
      title: 'Fresh Ingredients',
      description: 'We source only the freshest, locally-sourced ingredients for our dishes.'
    },
    {
      icon: <GiChefToque />,
      title: 'Culinary Excellence',
      description: 'Our chefs are trained in both traditional and modern cooking techniques.'
    },
    {
      icon: <FaUsers />,
      title: 'Customer Focus',
      description: 'Every dish is crafted with our customers\' satisfaction in mind.'
    },
    {
      icon: <MdRestaurantMenu />,
      title: 'Menu Innovation',
      description: 'We regularly update our menu to bring you exciting new flavors.'
    }
  ];

  const awards = [
    {
      year: '2023',
      title: 'Best Fine Dining',
      source: 'Food & Wine Magazine'
    },
    {
      year: '2022',
      title: 'Excellence in Service',
      source: 'Restaurant Association'
    },
    {
      year: '2023',
      title: 'Top 10 Restaurants',
      source: 'City Dining Guide'
    },
    {
      year: '2022',
      title: 'Best Wine Selection',
      source: 'Wine Enthusiast'
    }
  ];

  return (
    <div className="abp-page">
      <Header />
      
      {/* Hero Section */}
      <section className="abp-hero">
        <div className="abp-hero__overlay"></div>
        <div className="abp-hero__content">
          <div className="abp-hero__badge">Since 1995</div>
          <h1 className="abp-hero__title">Crafting Memorable Dining Experiences</h1>
          <p className="abp-hero__subtitle">Where passion meets perfection on every plate</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="abp-story" id="our-story">
        <div className="gnr-container">
          <div className="abp-section-header">
            <h2 className="abp-section-title">Our Journey</h2>
            <p className="abp-section-subtitle">From humble beginnings to culinary excellence</p>
          </div>
          <div className="abp-story__content">
            <div className="abp-story__image">
              <div className="abp-story__image-frame">
                <img 
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Restaurant interior" 
                />
              </div>
            </div>
            <div className="abp-story__text">
              <div className="abp-story__year">1995</div>
              <h3 className="abp-story__title">A Family Dream</h3>
              <p className="abp-story__description">
                What began as a small family-owned bistro has blossomed into a culinary landmark. 
                Our founder's vision was simple: create a space where food is more than sustenance—it's an experience.
              </p>
              <div className="abp-story__stats">
                <div className="abp-story__stat">
                  <span className="abp-story__stat-number">25+</span>
                  <span className="abp-story__stat-label">Years of Excellence</span>
                </div>
                <div className="abp-story__stat">
                  <span className="abp-story__stat-number">50+</span>
                  <span className="abp-story__stat-label">Local Suppliers</span>
                </div>
              </div>
              <p className="abp-story__description">
                Today, we continue to honor our roots while embracing innovation. Every dish tells a story, 
                and every meal is an opportunity to create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="abp-values">
        <div className="gnr-container">
          <div className="abp-section-header">
            <h2 className="abp-section-title">Our Philosophy</h2>
            <p className="abp-section-subtitle">The principles that guide every plate we serve</p>
          </div>
          <div className="abp-values__grid">
            {values.map((value, index) => (
              <div key={index} className="abp-value__card" data-aos="fade-up">
                <div className="abp-value__icon-wrapper">
                  {value.icon}
                </div>
                <h3 className="abp-value__title">{value.title}</h3>
                <p className="abp-value__description">{value.description}</p>
                <div className="abp-value__decorative-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="abp-team">
        <div className="gnr-container">
          <div className="abp-section-header">
            <h2 className="abp-section-title">Meet The Masters</h2>
            <p className="abp-section-subtitle">The passionate team behind your dining experience</p>
          </div>
          <div className="abp-team__grid">
            {teamMembers.map(member => (
              <div key={member.id} className="abp-team__member" data-aos="fade-up">
                <div className="abp-team__image">
                  <img src={member.image} alt={member.name} />
                  <div className="abp-team__image-overlay"></div>
                </div>
                <div className="abp-team__info">
                  <h3 className="abp-team__name">{member.name}</h3>
                  <p className="abp-team__role">{member.role}</p>
                  <p className="abp-team__bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="abp-awards">
        <div className="gnr-container">
          <div className="abp-section-header">
            <h2 className="abp-section-title">Recognition & Awards</h2>
            <p className="abp-section-subtitle">Celebrating excellence in culinary arts</p>
          </div>
          <div className="abp-awards__grid">
            {awards.map((award, index) => (
              <div key={index} className="abp-award__card" data-aos="fade-up">
                <div className="abp-award__header">
                  <FaAward className="abp-award__icon" />
                  <span className="abp-award__year">{award.year}</span>
                </div>
                <h3 className="abp-award__title">{award.title}</h3>
                <p className="abp-award__source">{award.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="abp-contact">
        <div className="gnr-container">
          <div className="abp-contact__content">
            <div className="abp-contact__info">
              <h2 className="abp-contact__title">Visit Our Home</h2>
              <p className="abp-contact__description">
                We welcome you to experience our warm atmosphere, exceptional service, and unforgettable cuisine.
              </p>
              
              <div className="abp-contact__details">
                <div className="abp-contact__detail">
                  <FaMapMarkerAlt className="abp-contact__icon" />
                  <div>
                    <h4>Location</h4>
                    <p>123 Gourmet Street</p>
                    <p>Food City, FC 10001</p>
                  </div>
                </div>
                
                <div className="abp-contact__detail">
                  <FaClock className="abp-contact__icon" />
                  <div>
                    <h4>Opening Hours</h4>
                    <p><strong>Mon - Fri:</strong> 11:00 AM - 10:00 PM</p>
                    <p><strong>Sat - Sun:</strong> 10:00 AM - 11:00 PM</p>
                  </div>
                </div>
                
                <div className="abp-contact__detail">
                  <FaPhone className="abp-contact__icon" />
                  <div>
                    <h4>Reservations</h4>
                    <p>(555) 123-4567</p>
                    <p>reservations@gourmet.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="abp-contact__map">
              <div className="abp-contact__map-frame">
                <div className="abp-contact__map-overlay">
                  <FaMapMarkerAlt className="abp-contact__map-pin" />
                  <div className="abp-contact__map-tooltip">
                    <h4>Find Us Here</h4>
                    <p>Free parking available</p>
                    <p>Wheelchair accessible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;