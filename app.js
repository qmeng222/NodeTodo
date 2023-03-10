var express = require("express");
var app = express();
var mongoose = require("mongoose");
var config = require("./config");
var setupController = require("./controllers/setupController");
var apiController = require("./controllers/apiController");

// The environment variable PORT typically exists when the application is deployed to a hosting service, such as Heroku or AWS Elastic Beanstalk. These services set the PORT environment variable to the value that the application should listen on:
var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

app.listen(port);
