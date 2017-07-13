var app = app || {};

app.LibraryView = Backbone.View.extend({
  el : '#books',
  events : {
    'click #add' : 'addBook',

  },
  addBook : function(e){
    e.preventDefault()
    var formData = {};
    $('#books form').children('input').each(
      function(i,el){
        if($(el).val() !== ''){
          console.log(formData)
          formData[el.id] = $(el).val();
        }
      });
      this.collection.create(formData);
  },
  initialize : function(){
    this.collection = new app.LibraryCollection();
    this.collection.fetch({reset:true});
    this.render();

    this.listenTo(this.collection,'add',this.renderBook);
    this.listenTo(this.collection,'reset',this.render);
  },
  render: function(i){
    this.collection.each(function(i){
        this.renderBook(i);
    },this)
    console.log('libraryview rendering')

  },
  renderBook: function(i){
    console.log('renderBook invoked')
    var bookView = new app.BookView({
      model : i
    });
    this.$el.append(bookView.render().el)

  }
})
