import React from "react";

export const ProductPrice = ({ price, discount, haveDiscount }) => {
  return (
    <div className="flex gap-3 mt-2">
      {haveDiscount ? <>
      <p className="text-red-500 line-through">${price}</p>
      <div className="text-green-500">
        <span>${discount}</span>
      </div>
      </> : <>
      <p>${price}</p>
      </>}
      
      
    </div>
  );
};

export default ProductPrice;
