import * as actionTypes from "./actionTypes";

export const getBooksInit = books => {
  return {
    type: actionTypes.GET_BOOKS_INIT,
    books: books
  };
};
export const getBooksSuccess = books => {
  return {
    type: actionTypes.GET_BOOKS_SUCCESS,
    books: books
  };
};
