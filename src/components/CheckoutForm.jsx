import React, { useState } from "react";

function CheckoutForm({ cartItems, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ვალიდაცია
    if (!formData.name || !formData.phone || !formData.address) {
      alert("გთხოვთ შეავსოთ ყველა სავალდებულო ველი (სახელი, ტელეფონი, მისამართი).");
      return;
    }

    // მონაცემების გაგზავნა
    onSubmit(formData);
  };

  return (
    <div className="checkout-form-container">
      <h2 className="checkout-main-title">🛍️ შეკვეთის გაფორმება</h2>

      <div className="checkout-details-wrapper">
        {/* --- მყიდველის ინფორმაცია --- */}
        <div className="checkout-form-area">
          <h3 className="section-title">მყიდველის ინფორმაცია</h3>

          <form id="checkout-form" onSubmit={handleSubmit} className="checkout-form">
            <div className="form-group">
              <label htmlFor="name">სახელი და გვარი*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="სახელი გვარი"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">ტელეფონის ნომერი*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="5XX XXX XXX"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">ელ. ფოსტა (სურვილისამებრ)</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">მისამართი*</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="თბილისი, ვაჟა-ფშაველას 70"
                required
              ></textarea>
            </div>
          </form>
        </div>

        {/* --- შეკვეთის შეჯამება --- */}
        <div className="order-summary-area">
          <h3 className="section-title">შეკვეთის დეტალები</h3>

          {cartItems.length === 0 ? (
            <p>კალათა ცარიელია.</p>
          ) : (
            <>
              <ul className="cart-summary-list">
                {cartItems.map((item) => (
                  <li key={item.id} className="summary-item">
                    <span className="summary-name">{item.name}</span>
                    <span className="summary-qty-price">
                      {item.quantity} ც. × {item.price.toFixed(2)} GEL
                    </span>
                  </li>
                ))}
              </ul>

              <div className="summary-total final-total">
                <h4>ჯამი:</h4>
                <h4 className="total-amount">{total.toFixed(2)} GEL</h4>
              </div>
            </>
          )}

          <div className="form-actions">
            <button type="button" onClick={onCancel} className="cancel-btn">
              ← კალათაში დაბრუნება
            </button>

            {/* ფორმის გარეთ მყოფი submit ღილაკი — ფორმასთან დაკავშირებულია id-ით */}
            <button
              type="submit"
              className="submit-btn"
              form="checkout-form"
              onClick={handleSubmit}
            >
              შეკვეთის გაგზავნა
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
