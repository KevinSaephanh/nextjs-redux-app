import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterInput, LoginInput } from "./types";
import { mockUser } from "../../mocks/users";

export const register = createAsyncThunk(
  "register",
  async (input: RegisterInput, { rejectWithValue }) => {
    try {
      return mockUser;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const login = createAsyncThunk("login", async (input: LoginInput, { rejectWithValue }) => {
  try {
    return mockUser;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const getUser = createAsyncThunk("getUser", async (token: string, { rejectWithValue }) => {
  try {
    return mockUser;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const updateUser = createAsyncThunk("update", async (input: any, thunkAPI) => {
  try {
    return input;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const deleteUser = createAsyncThunk("delete", async (id: number, { rejectWithValue }) => {
  try {
    return mockUser;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const logout = createAsyncThunk("logout", async () => {
  localStorage.removeItem("token");
});
