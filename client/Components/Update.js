import React, { Component } from 'react';
import image from '../assets/images/Ardania-map.png';
import { Outlet, Link } from 'react-router-dom';
import Main from './Main-Screen';
import  List from './List'

import Delete from "./Delete"

const Update = () => {
    return(
    <div className = "MainPage" style={{backgroundImage : `url(${image})`, backroundRepeat: "no-repeat", backgroundSize: "contain",}}>
    <nav className="Main-Page-Bar">
        <div className="Page-Links" id="MainPage">
        <div className="link-div">
        <Link to="/main" element={<Main />}>Main Page</Link>
        </div>
        <div className="link-div">
        <Link to="/list" element={<List />}>Fetch Form</Link>
        </div>
        <div className="link-div">
        <Link to="/delete" element={<Delete />}>Delete</Link>
        </div>
        <div className="link-div">
            <a>Log Out</a>
        </div>
        </div>
    </nav>
        <Outlet />
    </div>

)
}

export default Update;