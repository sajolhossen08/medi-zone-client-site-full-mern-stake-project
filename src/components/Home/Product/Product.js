import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    
    return (
        <div className="shadow product-card card col-md-3 col-sm-5 justify-content-center">
            <div className="bg-special text-center rounded my-2 py-3 h-100">
                <img src={product.imageURL} className="product-img img-fluid rounded w-75" alt=""/>
                <h5>{product.name}</h5>
                <div className="d-flex justify-content-between px-2 my-3">
                    <h4 className="text-dark font-weight-bold ">${product.price}</h4>
                    <Link to={`/checkout/${product._id}`}>
                    <button className="btn btn-danger">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;