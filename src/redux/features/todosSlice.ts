import { createSlice, PayloadAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchTodos } from "./operations";

interface Todo {
  id: string,
  title: string,
  description: string,
  checked: boolean,
}

interface TodosState {
  items: Todo[],
  isLoading: boolean,
  error: string | null,
};

const initialState: TodosState = {
  items: [],
  isLoading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<TodosState>) =>
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong!";
      })
});

export const todosReducer = todosSlice.reducer;