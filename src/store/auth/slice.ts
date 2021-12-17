import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login } from "./api";
import { User } from "./types";

type AuthState = {
  isAuth: boolean;
  user: User;
  error: any;
};

export const initialState: AuthState = {
  isAuth: false,
  user: {} as User,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.isAuth = true;
      state.user = action.payload.user;
    },
    logout: (state) => {
      // Remove and token from local storage
      localStorage.removeItem("token");

      // Reset state
      state.isAuth = false;
      state.user = {} as User;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
      state.isAuth = true;
      state.user = action.payload.user;
    });
    builder.addCase(login.rejected, (state, action: PayloadAction<any>) => {
      state.isAuth = false;
      state.user = {} as User;
    });
  },
});

export default authSlice.reducer;
