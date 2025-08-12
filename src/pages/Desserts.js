import React from 'react';
import MenuItem from '../components/MenuItem';
import './MenuPage.css';

const Desserts = () => {
  const dessertItems = [
    {
      id: 31,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten chocolate center and vanilla ice cream",
      price: 7.99,
      image: "https://picsum.photos/400/300?random=31"
    },
    {
      id: 32,
      name: "New York Cheesecake",
      description: "Creamy cheesecake with graham cracker crust and berry compote",
      price: 6.99,
      image: "https://picsum.photos/400/300?random=32"
    },
    {
      id: 33,
      name: "Tiramisu",
      description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
      price: 8.99,
      image: "https://picsum.photos/400/300?random=33"
    },
    {
      id: 34,
      name: "Apple Pie",
      description: "Homemade apple pie with cinnamon and served warm with ice cream",
      price: 5.99,
      image: "https://picsum.photos/400/300?random=34"
    },
    {
      id: 35,
      name: "Ice Cream Sundae",
      description: "Three scoops of vanilla ice cream with chocolate sauce and sprinkles",
      price: 4.99,
      image: "https://picsum.photos/400/300?random=35"
    },
    {
      id: 36,
      name: "Chocolate Brownies",
      description: "Fudgy chocolate brownies with nuts and chocolate chips",
      price: 3.99,
      image: "https://picsum.photos/400/300?random=36"
    },
    {
      id: 37,
      name: "Chocolate Chip Cookies",
      description: "Freshly baked chocolate chip cookies with gooey centers",
      price: 2.99,
      image: "https://picsum.photos/400/300?random=37"
    },
    {
      id: 38,
      name: "Oatmeal Raisin Cookies",
      description: "Soft and chewy oatmeal cookies packed with sweet raisins",
      price: 2.99,
      image: "https://picsum.photos/400/300?random=38"
    },
    {
      id: 39,
      name: "Sugar Cookies",
      description: "Classic sugar cookies with colorful icing and sprinkles",
      price: 2.49,
      image: "https://picsum.photos/400/300?random=39"
    },
    {
      id: 40,
      name: "Double Chocolate Cookies",
      description: "Rich chocolate cookies with double chocolate chips",
      price: 3.49,
      image: "https://picsum.photos/400/300?random=40"
    },
    {
      id: 41,
      name: "Peanut Butter Cookies",
      description: "Soft peanut butter cookies with the classic crisscross pattern",
      price: 2.99,
      image: "https://picsum.photos/400/300?random=41"
    },
    {
      id: 42,
      name: "Snickerdoodle Cookies",
      description: "Cinnamon sugar cookies with a soft, tender texture",
      price: 2.79,
      image: "https://picsum.photos/400/300?random=42"
    }
  ];

  return (
    <div className="menu-page">
      <div className="container">
        <div className="page-header">
          <h1>🍰 Desserts</h1>
          <p>Sweet endings to perfect your dining experience</p>
        </div>
        
        <div className="menu-grid">
          {dessertItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Desserts;
