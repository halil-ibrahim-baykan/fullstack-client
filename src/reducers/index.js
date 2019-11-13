import { combineReducers } from "redux";
import items from "./items";
import seller from "./seller";

export default combineReducers({
  items,
  seller
});
