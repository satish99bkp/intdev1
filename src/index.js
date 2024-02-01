import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import PropsPage from "./pages/propsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <Home />
    <PropsPage />
  </React.StrictMode>,
);
