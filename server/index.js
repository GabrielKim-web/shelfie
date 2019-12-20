const express = require('express');
const massive = require('massive');
const app = express();
const controller = require('./controller');
require('dotenv').config();

const {SERVER_PORT, CONNECTION_STRING} = process.env;


massive(CONNECTION_STRING).then(db => {
   app.set('db', db);
   console.log("Connected to database");
})
// app.use(package.json());

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));