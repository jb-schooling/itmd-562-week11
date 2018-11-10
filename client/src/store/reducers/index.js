import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import bookReducer from "./bookReducer";
import booksReducer from "./booksReducer";

export default combineReducers({
  errors: errorsReducer,
  book: bookReducer,
  books: booksReducer
});
