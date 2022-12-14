import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "redux/store";
import { CounterStateType, setTitle } from "redux/counterReduser";
import { selectTitle } from "redux/counterSelector";

export const Title: React.FC = () => {
  const [isEdit, setIsEdit] = React.useState(false);

  const counterTitle = useSelector((state: CounterStateType) =>
    selectTitle(state)
  );
  const dispatch = useDispatch<AppDispatch>();

  const onSetTitle = (e: any) => {
    const title = e.currentTarget.value;
    dispatch(setTitle(title));
  };

  return (
    <div className="static w-full bg-stone-600 text-slate-100 border-2 border-stone-800">
      {isEdit ? (
        <input
          autoFocus
          type="text"
          className="block py-4 w-full mx-auto text-center bg-stone-600 text-slate-100"
          value={counterTitle}
          onChange={onSetTitle}
          onBlur={() => {
            setIsEdit(false);
          }}
        />
      ) : (
        <div
          className="block py-4 hover:bg-slate-500 duration-300"
          onClick={() => setIsEdit(true)}
        >
          {counterTitle}
        </div>
      )}
    </div>
  );
};
