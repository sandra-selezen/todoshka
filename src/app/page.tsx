"use client";

import { fetchTodos, toggleChecked } from "@/redux/features/operations";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {

  const todos = useAppSelector(state => state.todos.items);
  const isLoadind = useAppSelector(state => state.todos.isLoading);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // const handleToggle = (todo) => {
  //   dispatch(toggleChecked(todo));
  // };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>TODO application</h1>
      {isLoadind && <h2>Loading...</h2>}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <input type="checkbox" checked={todo.checked} onChange={() => dispatch(toggleChecked(todo))} />
          </li>
        ))}
      </ul>
    </main>
  )
}
