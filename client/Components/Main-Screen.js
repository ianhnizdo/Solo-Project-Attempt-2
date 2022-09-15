import React, {Component, useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';

// import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import image from '../assets/images/Ardania-map.png'
import celtic from '../assets/images/Celtic Knot Pattern.png'
import  List from './List'
import Update from './Update'
import Delete from "./Delete"
// import { render } from 'sass';


// probably need an input of some kind. Do we pass in the username and password
//as we load the page? No we would probably do it after
const MainScreen=()=>{
   
    const useInput = init => {
        const [ value, setValue ] = useState(init);
        const onChange = e => {
          setValue(e.target.value);
        };
        // return the value with the onChange function instead of setValue function
        return [ value, onChange ];
      };
    
    const [Name, nameSetOnChange] = useInput('');
    const [FantasyLikes, likeOnChange] = useInput('');
    const [Password, passwordSet] = useInput('');
    const [World, worldOnChange] = useInput('');
    const [Character, characterOnChange] = useInput('');
    const [Alternatives, alternativeOnChange] = useInput('');


    //Now its time to figure out how to render the information in a function to be sent to the back end
    
    function createInformation() {
        // const body = {};
        // const arr = ['Name', 'Like', 'Password','World','Favorite Characters', 'Alternatives']
        
        // for(const [key,val] of arr.entries()){
        //     // console.log(val);
        //     body[val]=information[key].value
        // }
        // console.log(information);
        const body = {
            Name,
            FantasyLikes,
            Password,
            World,
            Character,
            Alternatives
        }

        fetch('/api/form', {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify(body)
          })
            .then(resp => resp.json())
            .then((data) => {
              console.log(data);
            })
            // .then(() => {
            //   props.history.push('/');
            // })
            .catch(err => console.log('CreateCharacter fetch /api/form: ERROR: ', err));
        }


        // console.log(body);
        
    
// action="/form" method="POST"

    return(
        


        <div className = "MainPage" style={{backgroundImage : `url(${image})`, backroundRepeat: "no-repeat", backgroundSize: "contain",}}>
        

        <nav className="Main-Page-Bar">
            <div className="Page-Links" id="MainPage">
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
        
    
{/* action="/form" method="POST" */}

    <div>

        <form className = "Container border border-success" id="my-form" style={{backgroundImage : `url(${celtic})`, backroundRepeat: "no-repeat", backgroundSize: "contain", height: 700}}>
            <h1 className="Main-Page-Title">What Fantasy World Do You Like?</h1>
            

            <label htmlFor="Name">
            Name
            </label>
            <input className="input" value={Name} onChange={nameSetOnChange} id="Name" required/>
            <label htmlFor="FantasyLikes">
            Do you like Fantasy Worlds?
            </label>
            <input className="input" value={FantasyLikes} onChange={likeOnChange} id="FantasyLikes" required/>
            <label htmlFor="Password">
            Password
            </label>
            <input className="input" id="Password" value={Password} onChange={passwordSet} type="Password" required/>
            <label htmlFor="World">
            World
            </label>
            <input className="input" value={World} onChange={worldOnChange} id="World"/>
            <label htmlFor="Favorite Characters">Favorite Characters
            </label>
            <input className="input" value={Character} onChange={characterOnChange} id="Favorite Characters" required/>
            <label htmlFor="Alternatives"> Alternatives
            </label>
            <input className="input" value={Alternatives} onChange={alternativeOnChange} id="Alternatives"/>
            <input type="Submit" onClick={()=>createInformation()} id="Post submission"/>
        </form>
        </div>
        {/* You do need an Outlet here */}
        <Outlet />
        </div>
        
    

    )
}

export default MainScreen;