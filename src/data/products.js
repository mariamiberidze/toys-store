// src/data/products.js - გაფართოებული სია ვიზუალურად აღწერითი სურათებით

const IMAGE_SIZE = "300x200";

const products = [
  // --- რობოტები და მანქანები (ბიჭისთვის) ---
  {
    id: 1,
    name: "რობოტი ტრანსფორმერი",
    price: 45.99,
    age: "5-8",
    category: "განვითარებადი",
    gender: "ბიჭისთვის",
    // რობოტის სურათი
    image: `https://placehold.co/${IMAGE_SIZE}/007bff/FFFFFF?text=MECH+ROBOT+TOY`,
  },
  {
    id: 5,
    name: "მანქანის ტრეკი",
    price: 55.0,
    age: "5-8",
    category: "სტანდარტული",
    gender: "ბიჭისთვის",
    // მანქანის ტრეკის სურათი
    image: `https://placehold.co/${IMAGE_SIZE}/dc3545/FFFFFF?text=RACE+CAR+TRACK`,
  },
  {
    id: 10,
    name: "პულტიანი ტრიუკი მანქანა",
    price: 65.0,
    age: "5-8",
    category: "სტანდარტული",
    gender: "ბიჭისთვის",
    // RC მანქანის სურათი
    image: `https://placehold.co/${IMAGE_SIZE}/ff9800/FFFFFF?text=RC+STUNT+VEHICLE`,
  },
  {
    id: 13,
    name: "კონსტრუქტორი (მექანიკური)",
    price: 40.0,
    age: "8+",
    category: "განვითარებადი",
    gender: "ბიჭისთვის",
    // მექანიკური კონსტრუქტორის სურათი
    image: `https://placehold.co/${IMAGE_SIZE}/607d8b/FFFFFF?text=MECHANICAL+KIT`,
  },

  // --- განმავითარებელი ხის სათამაშოები (ყველასთვის) ---
  {
    id: 4,
    name: "ხის ასაწყობი კოშკი",
    price: 15.0,
    age: "0-2",
    category: "განვითარებადი",
    gender: "ყველასთვის",
    // ხის კოშკის სურათი
    image: `https://placehold.co/${IMAGE_SIZE}/6f42c1/FFFFFF?text=WOODEN+BLOCKS+TOWER`,
  },
  {
    id: 6,
    name: "ხის პაზლი (ფორმების დამხარისხებელი)",
    price: 32.5,
    age: "0-2",
    category: "განვითარებადი",
    gender: "ყველასთვის",
    // ფორმების დამხარისხებლის სურათი
    image: `https://placehold.co/${IMAGE_SIZE}/e91e63/FFFFFF?text=WOOD+SHAPE+SORTER`,
  },
  {
    id: 12,
    name: "სამზარეულოს ნაკრები (ხის)",
    price: 59.99,
    age: "3-5",
    category: "სტანდარტული",
    gender: "გოგოსთვის",
    // ხის სამზარეულოს სურათი
    image: `https://placehold.co/${IMAGE_SIZE}/795548/FFFFFF?text=WOOD+KITCHEN+SET`,
  },

  // --- კუკლები და რბილი სათამაშოები ---
  {
    id: 3,
    name: "პატარა თოჯინა (მეგობარი)",
    price: 25.0,
    age: "3-5",
    category: "სტანდარტული",
    gender: "გოგოსთვის",
    // თოჯინის სურათი
    image: `https://placehold.co/${IMAGE_SIZE}/ffc107/333333?text=BABY+DOLL`,
  },
  {
    id: 7,
    name: "დიდი თოჯინების სახლი (ასაწყობი)",
    price: 120.0,
    age: "5-8",
    category: "განვითარებადი",
    gender: "გოგოსთვის",
    // თოჯინების სახლის სურათი
    image: `https://placehold.co/${IMAGE_SIZE}/f3a4b7/333333?text=TOY+DOLLHOUSE`,
  },
  {
    id: 14,
    name: "რბილი სათამაშო (ლომი)",
    price: 18.0,
    age: "0-2",
    category: "სტანდარტული",
    gender: "ყველასთვის",
    // დათუნია/რბილი სათამაშოს სურათი
    image: `https://placehold.co/${IMAGE_SIZE}/ffeb3b/333333?text=CUDDLY+BEAR+PLUSH`,
  },

  // --- სხვა განმავითარებელი/კრეატიული ---
  {
    id: 2,
    name: "LEGO ნაკრები (დიდი კოშკი)",
    price: 89.5,
    age: "8+",
    category: "განვითარებადი",
    gender: "ყველასთვის",
    // ლეგოს სურათი
    image: `https://placehold.co/${IMAGE_SIZE}/28a745/FFFFFF?text=LEGO+ARCHITECTURE`,
  },
  {
    id: 8,
    name: "ხელოვნების ნაკრები (საწყისი დონე)",
    price: 22.99,
    age: "3-5",
    category: "განვითარებადი",
    gender: "ყველასთვის",
    // ხატვის ნაკრები
    image: `https://placehold.co/${IMAGE_SIZE}/8bc34a/FFFFFF?text=KIDS+ART+KIT`,
  },
  {
    id: 9,
    name: "მაგნიტური სამშენებლო ფილები (50 ც.)",
    price: 75.0,
    age: "3-5",
    category: "განვითარებადი",
    gender: "ყველასთვის",
    // მაგნიტური ფილების სურათი
    image: `https://placehold.co/${IMAGE_SIZE}/9c27b0/FFFFFF?text=MAGNA+TILES+BUILD`,
  },
  {
    id: 11,
    name: "მიკროსკოპი (საბავშვო)",
    price: 49.99,
    age: "8+",
    category: "განვითარებადი",
    gender: "ყველასთვის",
    // მიკროსკოპის სურათი
    image: `https://placehold.co/${IMAGE_SIZE}/2196f3/FFFFFF?text=CHILDREN+MICROSCOPE`,
  },
  {
    id: 15,
    name: "პლასტელინის ნაკრები (დიდი)",
    price: 28.5,
    age: "3-5",
    category: "სტანდარტული",
    gender: "ყველასთვის",
    // პლასტელინის სურათი
    image: `https://placehold.co/${IMAGE_SIZE}/e67e22/FFFFFF?text=CLAY+PLAY+DOUGH`,
  },
];

export default products;
