import React from 'react';
import './Admin.css';

const Admin = () => {
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
                        <h2>Add Product</h2>
                        <label>Product name:</label>
                        <input type="text" placeholder = "Enter your starting destination" required/>
                        <label>Price:</label>
                        <input type="text" placeholder = "" required/>
                        <label>Upload product image:</label>
                        <input type="file" placeholder = "Enter your ending destination" required/>
                    <div className="btnContainer">
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            <hr/>
          <div className="col-lg-6 mt-5 mb-5 ms-5">
          <div class="mapouter">
            <div class="google-map-canvas">
                <h2>Manage Product</h2>
            </div>
          </div>
          </div>
        </div>
    </>
    );
};

export default Admin;