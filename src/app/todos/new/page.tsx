import { NewTodoForm } from '@/components'
import React from 'react'

const NewTodo = () => {
  return (
    <div className='form__container'>
      <h1 className='page-title'>Add new task</h1>
      <NewTodoForm />
    </div>
  )
}

export default NewTodo