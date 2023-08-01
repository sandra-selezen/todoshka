"use client";

import { AppDispatch } from '@/redux/store';
import { deleteTodo, toggleChecked } from '@/redux/todo/operations';
import { ITodo } from '@/types/todo'
import React from 'react'
import { toast } from 'react-hot-toast';
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from 'react-redux';

interface IProps {
  todos: ITodo[];
}

const TodoList = ({ todos }: IProps) => {

  const dispatch = useDispatch<AppDispatch>();

  return (
    <ul className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {todos.map(todo => (
        <li
          key={todo._id}
          className='todo__item'
        >
          <div>
            <h2 className='todo__title'>{todo.title}</h2>
            <p className='todo__text'>{todo.description}</p>
          </div>
          <div className='todo__actions-container'>
            <input type='checkbox' className='accent-pink-500' checked={todo.checked} onChange={() => dispatch(toggleChecked(todo))} />
            <button
              type='button'
              aria-label='Delete'
              title='Delete'
              onClick={() => {
                dispatch(deleteTodo(todo._id));
                toast.success('Task successfully deleted!');
              }}>
              <MdDeleteForever />
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoList