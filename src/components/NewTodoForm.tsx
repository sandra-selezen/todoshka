"use client";

import React from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { INewTodo } from '@/types/todo';
import { newTodoSchema } from '@/schemes';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { addTodo } from '@/redux/todo/operations';
import { toast } from 'react-hot-toast';

const initialValues: INewTodo = {
  title: "",
  description: "",
}

const NewTodoForm = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (
    values: INewTodo,
    formikHelpers: FormikHelpers<INewTodo>
  ) => {
    dispatch(addTodo({
      title: values.title,
      description: values.description
    }));
    toast.success('New todo successfully added');
    formikHelpers.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={newTodoSchema}
      onSubmit={handleSubmit}
    >
      <Form className='form'>
        <label htmlFor='title' className='after:content-["*"] after:ml-0.5 after:text-red-500'>Title</label>
        <Field id='title' name='title' placeholder='Enter task title' className='form__field' />
        <label htmlFor='description' className='after:content-["*"] after:ml-0.5 after:text-red-500'>Description</label>
        <Field as='textarea' id='description' name='description' row='5' placeholder='Enter task description' className='form__field' />
        <button type='submit' className='form__button'>Add New Task</button>
      </Form>
    </Formik>
  )
}

export default NewTodoForm