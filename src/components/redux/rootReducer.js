import { combineReducers } from "redux";
import { reducerProducts } from "./productsReducer";
import { alertReducer } from "../redux/alertaReducer/alertReducer";
export const reducer = combineReducers({
  products: reducerProducts,
  alert: alertReducer,
});
