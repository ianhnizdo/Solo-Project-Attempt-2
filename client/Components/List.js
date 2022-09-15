import React, { Component } from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import image from '../assets/images/Ardania-map.png';
import { Outlet, Link } from 'react-router-dom';
import Main from './Main-Screen';
import Update from './Update'
import Delete from "./Delete"

const List = () => {
    return(
    <div className = "MainPage" style={{backgroundImage : `url(${image})`, backroundRepeat: "no-repeat", backgroundSize: "contain",}}>
    <nav className="Main-Page-Bar">
        <div className="Page-Links" id="MainPage">
        <div className="link-div">
        <Link to="Main" element={<Main />}>Main Page</Link>
        </div>
        <div className="link-div">
        <Link to="Update" element={<Update />} >Update Forms</Link>
        </div>
        <div className="link-div">
        <Link to="Delete" element={<Delete />}>Delete Forms</Link>
        </div>
        </div>
    </nav>

        <Outlet />
    </div>

)
}

export default List;