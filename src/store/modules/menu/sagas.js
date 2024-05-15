import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../../services/api";
import {
  FETCH_MENU_REQUEST,
  fetchMenuSuccess,
  fetchMenuFailure,
} from "./actions";

function* fetchMenuData() {
  try {
    const response = yield call(fetch, api.concat("menu"));
    const data = yield call([response, "json"]);
    yield put(fetchMenuSuccess(data));
  } catch (error) {
    yield put(fetchMenuFailure(error.message));
  }
}

function* menuSaga() {
  yield takeLatest(FETCH_MENU_REQUEST, fetchMenuData);
}

export default menuSaga;
