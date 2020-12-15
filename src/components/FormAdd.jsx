import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "./redux/actions";
import { errorFormAdd,deleteErrorActions } from "./redux/alertaReducer/actions";
export const initialState = {
  name: "",
  description: "",
  price: "",
};
const FormAdd = () => {
  const [form, setForm] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.alert);
  const handleChange = ({ target }) => {
    setForm((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.name.trim() === "" ||
      form.description.trim() === "" ||
      form.price.trim() === ""
    ) {
      const error = {
        className:
          "alert alert-danger text-danger font-weigth-bold text-center text-uppercase",
        text: "Error all fields is required",
      };
      dispatch(errorFormAdd(error));
      return;
    }
    dispatch(deleteErrorActions(null))
    dispatch(addProduct(form));
    setForm(initialState);
    history.push("/");
  };
   const alertError = error && (
    <div className={error.className}>{error.text}</div>
  );
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="col-md-6">
            {alertError}
            <form className="card" onSubmit={handleSubmit}>
              <h1 className="font-weight-light text-center card-header">
                Add new product to the list
              </h1>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    onChange={handleChange}
                    required="required"
                    value={form.name}
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Write the name of product..."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description:</label>

                  <input
                    onChange={handleChange}
                    required="required"
                    type="text"
                    value={form.description}
                    id="description"
                    name="description"
                    className="form-control"
                    placeholder="Description the producto"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price:</label>
                  <input
                    onChange={handleChange}
                    required="required"
                    type="number"
                    value={form.price}
                    id="price"
                    name="price"
                    className="form-control"
                    placeholder="Set a price for product"
                  />
                </div>
                <button type="submit" className="btn btn-success btn-block">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAdd;
