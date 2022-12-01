import { CounterStateType } from "redux/counter";

export const selectValue = (state: CounterStateType) => {
  return state.counter.value;
};
