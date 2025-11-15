import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

// Import images
import laptopImg from './Images/laptop.jpg';
import tshirtImg from './Images/tshirt.jpg';
import booksImg from './Images/books.jpg';
import phoneImg from './Images/phone.jpg';
import jeansImg from './Images/jeans.jpg';
import bagImg from './Images/bag.jpg';
import laptop2Img from './Images/laptop2.jpg';
import laptop3Img from './Images/laptop3.jpg';
import phone2Img from './Images/phone2.jpg';
import bagsImg from './Images/bags.jpg';
import shoeImg from './Images/shoe.jpg';
import shoesImg from './Images/shoes.jpg';

const initialProducts = [
  {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    price: 1200,
    image: laptopImg
  },
  {
    id: 2,
    name: 'T-Shirt',
    category: 'Clothing',
    price: 25,
    image: tshirtImg
  },
  {
    id: 3,
    name: 'The Great Gatsby',
    category: 'Books',
    price: 15,
    image: booksImg
  },
  {
    id: 4,
    name: 'Smartphone',
    category: 'Electronics',
    price: 800,
    image: phoneImg
  },
  {
    id: 5,
    name: 'Jeans',
    category: 'Clothing',
    price: 50,
    image: jeansImg
  },
  {
    id: 6,
    name: 'Premium Bag',
    category: 'Bags',
    price: 120,
    image: bagImg
  },
  {
    id: 7,
    name: 'Gaming Laptop',
    category: 'Electronics',
    price: 1500,
    image: laptop2Img
  },
  {
    id: 8,
    name: 'Ultrabook',
    category: 'Electronics',
    price: 1100,
    image: laptop3Img
  },
  {
    id: 9,
    name: 'Foldable Phone',
    category: 'Electronics',
    price: 1000,
    image: phone2Img
  },
  {
    id: 10,
    name: 'Travel Bag',
    category: 'Bags',
    price: 80,
    image: bagsImg
  },
  {
    id: 11,
    name: 'Running Shoes',
    category: 'Shoes',
    price: 90,
    image: shoeImg
  },
  {
    id: 12,
    name: 'Casual Shoes',
    category: 'Shoes',
    price: 70,
    image: shoesImg
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);

  const categories = ['All', 'Electronics', 'Clothing', 'Books', 'Bags', 'Shoes'];

  let filteredProducts = 
    selectedCategory === 'All'
      ? initialProducts
      : initialProducts.filter(product => product.category === selectedCategory);

  filteredProducts = filteredProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🛍️ Dynamic Product Filter & Cart</h1>
      </header>
      
      <div className="container">
        <div className="main-content">
          <div className="search-container">
            <input
              type="text"
              placeholder="🔍 Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="category-filters">
            <h2>Categories</h2>
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <ProductList 
            products={filteredProducts}
            onAddToCart={addToCart}
          />
        </div>

        <ShoppingCart 
          cartItems={cart}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      </div>
    </div>
  );
}

export default App;