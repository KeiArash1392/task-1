import React from "react";
import OrderCard from "./OrderCard";
import axios from "axios";
import { useEffect, useState } from "react";
export const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchapi = async () => {
      const response = await axios.get(
        "https://6aa6628bd7765db985075a6c.mockapi.io/orders",
      );
      const account = JSON.parse(localStorage.getItem("account"));
      const accountOrders = response.data.filter(
        (orders) => orders.accountId === account.id,
      );
      setOrders(accountOrders);
    };
    fetchapi();
  }, []);
  return (
    <>
      <h1>orders</h1>
      {orders.map((order) => (
        <OrderCard key={order.id} {...order} />
      ))}
    </>
  );
};

export default OrderPage;
