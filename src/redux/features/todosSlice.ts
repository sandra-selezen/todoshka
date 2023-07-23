import { createSlice, PayloadAction, AnyAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, fetchTodos, toggleChecked } from "./operations";

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
  extraReducers: (builder: ActionReducerMapBuilder<TodosState>) =>
    builder
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
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
      .addCase(deleteTodo.fulfilled, (state, payload) => {
        state.isLoading = false;
        state.error = null;

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