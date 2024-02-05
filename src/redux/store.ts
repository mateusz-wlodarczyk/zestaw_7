import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice.ts";

const reducer = combineReducers({
  user: userReducer,
});

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
