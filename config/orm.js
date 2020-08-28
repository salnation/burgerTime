// orm.all - this collects all the data from our newly created DATABASE

// will be creating a connection query that will select everything from the table input

var connection = require('./connection.js');

//uses a callback to pass the result into the next file in the models folder
// tableInput
var orm = {
  all: function(tableInput, cb) {
    connection.query('SELECT * FROM ' +tableInput+';', function(err,result){
      if(err) throw err;
      cb(result)
    })
  },