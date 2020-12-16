import ListProductsEmpty from "./ListProductsEmpty";
import ListProductItem from "./ListProductItem";
import Error from "./Error";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/actions";
const ListProducts = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((selector) => selector.products);
  const { loading } = useSelector((selector) => selector.products);
  const { error } = useSelector((selector) => selector.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <h2 className="text-center text-capitalize">List of Products</h2>
          {error && <Error error={error} />}
          <div className="d-flex justify-content-center">
            <table className="table">
              <thead className="text-center bg-info">
                <tr className="text-white">
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <ListProductsEmpty title="Stock of Products is empty" />
                ) : (
                  products.map((product) => (
                    <ListProductItem key={product.name} {...product} />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ListProducts;
