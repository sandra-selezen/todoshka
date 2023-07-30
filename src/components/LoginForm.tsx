"use client";

import { loginSchema } from '@/schemes';
import { ILoginFormValues } from '@/types/form';
import { Formik, Form, Field } from 'formik';
import React from 'react';

const initialValues: ILoginFormValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  return (
    <>
      <h2>Log in to your account</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        <Form>
          <label htmlFor='email'>Email address</label>
          <Field id='email' name='email' type='email' />
          <label htmlFor='password'>Password</label>
          <Field id='password' name='password' type='password' />
          <button type='submit'>Log In</button>
        </Form>
      </Formik>
    </>
  )
}

export default LoginForm