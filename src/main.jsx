import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import IsRegProvider from "./context/IsRegProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <IsRegProvider>
        <App />
      </IsRegProvider>
    </BrowserRouter>
  </React.StrictMode>
);
