"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const dbConnection_1 = require("./dbConnection");
var port = 3100;
const server = http.createServer((req, res) => {
    res.write("Hello This is my first time using Node Js");
    res.end();
});
dbConnection_1.dbConnection();
server.listen(port, () => {
    console.log(`Server Is Running On Port ${port}`);
});
