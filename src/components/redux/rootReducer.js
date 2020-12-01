import { combineReducers } from "redux";
import { reducerProducts } from "./productsReducer";

export const reducer = combineReducers({
  products: reducerProducts,
});
