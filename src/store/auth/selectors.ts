import { RootState } from "..";

export const selectisAuth = (state: RootState) => state.auth.isAuth;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectError = (state: RootState) => state.auth.error;
