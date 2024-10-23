import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./context/AuthContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AuthContext>
        <App />
      </AuthContext>
    </StrictMode>
  </BrowserRouter>
);
