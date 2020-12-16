import axios from "../../clientAxios";
import Swal from "sweetalert2";
import {
  ADD_PRODUCT,
  ADD_PRODUCT_START,
  ADD_PRODUCT_ERROR,
  GET_PRODUCT,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_START,
  DELETE_PRODUCT,
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_ERROR,
  GET_DELETE_PRODUCT,
  GET_PRODUCT_EDIT,
  GET_ACTIVE_ID,
  GET_ACTIVE_ID_ERROR,
  GET_ACTIVE_ID_START,
  EDIT_PRODUCT,
  EDIT_PRODUCT_ERROR,
  EDIT_PRODUCT_START,
} from "../redux/types";
export const getProducts = () => {
  return async (dispatch) => {
    dispatch(getProductsStart());
    try {
      const response = await axios.get("/products");
      const data = response.data;
      if (data !== "Products stock is empty") {
        dispatch(getProductsDatabase(data));
        return;
      }
      dispatch(getProductsDatabase([]));
    } catch (error) {
      dispatch(getProductsError("Something was wrong with database."));
    }
  };
};
export const addProduct = (product) => {
  return async (dispatch) => {
    dispatch(addProductStart());
    try {
      const response = await axios.post("/products", product);
      if (response.status === 201) {
        dispatch(addProductDatabase(product));
        Swal.fire("Save!", "Product has been saved.", "success");
        return;
      }
    } catch (error) {
      dispatch(addProductError("The name of product must be unique"));
    }
  };
};
export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch(getDeleteProduct(id));
    dispatch(deleteProductStart());
    try {
      await axios.delete(`/products/${id}`);
      dispatch(deleteProductDatabase(id));
      Swal.fire("Deleted!", "Your product has been deleted.", "success");
    } catch (error) {
      Swal.fire("Error!", "Something has wrong deleting.", "error");
      dispatch(deleteProductError("Something has wrong deleting"));
    }
  };
};

export const activeProductEdit = (product) => {
  return (dispatch) => {
    dispatch(getProductEdit(product));
  };
};

export const getActiveId = (id) => {
  return async (dispatch) => {
    dispatch(getActiveIdStart());
    try {
      const response = await axios.get(`/products/${id}`);
      const data = response.data;
      dispatch(getActiveIdDatabse(data));
    } catch (error) {
      dispatch(getActiveIdError(true));
    }
  };
};

export const updateProduct = (id, product) => {
  return async (dispatch) => {
    dispatch(updateProductStart());
    try {
      await axios.put(`/products/${id}`, product);
      dispatch(updateProductDatabase(product));
    } catch (error) {
      console.log(error);
      dispatch(
        updateProductError("You trying update the name, but it is exist")
      );
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

const deleteProductStart = () => ({
  type: DELETE_PRODUCT_START,
});

const deleteProductDatabase = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

const deleteProductError = (state) => ({
  type: DELETE_PRODUCT_ERROR,
  payload: state,
});

const getDeleteProduct = (id) => ({
  type: GET_DELETE_PRODUCT,
  payload: id,
});

const getProductEdit = (product) => ({
  type: GET_PRODUCT_EDIT,
  payload: product,
});

const getActiveIdStart = () => ({
  type: GET_ACTIVE_ID_START,
});
const getActiveIdDatabse = (data) => ({
  type: GET_ACTIVE_ID,
  payload: data,
});
const getActiveIdError = (state) => ({
  type: GET_ACTIVE_ID_ERROR,
  payload: state,
});

const updateProductStart = () => ({
  type: EDIT_PRODUCT_START,
});

const updateProductDatabase = (product) => ({
  type: EDIT_PRODUCT,
  payload: product,
});

const updateProductError = (state) => ({
  type: EDIT_PRODUCT_ERROR,
  payload: state,
});
