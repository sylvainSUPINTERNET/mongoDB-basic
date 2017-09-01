'use strict';


let express = require('express');
let app = express();
let http = require('http').Server(app);

let bodyParser = require('body-parser');

let mongoose = require('mongoose');
let MongoClient = require("mongodb").MongoClient;


//Set up default mongoose connection
let mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);

//Get the default connection
let db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());


//DB connection - Si la base n'existe pas, elle sera automatiquement créer au moment d'une insertion dans celle-ci (Mongoose)
/*
 let db = mongoose.connect('mongodb://localhost/users', function(err) {
 if (err) { throw err; }
 });

 //ORDER : Schema (pattern) => Model (object copy pattern) => Variable perso

 //Define Schema for us APP
 let userSchema = mongoose.Schema({
 name: String
 });

 //Model
 let User = mongoose.model('User', userSchema);


 //Variables perso
 let user1 = new User({name: 'JEAN'});
 console.log(user1.name);
 db.users.insert(user1);


 */


app.get('/', function (req, res, next) {
    console.log("home page");


    res.send("my home page");
});


http.listen(8000, function () {
    console.log('mongo TRY on *:8000');
});
