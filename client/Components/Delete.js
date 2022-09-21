import React, { Component } from 'react';
import { Routes ,Route } from 'react-router-dom';
import image from '../assets/images/Ardania-map.png';
import { Outlet, Link } from 'react-router-dom';
import Main from './Main-Screen';
import Update from './Update'
// import Delete from "./Delete"
import List from './List'
import Navbar from './Navbar'


const Delete = () => {
    return(
        <div className = "DisplayedPage" style={{backgroundImage : `url(${image})`, backroundRepeat: "no-repeat", backgroundSize: "contain", height:1000}}>
            <Navbar />
        </div>
    )
}

export default Delete;