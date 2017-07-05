var app = app || {};

app.LibraryView = Backbone.View.extend({
  el : '#books',
  events : {'click #add' : 'addBook'},
  addBook : function(e){
    e.preventDefault()
    var formData = {};
    $('#addBook div').children('input').each(
      function(i,el){
        if($(el).val() !== ''){
          formData[el.id] = $(el).val();
        }
      });
      this.collection.add(new app.BookModel(formData));
  },
  initialize : function(initialCollection){
    console.log('libraryView initialized');
    this.collection = new app.LibraryCollection(initialCollection);
    this.render(initialCollection);
    this.listenTo(this.collection,'add',this.renderBook)
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
