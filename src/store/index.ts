import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
