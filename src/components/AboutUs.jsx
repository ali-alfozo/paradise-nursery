import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutUs.css';

function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="about-us">
      <h2>{t('about.title')}</h2>
      <p>{t('about.description')}</p>
    </div>
  );
}

export default AboutUs;