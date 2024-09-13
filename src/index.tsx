import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Remova a extensão .tsx

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
