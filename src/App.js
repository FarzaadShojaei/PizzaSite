import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Burgers from './pages/Burgers';
import Pizza from './pages/Pizza';
import Drinks from './pages/Drinks';
import Desserts from './pages/Desserts';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Specials from './pages/Specials';
import Reviews from './pages/Reviews';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/burgers" element={<Burgers />} />
              <Route path="/pizza" element={<Pizza />} />
              <Route path="/drinks" element={<Drinks />} />
              <Route path="/desserts" element={<Desserts />} />
              <Route path="/specials" element={<Specials />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
