var express = require('express');
var mysql = require('mysql');
var app = express();


var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'bermudez',
	database: 'burgers_db',
});
connection.connect(function(err){
	if (err){
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;

var PORT= 3000;
app.listen(PORT);