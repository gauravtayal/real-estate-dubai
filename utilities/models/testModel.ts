import mongoose, { Schema, model, models } from "mongoose";

const testSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Test = model("Test", testSchema);
