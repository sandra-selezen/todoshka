import { createSlice, PayloadAction, AnyAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, fetchTodos, toggleChecked } from "./operations";
import { todo } from "node:test";
import { ITodo, ITodosState } from "@/types/todo";

const initialState: ITodosState = {
  items: [],
  isLoading: false,
  error: null,
};

const isError = (action: AnyAction) => {
  return action.type.endsWith("rejected");
};

const isPending = (action: AnyAction) => {
  return action.type.endsWith("pending");
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<ITodosState>) =>
    builder
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<ITodo[]>) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(toggleChecked.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const toggledTodo = state.items.find(todo => todo.id === action.payload.id);
        if (toggledTodo) {
          toggledTodo.checked = !toggledTodo.checked;
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(todo => todo.id === action.payload);
        state.items.splice(index, 1);

      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload || "Oops... Something went wrong!";
        state.isLoading = false;
      })
      .addMatcher(isPending, (state) => {
        state.isLoading = true;
      })
});

export const todosReducer = todosSlice.reducer;