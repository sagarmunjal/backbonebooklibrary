var app = app || {};

app.LibraryView = Backbone.View.extend({
  initialize : function(initialCollection){
    // writing bare javscript related to templating below

    var template = _.template($("#booktemplate").html());
    $('#target').html(template({initialCollection}))


    console.log('libraryView initialized');
    this.render();
  },
  render: function(){

    console.log('libraryview rendering')
  }
})
