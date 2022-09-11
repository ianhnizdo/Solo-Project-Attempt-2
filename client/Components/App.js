import React from 'react';
import {Component} from "react";
import ReactDOM from "react-dom"

import {Switch, Route } from 'react-router-dom';

import '../stylesheets/styles.css';

// impor
function App() {
    //State variable which we'll call "count"
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Majesty the Fantasy Kingdom Sim!</h1>
        </div>
    )
}

export default App;