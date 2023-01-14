import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
const root = createRoot(document.getElementById("root"));
import store from "./components/redux/store";
import { Provider } from "react-redux";

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
