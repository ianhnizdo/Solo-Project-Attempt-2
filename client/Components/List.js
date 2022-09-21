import React, { Component } from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import image from '../assets/images/Ardania-map.png';
import celtic from '../assets/images/Celtic Knot Pattern.png'
import { Outlet, Link } from 'react-router-dom';
import Main from './Main-Screen';
import Update from './Update'
import Delete from "./Delete"
import Navbar from './Navbar'

const List = () => {

    //mongodb fetch request
    // function peopleForms{
    //     fetch(/api/get){
    //         method: 'GET',

    //     }

    
    return(
        <div className = "DisplayedPage" style={{backgroundImage : `url(${image})`, backroundRepeat: "no-repeat", backgroundSize: "contain", height: 1000}}>
            <Navbar />
            <div>
        <secton className = "Container border border-success" style={{backgroundImage : `url(${celtic})`, backroundRepeat: "no-repeat", backgroundSize: "contain", height: 500}}>
            <h1 className="Othersinformation">Peoples Choices</h1>
            <div className="display">

            </div>
        </secton>
            </div>
    </div>

)

}

export default List;