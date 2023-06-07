// Set dependencies
const express = require('express');
const app = express();
const mysql = require('mysql2/promise');
require('dotenv').config();

// Set up views and access
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/scripts', (req, res, next) => {
  res.setHeader('Content-Type', 'text/javascript');
  next();
});

app.use(express.static('public'));
app.use(express.static(__dirname + 'public'));

// Set up database connection

const createDatabaseConnection = async () => {
  const db = await mysql.createConnection({
    host: 'czmigm.stackhero-network.com',
    database: 'learnprosolution',
    user: 'root',
    password: 'rT1ZzmFpjZpMSOPLhH4ogUcnrbHdagP3'
  });

  return db;
};

// Set up receiving data from database
app.get('/', async (req, res) => {
  try {
    const db = await createDatabaseConnection();

    const [queryResult] = await db.query('SELECT asset_tag, assigned_to, DATE_FORMAT(date_bought, "%Y-%m-%d") AS formatted_date_bought, DATE_FORMAT(date_decommissioned, "%Y-%m-%d") AS formatted_date_decommissioned, device_type, operating_system FROM learnprosolution;');

    console.log(queryResult);
    await db.end();

    res.render('index.ejs', { data: queryResult }); // Pass the data to the template

  } catch (error) {
    console.error('');
    console.error('🐞 An error occurred!');
    console.error(error);
    process.exit(1);
  }
});

// Set up receiving data from index.ejs
app.post('/submit', async (req, res) => {
  try {
    const { assetTag, assignedTo, dateBought, dateDecommissioned, deviceType, operatingSystem } = req.body;

    const db = await createDatabaseConnection();
    // Insert the submitted data into the database
    await db.query('INSERT INTO learnprosolution (asset_tag, assigned_to, date_bought, date_decommissioned, device_type, operating_system) VALUES (?, ?, ?, ?, ?, ?)', [assetTag, assignedTo, dateBought, dateDecommissioned, deviceType, operatingSystem]);

    await db.end();

    // Redirect the user back to the homepage after submitting the data
    res.redirect('/');

  } catch (error) {
    console.error('');
    console.error('🐞 An error occurred while submitting the data!');
    console.error(error);
    res.status(500).send('An error occurred while submitting the data');
  }
});

// Delete an entry

app.post('/delete', async (req, res) => {
  try {
    const db = await createDatabaseConnection();

    const assetTag = req.body.assetTag;

    // Perform the delete operation
    const deleteQuery = 'DELETE FROM learnprosolution WHERE asset_tag = ?';
    const [deleteResult] = await db.query(deleteQuery, [assetTag]);

    console.log(deleteResult);

    await db.end();

    res.redirect('/'); // Redirect to the homepage after deletion

  } catch (error) {
    console.error('');
    console.error('🐞 An error occurred!');
    console.error(error);
    process.exit(1);
  }
});

// Custom port for Heroku, cannot be changed
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);