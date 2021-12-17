import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterInput } from "./types";

const BASE_URL = "";

export const register = createAsyncThunk(`${BASE_URL}/register`, async (input: RegisterInput) => {
  try {
  } catch (err) {
    console.error(err);
  }
});
export const login = createAsyncThunk(`${BASE_URL}/login`, async () => {});
