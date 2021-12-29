import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterInput, LoginInput } from "./types";
import { mockUser } from "../../mocks/users";
import { mockToken } from "../../mocks/tokens";

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
    localStorage.setItem("user", JSON.stringify(mockUser));
    return { token: mockToken };
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const getCurrentUser = createAsyncThunk(
  "getCurrentUser",
  async (ctx: any, { rejectWithValue }) => {
    try {
      return mockUser;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

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
  localStorage.removeItem("user");
});

export const refreshToken = createAsyncThunk("refreshToken", async (_, { rejectWithValue }) => {
  try {
    return {
      user: mockUser,
      token: mockToken,
    };
  } catch (err) {
    return rejectWithValue(err);
  }
});
