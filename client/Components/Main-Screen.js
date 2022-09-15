import React, {Component} from 'react';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
// import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import image from '../assets/images/Ardania-map.png'
import celtic from '../assets/images/Celtic Knot Pattern.png'
import List from './List'
import Update from './Update'
import Delete from "./Delete"
// import { render } from 'sass';


// probably need an input of some kind. Do we pass in the username and password
//as we load the page? No we would probably do it after
const MainScreen=()=>{

    const [intitial, postInformation] =React.useState({})

    //Now its time to figure out how to render the information in a function to be sent to the back end
    
    function postInformation(information) {
        console.log(information);
    }


    return(
        


        <div className = "MainPage" style={{backgroundImage : `url(${image})`, backroundRepeat: "no-repeat", backgroundSize: "contain",}}>
        <nav className="Main-Page-Bar">
            <div className="Page-Links" id="MainPage">
            <div className="link-div">
                <a href="./List">Other People's Forms</a>
            </div>
            <div className="link-div">
                <a>Update Form</a>
            </div>
            <div className="link-div">
                <a>Delete Forms</a>
            </div>
                </div>
            {/* Other Peoples Choices!/ */}
        </nav>
    

    <div>

        <form className = "Container border border-success" id="my-form" method="POST" action="/login" style={{backgroundImage : `url(${celtic})`, backroundRepeat: "no-repeat", backgroundSize: "contain", height: 700}}>
            <h1 className="Main-Page-Title">What Fantasy World Do You Like?</h1>
            

            <label htmlFor="Name">
            Name
            </label>
            <input className="input" id="Name" required/>
            <label htmlFor="FantasyLikes">
            FantasyLikes
            </label>
            <input className="input" id="FantasyLikes" required/>
            <label htmlFor="Password">
            Password
            </label>
            <input className="input" id="Password" type="Password" required/>
            <label htmlFor="World">
            World
            </label>
            <input className="input" id="World"/>
            <label htmlFor="Favorite Characters">Favorite Characters
            </label>
            <input className="input" id="Favorite Characters" required/>
            <label htmlFor="Alternatives"> Alternatives
            </label>
            <input className="input" id="Alternatives"/>
            <input type="Submit" onClick={()=>postInformation(document.getElementById("my-form"))} id="Post submission"/>
        </form>
    </div>
 
        </div>
        
    

    )
}

export default MainScreen;