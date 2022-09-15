import React, { Component } from 'react';
import { Routes ,Route } from 'react-router-dom';
import image from '../assets/images/Ardania-map.png';
import { Outlet, Link } from 'react-router-dom';
import Main from './Main-Screen';
import Update from './Update'
// import Delete from "./Delete"
import List from './List'
import navBar from './Navbar'


const Delete = () => {
    return(
        <div className = "MainPage" style={{backgroundImage : `url(${image})`, backroundRepeat: "no-repeat", backgroundSize: "contain",}}>
        

        <nav className="Main-Page-Bar">
            <div className="Page-Links" id="MainPage">
            <div className="link-div">
                <Link to="/main" element={<Main />}>Main Page</Link>
            </div>
            <div className="link-div">
                <Link to="/list" element={<List />}>Fetch Form</Link>
                {/* <a href="./List" onClick={List}>Other People's Forms</a> */}
            </div>
            <div className="link-div">
            <Link to="/update" element={<Update />} >Update Forms</Link>
                {/* <a>Update Form</a> */}
            </div>
            <div className="link-div">
            <Link to="/delete" element={<Delete />}>Delete Forms</Link>

                {/* <a>Delete Forms</a> */}
            </div>
                </div>
            {/* Other Peoples Choices!/ */}
        </nav>
        <Outlet />
        </div>
    )
}

export default Delete;