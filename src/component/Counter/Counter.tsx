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

  return (
    <>
      <div className="container text-center mx-auto bg-slate-100"></div>
      <Title />
      <button className="p-2 mb-10 border-2 border-white rounded-xl transition ease-in-out shadow-md text-slate-100 bg-pink-800 hover:bg-pink-600 hover:scale-110 hover:shadow-xl shadow-gray-800 hover:shadow-gray-600 duration-400">
        Save Changes
      </button>
      <div className="static mt-4 text-slate-100">
        <div className="flex flex-col sm:flex-row justify-center text-md divide-y-2 sm:divide-y-0 sm:divide-x-2">
          <button
            className="p-2 shrink bg-slate-700 sm:rounded-l-xl transition delay-50 hover:bg-indigo-500 duration-300  "
            onClick={onDecrementAsync}
          >
            Delay Decrement
          </button>
          <button
            className="p-2 shrink bg-slate-700  transition  delay-50   hover:bg-indigo-500 duration-300"
            onClick={onDecrement}
          >
            Decrement
          </button>
          <button
            className="p-2 shrink bg-slate-700  transition  delay-50   hover:bg-indigo-500 duration-300 "
            onClick={onIncrement}
          >
            Increment
          </button>
          <button
            className="p-2 shrink bg-slate-700 sm:rounded-r-xl transition  delay-50  hover:bg-indigo-500 duration-300"
            onClick={onIncrementAsync}
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
