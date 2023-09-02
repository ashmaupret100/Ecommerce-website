"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

function Login() {
  const router = useRouter();
  const initialvalues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Please enter valid email address."),
    password: Yup.string().required("Please enter correct password"),
  });
  const handleSubmit = (values: typeof initialvalues) => {
    axios
      .post(" http://localhost:4000/login", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        toast.success("Scuccessfully signed in");
        console.log(response.data);
        router.push("/");
        localStorage.setItem("session-token", response.data.accessToken);
        console.log(response.data.accessToken);
      })

      .catch(() => {
        toast.error("Unable To Login");
      });
  };
  return (
    <>
      <Navbar />
      <div className="border-t border-gray-300 m-4"></div>
      <div className="flex flex-col justify-center items-center h-screen  w-full ">
        <h1 className="text-4xl">Login</h1>

        <Formik
          initialValues={initialvalues}
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

            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="bg-gray-100 text-xs border border-gray-300 px-3 py-2 mt-2  transition duration-300 hover:bg-gray-100 focus:outline-none w-full "
              />
            </div>
            <span className="mt-2 text-xs text-slate-500">
              Forgot Password ?
            </span>

            <button
              type="submit"
              className="bg-black text-slate-100 px-3 py-2 mt-2 ">
              Login
            </button>
          </Form>
        </Formik>
      </div>
      <Footer />
    </>
  );
}

export default Login;
