// React
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// framework & library
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./store";
// css
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster position="top-left" reverseOrder={false} />
    </BrowserRouter>
  </Provider>
);
