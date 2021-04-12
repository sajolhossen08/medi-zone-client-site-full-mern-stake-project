import React from 'react';
import './Product.css';

const Product = ({product}) => {
    console.log(product)
    return (
        <div className="product-card card col-md-3 col-sm-5 justify-content-center">
            <div className="bg-special text-center rounded my-2 py-3">
                <img src={product.imageURL} className="product-img img-fluid rounded" alt=""/>
                <h5>{product.name}</h5>
                <div className="d-flex justify-content-between px-2 my-3">
                    <h4 className="text-primary font-weight-bold ">${product.price}</h4>
                    <button className="ms-4">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;