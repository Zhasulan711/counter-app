import "../styles/dashboard/App.scss";
import { useState, useEffect } from "react";
import React from "react";

export const CounterApp = () => {
  const [counts, setCounts] = useState<number>(0);

  const handleIncreasing = () => {
    setCounts(counts + 1);
    localStorage.setItem("numbers", JSON.stringify(counts + 1));
  };

  const handleDecreasing = () => {
    setCounts(counts - 1);
    localStorage.setItem("numbers", JSON.stringify(counts - 1));
  };

  const handleReset = () => {
    setCounts(0);
    localStorage.removeItem("numbers");
  };

  useEffect(() => {
    const lol: number = JSON.parse(localStorage.getItem("numbers") || "{}");
    if (counts) {
      setCounts(lol);
    }
  }, [counts]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-text">
          <h1>This Counter App</h1>
          <h2>Your balance: {counts}</h2>
        </div>
        <div className="header-buttons">
          <button onClick={handleIncreasing}>Increase</button>
          <button onClick={handleDecreasing}>Decrease</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </header>
    </div>
  );
};
