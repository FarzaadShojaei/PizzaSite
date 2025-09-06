import React from 'react';
import MenuItem from '../components/MenuItem';
import './MenuPage.css';
import '../components/AddToCartButtons.css';

const Burgers = () => {
  const burgerItems = [
    {
      id: 1,
      name: "Classic Beef Burger",
      description: "Juicy beef patty with lettuce, tomato, onion, and our special sauce",
      price: 12.99,
      image: "https://picsum.photos/400/300?random=1"
    },
    {
      id: 2,
      name: "BBQ Bacon Burger",
      description: "Beef patty topped with crispy bacon, BBQ sauce, and cheddar cheese",
      price: 15.99,
      image: "https://picsum.photos/400/300?random=2"
    },
    {
      id: 3,
      name: "Chicken Deluxe",
      description: "Grilled chicken breast with avocado, swiss cheese, and herb mayo",
      price: 13.99,
      image: "https://picsum.photos/400/300?random=3"
    },
    {
      id: 4,
      name: "Veggie Supreme",
      description: "Plant-based patty with fresh vegetables and vegan cheese",
      price: 11.99,
      image: "https://picsum.photos/400/300?random=4"
    },
    {
      id: 5,
      name: "Spicy Jalapeño Burger",
      description: "Beef patty with jalapeños, pepper jack cheese, and spicy mayo",
      price: 14.99,
      image: "https://picsum.photos/400/300?random=5"
    },
    {
      id: 6,
      name: "Double Cheese Burger",
      description: "Two beef patties with double cheese, pickles, and ketchup",
      price: 16.99,
      image: "https://picsum.photos/400/300?random=6"
    }
  ];

  return (
    <div className="menu-page">
      <div className="container">
        <div className="page-header">
          <h1>🍔 Burgers</h1>
          <p>Sink your teeth into our mouth-watering burgers made with premium ingredients</p>
        </div>
        
        <div className="menu-grid">
          {burgerItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>

        {/* Burger Quick Actions */}
        <section className="burger-quick-actions">
          <h2>Burger Combo Deals</h2>
          <div className="quick-action-buttons">
            <button className="add-cart-secondary" onClick={() => {}}>Add Burger Combo</button>
            <button id="add-cart-featured" onClick={() => {}}>Featured Burger</button>
            <button data-cart="quick" onClick={() => {}}>Quick Burger</button>
            <button className="add-cart-danger" onClick={() => {}}>Spicy Burger Special</button>
            <button id="add-cart-premium" onClick={() => {}}>Premium Burger</button>
            <button className="add-cart-dark" onClick={() => {}}>Signature Burger</button>
            <button className="add-cart-glow" onClick={() => {}}>Gourmet Burger</button>
            <button data-cart="instant" onClick={() => {}}>Instant Burger</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Burgers;
