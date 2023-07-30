"use client";

import { signUpSchema } from '@/schemes';
import { ISignUpFormValues } from '@/types/form';
import { Formik, Form, Field } from 'formik';
import React from 'react';

const initialValues: ISignUpFormValues = {
  name: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      <Form className='flex flex-col w-6/12'>
        <label htmlFor='name'>Name</label>
        <Field id='name' name='name' />
        <label htmlFor='email'>Email address</label>
        <Field id='email' name='email' type='email' />
        <label htmlFor='password'>Password</label>
        <Field id='password' name='password' type='password' />
        <button type='submit'>Sign Up</button>
      </Form>
    </Formik>
  )
}

export default SignUpForm