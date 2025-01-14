import mongoose from "mongoose";

export const bootstrap = async (db: string) => {
  try {
    await mongoose.connect(db);
    console.info("Connected to DB 🌱");
  } catch (error) {
    console.error("Error connecting to DB", error);
  }
};
