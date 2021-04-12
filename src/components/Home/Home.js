import React, {useEffect, useState } from 'react';
import './Home.css';
import Product from './Product/Product';
import CircularProgress from '@material-ui/core/CircularProgress';

const Home = () => {
    const [products, setProducts] =useState([]);

    useEffect(() => {
        fetch('https://tranquil-citadel-03817.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="container-fluid background-color mb-5">
            {
                !products.length
                && <div className="d-flex justify-content-center mt-5">
                    <CircularProgress color="primary"/>
                 </div>
            }
            {
                products.length > 0 && <div className="row mx-auto justify-content-center">
                    {
                        products.map(product => <Product product = {product} key={product._id}></Product>) 
                    }
                </div>
            }
        </div>
    );
};

export default Home;