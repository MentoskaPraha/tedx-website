//libraries
const express = require('express');
const favicon = require('serve-favicon');

//get enviroment varriables into place
require('dotenv').config();

//create and configure app
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/Favicon.ico'));

//create route listen event
app.get("/", (req, res) => {
    //send file
    res.sendFile(__dirname + '/public/pages/home.html')
});

app.listen(process.env.PORT, () => console.log("App is now online."));
