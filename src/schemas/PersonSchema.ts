import mongoose from "../database";

const personSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true,
        },

        nome: {
            type: String,
            required: true,
            unique: false,
        },
        sobrenome: {
            type: String,
            required: true,
            unique: false,
        },
        idade: {
            type: String,
            required: true,
            unique: false,
        },
        profissao: {
            type: String,
            required: true,
            unique: false,
        }

    }

);

const PersonSchema = mongoose.model("colclientes", personSchema);

export default PersonSchema;