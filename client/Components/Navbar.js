import React, { Component } from 'react';
import image from '../assets/images/Ardania-map.png';
import { Outlet, Link } from 'react-router-dom';
import Main from './Main-Screen';
import  List from './List'
//git checkout main, git checkout -b react-router-test
import Delete from "./Delete"

const navBar=()=>{
    
    return(

        <div className = "MainPage" style={{backgroundImage : `url(${image})`, backroundRepeat: "no-repeat", backgroundSize: "contain",}}>
        

        <nav className="Main-Page-Bar">
            <div className="Page-Links" id="MainPage">
            <div className="link-div">
                <Link to="Main" element={<Main />}>Main Page</Link>
            </div>
            <div className="link-div">
                <Link to="List" element={<List />}>Fetch Form</Link>
                {/* <a href="./List" onClick={List}>Other People's Forms</a> */}
            </div>
            <div className="link-div">
            <Link to="Update" element={<Update />} >Update Forms</Link>
                {/* <a>Update Form</a> */}
            </div>
            <div className="link-div">
            <Link to="Delete" element={<Delete />}>Delete Forms</Link>

                {/* <a>Delete Forms</a> */}
            </div>
                </div>
            {/* Other Peoples Choices!/ */}
        </nav>
        <Outlet />
        </div>
    )
}

export default navBar;