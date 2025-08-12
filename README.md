# FastBite Restaurant Website

A modern, responsive React-based restaurant website featuring multiple menu categories, shopping cart functionality, and a complete checkout system.

## Features

- 🏠 **Home Page** - Welcome page with restaurant highlights and category previews
- 🍔 **Burgers Page** - Gourmet burger menu with detailed descriptions
- 🍕 **Pizza Page** - Authentic Italian-style pizzas
- 🥤 **Drinks Page** - Refreshing beverages and smoothies
- 🍰 **Desserts Page** - Sweet treats and desserts
- ℹ️ **About Page** - Restaurant story, team, and mission
- 🛒 **Checkout Page** - Complete shopping cart and order placement system

## Key Functionality

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Shopping Cart** - Add/remove items, adjust quantities, view totals
- **Modern UI/UX** - Beautiful animations, gradients, and interactive elements
- **Order Management** - Complete checkout flow with customer information forms
- **Fast Navigation** - React Router for seamless page transitions

## Technologies Used

- **React 18** - Modern React with hooks and functional components
- **React Router** - Client-side routing
- **CSS3** - Advanced styling with flexbox, grid, animations, and gradients
- **Context API** - State management for shopping cart
- **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js       # Navigation header with cart
│   ├── Footer.js       # Footer with contact info
│   └── MenuItem.js     # Individual menu item component
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── Burgers.js      # Burger menu page
│   ├── Pizza.js        # Pizza menu page
│   ├── Drinks.js       # Drinks menu page
│   ├── Desserts.js     # Desserts menu page
│   ├── About.js        # About page
│   └── Checkout.js     # Shopping cart and checkout
├── context/            # React Context
│   └── CartContext.js  # Shopping cart state management
└── App.js              # Main application component
```

## Features in Detail

### Shopping Cart
- Add items to cart from any menu page
- Real-time cart counter in header
- Adjust quantities in checkout
- Remove individual items
- Calculate subtotal, tax, and delivery fees
- Free delivery on orders over $25

### Order System
- Customer information form
- Address and payment details
- Order processing simulation
- Order confirmation

### Responsive Design
- Mobile-first CSS approach
- Flexible grid layouts
- Touch-friendly buttons
- Optimized images and animations

## Customization

### Adding Menu Items
Edit the menu arrays in the respective page files (`Burgers.js`, `Pizza.js`, etc.) to add or modify menu items.

### Styling
All CSS files are modular and can be easily customized:
- `index.css` - Global styles and utilities
- `App.css` - Main application styles
- Component-specific CSS files for targeted styling

### Colors and Branding
The main brand colors are defined throughout the CSS:
- Primary Orange: `#ff6b35`
- Secondary Orange: `#f7931e`
- Dark Blue: `#2c3e50`
- Light Gray: `#f8f9fa`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, contact us at info@fastbite.com
