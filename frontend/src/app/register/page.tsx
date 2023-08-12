"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Register() {
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

  const onSubmit = () => {
    console.log("nothing");
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <Field type="text" name="username" />
          <Field type="email" name="email" />
          <Field type="password" name="password" />
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
