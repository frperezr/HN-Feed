// Node Modules
const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const path = require('path');
const cors = require('cors');

// Custom Modules
const api = require('./routes/api');
const firstFetch = require('./utils');

// connect to the database and load models
require('./models').connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}${process.env.DB_HOST}`);
// Run fetch method
firstFetch();
// express
const app = express();
// tell the app to look for static files in these directories
app.use(express.static(path.resolve(__dirname, '../client/dist/')));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
// CORS
app.use(cors());
// API Routes
app.use('/api', api);
// handle get requests
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../client/dist/', 'index.html'));
});
// start the server
app.listen(process.env.PORT || 8080, () => {
  console.log('App is running on http://localhost:8080');
});
