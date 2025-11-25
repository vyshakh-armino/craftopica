export const products = [
  {
    id: 1,
    name: "Handwoven Basket Set",
    category: "Handcrafted Gifts",
    price: 1200,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1200&h=1200&fit=crop&q=80",
    description: "Beautiful handwoven basket set, perfect for storage or gifting"
  },
  {
    id: 2,
    name: "Artisan Pottery Collection",
    category: "Handcrafted Gifts",
    price: 2500,
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1200&h=1200&fit=crop&q=80",
    description: "Unique handcrafted pottery pieces made by local artisans"
  },
  {
    id: 3,
    name: "Wooden Craft Decor",
    category: "Handcrafted Gifts",
    price: 1800,
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&h=1200&fit=crop&q=80",
    description: "Elegant wooden decorative items for your home"
  },
  {
    id: 4,
    name: "Handmade Candle Set",
    category: "Handcrafted Gifts",
    price: 800,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=1200&h=1200&fit=crop&q=80",
    description: "Aromatic handmade candles with natural ingredients"
  },
  {
    id: 5,
    name: "Festive Gift Hamper",
    category: "Hampers",
    price: 3500,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1200&h=1200&fit=crop&q=80",
    description: "Premium festive hamper with assorted goodies"
  },
  {
    id: 6,
    name: "Gourmet Food Hamper",
    category: "Hampers",
    price: 4200,
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1200&h=1200&fit=crop&q=80",
    description: "Luxury hamper filled with gourmet treats"
  },
  {
    id: 7,
    name: "Wellness Hamper",
    category: "Hampers",
    price: 2800,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=1200&fit=crop&q=80",
    description: "Curated wellness hamper with organic products"
  },
  {
    id: 8,
    name: "Tea & Snacks Hamper",
    category: "Hampers",
    price: 1500,
    image: "https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?w=1200&h=1200&fit=crop&q=80",
    description: "Delightful hamper with premium teas and snacks"
  },
  {
    id: 9,
    name: "Organic Honey",
    category: "Food Items",
    price: 450,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=1200&h=1200&fit=crop&q=80",
    description: "Pure organic honey from local beekeepers"
  },
  {
    id: 10,
    name: "Homemade Pickles",
    category: "Food Items",
    price: 350,
    image: "https://images.unsplash.com/photo-1589621316382-008455b857cd?w=1200&h=1200&fit=crop&q=80",
    description: "Traditional homemade pickles with authentic taste"
  },
  {
    id: 11,
    name: "Artisan Chocolates",
    category: "Food Items",
    price: 600,
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=1200&h=1200&fit=crop&q=80",
    description: "Handcrafted premium chocolates"
  },
  {
    id: 12,
    name: "Spice Gift Box",
    category: "Food Items",
    price: 550,
    image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=1200&h=1200&fit=crop&q=80",
    description: "Collection of authentic Indian spices"
  },
  {
    id: 13,
    name: "Handmade Jewelry Box",
    category: "Handcrafted Gifts",
    price: 1600,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&h=1200&fit=crop&q=80",
    description: "Beautifully crafted wooden jewelry box"
  },
  {
    id: 14,
    name: "Organic Tea Collection",
    category: "Food Items",
    price: 750,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=1200&h=1200&fit=crop&q=80",
    description: "Premium organic tea varieties"
  },
  {
    id: 15,
    name: "Celebration Hamper",
    category: "Hampers",
    price: 5000,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1200&h=1200&fit=crop&q=80",
    description: "Grand celebration hamper for special occasions"
  },
  {
    id: 16,
    name: "Handcrafted Wall Art",
    category: "Handcrafted Gifts",
    price: 2200,
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1200&h=1200&fit=crop&q=80",
    description: "Unique handcrafted wall art pieces"
  },
  {
    id: 17,
    name: "Dry Fruits Hamper",
    category: "Food Items",
    price: 1800,
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=1200&h=1200&fit=crop&q=80",
    description: "Premium dry fruits and nuts collection"
  },
  {
    id: 18,
    name: "Handmade Soap Set",
    category: "Handcrafted Gifts",
    price: 650,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1200&h=1200&fit=crop&q=80",
    description: "Natural handmade soaps with essential oils"
  }
];

export const categories = [
  "All",
  "Handcrafted Gifts",
  "Hampers",
  "Food Items"
];

export const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹500 - ₹1000", min: 500, max: 1000 },
  { label: "₹1000 - ₹2000", min: 1000, max: 2000 },
  { label: "₹2000 - ₹3000", min: 2000, max: 3000 },
  { label: "Above ₹3000", min: 3000, max: Infinity }
];

