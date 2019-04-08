import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./views/Home";
import "./style/main.scss";

export default () => (
  <Provider store={store}>
    <div className="app-container">
      <Home />
    </div>
  </Provider>
);
