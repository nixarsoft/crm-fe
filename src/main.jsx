import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";
import '../main.css'

import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
