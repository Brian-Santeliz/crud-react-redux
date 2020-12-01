import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "./redux/actions";
import {useHistory} from 'react-router-dom'
function ListProductItem(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClickUpdate = (props)=>{
    dispatch(updateProduct(props))
    history.push(`/update/${props._id}`)
}
  const handleClick = (props) => {
    // eslint-disable-next-line no-restricted-globals
    const response = confirm(
      `Are you sure in delete a product with name ${props.name}`
    );
    if (response) {
      dispatch(deleteProduct(props._id));
      return;
    }
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.price}</td>
      <td className="d-flex justify-content-center">
        <button className="btn btn-info" onClick={()=>handleClickUpdate(props)}>
          Update
        </button>
        <button
          className="ml-2 btn btn-danger"
          onClick={() => handleClick(props)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ListProductItem;
