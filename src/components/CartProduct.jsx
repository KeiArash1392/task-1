import CartProductPrice from './CartProductPrice'
import { useNavigate } from 'react-router-dom'
export const CartProduct = ({imageUrl, name, price, haveDiscount, discount, id}) => {
  const navigate = useNavigate()
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const removeFromCart = ()=>{
    const productIndex = cart.indexOf(id)
    cart.splice(productIndex, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    navigate('/products')
    navigate('/cart')
  }
  return (
    <div className='border border-gray-600 w-full rounded-md mt-4 flex'>
        <img src={imageUrl} className='h-20 w-28'/>
        <h3 className='my-auto ml-7'>{name}</h3>
        <CartProductPrice price={price} haveDiscount={haveDiscount} discount={discount} />
        <button
        className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 w-fit h-fit my-auto ml-auto mr-5"
        onClick={removeFromCart}
      >
        remove from cart
      </button>
    </div>
  )
}

export default CartProduct