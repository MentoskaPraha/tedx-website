//libraries
import pino from "pino";

//create logger
const logger = pino({transport: {
    target: "pino-pretty", 
    options: {
        colorize: true, 
        sync: true
    }}
});

//export logger
export = logger;
