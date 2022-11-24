import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { Provider } from "react-redux";
import clubReducer from "./slices/clubSlice";
import userDataReducer from "./slices/userDataSlice";
import App from "./App";

const store = configureStore({
  reducer: {
    auth: authReducer,
    club: clubReducer,
    userData: userDataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
