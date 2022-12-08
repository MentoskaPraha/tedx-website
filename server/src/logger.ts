import pino from "pino";
import pretty from "pino-pretty";

const logger = pino(pretty({
    colorize: true,
    sync: true,
}));

export = logger;
