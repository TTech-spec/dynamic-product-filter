import React from 'react';
import './CartItem.css';

function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <div className="cart-item">
      <div className="item-details">
        <h4>{item.name}</h4>
        <p className="item-category">{item.category}</p>
        <p className="item-price">${item.price.toFixed(2)}</p>
      </div>
      
      <div className="item-controls">
        <div className="quantity-control">
          <button 
            className="qty-btn"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          >
            −
          </button>
          <span className="quantity">{item.quantity}</span>
          <button 
            className="qty-btn"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <div className="item-total">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>

      <button
        className="remove-btn"
        onClick={() => onRemove(item.id)}
        title="Remove from cart"
      >
        ✕
      </button>
    </div>
  );
}

export default CartItem;