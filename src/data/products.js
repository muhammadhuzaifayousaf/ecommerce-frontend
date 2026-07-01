// ─────────────────────────────────────────────────────────────────────────────
// MOCK DATA — replace image filenames with your actual files in public/images/
// ─────────────────────────────────────────────────────────────────────────────

export const navCategories = [
  'All category', 'Hot offers', 'Gift boxes', 'Projects', 'Menu item', 'Help',
]

export const heroCategories = [
  'Automobiles',
  'Clothes and wear',
  'Home interiors',
  'Computer and tech',
  'Tools, equipments',
  'Sports and outdoor',
  'Animal and pets',
  'Machinery tools',
  'More category',
]

export const sidebarCategories = [
  { name: 'Mobile accessory', count: 12911 },
  { name: 'Electronics', count: 8453 },
  { name: 'Smartphones', count: 4219 },
  { name: 'Modern tech', count: 3100 },
]

export const brands = ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo']
export const features = ['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory']
export const conditions = ['Any', 'Refurbished', 'Brand new', 'Old items']
export const ratingFilters = [5, 4, 3, 2]

export const products = [
  {
    id: 1,
    name: 'T-shirts with multiple colors for men',
    price: 10.30,
    originalPrice: null,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    category: 'Clothes and wear',
    brand: 'Apple',
    image: 'tshirt.jpg',
    seller: 'Artel Market',
    discount: -25,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    specs: {
      Model: '#8786867',
      Style: 'Classic style',
      Certificate: 'ISO-898921212',
      Size: '34mm x 450mm x 19mm',
      Memory: '36GB RAM',
    },
    features: [
      'Some great feature name here',
      'Lorem ipsum dolor sit amet, consectetur',
      'Duis aute irure dolor in reprehenderit',
      'Some great feature name here',
    ],
  },
  {
    id: 2,
    name: 'Solid Backpack blue jeans large size',
    price: 10.30,
    originalPrice: 12.80,
    rating: 5.9,
    orders: 154,
    freeShipping: true,
    category: 'Clothes and wear',
    brand: 'Samsung',
    image: 'backpack.jpg',
    seller: 'Best factory LLC',
    discount: -25,
    description: 'High quality solid backpack made from premium denim material.',
    specs: { Model: '#4521', Style: 'Casual', Material: 'Denim', Size: 'Large' },
    features: ['Water resistant', 'Multiple pockets', 'Padded straps'],
  },
  {
    id: 3,
    name: 'GoPro HERO6 4K Action Camera - Black',
    price: 99.50,
    originalPrice: 128.00,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    category: 'Electronics',
    brand: 'Apple',
    image: 'camera.jpg',
    seller: 'Artel Market',
    discount: -25,
    description: 'Professional 4K action camera for all your adventures.',
    specs: { Model: 'HERO6', Resolution: '4K', Waterproof: 'Yes' },
    features: ['4K video', 'Waterproof', 'Voice control'],
  },
  {
    id: 4,
    name: 'Water boiler black for kitchen 1200W',
    price: 80.95,
    originalPrice: null,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    category: 'Home and outdoor',
    brand: 'Pocco',
    image: 'kettle.jpg',
    seller: 'Artel Market',
    discount: null,
    description: 'Modern electric water boiler with fast heating technology.',
    specs: { Model: 'WB1200', Wattage: '1200W', Capacity: '1.7L' },
    features: ['Auto shutoff', 'Boil-dry protection', 'Cordless design'],
  },
  {
    id: 5,
    name: 'Canon Camera EOS 2000 Black 10x zoom',
    price: 998.00,
    originalPrice: 1128.00,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    category: 'Electronics',
    brand: 'Samsung',
    image: 'phone1.jpg',
    seller: 'Guanjoi Trading LLC',
    discount: -25,
    description: 'Professional DSLR camera with 10x optical zoom.',
    specs: { Model: 'EOS 2000', Zoom: '10x', Sensor: 'APS-C' },
    features: ['4K video recording', 'Built-in WiFi', 'Touchscreen LCD'],
  },
  {
    id: 6,
    name: 'Apple iPhone 12 Pro 256GB Blue',
    price: 99.50,
    originalPrice: 128.00,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    category: 'Smartphones',
    brand: 'Apple',
    image: 'phone2.jpg',
    seller: 'Artel Market',
    discount: -25,
    description: 'Flagship iPhone with triple camera system.',
    specs: { Model: 'iPhone 12 Pro', Storage: '256GB', Color: 'Blue' },
    features: ['5G capable', 'ProMotion display', 'Night mode'],
  },
  {
    id: 7,
    name: 'Huawei P30 Lite Midnight Black',
    price: 99.50,
    originalPrice: 128.00,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    category: 'Smartphones',
    brand: 'Huawei',
    image: 'phone3.jpg',
    seller: 'Artel Market',
    discount: -25,
    description: 'Mid-range smartphone with impressive camera.',
    specs: { Model: 'P30 Lite', Storage: '128GB', RAM: '6GB' },
    features: ['Triple camera', 'Fast charging', 'Long battery life'],
  },
  {
    id: 8,
    name: 'MacBook Pro 16" Space Gray 2023',
    price: 99.50,
    originalPrice: 128.00,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    category: 'Computer and tech',
    brand: 'Apple',
    image: 'laptop.jpg',
    seller: 'Artel Market',
    discount: -25,
    description: 'Powerful laptop for professionals.',
    specs: { Model: 'MacBook Pro 16"', Chip: 'M2 Pro', RAM: '16GB' },
    features: ['Liquid Retina XDR display', '22-hour battery', 'MagSafe charging'],
  },
  {
    id: 9,
    name: 'Smart Watch Series 7 Silver Gray',
    price: 99.50,
    originalPrice: 128.00,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    category: 'Electronics',
    brand: 'Samsung',
    image: 'smartwatch.jpg',
    seller: 'Best factory LLC',
    discount: -25,
    description: 'Advanced smartwatch with health monitoring.',
    specs: { Model: 'Series 7', Display: 'AMOLED', Battery: '18 hours' },
    features: ['Heart rate monitor', 'GPS', 'Water resistant 50m'],
  },
]

// ─── Cart Data ───────────────────────────────────────────────────────────────

export const initialCartItems = [
  {
    id: 1,
    name: 'T-shirts with multiple colors, for men and lady',
    price: 78.99,
    qty: 9,
    size: 'medium',
    color: 'blue',
    material: 'Plastic',
    seller: 'Artel Market',
    image: 'tshirt.jpg',
  },
  {
    id: 2,
    name: 'T-shirts with multiple colors, for men and lady',
    price: 39.00,
    qty: 3,
    size: 'medium',
    color: 'blue',
    material: 'Plastic',
    seller: 'Best factory LLC',
    image: 'backpack.jpg',
  },
  {
    id: 3,
    name: 'T-shirts with multiple colors, for men and lady',
    price: 170.50,
    qty: 1,
    size: 'medium',
    color: 'blue',
    material: 'Plastic',
    seller: 'Artel Market',
    image: 'smartwatch.jpg',
  },
]

export const savedForLaterItems = [
  { id: 10, name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, image: 'phone1.jpg' },
  { id: 11, name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, image: 'phone2.jpg' },
  { id: 12, name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, image: 'smartwatch.jpg' },
  { id: 13, name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, image: 'laptop.jpg' },
]

// ─── Home Page Data ──────────────────────────────────────────────────────────

export const dealProducts = [
  { id: 1, name: 'Smart watches', image: 'smartwatch.jpg', discount: -25, category: 'Men blazers' },
  { id: 2, name: 'Laptops',       image: 'laptop.jpg',     discount: -15, category: 'Laptops' },
  { id: 3, name: 'GoPro cameras', image: 'camera.jpg',     discount: -40, category: 'Cameras' },
  { id: 4, name: 'Headphones',    image: 'headphones.jpg', discount: -25, category: 'Headphones' },
  { id: 5, name: 'Canon cameras', image: 'phone1.jpg',     discount: -25, category: 'Canon cameras' },
]

export const homeOutdoorCategories = [
  { name: 'Soft chairs',    price: 19, image: 'chair1.jpg' },
  { name: 'Sofa & chair',   price: 19, image: 'sofa.jpg' },
  { name: 'Kitchen dishes', price: 19, image: 'dishes.jpg' },
  { name: 'Smart watches',  price: 19, image: 'smartwatch.jpg' },
  { name: 'Kitchen mixer',  price: 100, image: 'mixer.jpg' },
  { name: 'Blenders',       price: 39, image: 'blender.jpg' },
  { name: 'Home appliance', price: 19, image: 'appliance.jpg' },
  { name: 'Coffee maker',   price: 10, image: 'coffee.jpg' },
]

export const electronicsCategories = [
  { name: 'Smart watches', price: 19,  image: 'smartwatch.jpg' },
  { name: 'Cameras',       price: 89,  image: 'camera.jpg' },
  { name: 'Headphones',    price: 70,  image: 'headphones.jpg' },
  { name: 'Smart watches', price: 90,  image: 'smartwatch.jpg' },
  { name: 'Gaming set',    price: 35,  image: 'headphones.jpg' },
  { name: 'Laptops & PC',  price: 340, image: 'laptop.jpg' },
  { name: 'Smartphones',   price: 19,  image: 'phone2.jpg' },
  { name: 'Electric kettle', price: 240, image: 'kettle.jpg' },
]

export const suppliersRegion = [
  { country: "United Arab Emirates", domain: "shopname.ae", code: "AE" },
  { country: "Australia", domain: "shopname.au", code: "AU" },
  { country: "United States", domain: "shopname.us", code: "US" },
  { country: "Russia", domain: "shopname.ru", code: "RU" },
  { country: "Italy", domain: "shopname.it", code: "IT" },
  { country: "Denmark", domain: "shopname.dk", code: "DK" },
  { country: "France", domain: "shopname.fr", code: "FR" },
  { country: "China", domain: "shopname.cn", code: "CN" },
  { country: "Great Britain", domain: "shopname.co.uk", code: "GB" },
];

export const recommendedProducts = [
  { id: 1,  name: 'T-shirts with multiple colors, for men', price: 10.30, image: 'tshirt.jpg' },
  { id: 2,  name: 'Jeans shorts for men blue color',        price: 10.30, image: 'backpack.jpg' },
  { id: 3,  name: 'Brown winter coat medium size',          price: 12.50, image: 'jacket.jpg' },
  { id: 4,  name: 'Jeans bag for travel for men',           price: 34.00, image: 'backpack.jpg' },
  { id: 5,  name: 'Leather wallet',                         price: 99.00, image: 'wallet.jpg' },
  { id: 6,  name: 'Canon camera black 100x zoom',           price: 9.99,  image: 'camera.jpg' },
  { id: 7,  name: 'Headset for gaming with mic',            price: 8.99,  image: 'headphones.jpg' },
  { id: 8,  name: 'Smartwatch silver color modern',         price: 10.30, image: 'smartwatch.jpg' },
  { id: 9,  name: 'Blue wallet for men leather material',   price: 10.30, image: 'wallet.jpg' },
  { id: 10, name: 'Jeans bag for travel for men',           price: 80.95, image: 'kettle.jpg' },
]
