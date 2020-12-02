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
  GET_DELETE_PRODUCT,
  GET_PRODUCT_EDIT,
  GET_ACTIVE_ID,
  GET_ACTIVE_ID_ERROR,
  GET_ACTIVE_ID_START,
} from "../redux/types";
const initialState = {
  products: [],
  active: null,
  error: false,
  loading: false,
  deleteIdProduct: null,
};
export const reducerProducts = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_PRODUCT_START:
    case GET_PRODUCT_START:
    case ADD_PRODUCT_START:
    case GET_ACTIVE_ID_START:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        loading: false,
        error: false,
        active: null,
        products: [...state.products, payload],
      };

    case DELETE_PRODUCT_ERROR:
    case GET_PRODUCT_ERROR:
    case ADD_PRODUCT_ERROR:
    case GET_ACTIVE_ID_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        loading: false,
        active: null,
        products: payload,
      };
    case GET_DELETE_PRODUCT:
      return {
        ...state,
        deleteIdProduct: payload,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        loading: false,
        error: false,
        products: state.products.filter(
          (product) => product._id !== state.deleteIdProduct
        ),
        deleteIdProduct: null,
      };
    case GET_PRODUCT_EDIT:
      return {
        ...state,
        active: payload,
      };
    case GET_ACTIVE_ID:
      return {
        ...state,
        loading: false,
        error: false,
        active: payload,
      };
    default:
      return state;
  }
};
