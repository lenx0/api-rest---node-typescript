"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PersonController_1 = __importDefault(require("../controllers/PersonController"));
var personRouter = express_1.Router();
var personController = new PersonController_1.default();
personRouter.post("/", personController.create);
personRouter.post("/", personController.find);
personRouter.get("/search/:id", personController.findById);
personRouter.delete("/:id", personController.delete);
personRouter.put("/:id", personController.update);
exports.default = personRouter;
