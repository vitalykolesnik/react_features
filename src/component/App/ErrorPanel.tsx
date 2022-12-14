import React from "react";

export type ErrorType = {
  message: string;
  action: () => void;
};

export const ErrorPanel: React.FC<ErrorType> = ({ message, action }) => {
  return (
    <div className="flex flex-col ">
      {message}
      <button onClick={action}>Try again...</button>
    </div>
  );
};
