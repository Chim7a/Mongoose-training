import mongoose from "mongoose";
import "dotenv/config";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const User = new mongoose.model("Users", userSchema);

async function addUser(params) {
  const createdUser = await User.create({ name: "Chima", age: 52 });
  console.log(createdUser);
}

// Connecting to Mongo database.
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_KEY);
    console.log("Database connection successful");
    addUser();
  } catch (error) {
    console.log(err);
    console.log("An error occured");
  }
}

connectDB();
