// src/data/products.js

const IMAGE_WIDTH = 300;
const IMAGE_HEIGHT = 200;

const products = [
  {
    id: 1,
    name: "რობოტი ტრანსფორმერი",
    price: 45.99,
    age: "5-8",
    category: "განვითარებადი",
    gender: "ბიჭისთვის",
    // ექნება იდენტური სურათი ყოველთვის (ID 1-ის გამო)
    image: `https://picsum.photos/${IMAGE_WIDTH}/${IMAGE_HEIGHT}?random=1`,
  },
  {
    id: 2,
    name: "LEGO ნაკრები (დიდი კოშკი)",
    price: 89.5,
    age: "8+",
    category: "განვითარებადი",
    gender: "ყველასთვის",
    image: `https://picsum.photos/${IMAGE_WIDTH}/${IMAGE_HEIGHT}?random=2`,
  },
  {
    id: 3,
    name: "პატარა თოჯინა (მეგობარი)",
    price: 25.0,
    age: "3-5",
    category: "სტანდარტული",
    gender: "გოგოსთვის",
    image: `https://picsum.photos/${IMAGE_WIDTH}/${IMAGE_HEIGHT}?random=3`,
  },
  {
    id: 4,
    name: "ხის ასაწყობი კოშკი",
    price: 15.0,
    age: "0-2",
    category: "განვითარებადი",
    gender: "ყველასთვის",
    image: `https://picsum.photos/${IMAGE_WIDTH}/${IMAGE_HEIGHT}?random=4`,
  },
  {
    id: 5,
    name: "მანქანის ტრეკი",
    price: 55.0,
    age: "5-8",
    category: "სტანდარტული",
    gender: "ბიჭისთვის",
    image: `https://picsum.photos/${IMAGE_WIDTH}/${IMAGE_HEIGHT}?random=5`,
  },
];

export default products;
