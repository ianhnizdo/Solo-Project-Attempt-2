const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI = "mongodb+srv://ianhnizdo:<password>@cluster0.rnqkszc.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'SoloProjectMajesty',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

//new object will have all these properties

//hero schema
//new mongoose.Schema would also work too
const characterSchema = new Schema({
    Name: {type: String, require: true},
    Type: {type: String, require: true},
    Dodge: {type: String, require: true},
    Parry: {type : String, require: true},
    Magic_Resistance: {type : String, require: true},
    //Just something I discovered, you can't write in numbers when dealing with
    Experience: {type: String, require: this.Type==='Hero', default: 1000},
    Intelligence: String,
    Strength: String,
    // Armor: {type : Number, require: this.Type==='Hero'},
    // Artiface: Number,
    // Loyalty: Number,
    // Luck: Number,
    // Vitality: Number,
})

const peoplesForms = new Schema({
  Name: {type: String, require: true},
  FantasyLikes: {type: String, require: true},
  Password: {type: String, require: true},
  World: {type: String, require: this.FantasyLikes},
  Characters: {type: String, require: this.FantasyLikes},
  Alternatives: {type: String, require: !this.FantasyLikes},
});


//We have schema now I need to access ones in the database, post, update, delete.

const character = mongoose.model('character', characterSchema);

const form = mongoose.model('form', peoplesForms);

//This is mongo export, sql uses the query feature.
module.exports = character;

module.exports = form;