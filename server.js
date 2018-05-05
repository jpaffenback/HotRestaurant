var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 8080;

var tables = [];
var waitlist = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

app.post("/api/tables", function (req, res){
    var newTable = req.body;
    tables.push(newTable);
    res.json(newTable);
});

app.post("/api/waitlist", function(req, res){
    var newWaitlist = req.body;
    waitlist.push(newWaitlist);
    res.json(newWaitlist);
});







app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  