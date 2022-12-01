import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, CounterStateType } from "redux/counter";
import { selectValue } from "redux/counterSelector";

const App: FC = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: CounterStateType) =>
    selectValue(state)
  );
  const onIncrement = () => dispatch(increment());

  const onDecrement = () => dispatch(decrement());

  console.log(counterValue);

  return (
    <div className="container text-center mx-auto bg-slate-500">
      <h1 className="py-2">TS REACT REDUX TAILWIND</h1>
      <div className="flex justify-around">
        <button onClick={onIncrement}>+</button>
        <h2>Count: {counterValue}</h2>
        <button onClick={onDecrement}>-</button>
      </div>
    </div>
  );
};

export default App;
