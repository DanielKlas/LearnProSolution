const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs');
});

// Make sure the app is listening on the correct port

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);