//libraries
const fs = require('node:fs');
const express = require('express');
const router = express.Router();
const log = require('./logger.js');

//add main route
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/pages/projects.html');
    log.info("Responded to request for the Projects page.");
});

//for each project page create a route
const projects = fs.readdirSync(__dirname + '/public/projects').filter(file => file.endsWith('.html') && !file.startsWith('_'));

projects.forEach(project => {
    const projectName = project.split(".")[0];
    router.get(`/${projectName}`, (req, res) => {
        res.sendFile(__dirname + '/public/pages/specificProject.html');
        log.info(`Responded to request for the project "${projectName}" page.`);
    });
});

//export the logger
module.exports = router;
