import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

// probably need an input of some kind. Do we pass in the username and password
//as we load the page? No we would probably do it after
const Login=()=>{


    return(
        <div className = "LoginPage">
        
        <form className = "Login-Container" method="POST" action="/login">
        <h1 className ="Login-Title">Weather Station Connect</h1>

            <label htmlFor="usernameLogin" >Enter username
            </label>
                <input type="text" id="usernameLogin" size="50" required/>
            <label htmlFor="passwordLogin"> Enter Password
            </label>
                <input type="password" id="passwordLogin" size="50" required/>
            <button type="submit" className="btn btn-secondary">Submit</button>
        </form>
 
        </div>

    )
}

export default Login;