// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import './ContactPage.css';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Our Location',
      details: ['123 Gourmet Street', 'Food City, FC 10001', 'United States'],
      link: '#'
    },
    {
      icon: <FaPhoneAlt />,
      title: 'Phone Number',
      details: ['Reservations: (555) 123-4567', 'General: (555) 987-6543'],
      link: 'tel:+15551234567'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Address',
      details: ['reservations@gourmet.com', 'info@gourmet.com'],
      link: 'mailto:info@gourmet.com'
    },
    {
      icon: <FaClock />,
      title: 'Opening Hours',
      details: ['Mon-Fri: 11:00 AM - 10:00 PM', 'Sat-Sun: 10:00 AM - 11:00 PM'],
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, label: 'Facebook', url: 'https://facebook.com' },
    { icon: <FaInstagram />, label: 'Instagram', url: 'https://instagram.com' },
    { icon: <FaTwitter />, label: 'Twitter', url: 'https://twitter.com' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="ctp-page">
      <Header />
      
      {/* Hero Section */}
      <section className="ctp-hero">
        <div className="ctp-hero__overlay"></div>
        <div className="ctp-hero__content">
          <h1 className="ctp-hero__title">Get in Touch</h1>
          <p className="ctp-hero__subtitle">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="ctp-info">
        <div className="gnr-container">
          <div className="ctp-info__grid">
            {contactInfo.map((item, index) => (
              <div key={index} className="ctp-info__card">
                <div className="ctp-info__icon">
                  {item.icon}
                </div>
                <h3 className="ctp-info__title">{item.title}</h3>
                <div className="ctp-info__details">
                  {item.details.map((detail, i) => (
                    <p key={i} className="ctp-info__detail">{detail}</p>
                  ))}
                </div>
                <a href={item.link} className="ctp-info__link">
                  {item.title === 'Email Address' ? 'Send Email' : 
                   item.title === 'Phone Number' ? 'Call Now' : 
                   'View on Map'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="ctp-main">
        <div className="gnr-container">
          <div className="ctp-content">
            {/* Contact Form */}
            <div className="ctp-form-section">
              <h2 className="ctp-form__title">Send us a Message</h2>
              <p className="ctp-form__subtitle">
                Have questions about our menu, want to make a reservation, or just want to say hello? 
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form className="ctp-form" onSubmit={handleSubmit}>
                <div className="ctp-form__row">
                  <div className="ctp-form__group">
                    <label htmlFor="name" className="ctp-form__label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="ctp-form__input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div className="ctp-form__group">
                    <label htmlFor="email" className="ctp-form__label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="ctp-form__input"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="ctp-form__row">
                  <div className="ctp-form__group">
                    <label htmlFor="phone" className="ctp-form__label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="ctp-form__input"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div className="ctp-form__group">
                    <label htmlFor="subject" className="ctp-form__label">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="ctp-form__select"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Reservation Inquiry</option>
                      <option value="menu">Menu Questions</option>
                      <option value="catering">Catering Services</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="ctp-form__group">
                  <label htmlFor="message" className="ctp-form__label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="ctp-form__textarea"
                    placeholder="Your message..."
                    rows="6"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="ctp-form__submit">
                  <FiSend className="ctp-form__submit-icon" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Social */}
            <div className="ctp-sidebar">
              {/* Map */}
              <div className="ctp-map">
                <div className="ctp-map__placeholder">
                  <h3 className="ctp-map__title">Find Us</h3>
                  <div className="ctp-map__info">
                    <FaMapMarkerAlt className="ctp-map__icon" />
                    <div>
                      <p className="ctp-map__address">123 Gourmet Street</p>
                      <p className="ctp-map__address">Food City, FC 10001</p>
                    </div>
                  </div>
                  <div className="ctp-map__hours">
                    <FaClock className="ctp-map__icon" />
                    <div>
                      <p>Mon-Fri: 11:00 AM - 10:00 PM</p>
                      <p>Sat-Sun: 10:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                  <button className="ctp-map__directions">
                    Get Directions
                  </button>
                </div>
              </div>

              {/* Social Media */}
              <div className="ctp-social">
                <h3 className="ctp-social__title">Follow Us</h3>
                <p className="ctp-social__subtitle">
                  Stay updated with our latest news, special offers, and events
                </p>
                <div className="ctp-social__links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="ctp-social__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      {social.icon}
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="ctp-faq">
                <h3 className="ctp-faq__title">Frequently Asked Questions</h3>
                <div className="ctp-faq__item">
                  <h4>Do you take reservations?</h4>
                  <p>Yes, we recommend reservations for weekends and special occasions.</p>
                </div>
                <div className="ctp-faq__item">
                  <h4>Is there parking available?</h4>
                  <p>Yes, we have complimentary parking in the adjacent lot.</p>
                </div>
                <div className="ctp-faq__item">
                  <h4>Do you offer catering?</h4>
                  <p>Yes, we provide catering services for events of all sizes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer CTA */}
      <footer className="ctp-footer">
        <div className="gnr-container">
          <div className="ctp-footer__content">
            <h2 className="ctp-footer__title">Ready to Visit?</h2>
            <p className="ctp-footer__text">We recommend booking in advance for the best experience</p>
            <div className="ctp-footer__actions">
              <a href="tel:+15551234567" className="ctp-footer__btn ctp-footer__btn--primary">
                <FaPhoneAlt />
                <span>Call to Reserve</span>
              </a>
              <a href="#directions" className="ctp-footer__btn ctp-footer__btn--secondary">
                <FaMapMarkerAlt />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;