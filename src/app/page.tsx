"use client";

import { addTodo, deleteTodo, fetchTodos, toggleChecked } from "@/redux/features/operations";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { ITodo } from "@/types/todo";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {

  const todos = useAppSelector(state => state.todos.items);
  const isLoadind = useAppSelector(state => state.todos.isLoading);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    console.log({ title, description });
    const data = { title, description };
    dispatch(addTodo(data));
  }

  return (
    <>
      <h1>TODO application</h1>
      {isLoadind && <h2>Loading...</h2>}
      <form onSubmit={handleSubmit}>
        <input name="title" className="border-black border-2" />
        <textarea name="description" className="border-black border-2"></textarea>
        <button type="submit" className="border-black border-2">Add new todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <input type="checkbox" checked={todo.checked} onChange={() => dispatch(toggleChecked(todo))} />
            <button type="button" onClick={() => dispatch(deleteTodo(todo._id))}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}
