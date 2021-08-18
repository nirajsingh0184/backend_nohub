const express=require('express');
const app=express();
const router=require("./routes")
const bodyParser = require('body-parser');
var mysql = require('mysql2');

app.use(bodyParser.json());

app.use('/',router);
app.use('/static/',express.static('public'));
app.use('/g1.png',express.static('public/g1.png'));
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

  app.listen(3000,()=>
  {
    console.log("sever has started");
  });