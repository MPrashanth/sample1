
//mysql Connect

// var api= require("./modules/batch/api");
var api= require("./modules/courses/api");
var express= require("express");

var app = express();

// var api= require("./modules/students/api");

console.log("connection");

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database :  'nani'
  });

  connection.connect(function(error) {
    if (error) {
      console.log(error);
      return;
    }
  
    console.log('database connection created');
  });

  //Create DB

app.get('/createdb', (req, res)=>{
  let sql = 'create DB for mysql';
  connection.query(sql, (err, result)=>{
      if (err) throw err;
      console.log(result);
      res.send('Database Created');
  })
  });
  module.exports = connection;



 
//End mysql Connect

