import React from "react";
import { useParams } from "react-router-dom";
import DUMMY_PRODUCTS from "../data/ProductData.js";
import ProductImage from "./ProductImage.jsx";
import ProductPrice from "./ProductPrice.jsx";
import NotFound from "./NotFound.jsx";
import { useNavigate } from "react-router-dom";
import AddToCart from "./AddToCart.jsx";

export const ProductDetail = () => {
  const { id } = useParams();
  const product = DUMMY_PRODUCTS.find((item) => item.id === id);
  const navigate = useNavigate();
  if (!product) {
    return <NotFound />;
  }
  const backToProducts = () => {
    navigate("/products");
  };
  return (
    <div className="w-full flex flex-col items-center gap-4 mt-3 pb-6">
      <ProductImage
        imageWidth="w-[95%]"
        imageUrl={product.imageUrl}
        isNew={product.isNew}
      />
      <h3 className="text-3xl text-white">{product.name}</h3>
      <ProductPrice
        price={product.price}
        discount={product.discount}
        haveDiscount={product.haveDiscount}
      />
      <p>{product.description}</p>
      <AddToCart productId={id} />
      <button
        className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
        onClick={backToProducts}
      >
        back to products
      </button>
    </div>
  );
};

export default ProductDetail;
