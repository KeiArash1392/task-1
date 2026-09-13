import React from 'react'
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const validationSchema = Yup.object({
  name: Yup.string().required("the name cannot be empty"),
  lastName: Yup.string().required("the last name cannot be empty"),
  email: Yup.string().required("the email cannot be empty"),
  password: Yup.string().required("the password cannot be empty"),
  phoneNumber: Yup.string().required("the phone number cannot be empty"),
});
export const SignUpPage = () => {
    const navigate = useNavigate();
    const handleSubmit = async (values) => {
        await axios.post("https://6aa66015d7765db98507598a.mockapi.io/accounts", values);
        alert("Sign up successful");
        navigate("/signin");
    }
    const backToProducts = () => {
    navigate("/products");
  };
  return (
    <Formik
          initialValues={{
            name: "",
            lastName: "",
            email: "",
            password: "",
            phoneNumber: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className="flex flex-col gap-2 mx-auto mt-10">
            <label htmlFor="signUpName">Name</label>
            <Field
              id="signUpName"
              type="text"
              name="name"
              className="border-2 border-gray-400 rounded-lg p-2 outline-none"
              placeholder="    enter your name"
            />
            <ErrorMessage
              className="text-red-500 text-sm"
              name="name"
              component={"span"}
            />
            <label htmlFor="signUpLastName">Last Name</label>
            <Field
              id="signUpLastName"
              type="text"
              name="lastName"
              className="border-2 border-gray-400 rounded-lg p-2 outline-none"
              placeholder="    enter your last name"
            />
            <ErrorMessage
              className="text-red-500 text-sm"
              name="lastName"
              component={"span"}
            />
            <label htmlFor="signUpPhoneNumber">Phone Number</label>
            <Field
              id="signUpPhoneNumber"
              type="text"
              name="phoneNumber"
              className="border-2 border-gray-400 rounded-lg p-2 outline-none"
              placeholder="    enter your phone number" />
            <ErrorMessage
              className="text-red-500 text-sm"
              name="phoneNumber"
              component={"span"}
            />
            <label htmlFor="signUpEmail">Email</label>
            <Field
              id="signUpEmail"
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
            <label htmlFor="signUpPassword">Password</label>
            <Field
              id="signUpPassword"
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
              Sign Up
            </button>
            <Link
              to="/signin"
              className="text-blue-500 text-sm mx-auto hover:text-blue-600"
            >
              Already have an account? Sign In
            </Link>
            <button
              className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
              onClick={backToProducts}
            >
              back to products
            </button>
          </Form>
        </Formik>
  )
}

export default SignUpPage