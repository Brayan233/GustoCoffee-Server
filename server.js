var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mysql      = require('mysql'),
  connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'gustocoffee'
}),
bodyParser = require('body-parser');

connection.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/userRoutes'); //importing route
routes(app);

app.listen(port);

console.log('GustoCoffee RESTful API server started on: ' + port);