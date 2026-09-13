import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const validationSchema = Yup.object({
  payoutNumber: Yup.string().required("payout number cannot be empty"),
  address: Yup.string().required("address cannot be empty"),
  postalCode: Yup.string().required("postalCode cannot be empty"),
});

export const OrderingPage = () => {
  const navigate = useNavigate();
  const backToCart = () => {
    navigate("/cart");
  };
  const totalPrice = localStorage.getItem("totalPrice");
  const account = JSON.parse(localStorage.getItem("account"));
  const cartProductIds = JSON.parse(localStorage.getItem("cart"));
  const handleSubmit = async (values) => {
    const orderJson = {
      accountId: account.id,
      productIds: cartProductIds,
      price: totalPrice,
      ...values,
    };
    await axios.post(
      "https://6aa6628bd7765db985075a6c.mockapi.io/orders",
      orderJson,
    );
    navigate("/order-success");
  };
  return (
    <>
      <div>please transfer ${totalPrice} to card number 6219861839372893</div>
      <Formik
        initialValues={{
          payoutNumber: "",
          address: "",
          postalCode: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col items-center mt-5">
          <label htmlFor="payoutNumber" className="my-3">
            payout number
          </label>
          <Field
            id="payoutNumber"
            type="text"
            name="payoutNumber"
            className="border-2 border-gray-400 rounded-lg p-2 outline-none w-[90%]"
          />
          <ErrorMessage
            className="text-red-500 text-sm"
            name="payoutNumber"
            component={"span"}
          />

          <label htmlFor="address" className="my-3">
            address
          </label>
          <Field
            id="address"
            type="text"
            name="address"
            className="border-2 border-gray-400 rounded-lg p-2 outline-none w-[90%]"
          />
          <ErrorMessage
            className="text-red-500 text-sm"
            name="address"
            component={"span"}
          />

          <label htmlFor="postalCode" className="my-3">
            postal code
          </label>
          <Field
            id="postalCode"
            type="text"
            name="postalCode"
            className="border-2 border-gray-400 rounded-lg p-2 outline-none w-[90%]"
          />
          <ErrorMessage
            className="text-red-500 text-sm"
            name="postalCode"
            component={"span"}
          />

          <button
            type="submit"
            className="bg-gray-800 p-2 goCenter w-fit rounded-lg my-5 hover:bg-gray-900 text-white mx-auto"
          >
            submit
          </button>
          <button
            className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
            onClick={backToCart}
          >
            back to cart
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default OrderingPage;
