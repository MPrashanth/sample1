var express= require("express");
var app = express();
console.log("my users api");

app.use("/users/", require("./users/api"));
app.use("/courses/", require("./courses/api"));

module.exports=app;