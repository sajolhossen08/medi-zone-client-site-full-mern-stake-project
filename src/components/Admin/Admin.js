import React, { useEffect, useState } from 'react';
import './Admin.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import ManageProductList from './ManageProductList/ManageProductList';
import { useHistory } from 'react-router';


const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    console.log(imageURL);
    const history = useHistory();

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };
        const url = `https://tranquil-citadel-03817.herokuapp.com/addProduct`;
        console.log(productData)

        fetch(url, {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => {
            console.log('server side response', res)
            alert('Product added');
            history.replace('/')
        })
    };

    const handleImageUpload = pd =>{
        console.log(pd.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'e6f6983091fd9d97a7c1916ca09205e9');
        imageData.append('image', pd.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
          setIMageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    const [products, setProducts] =useState([]);

    useEffect(() => {
        fetch('https://tranquil-citadel-03817.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])


    return (
        <>
            <div className="text-center">
            <h1>Admin Panel</h1>
            <p>You can add and manage your product</p>
            <hr/>
            </div>
            <div className= "container d-lg-flex">
                <div className="search-field col-lg-6">
                    <div className="searchContainer">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Add Product</h2>
                            <label>Product name:</label>
                            <input {...register("name")} required/>
                            <label>Price:</label>
                            <input {...register("price")} required/>
                            <label>Upload product image:</label>
                            <input type="file" required onChange={handleImageUpload}/>
                            <input className="mt-4"   type="submit"/>
                        </form>
                    </div>
                </div>
            <hr/>
          <div className="col-lg-6 mt-5 mb-5 ms-5 text-center">
          <div>
            <div>
                <h2>Manage Product</h2>
                
                <h1>Total Products: {products.length} <small><i>items</i></small></h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <ManageProductList product = {product} key= {product._id}></ManageProductList>)
                        }
                    </tbody>
                </table>
            </div>
          </div>
          </div>
        </div>
    </>
    );
};

export default Admin;