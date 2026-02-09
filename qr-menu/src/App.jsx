// Updated App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import NotFoundPage from './pages/NotFoundPage';
import LoadingScreen from './components/LoadingScreen/LoadingScreen'; // Add this import
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Simulate initial app loading (fetching data, assets, etc.)
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show for 2 seconds minimum

    // Mark app as mounted
    setIsMounted(true);

    // Handle page visibility
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Page became visible again
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(loadingTimer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Don't render anything until the app is mounted
  if (!isMounted) {
    return null;
  }

  return (
    <Router>
      <div className="App">
        {/* Full-page Loading Screen */}
        {isLoading && <LoadingScreen />}
        
        {/* Main Content (hidden while loading) */}
        <div className={`app-content ${isLoading ? 'app-content--hidden' : ''}`}>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<MenuPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;