import React from "react";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, name, price, imageUrl, isNew, discount, haveDiscount }) => {
  return(
    <div className="w-fit flex align-items-center border border-gray-600 rounded p-2 flex-col">
      <Link to={`/products/${id}`}>
        <ProductImage imageUrl={imageUrl} isNew={isNew} imageWidth="w-[300px]" />
        <h3 className="text-white">{name}</h3>
        <ProductPrice price={price} discount={discount} haveDiscount={haveDiscount} />
      </Link>
      
    </div>
  )
};

export default ProductCard;
