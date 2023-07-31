"use client";

import { AppDispatch } from '@/redux/store';
import { deleteTodo, toggleChecked } from '@/redux/todo/operations';
import { ITodo } from '@/types/todo'
import React from 'react'
import { useDispatch } from 'react-redux';

interface IProps {
  todos: ITodo[];
}

const TodoList = ({ todos }: IProps) => {

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <ul className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {todos.map(todo => (
          <li key={todo._id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <input type='checkbox' checked={todo.checked} onChange={() => dispatch(toggleChecked(todo))} />
            <button type='button' onClick={() => dispatch(deleteTodo(todo._id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList