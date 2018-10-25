// Core
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// Config
const config = require('../config');
// Models
const User = require('../models/user');

router.post(`${config.login.route}`, (req, res) => {
    User.find({
        email: req.body.email
    })
        .exec()
        .then((user) => {
            if (user.length > 1) {
                return res.status(401).send('Invalid email');
            } else {
                bcrypt.compare(req.body.password, user[0].password, (err, auth) => {
                    return !auth ? res.status(401).send(err) : res.status(200).send('Authentic');
                });
            }
        });
});

module.exports = router;
