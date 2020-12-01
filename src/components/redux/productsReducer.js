import {
  ADD_PRODUCT,
  ADD_PRODUCT_START,
  ADD_PRODUCT_ERROR,
  GET_PRODUCT,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_START,
  DELETE_PRODUCT,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_START,
} from "../redux/types";
const initialState = {
  products: [],
  active: null,
  error: false,
  loading: false,
};
export const reducerProducts = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_PRODUCT_START:
    case GET_PRODUCT_START:
    case ADD_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        loading: false,
        products: [...state.products, payload],
      };

    case DELETE_PRODUCT_ERROR:
    case GET_PRODUCT_ERROR:
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        loading: false,
        error: false,
        products: payload,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        loading: false,
        error: false,
        products: state.products.filter((product) => product._id !== payload),
      };
    default:
      return state;
  }
};
