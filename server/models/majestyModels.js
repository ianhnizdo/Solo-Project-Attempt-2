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
    Dodge: {type: Number, require: true},
    Parry: {type : Number, require: true},
    Magic_Resistance: {type : Number, require: true},
    Experience: {type: Number, require: this.Type==='Hero'},
    Intelligence: Number,
    Strength: Number,
    // Armor: {type : Number, require: this.Type==='Hero'},
    // Artiface: Number,
    // Loyalty: Number,
    // Luck: Number,
    // Vitality: Number,
})

//We have schema now I need to access ones in the database, post, update, delete.

const character = mongoose.model('character', characterSchema);


//This is mongo export, sql uses the query feature.
module.exports = character;