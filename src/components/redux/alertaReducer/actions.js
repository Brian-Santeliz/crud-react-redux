import {
  ERROR_MESSAGE,
  START_ERROR,
  DELETE_ERROR,
} from "../alertaReducer/types";
export const errorFormAdd = (erroObject) => {
  return (dispatch) => {
    dispatch(errorMessageStart());
    dispatch(addErrorMessage(erroObject));
  };
};

export const deleteErrorActions = (payload) => {
  return (dispatch) => {
    dispatch(deleteErrorMessage(payload));
  };
};
const errorMessageStart = () => ({
  type: START_ERROR,
});
const addErrorMessage = (payload) => ({
  type: ERROR_MESSAGE,
  payload,
});

const deleteErrorMessage = (payload) => ({
  type: DELETE_ERROR,
  payload,
});
