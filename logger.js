//get libraries
const pino = require('pino');
const pretty = require('pino-pretty');

//create logger
const logger = pino({level:'info'}, pretty({colorize: true, sync: true}));

//export logger
module.exports = logger;
