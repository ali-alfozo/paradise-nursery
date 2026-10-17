import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from '../redux/CartSlice';
import './CartItem.css';

function CartItem() {
  const { t } = useTranslation();
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
    const translatedName = t(`plants.${name}`, name);
    toast.error(`${translatedName} ${t('cart.delete')}`);
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>{t('cart.emptyCart')} 🛒</h2>
        <p>{t('cart.emptyCartMessage')}</p>
        <Link to="/plants" className="continue-shopping-btn">
          {t('cart.continueShopping')}
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">{t('cart.title')}</h2>

      <div className="cart-summary">
        <div className="summary-item">
          <span>{t('cart.totalPlants')}:</span>
          <strong>{totalPlants}</strong>
        </div>
        <div className="summary-item">
          <span>{t('cart.totalCost')}:</span>
          <strong>${totalAmount}</strong>
        </div>
      </div>

      <div className="cart-items-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{t(`plants.${item.name}`, item.name)}</h3>
              <p className="unit-price">{t('product.unitPrice')}: ${item.price}</p>
              <p className="item-total">{t('product.total')}: ${(item.price * item.quantity).toFixed(2)}</p>
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
          ← {t('cart.continueShopping')}
        </Link>
        <button className="checkout-button" onClick={() => alert(t('cart.comingSoon'))}>
          {t('cart.checkout')}
        </button>
      </div>
    </div>
  );
}

export default CartItem;