const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection successful");
  } catch (err) {
    console.error(" MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectionDB;
