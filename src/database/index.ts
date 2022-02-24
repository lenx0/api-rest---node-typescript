import mongoose from "mongoose";

require('dotenv').config(); //duvida

const connectString = process.env.MONGO_URI as string;

mongoose.connect(connectString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

export default mongoose;