"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PersonRouter_1 = __importDefault(require("./PersonRouter"));
var routers = express_1.Router();
routers.use('/person', PersonRouter_1.default);
exports.default = routers;
