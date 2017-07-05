var app = app || {};

app.LibraryView = Backbone.View.extend({
  el : '#books',
  initialize : function(initialCollection){
    console.log('libraryView initialized');
    this.collection = new app.LibraryCollection(initialCollection);
    this.render(initialCollection);
  },
  render: function(i){

    console.log('libraryview rendering')
    this.renderBook(i);
  },
  renderBook: function(i){
    console.log('renderBook invoked')
    var bookView = new app.BookView({
      model : i
    });
    this.$el.append(bookView.render().el)

  }
})
