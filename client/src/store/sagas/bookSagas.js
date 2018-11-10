import { put } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions";

export function* createBookSaga(action) {
  console.log(action);
  try {
    let book = {
      title: action.book.bookTitle,
      author: action.book.bookAuthor,
      numPages: action.book.bookPages
    };
    yield axios.post("/books/", book);
    yield put(actions.getBooksInit());
  } catch (errors) {
    yield console.log("ERROR", errors.response.data);
    yield put(actions.getErrors(errors.response.data));
  }
}

export function* updateBookSaga(action) {
  console.log(action);
  try {
    let book = {
      title: action.book.book.bookTitle,
      author: action.book.book.bookAuthor,
      numPages: action.book.book.bookPages
    };
    yield axios.put("/books/" + action.book.bookID, book);
    yield put(actions.getBooksInit());
  } catch (errors) {
    yield console.log("ERROR", errors.response.data);
    yield put(actions.getErrors(errors.response.data));
  }
}

export function* deleteBookSaga(action) {
  console.log(action);
  try {
    yield axios.delete("/books/" + action.bookID);
    // yield put(actions.getBookSuccess(response.data[0]));
  } catch (errors) {
    yield console.log("ERROR", errors.response.data);
    yield put(actions.getErrors(errors.response.data));
  }
}
