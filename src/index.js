import React from "react";
// css
// import "./index.css";
import "./styles/styles.scss";
import "toastr/build/toastr.min.css";
// npm
import ReactDOM from "react-dom/client";
// comp
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "src/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();