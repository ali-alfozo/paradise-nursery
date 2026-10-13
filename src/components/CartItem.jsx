import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from '../redux/CartSlice';

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

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <Link to="/plants">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <p>Total Plants: {totalPlants}</p>
      <p>Total Cost: ${totalAmount}</p>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Total: ${item.price * item.quantity}</p>
          </div>
          <div className="item-actions">
            <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
          </div>
        </div>
      ))}

      <div className="cart-buttons">
        <Link to="/plants" className="continue-shopping">
          Continue Shopping
        </Link>
        <button className="checkout-button" onClick={() => alert('Coming Soon!')}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;