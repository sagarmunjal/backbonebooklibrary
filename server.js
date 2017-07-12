var app_root = __dirname,
  express = require('express'),
  bodyparser = require('body-parser'),
  path = require('path'),
  mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/library_database");

//schema
var myBookSchema = new mongoose.Schema({
  title : String,
  author : String,
  releaseDate : Date
});


//models
var BookModelDB = mongoose.model('BookModel',myBookSchema);

var app = express();
app.use(express.static(path.join(app_root,'site')));
app.use(express.static("node_modules"));
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

// get all books
app.get('/api/books',function(request,response){
  return BookModelDB.find(function(err,books){
    if(!err){
      return response.send(books);
    }else{
      return console.log(err);
    }
  })
})

// add a new book

app.post('/api/books',function(request,response){
  var book = new BookModelDB({
    title:request.body.title,
    author:request.body.author,
    releaseDate:request.body.releaseDate
  });
  return book.save(function(err){
    if(!err){
      console.log('new book added');
      return response.send(book);
    }else{
      console.log(err);
    }
  })
})

var port = 4711;

app.listen(port,function(){
  console.log('server started at port '+ port)
})
