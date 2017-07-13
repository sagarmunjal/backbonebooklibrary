var app = app || {};

app.LibraryCollection = Backbone.Collection.extend({
  model : app.BookModel,
  url:'/api/books'
})
