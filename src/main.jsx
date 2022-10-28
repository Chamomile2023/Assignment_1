import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "../src/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <StoreProvider> */}
    <App />
    {/* </StoreProvider> */}
  </BrowserRouter>
);
