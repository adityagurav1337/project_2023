var express = require("express");
const Users = require("../module/Users");
var router = express.Router();

router.put("/", (req, res) => {
    let body = req.body;
    let users = new Users.Users();
    users.name = body.name;
    users.email = body.email;
    users.mobileno = body.mobileno;
    users.password = body.password;
    users.city = body.city;
    users.age = body.age;
    users.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

router.get("/", (req, res) => {
    let users = new Users.Users();
    users.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

router.get("/id", (req, res) => {
    let users = new Users.Users();
    users.id = req.params.id
    users.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

router.post("/", (req, res) => {
    let body = req.body;
    let users = new Users.Users();
    users.id = body.id;
    users.name = body.name;
    users.email = body.email;
    users.mobileno = body.mobileno;
    users.password = body.password;
    users.city = body.city;
    users.age = body.age;
    users.update().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

router.delete("/:id", (req, res) => {
    let body = req.body;
    let users = new Users.Users();
    users.id = req.params.id
    users.delete().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

module.exports = router;