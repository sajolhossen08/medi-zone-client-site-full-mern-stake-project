import React from 'react';

const ManageProductList = ({product}) => {
    return (
        <div>
            <div className="mr-5" style={{display: 'inline-block', marginRight:'50px'}}><h5>Name: {product.name}</h5></div>
            <div  style={{display: 'inline-block'}}><h5>Price: {product.price}</h5></div>
            <div><button>Delete</button></div>
            <hr/>
        </div>
    );
};

export default ManageProductList;