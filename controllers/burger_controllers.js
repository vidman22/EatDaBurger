var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect("/burgers");
});


router.get("/burgers", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});


router.post("/burgers/create", function(req, res) {
	burger.insertOne(['burger_name', 'devoured'], [req.body.burgerName, req.body.devoured], function(result) {

			res.redirect("/burgers");
		});
	});

router.put('/index/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	burger.update({'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/burgers');
	});
});

module.exports = router;