import React from "react";
import DUMMY_PRODUCTS from "../data/ProductData.js";
import ProductCard from "./ProductCard.jsx";
export const ProductList = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-4">
      {DUMMY_PRODUCTS.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
