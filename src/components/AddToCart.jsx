import React, { useState } from 'react'

export const AddToCart = ({productId}) => {
    const [isInCart, setIsInCart] = useState(false)
    const changeIsInCart =()=>{
        const cart = JSON.parse(localStorage.getItem('cart')) || []
        if(isInCart === false){
            cart.push(productId)
        }
        if(isInCart === true){
            const productIndex = cart.indexOf(productId)
            cart.splice(productIndex, 1)
        }
          localStorage.setItem('cart', JSON.stringify(cart))
        setIsInCart(!isInCart)
    }
  return (
    <button className={`p-2 goCenter w-fit rounded-lg mt-2 mb-2  ${isInCart ? 'bg-green-500 hover:bg-green-600 text-black' : 'bg-gray-800 hover:bg-gray-900'}`} onClick={changeIsInCart}>{isInCart ? "is in cart" : "add to cart"}</button>
  )
}

export default AddToCart