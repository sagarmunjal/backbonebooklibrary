var app = app || {};

app.LibraryView = Backbone.View.extend({
  initialize : function(){
    console.log('libraryView initialized');
    this.render();
  },
  render: function(){
    console.log('libraryview rendering')
  }
})
