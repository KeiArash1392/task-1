import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const ProductsLayout = () => {

  return (
    <div>
        <nav className='flex justify-center gap-2'>
          <div className='bg-gray-800 p-2 goCenter w-fit rounded-lg mt-2 mb-2 hover:bg-gray-900'>
            <Link to="/products" className='text-white'>Products</Link>
          </div>
          <div className='bg-gray-800 p-2 goCenter w-fit rounded-lg mt-2 mb-2 hover:bg-gray-900'>
            <Link to="/signin" className='text-white'>Account</Link>
          </div>
          <div className='bg-gray-800 p-2 goCenter w-fit rounded-lg mt-2 mb-2 hover:bg-gray-900'>
            <Link to="/cart" className='text-white'>Cart</Link>
          </div>
        </nav>
        
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default ProductsLayout