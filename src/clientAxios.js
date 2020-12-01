import axios from "axios";
const clienteAxios = axios.create({
  baseURL: "http://localhost:4040",
});
export default clienteAxios;
