import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counter } from "redux/counter";

const appReduser = combineReducers({ counter });

export const store = configureStore({
  reducer: appReduser,
});
