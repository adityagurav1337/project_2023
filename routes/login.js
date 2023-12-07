var express = require("express");
var router = express.Router();

router.put("/", (req, res) => {
    let body = req.body;    
    let login = new Users.Users();
    login.name = body.name;
    login.email = body.email;
    login.mobileno = body.mobileno;
    login.password = body.password;
    login.city = body.city;
    login.age = body.age;
    login.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

 router.get("/", (req, res) => {
    let login = new Users.Users();
    login.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

 router.get("/id", (req, res) => {
    let login = new Users.Users();
    login.id = req.params.id
    login.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

 router.post("/", (req, res) => {
    let body = req.body;
    let login = new Users.Users();
    login.id = body.id;
    login.name = body.name;
    login.email = body.email;
    login.mobileno = body.mobileno;
    login.password = body.password;
    login.city = body.city;
    login.age = body.age;
    login.update().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

router.delete("/:id", (req, res) => {
    let body = req.body;
    let login = new Users.Users();
    login.id = req.params.id
    login.delete().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

module.exports = router;