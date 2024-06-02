import React from "react";

import { CounterProps } from "../../interfaces/CounterProps";

export const CounterChange: React.FC<CounterProps> = ({ setCount }) => {
  const handleCounterChange = (amount: number) => {
    setCount((prevCount) => {
      const newCount = Math.max(prevCount + amount, 0);

      // Add count to localStorage
      localStorage.setItem("count", JSON.stringify(newCount));

      // Update state with count added
      return newCount;
    });
  };

  const handleIncrease = () => handleCounterChange(+5);
  const handleDecrease = () => handleCounterChange(-5);

  return (
    <>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </>
  );
};
