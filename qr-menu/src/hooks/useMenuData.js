// src/hooks/useMenuData.js
import { useState, useEffect } from 'react';
import { menuData } from '../data/menuData';

export const useMenuData = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Transform data if needed
        const categoriesData = menuData.categories || [];
        const itemsData = menuData.items || [];
        
        setCategories(categoriesData);
        setItems(itemsData);
        setError(null);
      } catch (err) {
        setError('Failed to load menu data');
        console.error('Error loading menu data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    categories,
    items,
    loading,
    error,
  };
};

// Also export as default
export default useMenuData;