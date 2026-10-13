import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import { plantsData } from '../data';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // دالة للتحقق مما إذا كان المنتج موجوداً في العربة
  const isInCart = (id) => cartItems.some((item) => item.id === id);

  // دالة لإضافة منتج إلى العربة
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  // تجميع النباتات حسب الفئة
  const categories = [...new Set(plantsData.map((plant) => plant.category))];

  return (
    <div className="product-list">
      {categories.map((category) => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <div className="plants-grid">
            {plantsData
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id} className="plant-card">
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
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