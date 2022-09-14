//libraries
const express = require('express');
const path = require('path');

//get enviroment varriables into place
require('dotenv').config();

//create and configure app
const app = express();
app.use(express.static(__dirname + '/public'));

//create route listen event
app.get("/", (req, res) => {
    //send file
    res.sendFile(__dirname + '/public/pages/home.html');

    //log request
    console.log('User requested the home page.');
});

app.listen(process.env.PORT, () => console.log("App is now online."));
