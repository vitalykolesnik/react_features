import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CounterReduser } from "redux/counterReduser";
import { AppReduser } from "redux/appReduser";

const combinedRedusers = combineReducers({
  counter: CounterReduser,
  app: AppReduser,
});

export const store = configureStore({
  reducer: combinedRedusers,
});

export type AppDispatch = typeof store.dispatch;
