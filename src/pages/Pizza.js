import React from 'react';
import MenuItem from '../components/MenuItem';
import './MenuPage.css';

const Pizza = () => {
  const pizzaItems = [
    {
      id: 11,
      name: "Margherita Classic",
      description: "Fresh tomato sauce, mozzarella, and basil on thin crust",
      price: 14.99,
      image: "https://picsum.photos/400/300?random=11"
    },
    {
      id: 12,
      name: "Pepperoni Supreme",
      description: "Loaded with pepperoni, mozzarella, and our signature tomato sauce",
      price: 16.99,
      image: "https://picsum.photos/400/300?random=12"
    },
    {
      id: 13,
      name: "BBQ Chicken Pizza",
      description: "Grilled chicken, BBQ sauce, red onions, and cilantro",
      price: 18.99,
      image: "https://picsum.photos/400/300?random=13"
    },
    {
      id: 14,
      name: "Veggie Delight",
      description: "Bell peppers, mushrooms, olives, onions, and tomatoes",
      price: 15.99,
      image: "https://picsum.photos/400/300?random=14"
    },
    {
      id: 15,
      name: "Meat Lovers",
      description: "Pepperoni, sausage, bacon, and ham with extra cheese",
      price: 19.99,
      image: "https://picsum.photos/400/300?random=15"
    },
    {
      id: 16,
      name: "Hawaiian Paradise",
      description: "Ham, pineapple, and mozzarella on our classic crust",
      price: 17.99,
      image: "https://picsum.photos/400/300?random=16"
    }
  ];

  return (
    <div className="menu-page">
      <div className="container">
        <div className="page-header">
          <h1>🍕 Pizza</h1>
          <p>Authentic Italian-style pizzas made with fresh ingredients and love</p>
        </div>
        
        <div className="menu-grid">
          {pizzaItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pizza;
