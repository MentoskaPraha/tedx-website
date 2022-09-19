const express = require('express');
const router = express.Router();
const favicon = require('serve-favicon');

// middleware that is specific to this router
router.use((req, res, next) => {
    favicon(__dirname + '/public/images/favicon.ico');
    if (req.url === '/projects') {
        req.url = '/projects';
    }
    next();
});

// define the home page route
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/pages/projectPage.html');
});

// define the about route
router.get('/about', (req, res) => {
    res.send('Placeholder Page.');
});

module.exports = router;
