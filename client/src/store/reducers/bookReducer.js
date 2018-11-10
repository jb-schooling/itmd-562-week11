import * as actionTypes from "../actions/actionTypes";

const initialState = {
  book: {}
};
const setBook = (state, action) => {
  state = {
    ...state,
    book: action.book
  };
  return state;
};

const createBook = (state, action) => {
  state = {
    ...state,
    book: action.book
  };
  return state;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BOOK:
      return setBook(state, action);
    case actionTypes.CREATE_BOOK_SUCCESS:
      return createBook(state, action);
    default:
      return state;
  }
};

export default reducer;
