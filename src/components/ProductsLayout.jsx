import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const ProductsLayout = () => {
  return (
    <div>
        <nav>
          <div className='bg-gray-800 p-2 goCenter w-fit rounded-lg m-auto mt-2 mb-2 hover:bg-gray-900'>
            <Link to="/products" className='text-white'>Products</Link>
          </div>
          
        </nav>
        
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default ProductsLayout