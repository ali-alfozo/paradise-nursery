import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../redux/CartSlice';
import { plantsData } from '../data';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some((item) => item.id === id);
const handleAddToCart = (plant) => {
  dispatch(addItem(plant));
  toast.success(`${plant.name} added to cart!`);
};

  const categories = [...new Set(plantsData.map((plant) => plant.category))];

  return (
    <div className="product-list">
      <h1 className="page-title">Our Plants</h1>
      {categories.map((category) => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <div className="plants-grid">
            {plantsData
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id} className="plant-card">
                  {/* الرابط حول الصورة والاسم والسعر */}
                  <Link to={`/plants/${plant.id}`} className="card-link">
                    <div className="image-container">
                      <img src={plant.image} alt={plant.name} />
                    </div>
                    <div className="card-content">
                      <h3>{plant.name}</h3>
                      <p className="price">${plant.price}</p>
                    </div>
                  </Link>

                  {/* الزر خارج الرابط لكي لا ينقل المستخدم لصفحة التفاصيل */}
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
                    className={isInCart(plant.id) ? 'added' : ''}
                  >
                    {isInCart(plant.id) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
