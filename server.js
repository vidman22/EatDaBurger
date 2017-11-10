var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


var port = process.env.PORT || 8000;

var app = express();

 // Static content
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({extended: false}));


// Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/burger_controllers.js");

app.use("/", routes);

app.listen(port, function() {
	console.log("listening on port: " + port);
});