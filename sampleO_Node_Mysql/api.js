


var express= require("express");
var router= express.Router();
// router.use("/batch", require("./modules/batch/api"));
router.use("/courses", require("./modules/courses/api"));

// router.use("/students", require("./modules/students/api"));

module.exports = router;


console.log("api js");

var mysql_connection= require("./connection");
