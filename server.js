var app_root = __dirname,
  express = require('express'),
  bodyparser = require('body-parser'),
  path = require('path'),
  mongoose = require('mongoose');



var app = express();

app.use(express.static(path.join(app_root,'site')));
app.use(express.static("node_modules"));
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

var port = 4711;

app.listen(port,function(){
  console.log('server started at port '+ port)
})
