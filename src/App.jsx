import React, { useState, useMemo } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import FilterSidebar from "./components/FilterSidebar";
import CheckoutForm from "./components/CheckoutForm"; // <-- CheckoutForm იმპორტი
import productsData from "./data/products";
import "./App.css";

function App() {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false); // ფორმის ხილვადობის მდგომარეობა

  // ფილტრაციის მდგომარეობა
  const [filters, setFilters] = useState({
    category: "ყველა",
    gender: "ყველასთვის",
    age: "ყველა",
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // 🚀 ოპტიმიზაცია: ფილტრაცია useMemo-თი, რათა არ მოხდეს პროდუქტების სიის გაფილტვრა 
  // ყოველ ჯერზე, როცა cart-ის მდგომარეობა იცვლება.
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

  // კალათაში დამატების ლოგიკა
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

  // კალათიდან ამოღების ლოგიკა
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

  // 1. შეკვეთის დაწყება: ფორმის გახსნა
  const handleStartCheckout = () => {
    if (cart.length > 0) {
      setIsCheckoutOpen(true);
    } else {
      alert("კალათა ცარიელია! დაამატეთ პროდუქტები ყიდვის გასაფორმებლად.");
    }
  };

  // 2. შეკვეთის დასრულება (ფორმის გაგზავნა)
  const handleOrderSubmit = (formData) => {
    const totalAmount = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    // აქ ხდება რეალური შეკვეთის გაგზავნა სერვერზე... (ამ ეტაპზე კონსოლში ვბეჭდავთ)
    console.log("შეკვეთის მონაცემები:", formData);
    console.log("პროდუქტები:", cart);
    console.log("ჯამი:", totalAmount.toFixed(2));

    // კალათის დაცარიელება და ფორმის დახურვა
    setCart([]);
    setIsCheckoutOpen(false);
    alert(`✅ შეკვეთა ${formData.name} (ჯამი: ${totalAmount.toFixed(2)} GEL) წარმატებით გაფორმდა! მალე დაგიკავშირდებით.`);
  };

  // თუ isCheckoutOpen არის true, ვაჩვენებთ მხოლოდ CheckoutForm-ს
  if (isCheckoutOpen) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>🛒 შეკვეთის გაფორმება</h1>
        </header>
        <div className="main-container">
          <CheckoutForm
            cartItems={cart}
            onSubmit={handleOrderSubmit}
            onCancel={() => setIsCheckoutOpen(false)} // უკან დაბრუნება
          />
        </div>
      </div>
    );
  }

  // ძირითადი ხედი (პროდუქტები და კალათა)
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
              onCheckout={handleStartCheckout} // ფორმის გამხსნელი ფუნქცია
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;