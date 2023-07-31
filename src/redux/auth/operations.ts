import { ILogInCred, IRegisterCred, IUser } from "@/types/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://todoshka-rest-api.onrender.com/api";

// Utility to add JWT
const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk<IUser, IRegisterCred, { rejectValue: string }>(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/register', credentials);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk<IUser, ILogInCred, { rejectValue: string }>(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk<IUser, void, { rejectValue: string }>(
  'auth/refresh',
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.token;

    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }

    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);