import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../redux/CartSlice';
import { plantsData } from '../data';
import './ProductList.css';

function ProductList() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [searchTerm, setSearchTerm] = useState('');

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    const translatedName = t(`plants.${plant.name}`, plant.name);
    toast.success(`${translatedName} ${t('product.added')}`);
  };

  const translateCategory = (category) => {
    const key = category.toLowerCase();
    return t(`categories.${key}`, category);
  };

  const categories = [...new Set(plantsData.map((plant) => plant.category))];

  const filteredPlants = plantsData.filter((plant) => {
    const englishName = plant.name.toLowerCase();
    const translatedName = t(`plants.${plant.name}`, plant.name).toLowerCase();
    const search = searchTerm.toLowerCase();
    return englishName.includes(search) || translatedName.includes(search);
  });

  return (
    <div className="product-list">
      <h1 className="page-title">{t('nav.plants')}</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder={t('product.searchPlaceholder')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {filteredPlants.length === 0 ? (
        <p className="no-results">{t('product.noResults')}</p>
      ) : (
        categories.map((category) => {
          const plantsInCategory = filteredPlants.filter(
            (plant) => plant.category === category
          );

          if (plantsInCategory.length === 0) return null;

          return (
            <div key={category} className="category">
              <h2>{translateCategory(category)}</h2>
              <div className="plants-grid">
                {plantsInCategory.map((plant) => (
                  <div key={plant.id} className="plant-card">
                    <Link to={`/plants/${plant.id}`} className="card-link">
                      <div className="image-container">
                        <img src={plant.image} alt={plant.name} />
                      </div>
                      <div className="card-content">
                        <h3>{t(`plants.${plant.name}`, plant.name)}</h3>
                        <p className="price">${plant.price}</p>
                      </div>
                    </Link>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.id)}
                      className={isInCart(plant.id) ? 'added' : ''}
                    >
                      {isInCart(plant.id) ? t('product.added') : t('product.addToCart')}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}

      <footer className="product-footer">
        <p>🌿 {t('product.footerThanks')} 🌿</p>
        <p>{t('product.footerDelivery')}</p>
        <p>{t('product.footerCopyright')}</p>
      </footer>
    </div>
  );
}

export default ProductList;
