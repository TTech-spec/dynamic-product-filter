import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-list-container">
      <h2>Product List ({products.length})</h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))
        ) : (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;