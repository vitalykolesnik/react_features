import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CounterReduser } from "redux/counterReduser";

const combinedRedusers = combineReducers({ counter: CounterReduser });

export const store = configureStore({
  reducer: combinedRedusers,
});

export type AppDispatch = typeof store.dispatch;
