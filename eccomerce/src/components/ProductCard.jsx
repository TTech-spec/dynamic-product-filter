import React from 'react';
import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  const handleClick = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <button
          className="add-to-cart-btn"
          onClick={handleClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;