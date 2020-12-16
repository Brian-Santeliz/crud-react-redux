import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { initialState } from "./FormAdd";
import { getActiveId, updateProduct } from "./redux/actions";
import {
  errorFormAdd,
  deleteErrorActions,
} from "./redux/alertaReducer/actions";
import Spinner from "./Spinner";
const FormUpdate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const { active, loading } = useSelector((select) => select.products);
  const { error } = useSelector((state) => state.alert);
  const [form, setForm] = useState(initialState);
  useEffect(() => {
    if (!active) {
      dispatch(getActiveId(id));
      return;
    }
    setForm(active);
  }, [active, dispatch, id]);
  const handleChangeInput = ({ target }) => {
    setForm((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.name.trim() === "" ||
      form.description.trim() === "" ||
      form.price === ""
    ) {
      const errorObjet = {
        className:
          "alert alert-danger text-danger font-weigth-bold text-center text-uppercase",
        text: "Error in fields to update a product",
      };
      dispatch(errorFormAdd(errorObjet));
      return;
    }
    dispatch(deleteErrorActions(null));
    dispatch(updateProduct(id, form));
    history.push("/");
  };
  const alertError = error && (
    <div className={error.className}>{error.text}</div>
  );
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="col-md-6">
              {alertError}
              <form className="card" onSubmit={handleSubmit}>
                <h1 className="font-weight-light text-center card-header">
                  Update Product
                </h1>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      onChange={handleChangeInput}
                      required="required"
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      className="form-control"
                      placeholder="Update the name..."
                      autoFocus
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description:</label>

                    <input
                      onChange={handleChangeInput}
                      required="required"
                      type="text"
                      id="description"
                      name="description"
                      value={form.description}
                      className="form-control"
                      placeholder="Update description..."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                      onChange={handleChangeInput}
                      required="required"
                      type="number"
                      id="price"
                      name="price"
                      value={form.price}
                      className="form-control"
                      placeholder="Update price..."
                    />
                  </div>
                  <button type="submit" className="btn btn-info btn-block">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormUpdate;
