const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uri = require('../../secrets');
// if (process.argv.length < 3) {
//   console.log('Please provide the password as an argument: node mongo.js <password>')
//   process.exit(1)
// }

const MONGO_URI = uri.MONGO_URI;
console.log('this is the mongoURI',MONGO_URI);
// API_KEY yhlq2UiFy3MU5zWq1NhYvk6Db5ftMX8RetIqSxqLOyFjnZbDuzgwyKPx8vY0ZnNo

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'FantasyWorldForms',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

//new object will have all these properties


const peoplesForms = new Schema({
  Name: {type: String, required: true},
  FantasyLikes: {type: String, required: true},
  Password: {type: String, required: true},
  World: {type: String, required: this.FantasyLikes},
  Characters: {type: String, required: this.FantasyLikes},
  Alternatives: {type: String, required: !this.FantasyLikes},
});


//We have schema now I need to access ones in the database, post, update, delete.

// const character = mongoose.model('character', characterSchema);

const form = mongoose.model('peoplesworlds', peoplesForms);

//This is mongo export, sql uses the query feature.
// module.exports = character;
// {character, form}

module.exports = form;
  //hero schema
  //new mongoose.Schema would also work too
  // const characterSchema = new Schema({
  //     Name: {type: String, required: true},
  //     Type: {type: String, required: true},
  //     Dodge: {type: String, required: true},
  //     Parry: {type : String, required: true},
  //     Magic_Resistance: {type : String, required: true},
  //     //Just something I discovered, you can't write in numbers when dealing with
  //     Experience: {type: String, required: this.Type==='Hero', default: 1000},
  //     Intelligence: String,
  //     Strength: String,
  //     // Armor: {type : Number, require: this.Type==='Hero'},
  //     // Artiface: Number,
  //     // Loyalty: Number,
  //     // Luck: Number,
  //     // Vitality: Number,
  // })