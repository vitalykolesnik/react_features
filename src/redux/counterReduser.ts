import { Dispatch, ThunkAction } from "@reduxjs/toolkit";

const INCREMENT = "COUNTER/INCREMENT";
const DECREMENT = "COUNTER/DECREMENT";
const SET_TITLE = "COUNTER/SET_TITLE";

const initialCounterState = {
  value: 0,
  title: "Нажмите для редактирования ... ",
};

export type CounterStateType = { counter: typeof initialCounterState };

type CounterActionType =
  | IncrementActionType
  | DecrementActionType
  | SetTitleActionType;

export const CounterReduser = (
  state = initialCounterState,
  action: CounterActionType
) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    case SET_TITLE:
      return { ...state, title: action.title };
    default:
      return state;
  }
};

//Action creators returns actions
type IncrementActionType = {
  type: typeof INCREMENT;
};

export const increment = (): IncrementActionType => ({
  type: INCREMENT,
});

type DecrementActionType = {
  type: typeof DECREMENT;
};

export const decrement = (): DecrementActionType => ({
  type: DECREMENT,
});

type SetTitleActionType = {
  type: typeof SET_TITLE;
  title: string;
};

export const setTitle = (title: string): SetTitleActionType => ({
  type: SET_TITLE,
  title,
});

type DispatchType = Dispatch<CounterActionType>;
type ThunkType = ThunkAction<
  Promise<void>,
  CounterStateType,
  unknown,
  CounterActionType
>;

// Thunk creator returns thunk action
export const incrementAsync = (): ThunkType => {
  return async (dispatch: DispatchType) => {
    console.log("incrementAsync");
    setTimeout(() => {
      dispatch(increment());
    }, 3000);
  };
};

export const decrementAsync = (): ThunkType => {
  return async (dispatch: DispatchType) => {
    console.log("decrementAsync");
    setTimeout(() => {
      dispatch(decrement());
    }, 3000);
  };
};
