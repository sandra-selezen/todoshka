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
