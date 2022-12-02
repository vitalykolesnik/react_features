import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  CounterStateType,
  incrementAsync,
  decrementAsync,
} from "redux/counterReduser";
import { selectValue } from "redux/counterSelector";
import { AppDispatch } from "redux/store";
import { Title } from "component/Counter/Title/Title";

export const Counter: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const counterValue = useSelector((state: CounterStateType) =>
    selectValue(state)
  );

  const onIncrement = () => dispatch(increment());

  const onDecrement = () => dispatch(decrement());

  const onIncrementAsync = async () => await dispatch(incrementAsync());

  const onDecrementAsync = async () => await dispatch(decrementAsync());

  const isPressed = (e: any) => {
    const prev = e.currentTarget.class;
    prev.push("animate-pulse");
  };

  return (
    <>
      <Title />
      <div className="static mt-4 text-slate-100">
        <div className="flex justify-center text-md">
          <button
            className="p-4 bg-slate-700 rounded-l-xl transition ease-in-out delay-50  active:bg-indigo-500  duration-500"
            onClick={onDecrementAsync}
            onMouseDown={isPressed}
          >
            Delay Decrement
          </button>
          <button
            className="p-4 bg-slate-700 transition ease-in-out delay-50  active:bg-indigo-500 duration-500"
            onClick={onDecrement}
            onMouseDown={isPressed}
          >
            Decrement
          </button>
          <button
            className="p-4 bg-slate-700 transition ease-in-out delay-50  active:bg-indigo-500 duration-500 "
            onClick={onIncrement}
            onMouseDown={isPressed}
          >
            Increment
          </button>
          <button
            className="p-4 bg-slate-700 rounded-r-xl transition active: ease-in-out delay-50  active:bg-indigo-500 duration-500"
            onClick={onIncrementAsync}
            onMouseDown={isPressed}
          >
            Delay Increment
          </button>
        </div>
        <div className="text-md font-bold py-4 text-slate-700">
          Count: {counterValue}
        </div>
      </div>
    </>
  );
};
