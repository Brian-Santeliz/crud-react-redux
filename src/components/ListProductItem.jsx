import { useDispatch } from "react-redux";
import { deleteProduct, activeProductEdit } from "./redux/actions";
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'
function ListProductItem(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClickUpdate = (props)=>{
    const productActive= {
      name:props.name,
      description:props.description,
      price:props.price,
    }
    dispatch(activeProductEdit(productActive))
    history.push(`/update/${props._id}`)
}
  const handleClick = (props) => {
    Swal.fire({
      title: 'Delete',
      text:   `Are you sure in delete a product with name ${props.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
      dispatch(deleteProduct(props._id));
      }
    })
    
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
