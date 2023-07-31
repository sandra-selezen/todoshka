"use client";

import { TodoList } from '@/components'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { fetchTodos } from '@/redux/todo/operations';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const Todos = () => {

  const todos = useAppSelector(state => state.todos.items);
  const isLoadind = useAppSelector(state => state.todos.isLoading);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      {isLoadind && <h3>Loading...</h3>}
      <h1 className='page-title'>Todo List</h1>
      <TodoList todos={todos} />
    </>
  )
}

export default Todos