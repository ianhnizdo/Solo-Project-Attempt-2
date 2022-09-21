import React, { Component } from 'react';
import image from '../assets/images/Ardania-map.png';
import { Outlet, Link } from 'react-router-dom';
import Main from './Main-Screen';
import  List from './List'
import Delete from "./Delete"
import Navbar from './Navbar'

const Update = () => {
    return(
    <div className = "DisplayedPage" style={{backgroundImage : `url(${image})`, backroundRepeat: "no-repeat", backgroundSize: "contain", height: 1000}}>
   <Navbar />
    </div>

)
}

export default Update;