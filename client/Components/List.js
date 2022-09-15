import React, { Component } from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import image from '../assets/images/Ardania-map.png';
import { Outlet, Link } from 'react-router-dom';
import Main from './Main-Screen';
import Update from './Update'
import Delete from "./Delete"
import Navbar from './Navbar'

const List = () => {
    return(
        <div className = "DisplayedPage" style={{backgroundImage : `url(${image})`, backroundRepeat: "no-repeat", backgroundSize: "contain",}}>
            <Navbar />
         </div>

)
}

export default List;