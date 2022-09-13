const db = require('../models/mongooseSchemas')

const formController = {};

formController.getPerson = (req, res, next) => {
  const name = req.params.name;
    db.findOne({Name: name})
    .then(data=>{
      res.locals.character = data;
      return next();
    })
    .catch(err =>{
      return next({ log: 'Error with majestyController.getCharacter', message : {err: 'Invalid character'}})
    })
}


formController.addForm = (res, res, next) => {
  
}


formController.updateForm = (req, res, next) => {

}

formController.deleteForm = (req, res, next) => {

}


// const majestyController = {};

// majestyController.getCharacter=(req, res, next)=>{
//   const name = req.params.name;
//   db.findOne({Name: name})
//     .then(data=>{
//       res.locals.character = data;
//       return next();
//     })
//     .catch(err =>{
//       return next({ log: 'Error with majestyController.getCharacter', message : {err: 'Invalid character'}})
//     })
// }