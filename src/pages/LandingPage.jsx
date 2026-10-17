import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AboutUs from '../components/AboutUs';
import './LandingPage.css';

function LandingPage() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>{t('landing.title')}</h1>
        <p className="tagline">{t('landing.tagline')}</p>
        
        <div className="landing-buttons">
          <Link to="/plants" className="start-button">
            {t('landing.getStarted')}
          </Link>
          
          <button onClick={toggleLanguage} className="lang-toggle-landing">
            {i18n.language === 'en' ? '🌐 العربية' : '🌐 English'}
          </button>
        </div>
      </div>
      <AboutUs />
    </div>
  );
}

export default LandingPage;