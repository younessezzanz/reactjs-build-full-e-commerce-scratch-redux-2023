import { combineReducers } from "redux";
import categoryReducer from "./categories/categoryReducer";

export default combineReducers({
  allCategory: categoryReducer,
});
