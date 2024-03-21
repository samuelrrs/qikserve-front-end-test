import { combineReducers } from "redux";
import menuReducer from "./menu/reducer";
import cartReducer from "./cart/reducer";
import restaurantReducer from "./restaurants/reducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  cart: cartReducer,
  restaurant: restaurantReducer,
});

export default rootReducer;
