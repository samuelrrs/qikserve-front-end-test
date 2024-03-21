import { combineReducers } from "redux";
import menuReducer from "./menu/reducer";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  cart: cartReducer,
});

export default rootReducer;
