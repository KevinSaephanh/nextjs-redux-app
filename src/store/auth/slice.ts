import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/User";
import { login, logout, register, updateUser } from "./asyncThunk";

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
    setUser: (state, action: PayloadAction<User>) => {
      state.isAuth = true;
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state, action) => {
      return initialState;
    });
    builder.addMatcher(
      isAnyOf(login.fulfilled, updateUser.fulfilled),
      (state, action: PayloadAction<any>) => {
        state.isAuth = true;
        state.user = action.payload;
        state.error = null;
      }
    );
    builder.addMatcher(
      isAnyOf(register.rejected, login.rejected),
      (state, action: PayloadAction<any>) => {
        state.isAuth = false;
        state.user = {} as User;
        state.error = action.payload;
      }
    );
  },
});

export default authSlice.reducer;
