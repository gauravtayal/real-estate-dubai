// getting-started.js
import mongoose from "mongoose";

export const connectMongo = async () => mongoose.connect(process.env.uri!);
