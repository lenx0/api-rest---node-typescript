"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../database"));
var personSchema = new database_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
    },
    lastname: {
        type: String,
        required: true,
        unique: false,
    },
    age: {
        type: String,
        required: true,
        unique: false,
    },
    job: {
        type: String,
        required: true,
        unique: false,
    },
    cpf: {
        type: String,
        required: true,
        unique: true,
    },
});
var PersonSchema = database_1.default.model("colperson", personSchema);
exports.default = PersonSchema;
