import "../../styles/root/CounterApp.scss";
import { useState, useEffect } from "react";
import { ResetButton } from "./ResetButton";
import { Control } from "./Control";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  // Get count from localStorage
  useEffect(() => {
    const localStorageCount = JSON.parse(localStorage.getItem("count") || "0");
    setCount(localStorageCount);
  }, []);

  return (
    <div className="CounterApp">
      <div className="CounterApp-text">
        <h1>Counter</h1>
        <h2>{count}</h2>
      </div>
      <div className="CounterApp-buttons">
        <Control setCount={setCount} />
        <ResetButton setCount={setCount} />
      </div>
    </div>
  );
};
