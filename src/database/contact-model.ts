import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  created_at: Date,
});

export const Contact = mongoose.model("Contact", contactSchema);
