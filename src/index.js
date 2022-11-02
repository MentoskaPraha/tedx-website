//libraries
const express = require('express');
const favicon = require('serve-favicon');
const log = require('./logger.js');

//create app
const app = express();

//add stuff to be used by the app
app.use(express.static(__dirname + '/public'));
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

app.get('/err_404', (req, res) => {
    res.sendFile(__dirname + '/public/pages/err_404.html');
    log.info("Responded to request for the Error_404 page.");
});

app.get('*', (req, res) => {
    res.redirect('/err_404');
    log.warn("User requested invalid page.");
});

//start listening on the port set by enviroment variables
app.listen(process.env.WEBSITE_PORT, () => {
    log.info("App listening on port " + (process.env.WEBSITE_PORT || "was not found") + ".");
});
