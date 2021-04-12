import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const ManageProductList = ({product}) => {

    const handleDeleteProduct = (id) =>{
        fetch(`https://tranquil-citadel-03817.herokuapp.com/deleteProduct/${id}`, {
            method: 'delete',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(result => {
            console.log(result)
        })
    }

    return (
        <div>
            <div className="mr-5" style={{display: 'inline-block', marginRight:'50px'}}><h5>Name: {product.name}</h5></div>
            <div  style={{display: 'inline-block'}}><h5>Price: {product.price}</h5></div>
            <div><button onClick={() => handleDeleteProduct(product._id)}>Delete</button></div>
            <hr/>
        </div>
    );
};

export default ManageProductList;