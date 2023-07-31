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
      <Form className='flex flex-col w-2/5 gap-4'>
        <label htmlFor='email' className='after:content-["*"] after:ml-0.5 after:text-red-500'>Email address</label>
        <Field id='email' name='email' type='email' placeholder='Enter your name' className='bg-inherit border-2 rounded-xl p-2.5 outline-transparent' />
        <label htmlFor='password' className='after:content-["*"] after:ml-0.5 after:text-red-500'>Password</label>
        <Field id='password' name='password' type='password' placeholder='Enter password' className='bg-inherit border-2 rounded-xl p-2.5 outline-transparent' />
        <button type='submit' className='font-bold border-2 rounded-xl py-2.5 px-3.5 mx-auto hover:bg-[rgba(248,252,251,0.3)]'>Log In</button>
      </Form>
    </Formik>
  )
}

export default LoginForm