import axios from "../../clientAxios";
import {
  ADD_PRODUCT,
  ADD_PRODUCT_START,
  ADD_PRODUCT_ERROR,
  GET_PRODUCT,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_START,
} from "../redux/types";
export const getProducts = () => {
  return async (dispatch) => {
    dispatch(getProductsStart());
    try {
      const response = await axios.get("/products");
      const data = response.data;
      dispatch(getProductsDatabase(data));
    } catch (error) {
      dispatch(getProductsError(true));
    }
  };
};
export const AddProduct = (product) => {
  return async (dispatch) => {
    dispatch(addProductStart());
    try {
      const response = await axios.post("/products", product);
      if (response.status === 201) {
        dispatch(addProductDatabase(product));
        return;
      }
    } catch (error) {
      dispatch(addProductError(true));
    }
  };
};

const addProductStart = () => ({
  type: ADD_PRODUCT_START,
});
const addProductDatabase = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});
const addProductError = (error) => ({
  type: ADD_PRODUCT_ERROR,
  payload: error,
});

const getProductsStart = () => ({
  type: GET_PRODUCT_START,
});

const getProductsDatabase = (products) => ({
  type: GET_PRODUCT,
  payload: products,
});

const getProductsError = (state) => ({
  type: GET_PRODUCT_ERROR,
  payload: state,
});
