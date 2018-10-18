// Core
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const cors = require("cors");
// Config
const config = require("./config");

const app = express();

// Using bodyParser middleware
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// Set up connection of database
const url = `mongodb://${config.db.user}:${config.db.password}.@ds135413.mlab.com:35413/${config.db.name}`;

MongoClient.connect(url, { useNewUrlParser: true }, (err, database) => {
    if (err) return console.log(err);

    require('./utils/DataBaseUtils')(app, database.db(), () => database.close());

    app.listen(config.serverPort, () => {
        console.log("We are live on " + config.serverPort);
    });
});

// Allow requests from any origin
app.use(cors({ origin: '*' }));
