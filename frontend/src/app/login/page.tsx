"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

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
      })

      .catch(() => {
        toast.error("Unable To Login");
      });
  };
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={initialvalues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        <Form>
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

          <button type="submit" className="bg-red-100">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
