const config = require("../config");

module.exports = function (app, db, callback) {
    app.get(`${config.route}/:field`, (req, res) => {
        const field = req.params.field;
        const fieldKey = /^[a-zA-Z0-9_.-]+@\w+\.[a-zA-Z]{2,}$/.exec(field) ? "email" : "username";
        const details = {[fieldKey]: field };

        db.collection("list").findOne(details, (err, result) => {
            err ? res.send({ "error": err }) : res.send(result[fieldKey]);
        });

        callback();
    });

    app.post(`${config.route}`, (req, res) => {
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            registered: req.body.registered
        };

        db.collection("list").insertOne(user, (err, result) => {
            err ? res.send({ "error": err }) : res.send(result.ops[0]);
        });

        callback();
    });
};
