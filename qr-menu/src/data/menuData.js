// src/data/menuData.js
export const menuData = {
  categories: [
    { id: 'appetizers', name: 'Appetizers', description: 'Perfect starters' },
    { id: 'burgers', name: 'Burgers', description: 'Juicy & delicious' },
    { id: 'pizzas', name: 'Pizzas', description: 'Fresh from oven' },
    { id: 'fastfood', name: 'Fast Food', description: 'Quick & tasty' },
    { id: 'desserts', name: 'Desserts', description: 'Sweet endings' },
    { id: 'hotdrinks', name: 'Hot Drinks', description: 'Warm & comforting' },
    { id: 'colddrinks', name: 'Cold Drinks', description: 'Refreshing beverages' },
    { id: 'specials', name: 'Chef Specials', description: 'Today\'s picks' }
  ],
  
  items: [
    // Appetizers
    {
      id: 1,
      name: 'French Fries',
      description: 'Crispy golden fries with seasoning',
      price: 5.99,
      categoryId: 'appetizers',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true
    },
    {
      id: 2,
      name: 'Chicken Wings',
      description: 'Crispy fried wings with buffalo sauce',
      price: 12.99,
      categoryId: 'appetizers',
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true
    },
    {
      id: 3,
      name: 'Mozzarella Sticks',
      description: 'Breaded mozzarella with marinara sauce',
      price: 8.99,
      categoryId: 'appetizers',
      image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Onion Rings',
      description: 'Crispy battered onion rings',
      price: 6.99,
      categoryId: 'appetizers',
      image: 'https://images.unsplash.com/photo-1639024471282-cb7b1b2d0d72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    
    // Burgers
    {
      id: 5,
      name: 'Classic Cheeseburger',
      description: 'Beef patty with cheese, lettuce, tomato',
      price: 14.99,
      categoryId: 'burgers',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true
    },
    {
      id: 6,
      name: 'Bacon Burger',
      description: 'Double patty with crispy bacon, cheddar',
      price: 18.99,
      categoryId: 'burgers',
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 7,
      name: 'Chicken Burger',
      description: 'Grilled chicken breast with avocado',
      price: 16.99,
      categoryId: 'burgers',
      image: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 8,
      name: 'Veggie Burger',
      description: 'Plant-based patty with fresh veggies',
      price: 15.99,
      categoryId: 'burgers',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    
    // Pizzas
    {
      id: 9,
      name: 'Margherita Pizza',
      description: 'Classic tomato, mozzarella, basil',
      price: 16.99,
      categoryId: 'pizzas',
      image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true
    },
    {
      id: 10,
      name: 'Pepperoni Pizza',
      description: 'Tomato sauce, mozzarella, pepperoni',
      price: 18.99,
      categoryId: 'pizzas',
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 11,
      name: 'BBQ Chicken Pizza',
      description: 'Grilled chicken, BBQ sauce, onions',
      price: 19.99,
      categoryId: 'pizzas',
      image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 12,
      name: 'Veggie Supreme',
      description: 'Mushrooms, peppers, onions, olives',
      price: 17.99,
      categoryId: 'pizzas',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    
    // Fast Food
    {
      id: 13,
      name: 'Chicken Nuggets',
      description: 'Crispy chicken pieces with dipping sauce',
      price: 9.99,
      categoryId: 'fastfood',
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 14,
      name: 'Fish & Chips',
      description: 'Beer-battered fish with thick cut fries',
      price: 15.99,
      categoryId: 'fastfood',
      image: 'https://images.unsplash.com/photo-1579208030886-b937da0925dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 15,
      name: 'Hot Dog',
      description: 'Beef frankfurter with toppings',
      price: 8.99,
      categoryId: 'fastfood',
      image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 16,
      name: 'Chicken Tenders',
      description: 'Crispy chicken strips with honey mustard',
      price: 11.99,
      categoryId: 'fastfood',
      image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    
    // Desserts
    {
      id: 17,
      name: 'Chocolate Cake',
      description: 'Rich chocolate layers with ganache',
      price: 8.99,
      categoryId: 'desserts',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 18,
      name: 'Ice Cream Sundae',
      description: 'Vanilla ice cream with chocolate sauce',
      price: 7.99,
      categoryId: 'desserts',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 19,
      name: 'Apple Pie',
      description: 'Warm apple pie with cinnamon',
      price: 6.99,
      categoryId: 'desserts',
      image: 'https://images.unsplash.com/photo-1561626423-a51b45aef0a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    
    // Hot Drinks
    {
      id: 20,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk foam',
      price: 4.99,
      categoryId: 'hotdrinks',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true
    },
    {
      id: 21,
      name: 'Americano',
      description: 'Rich espresso with hot water',
      price: 3.99,
      categoryId: 'hotdrinks',
      image: 'https://images.unsplash.com/photo-1610622841064-206cdc0a4c75?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 22,
      name: 'Latte',
      description: 'Smooth espresso with steamed milk',
      price: 5.49,
      categoryId: 'hotdrinks',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 23,
      name: 'Green Tea',
      description: 'Premium Japanese green tea',
      price: 3.49,
      categoryId: 'hotdrinks',
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 24,
      name: 'Hot Chocolate',
      description: 'Rich chocolate with whipped cream',
      price: 5.99,
      categoryId: 'hotdrinks',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    
    // Cold Drinks
    {
      id: 25,
      name: 'Fresh Orange Juice',
      description: 'Freshly squeezed orange juice',
      price: 5.99,
      categoryId: 'colddrinks',
      image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 26,
      name: 'Iced Coffee',
      description: 'Chilled coffee with milk and ice',
      price: 5.49,
      categoryId: 'colddrinks',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 27,
      name: 'Cola',
      description: 'Classic cola beverage',
      price: 2.99,
      categoryId: 'colddrinks',
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 28,
      name: 'Lemonade',
      description: 'Fresh lemon juice with mint',
      price: 4.99,
      categoryId: 'colddrinks',
      image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 29,
      name: 'Milkshake',
      description: 'Chocolate, vanilla or strawberry',
      price: 6.99,
      categoryId: 'colddrinks',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    
    // Specials
    {
      id: 30,
      name: 'Chef\'s Burger',
      description: 'Signature burger with special sauce',
      price: 22.99,
      categoryId: 'specials',
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      popular: true
    },
    {
      id: 31,
      name: 'Truffle Pizza',
      description: 'White pizza with black truffle',
      price: 24.99,
      categoryId: 'specials',
      image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      popular: true
    },
    {
      id: 32,
      name: 'Loaded Fries',
      description: 'Fries with cheese, bacon, ranch',
      price: 14.99,
      categoryId: 'specials',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    }
  ]
};

export default menuData;