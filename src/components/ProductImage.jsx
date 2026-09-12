import React from "react";

export const ProductImage = ({ imageUrl, isNew, imageWidth}) => {
  return (
    <div className={imageWidth}>
      {isNew ? <div className="goCenter pr-3 pl-3 p-1 rounded-br-[10px] bg-cyan-300 w-fit absolute">
        <span className="text-black">New</span>
      </div> : null}
      <img src={imageUrl} className={"w-full rounded-md"} />
    </div>
  );
};

export default ProductImage;
