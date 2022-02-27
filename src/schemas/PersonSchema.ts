import { isValidObjectId } from "mongoose";
import mongoose from "../database";

const personSchema = new mongoose.Schema(
    {

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

    }

);

const PersonSchema = mongoose.model("colperson", personSchema);

export default PersonSchema;