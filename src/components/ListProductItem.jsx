import React from "react";

function ListProductItem(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.price}</td>
      <td className="d-flex justify-content-center">
        <button className="btn btn-info">Update</button>
        <button className="ml-2 btn btn-danger">Delete</button>
      </td>
    </tr>
  );
}

export default ListProductItem;
