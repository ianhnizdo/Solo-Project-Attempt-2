import React from 'react';
import ReactDOM, { render } from "react-dom/client"
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import App from './App'
import List from './Components/Delete'
import Delete from './Components/Delete'
import Update from './Components/Update'
import "./stylesheets/styles.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />}/>
    <Route path='list' element={<List />}/>
    <Route path='update' element={<Update />}/>
    <Route path='delete' element={<Delete />}/>
    </Routes>
    </BrowserRouter>
);
    

