const express=require('express');
const app=express();
const router=require("./routes")
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/',router);
//app.use('/static/',express.static('public'));
app.use('/g1.png',express.static('public/g1.png'));
  app.listen(3000);