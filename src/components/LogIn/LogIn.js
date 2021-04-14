import React from 'react';
import './LogIn.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router';

const LogIn = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }else {
        firebase.app();
     }

     const history = useHistory();
     const location = useLocation();
     let { from } = location.state || { from: {pathName: '/'}}

    const handleGoogleSignIn = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    const loggedInUser = {name: user.displayName, email: user.email, img: user.photoURL};
    localStorage.setItem('user', JSON.stringify(loggedInUser));
    history.replace(from && 
      window.location.reload());
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(error)
    // ...
  });
}
const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="text-center justify-content-center">
            { user ? (
              <div>
                <h3 className="d-inline-block" >Welcome</h3>&nbsp; &nbsp;
              <h2 className="d-inline-block">{user.name}</h2>
              <p>You have logged-in... </p>
              </div>

            ) : (
              <button className = "logIn-btn" onClick = {handleGoogleSignIn}>Continue with Google</button>
            )

            }
        </div>
    );
};

export default LogIn;