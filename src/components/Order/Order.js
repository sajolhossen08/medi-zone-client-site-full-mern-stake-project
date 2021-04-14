import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import './Order.css'

const Order = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const user = JSON.parse(localStorage.getItem('user'));
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        const orderedProductData = {
            userName: data.userName,
            email:data.userEmail,
            productName: data.productName,
            price: data.price,
            amount: data.productAmount,
            location: data.location
        };

        const url = `https://tranquil-citadel-03817.herokuapp.com/orderedProduct`;
        console.log(orderedProductData)
        fetch(url, {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(orderedProductData)
        })
        .then(res => {
            console.log('server side response', res)
            alert('Order Placed');
            history.replace('/')
        })
    };

    useEffect(() =>  {
        fetch(`https://tranquil-citadel-03817.herokuapp.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data[0])
        })
    }, []);

    return (
        <div>
            <h1 className="text-center justify-content-center border-bottom">Place Order</h1>
            <div className="search-field m-5">
                <div className="searchContainer">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>User name:</label>
                        <input defaultValue={user.name} {...register("userName")} required/>
                        <label>Email:</label>
                        <input defaultValue={user.email} {...register("userEmail")} required/>
                        <label>Product name:</label>
                        <input defaultValue={product.name} {...register("productName")} required/>
                        <label>Price:</label>
                        <input defaultValue={product.price} {...register("price")} required/>
                        <label>Product amount:</label>
                        <input {...register("productAmount")} required/>
                        <label>Location:</label>
                        <input {...register("location")} required/>
                        <input className="mt-4"   type="submit"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;