import React from 'react';
import './Login.css';
import {loginUrl} from './spotify';
function Login(props) {
    return (
        <div className="login">
            <h1>I am login page</h1>
            <img src="http://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
             alt=""/>
            {/* Spotify logo */}
            {/* Login with Spotify button */}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;