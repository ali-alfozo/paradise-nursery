import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import './App.css';

// Paradise Nursery - Get Started
// This App.jsx includes the Paradise Nursery landing page with the company name and a "Get Started" button.

function App() {
  return (
    <Router>
      {/* Paradise Nursery - Get Started */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductListPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
