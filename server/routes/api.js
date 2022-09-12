const express = require('express');

//This grabs the router module that we installed
const router = express.Router();

//import characterController
const majestyController = require('../controllers/majestyController');

// get request
//We need /:name
//saved in req.params.name
router.get('/:name', majestyController, (req,res)=>{
    return res.status(200).json(res.locals.character);
})


//http:google.com/?name=ian&type=hero
//question mark is query, type is hero

//Two inputs to get hero or monster


router.get('/')

// post request


//Post to put in a hero and monster
//Bring up a stats screen which would (hero/monster)
//upload to database

// put request

//Modify a monster or hero

// delete request

//delete a monster or hero

module.exports = router;

