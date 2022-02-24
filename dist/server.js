"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
require('dotenv').config();
var host_port = process.env.HOST_PORT || 3001;
var fs = require('fs');
var http = require('http');
var httpServer = http.createServer(app_1.app);
httpServer.listen(host_port);
