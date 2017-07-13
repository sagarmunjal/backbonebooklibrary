var app = app || {};

app.BookModel = Backbone.Model.extend({
  default : {
    title: 'Title',
    releaseDate: 'Release Date',
    author: 'Authors name',
    pages: 'XX',
    openSource: false
  },
  parse : function(response){
    response.id = response._id;
    return response;
  }
});
