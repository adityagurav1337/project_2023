var express = require("express");
var bodyparser = require("body-parser");

var app = express();
app.use(bodyparser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyparser.json());
app.use(express.static("assets"));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
        return res.status(200).json({})
    }
    return next();
});

app.get("/", (req, res) => {
    res.end("welcome to 2023 Back End")
});

app.use("/users", require("./routes/users"));
app.use("/login", require("./routes/login"));




app.listen(8081, () => {
    console.log("API Poject is running on http://localhost:8081/");
})