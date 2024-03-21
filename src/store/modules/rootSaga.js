import { all } from "redux-saga/effects";
import menuSaga from "./menu/sagas";

function* rootSaga() {
  yield all([
    menuSaga(), // Adicione o seu saga ao rootSaga
    // Você pode adicionar outros sagas aqui conforme necessário
  ]);
}

export default rootSaga;
