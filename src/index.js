import React from "react";
import "./index.scss";
import './Fonts/Fonts.scss';
import App from "./App/App";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import store from './Configs/ReduxStore';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
