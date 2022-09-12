const db = require('../models/majestyModels')

const majestyController = {};

majestyController.getCharacter=(req, res, next)=>{
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