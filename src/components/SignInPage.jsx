import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const validationSchema = Yup.object({
  email: Yup.string().required("the email cannot be empty"),
  password: Yup.string().required("the password cannot be empty"),
});
export const SignInPage = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    const response = await axios.get("https://6aa66015d7765db98507598a.mockapi.io/accounts");
    const accounts = response.data;
    const account = accounts.find((account) => account.email === values.email && account.password === values.password);
    localStorage.setItem("account", JSON.stringify(account));
    if (account) {
      navigate("/account");
      console.log("Sign in successful");
    } else {
      alert("email or password is incorrect");
      console.log("Sign in failed");
    }
  };
  const backToProducts = () => {
    navigate("/products");
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className="flex flex-col gap-2 mx-auto mt-10">
        <label htmlFor="signInEmail">Email</label>
        <Field
          id="signInEmail"
          type="text"
          name="email"
          className="border-2 border-gray-400 rounded-lg p-2 outline-none"
          placeholder="    enter your email"
        />
        <ErrorMessage
          className="text-red-500 text-sm"
          name="email"
          component={"span"}
        />
        <label htmlFor="signInPassword">Password</label>
        <Field
          id="signInPassword"
          type="password"
          name="password"
          className="border-2 border-gray-400 rounded-lg p-2 outline-none"
          placeholder="    enter your password"
        />
        <ErrorMessage
          className="text-red-500 text-sm"
          name="password"
          component={"span"}
        />
        <button
          type="submit"
          className="bg-gray-800 p-2 goCenter w-fit rounded-lg mt-2 mb-2 hover:bg-gray-900 text-white mx-auto"
        >
          Sign In
        </button>
        <Link
          to="/signup"
          className="text-blue-500 text-sm mx-auto hover:text-blue-600"
        >
          Don't have an account? Sign Up
        </Link>
        <button
          className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
          onClick={backToProducts}
        >
          back to products
        </button>
      </Form>
    </Formik>
  );
};

export default SignInPage;
