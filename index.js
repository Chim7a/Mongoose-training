import mongoose from "mongoose";
import "dotenv/config";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_KEY);
  } catch (error) {
    console.log(err);
    console.log("An error occured");
  }
}
