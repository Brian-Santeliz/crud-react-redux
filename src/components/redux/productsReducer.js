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
  EDIT_PRODUCT,
  EDIT_PRODUCT_ERROR,
  EDIT_PRODUCT_START,
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
    case EDIT_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
        loading: false,
        error: false,
        active: null,
      };

    case DELETE_PRODUCT_ERROR:
    case GET_PRODUCT_ERROR:
    case ADD_PRODUCT_ERROR:
    case GET_ACTIVE_ID_ERROR:
    case EDIT_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        products: payload,
        loading: false,
        active: null,
      };
    case GET_DELETE_PRODUCT:
      return {
        ...state,
        deleteIdProduct: payload,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== state.deleteIdProduct
        ),
        loading: false,
        error: false,
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
        active: payload,
        loading: false,
        error: false,
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === payload ? payload : product
        ),
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
