import { all } from "redux-saga/effects";
import menuSaga from "./menu/sagas";
import RestaurantData from "./restaurants/sagas";

function* rootSaga() {
  yield all([RestaurantData(), menuSaga()]);
}

export default rootSaga;
