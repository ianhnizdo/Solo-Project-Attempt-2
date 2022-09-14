const form = require('../models/mongooseSchemas')

const formController = {};

formController.getPerson = (req, res, next) => {
  const {name} = req.params;

    form.findOne({Name: name})
    .then(data=>{
      console.log(data);
      res.locals.character = data;
      console.log(res.locals.character);
      return next();
    })
    .catch(err =>{
      return next({ log: 'Error with formController.getPerson', message : {err: 'Invalid character'}})
    })
}


// formController.addForm = async(res, res, next) => {
//   // const newForm = await form.create({Name: 'bob' ...})
//   // do something with newForm
// }

// formController.updateForm = (req, res, next) => {
// //password
//   const check = req.body.password;
//   // if(check ===)
// }

// // formController.deleteForm = (req, res, next) => {

// }
//npm install automatically puts in node_modules, and .git


// const majestyController = {};

// majestyController.getCharacter=(req, res, next)=>{}
//   db.findOne({Name: name})
//     .then(data=>{
//       res.locals.character = data;
//       return next();
//     })
//     .catch(err =>{
//       return next({ log: 'Error with majestyController.getCharacter', message : {err: 'Invalid character'}})
//     })
// }

module.exports = formController;