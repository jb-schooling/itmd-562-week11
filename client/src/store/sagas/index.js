import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import * as bookSagas from "./bookSagas";
import * as booksSagas from "./booksSagas";

export function* watchBooks() {
  
  yield takeEvery(actionTypes.GET_BOOKS_INIT, booksSagas.getBooksSaga);
  yield takeEvery(actionTypes.CREATE_BOOK_INIT, bookSagas.createBookSaga);
  yield takeEvery(actionTypes.UPDATE_BOOK_INIT, bookSagas.updateBookSaga);
  yield takeEvery(actionTypes.DELETE_BOOK_INIT, bookSagas.deleteBookSaga);
}
