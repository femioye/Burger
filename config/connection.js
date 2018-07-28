const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});


connection.connect(function (err) {
  if (err) {
    console.error("error");
    return;
  }
  console.log("connected to the database with id " + connection.threadId);
});

module.exports = connection;