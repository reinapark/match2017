var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/login', function(request, response) {
  response.render('pages/login');
});

app.get('/flot', function(request, response) {
  response.render('pages/flot');
});

app.get('/db', function(request, response) {
  response.render('pages/db');
});

app.get('/new', function(request, response) {
  response.render('pages/new');
});

app.get('/tables', function(request, response) {
  response.render('pages/tables');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
