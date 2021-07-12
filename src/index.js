import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import authReducer from "./redux/reducers/authReducer";
import propertyReducer from "./redux/reducers/propertyReducer";
import vehicleReducer from "./redux/reducers/vehicleReducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  propertyReducer: propertyReducer,
  vehicleReducer: vehicleReducer,
});

// const logger = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log("[Middleware] dispatch", action);
//       const result = next(action);
//       console.log("[Middleware] next", store.getState());
//       return result;
//     };
//   };
// };

const combineEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  combineEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
