import React, { useState, useMemo } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import FilterSidebar from "./components/FilterSidebar";
import productsData from "./data/products";
import "./App.css"; // სტილების იმპორტი

function App() {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);

  // 1. ფილტრაციის საწყისი მდგომარეობა
  const [filters, setFilters] = useState({
    category: "ყველა",
    gender: "ყველასთვის",
    age: "ყველა",
  });

  // 2. ფილტრების განახლების ფუნქცია
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // 3. გაფილტრული პროდუქტების ლოგიკა (ოპტიმიზებული useMemo-ს გამოყენებით)
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const isCategoryMatch =
        filters.category === "ყველა" || product.category === filters.category;
      const isGenderMatch =
        filters.gender === "ყველასთვის" || product.gender === filters.gender;
      const isAgeMatch = filters.age === "ყველა" || product.age === filters.age;

      return isCategoryMatch && isGenderMatch && isAgeMatch;
    });
  }, [products, filters]);

  // 4. კალათაში დამატების ლოგიკა
  const addToCart = (productToAdd) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productToAdd.id);

      if (existingItem) {
        // თუ უკვე არის, გაზარდე რაოდენობა
        return prevCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // თუ ახალია, დაამატე 1 რაოდენობით
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  // 5. კალათიდან ამოღების ლოგიკა (რაოდენობის შემცირება)
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);

      if (existingItem && existingItem.quantity > 1) {
        // შეამცირე რაოდენობა
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // წაშალე პროდუქტი მთლიანად (თუ რაოდენობა 1-ია)
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🧸 სათამაშოების ონლაინ მაღაზია</h1>
      </header>
      <div className="main-container">
        <FilterSidebar
          onFilterChange={handleFilterChange}
          currentFilters={filters}
        />

        <div className="content">
          <div className="product-section">
            <ProductList products={filteredProducts} onAddToCart={addToCart} />
          </div>

          <div className="cart-section">
            <Cart cartItems={cart} onRemoveFromCart={removeFromCart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
