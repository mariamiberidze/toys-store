import React from "react";

function ProductCard({ product, onAddToCart }) {
 // imageUrl არის პროდუქტის image ველი products.js-დან
 const imageUrl = product.image;

 return (
 <div className="product-card">
 {/* 🚀 ოპტიმიზაცია: loading="lazy" სურათებზე */}
 <img 
        src={imageUrl} 
        alt={product.name} 
        className="product-image" 
        loading="lazy" 
      />

 <h3>{product.name}</h3>
 <p className="price">ფასი: {product.price.toFixed(2)} GEL</p>
 <p>
 ასაკი: {product.age} | სქესი: {product.gender}
 </p>

 <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
 კალათაში დამატება
 </button>
 </div>
 );
}

// 🚀 ოპტიმიზაცია: ვიყენებთ React.memo-ს არასაჭირო რენდერების შესამცირებლად.
export default React.memo(ProductCard);