import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://todoshka-rest-api.onrender.com/api";

axios.defaults.baseURL = "https://64bd08662320b36433c75a8a.mockapi.io/api";

interface Todo {
  id: string;
  title: string;
  description: string;
  checked: boolean;
}

export const fetchTodos = createAsyncThunk<Todo[], void, { rejectValue: string }>(
  "todos/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/todos");
      return response.data as Todo[];
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addTodo = createAsyncThunk<Todo, Todo, { rejectValue: string }>(
  "todos/addTodo",
  async (todo, thunkAPI) => {
    try {
      const response = await axios.post("/todos", todo);
      return response.data as Todo;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleChecked = createAsyncThunk<Todo, Todo, { rejectValue: string }>(
  "todos/toggleChecked",
  async (todo, thunkAPI) => {

    if (!todo) {
      return thunkAPI.rejectWithValue("No such todo in the list");
    }

    try {
      const response = await axios.put(`/todos/${todo.id}`, {
        checked: !todo.checked,
      });
      return response.data as Todo;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteTodo = createAsyncThunk<string, string, { rejectValue: string }>(
  "todos/deleteTodo",
  async (todoId, thunkAPI) => {
    try {
      const response = await axios.delete(`/todos/${todoId}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
