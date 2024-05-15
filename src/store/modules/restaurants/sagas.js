import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../../services/api";
import {
  FETCH_RESTAURANT_REQUEST,
  fetchRestaurantsSuccess,
  fetchRestaurantsFailure,
} from "./actions";

function* fetchRestaurantData() {
  try {
    const response = yield call(fetch, api.concat("venue/9"));
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = yield call([response, "json"]);
    yield put(fetchRestaurantsSuccess(data));
  } catch (error) {
    yield put(fetchRestaurantsFailure(error.message));
  }
}

function* restaurantSaga() {
  yield takeLatest(FETCH_RESTAURANT_REQUEST, fetchRestaurantData);
}

export default restaurantSaga;
