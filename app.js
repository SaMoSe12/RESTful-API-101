var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

Genre = require('./models/genre/genre.js');

//Conectando a mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Please Use /api/books or /api/genres');
});
//TODO Aqui me quede, continuare mañana.
app.get('/api/genres' function(req, res){
Genre.getGenres(function(err, genres){
  if(err){
    throw err;
  }
  res.json(genre)
}
  });
});

app.listen(3000);
console.log('Activo en el puerto 3000');
