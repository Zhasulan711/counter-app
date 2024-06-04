import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLCanvasElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
