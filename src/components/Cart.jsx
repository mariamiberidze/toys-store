import React from "react";

function Cart({ cartItems, onRemoveFromCart }) {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>🛒 კალათა</h2>
      {cartItems.length === 0 ? (
        <p>კალათა ცარიელია. დაამატეთ პროდუქტები!</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} ({item.quantity} ც.) -{" "}
                {(item.price * item.quantity).toFixed(2)} GEL
                {/* ამოღების ღილაკი: ამცირებს რაოდენობას 1-ით, ან შლის თუ 1-ია */}
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className="remove-btn"
                >
                  წაშლა (ერთი ცალი)
                </button>
              </li>
            ))}
          </ul>
          <h3>ჯამი: {total.toFixed(2)} GEL</h3>
          <button className="checkout-btn">ყიდვა</button>
        </>
      )}
    </div>
  );
}

export default Cart;
