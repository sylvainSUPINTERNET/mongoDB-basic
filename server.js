'use strict';


let express = require('express');
let app = express();
let http = require('http').Server(app);

let bodyParser = require('body-parser');


let mongoClient = require('mongodb').MongoClient;

let url = 'mongodb://localhost/users';


app.get('/', function (req, res, next) {
    console.log("home page");

// Connexion au serveur avec la méthode connect
    mongoClient.connect(url, function (err, db) {
        if (err) {
            return console.error('Connection failed', err);
        }
        console.log('Connection successful on ', url);


        let collection = db.collection('users'); //creer la colleciton dans la table //show collections or show tables

        //Pour afficher toute la collection db.users.find() dans le powershell

        // Nous allons travailler ici ...

        // Création de deux objets users
        let user1 = {firstName: 'Foo', lastName: 'Fighters'};
        let user2 = {firstName: 'Bob', lastName: 'Dylan'};

// Enregistrement de plusieurs objets en db avec insertMany
        collection.insertMany([user1, user2], function (err, result) {
            if (err) {
                console.error('Insert failed', err);
            } else {
                console.log('Insert successful', result);
            }

            db.close()
        });

        // Fermeture de la connexion


        db.close()
    });

    res.send("my home page");
});


http.listen(8000, function () {
    console.log('mongo TRY on *:8000');
});
