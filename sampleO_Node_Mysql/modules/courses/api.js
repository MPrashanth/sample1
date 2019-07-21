var express= require("express");
var router= express();
var jwt = require('jsonwebtoken');
var con=require("./../../connection");
var config= require("./../../config");

var coursemodel= require("./model");
router.post("/addcourse/", function(req,res){
    
        console.log(req.body);

        var id=req.body.id;
        var status=req.body.status;
        var username=req.body.username;
        var password= req.body.password;
        var type= req.body.type;
        var token=req.body.token;
        var useen=req.body.usee;

        var myObject = {
                        id       : id,
                        status   : status,
                        username :username,
                        password : password,
                        type     : type
                        }

        var data=jwt.verify(token,'prashanth');
        if(useen==data.username){
            console.log("success");      
         var query = con.query('INSERT INTO courses SET ?', myObject , 
        function (error, results, fields) {
        if (error) {                  
            console.log(error);
            //  res.send(error);
            }
         else{
        console.log("courses Success");//  For checking success or not in Gitbash
        res.send("courses success");// For checking success or not in Postman
                }
         });
 }else{
     console.log("some thing worng");
        }
     console.log("coursedata is working");
});


// View

router.get("/viewcourse", function(req,res){
    
 
       
       // var inputs = JSON.parse(req.query.data);
        var token = req.get('token');
      // console.log(inputs.token);
      console.log(token);
     //var data=jwt.verify(inputs.token,'prashanth');
     var data=jwt.verify(token,'prashanth');
    // token verification
    var username = req.get('username');
    if(username==data.username){
  // if(inputs.username==data.username){
    var columns = ['status', 'username','password', 'type' ];
var query = con.query('SELECT ?? FROM ??', 
[columns, 'courses'], function (error, results, fields) {
  if (error) {throw error;}
  else{
      console.log(results);
    res.send(results);
  }

});
} 
// end token verification
else{
   // res.send("Not authorised submit");  
   res.send(401);
}


});


module.exports = router;
