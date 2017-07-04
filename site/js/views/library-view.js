var app = app || {};

app.LibraryView = Backbone.View.extend({
  el : '#target',
  template : _.template($("#booktemplate").html()),
  initialize : function(initialCollection){
    console.log('libraryView initialized');
    this.render();
  },
  render: function(i){
    this.$el.html(this.template({i}));
    console.log('libraryview rendering')
    this.renderBook();
  },
  renderBook: function(){

    new app.BookView({});

  }
})
