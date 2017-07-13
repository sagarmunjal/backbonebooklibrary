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
});

// get request to get a single book

app.get('/api/books/:id',function(request,response){
  console.log('requested for a book');
  return BookModelDB.findById(request.params._id,function(err,book){
    console.log(request.params.id)
    if(!err){
      return response.send(book);
    }else{
      console.log(err);
    }

  })
});

// put request to update existing books

app.put('/api/books/:id',function(request,response){
  console.log('updating books' + request.body.title);
  return BookModelDB.findById(request.params.id,function(err,book){
    book.title = request.body.title;
    book.author = request.body.author;
    book.releaseDate = request.body.releaseDate;

    return book.save(function(err){
      if(!err){
        console.log('book updated');
        return response.send(book);
      }else{
        console.log(err);
      }
    })
  })
});

// delete a book from the book library

app.delete('/api/books/:id',function(request,response){
  console.log('Deleted' + request.body.title);
  return BookModelDB.findById(request.params.id,function(err,book){
    return book.remove(function(err){
      if(!err){
        console.log('book deleted!!')
      }else{
        console.log(err);
      }
    })
  })
})

var port = 4711;

app.listen(port,function(){
  console.log('server started at port '+ port)
})
