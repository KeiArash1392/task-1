import CartProduct from "./CartProduct";
import DUMMY_PRODUCTS from "../data/ProductData";
import { useNavigate } from "react-router-dom";
export const CartPage = () => {
  const navigate = useNavigate();
  const backToProducts = () => {
    navigate("/products");
  };
  const submitOrder = ()=>{
    const account = JSON.parse(localStorage.getItem("account"))
    if(account){
      navigate('/order')
    }
    else{
      navigate('/signin')
    }
  }
  const inCartProductsId = JSON.parse(localStorage.getItem("cart")) || [];
  const inCartProducts = DUMMY_PRODUCTS.filter((product) =>
    inCartProductsId.includes(product.id),
  );
  let totalPrice = 0;
  inCartProducts.forEach((product) => {
    totalPrice = totalPrice + (product.haveDiscount ? product.discount : product.price)
  });
  localStorage.setItem('totalPrice', totalPrice)
  console.log(inCartProducts);
  return (
    <>
      <h1>cart</h1>
      {inCartProducts.map((products) => (
        <CartProduct key={products.id} {...products} />
      ))}
      <span>total price: ${totalPrice}</span>
      <button
        className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 w-fit mx-auto mt-7"
        onClick={backToProducts}
      >
        back to products
      </button>
      <button
        className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 w-fit mx-auto mt-7"
        onClick={submitOrder}
      >
        accept and order
      </button>
    </>
  );
};

export default CartPage;