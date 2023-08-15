"use client";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        <Form>
          <div>
            <label>Name</label>
            <Field type="text" name="name" />
          </div>

          <div>
            <label>User Name</label>
            <Field type="text" name="username" />
          </div>
          <div>
            <label>Email</label>
            <Field type="email" name="email" />
          </div>
          <div>
            <label>Password</label>
            <Field type="password" name="password" />
          </div>
          <div>
            <label>Re Enter Password</label>
            <Field type="password" name="confirmpassword" />
          </div>

          <button type="submit" className="bg-red-100">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
