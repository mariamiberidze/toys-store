// src/data/products.js

const IMAGE_SIZE = "300x200";

const products = [
  {
    id: 1,
    name: "რობოტი ტრანსფორმერი",
    price: 45.99,
    age: "5-8",
    category: "განვითარებადი",
    gender: "ბიჭისთვის",
    // იყენებს placehold.co-ს: https://placehold.co/300x200/007bff/FFFFFF?text=ROBOT
    image: `https://placehold.co/${IMAGE_SIZE}/007bff/FFFFFF?text=ROBOT+TOY`,
  },
  {
    id: 2,
    name: "LEGO ნაკრები (დიდი კოშკი)",
    price: 89.5,
    age: "8+",
    category: "განვითარებადი",
    gender: "ყველასთვის",
    image: `https://placehold.co/${IMAGE_SIZE}/28a745/FFFFFF?text=LEGO+SET`,
  },
  {
    id: 3,
    name: "პატარა თოჯინა (მეგობარი)",
    price: 25.0,
    age: "3-5",
    category: "სტანდარტული",
    gender: "გოგოსთვის",
    image: `https://placehold.co/${IMAGE_SIZE}/ffc107/333333?text=DOLL`,
  },
  {
    id: 4,
    name: "ხის ასაწყობი კოშკი",
    price: 15.0,
    age: "0-2",
    category: "განვითარებადი",
    gender: "ყველასთვის",
    image: `https://placehold.co/${IMAGE_SIZE}/6f42c1/FFFFFF?text=WOOD+TOY`,
  },
  {
    id: 5,
    name: "მანქანის ტრეკი",
    price: 55.0,
    age: "5-8",
    category: "სტანდარტული",
    gender: "ბიჭისთვის",
    image: `https://placehold.co/${IMAGE_SIZE}/dc3545/FFFFFF?text=CAR+TRACK`,
  },
];

export default products;
