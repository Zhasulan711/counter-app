import "../styles/dashboard/App.scss";
import React, { useState, useEffect, useTransition } from "react";

export const CounterApp = () => {
  const [count, setCount] = useState<number>(0);
  const [isPending, startTransition] = useTransition();

  const handleIncreasing = () => {
    startTransition(() => {
      setCount(count + 5);
      localStorage.setItem("count", JSON.stringify(count + 5));
    });
  };

  const handleDecreasing = () => {
    startTransition(() => {
      setCount(count - 5);
      localStorage.setItem("count", JSON.stringify(count - 5));
    });
  };

  const handleReset = () => {
    startTransition(() => {
      setCount(0);
      localStorage.removeItem("count");
    });
  };

  useEffect(() => {
    const receivingCount = localStorage.getItem("count");

    let processingCount = "";

    receivingCount !== null ? processingCount = JSON.parse(receivingCount) : processingCount = "";

    processingCount ? setCount(parseInt(processingCount)) : setCount(0);
  }, []);

  return (
    <div className="App">
      <div className="App-text">
        <h1>Counter</h1>
        <h2>{count}</h2>
      </div>
      <div className="App-buttons">
        <button onClick={handleIncreasing} disabled={isPending}>
          +
        </button>
        <button onClick={handleDecreasing} disabled={isPending}>
          -
        </button>
        <button onClick={handleReset} disabled={isPending}>
          Reset
        </button>
      </div>
    </div>
  );
};
