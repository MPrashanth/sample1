var express= require("express");
var app = express();
var jwt = require('jsonwebtoken');


var con=require("./../../connection");
console.log("my users");
var config= require("./../../config");

app.post("/login", function(req, res){
    console.log("succesfully log in");
    var username= req.body.username;
    var password= req.body.password;

    var details= {
        username: req.body.username,
        password: req.body.password
    }
    app.set("auth_key", config.auth_key);

    con.query('SELECT * FROM `user` WHERE `username` = "'+username+'" and password="'+password+'"', 
    function (error, results, fields) {
        console.log("results",results);
        console.log("AUTH_Key", app.get("auth_key"));
        // console.log(error);
        // console.log(fields);
        if(results.length==1){
            var token= jwt.sign(details, app.get("auth_key"));
            console.log(token);
            res.json({
                message: "Successfully logged in",
                success: true,
                token: token
            });
        }else {
            res.json({
                message: "Invalid Login Details",
                success: false,
                token: null
            });
        }
       
      });
});



module.exports=app;