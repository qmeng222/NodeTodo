var express = require("express");
var app = express();

// The environment variable PORT typically exists when the application is deployed to a hosting service, such as Heroku or AWS Elastic Beanstalk. These services set the PORT environment variable to the value that the application should listen on:
var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.listen(port);
