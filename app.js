//Set dependencies
const express = require('express');
const app = express();
const mime = require('mime');
const mysql = require('mysql');
var path = require('path');
require('dotenv').config();

//Set up static file access
app.use(express.static('public', {
  setHeaders: (res, path) => {
    res.setHeader('Content-Type', mime.getType(path));
  }
}));

app.use(express.static(__dirname + '/public'));

//Set up views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/scripts', (req, res, next) => {
  res.setHeader('Content-Type', 'text/javascript');
  next();
});

app.use(express.static('public'));

// Custom port for Heroku, cannot be changed
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);