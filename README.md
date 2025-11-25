# Craftopica - Handcrafted Gifts & Hampers

A beautiful static website built with Vue 3 and Tailwind CSS for showcasing handcrafted gift items, hampers, and food items.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🔍 Search functionality to find products by name or description
- 🏷️ Filter products by category (Handcrafted Gifts, Hampers, Food Items)
- 💰 Filter products by price range
- 📱 WhatsApp integration for easy ordering
- 🖼️ Beautiful product cards with images and descriptions
- ⚡ Fast and lightweight Vue 3 application

## Getting Started

### Running the Development Server

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

## Features in Detail

### Product Listing
- Displays 18 sample products across three categories
- Each product shows image, name, description, category, and price
- Responsive grid layout that adapts to different screen sizes

### Search & Filters
- **Search**: Find products by name or description
- **Category Filter**: Filter by Handcrafted Gifts, Hampers, or Food Items
- **Price Range Filter**: Multiple price ranges from under ₹500 to above ₹3000

### WhatsApp Integration
- Click "Order on WhatsApp" button on any product
- Opens WhatsApp with pre-filled message including product details
- Sends to: +91 7736241616

## Customization

### Updating the Logo

Replace `public/logo.png` with your own logo image. The logo appears in:
- Header (top left corner)
- Browser favicon/tab icon

Recommended logo size: 200x200 pixels or larger (square format works best).

### Adding New Products

Edit `src/data/products.js` to add or modify products.

### Changing WhatsApp Number

Edit the `orderOnWhatsApp` function in `src/components/ProductCard.vue` and change the phone number.

## Company Information

- **Company Name**: Craftopica
- **Tagline**: Handcrafted with Love
- **Contact**: +91 7736241616
