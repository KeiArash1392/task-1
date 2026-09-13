import React from "react";

export const CartProductPrice = ({ price, discount, haveDiscount }) => {
  return (
    <div className="flex gap-3 my-auto ml-6">
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

export default CartProductPrice;
