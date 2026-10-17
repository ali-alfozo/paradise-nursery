import React from 'react';
import toast from 'react-hot-toast';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addItem } from '../redux/CartSlice';
import { plantsData } from '../data';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const { t } = useTranslation();

  const plant = plantsData.find((p) => p.id === parseInt(id));

  if (!plant) {
    return (
      <div className="not-found">
        <h2>Plant not found</h2>
        <Link to="/plants">{t('product.backToPlants')}</Link>
      </div>
    );
  }

  const isInCart = cartItems.some((item) => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addItem(plant));
    const translatedName = t(`plants.${plant.name}`, plant.name);
    toast.success(`${translatedName} ${t('product.added')}`);
  };

  return (
    <div className="product-details">
      <Link to="/plants" className="back-link">← {t('product.backToPlants')}</Link>
      <div className="details-container">
        <div className="details-image">
          <img src={plant.image} alt={plant.name} />
        </div>
        <div className="details-info">
          <h1>{t(`plants.${plant.name}`, plant.name)}</h1>
          <p className="category-tag">
            {t(`categories.${plant.category.toLowerCase()}`, plant.category)}
          </p>
          <p className="details-price">${plant.price}</p>
          <p className="description">
  {t(`plantDescriptions.${plant.name}`, plant.description)}
</p>
          <button
            onClick={handleAddToCart}
            disabled={isInCart}
            className={isInCart ? 'added' : ''}
          >
            {isInCart ? t('product.added') : t('product.addToCart')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;