import materializeCSS from 'materialize-css/dist/css/materialize.min.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import reduxThunk from 'redux-thunk';


import App from "./components/App";
import authReducer from "./reducers/authReducer";
import axios from 'axios';
window.axios = axios

const store = configureStore({ 
  reducer: {
    auth: authReducer
  },
  middleware: [reduxThunk],
  preloadedState: {}
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);

