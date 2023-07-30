"use client";

import React from 'react';
import { Formik, Form, Field } from 'formik';
import { INewTodo } from '@/types/todo';
import { newTodoSchema } from '@/schemes';

const initialValues: INewTodo = {
  title: "",
  description: "",
}

const NewTodoForm = () => {
  return (
    <>
      <h2>Add New Task</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={newTodoSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        <Form>
          <label htmlFor='title'>Title</label>
          <Field id='title' name='title' />
          <label htmlFor='description'>Description</label>
          <Field as='textarea' id='description' name='description' />
          <button type='submit'>Add</button>
        </Form>
      </Formik>
    </>
  )
}

export default NewTodoForm