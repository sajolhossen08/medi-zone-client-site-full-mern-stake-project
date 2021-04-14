import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import './CheckOut.css'

const CheckOut = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    console.log(product)

    useEffect(() =>  {
        fetch(`https://tranquil-citadel-03817.herokuapp.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data[0])
        })
    }, [])

    return (
        <div className= "container">
            <div className="row">
            <div className="col-md-6 bg-dark-gray">
            <div className="d-flex justify-content-between p-5 shadow rounded  mt-5 mb-5">
                <div>
                    <img src={product.imageURL} className="img-fluid w-75 shadow" alt=""/>
                </div>
                <div>
                    <h3>Name: {product.name}</h3>
                    <h3>Price: {product.price}</h3><br/><br/>
                    <button className="btn btn-danger">Order</button>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default CheckOut;