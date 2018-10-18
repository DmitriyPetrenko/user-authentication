// Core
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
// Config
const config = require("./config");
const registrationRoutes = require("./routes/registration");

// Set up connection of database
const url = `mongodb://${config.db.user}:${config.db.password}.@ds135413.mlab.com:35413/${config.db.name}`;
mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

app.use(morgan("dev"));
// Using bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST, GET");
        return res.status(200).json({});
    }

    next();
});

// Routes which should handle requests
app.use("/", registrationRoutes);

app.use((req, res, next) => {
    const error = new Error("Not found");

    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

// listen on port 8080
app.listen(config.serverPort, () => {
    console.log(`"We are live on ${config.serverPort}`);
});
