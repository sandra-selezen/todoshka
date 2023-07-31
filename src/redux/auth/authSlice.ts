import { IUserState } from "@/types/user";
import { ActionReducerMapBuilder, AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

const initialState: IUserState = {
  user: {
    name: null,
    email: null,
    password: null,
    token: null,
  },
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const isError = (action: AnyAction) => {
  return action.type.endsWith("rejected");
};

const isPending = (action: AnyAction) => {
  return action.type.endsWith("pending");
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IUserState>) =>
    builder
    .addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshing = false;
    })
    .addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshing = false;
    })
    .addCase(logOut.fulfilled, (state) => {
      state.user = {
        name: null,
        email: null,
        password: null,
        token: null,
      };
      state.isLoggedIn = true;
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    })
    .addMatcher(isError, (state, action: PayloadAction<string>) => {
      state.error = action.payload || "Oops... Something went wrong!";
      state.isLoading = false;
    })
    .addMatcher(isPending, (state) => {
      state.isLoading = true;
      state.isRefreshing = true;
    })
});

export const authReducer = authSlice.reducer;