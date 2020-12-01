import ListProductsEmpty from "./ListProductsEmpty"
import ListProductItem from './ListProductItem'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from './redux/actions'
const ListProducts = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(selector=>selector.products);
    const {loading} = useSelector(selector=>selector.products);
    console.log(loading)
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);
    return ( 
          <>
          {loading ? "Cargando..." : (<div className="container">
            <div className="d-flex justify-content-center">
                <table className="table" >
                    <thead className="text-center bg-info">
                        <tr className="text-white">
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length <= 0 ? <ListProductsEmpty title="Stock of Products is empty"/>  : (
                            products.map(product=><ListProductItem key={product.name} {...product} />)
                        )}
                    </tbody>
                </table>
            </div>
        </div>)}
          </>
);
}
 
export default ListProducts;