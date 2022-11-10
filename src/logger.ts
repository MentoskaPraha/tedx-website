//get libraries
import pino from "pino";

//create logger
const logger = pino({transport: {target: "pino-pretty",options: {colorize: true}}});

//export logger
export = logger;
