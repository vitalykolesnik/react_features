import { CounterStateType } from "redux/counterReduser";

export const selectValue = (state: CounterStateType) => {
  return state.counter.value;
};

export const selectTitle = (state: CounterStateType) => {
  return state.counter.title;
};
