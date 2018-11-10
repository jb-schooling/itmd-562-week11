import * as actionTypes from "./actionTypes";

export const createBookInit = book => {
  return {
    type: actionTypes.CREATE_BOOK_INIT,
    book: book
  };
};

export const createBookSuccess = book => {
  return {
    type: actionTypes.CREATE_BOOK_SUCCESS,
    book: book
  };
};

export const setBook = book => {
  return {
    type: actionTypes.SET_BOOK,
    book: book
  };
};

export const updateBookInit = (book, bookID) => {
  return {
    type: actionTypes.UPDATE_BOOK_INIT,
    book: { book, bookID }
  };
};

export const updateBookSuccess = book => {
  return {
    type: actionTypes.UPDATE_BOOK_SUCCESS,
    book: book
  };
};

export const deleteBookInit = bookID => {
  return {
    type: actionTypes.DELETE_BOOK_INIT,
    bookID: bookID
  };
};
export const deleteBookSuccess = bookID => {
  return {
    type: actionTypes.DELETE_BOOK_SUCCESS,
    bookID: bookID
  };
};
