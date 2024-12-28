import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";
import { BrowserRouter } from "react-router-dom";
import '../main.css'

import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode >
);
