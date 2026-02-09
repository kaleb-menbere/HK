// src/data/menuData.js
export const menuData = {
  categories: [
    { id: 'appetizers', name: 'Appetizers', description: 'Start your meal right' },
    { id: 'mains', name: 'Main Courses', description: 'Hearty and delicious' },
    { id: 'desserts', name: 'Desserts', description: 'Sweet endings' },
    { id: 'drinks', name: 'Drinks', description: 'Refreshing beverages' },
    { id: 'specials', name: 'Chef Specials', description: 'Today\'s recommendations' }
  ],
  
  items: [
    {
      id: 1,
      name: 'Truffle Arancini',
      description: 'Crispy risotto balls with black truffle and mozzarella',
      price: 14.99,
      categoryId: 'appetizers',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true
    },
    {
      id: 2,
      name: 'Herb-Crusted Salmon',
      description: 'Atlantic salmon with lemon butter sauce and seasonal vegetables',
      price: 28.99,
      categoryId: 'mains',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true
    },
    {
      id: 3,
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with a molten center and vanilla ice cream',
      price: 12.99,
      categoryId: 'desserts',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true
    },
    {
      id: 4,
      name: 'Craft Burger',
      description: 'Angus beef with aged cheddar, bacon, and house sauce',
      price: 18.99,
      categoryId: 'mains',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      name: 'Mango Lassi',
      description: 'Refreshing yogurt drink with ripe mango and cardamom',
      price: 6.99,
      categoryId: 'drinks',
      image: 'https://images.unsplash.com/photo-1572383672419-ab35444a693a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      name: 'Caesar Salad',
      description: 'Crisp romaine with parmesan, croutons, and classic dressing',
      price: 11.99,
      categoryId: 'appetizers',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 7,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with espresso-soaked ladyfingers',
      price: 10.99,
      categoryId: 'desserts',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 8,
      name: 'Craft Cocktail',
      description: 'Signature cocktail with premium spirits and fresh ingredients',
      price: 15.99,
      categoryId: 'drinks',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ]
};

export default menuData;