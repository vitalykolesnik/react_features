import React, { FC } from "react";
import { Counter } from "component/Counter/Counter";

const App: FC = () => {
  return (
    <div className="container text-center mx-auto bg-slate-100">
      <Counter />
    </div>
  );
};

export default App;
