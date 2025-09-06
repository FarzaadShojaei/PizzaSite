import React from 'react';
import MenuItem from '../components/MenuItem';
import './MenuPage.css';
import '../components/AddToCartButtons.css';

const Drinks = () => {
  const drinkItems = [
    {
      id: 21,
      name: "Fresh Orange Juice",
      description: "Freshly squeezed orange juice, 100% natural",
      price: 4.99,
      image: "https://picsum.photos/400/300?random=21"
    },
    {
      id: 22,
      name: "Classic Coca Cola",
      description: "Ice-cold Coca Cola served in a chilled glass",
      price: 2.99,
      image: "https://picsum.photos/400/300?random=22"
    },
    {
      id: 23,
      name: "Strawberry Smoothie",
      description: "Blend of fresh strawberries, yogurt, and honey",
      price: 6.99,
      image: "https://picsum.photos/400/300?random=23"
    },
    {
      id: 24,
      name: "Iced Coffee",
      description: "Premium cold brew coffee with a touch of cream",
      price: 3.99,
      image: "https://picsum.photos/400/300?random=24"
    },
    {
      id: 25,
      name: "Green Tea Lemonade",
      description: "Refreshing blend of green tea and fresh lemon",
      price: 4.49,
      image: "https://picsum.photos/400/300?random=25"
    },
    {
      id: 26,
      name: "Chocolate Milkshake",
      description: "Rich and creamy chocolate milkshake topped with whipped cream",
      price: 5.99,
      image: "https://picsum.photos/400/300?random=26"
    }
  ];

  return (
    <div className="menu-page">
      <div className="container">
        <div className="page-header">
          <h1>🥤 Drinks</h1>
          <p>Quench your thirst with our selection of refreshing beverages</p>
        </div>
        
        <div className="menu-grid">
          {drinkItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>

        {/* Drinks Quick Actions */}
        <section className="drinks-quick-actions">
          <h2>Beverage Combos</h2>
          <div className="quick-action-buttons">
            <button className="add-cart-outline" onClick={() => {}}>Add Refreshing Drink</button>
            <button id="add-cart-exclusive" onClick={() => {}}>Exclusive Smoothie</button>
            <button data-cart="express" onClick={() => {}}>Express Drink</button>
            <button className="add-cart-minimal" onClick={() => {}}>Simple Beverage</button>
            <button id="add-cart-vip" onClick={() => {}}>VIP Drink Package</button>
            <button className="add-cart-rounded" onClick={() => {}}>Fresh Juice</button>
            <button className="add-cart-gradient-border" onClick={() => {}}>Premium Beverage</button>
            <input type="submit" value="Add Drink Combo" className="submit-cart" onClick={() => {}} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Drinks;
