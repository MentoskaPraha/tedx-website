//libraries
const express = require('express');
const favicon = require('serve-favicon');

//get enviroment varriables into place
require('dotenv').config();

//create and configure app
const app = express();
const projects = require('./projectsRouter');
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/Favicon.ico'));
app.use('/project', projects);

//url corrections
app.use(function(req, res, next) {
    next();
 });
 
//create route listen event
app.get("/", (req, res) => {
    //send file
    res.sendFile(__dirname + '/public/pages/homePage.html')
});

//create home page listen event
app.get("/home", (req, res) => {
    //send file
    res.sendFile(__dirname + '/public/pages/homePage.html')
});

//create about me page listen event
app.get("/about-me", (req, res) => {
    //send file
    res.sendFile(__dirname + '/public/pages/aboutMePage.html')
});

//create social listen event
app.get("/social", (req, res) => {
    //send file
    res.sendFile(__dirname + '/public/pages/socialPage.html')
});

app.listen(process.env.PORT, () => console.log("App is now online."));
