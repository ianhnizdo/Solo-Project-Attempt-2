const express = require('express');
const mongoose = require('mongoose');

//This grabs the router module that we installed
const uri = "mongodb://localhost:8080/"
const router = express.Router();

//import characterController
const formController = require('../controllers/formController');

// get request
//We need /:name
//saved in req.params.name
// router.get('/:name', majestyController, (req,res)=>{
//     return res.status(200).json(res.locals.character);
// })


//http:google.com/?name=ian&type=hero
//question mark is query, type is hero

//Two inputs to get hero or monster



// post request
//This should be below the '/signup'?
// router.get('/login', formController.getPerson, (req,res)=>{
//     return res.status(200).json(res.locals.form);
// })

router.get('/find/:name', formController.getPerson, (req,res)=>{
    return res.status(200).json('test successful');
    //res.locals.character
})



//Post to put in a hero and monster
//Bring up a stats screen which would (hero/monster)
//upload to database
// router.post('/form', formController.addForm, (req, res) => {
//     return res.status(200).send('Form Uploaded');
// })

// // put request
// router.put('/update', formController.updateForm, (req, res) => {
//     return res.status(200).send('Form Updated');
// })

// // delete request
// router.delete('/deleteForm', formController.deleteForm, (req,res) => {

// })

//delete a monster or hero

module.exports = router;

