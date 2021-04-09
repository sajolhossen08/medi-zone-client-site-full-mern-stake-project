import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    
    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark ">
            <div className="container-fluid container">
                <Link className="navbar-brand" to="/home"><h1>Medi Zone</h1></Link>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item home-link">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/order">Order</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/checkout">Check Out</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/login">Log In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;