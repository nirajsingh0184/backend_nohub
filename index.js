const express=require('express');
const app=express();
const router=require("./routes")
//const middleware=require("./middleware")

//const bodyParser = require('body-parser');
//var mysql = require('mysql2');

//app.use(bodyParser.text());
//app.use(middleware)
app.use('/',router);
// app.use('/static/',express.static('public'));
// app.use('/g1.png',express.static('public/g1.png'));


  app.listen(3000,()=>
  {
    console.log("sever has started");
  });