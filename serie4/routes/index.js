const express = require('express');
const app = express();

app.use(require('./hello'));

module.exports = app;