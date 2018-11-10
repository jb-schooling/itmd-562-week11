import * as actionTypes from "./actionTypes";

// GET ERRORS
export const getErrors = errors => {
  return {
    type: actionTypes.GET_ERRORS,
    errors: errors
  };
};
