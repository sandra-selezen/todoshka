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
      <h2 className='mb-6 font-bold text-3xl'>Add New Task</h2>
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
        <Form className='flex flex-col w-2/5 gap-4'>
          <label htmlFor='title' className='after:content-["*"] after:ml-0.5 after:text-red-500'>Title</label>
          <Field id='title' name='title' placeholder='Enter task title' className='bg-inherit border-2 rounded-xl p-2.5 outline-transparent' />
          <label htmlFor='description' className='after:content-["*"] after:ml-0.5 after:text-red-500'>Description</label>
          <Field as='textarea' id='description' name='description' row='5' placeholder='Enter task description' className='bg-inherit border-2 rounded-xl p-2.5 outline-transparent' />
          <button type='submit'  className='font-bold border-2 rounded-xl py-2.5 px-3.5 mx-auto hover:bg-[rgba(248,252,251,0.3)]'>Add New Task</button>
        </Form>
      </Formik>
    </>
  )
}

export default NewTodoForm