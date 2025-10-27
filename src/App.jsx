import React, { useState, useMemo } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import FilterSidebar from "./components/FilterSidebar";
import productsData from "./data/products";
import "./App.css";

function App() {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);

  // ... (ფილტრაციის ლოგიკა უცვლელია) ...
  const [filters, setFilters] = useState({
    category: "ყველა",
    gender: "ყველასთვის",
    age: "ყველა",
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

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

  // კალათაში დამატების ლოგიკა (უცვლელია)
  const addToCart = (productToAdd) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productToAdd.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  // კალათიდან ამოღების ლოგიკა (უცვლელია)
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);

      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };

  // 6. ახალი: "ყიდვის" (Checkout) ლოგიკა
  const handleCheckout = () => {
    if (cart.length > 0) {
      // კალათის დაცარიელება
      setCart([]);
      // შეტყობინების ჩვენება
      alert("✅ შეკვეთა წარმატებით გაფორმდა! მალე დაგიკავშირდებით.");
    } else {
      alert("კალათა ცარიელია! დაამატეთ პროდუქტები ყიდვის გასაფორმებლად.");
    }
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
            <Cart
              cartItems={cart}
              onRemoveFromCart={removeFromCart}
              onCheckout={handleCheckout} // ფუნქციის გადაცემა Cart კომპონენტში
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
