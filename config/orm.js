//selectAll()
//insertOne()
//updateOne()

var connection = require('./connection.js');

var orm = {
	selectAll: function(tableName, callback){
		var getAll = 'SELECT * FROM '+ tableName;
		connection.query(getAll, function(err, result){
			if (err) throw err;
			callback(result);
		});
	},
	
	insertOne: function(newBurger){
		var newOne = 'INSERT INTO burgers (burger_name) VALUES ?', newBurger;
		connection.query(newOne, function(err,result){
			if (err) throw err;
			console.log(result);
		});

	},

	updateOne: function(changeData, id){
		var update = 'UPDATE '+ changeData + 'SET devoured=1 WHERE id='+ id;
		connection.query(update, function(err, result){
			if (err) {
				throw err
			}
			console.log(result);
		});
	}
}//last one 


// orm.selectAll() = function(){

// }



// var connection=require('./connection.js');

// var orm={
//     selectAll: function(tableInput,cb){
//         var s='SELECT * FROM '+tableInput+';';
//         connection.query(s,function(err,result){
//             cb(result);})},

//     insertData: function(tableInput,name,cb){ 
//         var s='INSERT INTO '+tableInput+' (burger_name) VALUES ("'+ name +'")';
//         connection.query(s,function(err,result){
//             cb(result);})},

//     changeData: function(tableInput,id,cb){
//         var s='UPDATE '+tableInput+' SET devoured=1 WHERE id='+id+';';
//         connection.query(s,function(err,result){
//             console.log(result);
//             cb(result);})}};
    
module.exports=orm;