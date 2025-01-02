import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect("DB_URL:", process.env.DB_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};

export default connectDB;
