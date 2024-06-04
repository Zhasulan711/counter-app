import React from "react";

import { CounterProps } from "../../interfaces/CounterProps";

export const ResetButton: React.FC<CounterProps> = ({ setCount }) => {
  const handleReset = () => {
    // Update state with 0 added
    setCount(0);

    // Remove count from localStorage
    localStorage.removeItem("count");
  };

  return <button onClick={handleReset}>Reset</button>;
};
