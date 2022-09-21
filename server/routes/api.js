const express = require('express');
const mongoose = require('mongoose');


//This grabs the router module that we installed
const uri = "mongodb://localhost:8080/"

const router = express.Router();

//import characterController
const formController = require('../controllers/formController');

// router.get('/', formController.getForms, (req,res)=>{
//     return res.status(200).json(res.locals.characters);
// })


// get request
//We need /:name
//saved in req.params.name
// router.get('/:name', majestyController, (req,res)=>{
//     return res.status(200).json(res.locals.character);
// })


//http:google.com/?name=ian&type=hero
//question mark is query, type is hero

//Do I need a get request?
// router.get('/form', function(req,res) {

// })

//Post to put in a hero and monster
//Bring up a stats screen which would (hero/monster)
//upload to database
router.post('/form', formController.postForm, (req, res) => {
    return res.status(200).send('Form Uploaded');
})






module.exports = router;

