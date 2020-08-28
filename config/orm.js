// Here is the orm.js where you write functions that takes inputs and conditions and turn them into database commands like SQL.

// orm.all - this collects all the data from our newly created DATABASE

// will be creating a connection query that will select everything from the table input

var connection = require('./connection.js');

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

//uses a callback to pass the result into the next file in the models folder
// tableInput
var orm = {
  all: function(tableInput, cb) {
    connection.query('SELECT * FROM ' +tableInput+';', function(err,result){
      if(err) throw err;
      cb(result)
    })
  },

  // 'update:' method addition 

  update: function(tableInput, condition, cb){
    connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';', function(err,result){
        if(err)throw err;
        cb(result);
      })
    },
  
    create: function(tableInput,val,cb){
      connection.query('INSERT INTO '+tableInput+"(burger_name) VALUES ('"+val+"');", function(err,result){
        if(err)throw err;
        cb(result);
      })
    }
  }
  
  module.exports = orm;