import React from 'react';

function ListProductItem(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{props.price}</td>
            <td>Eliminar - Editar</td>
        </tr>
    );
}

export default ListProductItem;