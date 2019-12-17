import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = (store) => (next) => (action) => {
  console.log("logger action::::", action);
  next(action);
};

const store = createStore(reducers, compose(applyMiddleware(logger, thunk), composeEnhancers()));

export default store;
