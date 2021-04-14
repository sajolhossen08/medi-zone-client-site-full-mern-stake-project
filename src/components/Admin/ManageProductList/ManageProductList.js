import React, { useContext } from 'react';
import { useHistory } from 'react-router';

const ManageProductList = (props) => {
    const product = props.product;
    const {_id, name, price} = product;
    const history = useHistory();

    const handleDeleteProduct = () =>{
        fetch(`https://tranquil-citadel-03817.herokuapp.com/productDelete/${_id}`, {method: 'DELETE'})
        .then(res => res.json())
        .then(data => {
            alert('Deleted successfully');
            history.replace('/')
        })
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td><button onClick={handleDeleteProduct} className="btn btn-danger">Delete </button></td>
        </tr>
    );
};

export default ManageProductList;