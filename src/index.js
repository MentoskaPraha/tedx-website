//libraries
const express = require('express');
const favicon = require('serve-favicon');
const projectsRouter = require('./projectRouter.js');
const log = require('./logger.js');

//create app
const app = express();

//add middleware
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use('/project', projectsRouter);

//add the routes for getting pages
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/pages/home.html');
    log.info("Responded to request for the Home page.");
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/pages/home.html');
    log.info("Responded to request for the Home page.");
});

app.get('/about-me', (req, res) => {
    res.sendFile(__dirname + '/public/pages/about-me.html');
    log.info("Responded to request for the About Me page.");
});

app.get('/social', (req, res) => {
    res.sendFile(__dirname + '/public/pages/social.html');
    log.info("Responded to request for the Social page.");
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
