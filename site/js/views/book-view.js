var app = app || {};

app.BookView = Backbone.View.extend({
  tagname:'div',
  class: 'target',
  template : _.template($("#booktemplate").html()),
  events : {
    "click .delete" : "deleteBook"
  },
  deleteBook : function(){
    
    this.model.destroy();
    this.remove();
  },
  initialize : function(){
    console.log('bookView initialized');
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    console.log("bookView rendering started");
    return this;
  }

})
