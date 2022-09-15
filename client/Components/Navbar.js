import React, { Component } from 'react';
import image from '../assets/images/Ardania-map.png';
import { Outlet, Link } from 'react-router-dom';
import Main from './Main-Screen';
import  List from './List'
import Delete from "./Delete"
import Update from './Update'
//git checkout main, git checkout -b react-router-test

const navBar=()=>{
    
    return(
    // <div className = "DisplayedPage" style={{backgroundImage : `url(${image})`, backroundRepeat: "no-repeat", backgroundSize: "contain",}}>
        <nav className="Nav-Bar">
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
            </div>
                </div>
        <Outlet />
        </nav>
    // </div>
    )
}

export default navBar;