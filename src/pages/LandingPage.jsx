import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from '../components/AboutUs';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Where Green Meets Serenity</p>
        <Link to="/plants" className="start-button">
          Get Started
        </Link>
      </div>
      <AboutUs />
    </div>
  );
}

export default LandingPage;