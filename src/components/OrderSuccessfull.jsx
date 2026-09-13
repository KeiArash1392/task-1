import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSuccessfull = () => {
    const navigate = useNavigate();
    const backProduct =()=>{
    navigate('/products')
  }
  return (
    <>
    <h3>order is sent successfully and waiting for confirm!!!!</h3>
    <button
              className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 mx-auto w-fit mt-7"
              onClick={backProduct}
            >
              back to products
            </button>
    </>
  )
}

export default OrderSuccessfull