import React from "react";

import { CountProps } from "../../shared/interface";

export const ResetButton: React.FC<CountProps> = ({ setCount }) => {
  const handleReset = () => {
    // Update state with 0 added
    setCount(0);

    // Remove count from localStorage
    localStorage.removeItem("count");
  };

  return <button onClick={handleReset}>Reset</button>;
};
