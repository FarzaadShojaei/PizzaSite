import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './MenuItem.css';

const MenuItem = ({ item }) => {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = () => {
    addToCart(item);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="menu-item">
      <div className="menu-item-image">
        {!imageError ? (
          <img 
            src={item.image} 
            alt={item.name}
            onError={handleImageError}
          />
        ) : (
          <div className="image-placeholder">
            <div className="placeholder-icon">🍽️</div>
            <div className="placeholder-text">{item.name}</div>
          </div>
        )}
      </div>
      <div className="menu-item-content">
        <h3>{item.name}</h3>
        <p className="description">{item.description}</p>
        <div className="menu-item-footer">
          <span className="price">${item.price.toFixed(2)}</span>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
