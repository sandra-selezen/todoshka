"use client";

import { register } from '@/redux/auth/operations';
import { AppDispatch } from "@/redux/store";
import { signUpSchema } from '@/schemes';
import { ISignUpFormValues } from '@/types/form';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';

const initialValues: ISignUpFormValues = {
  name: "",
  email: "",
  password: "",
};

const SignUpForm = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (
    values: ISignUpFormValues,
    formikHelpers: FormikHelpers<ISignUpFormValues>
  ) => {
    dispatch(register({
      name: values.name,
      email: values.email,
      password: values.password
    }));

    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpSchema}
      onSubmit={handleSubmit}
    >
      <Form className='form'>
        <label htmlFor='name' className='after:content-["*"] after:ml-0.5 after:text-red-500'>Name</label>
        <Field id='name' name='name' placeholder='Enter your name' className='form__field' />
        <label htmlFor='email' className='after:content-["*"] after:ml-0.5 after:text-red-500'>Email address</label>
        <Field id='email' name='email' type='email' placeholder='Enter your email address' className='form__field' />
        <label htmlFor='password' className='after:content-["*"] after:ml-0.5 after:text-red-500'>Password</label>
        <Field id='password' name='password' type='password' placeholder='Enter password' className='form__field' />
        <button type='submit' className='form__button'>Sign Up</button>
      </Form>
    </Formik>
  )
}

export default SignUpForm