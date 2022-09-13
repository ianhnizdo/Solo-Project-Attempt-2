const express = require('express');

//This grabs the router module that we installed
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
router.get('/login', formController.getPerson, (req,res)=>{
    return res.status(200).json(res.locals.form);
})

//Post to put in a hero and monster
//Bring up a stats screen which would (hero/monster)
//upload to database
router.post('/form', formController.addForm, (req, res) => {

})

// put request
router.put('/update', formController.updateForm, (req, res) => {

})

// delete request
router.delete('/deleteForm', formController.deleteForm, (req,res) => {
    
})

//delete a monster or hero

module.exports = router;

