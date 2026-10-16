import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from '../redux/CartSlice';
import './CartItem.css';

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalPlants = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleRemove = (id, name) => {
    dispatch(removeItem(id));
    toast.error(`${name} removed from cart!`);
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty 🛒</h2>
        <p>Looks like you haven't added any plants yet.</p>
        <Link to="/plants" className="continue-shopping-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
      
      <div className="cart-summary">
        <div className="summary-item">
          <span>Total Plants:</span>
          <strong>{totalPlants}</strong>
        </div>
        <div className="summary-item">
          <span>Total Cost:</span>
          <strong>${totalAmount}</strong>
        </div>
      </div>

      <div className="cart-items-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="unit-price">Unit Price: ${item.price}</p>
              <p className="item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div className="item-actions">
              <button 
                onClick={() => dispatch(decrementQuantity(item.id))}
                className="qty-btn"
              >-</button>
              <span className="qty-display">{item.quantity}</span>
              <button 
                onClick={() => dispatch(incrementQuantity(item.id))}
                className="qty-btn"
              >+</button>
              <button 
                onClick={() => handleRemove(item.id, item.name)}
                className="delete-btn"
              >🗑️</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-buttons">
        <Link to="/plants" className="continue-shopping">
          ← Continue Shopping
        </Link>
        <button className="checkout-button" onClick={() => alert('Coming Soon!')}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
