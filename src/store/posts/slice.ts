import { createSlice } from "@reduxjs/toolkit";
import { Post } from "./types";

type PostState = {
  posts: Post[];
  error: any;
};

export const initialState: PostState = {
  posts: [],
  error: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

export default postSlice.reducer;
