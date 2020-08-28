// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL


// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
  });
};


// Connect to 'burgers_db' database created in MySQL
connection.connect(function(err) {
  if(err)throw err;
  console.log("connected as id: " + connection.threadId);
});

// Export connection
module.exports = connection;

