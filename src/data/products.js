// src/data/products.js

const productsData = [
  // 1. ფერადი ბლოკები კალათაში
  {
    id: 1,
    name: "ფერადი სამშენებლო კუბიკები",
    price: 38.50,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/1200x/b2/65/6b/b2656b7ca47b9e80c0cf54d56012b5cc.jpg",
  },
  // 2. ხის მანქანები
  {
    id: 2,
    name: "ხის მინი-მანქანების ნაკრები",
    price: 24.00,
    category: "სტანდარტული",
    gender: "ბიჭისთვის",
    age: "0-2",
    image: "https://i.pinimg.com/736x/70/10/e3/7010e3c0fc9b2575f6c90ab98c342846.jpg",
  },
  // 3. დიდი რბილი ბურთი (ფუტბოლის სტილში)
  {
    id: 3,
    name: "რბილი სპორტული ბურთი",
    price: 15.99,
    category: "სტანდარტული",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/1200x/d0/b2/48/d0b2482cc480a6a516e731f027e630c7.jpg",
  },
  // 4. ხის სათამაშოები (ბავშვისთვის)
  {
    id: 4,
    name: "ხის მობილური სათამაშოები",
    price: 49.90,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "0-2",
    image: "https://i.pinimg.com/1200x/2d/94/62/2d94624c3242d294d735f204287b7536.jpg",
  },
  // 5. სათამაშო მატარებელი და გზა
  {
    id: 5,
    name: "ხის სარკინიგზო გზა და მატარებელი",
    price: 75.99,
    category: "განვითარებადი",
    gender: "ბიჭისთვის",
    age: "5-8",
    image: "https://i.pinimg.com/1200x/b1/4e/70/b14e706214feb2c3d8875a757893cecd.jpg",
  },
  // 6. ფაზლი/კონსტრუქტორი ცხოველებით
  {
    id: 6,
    name: "ცხოველების ფორმის ფაზლი",
    price: 32.50,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/89/fb/f7/89fbf7c777882150772006ca31e872a5.jpg",
  },
  // 7. თევზაობის ნაკრები (ხის)
  {
    id: 7,
    name: "ხის თევზაობის ნაკრები (მაგნიტით)",
    price: 29.00,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/34/55/a3/3455a3a5832b060ecdb411f3795e0501.jpg",
  },
  // 8. რბილი დათუნია
  {
    id: 8,
    name: "დიდი რბილი დათუნია",
    price: 69.99,
    category: "სტანდარტული",
    gender: "გოგოსთვის",
    age: "0-2",
    image: "https://i.pinimg.com/736x/ca/88/d9/ca88d95ec013df66d8176a3d4b2293f4.jpg",
  },
  // 9. ხის დახლი/კაფე
  {
    id: 9,
    name: "ხის სათამაშო კაფე/მარკეტი",
    price: 145.00,
    category: "სტანდარტული",
    gender: "ყველასთვის",
    age: "5-8",
    image: "https://i.pinimg.com/736x/fe/66/90/fe6690b743c84dcd36511982075308b5.jpg",
  },
  // 10. საბავშვო გიტარა
  {
    id: 10,
    name: "საბავშვო მუსიკალური გიტარა",
    price: 42.00,
    category: "სტანდარტული",
    gender: "ბიჭისთვის",
    age: "5-8",
    image: "https://i.pinimg.com/1200x/2f/d6/00/2fd60011aa8fa8e9ab9829342fb2b81a.jpg",
  },
  // 11. ხის ფოტოაპარატი
  {
    id: 11,
    name: "ხის სათამაშო ფოტოაპარატი",
    price: 19.99,
    category: "სტანდარტული",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/58/34/f3/5834f3c9709b74afa3ceeb813663d60a.jpg",
  },
  // 12. ხის ფერადი სათამაშოები (ახალშობილისთვის)
  {
    id: 12,
    name: "ხის ფერადი საკიდი",
    price: 22.50,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "0-2",
    image: "https://i.pinimg.com/1200x/66/ac/4a/66ac4a15f99e5b9f969aebac94c3bd83.jpg",
  },
  // 13. ხის სათამაშოები კალათაში
  {
    id: 13,
    name: "ნატურალური ხის სათამაშოების ნაკრები",
    price: 45.00,
    category: "სტანდარტული",
    gender: "ყველასთვის",
    age: "0-2",
    image: "https://i.pinimg.com/736x/7d/b7/53/7db7533efa5621fbf2c666fe0e14d313.jpg",
  },
  // 14. ბლოკების კონსტრუქტორი
  {
    id: 14,
    name: "დიდი კონსტრუქტორი (კონტეინერით)",
    price: 85.00,
    category: "განვითარებადი",
    gender: "ბიჭისთვის",
    age: "5-8",
    image: "https://i.pinimg.com/1200x/9a/f1/ba/9af1ba6dc7cd6c0a095a4013892615a0.jpg",
  },
  // 15. რბილი თოჯინა (მძინარე)
  {
    id: 15,
    name: "რბილი მძინარე თოჯინა",
    price: 39.99,
    category: "სტანდარტული",
    gender: "გოგოსთვის",
    age: "3-5",
    image: "https://i.pinimg.com/1200x/d5/e7/a4/d5e7a4f73007ec73659a685baea199c7.jpg",
  },
  // 16. მუსიკალური ინსტრუმენტები
  {
    id: 16,
    name: "ხის მუსიკალური ინსტრუმენტების ნაკრები",
    price: 55.00,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/ab/c4/9f/abc49fa7e76c30a5f969099cce1dcb88.jpg",
  },
  // 17. ხის მინი-სამზარეულო
  {
    id: 17,
    name: "ხის მინი-სამზარეულო",
    price: 120.00,
    category: "სტანდარტული",
    gender: "გოგოსთვის",
    age: "5-8",
    image: "https://i.pinimg.com/1200x/fa/04/1a/fa041aeec1b89afccb7761cc62d20d4d.jpg",
  },
  // 18. ხის წიგნი/ფაზლი
  {
    id: 18,
    name: "ხის საგანმანათლებლო წიგნი/ფაზლი",
    price: 28.50,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/ba/6d/54/ba6d54571889b31f73b116fee4abf3eb.jpg",
  },
  // 19. პლასტმასის დიდი სამშენებლო ბლოკები
  {
    id: 19,
    name: "პლასტმასის დიდი სამშენებლო ბლოკები",
    price: 40.00,
    category: "სტანდარტული",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/ca/72/ab/ca72abb047f2d3178158a6728543f5c7.jpg",
  },
  // 20. ფერადი ბლოკები ხის ყუთში
  {
    id: 20,
    name: "ხის ბლოკები ყუთში",
    price: 35.99,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/bf/9a/7a/bf9a7a24a897f1693dd381ba820aae0d.jpg",
  },
  // 21. ხის ფიგურები და ფორმები
  {
    id: 21,
    name: "ხის ფიგურების ნაკრები",
    price: 21.00,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "0-2",
    image: "https://i.pinimg.com/736x/8a/76/33/8a7633f0f2307b1f586d916bb3588af2.jpg",
  },
  // 22. ხის რელსები და მატარებელი
  {
    id: 22,
    name: "რელსების დიდი ნაკრები",
    price: 95.00,
    category: "განვითარებადი",
    gender: "ბიჭისთვის",
    age: "5-8",
    image: "https://i.pinimg.com/1200x/c7/bf/22/c7bf2237d2d577ad4cc76f66a376c6f4.jpg",
  },
  // 23. რბილი სათამაშოები (ცხოველები)
  {
    id: 23,
    name: "რბილი ცხოველები (ნაკრები)",
    price: 49.99,
    category: "სტანდარტული",
    gender: "ყველასთვის",
    age: "0-2",
    image: "https://i.pinimg.com/736x/51/30/de/5130de9e813e6ee42477791e2a8dfbd4.jpg",
  },
  // 24. ხის სათამაშო სახლი
  {
    id: 24,
    name: "ხის დიდი სათამაშო სახლი",
    price: 180.00,
    category: "სტანდარტული",
    gender: "გოგოსთვის",
    age: "5-8",
    image: "https://i.pinimg.com/1200x/9f/ac/32/9fac32be165730c6a231b4c40d7c070c.jpg",
  },
  // 25. ფერადი ბარაბანი (მუსიკალური)
  {
    id: 25,
    name: "ფერადი მუსიკალური ბარაბანი",
    price: 32.00,
    category: "სტანდარტული",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/21/7e/72/217e72ab445c65b7d78d3c72913a7394.jpg",
  },
  // 26. ხის ფორმების სორტერი
  {
    id: 26,
    name: "ხის ფორმების სორტერი",
    price: 26.90,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "0-2",
    image: "https://i.pinimg.com/736x/72/33/70/723370b18e54ad3084e26d359a12b3bd.jpg",
  },
  // 27. მატრიოშკა (თოჯინები)
  {
    id: 27,
    name: "ტრადიციული მატრიოშკა",
    price: 55.00,
    category: "სტანდარტული",
    gender: "გოგოსთვის",
    age: "5-8",
    image: "https://i.pinimg.com/736x/b2/59/c0/b259c04d31e7444be98b24d24bfc259c.jpg",
  },
  // 28. ხის წიგნები/ბლოკები
  {
    id: 28,
    name: "ხის მინი-წიგნები/ბლოკები",
    price: 18.50,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "0-2",
    image: "https://i.pinimg.com/736x/76/7b/70/767b7087123034c59bcdca4574638c79.jpg",
  },
  // 29. ბავშვის საწოლის მობილი
  {
    id: 29,
    name: "საწოლის ხის მობილი",
    price: 38.99,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "0-2",
    image: "https://i.pinimg.com/736x/6f/47/4c/6f474ceb081212022c9fc12b5d81be68.jpg",
  },
  // 30. დიდი რბილი ბურთი (ფერადი)
  {
    id: 30,
    name: "დიდი ფერადი რბილი ბურთი",
    price: 14.50,
    category: "სტანდარტული",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/98/0f/67/980f679ed62600fdfab5c53d5bf45f46.jpg",
  },
  // 31. ხის ბლოკები ფერადი ყუთით
  {
    id: 31,
    name: "ხის კუბიკები (ფერადი ყუთი)",
    price: 36.00,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/f0/fb/26/f0fb26196524a25bae762cb2399dbccb.jpg",
  },
  // 32. ხის სათამაშო კამერა
  {
    id: 32,
    name: "ხის სათამაშო კამერა (ფირუზისფერი)",
    price: 21.50,
    category: "სტანდარტული",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/1200x/5e/20/be/5e20beffb7f2473b0cc758c85c28c8e4.jpg",
  },
  // 33. ხის თავსატეხი კატა
  {
    id: 33,
    name: "ხის თავსატეხი 'კატა'",
    price: 29.99,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "5-8",
    image: "https://i.pinimg.com/1200x/76/13/80/76138049fadf63794e9b780659cb09e8.jpg",
  },
  // 34. მუსიკალური დოლები
  {
    id: 34,
    name: "მუსიკალური დოლები და ჯოხები",
    price: 48.00,
    category: "სტანდარტული",
    gender: "ყველასთვის",
    age: "5-8",
    image: "https://i.pinimg.com/736x/b7/1c/39/b71c39dbe65078443026a1a9a133d879.jpg",
  },
  // 35. სათამაშო საჭე
  {
    id: 35,
    name: "სათამაშო საჭე (მანქანის)",
    price: 19.99,
    category: "სტანდარტული",
    gender: "ბიჭისთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/e1/eb/64/e1eb64529fd408a0a07efe2c3b006e35.jpg",
  },
  // 36. ხის ფერადი მატარებელი
  {
    id: 36,
    name: "ხის დასაწყობი ფერადი მატარებელი",
    price: 34.50,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/b4/f5/e6/b4f5e6c54551ee11ec82d0b36da4bbf1.jpg",
  },
  // 37. ფერადი ხის კუბიკები
  {
    id: 37,
    name: "ნეიტრალური ფერის ხის კუბიკები",
    price: 25.00,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "0-2",
    image: "https://i.pinimg.com/1200x/94/0e/96/940e9684f22a80d681193742a90539b0.jpg",
  },
  // 38. ქსოვილის წიგნი
  {
    id: 38,
    name: "რბილი ქსოვილის წიგნი (ჩვილის)",
    price: 16.99,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "0-2",
    image: "https://i.pinimg.com/736x/a5/11/f3/a511f31bcd3792cc520cf33cf11e3c17.jpg",
  },
  // 39. ბლოკები სამშენებლო
  {
    id: 39,
    name: "დიდი სამშენებლო ბლოკები (სპილენძისფერი)",
    price: 79.00,
    category: "განვითარებადი",
    gender: "ბიჭისთვის",
    age: "8+",
    image: "https://i.pinimg.com/1200x/38/20/9b/38209ba35a53ebf78202a28c47cea505.jpg",
  },
  // 40. ხის ტოსტერი
  {
    id: 40,
    name: "ხის სათამაშო ტოსტერი",
    price: 33.50,
    category: "სტანდარტული",
    gender: "გოგოსთვის",
    age: "3-5",
    image: "https://i.pinimg.com/1200x/ea/54/c2/ea54c243de0c2f40c5191f1ffad88d8b.jpg",
  },
  // 41. ხის ფოტოაპარატი (კურდღელი)
  {
    id: 41,
    name: "ხის ფოტოაპარატი 'კურდღელი'",
    price: 20.00,
    category: "სტანდარტული",
    gender: "გოგოსთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/5f/93/e0/5f93e0902fb3f23acba8751803ed62d9.jpg",
  },
  // 42. ხის ციგურა
  {
    id: 42,
    name: "ხის სათამაშო ციგურა (მძღოლით)",
    price: 45.99,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "0-2",
    image: "https://i.pinimg.com/1200x/bd/93/41/bd93419c08026a14e9b73a5ccf1545ab.jpg",
  },
  // 43. ხის თვითმფრინავი
  {
    id: 43,
    name: "ხის სათამაშო თვითმფრინავი",
    price: 27.50,
    category: "სტანდარტული",
    gender: "ბიჭისთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/47/50/90/475090adbf6172e5a1441c08f2ddd352.jpg",
  },
  // 44. მინი გიტარა
  {
    id: 44,
    name: "ხის მინი-გიტარა",
    price: 19.00,
    category: "სტანდარტული",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/cb/fd/f4/cbfdf4b1c471f54e3dd56aae07cd44c7.jpg",
  },
  // 45. ხის ბლოკები (ფორმები)
  {
    id: 45,
    name: "ხის გეომეტრიული ფორმების ნაკრები",
    price: 31.99,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/6f/ee/72/6fee726e3182a8629a5cbfed7cdb933b.jpg",
  },
  // 46. ხის ფერადი კუბიკები
  {
    id: 46,
    name: "ხის კუბიკები ჩანთით",
    price: 24.50,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "0-2",
    image: "https://i.pinimg.com/736x/ee/41/87/ee4187e3b4a355174975097015b60839.jpg",
  },
  // 47. ხის მუსიკალური დინოზავრი
  {
    id: 47,
    name: "ხის მუსიკალური დინოზავრი",
    price: 28.99,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/1200x/6a/51/02/6a510265ac623932c8c33695d5af8f09.jpg",
  },
  // 48. პატარა თოჯინები
  {
    id: 48,
    name: "რბილი მინი-თოჯინები (ნაკრები)",
    price: 39.00,
    category: "სტანდარტული",
    gender: "გოგოსთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/c3/de/bb/c3debb0534f7cf9e0eb13f86889f1247.jpg",
  },
  // 49. ხის დახლი (მწვანე)
  {
    id: 49,
    name: "ხის სათამაშო დახლი (მწვანე)",
    price: 155.00,
    category: "სტანდარტული",
    gender: "ყველასთვის",
    age: "5-8",
    image: "https://i.pinimg.com/1200x/b3/07/b6/b307b6ab958e4308db17a792e4b290f9.jpg",
  },
  // 50. ხის ფორმების სორტერი (სახლი)
  {
    id: 50,
    name: "ხის ფორმების სორტერი-სახლი",
    price: 35.00,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "0-2",
    image: "https://i.pinimg.com/1200x/2b/17/f9/2b17f983e74154f941476fdeb4cbe6d5.jpg",
  },
  // 51. ხის ფერადი ბლოკები
  {
    id: 51,
    name: "ხის დიდი ფერადი ბლოკები",
    price: 52.00,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/1200x/8b/31/a7/8b31a737a2a4140f76a3516bab3692a9.jpg",
  },
  // 52. ხის რელსები (ქალაქი)
  {
    id: 52,
    name: "ხის რელსები და ქალაქის დეტალები",
    price: 110.00,
    category: "განვითარებადი",
    gender: "ბიჭისთვის",
    age: "5-8",
    image: "https://i.pinimg.com/736x/14/32/55/1432553402eeedc270adc457773b29b4.jpg",
  },
  // 53. ხის სათამაშო კალათა
  {
    id: 53,
    name: "ხის პროდუქტების კალათა",
    price: 49.00,
    category: "სტანდარტული",
    gender: "გოგოსთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/2c/72/54/2c7254afe7838dec3f58388526813408.jpg",
  },
  // 54. მუსიკალური ქსილოფონი
  {
    id: 54,
    name: "ხის მუსიკალური ქსილოფონი",
    price: 25.50,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/54/6c/47/546c479b98f9f1cfb8edd3684ee9ff42.jpg",
  },
  // 55. ფაზლი დინოზავრი
  {
    id: 55,
    name: "ხის ფაზლი 'დინოზავრი'",
    price: 23.00,
    category: "განვითარებადი",
    gender: "ბიჭისთვის",
    age: "5-8",
    image: "https://i.pinimg.com/1200x/9d/e1/05/9de10508e44d2296a8e8190c91f53b17.jpg",
  },
  // 56. ხის ბლოკები (მშენებლობა)
  {
    id: 56,
    name: "ხის არქიტექტურული ბლოკები",
    price: 60.00,
    category: "განვითარებადი",
    gender: "ბიჭისთვის",
    age: "5-8",
    image: "https://i.pinimg.com/1200x/17/64/23/1764232732a7cfe424cb92c26e309148.jpg",
  },
  // 57. სათამაშო რგოლები
  {
    id: 57,
    name: "რბილი სათამაშო რგოლები",
    price: 12.99,
    category: "სტანდარტული",
    gender: "ყველასთვის",
    age: "0-2",
    image: "https://i.pinimg.com/736x/dd/35/96/dd359669cec18a02223b0d4f99e2b38c.jpg",
  },
  // 58. ხის მუსიკალური ინსტრუმენტები
  {
    id: 58,
    name: "ხის მუსიკალური ნაკრები",
    price: 59.00,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/1200x/64/21/86/64218649f6bd978b90f9a0ec565f92e3.jpg",
  },
  // 59. ხის კონსტრუქტორი/ფაზლი
  {
    id: 59,
    name: "ხის კონსტრუქტორი 'ველური ბუნება'",
    price: 34.99,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "5-8",
    image: "https://i.pinimg.com/736x/89/56/df/8956dfe78ef2c9dbc1c8449acde72c3e.jpg",
  },
  // 60. ხის დასაწყობი ცილინდრები
  {
    id: 60,
    name: "ხის დასაწყობი ცილინდრები (განმავითარებელი)",
    price: 27.00,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "0-2",
    image: "https://i.pinimg.com/736x/21/ed/a8/21eda8870903b5bffebcb7dd0dbdb214.jpg",
  },
  // 61. ხის მინი-მატარებელი
  {
    id: 61,
    name: "ხის მინი-მატარებელი",
    price: 19.50,
    category: "სტანდარტული",
    gender: "ბიჭისთვის",
    age: "3-5",
    image: "https://i.pinimg.com/1200x/7e/9a/0d/7e9a0d3528c940996d634fd001320eb1.jpg",
  },
  // 62. რბილი სათამაშო (დათვის თავი)
  {
    id: 62,
    name: "რბილი სათამაშო 'დათვის თავი'",
    price: 15.00,
    category: "სტანდარდული",
    gender: "ყველასთვის",
    age: "0-2",
    image: "https://i.pinimg.com/1200x/2f/75/3e/2f753eeddfb28b40f32be0026cc50651.jpg",
  },
  // 63. რბილი თოჯინა (გოგო)
  {
    id: 63,
    name: "ქსოვილის რბილი თოჯინა",
    price: 26.90,
    category: "სტანდარტული",
    gender: "გოგოსთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/86/90/ff/8690ff17cfe0ab494c95ba30b683fb86.jpg",
  },
  // 64. ხის სათამაშო სამზარეულო
  {
    id: 64,
    name: "ხის დიდი სამზარეულო",
    price: 199.00,
    category: "სტანდარტული",
    gender: "გოგოსთვის",
    age: "8+",
    image: "https://i.pinimg.com/1200x/17/a5/4f/17a54fb0da5092ab9c5b9ee9eee85399.jpg",
  },
  // 65. ფერადი ხის კონსტრუქტორი
  {
    id: 65,
    name: "ფერადი ხის კონსტრუქტორი (მრავალფეროვანი)",
    price: 44.99,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "5-8",
    image: "https://i.pinimg.com/1200x/80/06/29/800629efd43062be4dfaa9178a2d0456.jpg",
  },
  // 66. დათვის ფორმის ხის ბლოკები
  {
    id: 66,
    name: "დათვის ფორმის ხის ბლოკები",
    price: 29.00,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "0-2",
    image: "https://i.pinimg.com/1200x/9d/6b/32/9d6b32d705c342a8fa058ab5e9bd5f72.jpg",
  },
  // 67. ხის მუსიკალური დოლები
  {
    id: 67,
    name: "ხის დოლები და ქსილოფონი",
    price: 55.00,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/1200x/6f/63/d6/6f63d6bc23fc769174423d641aef8ed8.jpg",
  },
  // 68. ხის წიგნები/ბლოკები
  {
    id: 68,
    name: "ხის მინი-წიგნები (ფორმები)",
    price: 17.50,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "0-2",
    image: "https://i.pinimg.com/736x/fe/c2/c8/fec2c84bfcae7f6971f1b3088bd9dcc5.jpg",
  },
  // 69. ხის კუბიკები (მშენებლობა)
  {
    id: 69,
    name: "ხის სამშენებლო კუბიკები",
    price: 38.00,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/1200x/39/78/d8/3978d8edcb12bdd8ade141a661829319.jpg",
  },
  // 70. რბილი თოჯინა (ნათელი ფერები)
  {
    id: 70,
    name: "ნათელი რბილი თოჯინა",
    price: 32.50,
    category: "სტანდარტული",
    gender: "გოგოსთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/9b/78/0c/9b780ca25db2bce72b62acc72723ddb5.jpg",
  },
  // 71. ხის მინი-კამერა
  {
    id: 71,
    name: "ხის მინი-კამერა (წითელი)",
    price: 18.00,
    category: "სტანდარტული",
    gender: "ყველასთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/86/42/71/864271ca9b538d342c98f27d74981435.jpg",
  },
  // 72. სათამაშო საჭე (პატარა)
  {
    id: 72,
    name: "ხის საჭე (პატარა)",
    price: 22.00,
    category: "სტანდარტული",
    gender: "ბიჭისთვის",
    age: "3-5",
    image: "https://i.pinimg.com/1200x/e5/44/d7/e544d78247eadbd126922d07e53a571a.jpg",
  },
  // 73. ხის ფერადი ბლოკები
  {
    id: 73,
    name: "ფუნქციური ხის ფერადი ბლოკები",
    price: 49.00,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "5-8",
    image: "https://i.pinimg.com/1200x/3b/13/d7/3b13d79a86afd15585b5bd039f4f8e8e.jpg",
  },
  // 74. ხის სათამაშო საკვები
  {
    id: 74,
    name: "ხის სათამაშო საკვები (დესერტი)",
    price: 37.00,
    category: "სტანდარტული",
    gender: "გოგოსთვის",
    age: "3-5",
    image: "https://i.pinimg.com/736x/47/ec/87/47ec87159f0ba185ee58020e635d17e5.jpg",
  },
  // 75. ხის ფერადი მობილი
  {
    id: 75,
    name: "ხის ფერადი მობილი (ცხოველები)",
    price: 26.50,
    category: "განვითარებადი",
    gender: "ყველასთვის",
    age: "0-2",
    image: "https://i.pinimg.com/736x/00/e4/cf/00e4cf4cef4d151779f0e96934e48e92.jpg",
  },
];

export default productsData;