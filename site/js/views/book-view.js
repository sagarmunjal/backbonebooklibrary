var app = app || {};

app.BookView = Backbone.View.extend({
  initialize : function(){
    console.log('bookView initialized');
    this.render();
  },
  render: function(){
    console.log("bookView rendering started")
  }

})
