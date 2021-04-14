import React from 'react';
import { Link, useHistory } from "react-router-dom";
import './Header.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../LogIn/firebaseConfig';

const Header = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }else {
        firebase.app();
     }

    const user = JSON.parse(localStorage.getItem('user'));
    const history = useHistory();

    const handleSignOut = ()=>{
        window.localStorage.clear();
        firebase.auth().signOut();
        alert('You are logging out!')
        history.replace("/")
        };
  

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
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item home-link">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/order">Order</Link>
                        </li>
                        <li className="nav-item">
                           {user ? (
                               <a className="nav-link" href="/home" onClick ={handleSignOut}>{user.name}</a>
                           ) : (
                            <a className="nav-link" href="/login">Log In</a>
                           )

                           }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;