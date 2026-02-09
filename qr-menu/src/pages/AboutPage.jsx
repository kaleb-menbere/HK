// src/pages/AboutPage.jsx
import React from 'react';
import Header from '../components/Header';
import './AboutPage.css';
import { FaUsers, FaAward, FaLeaf, FaClock } from 'react-icons/fa';
import { GiChefToque } from 'react-icons/gi';
import { MdRestaurantMenu } from 'react-icons/md';

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

  return (
    <div className="abp-page">
      <Header />
      
      {/* Hero Section */}
      <section className="abp-hero">
        <div className="abp-hero__overlay"></div>
        <div className="abp-hero__content">
          <h1 className="abp-hero__title">Our Story</h1>
          <p className="abp-hero__subtitle">Serving exceptional food since 1995</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="abp-story">
        <div className="gnr-container">
          <div className="abp-story__content">
            <div className="abp-story__text">
              <h2 className="abp-story__title">Welcome to Gourmet Restaurant</h2>
              <p className="abp-story__description">
                Founded in 1995, Gourmet Restaurant began as a small family-owned bistro with a simple mission: 
                to serve delicious, high-quality food in a warm and welcoming atmosphere. Over the years, we've 
                grown into a beloved dining destination, but our commitment to quality and hospitality remains unchanged.
              </p>
              <p className="abp-story__description">
                Our philosophy is simple: great food starts with great ingredients. That's why we work closely 
                with local farmers and suppliers to bring you the freshest seasonal produce, meats, and seafood. 
                Every dish on our menu is carefully crafted by our talented chefs, who blend traditional techniques 
                with modern creativity.
              </p>
            </div>
            <div className="abp-story__image">
              <img 
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Restaurant interior" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="abp-values">
        <div className="gnr-container">
          <h2 className="abp-values__title">Our Values</h2>
          <div className="abp-values__grid">
            {values.map((value, index) => (
              <div key={index} className="abp-value__card">
                <div className="abp-value__icon">
                  {value.icon}
                </div>
                <h3 className="abp-value__title">{value.title}</h3>
                <p className="abp-value__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="abp-team">
        <div className="gnr-container">
          <h2 className="abp-team__title">Meet Our Team</h2>
          <p className="abp-team__subtitle">The talented individuals behind your dining experience</p>
          <div className="abp-team__grid">
            {teamMembers.map(member => (
              <div key={member.id} className="abp-team__member">
                <div className="abp-team__image">
                  <img src={member.image} alt={member.name} />
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
          <h2 className="abp-awards__title">Awards & Recognition</h2>
          <div className="abp-awards__list">
            <div className="abp-award">
              <FaAward className="abp-award__icon" />
              <h3>Best Fine Dining 2023</h3>
              <p>Food & Wine Magazine</p>
            </div>
            <div className="abp-award">
              <FaAward className="abp-award__icon" />
              <h3>Excellence in Service</h3>
              <p>Restaurant Association</p>
            </div>
            <div className="abp-award">
              <FaAward className="abp-award__icon" />
              <h3>Top 10 Restaurants</h3>
              <p>City Dining Guide</p>
            </div>
            <div className="abp-award">
              <FaAward className="abp-award__icon" />
              <h3>Best Wine Selection</h3>
              <p>Wine Enthusiast</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="abp-hours">
        <div className="gnr-container">
          <div className="abp-hours__content">
            <div className="abp-hours__info">
              <h2 className="abp-hours__title">Visit Us</h2>
              <div className="abp-hours__item">
                <FaClock className="abp-hours__icon" />
                <div>
                  <h3>Opening Hours</h3>
                  <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                  <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="abp-hours__item">
                <FaUsers className="abp-hours__icon" />
                <div>
                  <h3>Reservations</h3>
                  <p>We recommend booking in advance for weekends</p>
                  <p>Call: (555) 123-4567</p>
                </div>
              </div>
            </div>
            <div className="abp-hours__map">
              <div className="abp-hours__map-placeholder">
                <h3>Our Location</h3>
                <p>123 Gourmet Street, Food City, FC 10001</p>
                <p>Parking available in the adjacent lot</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;