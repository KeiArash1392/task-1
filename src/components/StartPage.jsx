import React from 'react'
import { useNavigate } from 'react-router-dom'
export const startPage = () => {
    const navigate = useNavigate();
    const navigateToShop = () => {
        navigate("/products");
    }
  return (
    <div>
        <p className="mt-3 mb-3">Welcome to the our store!!</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={navigateToShop}>go to shop</button>
    </div>
  )
}

export default startPage