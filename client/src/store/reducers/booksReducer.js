import * as actionTypes from "../actions/actionTypes";

const initialState = {
  books: {},
  loading: true
};
const getBooks = (state, action) => {
  state = {
    ...state,
    books: action.books,
    loading: false
  };
  return state;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BOOKS_SUCCESS:
      return getBooks(state, action);
    default:
      return state;
  }
};

export default reducer;
