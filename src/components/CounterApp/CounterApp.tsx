import "../../styles/dashboard/CounterApp.scss";
import React, { useState, useEffect } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleCounterChange = (amount: number) => {
    setCount((prevCount) => {
      const newCount = Math.max(prevCount + amount, 0);
      localStorage.setItem("count", JSON.stringify(newCount));

      return newCount;
    });
  };

  const handleReset = () => {
    setCount(0);
    localStorage.removeItem("count");
  };

  useEffect(() => {
    const receivingCount = localStorage.getItem("count");
    setCount(receivingCount !== null ? JSON.parse(receivingCount) : 0);
  }, []);

  return (
    <div className="CounterApp">
      <div className="CounterApp-text">
        <h1>Counter</h1>
        <h2>{count}</h2>
      </div>
      <div className="CounterApp-buttons">
        <button onClick={() => handleCounterChange(5)}>+</button>
        <button onClick={() => handleCounterChange(-5)}>-</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
