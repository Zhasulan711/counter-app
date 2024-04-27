import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { CounterApp } from "./components/CounterApp.tsx";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLCanvasElement);
root.render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>
);
