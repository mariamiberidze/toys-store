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
    if (!formData.name || !formData.phone || !formData.address) {
      alert("გთხოვთ შეავსოთ ყველა სავალდებულო ველი (სახელი, ტელეფონი, მისამართი).");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="checkout-form-container">
      <h2 className="checkout-main-title">🛍️ შეკვეთის გაფორმება</h2>
      <div className="checkout-details-wrapper">
        
        {/* --- 1. ფორმის არე --- */}
        <div className="checkout-form-area">
          <h3 className="section-title">მყიდველის ინფორმაცია</h3>
          <form onSubmit={handleSubmit} className="checkout-form">
            
            <div className="form-group">
              <label htmlFor="name">სახელი და გვარი*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="ანა მელაძე"
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

        {/* --- 2. შეკვეთის შეჯამების არე --- */}
        <div className="order-summary-area">
          <h3 className="section-title">შეკვეთის დეტალები</h3>
          
          <ul className="cart-summary-list">
            {cartItems.map((item) => (
              <li key={item.id} className="summary-item">
                <span className="summary-name">{item.name}</span>
                <span className="summary-qty-price">
                  {item.quantity} ც. x {item.price.toFixed(2)} GEL
                </span>
              </li>
            ))}
          </ul>
          
          <div className="summary-total final-total">
            <h4>ჯამი:</h4>
            <h4 className="total-amount">{total.toFixed(2)} GEL</h4>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onCancel} className="cancel-btn">
              ← კალათაში დაბრუნება
            </button>
            <button 
                type="submit" 
                className="submit-btn" 
                form="checkout-form-id" // მივამაგრეთ ღილაკი ფორმას
                onClick={handleSubmit} // გამოვიყენებთ onClick-ს, რადგან ღილაკი ფორმის გარეთაა
            >
              შეკვეთის გაგზავნა
            </button>
          </div>
        </div>

      </div>
      {/* ფორმაზე დავამატე ID, რათა ღილაკი მიმემაგრებინა */}
      <form id="checkout-form-id" style={{display: 'none'}} onSubmit={handleSubmit}></form>

    </div>
  );
}

export default CheckoutForm;