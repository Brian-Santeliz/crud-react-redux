import {
  ADD_PRODUCT,
  ADD_PRODUCT_START,
  ADD_PRODUCT_ERROR,
} from "../redux/types";
import axios from "../../clientAxios";
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
