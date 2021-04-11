import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from './Product/Product';

const Home = () => {
    const [products, setProducts] =useState([]);

    useEffect(() => {
        fetch('http://localhost:5050/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className= "row">
            {
               products.map(product => <Product product = {product} key={product._id}></Product>) 
            }
        </div>
    );
};

export default Home;