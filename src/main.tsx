/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";

import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./styles/clear.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
