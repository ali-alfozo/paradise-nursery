import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">{t('landing.title')}</Link>
      </div>
      <nav className="navigation">
        <Link to="/">{t('nav.home')}</Link>
        <Link to="/plants">{t('nav.plants')}</Link>
        <Link to="/cart" className="cart-link">
          🛒 {t('nav.cart')}
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
        <button onClick={toggleLanguage} className="lang-toggle">
          🌐 {i18n.language === 'en' ? 'AR' : 'EN'}
        </button>
      </nav>
    </header>
  );
}

export default Header;