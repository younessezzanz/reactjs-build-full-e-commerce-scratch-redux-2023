import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const meddleware = [thunk];
const initailState = {};

const store = createStore(
  rootReducer,
  initailState,
  composeWithDevTools(applyMiddleware(...meddleware))
);

export default store;
