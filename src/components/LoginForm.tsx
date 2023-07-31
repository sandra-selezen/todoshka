"use client";

import { logIn } from "@/redux/auth/operations";
import { AppDispatch } from "@/redux/store";
import { loginSchema } from '@/schemes';
import { ILoginFormValues } from '@/types/form';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import React from 'react';
import { useDispatch } from "react-redux";

const initialValues: ILoginFormValues = {
  email: "",
  password: "",
};

const LoginForm = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (
    values: ILoginFormValues,
    formikHelpers: FormikHelpers<ILoginFormValues>
  ) => {
    dispatch(logIn({
      email: values.email,
      password: values.password
    }));

    formikHelpers.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form className='form'>
        <label htmlFor='email' className='after:content-["*"] after:ml-0.5 after:text-red-500'>Email address</label>
        <Field id='email' name='email' type='email' placeholder='Enter your name' className='form__field' />
        <label htmlFor='password' className='after:content-["*"] after:ml-0.5 after:text-red-500'>Password</label>
        <Field id='password' name='password' type='password' placeholder='Enter password' className='form__field' />
        <button type='submit' className='form__button'>Log In</button>
      </Form>
    </Formik>
  )
}

export default LoginForm