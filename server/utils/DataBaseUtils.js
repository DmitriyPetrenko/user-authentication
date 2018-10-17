module.exports = function (app, db, callback) {
    app.get("/registration", (req, res) => {

    });

    app.post("/registration", (req, res) => {
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
