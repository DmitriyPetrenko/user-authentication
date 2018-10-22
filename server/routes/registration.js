// Core
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// Config
const config = require("../config");
// Models
const User = require("../models/user");

router.post(`${config.registration.route}`, (req, res) => {
    User.find({
        email: req.body.email
    })
        .exec()
        .then((user) => {
            if (user.length > 1) {
               return res.status(409).send("Email exists");
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).send(err);
                    } else {
                        const user = {
                            username: req.body.username,
                            email: req.body.email,
                            password: hash,
                            createdDate: req.body.createdDate
                        };

                        User.collection.insertOne(user)
                            .then(result => {
                                res.status(201).send(err);
                            })
                            .catch(err => {
                                res.status(500).send(err);
                            });
                    }
                });
            }
        });
});

module.exports = router;
