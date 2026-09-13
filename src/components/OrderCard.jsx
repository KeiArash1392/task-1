import React from 'react'
export const OrderCard = ({ id, status,price, productIds, address, postalCode, payoutNumber }) => {
    
  return (
    <div className='border border-gray-500 rounded-md mt-7'>
        <div>order id: {id}</div>
        <div>{status}</div>
        <div>price: ${price}</div>
        <div>products ids: {productIds}</div>
        <div>address: {address}</div>
        <div>postal code: {postalCode}</div>
        <div>payout number: {payoutNumber}</div>
    </div>
  )
}

export default OrderCard