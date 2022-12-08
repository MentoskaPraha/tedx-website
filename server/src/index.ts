import express from "express";
import favicon from "serve-favicon";

import log from "./logger";


const server = express();
server.use(express.static(__dirname + "/public"));
server.use(favicon(__dirname + "/public/images/favicon.ico"));

server.get("*",(req, res) => {
    log.info("User requested main app.");
    res.sendFile(__dirname + "/public/index.html");
});

server.listen(process.env.WEBSITE_PORT || 8080, () => log.info("App listening on port " + process.env.WEBSITE_PORT || 8080));
