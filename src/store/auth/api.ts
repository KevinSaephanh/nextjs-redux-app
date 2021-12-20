import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterInput, LoginInput, User } from "./types";

const BASE_URL = "";

export const register = createAsyncThunk("register", async (input: RegisterInput) => {
  const res = await axios.post(`${BASE_URL}/register`);
  return res.data;
});

export const login = createAsyncThunk("login", async (input: LoginInput) => {
  const res = await axios.post(`${BASE_URL}/login`);
  const { data } = res;

  // Set token in local storage, decode and return user data
  return {} as User;
});

export const updateUser = createAsyncThunk("update", async (id: number, input: any) => {
  const res = await axios.patch(`${BASE_URL}/${id}`);
  return res.data;
});

export const deleteUser = createAsyncThunk("delete", async (id: number) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
});
