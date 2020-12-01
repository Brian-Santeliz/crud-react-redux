import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
/* CREACR ACCION WHEN COMPONENT DID MOUNT */
const ListProducts = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(  )
    }, [])
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