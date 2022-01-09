import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterInput, LoginInput } from "./types";
import { mockUser, mockUsers } from "../../mocks/users";
import { mockToken } from "../../mocks/tokens";

export const register = createAsyncThunk(
  "register",
  async (input: RegisterInput, { rejectWithValue }) => {
    try {
      localStorage.setItem("user", JSON.stringify(mockUser));
      return { token: mockToken };
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

export const getUserByUsername = createAsyncThunk(
  "getUserByUsername",
  async (username: string, { rejectWithValue }) => {
    try {
      mockUsers.forEach((user) => {
        if (user.username.toUpperCase() === username.toUpperCase()) return user;
      });
      return mockUser;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const updateUser = createAsyncThunk("update", async (input: any, { rejectWithValue }) => {
  try {
    return input;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const deleteUser = createAsyncThunk("delete", async (id: number, { rejectWithValue }) => {
  try {
    localStorage.removeItem("user");
    return mockUser;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const setCurrentUser = createAsyncThunk("setCurrentUser", async (_, { rejectWithValue }) => {
  try {
    const user = JSON.parse(localStorage.getItem("user") as string);
    const token = user ? mockToken : null;
    return { user, token };
  } catch (err) {
    localStorage.removeItem("user");
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
