import React from 'react';
import toast from 'react-hot-toast';  
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import { plantsData } from '../data';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const plant = plantsData.find((p) => p.id === parseInt(id));

  if (!plant) {
    return (
      <div className="not-found">
        <h2>Plant not found</h2>
        <Link to="/plants">Back to Plants</Link>
      </div>
    );
  }

  const isInCart = cartItems.some((item) => item.id === plant.id);

  const handleAddToCart = () => {
  dispatch(addItem(plant));
  toast.success(`${plant.name} added to cart!`);
};

  return (
    <div className="product-details">
      <Link to="/plants" className="back-link">← Back to Plants</Link>
      <div className="details-container">
        <div className="details-image">
          <img src={plant.image} alt={plant.name} />
        </div>
        <div className="details-info">
          <h1>{plant.name}</h1>
          <p className="category-tag">{plant.category}</p>
          <p className="details-price">${plant.price}</p>
          <p className="description">
            This beautiful {plant.name} is perfect for your home. It purifies the air,
            adds a touch of nature, and is easy to care for. Bring home a piece of
            paradise today!
          </p>
          <button
            onClick={handleAddToCart}
            disabled={isInCart}
            className={isInCart ? 'added' : ''}
          >
            {isInCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;