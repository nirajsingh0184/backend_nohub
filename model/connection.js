
const mysql = require('../todo.js/mysql2');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'rootuser',
    password:'ILoveApp',
    database: 'Instagram'
  });
  
  connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
  });

  module.exports=connection