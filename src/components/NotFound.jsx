import React from 'react'
import { useNavigate } from 'react-router-dom'
export const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
    <p>the page your looking for not found!!!</p>
    <button onClick={() => navigate('/products')} className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 w-40 m-auto" >go back to product</button>
    </>
    
  )
}

export default NotFound