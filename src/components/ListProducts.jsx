import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from './redux/actions'
const ListProducts = () => {
    const dispatch = useDispatch();
    const selector = useSelector(selector=>selector.products);
    console.log(selector)
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);
    return ( 
        <div className="container">
            <div className="d-flex justify-content-center">
                <table className="table text-white" >
                    <thead className="text-center bg-info">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
);
}
 
export default ListProducts;