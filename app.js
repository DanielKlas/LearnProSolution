const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs');
});

// Custom port for Heroku, cannot be changed
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);