

var data = [{ title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', releaseDate: '2008', keywords: 'JavaScript Programming' },
{ title: 'The Little Book on CoffeeScript', author: 'Alex MacCaw', releaseDate: '2012', keywords: 'CoffeeScript Programming' },
{ title: 'Scala for the Impatient', author: 'Cay S. Horstmann', releaseDate: '2012', keywords: 'Scala Programming' },
{ title: 'American Psycho', author: 'Bret Easton Ellis', releaseDate: '1991', keywords: 'Novel Splatter' },
{ title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', releaseDate: '2011', keywords: 'JavaScript Programming' }];

console.log('initialized',data[0].title)
// first method
// var template = _.template($("#booktemplate").html());
//
// $("#bookContainer").append(template({data:data}));

var template = _.template($("#booktemplate").html());
$("#target").append(template({data:data}));

 //$("#bookContainer").html(_.template(_.template($("#booktemplate").html()),{data:data}));
