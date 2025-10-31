import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
 if (products.length === 0) {
 return <p className="no-products">ამ ფილტრებით პროდუქტები ვერ მოიძებნა.</p>;
 }

 return (
 <div className="product-list">
 {products.map((product) => (
 <ProductCard
key={product.id}
 product={product}
 onAddToCart={onAddToCart}
 />
 ))}
 </div>
 );
}

// 🚀 ოპტიმიზაცია: List-ის კომპონენტის memo-ში შეფუთვა.
export default React.memo(ProductList);