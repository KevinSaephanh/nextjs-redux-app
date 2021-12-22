import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterInput, LoginInput } from "./types";
import { mockUser } from "../../mocks/users";
import { User } from "../../models/User";

export const register = createAsyncThunk<User, RegisterInput, any>(
  "register",
  async (input: RegisterInput, thunkAPI) => {
    try {
      return mockUser;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const login = createAsyncThunk<User, LoginInput, any>(
  "login",
  async (input: LoginInput, thunkAPI) => {
    try {
      return mockUser;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getUser = createAsyncThunk<User, string, any>(
  "getUser",
  async (token: string, thunkAPI) => {
    try {
      return mockUser;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const updateUser = createAsyncThunk<User, { id: number; input: User }, any>(
  "update",
  async ({ id, input }, thunkAPI) => {
    try {
      return input;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const deleteUser = createAsyncThunk<Boolean, number, any>(
  "delete",
  async (id: number, thunkAPI) => {
    try {
      return true;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const logout = createAsyncThunk("logout", async () => {
  localStorage.removeItem("token");
});
