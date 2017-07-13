var app = app || {};

app.LibraryView = Backbone.View.extend({
  el : '#books',
  events : {
    'click #add' : 'addBook',

  },
  addBook : function(e){
    e.preventDefault()
    var formData = {};
    console.log($('#books div').children('input'));
    $('#books form').children('input').each(
      function(i,el){
        console.log('imhere')
        if($(el).val() !== ''){
          console.log(formData)
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
