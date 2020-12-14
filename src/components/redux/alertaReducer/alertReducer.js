import { ERROR_MESSAGE, DELETE_ERROR } from "../alertaReducer/types";
const initialState = {
  error: null,
};
export const alertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ERROR_MESSAGE:
      return {
        ...state,
        error: payload,
      };
    case DELETE_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
