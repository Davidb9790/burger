var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var router = express.Router();

//import the burger.js file
var burger = require('../models/burger');


var router = function(routes){
router.get('/', function(req, res){
	res.redirect('/index')
});
},






//code from class assignment for template
// router.get('/', function (req, res) {
// 	res.redirect('/index');
// });

// router.get('/cats', function (req, res) {
// 	cat.all(function (data) {
// 		var hbsObject = { cats: data };
// 		console.log(hbsObject);
// 		res.render('index', hbsObject);
// 	});
// });

// router.post('/cats/create', function (req, res) {
// 	cat.create(['name', 'sleepy'], [req.body.name, req.body.sleepy], function () {
// 		res.redirect('/cats');
// 	});
// });

// router.put('/cats/update/:id', function (req, res) {
// 	var condition = 'id = ' + req.params.id;

// 	console.log('condition', condition);

// 	cat.update({ sleepy: req.body.sleepy }, condition, function () {
// 		res.redirect('/cats');
// 	});
// });

module.exports = router;