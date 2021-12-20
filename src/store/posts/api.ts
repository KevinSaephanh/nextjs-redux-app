import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = createAsyncThunk("posts", async () => {
  const res = await axios.get(`${BASE_URL}/posts`);
  return res.data;
});

export const getPost = createAsyncThunk("post", async (id: number) => {
  const res = await axios.get(`${BASE_URL}/posts/${id}`);
  return res.data;
});
