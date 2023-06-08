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

    console.log("Database connected!");
    await db.end();

    res.render('index.ejs', { data: queryResult });

  } catch (error) {
    console.error('');
    console.error('🐞 An error occurred!');
    console.error(error);
    process.exit(1);
  }
});

app.post('/submit', async (req, res) => {
  try {
    var formData = req.body;

    //Enable null values
    if(formData.assignedTo === '')
    {
      formData.assignedTo = null;
    }

    if(formData.dateDecommissioned === '')
    {
      formData.dateDecommissioned = null;
    }

    const assetTagPattern = /^[a-zA-Z]+-[a-zA-Z]+-\d+$/;
    if (!formData.assetTag.match(assetTagPattern)) {
      res.status(200).send("Invalid asset tag format, please use the Location-DeviceType-00 format.");
    }

    const db = await createDatabaseConnection();

    const [existingRecord] = await db.query('SELECT * FROM learnprosolution WHERE asset_tag = ?', [formData.assetTag]);

    if (existingRecord.length > 0) {
      await db.query('UPDATE learnprosolution SET assigned_to = ?, date_bought = ?, date_decommissioned = ?, device_type = ?, operating_system = ? WHERE asset_tag = ?', [formData.assignedTo, formData.dateBought, formData.dateDecommissioned, formData.deviceType, formData.operatingSystem, formData.assetTag]);;
    } else {
      await db.query('INSERT INTO learnprosolution (asset_tag, assigned_to, date_bought, date_decommissioned, device_type, operating_system) VALUES (?, ?, ?, ?, ?, ?)', [formData.assetTag, formData.assignedTo, formData.dateBought, formData.dateDecommissioned, formData.deviceType, formData.operatingSystem]);
    }

    res.redirect('/');

  } catch (error) {
    console.error('');
    console.error('🐞 An error occurred while submitting the data!');
    console.error(error);
    res.status(500).send('An error occurred while submitting the data');
  }
});

//Delete database entry
app.post('/delete', async (req, res) => {
  try {
    const assetTag = req.body.assetTag;

    const db = await createDatabaseConnection();

    await db.query('DELETE FROM learnprosolution WHERE asset_tag = ?',[assetTag]);
    await db.end();

    res.redirect('/');

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