import React from "react";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p className="price">ფასი: {product.price.toFixed(2)} GEL</p>
      <p>
        ასაკი: {product.age} | სქესი: {product.gender}
      </p>

      <button onClick={() => onAddToCart(product)}>კალათაში დამატება</button>
    </div>
  );
}

export default ProductCard;
