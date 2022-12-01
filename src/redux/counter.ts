const INCREMENT = "COUNTER/INCREMENT";
const DECREMENT = "COUNTER/DECREMENT";

const initialCounterState = { value: 0 };

export type CounterStateType = { counter: typeof initialCounterState };

type CounterActionType = IncrementActionType | DecrementActionType;

export const counter = (
  state = initialCounterState,
  action: CounterActionType
) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};

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
