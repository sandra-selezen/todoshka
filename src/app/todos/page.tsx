"use client";

import { TodoList } from '@/components'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { fetchTodos } from '@/redux/todo/operations';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const Todos = () => {
  const todos = useAppSelector(state => state.todos.items);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <div className='flex flex-row justify-between items-center mb-5'>
        <h1 className='page-title'>Todo List</h1>
        <Link href='/todos/new' className='todo__button'>New task</Link>
      </div>
      <TodoList todos={todos} />
    </>
  )
}

export default Todos