import React from 'react';
import CartItem from './CartItem';
import './ShoppingCart.css';

function ShoppingCart({ cartItems, onRemove, onUpdateQuantity }) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart">
      <h2>🛒 Shopping Cart</h2>
      <div className="cart-items-container">
        {cartItems.length > 0 ? (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={onRemove}
                  onUpdateQuantity={onUpdateQuantity}
                />
              ))}
            </div>
            <div className="cart-summary">
              <div className="total-items">
                Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </div>
              <div className="total-price">
                <span className="label">Total:</span>
                <span className="amount">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <p className="empty-icon">🛒</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;