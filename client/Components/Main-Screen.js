import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

// probably need an input of some kind. Do we pass in the username and password
//as we load the page? No we would probably do it after
const MainScreen=()=>{

    //

    return(
        <div className = "MainPage">
        <nav className="Main-Page-Bar">
            <div className="Page-Links" id="MainPage">
            <div className="link-div">
            <a onClick={console.log("this should go to other peoples forms")}>Other Peoples Choices!</a>
            </div>
            <div className="link-div">
            <a onClick={console.log("this should give you the chance to update your form")}>Update Form</a>
            </div>
            <div className="link-div">
            <a onClick={console.log("this should give you the chance to delete your form")}>Delete Form</a>
            </div>
            </div>
        </nav>

        <form className = "Container border border-success" method="POST" action="/login">
            <h1 className="Main-Page-Title">What Fantasy World Do You Like?</h1>
            
            <label for="Name">
            Name
            </label>
            <input id="Name" required/>
            <label for="FantasyLikes">
            FantasyLikes
            </label>
            <input id="FantasyLikes" required/>
            <label for="Password">
            Password
            </label>
            <input id="Password" type="Password" required/>
            <label for="World">
            World
            </label>
            <input id="World"/>
            <label for="Favorite Characters">Favorite Characters
            </label>
            <input id="Favorite Characters" required/>
            <label for="Alternatives"> Alternatives
            </label>
            <input id="Alternatives"/>
            <input type="Submit" onClick={"this should send in your submission"} id="Post submission"/>
        </form>
 
        </div>

    )
}

export default MainScreen;