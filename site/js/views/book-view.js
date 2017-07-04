var app = app || {};

app.BookView = Backbone.View.extend({
  initilize : function(){
    console.log('bookView initialized');
    render();
  },
  render: function(){
    var template = _.template($("#booktemplate").html());
    $("#target").append(template({data:data}));
  }

})
