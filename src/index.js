import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/layout/App"; // 경로 수정

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
