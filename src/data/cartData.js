import { img } from "../utils/helpers";

const cartItems = [
  {
    id: 1,
    name: "T-shirts with multiple colors, for men and lady",
    image: img("tshirt.jpg"),
    seller: "Artel Market",
    size: "Medium",
    color: "Blue",
    material: "Plastic",
    qty: 2,
    price: 78.99,
  },
  {
    id: 2,
    name: "Solid Backpack blue jeans large size",
    image: img("backpack.jpg"),
    seller: "Best Factory LLC",
    size: "Medium",
    color: "Blue",
    material: "Plastic",
    qty: 1,
    price: 39,
  },
  {
    id: 3,
    name: "Water boiler black for kitchen",
    image: img("kettle.jpg"),
    seller: "Artel Market",
    size: "Medium",
    color: "Blue",
    material: "Plastic",
    qty: 1,
    price: 170.5,
  },
];

export const savedProducts = [
  {
    id: 1,
    name: "GoPro HERO6 4K Action Camera",
    image: img("camera.jpg"),
    price: 99.5,
  },
  {
    id: 2,
    name: "iPhone 12",
    image: img("phone1.jpg"),
    price: 99.5,
  },
  {
    id: 3,
    name: "Smart Watch",
    image: img("smartwatch.jpg"),
    price: 99.5,
  },
  {
    id: 4,
    name: "Laptop",
    image: img("laptop.jpg"),
    price: 99.5,
  },
];

export default cartItems;