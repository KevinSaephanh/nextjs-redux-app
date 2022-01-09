import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { mockUser } from "../../mocks/users";
import { Token } from "../../models/Token";
import { User } from "../../models/User";
import { login, logout, register, setCurrentUser, updateUser } from "./api";

type AuthState = {
  user: User | null;
  token?: Token | null;
  error: any;
};

export const initialState: AuthState = {
  user: null,
  token: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Token>) => {
      state.token = action.payload;
      state.user = mockUser;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state, action) => {
      return initialState;
    });
    builder.addCase(setCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addMatcher(
      isAnyOf(register.fulfilled, login.fulfilled, updateUser.fulfilled),
      (state, action: PayloadAction<Token>) => {
        state.user = mockUser;
        state.token = action.payload;
        state.error = null;
      }
    );
    builder.addMatcher(
      isAnyOf(register.rejected, login.rejected, setCurrentUser.rejected),
      (state, action: PayloadAction<any>) => {
        state.user = null;
        state.token = null;
        state.error = action.payload;
      }
    );
  },
});

export default authSlice.reducer;
