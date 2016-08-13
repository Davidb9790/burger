var orm = require('../config/orm.js');

var burger = {
	all: function(callback) {
		orm.all('burgers', function(res){
			cb(res)
		});
	},
	create: function(newBurger,callback){
		//burger_name maps to newBurger, devoured maps to false
		orm.create('burgers',['burger_name', 'devoured'], [newBurger, false], callback);
	},
	update: function(id,callback){
		var condition = 'id =' + id;
		//key with property
		orm.update('burgers', {devoured : true}, condition, callback);
	}
};

module.exports = burger;