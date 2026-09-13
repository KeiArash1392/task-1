import React from 'react'
import { useNavigate } from 'react-router-dom';

export const AccountInformationPage = () => {
    const account = JSON.parse(localStorage.getItem("account"));
    const navigate = useNavigate();
    const backToProducts = () => {
    navigate("/products");
  };
  return (
    <>
    <h1>Account information</h1>
    <div>name: {account.name}</div>
    <div>last name: {account.lastName}</div>
    <div>phone number: {account.phoneNumber}</div>
    <div>email: {account.email}</div>
    <div>password: {account.password}</div>
    <span className='text-red-500 text-sm'>you cannot change the account information</span>
    <button
        className="mt-3 bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 w-fit mx-auto"
        onClick={backToProducts}
      >
        back to products
      </button>
    </>
    
  )
}

export default AccountInformationPage