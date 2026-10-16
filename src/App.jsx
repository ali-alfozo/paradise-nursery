import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import ProductDetails from './pages/ProductDetails'; // ✅ جديد
import './App.css';

function App() {
  return (
    <Router basename="/paradise-nursery">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductListPage />} />
        <Route path="/plants/:id" element={<ProductDetails />} /> {/* ✅ جديد */}
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
