"use client";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

function Register() {
  const router = useRouter();
  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your Name."),
    username: Yup.string().required("Please enter your username."),
    email: Yup.string().required("Please enter valid email address."),
    password: Yup.string().required("Please enter correct password"),
    confirmpassword: Yup.string()
      .required("Please confirm password")
      .oneOf([Yup.ref("password")], "Password must match"),
  });
  function handleSubmit(values: typeof initialValues) {
    axios
      .post("http://localhost:4000/users", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.accessToken);
        console.log(response.data.accessToken);
        toast.success("Scuccessfully created your account.");
        router.push("/login");
      })
      .catch((e) => {
        toast.error("Unable to Sign In");
      });
  }

  return (
    <>
      <Navbar />
      <div className="border-t border-gray-300 m-4"></div>
      <div className="flex flex-col justify-center items-center h-screen  w-full ">
        <h1 className="text-4xl">Sign Up</h1>
        <span className="text-slate-600">
          Create an account for faster checkout.
        </span>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          <Form className="flex flex-col ">
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="bg-gray-100 text-xs border border-gray-300 px-3 py-2 mt-2 transition duration-300 hover:bg-gray-100 focus:outline-none w-full "
              />
            </div>
            <div className="flex mt-2 w-full">
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="First Name"
                  className="bg-gray-100 text-xs border border-gray-300 px-3 py-2   transition duration-300 hover:bg-gray-100 focus:outline-none "
                />
              </div>
              <div>
                <Field
                  type="text"
                  name="last name"
                  placeholder="Last Name"
                  className="bg-gray-100 text-xs border border-gray-300 px-3 py-2 ml-2 transition duration-300 hover:bg-gray-100 focus:outline-none  "
                />
              </div>
            </div>
            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="bg-gray-100 text-xs border border-gray-300 px-3 py-2 mt-2  transition duration-300 hover:bg-gray-100 focus:outline-none w-full "
              />
            </div>
            <div>
              <Field
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
                className="bg-gray-100 text-xs border border-gray-300 px-3 py-2  mt-2 transition duration-300 hover:bg-gray-100 focus:outline-none  w-full"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-slate-100 px-3 py-2 mt-2 ">
              Register
            </button>
          </Form>
        </Formik>
      </div>
      <Footer />
    </>
  );
}

export default Register;
