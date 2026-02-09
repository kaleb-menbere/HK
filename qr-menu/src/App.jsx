// Updated App.jsx with HashRouter and proper loading
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import NotFoundPage from './pages/NotFoundPage';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import './App.css';

// Scroll to top on hash change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes (hash changes)
    window.scrollTo(0, 0);
    
    // If there's a hash in the URL, scroll to that element
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Simulate initial app loading
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Mark app as mounted
    setIsMounted(true);

    // Handle page visibility
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Listen for hash changes to handle loading state
    const handleHashChange = () => {
      // You can add loading logic here if needed
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      clearTimeout(loadingTimer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        {/* Full-page Loading Screen */}
        {isLoading && <LoadingScreen />}
        
        {/* Main Content */}
        <div className={`app-content ${isLoading ? 'app-content--hidden' : ''}`}>
          <Routes>
            {/* Main Routes - Note: With HashRouter, paths work differently */}
            <Route path="/" element={<MenuPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            
            {/* 404 Page - This will match any unmatched hash paths */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;