import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const AccountPage = () => {
  const account = JSON.parse(localStorage.getItem("account"));
  const navigate = useNavigate();
  const deleteAccount = async () => {
    await axios.delete(`https://6aa66015d7765db98507598a.mockapi.io/accounts/${account.id}`);
    localStorage.removeItem("account");
    alert("Account deleted!!");
    navigate("/products");
  }
  return (
    <>
      <h1 className="text-center text-2xl mt-10">Welcome {account.name}!!!</h1>
      <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600" onClick={() => navigate("/account-information")}>
        Account Information
      </button>
      <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 mt-2" onClick={() => navigate("/orders")}>
        Orders
      </button>
      <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 mt-2" onClick={() => navigate("/products")}>
        sign out and go back to products
      </button>
      <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 mt-2" onClick={deleteAccount}>
        delete account
      </button>
    </>
  );
};
export default AccountPage;
