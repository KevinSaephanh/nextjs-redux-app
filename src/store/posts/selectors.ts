import { RootState } from "..";

export const selectPosts = (state: RootState) => state.post.posts;
