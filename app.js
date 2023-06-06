//Set dependencies
const express = require('express');
const app = express();
const { Client } = require('pg');
const mysql = require('mysql');
var path = require('path');
require('dotenv').config();

app.use(express.static(__dirname + 'public'));

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

// Databasse connection

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});