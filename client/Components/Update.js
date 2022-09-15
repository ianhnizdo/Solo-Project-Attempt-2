import React, { Component } from 'react';

const Update = () => {
    return(
    <div className = "MainPage" style={{backgroundImage : `url(${image})`, backroundRepeat: "no-repeat", backgroundSize: "contain",}}>
    <nav className="Main-Page-Bar">
        <div className="Page-Links" id="MainPage">
        <div className="link-div">
        <a onClick={console.log("this should go to other peoples forms")}>Other Peoples Choices!</a>
        </div>
        <div className="link-div">
        <a onClick={console.log("this should give you the chance to update your form")}>Update Form</a>
        </div>
        <div className="link-div">
        <a >Delete Form</a>
        </div>
        <div className="link-div">
            <a>Log Out</a>
        </div>
        </div>
    </nav>

    </div>

)
}

export default Update;