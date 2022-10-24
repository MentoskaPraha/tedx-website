//libraries
const express = require('express');
const favicon = require('serve-favicon');
const log = require('./logger.js');

//configure enviroment variables
require('dotenv').config();

//create app
const app = express();

//add stuff to be used by the app
app.use(express.static('public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

//add the routes for getting pages
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/pages/home.html');
    log.info("Responded to request for the Home page.");
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/pages/home.html');
    log.info("Responded to request for the Home page.");
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/pages/err_404.html');
    log.warn("User requested invalid page.");
});

//start listening on the port set by enviroment variables or on port 8080 as backup
app.listen(process.env.PORT || 8080, () => {
    log.info("App listening on port " + (process.env.PORT || 8080) + ".");
});
