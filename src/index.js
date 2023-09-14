import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import TipCalculator from "./components/TipCalculator/TipCalculator"

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <TipCalculator />
  </React.StrictMode>
);
