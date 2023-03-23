import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { theme } from "./providers/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
