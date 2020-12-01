import { ADD_PRODUCT, ADD_PRODUCT_ERROR, ADD_PRODUCT_START } from "./types";
const initialState = {
  products: [],
  active: null,
  error: false,
  loading: false,
};
export const reducerProducts = (state = initialState, { type, payload }) => {
  switch (type) {
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
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
