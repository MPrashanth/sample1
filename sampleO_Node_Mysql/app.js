var express= require("express");
var app = express();

var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');


console.log("app js");

var config= require("./config");
console.log(config);
var api= require("./api");





app.listen(config.port, function(error) {
    if (error) {
        console.log("error");
    } else {
        console.log("port working on"  + config.port);
    }

});

app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//middleware

app.use(function(req, res, next){
    console.log("Someone is trying to reach me");
    next();
});

// app.set("auth_key", config.auth_key);
app.use("/nani/myproject/", require("./modules/api"));