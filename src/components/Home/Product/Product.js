import React from 'react';

const Product = ({product}) => {
    console.log(product)
    return (
        <div className="col-md-3">
            <img style={{height: '300px'}} src={product.imageURL} alt=""/>
            <h3>{product.name}</h3>
        </div>
    );
};

export default Product;