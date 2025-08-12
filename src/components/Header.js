import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getTotalItems = () => {
    return cart.items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>FastBite</h1>
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li className="dropdown">
              <span className="dropdown-trigger">Menu</span>
              <ul className="dropdown-menu">
                <li><Link to="/burgers" onClick={() => setIsMenuOpen(false)}>Burgers</Link></li>
                <li><Link to="/pizza" onClick={() => setIsMenuOpen(false)}>Pizza</Link></li>
                <li><Link to="/drinks" onClick={() => setIsMenuOpen(false)}>Drinks</Link></li>
                <li><Link to="/desserts" onClick={() => setIsMenuOpen(false)}>Desserts</Link></li>
              </ul>
            </li>
            <li><Link to="/specials" onClick={() => setIsMenuOpen(false)}>Specials</Link></li>
            <li><Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
            <li><Link to="/reviews" onClick={() => setIsMenuOpen(false)}>Reviews</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/checkout" className="cart-link">
            <span className="cart-icon">🛒</span>
            {getTotalItems() > 0 && (
              <span className="cart-count">{getTotalItems()}</span>
            )}
          </Link>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
