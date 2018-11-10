import { put } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions";

// GET BOOK
export function* getBooksSaga(action) {
  try {
    const response = yield axios.get("/books/");
    yield console.log(response.data);
    yield put(actions.getBooksSuccess(response.data));
  } catch (errors) {
    yield console.log("ERROR", errors.response.data);
    yield put(actions.getErrors(errors.response.data));
  }
}
