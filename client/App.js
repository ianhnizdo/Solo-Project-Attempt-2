
import React, {Component} from "react";
import Login from "./Components/Login"
import MainScreen from "./Components/Main-Screen"
import {Switch, Route } from 'react-router-dom';

import './stylesheets/styles.css';

// // impor
// function App() {
//     //State variable which we'll call "count"
//     const [count, setCount] = useState(0)

//     return (
//         <div>
//             <h1>Majesty the Fantasy Kingdom Sim!</h1>
//             <p>Its not working</p>
//         </div>
//     )
// }
class App extends Component {
    render(){
        return(
            <div>
                {/* <h1 className="Test-Header">Hello World</h1> */}
                {/* <Login className="Login-Page"/> */}
                    <MainScreen className="Fantasy-Form" />
                </div>
        )
    }
}

export default App;